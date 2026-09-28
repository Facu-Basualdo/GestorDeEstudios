'use client';

import { Button, Chip, Header, ListBox, Select, Separator } from '@heroui/react';
import { useEffect, useRef, useState } from 'react';
import type { Fuente, Lectura, Materia, Tema, Vista } from '@/lib/tipos';
import { ENTRA, nombreUnidad, unidadesDe } from '@/lib/util';
import { Peso, Rico } from './piezas';

const SELECCION = 'data-[selected=true]:bg-surface data-[selected=true]:font-semibold data-[selected=true]:shadow-sm';

type Leer = (tipo: Lectura['tipo'], id: string, ancla?: string) => void;

export function Teoria({ materia, fuentes, lectura, onLeer, onPracticar }: {
  materia: Materia;
  fuentes: Fuente[];
  lectura: Lectura;
  onLeer: Leer;
  onPracticar: (vista: Exclude<Vista, 'teoria'>, tema: string) => void;
}) {
  const tema = lectura.tipo === 'nota' ? materia.temas.find((t) => t.id === lectura.id) ?? materia.temas[0] : null;
  const fuente = lectura.tipo === 'fuente' ? fuentes.find((f) => f.id === lectura.id) : null;
  const clave = fuente ? `fuente:${fuente.id}` : `nota:${tema?.id}`;
  const articulo = useRef<HTMLElement>(null);

  // Salto a la sección pedida (o arriba de todo) cada vez que cambia la lectura.
  useEffect(() => {
    const id = fuente?.id ?? tema?.id;
    const destino = lectura.ancla ? document.getElementById(`${id}--${lectura.ancla}`) : null;
    if (destino) {
      destino.scrollIntoView({ block: 'start' });
      destino.classList.remove('destello');
      void destino.offsetWidth;
      destino.classList.add('destello');
    } else if (lectura.n > 0) {
      window.scrollTo({ top: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lectura.n]);

  // Los enlaces del markdown traen data-nota / data-fuente: se navegan dentro de la app.
  const alHacerClic = (e: React.MouseEvent) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-nota], a[data-fuente]');
    if (!a) return;
    e.preventDefault();
    if (a.dataset.fuente) onLeer('fuente', a.dataset.fuente, a.dataset.ancla);
    else onLeer('nota', a.dataset.nota!, a.dataset.ancla);
  };

  const elegir = (k: string) => {
    const [tipo, id] = k.split(':') as [Lectura['tipo'], string];
    onLeer(tipo, id);
  };

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[280px_minmax(0,1fr)_230px]">
      <nav
        aria-label="Temas"
        className="hidden lg:sticky lg:top-[calc(var(--alto-barra,120px)+20px)] lg:block lg:max-h-[calc(100dvh-var(--alto-barra,120px)-40px)] lg:overflow-y-auto"
      >
        <ListBox
          aria-label="Temas y fuentes"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={new Set([clave])}
          onSelectionChange={(s) => {
            const k = s === 'all' ? null : [...s][0];
            if (k != null) elegir(String(k));
          }}
        >
          {itemsDelIndice(materia, fuentes)}
        </ListBox>
      </nav>

      <div className="lg:hidden">
        <Select aria-label="Tema" fullWidth value={clave} onChange={(v) => v != null && !Array.isArray(v) && elegir(String(v))}>
          <Select.Trigger>
            <Select.Value>{({ selectedText }) => selectedText}</Select.Value>
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>{itemsDelIndice(materia, fuentes)}</ListBox>
          </Select.Popover>
        </Select>
      </div>

      <article ref={articulo} className="min-w-0" onClick={alHacerClic}>
        {fuente ? <CabeceraFuente fuente={fuente} /> : tema ? <CabeceraNota tema={tema} materia={materia} onPracticar={onPracticar} onLeer={onLeer} /> : null}
        <div className="prosa enriquecido" dangerouslySetInnerHTML={{ __html: fuente?.html ?? tema?.html ?? '' }} />
        {tema && !fuente && <PieNota tema={tema} materia={materia} onLeer={onLeer} />}
      </article>

      <IndicePagina contenedor={articulo} clave={clave} />
    </div>
  );
}

function itemsDelIndice(materia: Materia, fuentes: Fuente[]) {
  return [
    ...unidadesDe(materia).map((u) => (
      <ListBox.Section key={`u${u}`}>
        <Header>{nombreUnidad(materia, u)}</Header>
        {materia.temas
          .filter((t) => t.unidad === u)
          .map((t) => (
            <ListBox.Item key={t.id} id={`nota:${t.id}`} textValue={t.titulo} className={SELECCION}>
              <Peso peso={t.peso} />
              <span className="flex-1 leading-snug">{t.titulo}</span>
            </ListBox.Item>
          ))}
      </ListBox.Section>
    )),
    ...(fuentes.length
      ? [
          <Separator key="sep" />,
          <ListBox.Section key="fuentes">
            <Header>Fuentes citadas</Header>
            {fuentes.map((f) => (
              <ListBox.Item key={f.id} id={`fuente:${f.id}`} textValue={f.titulo} className={SELECCION}>
                <span className="flex-1 leading-snug">{f.titulo}</span>
              </ListBox.Item>
            ))}
          </ListBox.Section>,
        ]
      : []),
  ];
}

