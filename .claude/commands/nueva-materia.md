---
description: Da de alta una materia nueva (carpeta completa, temas desde el programa, hub y calendario)
argument-hint: "[nombre de la materia]"
---

Dar de alta la materia: $ARGUMENTS

1. **Nombre**: si no vino en los argumentos, preguntalo. Carpeta en kebab-case:
   `materias/<materia>/` (por ejemplo `bases-de-datos`). Si ya existe, frená y avisá.
2. **Notebook**: corré `check_auth` y `list_notebooks` del MCP `notebooklm-mcp-2026`
   (ver `metodo/notebooklm.md`). Mostrá los notebooks (título · cantidad de fuentes) y
   preguntá cuál o cuáles corresponden. Si falla la auth, frená y decí que corra
   `notebooklm-mcp-2026 login`.
3. **Programa**: preguntá cómo lo obtenemos:
   - un archivo (PDF/MD) → leelo;
   - texto pegado;
   - pedirle las unidades al notebook (`query_notebook`: "¿Qué unidades y temas
     cubren las fuentes? Listalos agrupados por unidad") → **avisá que no es el
     programa oficial** y marcalo así en `programa.md`.
4. **Crear la carpeta** (sin notas de tema). Todo archivo salvo `CLAUDE.md` e
   `INDICE.md` empieza con breadcrumb en la segunda línea: `[← Índice <Materia>](INDICE.md)`
   (o `../INDICE.md` desde una subcarpeta); el verificador lo exige.
   - `CLAUDE.md` — puntero de ~10 líneas:
     ```
     # <Materia>
     - Notebook: <título> (`<id>`)
     - Próxima fecha: <fecha · tipo> (ver ../../calendario.md)
     - Índice: [INDICE.md](INDICE.md)
     - Hub: [../../CLAUDE.md](../../CLAUDE.md)

     No agregues contenido a este archivo: cada tema va como una nota en notas/.
     ```
   - `INDICE.md` — breadcrumb `[← Hub](../../CLAUDE.md)`, enlaces a
     [programa](programa.md), [temas](temas.md), [sesiones](sesiones.md),
     [fuentes](fuentes.md), [análisis de exámenes](examenes/analisis.md); después
     "_Todavía no hay notas: usá `/procesar-fuente`._" (sólo se listan notas que existen).
   - `programa.md` — breadcrumb al índice, unidades y temas (con origen: oficial o
     derivado de NotebookLM).
   - `fuentes.md` — breadcrumb, tabla `| Notebook | Id | Fuente | Tipo | Temas que cubre | Procesada |`
     con las fuentes de `list_sources` (Temas y Procesada vacíos).
   - `temas.md` — breadcrumb, tabla con **una fila por tema del programa**:
     `| Tema | Unidad | Peso (0-3) | Dominio (0-3) | Intervalo (días) | Último repaso | Próximo repaso | Nota |`,
     peso 1, dominio 0, intervalo vacío, fechas `—`, nota `—`. **Decí que el peso 1
     es provisorio hasta cargar modelos de examen.**
   - `sesiones.md` — breadcrumb, `## Errores recurrentes` (vacía) y `## Log`.
   - `examenes/analisis.md` — breadcrumb `[← Índice <Materia>](../INDICE.md)`, "sin
     modelos cargados todavía".
   - Carpeta `notas/` vacía (con `.gitkeep`).
5. **Hub**: agregá la fila en la tabla de materias de `CLAUDE.md` raíz
   (`| <Materia> | <notebook> | <fecha> | [INDICE](materias/<materia>/INDICE.md) |`),
   sacando la fila "ninguna todavía" si está.
6. **Fechas**: preguntá parciales, recuperatorios, finales y entregas (fecha, tipo y
   unidades). Cargalas en `calendario.md` ordenadas y reflejá la más próxima en el hub
   y en el puntero.
7. **Verificar**: `node scripts/verificar-docs.mjs` hasta OK.
8. **Commit** `materia <materia>: alta`, **sin Co-Authored-By**.
9. Sugerí el próximo paso: `/procesar-fuente <materia>` y, si tiene modelos,
   `/cargar-examen`.
