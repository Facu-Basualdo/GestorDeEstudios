---
titulo: "Long Tail Latency"
tipo: concepto
tags: ["latencia","cola-larga","rendimiento","cloud"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [311]
veces_en_examen: 0
---

# Long Tail Latency

> Fenómeno en el que una pequeña proporción de solicitudes tarda mucho más que el promedio, lo que produce una cola larga en el histograma de latencias.

La latencia de las solicitudes puede tener una cola larga aunque la media sea tolerable. En un ejemplo con 1.000 solicitudes "launch instance" a AWS, el histograma alcanza su pico en 22 segundos, la media es 28 segundos, la mediana 23 segundos y el percentil 95 es 57 segundos; el 5% de las solicitudes tarda más que eso, llegando a ser de 2 a 10 veces más que el promedio. Estas mediciones están en la cola larga a la derecha del histograma. Las long tail latencies son resultado de congestión o fallas en algún punto del camino de la solicitud; la causa está fuera del control del desarrollador del servicio. Dos técnicas para manejarlas son hedged requests y alternative requests.

## Relacionado

- [[hedged-requests]]
- [[alternative-requests]]

## Lo mencionan

- [[fallas-en-la-nube]]
- [[hedged-requests]]
- [[alternative-requests]]
