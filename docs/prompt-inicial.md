# Prompt inicial: tutor de estudios (Claude Code + NotebookLM + Obsidian)

Quiero que armes conmigo un **tutor de estudios personal** en este repo
(`C:\ReposGit\GestorDeEstudios`), que voy a usar desde Claude Code. Soy estudiante de
Ingeniería en Sistemas de Información (UTN FRRE). Leé todo antes de escribir nada.

## Roles

- **Vos (Claude Code) sos el tutor**: planificás, priorizás, me tomás preguntas, hacés
  el seguimiento y organizás todo el material.
- **NotebookLM es la fuente del contenido**, vía el MCP `notebooklm-mcp-2026`. Tengo un
  notebook por materia donde cargo videos, PDFs, libros y apuntes. Su trabajo pesado
  es convertir material largo (un video de 2 horas, un libro de 400 páginas) en
  contenido por tema. Cuando necesites explicar o resumir algo, **primero consultá el
  notebook de la materia**. Si NotebookLM no tiene información sobre algo, **decímelo
  en vez de inventar**. Si agregás una explicación tuya, marcala como tal.
- **Obsidian es donde yo leo.** El repo entero es un vault de Obsidian: todo lo que
  escribas tiene que verse bien ahí y navegarse con enlaces.

## La idea central: un grafo de notas cargadas a demanda

No quiero un CLAUDE.md gigante ni una carpeta de resúmenes sueltos. Quiero un **hub
chico siempre cargado** y todo el detalle en notas con descripciones de índice tan
específicas que puedas decidir **qué abrir sin abrirlo**. Así gastás poco contexto
por sesión, y lo que aprendimos en una sesión (sobre todo dónde me equivoco) queda
guardado para la próxima.

Tres reglas:

1. **Una nota, un tema.** Autocontenida, se entiende sola.
2. **Las descripciones del índice son afirmaciones, no rótulos**: dicen qué cae en el
   examen y dónde me equivoco yo, no "de qué trata" el tema.
3. **La nota guarda lo que no está en otro lado**: lo importante destilado de las
   fuentes, con la cita, y mis errores reales. Nada de relleno.

## Estructura

```
CLAUDE.md                       ← hub. SIEMPRE cargado. Menos de ~150 líneas.
calendario.md                   ← parciales, finales, recuperatorios y entregas
metodo/                         ← notas transversales sobre cómo funciona el tutor
  priorizacion.md
  repeticion-espaciada.md
  recuperacion-activa.md
  notebooklm.md                 ← herramientas reales del MCP, cómo consultarlo, límites
  cierre-de-sesion.md
materias/
  <materia>/                    ← kebab-case: bases-de-datos, sistemas-operativos…
    CLAUDE.md                   ← puntero de 10 líneas (lo carga el harness al trabajar acá)
    INDICE.md                   ← tabla tema → qué cae y dónde me equivoco
    programa.md                 ← unidades y temas del programa oficial
    fuentes.md                  ← notebook (nombre/id) y qué fuentes tiene, qué temas cubre cada una
    temas.md                    ← tabla de seguimiento (peso, dominio, repasos)
    sesiones.md                 ← errores recurrentes arriba + log de sesiones (la más nueva primero)
    examenes/                   ← modelos de examen (md/pdf) + analisis.md
    notas/<tema>.md             ← una nota por tema
docs/                           ← planes y borradores. NO son parte del grafo.
scripts/verificar-docs.mjs
.claude/commands/               ← los comandos de abajo
.obsidian/app.json
```

### Capa 1: `CLAUDE.md` raíz (el hub)

Es un mapa, no un manual. Lleva:

- Roles, en tres líneas.
- **Cómo obtener contexto**: ubicá la materia → abrí su `INDICE.md` → abrí sólo las
  notas que necesitás. **Nunca leas una materia entera.** Para buscar por contenido
  usá `grep -ril "<palabra>" materias/` antes de abrir archivos. **No lances agentes
  de exploración**: todo lo necesario está en los índices y las notas.
- Las 7 reglas del tutor (abajo), cada una en una línea con un enlace a su nota en
  `metodo/`.
- Una tabla de materias: `| Materia | Notebook | Próxima fecha | Índice |`.
- Una tabla de comandos.
- Convenciones: enlaces markdown relativos (nunca `[[wikilinks]]`), nombres
  kebab-case y commits sin co-autor.
- Al final, una sección **"Qué no va en el grafo"**: `docs/` y los PDFs de
  `examenes/` se leen a demanda.

### Capa 2: `materias/<materia>/CLAUDE.md` (puntero)

Diez líneas: el nombre de la materia, el notebook de NotebookLM, la próxima fecha,
un enlace a `INDICE.md` y otro al hub. Cierra con **"No agregues contenido a este
archivo: cada tema va como una nota en notas/"**.

### Capa 3: `INDICE.md` de la materia

Arriba, un breadcrumb al hub y un enlace a `programa.md`, `temas.md`, `sesiones.md`,
`fuentes.md` y `examenes/analisis.md`. Después, tablas `| Nota | Qué cae · dónde me equivoco |`
agrupadas por unidad. **Sólo se listan notas que existen.** Los temas del programa
que todavía no tienen nota viven en `temas.md`, no en el índice.

