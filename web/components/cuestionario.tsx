'use client';

import { Button, Card, Checkbox, Chip, Label, ListBox, Select, Separator, Typography } from '@heroui/react';
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { IrATeoria, Materia, Pregunta, Tema } from '@/lib/tipos';
import { filtrarPorTema, guardado, hash, mezclar, plural, porPeso, type Filtro } from '@/lib/util';
import { Arrastrar, huecosBien } from './arrastrar';
import { EnlaceTeoria } from './flashcards';
import { FiltroTemas, PanelSesion, Peso, Progreso, QueMejorar, Rico, filasPorTema, textoPlano, type Fallo } from './piezas';

type Item = Pregunta & { tema: Tema; clave: string };
/**
 * `orden`: índices de las opciones originales en el orden en que se muestran.
 * `elegidas`: por pregunta, las opciones originales que respondió (undefined = sin responder).
 */
type Sesion = { items: { p: Item; orden: number[] }[]; i: number; elegidas: (number[] | undefined)[] };
/** Lo que se guarda de la sesión para retomarla al recargar: las preguntas por su clave. */
type SesionGuardada = {
  filtro: Filtro;
  cantidad: number;
  items: { clave: string; orden: number[] }[];
  i: number;
  elegidas: (number[] | null)[];
};

const LETRAS = 'ABCDEF';

const acierta = (p: Pregunta, sel: number[] | undefined) =>
  !!sel && sel.length === p.correctas.length &&
  (p.tipo === 'arrastrar' ? huecosBien(p, sel) === p.correctas.length : sel.every((o) => p.correctas.includes(o)));

/** Huecos de una pregunta de arrastrar sin responder: ninguna ficha colocada. */
const vacios = (p: Pregunta) => p.correctas.map(() => -1);

const letras = (ks: number[]) => {
  const l = ks.map((k) => LETRAS[k] ?? String(k + 1)).sort();
  return l.length > 1 ? `${l.slice(0, -1).join(', ')} y ${l.at(-1)}` : l[0];
};
const LEYENDA = (
  <>
    <b className="font-medium text-success">1</b> correcta · <b className="font-medium text-danger">0</b> incorrecta
  </>
);

