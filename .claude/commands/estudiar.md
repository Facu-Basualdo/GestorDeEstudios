---
description: Arma la sesión de hoy por puntaje y la conduce con recuperación activa
argument-hint: "<materia> [minutos]"
---

Sesión de estudio: $ARGUMENTS

1. **Tiempo y estado**: si faltan los minutos o cómo viene el estudiante, preguntá las
   dos cosas juntas antes de seguir (regla 2, `metodo/priorizacion.md`).
2. **Contexto mínimo**: `calendario.md`, `materias/<materia>/temas.md`, su `INDICE.md`
   y **sólo las últimas 3 entradas** + "Errores recurrentes" de `sesiones.md`.
   No abras notas todavía.
3. **Puntajes**: `peso × (3 − dominio) × urgencia` para cada tema. Proponé los temas
   con una línea de porqué cada uno (números a la vista), a ~15–25 min por tema y
   **5 min de cierre**. Mencioná repasos vencidos. **Esperá el OK.**
4. **Por cada tema**, abrí su nota (o, si no tiene, consultá NotebookLM) y seguí
   `metodo/recuperacion-activa.md`:
   - pregunta primero, **una por vez**; nunca el resumen antes;
   - corrección concreta: bien / faltó / mal;
   - al menos una pregunta apunta a "Dónde me equivoco";
   - si la nota no alcanza, consultá NotebookLM y citá; si NotebookLM no lo tiene, decilo.
   - Anotá cada error (qué dijo, qué era, causa) para el cierre.
   - Al terminar el tema, decí el dominio asignado y por qué en una línea.
5. **Controlá el tiempo**: avisá al pasar a otro tema y cuando queden 5 minutos.
6. **Cierre**: ejecutá el flujo de `/cerrar-sesion` (`.claude/commands/cerrar-sesion.md`).
