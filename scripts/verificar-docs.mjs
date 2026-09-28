#!/usr/bin/env node
// Verifica la salud del grafo de notas (materias/, metodo/ y calendario.md).
//   node scripts/verificar-docs.mjs
// Sale con codigo 1 si hay algun problema.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CARPETAS = ['materias', 'metodo'].map((c) => join(RAIZ, c)).filter(existsSync);
const SUELTOS = ['calendario.md'].map((f) => join(RAIZ, f)).filter(existsSync);

const rel = (p) => relative(RAIZ, p).replaceAll('\\', '/');

function listarMd(dir) {
  const salida = [];
  for (const entrada of readdirSync(dir)) {
    // material/: exportaciones crudas (Faro, PDFs) que no son notas del grafo.
    if (entrada.startsWith('.') || entrada === 'material') continue;
    const p = join(dir, entrada);
    if (statSync(p).isDirectory()) salida.push(...listarMd(p));
    else if (entrada.endsWith('.md')) salida.push(p);
  }
  return salida;
}

// Anclas estilo GitHub. Obsidian escribe `#Titulo%20con%20espacios`; se
// decodifica y se pasa por la misma funcion, asi los dos formatos coinciden.
function anclaDe(titulo) {
  return titulo
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

function sinBloquesDeCodigo(texto) {
  return texto.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
}

function titulosDe(texto) {
  const anclas = new Set();
  // /\r?\n/ y no '\n': en un checkout CRLF el \r final rompe el regex.
  for (const linea of sinBloquesDeCodigo(texto).split(/\r?\n/)) {
    const m = linea.match(/^#{1,6}\s+(.*)$/);
    if (m) anclas.add(anclaDe(m[1].replace(/[*`_]/g, '')));
  }
  return anclas;
}

// El INDICE.md mas cercano subiendo desde la carpeta de la nota
// (materias/x/notas/tema.md -> materias/x/INDICE.md).
function indiceDe(nota) {
  let dir = dirname(nota);
  while (dir.startsWith(RAIZ) && dir !== RAIZ) {
    const i = join(dir, 'INDICE.md');
    if (existsSync(i)) return i;
    dir = dirname(dir);
  }
  return null;
}

const todos = CARPETAS.flatMap(listarMd);
// Los CLAUDE.md por carpeta son punteros del harness: se validan sus enlaces,
// pero no son nodos del grafo y no cuentan como huerfanos.
const PUNTEROS = todos.filter((f) => basename(f) === 'CLAUDE.md');
const notas = [...todos.filter((f) => basename(f) !== 'CLAUDE.md'), ...SUELTOS];
const archivos = [join(RAIZ, 'CLAUDE.md'), ...PUNTEROS, ...notas].filter(existsSync);

const contenido = new Map();
for (const f of archivos) contenido.set(f, readFileSync(f, 'utf8'));

const problemas = [];
const entrantes = new Map(notas.map((n) => [n, 0]));
const ENLACE = /\[([^\]]*)\]\(([^)\s]+)\)/g;

for (const archivo of archivos) {
  const texto = sinBloquesDeCodigo(contenido.get(archivo));

  if (/\[\[[^\]]+\]\]/.test(texto)) {
    problemas.push(`wikilink         ${rel(archivo)}   (usar enlaces markdown relativos)`);
  }

  for (const [, etiqueta, url] of texto.matchAll(ENLACE)) {
    if (/^(https?:|mailto:|#)/.test(url)) continue;
    const [ruta, ancla] = url.split('#');
    const destino = resolve(dirname(archivo), decodeURIComponent(ruta));

    if (!existsSync(destino)) {
      problemas.push(`enlace roto      ${rel(archivo)} -> ${url}   [${etiqueta}]`);
      continue;
    }
    if (destino !== archivo && entrantes.has(destino)) {
      entrantes.set(destino, entrantes.get(destino) + 1);
    }

    if (ancla && destino.endsWith('.md')) {
      const textoDestino = contenido.get(destino) ?? readFileSync(destino, 'utf8');
      if (!titulosDe(textoDestino).has(anclaDe(decodeURIComponent(ancla)))) {
        problemas.push(`ancla rota       ${rel(archivo)} -> ${url}   [${etiqueta}]`);
      }
    }
  }
}

for (const [nota, n] of entrantes) {
  if (n === 0) problemas.push(`nota huerfana    ${rel(nota)}   (nadie la enlaza)`);
}

// Toda nota de una materia tiene que estar en su INDICE.md y tener breadcrumb.
for (const nota of notas) {
  const indice = indiceDe(nota);
  if (!indice || nota === indice) continue;

  const ruta = relative(dirname(indice), nota).replaceAll('\\', '/');
  if (!contenido.get(indice).includes(`(${ruta})`)) {
    problemas.push(`fuera del indice ${rel(nota)}   (agregala a ${rel(indice)})`);
  }
  if (!/^\[← [^\]]*\]\((?:\.\.\/)*INDICE\.md\)/m.test(contenido.get(nota))) {
    problemas.push(`sin breadcrumb   ${rel(nota)}   (falta el enlace al INDICE)`);
  }
}

const enlaces = archivos.reduce(
  (n, f) => n + [...sinBloquesDeCodigo(contenido.get(f)).matchAll(ENLACE)]
    .filter(([, , u]) => !/^(https?:|mailto:|#)/.test(u)).length,
  0,
);

console.log(`${notas.length} notas · ${enlaces} enlaces internos`);

if (problemas.length === 0) {
  console.log('OK — el grafo esta sano');
  process.exit(0);
}

console.log(`\n${problemas.length} problema(s):`);
for (const p of problemas) console.log(`  ${p}`);
process.exit(1);
