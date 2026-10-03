'use client';

import { Typography } from '@heroui/react';
import { useEffect, useState } from 'react';
import type { Datos } from '@/lib/tipos';
import { cuentaRegresiva } from '@/lib/util';

/** Logo y nombre de la web. */
export function Marca() {
  return (
    <span className="flex items-center gap-2.5 font-titulo text-xl font-semibold tracking-tight">
      <span className="grid size-8 place-items-center rounded-lg bg-accent text-accent-foreground shadow-[0_4px_14px_-4px_var(--accent)]">
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 6.5C10.3 5.2 7.9 4.6 4 4.6v13.2c3.9 0 6.3.6 8 1.9 1.7-1.3 4.1-1.9 8-1.9V4.6c-3.9 0-6.3.6-8 1.9Z" />
          <path d="M12 6.5v13.2" />
        </svg>
      </span>
      Gestor de estudios
    </span>
  );
}

/** Pantalla de entrada cuando el link no nombra una materia y no hay una de la última visita. */
export function ElegirMateria({ datos, onElegir }: { datos: Datos; onElegir: (id: string) => void }) {
  // La cuenta regresiva depende de la fecha de hoy: sólo en el navegador.
  const [cuentas, setCuentas] = useState<Record<string, string>>({});
  useEffect(() => setCuentas(Object.fromEntries(datos.materias.map((m) => [m.id, cuentaRegresiva(m)]))), [datos]);

  return (
    <main className="mx-auto grid min-h-dvh max-w-2xl content-center gap-8 px-4 py-12 pt-[max(3rem,env(safe-area-inset-top))] sm:px-8">
      <header className="grid justify-items-start gap-5">
        <Marca />
        <div className="grid gap-1.5">
          <Typography type="h1" className="font-titulo text-3xl font-semibold sm:text-4xl">
            ¿Qué vas a estudiar?
          </Typography>
          <Typography color="muted">Elegí una materia. Después la cambiás desde el selector de arriba.</Typography>
        </div>
      </header>

      <ul className="grid gap-3">
        {datos.materias.map((m) => {
          const nFc = m.temas.reduce((n, t) => n + t.flashcards.length, 0);
          const nCu = m.temas.reduce((n, t) => n + t.preguntas.length, 0);
          return (
            <li key={m.id}>
              <a
                href={`#${m.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onElegir(m.id);
                }}
                className="group grid gap-1.5 rounded-2xl bg-surface p-5 no-underline shadow-[var(--surface-shadow)] outline-none transition-[background-color,box-shadow,transform] hover:-translate-y-px hover:bg-surface-secondary hover:shadow-[0_0_0_1px_var(--accent),0_10px_28px_-14px_var(--accent)] focus-visible:ring-2 focus-visible:ring-focus sm:p-6"
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-titulo text-lg font-semibold leading-snug sm:text-xl">{m.nombre}</span>
                  <span className="text-muted transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true">
                    →
                  </span>
                </span>
                {cuentas[m.id] && <span className="font-mono text-xs font-medium text-accent">{cuentas[m.id]}</span>}
                <span className="font-mono text-xs text-muted">
                  {m.temas.length} temas · {nFc} flashcards · {nCu} preguntas
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
