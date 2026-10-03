'use client';

import { Button, Card, Header, Kbd, ListBox, ScrollShadow, Select, Separator, Typography } from '@heroui/react';
import { useState } from 'react';
import type { IrATeoria, Materia, Tema } from '@/lib/tipos';
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

/** Una pregunta fallada, para el informe. `detalle`: qué respondió y qué era (texto plano). */
export type Fallo = { tema: Tema; pregunta: string; detalle: string };

/** HTML inline del generador → texto plano, para el informe que se copia. */
export function textoPlano(html: string) {
  return new DOMParser().parseFromString(html, 'text/html').body.textContent?.trim() ?? '';
}

// "Dudé" cuenta medio: el mismo criterio que usa /cerrar-sesion para el dominio.
const respondidas = (f: FilaSesion) => f.bien + f.dudas + f.mal;
const porcentaje = (f: FilaSesion) => Math.round(((f.bien + f.dudas / 2) / respondidas(f)) * 100);

function hoy() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function informe(materia: Materia, modo: string, filas: FilaSesion[], fallos: Fallo[]) {
  const suma = (campo: 'bien' | 'dudas' | 'mal') => filas.reduce((n, f) => n + f[campo], 0);
  const [bien, dudas, mal] = [suma('bien'), suma('dudas'), suma('mal')];
  const total = bien + dudas + mal;
  const lineas = [
    `Informe de estudio · ${materia.nombre} · ${modo} · ${hoy()}`,
    `Resultado: ${bien} de ${total} bien${dudas ? ` · ${dudas} dudé` : ''} · ${mal} mal (${Math.round(((bien + dudas / 2) / total) * 100)} %)`,
    '',
    'Temas, de peor a mejor:',
    ...filas.map((f) => {
      const extra = [f.mal && `${f.mal} mal`, f.dudas && `${f.dudas} dudé`].filter(Boolean).join(' · ');
      return `- ${f.tema.titulo} (peso ${f.tema.peso}): ${f.bien} de ${respondidas(f)} bien (${porcentaje(f)} %)${extra ? ` · ${extra}` : ''}`;
    }),
  ];
  if (fallos.length) {
    lineas.push('', 'Falladas:');
    for (const x of fallos) lineas.push(`- [${x.tema.titulo}] ${textoPlano(x.pregunta)} — ${x.detalle}`);
  }
  return lineas.join('\n');
}

async function copiar(texto: string) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    // Sin permiso de portapapeles (o sin HTTPS): el método viejo.
    const area = document.createElement('textarea');
    area.value = texto;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.append(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}

/**
 * Al terminar un mazo o un cuestionario: los temas de peor a mejor, con acceso a la teoría,
 * y el informe para pegar en /cerrar-sesion (actualiza dominio y errores en el vault).
 */
export function QueMejorar({ materia, modo, filas, fallos, irATeoria }: {
  materia: Materia;
  modo: string;
  filas: FilaSesion[];
  fallos: Fallo[];
  irATeoria: IrATeoria;
}) {
  const [estado, setEstado] = useState<'' | 'copiado' | 'error'>('');
  const conDatos = filas
    .filter((f) => respondidas(f) > 0)
    .sort((a, b) => porcentaje(a) - porcentaje(b) || b.tema.peso - a.tema.peso);
  if (!conDatos.length) return null;
  const flojos = conDatos.filter((f) => porcentaje(f) < 90);
  const firmes = conDatos.filter((f) => porcentaje(f) >= 90);

  const alCopiar = async () => {
    setEstado((await copiar(informe(materia, modo, conDatos, fallos))) ? 'copiado' : 'error');
    setTimeout(() => setEstado(''), 2500);
  };

  return (
    <section className="grid gap-4 rounded-2xl bg-surface-secondary p-5 sm:p-6" aria-label="Qué mejorar">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="font-titulo text-xl font-semibold">Qué mejorar</span>
        <span className="etiqueta">de peor a mejor · dudé cuenta medio</span>
      </div>

      {flojos.length ? (
        <ul className="grid gap-3">
          {flojos.map((f) => (
            <li key={f.tema.id} className="grid gap-1.5">
              <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-2.5">
                <Peso peso={f.tema.peso} />
                <span className="truncate font-medium" title={f.tema.titulo}>
                  {f.tema.titulo}
                </span>
                <span className={`font-mono text-sm tabular-nums ${porcentaje(f) < 40 ? 'text-danger' : porcentaje(f) < 70 ? 'text-warning' : 'text-muted'}`}>
                  {porcentaje(f)} %
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-default" aria-hidden="true">
                  <span className="bg-success" style={{ width: `${(f.bien / respondidas(f)) * 100}%` }} />
                  <span className="bg-warning" style={{ width: `${(f.dudas / respondidas(f)) * 100}%` }} />
                  <span className="bg-danger" style={{ width: `${(f.mal / respondidas(f)) * 100}%` }} />
                </div>
                <Button variant="ghost" size="sm" className="-mr-2 shrink-0 text-link" onPress={() => irATeoria('nota', f.tema.id)}>
                  Leer la teoría →
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <Typography color="muted">Nada para reforzar en esta tanda: todos los temas por encima del 90 %.</Typography>
      )}

      {firmes.length > 0 && flojos.length > 0 && (
        <Typography type="body-sm" color="muted">
          <span className="text-success">Firmes:</span> {firmes.map((f) => f.tema.titulo).join(' · ')}
        </Typography>
      )}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-separator pt-4">
        <Button variant="secondary" onPress={alCopiar}>
          {estado === 'copiado' ? 'Copiado ✓' : estado === 'error' ? 'No se pudo copiar' : 'Copiar informe'}
        </Button>
        <Typography type="body-sm" color="muted" className="min-w-0 flex-1">
          Pegalo en Claude con <code className="font-mono text-[0.9em]">/cerrar-sesion</code> para que actualice tu dominio y
          tus errores.
        </Typography>
      </div>
    </section>
  );
}
