'use client';

import { Button, Label, ListBox, Select, Separator, Tabs, Typography } from '@heroui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Datos, Lectura, Materia, Nota, Vista } from '@/lib/tipos';
import { cuentaRegresiva, guardado } from '@/lib/util';
import { ElegirMateria, Marca } from './inicio';
import { Cuestionario } from './cuestionario';
import { Flashcards } from './flashcards';
import { Teoria } from './teoria';

const VISTAS: Vista[] = ['flashcards', 'cuestionario', 'teoria'];
type Volver = { vista: Vista; scroll: number };

/** Materia que nombra el `#` de la dirección: el id completo o un pedazo que sólo calce con una. */
function materiaDelHash(datos: Datos): Materia | undefined {
  const normalizar = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  let crudo = location.hash.slice(1);
  try {
    crudo = decodeURIComponent(crudo);
  } catch {}
  const h = normalizar(crudo).replace(/\s+/g, '-');
  if (!h) return undefined;
  const exacta = datos.materias.find((m) => m.id === h);
  if (exacta) return exacta;
  const parecidas = datos.materias.filter((m) => m.id.includes(h) || normalizar(m.nombre).includes(h.replace(/-/g, ' ')));
  return parecidas.length === 1 ? parecidas[0] : undefined;
}

/**
 * La materia sale del `#` (links compartibles como `/#base-de-datos`); sin `#`, de la última
 * visita; y si no hay ninguna, se muestra la lista para elegir.
 * undefined = todavía no se sabe (primer render, igual en servidor y navegador); null = elegir.
 */
export function Estudio({ datos }: { datos: Datos }) {
  const [materiaId, setMateriaId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const guardada = datos.materias.find((m) => m.id === guardado.leer('materia', ''));
    const inicial = materiaDelHash(datos) ?? (location.hash ? undefined : guardada);
    setMateriaId(inicial?.id ?? null);
    if (inicial) {
      guardado.escribir('materia', inicial.id);
      history.replaceState(null, '', `#${inicial.id}`);
    }
    // Atrás/adelante del navegador, o un link con otro # pegado en la misma pestaña.
    const alCambiar = () => {
      const m = materiaDelHash(datos);
      setMateriaId(m?.id ?? null);
      if (m) guardado.escribir('materia', m.id);
    };
    window.addEventListener('hashchange', alCambiar);
    return () => window.removeEventListener('hashchange', alCambiar);
  }, [datos]);

  // Cambiar el # agrega una entrada al historial y dispara hashchange, que actualiza el estado.
  const irA = (id: string | null) => {
    if (id) location.hash = id;
    else {
      history.pushState(null, '', location.pathname + location.search);
      setMateriaId(null);
    }
    window.scrollTo({ top: 0 });
  };

  if (materiaId === undefined) return null;
  const materia = datos.materias.find((m) => m.id === materiaId);
  if (!materia) return <ElegirMateria datos={datos} onElegir={irA} />;
  return <Sesion key={materia.id} datos={datos} materia={materia} irA={irA} />;
}

