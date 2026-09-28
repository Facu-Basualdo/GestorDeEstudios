'use client';

import { Button, Card, Checkbox, Separator, Typography } from '@heroui/react';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import type { Flashcard, IrATeoria, Materia, Nota, Tema } from '@/lib/tipos';
import { filtrarPorTema, guardado, hash, mezclar, porPeso, type Filtro } from '@/lib/util';
import { FiltroTemas, PanelSesion, Peso, Progreso, Rico, filasPorTema } from './piezas';

type Tarjeta = Flashcard & { tema: Tema; clave: string };
/** `vista`: ya se mostró la respuesta de la tarjeta actual (se puede volver a la pregunta y calificar igual). */
type Sesion = { mazo: Tarjeta[]; i: number; girada: boolean; vista: boolean; notas: (Nota | undefined)[] };
type Opciones = { filtro: Filtro; mezclado: boolean; soloFalladas: boolean };

const fallada = (n: Nota | undefined) => n === 0 || n === 1;

const LEYENDA = (
  <>
    <b className="font-medium text-success">1</b> la sabía · <b className="font-medium text-warning">X</b> dudé ·{' '}
    <b className="font-medium text-danger">0</b> no la sabía
  </>
);

export function Flashcards({ materia, activo, historial, onCalificar, irATeoria, pedido }: {
  materia: Materia;
  activo: boolean;
  historial: Record<string, Nota>;
  onCalificar: (clave: string, nota: Nota) => void;
  irATeoria: IrATeoria;
  /** "Practicar este tema" desde la teoría. */
  pedido: { tema: string; n: number } | null;
}) {
  const todas = useMemo<Tarjeta[]>(
    () => porPeso(materia.temas).flatMap((t) => t.flashcards.map((c) => ({ ...c, tema: t, clave: `${t.id}:${hash(c.q)}` }))),
    [materia],
  );
  const [opciones, setOpciones] = useState<Opciones>({ filtro: 'todos', mezclado: false, soloFalladas: false });
  const [sesion, setSesion] = useState<Sesion>({ mazo: todas, i: 0, girada: false, vista: false, notas: [] });

  const armar = useCallback(
    (o: Opciones, lista?: Tarjeta[]) => {
      setOpciones(o);
      let mazo = lista ?? filtrarPorTema(todas, o.filtro);
      if (!lista && o.soloFalladas) mazo = mazo.filter((c) => fallada(historial[c.clave]));
      if (!lista && o.mezclado) mazo = mezclar(mazo);
      setSesion({ mazo, i: 0, girada: false, vista: false, notas: [] });
    },
    [todas, historial],
  );

  const cambiar = (parcial: Partial<Opciones>) => {
    const o = { ...opciones, ...parcial };
    guardado.escribir('filtro-fc', o.filtro);
    guardado.escribir('mezclar', o.mezclado);
    armar(o);
  };

  // Al abrir (o cambiar de materia) se recuperan los filtros de la última vez.
  useEffect(() => {
    const filtro = guardado.leer<Filtro>('filtro-fc', 'todos');
    const valido = filtro === 'todos' || filtro === 'p3' || materia.temas.some((t) => t.id === filtro);
    armar({ filtro: valido ? filtro : 'todos', mezclado: guardado.leer('mezclar', false), soloFalladas: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materia.id]);

  useEffect(() => {
    if (pedido) armar({ ...opciones, filtro: pedido.tema, soloFalladas: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pedido?.n]);

  const { mazo, i, girada, vista, notas } = sesion;
  const actual = mazo[i];
  // Da vuelta la tarjeta en los dos sentidos: se puede volver a leer la pregunta.
  const girar = useCallback(
    () => setSesion((s) => (s.i < s.mazo.length ? { ...s, girada: !s.girada, vista: true } : s)),
    [],
  );
  const mover = useCallback(
    (delta: number) => setSesion((s) => ({ ...s, i: Math.max(0, s.i + delta), girada: false, vista: false })),
    [],
  );
  const calificar = useCallback(
    (nota: Nota) => {
      if (!actual || !vista) return;
      onCalificar(actual.clave, nota);
      setSesion((s) => {
        const n = [...s.notas];
        n[s.i] = nota;
        return { ...s, notas: n, i: s.i + 1, girada: false, vista: false };
      });
    },
    [actual, vista, onCalificar],
  );

  useEffect(() => {
    if (!activo) return;
    const alTeclear = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || !actual) return;
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, select, [role="listbox"], [role="combobox"]')) return;
      const enBoton = t.tagName === 'BUTTON';
      if ((e.key === ' ' || e.key === 'Enter') && !enBoton) {
        e.preventDefault();
        girar();
      } else if (['1', '2', '3'].includes(e.key) && vista) calificar((Number(e.key) - 1) as Nota);
      else if (e.key === 'ArrowRight') mover(1);
      else if (e.key === 'ArrowLeft' && i > 0) mover(-1);
    };
    window.addEventListener('keydown', alTeclear);
    return () => window.removeEventListener('keydown', alTeclear);
  }, [activo, actual, vista, i, girar, calificar, mover]);

  const nFalladas = filtrarPorTema(todas, opciones.filtro).filter((c) => fallada(historial[c.clave])).length;
  const estados = Array.from({ length: mazo.length }, (_, k) => notas[k]);
  const cuenta = (v: Nota) => notas.filter((x) => x === v).length;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-5">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <FiltroTemas
          materia={materia}
          valor={opciones.filtro}
          onCambio={(filtro) => cambiar({ filtro })}
          contar={(ts) => ts.reduce((n, t) => n + t.flashcards.length, 0)}
          etiqueta="Temas de las flashcards"
        />
        <Checkbox isSelected={opciones.mezclado} onChange={(mezclado: boolean) => cambiar({ mezclado })}>
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            Mezclar
          </Checkbox.Content>
        </Checkbox>
        <Checkbox isSelected={opciones.soloFalladas} onChange={(soloFalladas: boolean) => cambiar({ soloFalladas })}>
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            Sólo las que fallé{nFalladas ? <span className="font-mono text-muted"> ({nFalladas})</span> : null}
          </Checkbox.Content>
        </Checkbox>
        <Button variant="ghost" size="sm" className="sm:ml-auto" onPress={() => armar(opciones)}>
          Empezar de nuevo
        </Button>
      </div>

      {mazo.length === 0 ? (
        <Typography color="muted">
          No hay tarjetas con este filtro.
          {opciones.soloFalladas ? ' Todavía no marcaste ninguna como "No la sabía" o "Dudé".' : ''}
        </Typography>
      ) : !actual ? (
        <Resumen
          mazo={mazo}
          notas={notas}
          estados={estados}
          onRepasar={(lista) => armar(opciones, lista)}
          onReiniciar={() => armar(opciones)}
          irATeoria={irATeoria}
        />
      ) : (
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:gap-8">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-5">
              <Progreso
                estados={estados}
                actual={i}
                cifras={`Tarjeta ${i + 1} de ${mazo.length} · ${cuenta(2)} sabidas · ${cuenta(1)} dudadas · ${cuenta(0)} no`}
                leyenda={LEYENDA}
              />

              {/* key = índice: cada tarjeta es un elemento nuevo, así no se ve la respuesta
                  de la siguiente mientras la anterior se da vuelta. */}
              <div key={`${i}-${mazo.length}`} className="carta entra" data-girada={girada}>
                <div className="carta-in">
                  <Card
                    className="cara frente min-h-[min(46vh,400px)] cursor-pointer select-none p-6 sm:p-10"
                    role="button"
                    tabIndex={girada ? -1 : 0}
                    aria-hidden={girada}
                    aria-label={vista ? 'Pregunta. Tocá para volver a la respuesta' : 'Pregunta. Tocá para ver la respuesta'}
                    onClick={girar}
                  >
                    <Card.Header className="flex-row items-baseline justify-between gap-3">
                      <span className="etiqueta truncate">{actual.tema.titulo}</span>
                      <Peso peso={actual.tema.peso} />
                    </Card.Header>
                    <Card.Content className="flex flex-1 flex-col justify-center">
                      <Typography className="font-titulo text-[clamp(1.35rem,3.3vw,1.9rem)] font-semibold leading-tight text-balance">
                        <Rico html={actual.q} />
                      </Typography>
                    </Card.Content>
                    <Card.Footer>
                      <Typography type="body-xs" color="muted" className="font-mono">
                        Tocá la tarjeta para {vista ? 'volver a la respuesta' : 'ver la respuesta'}<span className="solo-teclado"> · Espacio</span>
                      </Typography>
                    </Card.Footer>
                  </Card>

                  <Card
                    className="cara dorso min-h-[min(46vh,400px)] cursor-pointer p-6 sm:p-10"
                    aria-hidden={!girada}
                    onClick={(e) => {
                      // Los botones y enlaces del dorso (por ejemplo, "Leer la teoría") no dan vuelta la tarjeta.
                      if (!(e.target as HTMLElement).closest('button, a')) girar();
                    }}
                  >
                    <Card.Header className="flex-row items-baseline justify-between gap-3">
                      <span className="etiqueta truncate">{actual.tema.titulo}</span>
                      <span className="etiqueta">Respuesta</span>
                    </Card.Header>
                    <Card.Content className="grid gap-4">
                      <Typography type="body-sm" color="muted" weight="medium">
                        <Rico html={actual.q} />
                      </Typography>
                      <Typography className="text-[clamp(1.1rem,2.4vw,1.3rem)] leading-relaxed">
                        <Rico html={actual.a} />
                      </Typography>
                    </Card.Content>
                    <Card.Footer className="mt-auto flex-wrap items-center justify-between gap-2">
                      <EnlaceTeoria tema={actual.tema} ancla={actual.ref} irATeoria={irATeoria} />
                      <Typography type="body-xs" color="muted" className="font-mono">
                        Tocá la tarjeta para volver a la pregunta<span className="solo-teclado"> · Espacio</span>
                      </Typography>
                    </Card.Footer>
                  </Card>
                </div>
              </div>

              {vista ? (
                <div className="grid grid-cols-3 gap-2 sm:gap-3" role="group" aria-label="¿La sabías?">
                  <BotonNota nota={0} texto="No la sabía" clase="text-danger" onPress={calificar} />
                  <BotonNota nota={1} texto="Dudé" clase="text-warning" onPress={calificar} />
                  <BotonNota nota={2} texto="La sabía" clase="text-success" onPress={calificar} />
                </div>
              ) : (
                <Button fullWidth size="lg" onPress={girar}>
                  Ver respuesta
                </Button>
              )}

              <div className="flex justify-between">
                <Button variant="ghost" size="sm" isDisabled={i === 0} onPress={() => mover(-1)}>
                  ← Anterior
                </Button>
                <Button variant="ghost" size="sm" onPress={() => mover(1)}>
                  Saltar →
                </Button>
              </div>
          </div>
          <PanelSesion
            filas={filasPorTema(mazo, (k) => notas[k])}
            atajos={[[['Espacio'], 'Dar vuelta la tarjeta'], [['1', '2', '3'], 'No la sabía · Dudé · La sabía'], [['←', '→'], 'Anterior · Saltar']]}
          />
        </div>
      )}
    </div>
  );
}

function BotonNota({ nota, texto, clase, onPress }: { nota: Nota; texto: string; clase: string; onPress: (n: Nota) => void }) {
  return (
    <Button variant="outline" size="lg" className={`h-auto w-full flex-col gap-0.5 py-3 font-semibold ${clase}`} onPress={() => onPress(nota)}>
      {texto}
      <span className="solo-teclado font-mono text-[11px] font-normal text-muted">{nota + 1}</span>
    </Button>
  );
}

export function EnlaceTeoria({ tema, ancla, irATeoria }: { tema: Tema; ancla: string; irATeoria: IrATeoria }) {
  const seccion = tema.secciones.find((s) => s.id === ancla)?.titulo;
  return (
    <Button variant="ghost" size="sm" className="-ml-3 text-link" onPress={() => irATeoria('nota', tema.id, ancla)}>
      Leer la teoría{seccion ? `: ${seccion}` : ''} →
    </Button>
  );
}

function Resumen({ mazo, notas, estados, onRepasar, onReiniciar, irATeoria }: {
  mazo: Tarjeta[];
  notas: (Nota | undefined)[];
  estados: (number | undefined)[];
  onRepasar: (lista: Tarjeta[]) => void;
  onReiniciar: () => void;
  irATeoria: IrATeoria;
}) {
  const cuenta = (v: Nota) => notas.filter((x) => x === v).length;
  const falladas = mazo.filter((_, k) => fallada(notas[k]));
  const sinResponder = mazo.length - notas.filter((x) => x !== undefined).length;
  return (
    <Card className="p-6 sm:p-8">
      <Card.Header>
        <span className="etiqueta">Mazo terminado</span>
        <Card.Title className="font-titulo text-3xl font-semibold">
          Sabías {cuenta(2)} de {mazo.length}
        </Card.Title>
      </Card.Header>
      <Card.Content className="grid grid-cols-[minmax(0,1fr)] gap-6">
        <Progreso estados={estados} cifras={sinResponder ? `${sinResponder} sin responder` : 'Todas respondidas'} leyenda={LEYENDA} />
        <dl className="flex flex-wrap gap-x-8 gap-y-3">
          {([['La sabía', 2, 'text-success'], ['Dudé', 1, 'text-warning'], ['No la sabía', 0, 'text-danger']] as const).map(([t, v, c]) => (
            <div key={t} className="grid gap-0.5">
              <dt className="etiqueta">{t}</dt>
              <dd className={`font-titulo text-3xl font-semibold tabular-nums ${c}`}>{cuenta(v)}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap gap-2">
          {falladas.length > 0 && <Button onPress={() => onRepasar(falladas)}>Repasar las {falladas.length} que fallaste</Button>}
          <Button variant="secondary" onPress={onReiniciar}>
            Empezar de nuevo
          </Button>
        </div>
        {falladas.length > 0 && (
          <div className="grid">
            {falladas.map((c) => (
              <Fragment key={c.clave}>
                <Separator />
                <div className="grid gap-1.5 py-4">
                  <span className="etiqueta">{c.tema.titulo}</span>
                  <Typography weight="semibold">
                    <Rico html={c.q} />
                  </Typography>
                  <Typography color="muted">
                    <Rico html={c.a} />
                  </Typography>
                  <div>
                    <EnlaceTeoria tema={c.tema} ancla={c.ref} irATeoria={irATeoria} />
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        )}
      </Card.Content>
    </Card>
  );
}
