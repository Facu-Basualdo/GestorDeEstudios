---
titulo: "Stateful Service"
tipo: concepto
tags: ["stateful","estado","servicios","distribuidos"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [316]
veces_en_examen: 0
---

# Stateful Service

> Servicio cuya historia de solicitudes se mantiene en cada instancia del servicio.

En un servicio stateful, la historia que afecta el cálculo de las respuestas se almacena en cada instancia. Si la instancia falla, el servicio pierde su historia y recuperar ese estado puede ser difícil.
Por eso la práctica común es evitar diseñar servicios stateful.

## Relacionado

- [[state]]
- [[stateless-service]]
- [[state-management-distributed-systems]]

## Lo mencionan

- [[state-management-distributed-systems]]
- [[state]]
- [[stateless-service]]
