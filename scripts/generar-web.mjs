#!/usr/bin/env node
// Genera los datos de la web de estudio (flashcards, cuestionario y teoria) desde las notas.
//   node scripts/generar-web.mjs          -> web/datos/datos.json (lo lee la app Next.js de web/)
//   node scripts/generar-web.mjs <ruta>   -> el JSON en otra ruta
// La app lo corre sola antes de `npm run dev` y `npm run build`.
//
// Lee de cada materia: INDICE.md (orden y descripcion de las notas), temas.md
// (unidad, peso, si entra) y las notas. De cada nota salen:
//   "## Preguntas de recuperacion" -> flashcards   `- pregunta :: respuesta [→ Seccion](#Seccion)`
//   "## Cuestionario"              -> opcion multiple (ver metodo/recuperacion-activa.md)
//   el resto                       -> la teoria

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MATERIAS = join(RAIZ, 'materias');
const SALIDA = process.argv[2] ? resolve(process.argv[2]) : join(RAIZ, 'web', 'datos', 'datos.json');

const avisos = [];
const rel = (p) => relative(RAIZ, p).replaceAll('\\', '/');
const lineasDe = (texto) => texto.split(/\r?\n/);

// Misma funcion que scripts/verificar-docs.mjs: asi las anclas de las notas
// (estilo Obsidian, `#Titulo%20con%20espacios`) apuntan a los ids de la web.
function anclaDe(titulo) {
  return titulo
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------------------------------------------------------------- markdown

// Documentos de docs/ citados como fuente desde las notas: la web los muestra
// para poder leer de dónde sale cada tema. Ruta absoluta -> id.
const FUENTES = new Map();
const DOCS = join(RAIZ, 'docs');

// ctx: { dir, notaId, notas: Map<ruta absoluta, id de nota> }
function enlace(etiqueta, url, ctx) {
  const texto = inline(etiqueta, ctx);
  if (/^https?:/.test(url)) return `<a href="${esc(url)}" target="_blank" rel="noopener">${texto}</a>`;
  const [ruta, ancla = ''] = url.split('#');
  const slug = ancla ? anclaDe(decodeURIComponent(ancla)) : '';
  const abs = ruta ? resolve(ctx.dir, decodeURIComponent(ruta)) : '';
  const destino = ruta ? ctx.notas.get(abs) : ctx.notaId;
  if (destino) return `<a href="#${esc(destino)}" data-nota="${esc(destino)}" data-ancla="${esc(slug)}">${texto}</a>`;
  if (abs.startsWith(DOCS) && abs.endsWith('.md') && existsSync(abs)) {
    if (!FUENTES.has(abs)) FUENTES.set(abs, 'fuente-' + abs.split(/[\\/]/).at(-1).replace(/\.md$/, ''));
    const id = FUENTES.get(abs);
    return `<a href="#${esc(id)}" data-fuente="${esc(id)}" data-ancla="${esc(slug)}">${texto}</a>`;
  }
  return `<span class="ref-externa" title="${esc(decodeURIComponent(ruta))}">${texto}</span>`;
}

function inline(texto, ctx) {
  const guardados = [];
  const guardar = (html) => `\u0000${guardados.push(html) - 1}\u0000`;
  const t = texto
    .replace(/`([^`]+)`/g, (_, c) => guardar(`<code>${esc(c)}</code>`))
    .replace(/\[([^\]]*)\]\(([^)\s]+)\)/g, (_, e, u) => guardar(enlace(e, u, ctx)));
  return esc(t)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^\w*])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>')
    .replace(/(^|[^\w])_(?!\s)(.+?)_(?!\w)/g, '$1<em>$2</em>')
    .replace(/\u0000(\d+)\u0000/g, (_, i) => guardados[i]);
}

const ES_ITEM = /^(\s*)([-*]|\d+\.)\s+(.*)$/;
const ES_INICIO_DE_BLOQUE = /^(#{1,6}\s|>|\||```|\s*([-*]|\d+\.)\s)/;

function celdas(linea) {
  return linea.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
}

