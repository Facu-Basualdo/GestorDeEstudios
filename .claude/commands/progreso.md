---
description: Estado y riesgo por materia (dominio ponderado, temas flojos, repasos vencidos). Sólo lectura
argument-hint: "[materia]"
---

Progreso: $ARGUMENTS

**Sólo lectura: no modifica archivos ni commitea.**

1. **Leer**: `calendario.md` y `temas.md` de la materia (o de todas si no se indicó).
   Nada más.
2. **Calcular por materia**:
   - **Dominio ponderado** = Σ(peso × dominio) / Σ(peso), en escala 0–3 (y en %).
   - **Temas flojos**: dominio 0–1 con peso ≥ 2.
   - **Repasos vencidos**: `Próximo repaso` < hoy.
   - **Días a la próxima fecha** pendiente del calendario.
3. **Riesgo**, con una línea de por qué:
   - **alto**: próxima fecha ≤ 7 días y (dominio ponderado < 1,5 o algún tema flojo);
   - **medio**: próxima fecha ≤ 21 días y dominio ponderado < 2, o repasos vencidos de peso ≥ 2;
   - **bajo**: el resto.
   Si los pesos son todos 1 (sin modelos cargados), aclaralo: el riesgo es provisorio.
4. **Mostrar** una tabla
   `| Materia | Dominio pond. | Temas flojos | Vencidos | Próxima fecha (días) | Riesgo |`
   y debajo, por materia en riesgo alto o medio, los 3 temas de mayor puntaje como
   sugerencia para `/estudiar`.
