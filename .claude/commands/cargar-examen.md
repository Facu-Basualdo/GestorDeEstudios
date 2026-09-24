---
description: Analiza un modelo de examen, recalcula el peso de los temas y lo refleja en el índice
argument-hint: "<materia> <archivo>"
---

Cargar modelo de examen: $ARGUMENTS

1. **Archivo**: si no está en `materias/<materia>/examenes/`, copialo ahí con nombre
   kebab-case (`parcial-1-2025.pdf`). Leelo.
2. **Análisis**: por cada ejercicio o pregunta: tema(s) de `temas.md`, tipo de ejercicio
   (teórico, ejercicio completo, múltiple choice, V/F, código, diagrama…) y puntaje si figura.
   Un ejercicio que no encaja en ningún tema → señalalo; puede faltar en el programa.
3. **Registrar** en `examenes/analisis.md`:
   - una sección por modelo (`## <archivo> · <tipo> · <año>`) con la tabla
     `| Ejercicio | Tema(s) | Tipo | Puntaje |`;
   - arriba, la tabla acumulada `| Tema | Apariciones / modelos | Tipos de ejercicio | Peso |`.
4. **Recalcular peso** en `temas.md` con todos los modelos cargados:
   3 = en la mayoría de los modelos o es ejercicio completo; 2 = a veces; 1 = marginal;
   0 = nunca apareció (sólo si hay ≥ 2 modelos).
5. **Índice**: en las notas que existan, reflejalo en la descripción
   ("ejercicio fijo en parciales", "sólo teórico, 1 de 3 modelos") y en el encabezado
   `Peso en exámenes: X/3` de la nota.
6. **Verificar**: `node scripts/verificar-docs.mjs` hasta OK.
7. **Commit** `examen <materia>: <archivo>`, **sin Co-Authored-By**.
8. Decí **qué temas subieron y cuáles bajaron** de peso, y si cambia la prioridad de
   la próxima sesión.
