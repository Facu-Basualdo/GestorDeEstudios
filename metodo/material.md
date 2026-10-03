# Material y notas
[← Hub](../CLAUDE.md)

> De dónde sale el contenido de las notas y quién escribe qué. Reemplaza a NotebookLM
> (dejó de usarse el 2026-10-03).

## El flujo

1. **El estudiante sube el material** a `materias/<materia>/material/`, tal como lo
   bajó: clases, apuntes, modelos de examen, cuestionarios, actividades, libros. Si la
   materia es nueva, antes corre `/nueva-materia`.
2. **Gemini (Antigravity) extrae y redacta la teoría** con el
   [prompt genérico](../docs/prompt-gemini.md): pasa cada archivo a texto, arma
   el programa, las fechas, el análisis de exámenes y una nota por tema **sólo con
   teoría**. No escribe preguntas ni commitea.
3. **Claude revisa y arma las preguntas** con `/revisar-materia <materia>`: contrasta
   la teoría con el texto extraído, corrige lo que no cierra y escribe las
   "Preguntas de recuperación" y el "Cuestionario" de cada nota. Después pasa las
   fechas al calendario, verifica y commitea.
4. **El estudiante estudia** con `/estudiar`, `/repaso` y la [web](../web/README.md).
   El informe que da la web al terminar un mazo o un cuestionario se pega en
   `/cerrar-sesion` (ver [cierre de sesión](cierre-de-sesion.md#informe-de-la-web)).

Con material nuevo de una materia que ya existe, se repite desde el paso 2: el prompt
tiene un modo incremental que sólo toca las notas afectadas.

## Cómo se organiza una materia

```
materias/<materia>/
  CLAUDE.md           puntero para el tutor (fecha próxima, enlaces)
  INDICE.md           una tabla por unidad: nota · peso · qué cae y dónde me equivoco
  programa.md         unidades, régimen de aprobación y fechas que encontró Gemini
  fuentes.md          inventario del material: tipo, temas que cubre, estado
  temas.md            peso, dominio y repasos por tema (el seguimiento del estudiante)
  sesiones.md         log de sesiones y errores recurrentes
  notas/<tema>.md     una nota por tema
  examenes/analisis.md   qué se toma, con qué peso y mis errores reales
  material/           crudo, fuera de git y fuera del grafo
    texto/<archivo>.md   texto extraído por Gemini, uno por archivo del material
```

- `material/` está en `.gitignore`: los PDFs pesan y los libros tienen derechos de autor.
  Nada del grafo ni de la web depende de él; las notas lo citan como texto
  (`Clase 2 - Diseño Físico.pptx, diap. 14`), nunca con enlace.
- `material/texto/` es lo que permite revisar: Claude busca ahí con `grep` en vez de
  abrir PDFs o pptx. Cada archivo marca dónde empieza cada página o diapositiva
  (`## Página 12`, `## Diapositiva 14`), así las citas se pueden comprobar.

## Quién escribe qué

| Archivo | Gemini | Claude |
|---|---|---|
| `material/texto/` | crea | lee |
| `programa.md`, `fuentes.md`, `examenes/analisis.md` | crea y actualiza | corrige |
| `INDICE.md` | crea; después sólo agrega filas y afirmaciones | mantiene |
| `temas.md` | crea; después sólo agrega filas y cambia pesos | mantiene dominio y repasos |
| `notas/<tema>.md`: teoría | crea y amplía | revisa y corrige |
| `notas/<tema>.md`: preguntas y cuestionario | **nunca** | escribe |
| `notas/<tema>.md`: "Dónde me equivoco" | **nunca** | escribe (cierre de sesión) |
| `sesiones.md`, `CLAUDE.md`, `calendario.md`, raíz, `web/`, `scripts/` | **nunca** | mantiene |

Las restricciones completas de Gemini están en el [prompt](../docs/prompt-gemini.md#restricciones).

## La nota de un tema

Gemini la deja así (sin las secciones de preguntas):

```
# <Tema>
[← Índice <Materia>](../INDICE.md)

> Unidad N · Peso en exámenes: X/3 (<por qué>) · Fuentes: <archivo, pág./diap.>

## <Sección de teoría>
...

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también
```

Claude agrega, entre el encabezado y la primera sección de teoría,
`## Preguntas de recuperación` y `## Cuestionario` en el
[formato de la web](recuperacion-activa.md#formato-de-las-preguntas-en-las-notas).

## Reglas sobre el contenido

- **Sólo lo que está en el material.** Si algo no figura, se dice "no figura en el
  material". Lo que agrega el tutor va marcado *(explicación del tutor, no está en las fuentes)*;
  lo que agregó Gemini, *(agregado)*.
- **Cada dato con su cita**: archivo + página, diapositiva o minuto.
- **Prioridad**: clases y material de la cátedra del año > modelos de examen y
  cuestionarios > actividades del grupo > libros (sólo para huecos).

## Ver también

- [Recuperación activa](recuperacion-activa.md) — formato de las preguntas.
- [Cierre de sesión](cierre-de-sesion.md) — dónde quedan los errores.
