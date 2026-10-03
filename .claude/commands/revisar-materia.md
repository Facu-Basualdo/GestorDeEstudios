---
description: Revisa la teoría que escribió Gemini contra el material y arma las preguntas y cuestionarios
argument-hint: "<materia> [nota]"
---

Revisar materia: $ARGUMENTS

Paso 3 del flujo de `metodo/material.md`. Gemini ya extrajo el texto a
`material/texto/` y escribió la teoría; acá se controla y se arman las preguntas.

1. **Qué revisar**: con `git status` y `git diff --stat materias/<materia>/` mirá qué
   creó o cambió Gemini (sin commitear). Si se indicó una nota, sólo esa. Si el
   estudiante pegó el resumen final de Gemini, usalo de guía. Mostrá la lista de notas
   a revisar, ordenadas por peso, y **esperá el OK** si son más de 5.

2. **Restricciones de Gemini** (`docs/prompt-gemini.md#restricciones`): con `git diff`
   comprobá que no tocó `sesiones.md`, el `CLAUDE.md` de la materia, las columnas de
   seguimiento de `temas.md`, "Dónde me equivoco", ni nada fuera de la carpeta. Si lo
   hizo, restaurá esa parte a mano a partir del `git diff` (un `git checkout` del archivo
   entero se llevaría también lo bueno) y avisá.

3. **Por cada nota, revisar la teoría** contra `material/texto/`:
   - elegí 3–5 afirmaciones clave (definiciones, pasos, números) y buscá cada una con
     `grep -n` en el texto extraído, en el archivo y la página que cita la nota;
   - si la cita no lo dice, corregí la afirmación o marcala *(sin fuente: verificar)*;
   - si contradice al material de la cátedra, manda la cátedra;
   - lo que falte para el examen (según `examenes/analisis.md`) y esté en el material,
     agregalo con su cita.
   No reescribas lo que está bien: corregí lo puntual.

4. **Escribir las preguntas**, entre el encabezado y la primera sección de teoría, en
   el formato de `metodo/recuperacion-activa.md#formato-de-las-preguntas-en-las-notas`:
   - `## Preguntas de recuperación`: 5–10, de definición, procedimiento, comparación y
     "¿por qué?". Respuesta corta y exacta, con enlace a la sección que la explica.
   - `## Cuestionario`: 4–8 de opción múltiple. Los distractores salen de errores
     reales (`examenes/analisis.md`, "Dónde me equivoco", `sesiones.md`) o probables,
     nunca absurdos. Varias correctas sólo si el examen lo hace.
   - Lo que viene literal de un examen o cuestionario de la cátedra lleva *(cátedra)*.
   - Las anclas tienen que coincidir con un título `##` de la nota.
   Si la nota ya tenía preguntas, completá lo que falte; no las dupliques.

5. **Fechas**: si `programa.md` tiene `## Fechas` nuevas, pasalas a `calendario.md`
   y reflejá la próxima en la tabla del hub (`CLAUDE.md`) y en el `CLAUDE.md` de la materia.

6. **Verificar**: `node scripts/verificar-docs.mjs` hasta OK y `cd web && npm run datos`
   sin avisos de la materia.

7. **Commit** `revisión <materia>: <notas>`, **sin Co-Authored-By**.

8. **Al estudiante**, en 5–8 líneas: qué corregiste de Gemini (lo grave primero),
   cuántas preguntas quedaron por nota, temas sin material suficiente y el próximo paso
   (`/estudiar <materia>`).
