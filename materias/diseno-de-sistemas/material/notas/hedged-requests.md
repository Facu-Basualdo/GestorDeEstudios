---
titulo: "Hedged Requests"
tipo: concepto
tags: ["latencia","tecnicas","cloud","rendimiento"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [311]
veces_en_examen: 0
---

# Hedged Requests

> Técnica para manejar long tail latency que consiste en hacer más solicitudes de las necesarias y cancelar o ignorar las restantes cuando ya se recibieron suficientes respuestas.

Por ejemplo, si se quieren lanzar 10 instancias de un microservicio, se emiten 11 solicitudes y, cuando 10 completaron, se termina la solicitud que aún no respondió.

## Relacionado

- [[long-tail-latency]]
- [[alternative-requests]]

## Lo mencionan

- [[long-tail-latency]]
- [[alternative-requests]]
