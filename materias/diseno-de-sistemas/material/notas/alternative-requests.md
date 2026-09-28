---
titulo: "Alternative Requests"
tipo: concepto
tags: ["latencia","tecnicas","cloud","rendimiento"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [311]
veces_en_examen: 0
---

# Alternative Requests

> Variante de hedged requests que emite solicitudes adicionales solo después de recibir una cantidad parcial de respuestas, en lugar de lanzar todas por adelantado.

En el escenario descrito, se emiten 10 solicitudes. Cuando 8 completaron, se emiten 2 más; cuando se recibieron 10 respuestas en total, se cancelan las 2 que todavía siguen.

## Relacionado

- [[hedged-requests]]
- [[long-tail-latency]]

## Lo mencionan

- [[long-tail-latency]]
- [[hedged-requests]]