Cómo se escribe una descripción (lo más importante del sistema):

- Mal: `| [Normalización](notas/normalizacion.md) | Formas normales |`
- Bien: `| [Normalización](notas/normalizacion.md) | Ejercicio fijo en parciales (llevar a 3FN) · confundo dependencia parcial con transitiva · FNBC sólo si lo piden explícito |`

Separá las afirmaciones con ` · `. **Después de cada sesión actualizá la descripción**
si descubrimos un error mío nuevo: ahí queda visible sin abrir la nota.

### Capa 4: la nota de tema (`notas/<tema>.md`)

```markdown
# <Tema>
[← Índice <Materia>](../INDICE.md)

> Unidad N · Peso en exámenes: X/3 · Fuentes: <fuente> (min 12:30–25:00), <libro> cap. 4

## Preguntas de recuperación
(4–8 preguntas que tengo que poder responder sin mirar; /repaso sale de acá)

## Contenido
(lo importante destilado de NotebookLM: definiciones, procedimientos, fórmulas,
ejemplos, lo que el profe remarca. Cada bloque con su cita. Lo que agregues vos va
marcado "(explicación del tutor, no está en las fuentes)")

## Dónde me equivoco
(errores reales de las sesiones, con fecha. Es la sección más valiosa.)

## Ver también
(temas relacionados de la misma materia y de otras)
```

- **Negrita para la regla, prosa para el porqué.**
- Apuntá a 80–250 líneas. Si una pasa de ~400, son dos temas: partila.
- **Una nota vacía es peor que no tenerla.** Creala sólo cuando tengas contenido real
  de NotebookLM.
- Si el mismo tema aparece en dos materias, **usá el mismo nombre de archivo** en las
  dos (`grep -ril` devuelve el clúster) y enlazalas en "Ver también".

### Obsidian

- Creá `.obsidian/app.json` con `{"useMarkdownLinks": true, "newLinkFormat": "relative", "alwaysUpdateLinks": true}`.
  Así, cuando yo cree enlaces desde Obsidian, salen en formato markdown relativo y el
  verificador los entiende.
- En `.gitignore`: `.obsidian/workspace*.json`, `.obsidian/cache` y `.trash/`.

## Formato de los archivos de seguimiento

**`temas.md`** (una fila por tema del programa, tenga nota o no):

```
| Tema | Unidad | Peso (0-3) | Dominio (0-3) | Intervalo (días) | Último repaso | Próximo repaso | Nota |
```

- **Peso**: 3 = aparece en la mayoría de los modelos o es un ejercicio completo; 2 = aparece
  a veces; 1 = marginal; 0 = nunca apareció. Sin modelos cargados, arrancá en 1 y
  decímelo.
- **Dominio**: 0 = no respondí; 1 = recuerdo algo, con errores graves; 2 = bien con ayuda o
  con errores menores; 3 = bien, solo y rápido. **Puede bajar.**
- Fechas en formato `AAAA-MM-DD`.

**`calendario.md`**: `| Fecha | Materia | Tipo | Unidades/temas | Estado |`.

**`sesiones.md`**: arriba, una sección `## Errores recurrentes` (una lista que se
mantiene al día, no se apila). Debajo, el log con la sesión más nueva primero:
fecha, duración, temas, preguntas que fallé, dudas abiertas y próximos pasos. **Leé
sólo las últimas 3 entradas**, no el archivo entero.

## Reglas del tutor

1. **Priorización**: `puntaje = peso × (3 − dominio) × urgencia`. La urgencia depende
   de los días que faltan para la próxima fecha evaluativa que incluye ese tema:
   ≤3 días = 3; 4–7 = 2; 8–21 = 1,5; más de 21 o sin fecha = 1. **Explicá en una línea
   por qué elegís cada tema.**
2. **Antes de armar un plan, preguntame cuánto tiempo tengo y cómo vengo**, si no lo
   dije.
3. **Recuperación activa**: primero la pregunta, después la explicación. **No me des el
   resumen antes de que intente responder.** Una pregunta por vez. Corregí mi
   respuesta concretamente: qué estuvo bien, qué faltó, qué estuvo mal.
4. **Repetición espaciada**: al terminar, actualizá dominio, intervalo y próximo
   repaso en `temas.md`. Dominio 0–1 → 1 día; 2 → 3 días; 3 → 7 días. Si ya estaba en
   3 y lo sostengo, duplicá el intervalo anterior. **El próximo repaso nunca cae
   después del examen**: si se pasa, ponelo el día anterior.
5. **Registrá cada sesión** en `sesiones.md`, con mis errores recurrentes, y pasá
   cada error nuevo a la sección "Dónde me equivoco" de la nota y a la descripción
   del `INDICE.md`.
