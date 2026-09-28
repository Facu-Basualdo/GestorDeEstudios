---
titulo: "Concurrency"
tipo: concepto
tags: ["concurrencia","paralelismo","threads","rendimiento"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [173]
veces_en_examen: 0
---

# Concurrency

> Es la ocurrencia de operaciones en paralelo, cuando hay múltiples hilos de control o múltiples procesadores ejecutando simultáneamente.

Ocurre cuando el sistema crea un nuevo thread, porque los threads son secuencias de control independientes. También ocurre al ejecutar en más de un procesador, incluidos los multi-core, al usar algoritmos paralelos, infraestructuras como map-reduce, bases NoSQL o algoritmos de scheduling concurrentes. La concurrencia mejora el rendimiento porque los retrasos en un thread permiten que el procesador avance en otro, pero debe manejarse con cuidado por las race conditions. En el ejemplo del texto, si dos threads ejecutan `x = 1; x++;`, el valor final de x puede ser 2 o 3. Para prevenir race conditions se pueden usar locks para forzar acceso secuencial o particionar el estado según el thread.

## Relacionado

- [[thread]]
- [[race-condition]]

## Lo mencionan

- [[thread]]
- [[race-condition]]
