---
titulo: "Performance Tactics"
tipo: concepto
tags: ["performance","tacticas","recursos","tiempo","latencia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [177]
veces_en_examen: 0
---

# Performance Tactics

> Son tácticas cuyo objetivo es generar una respuesta a los eventos que llegan al sistema bajo alguna restricción de tiempo o de recursos.

El evento puede ser único o un stream, y es el disparador para realizar cómputo. Las tácticas controlan el tiempo o los recursos usados para generar la respuesta, como se ilustra en la Figura 9.2. Hay dos contribuyentes básicos al tiempo de respuesta y al uso de recursos: processing time y blocked time. Las categorías de tácticas son: controlar la demanda de recursos (control resource demand) o manejar los recursos disponibles para que soporten la demanda de manera más efectiva (manage resources).

## Relacionado

- [[event]]
- [[processing-time]]
- [[blocked-time]]

