---
description: Cierra la sesión — actualiza seguimiento, errores e índice, verifica el grafo y commitea
argument-hint: "[materia]"
---

Cerrar sesión: $ARGUMENTS

Seguí `metodo/cierre-de-sesion.md`. Resumen:

1. **`temas.md`**: por cada tema trabajado, dominio, intervalo, último y próximo repaso
   (`metodo/repeticion-espaciada.md`: 0–1 → 1 día; 2 → 3; 3 → 7; 3 sostenido → doble;
   **nunca después del examen**: si se pasa, el día anterior).
2. **`sesiones.md`**: entrada nueva **arriba del log** (fecha, duración, temas con
   dominio antes→después, preguntas falladas, dudas abiertas, próximos pasos) y
   actualizá "Errores recurrentes" (lista viva, no se apila).
3. **Notas**: cada error nuevo a "Dónde me equivoco" con fecha (si ya estaba, sumá la fecha).
4. **`INDICE.md`**: sumá el error nuevo a la descripción del tema con ` · `
   (afirmaciones, no rótulos).
5. **Grafo**: breadcrumbs, fila en el índice para notas nuevas, "Ver también" en las
   dos puntas.
6. **Verificar**: `node scripts/verificar-docs.mjs`; corregí y repetí **hasta que dé OK**.
7. **Commit** `sesión <materia>: <temas>`, **sin línea Co-Authored-By**.
8. **Al estudiante**: qué se actualizó (3–5 líneas) y la fecha del próximo repaso de
   cada tema trabajado.
