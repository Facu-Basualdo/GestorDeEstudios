---
titulo: "Stateless Service"
tipo: concepto
tags: ["stateless","estado","servicios","distribuidos","cloud"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [316,322]
veces_en_examen: 0
---

# Stateless Service

> Servicio en el que la historia de solicitudes se mantiene en el cliente o en una base de datos externa, no en la instancia.

En un servicio stateless, el estado no se almacena en la instancia del servicio; puede estar en cada cliente o persistir en una base de datos externa.
Diseñar servicios stateless permite que una instancia nueva procese una solicitud y produzca la misma respuesta que cualquier otra instancia. Es la práctica común en sistemas distribuidos.

## Relacionado

- [[state]]
- [[stateful-service]]
- [[state-management-distributed-systems]]
- [[distributed-coordination-service]]
- [[cloud]]

## Lo mencionan

- [[state-management-distributed-systems]]
- [[state]]
- [[stateful-service]]
- [[distributed-coordination-service]]