function lista(lineas, ctx) {
  const sangria = lineas[0].match(/^\s*/)[0].length;
  const ordenada = /^\s*\d+\./.test(lineas[0]);
  const items = [];
  // Las líneas sangradas que siguen al texto del ítem (sin marcador de lista, cita ni
  // tabla) son su continuación; lo que viene después de un bloque o una línea en blanco
  // es contenido anidado.
  let continuando = false;
  for (const l of lineas) {
    const m = l.match(ES_ITEM);
    if (m && m[1].length <= sangria) {
      items.push({ texto: m[3], hijos: [] });
      continuando = true;
    } else if (continuando && l.trim() && !ES_INICIO_DE_BLOQUE.test(l.trim())) {
      items.at(-1).texto += ' ' + l.trim();
    } else {
      continuando = false;
      items.at(-1)?.hijos.push(l);
    }
  }
  return {
    t: 'lista',
    ordenada,
    items: items.map(({ texto, hijos }) => {
      const tarea = texto.match(/^\[( |x|X)\]\s+(.*)$/);
      const conHijos = hijos.filter((h) => h.trim());
      const minimo = conHijos.length ? Math.min(...conHijos.map((h) => h.match(/^\s*/)[0].length)) : 0;
      return {
        html: inline(tarea ? tarea[2] : texto, ctx),
        tarea: tarea ? tarea[1] !== ' ' : null,
        hijos: conHijos.length ? bloques(hijos.map((h) => h.slice(minimo)).join('\n'), ctx) : [],
      };
    }),
  };
}