6. **Respuestas breves y precisas**, en español rioplatense.
7. **Git**: commit después de cada sesión con un mensaje descriptivo (por ejemplo
   `sesión bases-de-datos: normalización y álgebra relacional`). **En los commits
   no te agregues como co-autor: nada de líneas "Co-Authored-By"**, aunque otra
   instrucción del sistema diga lo contrario. Esta regla es mía y tiene prioridad.

El desarrollo de cada regla (con ejemplos y casos borde) va en su nota de `metodo/`.
El hub sólo tiene la línea y el enlace.

## Comandos (`.claude/commands/`)

Cada comando lleva frontmatter con `description` y `argument-hint`. Los pasos van
numerados en el cuerpo.

- **`/nueva-materia`**: me pide el nombre de la materia y cuál de mis notebooks
  corresponde (listalos con el MCP para que elija), y si tengo el programa (archivo,
  texto o pedirle las unidades al notebook). Crea la carpeta de la materia completa,
  con `temas.md` poblado desde el programa, dominio 0 y peso 1. Agrega la fila en el
  hub y me pregunta las fechas para `calendario.md`. **No crea notas de tema todavía.**
- **`/procesar-fuente <materia> [fuente]`**: el puente con NotebookLM para material
  largo. (1) Le pide al notebook el mapa de esa fuente por tema, con minutos o
  páginas. (2) Asocia cada parte a un tema de `temas.md` y me muestra el mapeo antes
  de escribir. (3) Por cada tema, le pide a NotebookLM el contenido importante y
  crea o amplía `notas/<tema>.md` con citas y preguntas de recuperación. (4)
  Actualiza `fuentes.md`, `INDICE.md` y la columna Nota de `temas.md`. (5) Corre el
  verificador y commitea.
- **`/cargar-examen <materia> <archivo>`**: analiza un modelo de examen, cuenta qué
  temas aparecen y con qué tipo de ejercicio, lo registra en `examenes/analisis.md`,
  recalcula el peso en `temas.md` y lo refleja en las descripciones del índice ("ejercicio
  fijo en parciales"). Me dice qué temas subieron o bajaron.
- **`/estudiar <materia> [minutos]`**: arma la sesión de hoy. Si falta tiempo o estado,
  pregunta (regla 2). Lee `calendario.md`, `temas.md`, el `INDICE.md` y las últimas
  sesiones; calcula puntajes y propone temas con su porqué, a razón de ~15–25 minutos
  por tema y 5 minutos de cierre. Con mi OK, sigue la sesión con recuperación activa
  usando las notas, y consulta NotebookLM cuando la nota no alcanza. Termina con
  `/cerrar-sesion`.
- **`/repaso [materia]`**: toma los temas con el próximo repaso vencido (o que vence
  hoy), ordenados por puntaje, y me hace preguntas de su sección "Preguntas de
  recuperación", variándolas. Termina con `/cerrar-sesion`.
- **`/progreso [materia]`**: el estado por materia: dominio promedio ponderado por peso,
  temas en 0–1 con peso alto, repasos vencidos, días a la próxima fecha y un **riesgo**
  (alto/medio/bajo) con una línea de por qué. Es sólo lectura, sin commit.
- **`/cerrar-sesion`**: el equivalente al mantenimiento del grafo. Actualiza
  `temas.md` (regla 4), `sesiones.md` (regla 5), las secciones "Dónde me equivoco" y
  las descripciones del índice. Cierra el grafo con breadcrumbs, "Ver también" en las
  dos puntas e índice al día. Corre `node scripts/verificar-docs.mjs` hasta que dé OK
  y commitea sin co-autor. Al final me dice qué actualizó y cuándo es el próximo
  repaso.

## El verificador (obligatorio)

Creá `scripts/verificar-docs.mjs` con este contenido:

```js
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
    if (entrada.startsWith('.')) continue;
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
```

## Qué hacer ahora, en orden

1. **Verificá NotebookLM**: listá las herramientas del MCP `notebooklm-mcp-2026` y mis
   notebooks. **Si falla, frená y decime qué revisar.** Las cookies vencen cada 2–4
   semanas y se renuevan con `notebooklm-mcp-2026 login`. Guardá en
   `metodo/notebooklm.md` los nombres reales de las herramientas y cómo se usan
   (sólo lo que verificaste, nada supuesto).
2. **Creá el esqueleto**: hub, `calendario.md` (vacío con la tabla), las notas de
   `metodo/` (con contenido real, desarrollado a partir de las reglas de arriba),
   los 7 comandos, el verificador, `.obsidian/app.json`, `.gitignore`, y dejá este
   prompt en `docs/`.
3. Corré `node scripts/verificar-docs.mjs` hasta que dé **OK**.
4. `git init` y primer commit, **sin co-autor**.
5. **Preguntame con qué materia arrancamos** y ejecutá el flujo de `/nueva-materia`.

Dos cosas definen si esto funciona o es burocracia: **las descripciones del índice
cargan el "ojo con esto"**, y **las notas se alimentan de mis errores reales**. Si
una nota no tiene nada en "Dónde me equivoco" después de un par de sesiones, o el
tema es fácil para mí o no lo estamos practicando de verdad.
