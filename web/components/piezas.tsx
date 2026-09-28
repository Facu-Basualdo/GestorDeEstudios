'use client';

import { Button, Header, ListBox, Select, Separator } from '@heroui/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
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
        <span className="font-mono text-[13px] font-medium tabular-nums text-muted">{cifras}</span>
        <span className="font-mono text-xs text-muted">{leyenda}</span>
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

export function InterruptorTema() {
  const { resolvedTheme, setTheme } = useTheme();
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);
  const oscuro = montado && resolvedTheme === 'dark';
  return (
    <Button
      isIconOnly
      variant="ghost"
      size="sm"
      aria-label={oscuro ? 'Usar tema claro' : 'Usar tema oscuro'}
      onPress={() => setTheme(oscuro ? 'light' : 'dark')}
    >
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        {oscuro ? (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
          </>
        ) : (
          <path d="M20.2 14.6A8.3 8.3 0 0 1 9.4 3.8a8.3 8.3 0 1 0 10.8 10.8Z" />
        )}
      </svg>
    </Button>
  );
}
