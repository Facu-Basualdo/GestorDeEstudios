---
titulo: "State Management in Distributed Systems"
tipo: concepto
tags: ["estado","gestion","distribuidos","servicios","stateless"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [316]
veces_en_examen: 0
---

# State Management in Distributed Systems

> Gestión del estado interno de un servicio que afecta el cálculo de la respuesta a una solicitud, decidiendo dónde se almacena la historia de solicitudes.

El estado es la información interna de un servicio que afecta el cálculo de la respuesta a una solicitud. La gestión del estado se vuelve importante cuando un servicio puede procesar más de una solicitud a la vez, ya sea porque una instancia es multihilo, porque hay varias instancias detrás de un load balancer, o ambas.
Las tres opciones para guardar la historia son: en cada instancia (stateful), en cada cliente (stateless), o en una base de datos externa (stateless). La práctica común es diseñar servicios stateless, porque los stateful pierden su historia si fallan y recuperarla es difícil, y porque una instancia nueva puede producir la misma respuesta que cualquier otra instancia.

## Relacionado

- [[state]]
- [[stateful-service]]
- [[stateless-service]]
- [[load-balancer]]

## Lo mencionan

- [[state]]
- [[stateful-service]]
- [[stateless-service]]