function CabeceraNota({ tema, materia, onPracticar, onLeer }: {
  tema: Tema;
  materia: Materia;
  onPracticar: (vista: Exclude<Vista, 'teoria'>, tema: string) => void;
  onLeer: Leer;
}) {
  // Índice de la nota: las subsecciones del contenido y las secciones propias del tutor.
  const secciones = tema.secciones.filter((s) => s.nivel === 3 || s.id !== 'contenido');
  return (
    <header className="grid gap-4 border-b border-separator pb-6">
      <div className="flex flex-wrap items-center gap-2">
        <Chip size="sm">{nombreUnidad(materia, tema.unidad).replace(/ — .*/, '')}</Chip>
        <Chip size="sm">
          <Peso peso={tema.peso} />
          <Chip.Label>peso {tema.peso}/3</Chip.Label>
        </Chip>
        {ENTRA[tema.entra] && (
          <Chip size="sm" color={tema.entra === 'sí' ? 'accent' : 'default'} variant={tema.entra === 'sí' ? 'soft' : 'secondary'}>
            {ENTRA[tema.entra]}
          </Chip>
        )}
      </div>
      <h1 className="font-titulo text-[clamp(1.9rem,4.4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-balance">{tema.titulo}</h1>
      {tema.descripcion && (
        <p className="max-w-[64ch] text-muted">
          <Rico html={tema.descripcion} />
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {tema.flashcards.length > 0 && <Button onPress={() => onPracticar('flashcards', tema.id)}>Flashcards de este tema · {tema.flashcards.length}</Button>}
        {tema.preguntas.length > 0 && (
          <Button variant="secondary" onPress={() => onPracticar('cuestionario', tema.id)}>
            Cuestionario · {tema.preguntas.length}
          </Button>
        )}
      </div>
      {secciones.length > 0 && (
        <nav aria-label="Secciones" className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm xl:hidden">
          {secciones.map((s) => (
            <a
              key={s.id}
              href={`#${tema.id}--${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                onLeer('nota', tema.id, s.id);
              }}
              className="border-b border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
            >
              {s.titulo}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function CabeceraFuente({ fuente }: { fuente: Fuente }) {
  return (
    <header className="grid gap-3 border-b border-separator pb-6">
      <div className="flex flex-wrap items-center gap-2">
        <Chip size="sm" color="accent" variant="soft">
          Fuente
        </Chip>
        <span className="font-mono text-xs text-muted">{fuente.ruta}</span>
      </div>
      <h1 className="font-titulo text-[clamp(1.9rem,4.4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-balance">{fuente.titulo}</h1>
      <p className="max-w-[64ch] text-muted">Documento citado por las notas, tal como está en el repositorio.</p>
    </header>
  );
}

function PieNota({ tema, materia, onLeer }: { tema: Tema; materia: Materia; onLeer: Leer }) {
  const k = materia.temas.indexOf(tema);
  const anterior = materia.temas[k - 1];
  const siguiente = materia.temas[k + 1];
  return (
    <nav aria-label="Otros temas" className="mt-12 flex justify-between gap-4 border-t border-separator pt-5">
      {anterior ? (
        <button className="grid max-w-[48%] gap-0.5 text-left font-medium" onClick={() => onLeer('nota', anterior.id)}>
          <span className="etiqueta">← Anterior</span>
          {anterior.titulo}
        </button>
      ) : (
        <span />
      )}
      {siguiente && (
        <button className="ml-auto grid max-w-[48%] gap-0.5 text-right font-medium" onClick={() => onLeer('nota', siguiente.id)}>
          <span className="etiqueta">Siguiente →</span>
          {siguiente.titulo}
        </button>
      )}
    </nav>
  );
}

/** "En esta página": títulos de lo que se está leyendo, con el actual resaltado (sólo en pantallas anchas). */
function IndicePagina({ contenedor, clave }: { contenedor: React.RefObject<HTMLElement | null>; clave: string }) {
  const [titulos, setTitulos] = useState<{ id: string; texto: string; nivel: number }[]>([]);
  const [activo, setActivo] = useState('');

  useEffect(() => {
    const el = contenedor.current;
    if (!el) return;
    const hs = [...el.querySelectorAll<HTMLElement>('.prosa h2, .prosa h3')].filter((h) => h.id);
    setTitulos(hs.map((h) => ({ id: h.id, texto: h.textContent ?? '', nivel: h.tagName === 'H2' ? 2 : 3 })));
    setActivo(hs[0]?.id ?? '');
    const observador = new IntersectionObserver(
      (entradas) => {
        const visible = entradas.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActivo(visible.target.id);
      },
      { rootMargin: '-140px 0px -60% 0px' },
    );
    hs.forEach((h) => observador.observe(h));
    return () => observador.disconnect();
  }, [contenedor, clave]);

  if (!titulos.length) return <div className="hidden xl:block" />;
  return (
    <nav
      aria-label="En esta página"
      className="hidden xl:sticky xl:top-[calc(var(--alto-barra,120px)+20px)] xl:grid xl:max-h-[calc(100dvh-var(--alto-barra,120px)-40px)] xl:gap-2 xl:overflow-y-auto"
    >
      <p className="etiqueta">En esta página</p>
      <ul className="grid gap-0.5 border-l border-separator text-sm">
        {titulos.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(t.id)?.scrollIntoView({ block: 'start', behavior: 'smooth' });
              }}
              className={`-ml-px block border-l py-1 leading-snug transition-colors ${t.nivel === 3 ? 'pl-6' : 'pl-3.5'} ${
                activo === t.id ? 'border-accent font-medium text-foreground' : 'border-transparent text-muted hover:text-foreground'
              }`}
            >
              {t.texto}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
