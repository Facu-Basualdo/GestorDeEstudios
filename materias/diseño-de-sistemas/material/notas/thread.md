---
titulo: "Thread"
tipo: concepto
tags: ["thread","concurrencia","hilos","control"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [173]
veces_en_examen: 0
---

# Thread

> Un thread es una secuencia de control independiente.

La concurrencia ocurre cada vez que el sistema crea un nuevo thread. El multitasking se soporta con threads independientes, y múltiples usuarios se atienden simultáneamente mediante threads. En el ejemplo del texto, dos threads ejecutan `x = 1; x++;` y el valor final de x puede ser 2 o 3 por el interleaving.

## Relacionado

- [[concurrency]]
- [[race-condition]]

## Lo mencionan

- [[concurrency]]
- [[race-condition]]
- [[processor-sharing]]
- [[disk-sharing]]
