---
description: Convierte una fuente larga de NotebookLM (video, libro, apunte) en notas por tema
argument-hint: "<materia> [fuente]"
---

Procesar fuente: $ARGUMENTS

1. **Ubicar**: leé `materias/<materia>/fuentes.md` y `temas.md`. Si no se indicó la
   fuente, mostrá las no procesadas y preguntá cuál. Obtené su `source_id` con
   `list_sources` si no está.
2. **Mapa de la fuente**: `query_notebook` con `source_ids=[<id>]`: "Listá los temas
   que trata esta fuente en orden, con las páginas o minutos donde empieza y termina
   cada uno." (ver plantillas en `metodo/notebooklm.md`).
3. **Mapeo**: asociá cada parte a un tema de `temas.md` (o marcala "fuera del programa").
   **Mostrá el mapeo como tabla y esperá el OK antes de escribir.**
   `| Parte de la fuente | Páginas/min | Tema de temas.md | ¿Nota nueva o ampliar? |`
4. **Por cada tema aprobado**: pedile a NotebookLM el contenido importante (definiciones,
   procedimientos, fórmulas, ejemplos, lo que se remarca), con fuente y página/minuto.
   Usá `conversation_id` para repreguntar. Creá o ampliá `notas/<tema>.md` con la
   plantilla:
   ```
   # <Tema>
   [← Índice <Materia>](../INDICE.md)

   > Unidad N · Peso en exámenes: X/3 · Fuentes: <fuente> (págs./min)

   ## Preguntas de recuperación
   ## Cuestionario
   ## Contenido
   ## Dónde me equivoco
   ## Ver también
   ```
   - 4–8 preguntas de recuperación y 4–6 de cuestionario, en el formato de
     `metodo/recuperacion-activa.md` (lo lee la web de estudio). Cada bloque de contenido con su cita.
   - Lo propio va marcado "(explicación del tutor, no está en las fuentes)".
   - **Si NotebookLM no tiene contenido real, no crees la nota** (una nota vacía es
     peor que no tenerla). "Dónde me equivoco" arranca con "_Sin errores registrados todavía._"
   - 80–250 líneas; si pasa de ~400, partila en dos temas.
   - Antes de nombrar el archivo, `grep -ril` en `materias/`: si el tema existe en otra
     materia, usá **el mismo nombre de archivo** y enlazalas en "Ver también".
5. **Actualizar**: `fuentes.md` (temas que cubre, procesada = fecha), `INDICE.md` (fila
   por nota nueva en su unidad, descripción con afirmaciones: qué cae, qué ojo tener)
   y columna Nota de `temas.md`.
6. **Verificar**: `node scripts/verificar-docs.mjs` hasta OK.
7. **Commit** `fuente <materia>: <fuente>`, **sin Co-Authored-By**. Resumí notas
   creadas/ampliadas y temas del programa que la fuente no cubre.