function Sesion({ datos, materia, irA }: { datos: Datos; materia: Materia; irA: (id: string | null) => void }) {
  const [vista, setVista] = useState<Vista>('flashcards');
  const [lectura, setLectura] = useState<Lectura>({ tipo: 'nota', id: materia.temas[0].id, ancla: '', n: 0 });
  const [volver, setVolver] = useState<Volver | null>(null);
  const [historial, setHistorial] = useState<Record<string, Nota>>({});
  const [pedidoFc, setPedidoFc] = useState<{ tema: string; n: number } | null>(null);
  const [pedidoCu, setPedidoCu] = useState<{ tema: string; n: number } | null>(null);
  const [cuenta, setCuenta] = useState('');
  const barra = useRef<HTMLElement>(null);

  // Preferencias de la última visita (sólo en el navegador).
  useEffect(() => {
    const v = guardado.leer<Vista>('vista', 'flashcards');
    setVista(VISTAS.includes(v) ? v : 'flashcards');
    const tema = guardado.leer('tema', '');
    if (materia.temas.some((t) => t.id === tema)) setLectura({ tipo: 'nota', id: tema, ancla: '', n: 0 });
    setHistorial(guardado.leer('historial', {}));
  }, [materia]);

  useEffect(() => setCuenta(cuentaRegresiva(materia)), [materia]);

  // Alto real de la barra fija, para el índice lateral y los saltos a secciones.
  useEffect(() => {
    const el = barra.current;
    if (!el) return;
    const medir = () => document.documentElement.style.setProperty('--alto-barra', `${el.offsetHeight}px`);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cambiarVista = (v: Vista) => {
    setVista(v);
    setVolver(null);
    guardado.escribir('vista', v);
    window.scrollTo({ top: 0 });
  };

  const leer = useCallback(
    (tipo: Lectura['tipo'], id: string, ancla = '') => {
      setLectura((l) => ({ tipo, id, ancla, n: l.n + 1 }));
      if (tipo === 'nota') guardado.escribir('tema', id);
      if (vista !== 'teoria') {
        setVolver({ vista, scroll: window.scrollY });
        setVista('teoria');
      }
    },
    [vista],
  );

  const volverAtras = () => {
    if (!volver) return;
    setVista(volver.vista);
    setVolver(null);
    requestAnimationFrame(() => window.scrollTo({ top: volver.scroll }));
  };

  const practicar = (v: Exclude<Vista, 'teoria'>, tema: string) => {
    if (v === 'flashcards') setPedidoFc((p) => ({ tema, n: (p?.n ?? 0) + 1 }));
    else setPedidoCu((p) => ({ tema, n: (p?.n ?? 0) + 1 }));
    cambiarVista(v);
  };

  const calificar = useCallback((clave: string, nota: Nota) => {
    setHistorial((h) => {
      const nuevo = { ...h, [clave]: nota };
      guardado.escribir('historial', nuevo);
      return nuevo;
    });
  }, []);

  const nFc = materia.temas.reduce((n, t) => n + t.flashcards.length, 0);
  const nCu = materia.temas.reduce((n, t) => n + t.preguntas.length, 0);
  const pestañas: [Vista, string, number][] = [
    ['flashcards', 'Flashcards', nFc],
    ['cuestionario', 'Cuestionario', nCu],
    ['teoria', 'Teoría', materia.temas.length],
  ];

  return (
    <>
      <header
        ref={barra}
        className="sticky top-0 z-30 border-b border-separator bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1680px] flex-wrap items-center gap-x-5 gap-y-3 px-4 py-3 sm:px-8 xl:px-10">
          <button
            type="button"
            title="Elegir otra materia"
            className="-m-1 rounded-xl p-1 outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-focus"
            onClick={() => irA(null)}
          >
            <Marca />
          </button>

          <div className="flex min-w-0 flex-1 flex-col gap-0.5 md:flex-none">
            {datos.materias.length > 1 ? (
              <Select aria-label="Materia" value={materia.id} onChange={(v) => v != null && irA(String(v))} className="w-full max-w-60">
                <Select.Trigger>
                  <Select.Value className="truncate" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    {datos.materias.map((m) => (
                      <ListBox.Item key={m.id} id={m.id} textValue={m.nombre}>
                        <Label>{m.nombre}</Label>
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            ) : (
              <Typography type="body-sm" weight="medium" truncate>
                {materia.nombre}
              </Typography>
            )}
            {cuenta && (
              <Typography type="body-xs" weight="medium" className="font-mono text-accent">
                {cuenta}
              </Typography>
            )}
          </div>

          <div className="order-last w-full md:order-none md:ml-auto md:w-auto">
            <Tabs selectedKey={vista} onSelectionChange={(k) => cambiarVista(k as Vista)} className="w-full md:w-[440px]">
              <Tabs.ListContainer>
                <Tabs.List aria-label="Modo de estudio" className="w-full">
                  {pestañas.map(([id, texto, n]) => (
                    <Tabs.Tab key={id} id={id} className="gap-1.5">
                      {texto}
                      <span className="font-mono text-[11px] text-muted">{n}</span>
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </Tabs.ListContainer>
            </Tabs>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-[1680px] px-4 pb-28 pt-6 sm:px-8 sm:pt-8 xl:px-10">
        <section hidden={vista !== 'flashcards'} aria-label="Flashcards">
          <Flashcards
            materia={materia}
            activo={vista === 'flashcards'}
            historial={historial}
            onCalificar={calificar}
            irATeoria={leer}
            pedido={pedidoFc}
          />
        </section>
        <section hidden={vista !== 'cuestionario'} aria-label="Cuestionario">
          <Cuestionario materia={materia} activo={vista === 'cuestionario'} irATeoria={leer} pedido={pedidoCu} />
        </section>
        <section hidden={vista !== 'teoria'} aria-label="Teoría">
          <Teoria materia={materia} fuentes={datos.fuentes} lectura={lectura} onLeer={leer} onPracticar={practicar} />
        </section>
      </main>

      <footer className="mx-auto grid max-w-[1680px] gap-4 px-4 pb-10 sm:px-8 xl:px-10">
        <Separator />
        <Typography type="body-xs" color="muted" className="font-mono leading-relaxed">
          Generada el {datos.generado} desde las notas del vault · {materia.temas.length} temas · {nFc} flashcards · {nCu} preguntas.
          <br />
          Cada tema dice de qué fuente sale su contenido. Si algo choca con la cátedra, manda la cátedra.
        </Typography>
      </footer>

      {volver && vista === 'teoria' && (
        <div className="fixed inset-x-0 bottom-[calc(18px+env(safe-area-inset-bottom))] z-40 flex justify-center px-4">
          <Button className="shadow-lg" onPress={volverAtras}>
            ← Volver {volver.vista === 'flashcards' ? 'a las flashcards' : 'al cuestionario'}
          </Button>
        </div>
      )}
    </>
  );
}