export function Cuestionario({ materia, activo, irATeoria, pedido }: {
  materia: Materia;
  activo: boolean;
  irATeoria: IrATeoria;
  pedido: { tema: string; n: number } | null;
}) {
  const todas = useMemo<Item[]>(
    () => porPeso(materia.temas).flatMap((t) => t.preguntas.map((p) => ({ ...p, tema: t, clave: `${t.id}:${hash(p.q)}` }))),
    [materia],
  );
  const [filtro, setFiltro] = useState<Filtro>('todos');
  const [cantidad, setCantidad] = useState(0); // 0 = todas
  // Por defecto todas son "seleccioná una o más", como en Moodle: no se sabe cuántas van.
  // Con "Avisar cuántas van" las de una sola correcta se responden con un toque.
  const [avisar, setAvisar] = useState(false);
  // Primer render sin mezclar (igual en servidor y navegador); se mezcla al montar.
  const [sesion, setSesion] = useState<Sesion>(() => ({
    items: todas.map((p) => ({ p, orden: p.opciones.map((_, k) => k) })),
    i: 0,
    elegidas: [],
  }));
  // Hasta recuperar la sesión guardada no se guarda nada, para no pisarla con la inicial.
  const [cargada, setCargada] = useState(false);
  const siguienteRef = useRef<HTMLButtonElement>(null);

  const armar = useCallback(
    (f: Filtro, cant: number, lista?: Item[]) => {
      let base = lista ?? mezclar(filtrarPorTema(todas, f));
      if (!lista && cant) base = base.slice(0, cant);
      setSesion({ items: base.map((p) => ({ p, orden: mezclar(p.opciones.map((_, k) => k)) })), i: 0, elegidas: [] });
    },
    [todas],
  );

  // Al abrir (o cambiar de materia) se retoma el cuestionario que quedó a medias; si no hay,
  // se arma uno con los filtros de la última vez.
  useEffect(() => {
    const previa = guardado.leer<SesionGuardada | null>(`sesion-cu:${materia.id}`, null);
    const porClave = new Map(todas.map((p) => [p.clave, p]));
    const items = (previa?.items ?? []).flatMap(({ clave, orden }) => {
      const p = porClave.get(clave);
      return p && orden.length === p.opciones.length ? [{ p, orden }] : [];
    });
    // Si las notas cambiaron y faltan preguntas, la sesión vieja ya no calza: se arma una nueva.
    if (previa && items.length && items.length === previa.items.length) {
      setFiltro(previa.filtro);
      setCantidad(previa.cantidad);
      const elegidas = previa.elegidas.map((e) => e ?? undefined);
      setSesion({ items, i: Math.min(previa.i, items.length), elegidas });
    } else {
      const f = guardado.leer<Filtro>('filtro-cu', 'todos');
      const valido = f === 'todos' || f === 'p3' || materia.temas.some((t) => t.id === f);
      const cant = guardado.leer('cantidad-cu', 0);
      setFiltro(valido ? f : 'todos');
      setCantidad(cant);
      armar(valido ? f : 'todos', cant);
    }
    setAvisar(guardado.leer('avisar-cu', false));
    setCargada(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materia.id]);

  useEffect(() => {
    if (!cargada) return;
    const datos: SesionGuardada = {
      filtro,
      cantidad,
      items: sesion.items.map(({ p, orden }) => ({ clave: p.clave, orden })),
      i: sesion.i,
      elegidas: Array.from({ length: sesion.items.length }, (_, k) => sesion.elegidas[k] ?? null),
    };
    guardado.escribir(`sesion-cu:${materia.id}`, datos);
  }, [cargada, filtro, cantidad, sesion, materia.id]);

  useEffect(() => {
    if (!pedido) return;
    setFiltro(pedido.tema);
    armar(pedido.tema, cantidad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pedido?.n]);

  const { items, i, elegidas } = sesion;
  const actual = items[i];
  const elegida = elegidas[i];
  const respondida = elegida !== undefined;
  const arrastra = actual?.p.tipo === 'arrastrar';
  const varias = (actual?.p.correctas.length ?? 0) > 1;
  const multiple = !arrastra && (!avisar || varias);
  // Opciones tildadas (originales) de una pregunta con varias correctas, antes de comprobar.
  const [marcadas, setMarcadas] = useState<number[]>([]);
  // Fichas puestas en cada hueco de una pregunta de arrastrar, antes de comprobar.
  const [colocadas, setColocadas] = useState<number[]>([]);
  useEffect(() => {
    setMarcadas([]);
    setColocadas([]);
  }, [i, items]);
  const huecos = actual ? actual.p.correctas.map((_, n) => colocadas[n] ?? -1) : [];
  const puedeComprobar = arrastra ? huecos.some((f) => f >= 0) : marcadas.length > 0;

  const responder = useCallback(
    (sel: number[]) =>
      setSesion((s) => {
        if (!s.items[s.i] || s.elegidas[s.i] !== undefined || !sel.length) return s;
        const e = [...s.elegidas];
        e[s.i] = sel;
        return { ...s, elegidas: e };
      }),
    [],
  );
  const elegir = useCallback(
    (k: number) => {
      if (!actual || respondida || arrastra || k >= actual.orden.length) return;
      const o = actual.orden[k];
      if (!multiple) responder([o]);
      else setMarcadas((m) => (m.includes(o) ? m.filter((x) => x !== o) : [...m, o]));
    },
    [actual, respondida, arrastra, multiple, responder],
  );
  const comprobar = useCallback(() => {
    if (puedeComprobar) responder(arrastra ? huecos : marcadas);
  }, [puedeComprobar, arrastra, huecos, marcadas, responder]);
  const siguiente = useCallback(() => {
    setSesion((s) => ({ ...s, i: s.i + 1 }));
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (respondida) siguienteRef.current?.focus({ preventScroll: true });
  }, [respondida]);

  useEffect(() => {
    if (!activo) return;
    const alTeclear = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || !actual) return;
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, select, [role="listbox"], [role="combobox"]')) return;
      const k = '123456'.includes(e.key) ? Number(e.key) - 1 : 'abcdef'.indexOf(e.key.toLowerCase());
      if (e.key.length === 1 && k >= 0 && !respondida) elegir(k);
      else if (e.key === 'Enter' && t.tagName !== 'BUTTON') {
        if (respondida) siguiente();
        else if (multiple || arrastra) comprobar();
      }
    };
    window.addEventListener('keydown', alTeclear);
    return () => window.removeEventListener('keydown', alTeclear);
  }, [activo, actual, respondida, multiple, arrastra, elegir, comprobar, siguiente]);

  const estados = items.map((it, k) => (elegidas[k] === undefined ? undefined : acierta(it.p, elegidas[k]) ? 2 : 0));
  const correctasVisibles = actual && !arrastra ? actual.p.correctas.map((o) => actual.orden.indexOf(o)) : [];
  const bien = estados.filter((e) => e === 2).length;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-5">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <FiltroTemas
          materia={materia}
          valor={filtro}
          onCambio={(f) => {
            setFiltro(f);
            guardado.escribir('filtro-cu', f);
            armar(f, cantidad);
          }}
          contar={(ts) => ts.reduce((n, t) => n + t.preguntas.length, 0)}
          etiqueta="Temas del cuestionario"
        />
        <Select
          aria-label="Cantidad de preguntas"
          className="w-40"
          value={String(cantidad)}
          onChange={(v) => {
            const c = Number(v);
            setCantidad(c);
            guardado.escribir('cantidad-cu', c);
            armar(filtro, c);
          }}
        >
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {[['0', 'Todas'], ['10', '10 preguntas'], ['20', '20 preguntas']].map(([id, texto]) => (
                <ListBox.Item key={id} id={id} textValue={texto}>
                  <Label>{texto}</Label>
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
        <Checkbox
          isSelected={avisar}
          onChange={(v: boolean) => {
            setAvisar(v);
            guardado.escribir('avisar-cu', v);
          }}
        >
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            Avisar cuántas van
          </Checkbox.Content>
        </Checkbox>
        <Button variant="ghost" size="sm" className="sm:ml-auto" onPress={() => armar(filtro, cantidad)}>
          Nuevo cuestionario
        </Button>
      </div>

      {items.length === 0 ? (
        <Typography color="muted">No hay preguntas con este filtro.</Typography>
      ) : !actual ? (
        <Resultado
          materia={materia}
          sesion={sesion}
          estados={estados}
          bien={bien}
          onRehacer={(lista) => armar(filtro, cantidad, lista)}
          onNuevo={() => armar(filtro, cantidad)}
          irATeoria={irATeoria}
        />
      ) : (
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:gap-8">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-5">
              <Progreso
                estados={estados}
                actual={i}
                cifras={`Pregunta ${i + 1} de ${items.length} · ${plural(bien, 'correcta', 'correctas')}`}
                leyenda={LEYENDA}
              />
              <Card key={`${i}-${actual.p.clave}`} className="entra p-6 sm:p-9">
                <Card.Header className="flex-row items-baseline justify-between gap-3">
                  <span className="etiqueta truncate">{actual.p.tema.titulo}</span>
                  <Peso peso={actual.p.tema.peso} />
                </Card.Header>
                <Card.Content className="grid gap-5">
                  <Typography className="font-titulo text-[clamp(1.25rem,3vw,1.6rem)] font-semibold leading-snug text-balance">
                    <Rico html={actual.p.q} />
                  </Typography>
                  {(multiple || arrastra) && (
                    <Typography type="body-sm" color="muted" className="-mt-2">
                      {multiple ? (
                        avisar ? (
                          <><b className="font-medium text-accent">Varias correctas</b> · marcá todas y tocá Comprobar</>
                        ) : (
                          <><b className="font-medium text-accent">Seleccioná una o más</b> · marcá las correctas y tocá Comprobar</>
                        )
                      ) : (
                        <><b className="font-medium text-accent">Arrastrar</b> · completá los huecos y tocá Comprobar</>
                      )}
                    </Typography>
                  )}
                  {arrastra ? (
                    <Arrastrar
                      p={actual.p}
                      orden={actual.orden}
                      colocadas={elegida ?? huecos}
                      onCambio={setColocadas}
                      correccion={elegida}
                    />
                  ) : (
                  <ul className="grid gap-2.5">
                    {actual.orden.map((o, k) => {
                      const esCorrecta = actual.p.correctas.includes(o);
                      const fueElegida = !!elegida?.includes(o);
                      const estado = !respondida
                        ? marcadas.includes(o) ? 'marcada' : ''
                        : esCorrecta ? (fueElegida || !multiple ? 'ok' : 'falto') : fueElegida ? 'mal' : 'resto';
                      const clases = {
                        '': '',
                        marcada: 'border-accent bg-accent-soft',
                        ok: 'border-success bg-success-soft',
                        falto: 'border-success border-dashed',
                        mal: 'border-danger bg-danger-soft',
                        resto: 'opacity-55',
                      }[estado];
                      return (
                        <li key={o}>
                          <Button
                            variant="outline"
                            fullWidth
                            className={`h-auto min-h-12 justify-start gap-3 whitespace-normal py-3 text-left font-normal ${clases}`}
                            onPress={() => elegir(k)}
                          >
                            <Chip
                              size="sm"
                              color={estado === 'ok' || estado === 'falto' ? 'success' : estado === 'mal' ? 'danger' : estado === 'marcada' ? 'accent' : 'default'}
                              variant={estado === 'ok' || estado === 'mal' || estado === 'marcada' ? 'primary' : 'secondary'}
                              className="size-7 shrink-0 justify-center rounded-md font-mono"
                            >
                              {LETRAS[k] ?? k + 1}
                            </Chip>
                            <Rico html={actual.p.opciones[o]} />
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                  )}
                  {(multiple || arrastra) && !respondida && (
                    <Button className="justify-self-start" isDisabled={!puedeComprobar} onPress={comprobar}>
                      Comprobar
                    </Button>
                  )}
                  {respondida && (
                    <div className="grid gap-3 pt-1" aria-live="polite">
                      <Typography className={`font-titulo text-lg font-semibold ${acierta(actual.p, elegida) ? 'text-success' : 'text-danger'}`}>
                        {acierta(actual.p, elegida)
                          ? '✓ Correcto'
                          : arrastra
                            ? `✗ ${huecosBien(actual.p, elegida)} de ${actual.p.correctas.length} huecos bien: en verde, lo que iba`
                          : varias
                            ? `✗ Incorrecto: las correctas eran la ${letras(correctasVisibles)}`
                            : `✗ Incorrecto: era la ${letras(correctasVisibles)}`}
                      </Typography>
                      {actual.p.exp && (
                        <Typography color="muted">
                          <Rico html={actual.p.exp} />
                        </Typography>
                      )}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <EnlaceTeoria tema={actual.p.tema} ancla={actual.p.ref} irATeoria={irATeoria} />
                        <Button ref={siguienteRef} onPress={siguiente}>
                          {i + 1 < items.length ? 'Siguiente →' : 'Ver resultado'}
                        </Button>
                      </div>
                    </div>
                  )}
                </Card.Content>
              </Card>
          </div>
          <PanelSesion
            filas={filasPorTema(items.map((it) => it.p), (k) => estados[k])}
            atajos={
              arrastra
                ? [[['Tab'], 'Ir de ficha en ficha y a los huecos'], [['Enter'], 'Tomar ficha · dejarla en el hueco']]
                : [[['1', '2', '3', '4'], multiple ? 'Marcar o desmarcar opción (o A–D)' : 'Elegir opción (o A–D)'], [['Enter'], 'Comprobar · siguiente pregunta']]
            }
          />
        </div>
      )}
    </div>
  );
}

function Resultado({ materia, sesion, estados, bien, onRehacer, onNuevo, irATeoria }: {
  materia: Materia;
  sesion: Sesion;
  estados: (number | undefined)[];
  bien: number;
  onRehacer: (lista: Item[]) => void;
  onNuevo: () => void;
  irATeoria: IrATeoria;
}) {
  const { items, elegidas } = sesion;
  const mal = items.map((it, k) => ({ ...it, elegida: elegidas[k] })).filter((it) => !acierta(it.p, it.elegida));
  const texto = (p: Pregunta, ks: number[]) =>
    p.tipo === 'arrastrar'
      ? ks.map((k) => (k >= 0 ? textoPlano(p.opciones[k]) : '—')).join(' / ')
      : ks.map((k) => textoPlano(p.opciones[k])).join(' + ');
  const fallos: Fallo[] = mal.map(({ p, elegida }) => ({
    tema: p.tema,
    pregunta: p.q,
    detalle: `${elegida ? `respondí: ${texto(p, elegida)}` : 'sin responder'} · era: ${texto(p, p.correctas)}`,
  }));
  return (
    <Card className="p-6 sm:p-8">
      <Card.Header>
        <span className="etiqueta">Cuestionario terminado</span>
        <Card.Title className="font-titulo text-3xl font-semibold">
          {bien} de {items.length} correctas
        </Card.Title>
      </Card.Header>
      <Card.Content className="grid grid-cols-[minmax(0,1fr)] gap-6">
        <Progreso estados={estados} cifras={`${Math.round((bien / items.length) * 100)}%`} leyenda={LEYENDA} />
        <div className="flex flex-wrap gap-2">
          {mal.length > 0 && <Button onPress={() => onRehacer(mal.map((m) => m.p))}>Rehacer las {mal.length} incorrectas</Button>}
          <Button variant="secondary" onPress={onNuevo}>
            Nuevo cuestionario
          </Button>
        </div>
        <QueMejorar
          materia={materia}
          modo="Cuestionario"
          filas={filasPorTema(items.map((it) => it.p), (k) => (elegidas[k] === undefined ? undefined : acierta(items[k].p, elegidas[k]) ? 2 : 0))}
          fallos={fallos}
          irATeoria={irATeoria}
        />
        {mal.length > 0 && (
          <div className="grid">
            {mal.map(({ p, elegida }) => (
              <Fragment key={p.clave}>
              <Separator />
              <div className="grid gap-1.5 py-4">
                <span className="etiqueta">{p.tema.titulo}</span>
                <Typography weight="semibold">
                  <Rico html={p.q} />
                </Typography>
                {p.tipo === 'arrastrar' ? (
                  <Arrastrar p={p} orden={[]} colocadas={elegida ?? vacios(p)} onCambio={() => {}} correccion={elegida ?? vacios(p)} />
                ) : (
                <Typography color="muted">
                  {elegida !== undefined && (
                    <>
                      Respondiste <Opciones p={p} ks={elegida} className="text-danger line-through" /> ·{' '}
                    </>
                  )}
                  {p.correctas.length > 1 ? 'eran' : 'era'} <Opciones p={p} ks={p.correctas} className="font-medium text-success" />
                </Typography>
                )}
                {p.exp && (
                  <Typography color="muted">
                    <Rico html={p.exp} />
                  </Typography>
                )}
                <div>
                  <EnlaceTeoria tema={p.tema} ancla={p.ref} irATeoria={irATeoria} />
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

function Opciones({ p, ks, className }: { p: Pregunta; ks: number[]; className: string }) {
  return (
    <>
      {ks.map((k, j) => (
        <Fragment key={k}>
          {j > 0 && ' + '}
          <Rico className={className} html={p.opciones[k]} />
        </Fragment>
      ))}
    </>
  );
}
