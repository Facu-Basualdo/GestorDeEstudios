'use client';

import { Button, Card, Label, ListBox, Select } from '@heroui/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { IrATeoria, Materia, Pregunta, Tema } from '@/lib/tipos';
import { filtrarPorTema, guardado, hash, mezclar, plural, porPeso, type Filtro } from '@/lib/util';
import { EnlaceTeoria } from './flashcards';
import { FiltroTemas, Peso, Progreso, Rico } from './piezas';

type Item = Pregunta & { tema: Tema; clave: string };
/** `orden`: índices de las opciones originales en el orden en que se muestran. */
type Sesion = { items: { p: Item; orden: number[] }[]; i: number; elegidas: (number | undefined)[] };

const LETRAS = 'ABCD';
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
  const [cantidad, setCantidad] = useState(10);
  // Primer render sin mezclar (igual en servidor y navegador); se mezcla al montar.
  const [sesion, setSesion] = useState<Sesion>(() => ({
    items: todas.slice(0, 10).map((p) => ({ p, orden: p.opciones.map((_, k) => k) })),
    i: 0,
    elegidas: [],
  }));
  const siguienteRef = useRef<HTMLButtonElement>(null);

  const armar = useCallback(
    (f: Filtro, cant: number, lista?: Item[]) => {
      let base = lista ?? mezclar(filtrarPorTema(todas, f));
      if (!lista && cant) base = base.slice(0, cant);
      setSesion({ items: base.map((p) => ({ p, orden: mezclar(p.opciones.map((_, k) => k)) })), i: 0, elegidas: [] });
    },
    [todas],
  );

  useEffect(() => {
    const f = guardado.leer<Filtro>('filtro-cu', 'todos');
    const valido = f === 'todos' || f === 'p3' || materia.temas.some((t) => t.id === f);
    const cant = guardado.leer('cantidad', 10);
    setFiltro(valido ? f : 'todos');
    setCantidad(cant);
    armar(valido ? f : 'todos', cant);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materia.id]);

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

  const elegir = useCallback(
    (k: number) =>
      setSesion((s) => {
        const it = s.items[s.i];
        if (!it || s.elegidas[s.i] !== undefined || k >= it.orden.length) return s;
        const e = [...s.elegidas];
        e[s.i] = it.orden[k];
        return { ...s, elegidas: e };
      }),
    [],
  );
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
      const k = '1234'.includes(e.key) ? Number(e.key) - 1 : 'abcd'.indexOf(e.key.toLowerCase());
      if (e.key.length === 1 && k >= 0 && !respondida) elegir(k);
      else if (e.key === 'Enter' && respondida && t.tagName !== 'BUTTON') siguiente();
    };
    window.addEventListener('keydown', alTeclear);
    return () => window.removeEventListener('keydown', alTeclear);
  }, [activo, actual, respondida, elegir, siguiente]);

  const estados = items.map((it, k) => (elegidas[k] === undefined ? undefined : elegidas[k] === it.p.correcta ? 2 : 0));
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
            guardado.escribir('cantidad', c);
            armar(filtro, c);
          }}
        >
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {[['10', '10 preguntas'], ['20', '20 preguntas'], ['0', 'Todas']].map(([id, texto]) => (
                <ListBox.Item key={id} id={id} textValue={texto}>
                  <Label>{texto}</Label>
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
        <Button variant="ghost" size="sm" className="sm:ml-auto" onPress={() => armar(filtro, cantidad)}>
          Nuevo cuestionario
        </Button>
      </div>

      {items.length === 0 ? (
        <p className="text-muted">No hay preguntas con este filtro.</p>
      ) : !actual ? (
        <Resultado
          sesion={sesion}
          estados={estados}
          bien={bien}
          onRehacer={(lista) => armar(filtro, cantidad, lista)}
          onNuevo={() => armar(filtro, cantidad)}
          irATeoria={irATeoria}
        />
      ) : (
        <>
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
              <p className="font-titulo text-[clamp(1.25rem,3vw,1.6rem)] font-semibold leading-snug text-balance">
                <Rico html={actual.p.q} />
              </p>
              <ul className="grid gap-2.5">
                {actual.orden.map((o, k) => {
                  const esCorrecta = o === actual.p.correcta;
                  const estado = !respondida ? '' : esCorrecta ? 'ok' : o === elegida ? 'mal' : 'resto';
                  const clases = {
                    '': '',
                    ok: 'border-success bg-success-soft',
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
                        <span
                          className={`grid size-7 shrink-0 place-items-center rounded-md font-mono text-[13px] font-medium ${
                            estado === 'ok' ? 'bg-success text-success-foreground' : estado === 'mal' ? 'bg-danger text-danger-foreground' : 'bg-default text-muted'
                          }`}
                        >
                          {LETRAS[k] ?? k + 1}
                        </span>
                        <Rico html={actual.p.opciones[o]} />
                      </Button>
                    </li>
                  );
                })}
              </ul>
              {respondida && (
                <div className="grid gap-3 pt-1" aria-live="polite">
                  <p className={`font-titulo text-lg font-semibold ${elegida === actual.p.correcta ? 'text-success' : 'text-danger'}`}>
                    {elegida === actual.p.correcta ? '✓ Correcto' : `✗ Incorrecto: era la ${LETRAS[actual.orden.indexOf(actual.p.correcta)]}`}
                  </p>
                  {actual.p.exp && (
                    <p className="text-muted">
                      <Rico html={actual.p.exp} />
                    </p>
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
        </>
      )}
    </div>
  );
}

function Resultado({ sesion, estados, bien, onRehacer, onNuevo, irATeoria }: {
  sesion: Sesion;
  estados: (number | undefined)[];
  bien: number;
  onRehacer: (lista: Item[]) => void;
  onNuevo: () => void;
  irATeoria: IrATeoria;
}) {
  const { items, elegidas } = sesion;
  const mal = items.map((it, k) => ({ ...it, elegida: elegidas[k] })).filter((it) => it.elegida !== it.p.correcta);
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
        {mal.length > 0 && (
          <ul className="divide-y divide-separator border-t border-separator">
            {mal.map(({ p, elegida }) => (
              <li key={p.clave} className="grid gap-1.5 py-4">
                <span className="etiqueta">{p.tema.titulo}</span>
                <span className="font-semibold">
                  <Rico html={p.q} />
                </span>
                <span className="text-muted">
                  {elegida !== undefined && (
                    <>
                      Respondiste <Rico className="text-danger line-through" html={p.opciones[elegida]} /> ·{' '}
                    </>
                  )}
                  era <Rico className="font-medium text-success" html={p.opciones[p.correcta]} />
                </span>
                {p.exp && (
                  <span className="text-muted">
                    <Rico html={p.exp} />
                  </span>
                )}
                <div>
                  <EnlaceTeoria tema={p.tema} ancla={p.ref} irATeoria={irATeoria} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card.Content>
    </Card>
  );
}