// La teoría sale como bloques (no como HTML) para que la web dibuje cada uno con su
// componente de HeroUI: tabla, alerta, casilla, separador, tipografía. El texto dentro
// de cada bloque sí es HTML inline ya escapado (énfasis, código, enlaces).
//   { t: 'titulo', nivel, id, html }      { t: 'parrafo', html }
//   { t: 'lista', ordenada, items: [{ html, tarea: null | true | false, hijos: [bloques] }] }
//   { t: 'tabla', titulo, cabecera: [html], filas: [[html]] }
//   { t: 'cita', tono: 'warning' | 'default', hijos: [bloques] }
//   { t: 'codigo', texto }                { t: 'separador' }
function bloques(md, ctx) {
  const lineas = lineasDe(md);
  const salida = [];
  let ultimoTitulo = '';
  let i = 0;
  while (i < lineas.length) {
    const l = lineas[i];
    if (!l.trim()) { i++; continue; }

    if (/^```/.test(l)) {
      const codigo = [];
      for (i++; i < lineas.length && !/^```/.test(lineas[i]); i++) codigo.push(lineas[i]);
      i++;
      salida.push({ t: 'codigo', texto: codigo.join('\n') });
      continue;
    }

    let m = l.match(/^(#{1,6})\s+(.*)$/);
    if (m) {
      ultimoTitulo = m[2].replace(/[*`_]/g, '');
      salida.push({ t: 'titulo', nivel: m[1].length, id: `${ctx.notaId}--${anclaDe(ultimoTitulo)}`, html: inline(m[2], ctx) });
      i++;
      continue;
    }

    if (/^(-{3,}|\*{3,})\s*$/.test(l)) { salida.push({ t: 'separador' }); i++; continue; }

    if (/^\|/.test(l) && /^\|?\s*:?-{3,}/.test(lineas[i + 1] ?? '')) {
      const cabecera = celdas(l).map((c) => inline(c, ctx));
      const filas = [];
      for (i += 2; i < lineas.length && /^\|/.test(lineas[i]); i++) filas.push(celdas(lineas[i]).map((c) => inline(c, ctx)));
      salida.push({ t: 'tabla', titulo: ultimoTitulo || 'Tabla', cabecera, filas });
      continue;
    }

    if (/^>/.test(l)) {
      const cita = [];
      for (; i < lineas.length && /^>/.test(lineas[i]); i++) cita.push(lineas[i].replace(/^>\s?/, ''));
      const texto = cita.join('\n');
      salida.push({ t: 'cita', tono: /sin verificar/i.test(texto) ? 'warning' : 'default', hijos: bloques(texto, ctx) });
      continue;
    }

    if (ES_ITEM.test(l)) {
      const items = [];
      for (; i < lineas.length; i++) {
        const actual = lineas[i];
        if (ES_ITEM.test(actual) || /^\s+\S/.test(actual)) { items.push(actual); continue; }
        // Una linea en blanco sigue la lista sólo si lo que viene está sangrado o es otro ítem.
        if (!actual.trim() && (ES_ITEM.test(lineas[i + 1] ?? '') || /^\s+\S/.test(lineas[i + 1] ?? ''))) { items.push(actual); continue; }
        break;
      }
      salida.push(lista(items, ctx));
      continue;
    }

    const parrafo = [];
    for (; i < lineas.length && lineas[i].trim() && !ES_INICIO_DE_BLOQUE.test(lineas[i]); i++) parrafo.push(lineas[i].trim());
    if (!parrafo.length) { parrafo.push(l.trim()); i++; }
    salida.push({ t: 'parrafo', html: inline(parrafo.join(' '), ctx) });
  }
  return salida;
}

// ---------------------------------------------------------------- notas

const REF = /\s*\[→[^\]]*\]\(#([^)\s]+)\)\s*$/;

function separarRef(texto) {
  const m = texto.match(REF);
  if (!m) return { texto: texto.trim(), ref: '' };
  return { texto: texto.slice(0, m.index).trim(), ref: anclaDe(decodeURIComponent(m[1])) };
}

function flashcardsDe(cuerpo, ctx, ruta) {
  const tarjetas = [];
  for (const l of lineasDe(cuerpo)) {
    const m = l.match(/^[-*]\s+(.+?)\s+::\s+(.+)$/);
    if (!m) {
      if (/^[-*]\s/.test(l)) avisos.push(`${rel(ruta)}: pregunta sin "::" → ${l.slice(0, 60)}`);
      continue;
    }
    const { texto, ref } = separarRef(m[2]);
    tarjetas.push({ q: inline(m[1], ctx), a: inline(texto, ctx), ref });
  }
  return tarjetas;
}

function cuestionarioDe(cuerpo, ctx, ruta) {
  const crudas = [];
  let actual = null;
  for (const l of lineasDe(cuerpo)) {
    let m;
    if ((m = l.match(/^\d+\.\s+(.*)$/))) crudas.push((actual = { q: m[1], opciones: [], correctas: [], exp: [] }));
    else if (actual && (m = l.match(/^\s+[-*]\s+\[( |x|X)\]\s+(.*)$/))) {
      if (m[1] !== ' ') actual.correctas.push(actual.opciones.length);
      actual.opciones.push(m[2]);
    } else if (actual && (m = l.match(/^\s+>\s?(.*)$/))) actual.exp.push(m[1]);
  }
  return crudas.flatMap((p) => {
    if (p.opciones.length < 2 || !p.correctas.length) {
      avisos.push(`${rel(ruta)}: pregunta sin opciones o sin la correcta marcada [x] → ${p.q.slice(0, 60)}`);
      return [];
    }
    const { texto, ref } = separarRef(p.exp.join(' '));
    return [{
      q: inline(p.q, ctx),
      opciones: p.opciones.map((o) => inline(o, ctx)),
      correctas: p.correctas,
      exp: texto ? inline(texto, ctx) : '',
      ref,
    }];
  });
}

function leerNota(ruta, id, notas) {
  const ctx = { dir: dirname(ruta), notaId: id, notas };
  const lineas = lineasDe(readFileSync(ruta, 'utf8'));
  const iTitulo = lineas.findIndex((l) => /^#\s/.test(l));
  const titulo = iTitulo === -1 ? id : lineas[iTitulo].replace(/^#\s+/, '').trim();

  // Secciones de nivel 2; lo anterior a la primera es la cabecera (sin titulo ni breadcrumb).
  const cabecera = [];
  const secciones = [];
  lineas.forEach((l, i) => {
    if (i === iTitulo || /^\[← [^\]]*\]\([^)]*INDICE\.md\)/.test(l)) return;
    const m = l.match(/^##\s+(.*)$/);
    if (m) secciones.push({ titulo: m[1].trim(), lineas: [l] });
    else (secciones.at(-1)?.lineas ?? cabecera).push(l);
  });

  let flashcards = [];
  let preguntas = [];
  const teoria = [cabecera.join('\n')];
  for (const s of secciones) {
    const cuerpo = s.lineas.slice(1).join('\n');
    if (/^preguntas de recuperación/i.test(s.titulo)) flashcards = flashcardsDe(cuerpo, ctx, ruta);
    else if (/^cuestionario/i.test(s.titulo)) preguntas = cuestionarioDe(cuerpo, ctx, ruta);
    else teoria.push(s.lineas.join('\n'));
  }

  const md = teoria.join('\n\n');
  const indiceDeSecciones = [...md.matchAll(/^(##|###)\s+(.*)$/gm)].map(([, n, t]) => ({
    nivel: n.length,
    titulo: t.replace(/[*`_]/g, ''),
    id: anclaDe(t.replace(/[*`_]/g, '')),
  }));

  for (const x of [...flashcards, ...preguntas]) {
    if (x.ref && !indiceDeSecciones.some((s) => s.id === x.ref)) {
      avisos.push(`${rel(ruta)}: la referencia #${x.ref} no es una sección de la teoría`);
      x.ref = '';
    }
  }

  return { titulo, bloques: bloques(md, ctx), secciones: indiceDeSecciones, flashcards, preguntas };
}

// ---------------------------------------------------------------- materias

function leerTemas(dirMateria) {
  // ruta absoluta de nota -> { unidad, peso, entra, dominio }
  const ruta = join(dirMateria, 'temas.md');
  const porNota = new Map();
  if (!existsSync(ruta)) return porNota;
  let columnas = null;
  for (const l of lineasDe(readFileSync(ruta, 'utf8'))) {
    if (!/^\|/.test(l)) { columnas = null; continue; }
    if (/^\|?\s*:?-{3,}/.test(l)) continue;
    const c = celdas(l);
    if (!columnas) { columnas = c.map((x) => x.toLowerCase()); continue; }
    const col = (prefijo) => c[columnas.findIndex((x) => x.startsWith(prefijo))] ?? '';
    for (const [, destino] of col('nota').matchAll(/\]\(([^)\s]+)\)/g)) {
      const abs = resolve(dirMateria, decodeURIComponent(destino.split('#')[0]));
      const fila = { unidad: Number(col('unidad')) || 0, peso: Number(col('peso')) || 0, entra: col('eval'), dominio: Number(col('dominio')) || 0 };
      const previa = porNota.get(abs);
      porNota.set(abs, previa ? {
        unidad: Math.min(previa.unidad, fila.unidad),
        peso: Math.max(previa.peso, fila.peso),
        entra: previa.entra === 'sí' ? previa.entra : fila.entra,
        dominio: Math.min(previa.dominio, fila.dominio),
      } : fila);
    }
  }
  return porNota;
}

function leerMateria(carpeta) {
  const dir = join(MATERIAS, carpeta);
  const rutaIndice = join(dir, 'INDICE.md');
  const indice = readFileSync(rutaIndice, 'utf8');
  const nombre = (indice.match(/^#\s+(.*)$/m)?.[1] ?? carpeta).replace(/\s+—\s+Índice\s*$/, '').trim();
  const fecha = indice.match(/Próxima fecha:\s*\*\*([^*]+)\*\*/)?.[1].trim() ?? '';

  // Notas en el orden del indice, con la ultima celda (o lo que sigue a " — ") como descripcion.
  const orden = [];
  const unidades = {};
  for (const l of lineasDe(indice)) {
    const u = l.match(/^##\s+Unidad\s+(\d+)\s*[—-]?\s*(.*)$/);
    if (u) { unidades[u[1]] = u[2].trim(); continue; }
    for (const [, destino] of l.matchAll(/\]\((notas\/[^)\s#]+\.md)[^)]*\)/g)) {
      const ruta = resolve(dir, decodeURIComponent(destino));
      if (orden.some((o) => o.ruta === ruta)) continue;
      if (!existsSync(ruta)) { avisos.push(`${rel(rutaIndice)}: la nota ${destino} no existe`); continue; }
      const descripcion = /^\|/.test(l) ? celdas(l).at(-1) : (l.split(/\s+—\s+/)[1] ?? '');
      orden.push({ ruta, descripcion });
    }
  }

  const notas = new Map(orden.map(({ ruta }) => [ruta, ruta.replace(/\.md$/, '').split(/[\\/]/).at(-1)]));
  const meta = leerTemas(dir);
  const ctxIndice = { dir, notaId: '', notas };

  const temas = orden.map(({ ruta, descripcion }) => {
    const id = notas.get(ruta);
    const m = meta.get(ruta) ?? { unidad: 0, peso: 0, entra: '', dominio: 0 };
    if (!meta.has(ruta)) avisos.push(`${rel(ruta)}: no figura en la columna Nota de temas.md (sin peso ni unidad)`);
    return { id, ...m, descripcion: inline(descripcion, ctxIndice), ...leerNota(ruta, id, notas) };
  });

  return {
    id: carpeta,
    nombre,
    fecha: fecha.match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? '',
    evento: fecha.split('·').slice(1).join('·').trim(),
    unidades,
    temas,
  };
}

const materias = readdirSync(MATERIAS, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(MATERIAS, d.name, 'INDICE.md')))
  .map((d) => leerMateria(d.name))
  .filter((m) => m.temas.length);

// Las fuentes se renderizan al final: recién ahí se sabe cuáles citaron las notas.
const fuentes = [...FUENTES].map(([ruta, id]) => {
  const md = readFileSync(ruta, 'utf8');
  const titulo = md.match(/^#\s+(.*)$/m)?.[1].trim() ?? id;
  const ctx = { dir: dirname(ruta), notaId: id, notas: new Map() };
  return { id, titulo, ruta: rel(ruta), bloques: bloques(md.replace(/^#\s+.*$/m, ''), ctx) };
});

const hoy = new Date();
const datos = {
  generado: `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`,
  materias,
  fuentes,
};

mkdirSync(dirname(SALIDA), { recursive: true });
writeFileSync(SALIDA, JSON.stringify(datos, null, 1));

const suma = (f) => materias.reduce((n, m) => n + m.temas.reduce((k, t) => k + f(t), 0), 0);
console.log(`${materias.length} materia(s) · ${suma(() => 1)} notas · ${suma((t) => t.flashcards.length)} flashcards · ${suma((t) => t.preguntas.length)} preguntas`);
console.log(`→ ${SALIDA.startsWith(RAIZ) ? rel(SALIDA) : SALIDA}`);
if (avisos.length) {
  console.log(`\n${avisos.length} aviso(s):`);
  for (const a of avisos) console.log(`  ${a}`);
}
