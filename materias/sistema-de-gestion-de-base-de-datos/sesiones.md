# Sesiones — Sistemas de Gestión de Bases de Datos
[← Índice Sistemas de Gestión de Bases de Datos](INDICE.md)

> Leé sólo "Errores recurrentes" y las últimas 3 entradas del log.

## Errores recurrentes

_Sin errores registrados todavía._

## Log

### 2026-10-05 · web · cuestionario
- **Temas**: lenguaje SQL avanzado (0→2) — 10 de 14 (71 %)
- **Fallé** (las cuatro de funciones de ventana):
  - con ventas de 200, 100 y 50 (las dos últimas el mismo día) y sin marco, puse 250 y 350: el default RANGE junta los empates y las dos muestran 350
  - elegí GROUP BY para mostrar cada venta con su acumulado: GROUP BY resume, la ventana conserva cada fila
  - elegí LEAD para comparar con la venta anterior: es LAG
  - creí que ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW define el grupo: define el marco (desde la primera fila del grupo hasta la actual); el grupo es PARTITION BY
- **Dudas abiertas**: —
- **Próximos pasos**: parcial BT1 mañana 2026-10-06; hoy releer "Funciones de ventana" de la nota y rehacer el cuestionario

### 2026-10-03 — Alta de la materia
- Gemini (en Antigravity) armó la estructura; el tutor reescribió las 9 notas desde las clases 1–6 y las bitácoras del grupo.
- Los parciales viejos quedan fuera: la cátedra cambió la forma de evaluar en 2026.
- Fecha del Parcial BT1: 2026-10-06 (martes).
