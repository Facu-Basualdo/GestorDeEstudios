'use client';

import { Button, Chip, Header, Link, ListBox, ScrollShadow, Select, Separator, Typography } from '@heroui/react';
import { useEffect, useRef, useState } from 'react';
import type { Fuente, Lectura, Materia, Tema, Vista } from '@/lib/tipos';
import { ENTRA, nombreUnidad, unidadesDe } from '@/lib/util';
import { Contenido } from './contenido';
import { Peso, Rico } from './piezas';

const SELECCION = 'data-[selected=true]:bg-surface data-[selected=true]:font-semibold data-[selected=true]:shadow-sm';
/** Alto disponible para las columnas fijas (índice de temas e índice de la página). */
const ALTO_COLUMNA = 'max-h-[calc(100dvh-var(--alto-barra,120px)-40px)]';
const ALTO_INDICE_PAGINA = 'max-h-[calc(100dvh-var(--alto-barra,120px)-80px)]';

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

  // Los enlaces del texto traen data-nota / data-fuente: se navegan dentro de la app.
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
      <nav aria-label="Temas" className="hidden lg:sticky lg:top-[calc(var(--alto-barra,120px)+20px)] lg:block">
        <ScrollShadow hideScrollBar size={56} className={`${ALTO_COLUMNA} pr-1`}>
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
        </ScrollShadow>
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
        <div className="prosa enriquecido">
          <Contenido bloques={fuente?.bloques ?? tema?.bloques ?? []} />
        </div>
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

const TITULO_NOTA = 'font-titulo text-[clamp(1.9rem,4.4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-balance';

function CabeceraNota({ tema, materia, onPracticar, onLeer }: {
  tema: Tema;
  materia: Materia;
  onPracticar: (vista: Exclude<Vista, 'teoria'>, tema: string) => void;
  onLeer: Leer;
}) {
  // Índice de la nota: las subsecciones del contenido y las secciones propias del tutor.
  const secciones = tema.secciones.filter((s) => s.nivel === 3 || s.id !== 'contenido');
  return (
    <header className="grid gap-4 pb-6">
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
      <Typography type="h1" className={TITULO_NOTA}>
        {tema.titulo}
      </Typography>
      {tema.descripcion && (
        <Typography color="muted" className="max-w-[64ch]">
          <Rico html={tema.descripcion} />
        </Typography>
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
            <Link key={s.id} className="text-muted" onPress={() => onLeer('nota', tema.id, s.id)}>
              {s.titulo}
            </Link>
          ))}
        </nav>
      )}
      <Separator className="mt-2" />
    </header>
  );
}

function CabeceraFuente({ fuente }: { fuente: Fuente }) {
  return (
    <header className="grid gap-3 pb-6">
      <div className="flex flex-wrap items-center gap-2">
        <Chip size="sm" color="accent" variant="soft">
          Fuente
        </Chip>
        <Typography type="code">{fuente.ruta}</Typography>
      </div>
      <Typography type="h1" className={TITULO_NOTA}>
        {fuente.titulo}
      </Typography>
      <Typography color="muted" className="max-w-[64ch]">
        Documento citado por las notas, tal como está en el repositorio.
      </Typography>
      <Separator className="mt-2" />
    </header>
  );
}

function PieNota({ tema, materia, onLeer }: { tema: Tema; materia: Materia; onLeer: Leer }) {
  const k = materia.temas.indexOf(tema);
  const anterior = materia.temas[k - 1];
  const siguiente = materia.temas[k + 1];
  const boton = 'h-auto max-w-[48%] flex-col gap-0.5 whitespace-normal py-2';
  return (
    <nav aria-label="Otros temas" className="mt-12 grid gap-5">
      <Separator />
      <div className="flex justify-between gap-4">
        {anterior ? (
          <Button variant="ghost" className={`${boton} items-start text-left`} onPress={() => onLeer('nota', anterior.id)}>
            <span className="etiqueta">← Anterior</span>
            {anterior.titulo}
          </Button>
        ) : (
          <span />
        )}
        {siguiente && (
          <Button variant="ghost" className={`${boton} ml-auto items-end text-right`} onPress={() => onLeer('nota', siguiente.id)}>
            <span className="etiqueta">Siguiente →</span>
            {siguiente.titulo}
          </Button>
        )}
      </div>
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
    <nav aria-label="En esta página" className="hidden xl:sticky xl:top-[calc(var(--alto-barra,120px)+20px)] xl:grid xl:gap-2">
      <p className="etiqueta">En esta página</p>
      <ScrollShadow hideScrollBar size={48} className={ALTO_INDICE_PAGINA}>
        <ul className="grid gap-0.5 border-l border-separator text-sm">
          {titulos.map((t) => (
            <li key={t.id}>
              <Link
                onPress={() => document.getElementById(t.id)?.scrollIntoView({ block: 'start', behavior: 'smooth' })}
                className={`-ml-px block border-l py-1 leading-snug no-underline transition-colors ${t.nivel === 3 ? 'pl-6' : 'pl-3.5'} ${
                  activo === t.id ? 'border-accent font-medium text-foreground' : 'border-transparent text-muted hover:text-foreground'
                }`}
              >
                {t.texto}
              </Link>
            </li>
          ))}
        </ul>
      </ScrollShadow>
    </nav>
  );
}
