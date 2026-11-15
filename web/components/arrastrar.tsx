'use client';

import { Fragment, useEffect, useRef, useState, type PointerEvent as EventoPuntero } from 'react';
import type { Pregunta } from '@/lib/tipos';
import { Rico } from './piezas';

/**
 * Pregunta de arrastrar (como "arrastrar y soltar sobre texto" de Moodle): las fichas se
 * arrastran a los huecos con mouse o dedo, o se tocan (ficha y después hueco). Tocar un
 * hueco ocupado devuelve su ficha. Con teclado: Enter sobre la ficha y después sobre el hueco.
 * `colocadas[n]`: la ficha (índice en `p.opciones`) que está en el hueco `n`, o -1.
 */
export function Arrastrar({ p, orden, colocadas, onCambio, correccion }: {
  p: Pregunta;
  /** Orden en que se muestran las fichas del banco (índices de `p.opciones`). */
  orden: number[];
  colocadas: number[];
  onCambio: (colocadas: number[]) => void;
  /** Al comprobar: lo que respondió, para marcar cada hueco bien o mal. */
  correccion?: number[];
}) {
  const [elegida, setElegida] = useState<number | null>(null);
  const [arrastre, setArrastre] = useState<{ ficha: number; desde: number; x: number; y: number; sobre: number } | null>(null);
  /** El gesto en curso (puntero apretado sobre una ficha), aunque todavía no sea un arrastre. */
  const inicio = useRef<{ ficha: number; desde: number; x: number; y: number; movio: boolean } | null>(null);
  const bloqueada = !!correccion;

  useEffect(() => setElegida(null), [p]);

  // Ancho de los huecos: el de la ficha más larga, como en Moodle, para no delatar la respuesta.
  const largo = Math.max(...p.opciones.map((o) => o.replace(/<[^>]+>/g, '').length));
  const anchoHueco = `${Math.min(largo, 60) + 3}ch`;

  const enBanco = orden.filter((f) => !colocadas.includes(f));

  /** Pone `ficha` en el hueco `n` (o la devuelve al banco con n = -1); la que estaba vuelve al banco. */
  const colocar = (ficha: number, n: number) => {
    const nuevas = colocadas.map((f) => (f === ficha ? -1 : f));
    if (n >= 0) nuevas[n] = ficha;
    onCambio(nuevas);
    setElegida(null);
  };

  const tocarFicha = (ficha: number) => setElegida((e) => (e === ficha ? null : ficha));
  const tocarHueco = (n: number) => {
    if (bloqueada) return;
    if (elegida !== null) colocar(elegida, n);
    else if (colocadas[n] >= 0) colocar(colocadas[n], -1);
  };

  const huecoBajo = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y)?.closest<HTMLElement>('[data-hueco]');
    return el ? Number(el.dataset.hueco) : -1;
  };

  // Los gestos se siguen desde window y no con captura del puntero: así el soltar llega aunque
  // la ficha se vuelva a dibujar (o desaparezca del banco) en medio del arrastre.
  const acciones = useRef({ colocar, tocarFicha, tocarHueco });
  acciones.current = { colocar, tocarFicha, tocarHueco };
  const limpiar = useRef<() => void>(() => {});
  useEffect(() => () => limpiar.current(), []);

  const alApretar = (ficha: number, desde: number) => (e: EventoPuntero<HTMLElement>) => {
    if (bloqueada || e.button !== 0) return;
    limpiar.current();
    const i = { ficha, desde, x: e.clientX, y: e.clientY, movio: false };
    inicio.current = i;
    const mover = (ev: PointerEvent) => {
      if (ev.pointerId !== e.pointerId) return;
      if (!i.movio && Math.hypot(ev.clientX - i.x, ev.clientY - i.y) < 6) return;
      i.movio = true;
      setArrastre({ ficha, desde, x: ev.clientX, y: ev.clientY, sobre: huecoBajo(ev.clientX, ev.clientY) });
    };
    const terminar = (ev: PointerEvent) => {
      if (ev.pointerId !== e.pointerId) return;
      limpiar.current();
      if (ev.type === 'pointercancel') return;
      const a = acciones.current;
      if (!i.movio) {
        // Un toque: desde el banco elige la ficha; desde un hueco la devuelve (o pone ahí la elegida).
        if (desde < 0) a.tocarFicha(ficha);
        else a.tocarHueco(desde);
        return;
      }
      const n = huecoBajo(ev.clientX, ev.clientY);
      if (n >= 0) a.colocar(ficha, n);
      else if (desde >= 0) a.colocar(ficha, -1);
    };
    window.addEventListener('pointermove', mover);
    window.addEventListener('pointerup', terminar);
    window.addEventListener('pointercancel', terminar);
    limpiar.current = () => {
      window.removeEventListener('pointermove', mover);
      window.removeEventListener('pointerup', terminar);
      window.removeEventListener('pointercancel', terminar);
      inicio.current = null;
      setArrastre(null);
      limpiar.current = () => {};
    };
  };
  const eventos = (ficha: number, desde: number) => ({ onPointerDown: alApretar(ficha, desde) });

  const hueco = (n: number) => {
    const ficha = colocadas[n];
    const correcta = p.correctas[n];
    const bien = correccion && ficha >= 0 && p.opciones[ficha] === p.opciones[correcta];
    const resaltado = arrastre?.sobre === n || (elegida !== null && !bloqueada);
    const estilo = correccion
      ? bien ? 'border-success bg-success-soft' : 'border-danger bg-danger-soft'
      : resaltado ? 'border-accent bg-accent-soft' : ficha >= 0 ? 'border-border bg-surface-secondary' : 'border-border border-dashed';
    return (
      <span className="inline-flex max-w-full flex-col align-middle" style={{ width: anchoHueco }}>
        <button
          type="button"
          data-hueco={n}
          aria-label={`Hueco ${n + 1}${ficha >= 0 ? `: ${p.opciones[ficha].replace(/<[^>]+>/g, '')}` : ', vacío'}`}
          disabled={bloqueada}
          onClick={(e) => e.detail === 0 && tocarHueco(n)}
          onPointerUp={() => !inicio.current && elegida !== null && tocarHueco(n)}
          className={`inline-flex min-h-10 w-full items-center justify-center rounded-lg border-2 px-1 py-1 transition-colors ${estilo}`}
        >
          {ficha >= 0 && (
            <span
              {...eventos(ficha, n)}
              className={`ficha w-full ${bloqueada ? '' : 'cursor-grab'} ${arrastre?.ficha === ficha ? 'opacity-30' : ''}`}
            >
              <Rico html={p.opciones[ficha]} />
            </span>
          )}
        </button>
        {correccion && !bien && (
          <span className="mt-1 text-sm text-success">
            → <Rico html={p.opciones[correcta]} />
          </span>
        )}
      </span>
    );
  };

  return (
    <div className="grid gap-5">
      <div className="grid gap-3 leading-relaxed">
        {p.lineas.map((linea, k) => (
          <div key={k} className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
            {linea.map((s, j) => (
              <Fragment key={j}>{s.t === 'texto' ? <Rico html={s.html} /> : hueco(s.n)}</Fragment>
            ))}
          </div>
        ))}
      </div>

      {!bloqueada && (
        <div className="grid gap-2">
          <span className="etiqueta">
            {enBanco.length
              ? 'Arrastrá cada ficha a su hueco, o tocá la ficha y después el hueco'
              : 'Tocá o arrastrá una ficha colocada para sacarla'}
          </span>
          <div className="flex min-h-12 flex-wrap gap-2 rounded-xl border border-dashed border-border p-2" data-banco>
            {enBanco.map((f) => (
              <button
                key={f}
                type="button"
                {...eventos(f, -1)}
                onClick={(e) => e.detail === 0 && tocarFicha(f)}
                aria-pressed={elegida === f}
                className={`ficha cursor-grab rounded-lg border px-3 py-2 text-left transition-colors ${
                  elegida === f ? 'border-accent bg-accent-soft' : 'border-border bg-surface-secondary hover:border-accent'
                } ${arrastre?.ficha === f ? 'opacity-30' : ''}`}
              >
                <Rico html={p.opciones[f]} />
              </button>
            ))}
          </div>
        </div>
      )}

      {arrastre && (
        <div
          aria-hidden
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-accent bg-surface-tertiary px-3 py-2 shadow-lg"
          style={{ left: arrastre.x, top: arrastre.y }}
        >
          <Rico html={p.opciones[arrastre.ficha]} />
        </div>
      )}
    </div>
  );
}

/** Acertó si cada hueco tiene una ficha con el texto de su respuesta (las repetidas valen igual). */
export function huecosBien(p: Pregunta, sel: number[]) {
  return p.correctas.filter((c, n) => sel[n] >= 0 && p.opciones[sel[n]] === p.opciones[c]).length;
}
