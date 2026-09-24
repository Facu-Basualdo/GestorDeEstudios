# Repetición espaciada
[← Hub](../CLAUDE.md)

> Regla 4 del tutor. Se aplica en [/cerrar-sesion](cierre-de-sesion.md), sobre `temas.md`.

## La tabla de intervalos

**Al terminar una sesión, cada tema trabajado actualiza Dominio, Intervalo, Último
repaso y Próximo repaso en `temas.md`.**

| Dominio al cerrar | Intervalo nuevo |
|---|---|
| 0 o 1 | 1 día |
| 2 | 3 días |
| 3 (y antes no estaba en 3) | 7 días |
| 3 (ya estaba en 3 y lo sostuvo) | el doble del intervalo anterior |

- `Último repaso` = hoy. `Próximo repaso` = hoy + intervalo.
- **El dominio puede bajar.** Si un tema en 3 sale en 1, vuelve a 1 día: el intervalo
  largo se pierde. No se "promedia" con la historia.

## El tope del examen

**El próximo repaso nunca cae después del examen que incluye el tema.** Si hoy +
intervalo se pasa de esa fecha, el próximo repaso es **el día anterior al examen**.

Ejemplo: hoy 2026-09-23, dominio 3 sostenido con intervalo previo 7 → nuevo intervalo
14 → daría 2026-10-07. El parcial es el 2026-10-02 → próximo repaso 2026-10-01.
En la columna Intervalo queda 14 (el intervalo "real"), así el doblado sigue bien
después del examen.

Si el día anterior al examen ya es hoy o pasó, el próximo repaso es mañana (si el
examen es mañana, no hay más repasos: se registra igual).

## Qué cuenta como "sostenerlo"

- El dominio se asigna con los criterios de [recuperación activa](recuperacion-activa.md#cómo-se-asigna-el-dominio):
  3 = bien, solo y rápido.
- **Sostener** = el tema ya tenía dominio 3 al empezar la sesión y la terminó en 3.
- Si respondió bien pero con una ayuda, es 2, aunque antes estuviera en 3.

## Qué pasa con los temas no trabajados

- No se tocan. Su `Próximo repaso` puede quedar vencido; `/repaso` y `/estudiar` lo
  levantan.
- Un repaso vencido hace muchos días no baja el dominio automáticamente: se mide
  cuando se pregunta.

## Formato en temas.md

```
| Tema | Unidad | Peso (0-3) | Dominio (0-3) | Intervalo (días) | Último repaso | Próximo repaso | Nota |
| Normalización | 3 | 3 | 2 | 3 | 2026-09-23 | 2026-09-26 | [nota](notas/normalizacion.md) |
```

Un tema nunca trabajado: dominio 0, intervalo vacío, fechas `—`.

## Ver también

- [Priorización](priorizacion.md) — repaso vencido como desempate.
- [Cierre de sesión](cierre-de-sesion.md) — dónde se aplica esta regla.
