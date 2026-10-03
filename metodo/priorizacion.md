# Priorización
[← Hub](../CLAUDE.md)

> Regla 1 y 2 del tutor. La usan `/estudiar`, `/repaso` y `/progreso`.

## La fórmula

**`puntaje = peso × (3 − dominio) × urgencia`**

Los tres factores salen de archivos, no de la intuición del tutor:

| Factor | De dónde sale | Rango |
|---|---|---|
| Peso | columna Peso de `temas.md` (definida por los modelos de examen) | 0–3 |
| Dominio | columna Dominio de `temas.md` (definida por las sesiones) | 0–3 |
| Urgencia | días a la próxima fecha de [calendario.md](../calendario.md) que incluye el tema | 1–3 |

`(3 − dominio)` es "lo que falta aprender": un tema dominado (3) da 0 y no compite por
tiempo nuevo; sólo vuelve por [repetición espaciada](repeticion-espaciada.md).

### Urgencia

| Días a la próxima fecha que incluye el tema | Urgencia |
|---|---|
| ≤ 3 | 3 |
| 4–7 | 2 |
| 8–21 | 1,5 |
| > 21, o sin fecha | 1 |

- **Se cuenta sólo la fecha más próxima con estado `pendiente`** que incluya el tema
  (por unidad o por tema en la columna "Unidades/temas").
- Si la fila del calendario dice "todo" o "integrador", incluye todos los temas de la materia.
- Si la fecha no dice qué unidades entran, **preguntá** antes de asumir que entra todo.

### Peso

- 3 = aparece en la mayoría de los modelos o es un ejercicio completo.
- 2 = aparece a veces.
- 1 = marginal. **Es el valor inicial cuando no hay modelos cargados**: avisale al
  estudiante que la priorización es provisoria hasta correr `/cargar-examen`.
- 0 = nunca apareció. Queda con puntaje 0: no se estudia salvo pedido explícito.

## Cómo se presenta

**Una línea de porqué por tema**, con los números a la vista. Ejemplo:

```
1. Normalización — 3 × (3−1) × 2 = 12 · ejercicio fijo, parcial en 6 días, la última vez confundí dependencias
2. Álgebra relacional — 2 × (3−0) × 2 = 12 · nunca la practiqué
3. SQL joins — 3 × (3−2) × 2 = 6 · sólo pulir
```

- Ordená de mayor a menor puntaje.
- **Desempate**: primero el de menor dominio; después el que tenga el repaso vencido
  hace más días; después el de más peso.
- Si hay un repaso vencido de un tema con puntaje bajo, igual mencionalo al final
  ("vencido, 5 min de repaso").

## Antes de planificar

**Si el estudiante no dijo cuánto tiempo tiene y cómo viene, preguntá antes de armar
el plan** (regla 2). Dos preguntas cortas, juntas:

- ¿Cuántos minutos tenés hoy?
- ¿Cómo venís? (cansado, fresco, con algo puntual que te preocupa)

El estado cambia el plan: cansado → menos temas y más repaso de cosas conocidas; algo
puntual → ese tema entra primero aunque no tenga el mayor puntaje (decilo).

## Reparto del tiempo

- **~15–25 minutos por tema**, según dominio: dominio 0 → 25; dominio 2 → 15.
- **5 minutos de cierre siempre** reservados para [/cerrar-sesion](cierre-de-sesion.md).
- Ejemplo: 60 minutos → 55 útiles → 2 temas de 25 o 3 de ~18.
- Menos de 20 minutos → un solo tema, o sólo `/repaso` si hay vencidos.

## Casos borde

- **Sin fechas en el calendario**: toda urgencia es 1; decilo y sugerí cargar fechas.
- **Fecha pasada con estado `pendiente`**: preguntá cómo le fue y actualizá el estado
  antes de calcular.
- **Tema sin nota todavía**: puede priorizarse igual; la sesión arranca buscando en
  `material/texto/` y, si hay contenido real, sugerí pasar ese material por Gemini
  ([material.md](material.md)) para que quede la nota.
- **Todo en dominio 3**: no hay puntaje positivo; la sesión es `/repaso` o práctica
  con modelos de examen.

## Ver también

- [Repetición espaciada](repeticion-espaciada.md) — qué pasa después de estudiar un tema.
- [Recuperación activa](recuperacion-activa.md) — cómo se asigna el dominio.
