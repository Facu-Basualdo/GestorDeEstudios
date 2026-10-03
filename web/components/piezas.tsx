'use client';

import { Button, Card, Header, Kbd, ListBox, ScrollShadow, Select, Separator, Typography } from '@heroui/react';
import type { Materia, Tema } from '@/lib/tipos';
import { nombreUnidad, unidadesDe, type Filtro } from '@/lib/util';

/** HTML ya renderizado y escapado por el generador (inline: código, énfasis, enlaces). */
export function Rico({ html, className = '' }: { html: string; className?: string }) {
  return <span className={`enriquecido ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Peso del tema en los exámenes, como tres bits. */
export function Peso({ peso }: { peso: number }) {
  return (
    <span className="inline-flex shrink-0 gap-0.5" role="img" aria-label={`Peso ${peso} de 3`}>
      {[1, 2, 3].map((i) => (
        <i key={i} className={`size-1.5 rounded-[1px] ${i <= peso ? 'bg-accent' : 'bg-border'}`} />
      ))}
    </span>
  );
}

/**
 * Progreso como diagrama de tiempos: cada ítem es un bit.
 * 2 = alto (la sabía / correcta), 0 = bajo, 1 = X (dudé), undefined = pendiente.
 */
export function Onda({ estados, actual }: { estados: (number | undefined)[]; actual?: number }) {
  const n = estados.length;
  if (!n) return null;
  const W = 10;
  const Y: Record<number, number> = { 2: 5, 0: 25 };
  const trazos: React.ReactNode[] = [];
  let previo: number | null = null;
  estados.forEach((e, i) => {
    const x = i * W;
    if (e === undefined) {
      trazos.push(<path key={i} className="o-pend" d={`M${x} 15H${x + W}`} />);
      previo = null;
    } else if (e === 1) {
      trazos.push(<path key={i} className="o-x" d={`M${x} 15L${x + 2} 5H${x + W - 2}L${x + W} 15L${x + W - 2} 25H${x + 2}Z`} />);
      previo = null;
    } else {
      const y = Y[e];
      if (previo != null && previo !== y) trazos.push(<path key={`b${i}`} className="o-borde" d={`M${x} ${previo}V${y}`} />);
      trazos.push(<path key={i} className={e === 2 ? 'o-uno' : 'o-cero'} d={`M${x} ${y}H${x + W}`} />);
      previo = y;
    }
  });
  return (
    <svg className="onda block h-[30px] w-full min-w-0 max-w-full overflow-visible" viewBox={`0 0 ${n * W} 30`} preserveAspectRatio="none" aria-hidden="true">
      {actual != null && actual < n && <rect className="o-actual" x={actual * W} y={0} width={W} height={30} />}
      {trazos}
    </svg>
  );
}

export function Progreso({ estados, actual, cifras, leyenda }: {
  estados: (number | undefined)[];
  actual?: number;
  cifras: string;
  leyenda: React.ReactNode;
}) {
  return (
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-1.5">
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
        <Typography type="body-sm" color="muted" weight="medium" className="font-mono tabular-nums">
          {cifras}
        </Typography>
        <Typography type="body-xs" color="muted" className="font-mono">
          {leyenda}
        </Typography>
      </div>
      <Onda estados={estados} actual={actual} />
    </div>
  );
}

/** Selector de temas agrupado por unidad, con la cantidad de ítems de cada opción. */
export function FiltroTemas({ materia, valor, onCambio, contar, etiqueta }: {
  materia: Materia;
  valor: Filtro;
  onCambio: (f: Filtro) => void;
  contar: (temas: Tema[]) => number;
  etiqueta: string;
}) {
  const total = contar(materia.temas);
  const p3 = contar(materia.temas.filter((t) => t.peso >= 3));
  const opcion = (id: string, texto: string, n: number) => (
    <ListBox.Item key={id} id={id} textValue={texto}>
      <span className="flex-1">{texto}</span>
      <span className="font-mono text-xs text-muted">{n}</span>
      <ListBox.ItemIndicator />
    </ListBox.Item>
  );
  return (
    <Select
      aria-label={etiqueta}
      className="w-full min-w-0 sm:w-80"
      value={valor}
      onChange={(v) => v != null && !Array.isArray(v) && onCambio(String(v))}
    >
      <Select.Trigger>
        <Select.Value>{({ selectedText }) => selectedText}</Select.Value>
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {opcion('todos', 'Todos los temas', total)}
          {p3 > 0 && p3 < total ? opcion('p3', 'Peso 3: lo que más cae', p3) : null}
          <Separator />
          {unidadesDe(materia).map((u) => (
            <ListBox.Section key={u}>
              <Header>{nombreUnidad(materia, u)}</Header>
              {materia.temas.filter((t) => t.unidad === u && contar([t]) > 0).map((t) => opcion(t.id, t.titulo, contar([t])))}
            </ListBox.Section>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}

export type FilaSesion = { tema: Tema; total: number; bien: number; dudas: number; mal: number };

/** Agrupa los ítems de la sesión por tema, en el orden en que aparecen. */
export function filasPorTema<T extends { tema: Tema }>(items: T[], estado: (k: number) => number | undefined): FilaSesion[] {
  const filas = new Map<string, FilaSesion>();
  items.forEach((it, k) => {
    const f = filas.get(it.tema.id) ?? { tema: it.tema, total: 0, bien: 0, dudas: 0, mal: 0 };
    const e = estado(k);
    f.total++;
    if (e === 2) f.bien++;
    else if (e === 1) f.dudas++;
    else if (e === 0) f.mal++;
    filas.set(it.tema.id, f);
  });
  return [...filas.values()];
}

/** Panel lateral en pantallas anchas: cómo va la sesión por tema y los atajos de teclado. */
export function PanelSesion({ filas, atajos }: { filas: FilaSesion[]; atajos: [string[], string][] }) {
  const pct = (n: number, total: number) => `${(n / total) * 100}%`;
  return (
    <aside className="hidden xl:sticky xl:top-[calc(var(--alto-barra,120px)+20px)] xl:grid xl:min-w-0 xl:grid-cols-[minmax(0,1fr)] xl:gap-4">
      <Card className="min-w-0 p-5">
        <Card.Header>
          <span className="etiqueta">Esta sesión, por tema</span>
        </Card.Header>
        <Card.Content>
          <ScrollShadow hideScrollBar size={40} className="max-h-[46dvh]">
          <ul className="grid grid-cols-[minmax(0,1fr)] gap-3.5 py-1">
            {filas.map((f) => (
              <li key={f.tema.id} className="grid min-w-0 gap-1.5" title={f.tema.titulo}>
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-2 text-sm">
                  <Peso peso={f.tema.peso} />
                  <span className="truncate">{f.tema.titulo}</span>
                  <span className="font-mono text-xs tabular-nums text-muted">
                    {f.bien}/{f.total}
                  </span>
                </div>
                <div className="flex h-1.5 overflow-hidden rounded-full bg-default" aria-hidden="true">
                  <span className="bg-success" style={{ width: pct(f.bien, f.total) }} />
                  <span className="bg-warning" style={{ width: pct(f.dudas, f.total) }} />
                  <span className="bg-danger" style={{ width: pct(f.mal, f.total) }} />
                </div>
              </li>
            ))}
          </ul>
          </ScrollShadow>
        </Card.Content>
      </Card>
      <Card className="p-5">
        <Card.Header>
          <span className="etiqueta">Atajos</span>
        </Card.Header>
        <Card.Content>
          <dl className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 text-sm">
            {atajos.map(([teclas, que]) => (
              <div key={que} className="contents">
                <dt className="flex gap-1">
                  {teclas.map((t) => (
                    <Kbd key={t}>{t}</Kbd>
                  ))}
                </dt>
                <dd className="text-muted">{que}</dd>
              </div>
            ))}
          </dl>
        </Card.Content>
      </Card>
    </aside>
  );
}
