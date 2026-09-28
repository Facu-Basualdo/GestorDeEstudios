---
titulo: "Generic queuing model"
tipo: concepto
tags: ["modelo-de-colas","rendimiento","latencia","throughput","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [268]
veces_en_examen: 0
---

# Generic queuing model

> Modelo de colas genérico, usado para analizar latencia y throughput, cuyos siete parámetros son los únicos que pueden afectar la latencia.

Es un modelo ampliamente usado para analizar latencia y throughput de sistemas de colas, incluyendo entornos de manufactura, servicios y sistemas computacionales.

Los siete parámetros que pueden afectar la latencia predicha son:

- Arrival rate
- Queuing discipline
- Scheduling algorithm
- Service time
- Topology
- Network bandwidth
- Routing algorithm

Cada parámetro puede ser afectado por decisiones arquitectónicas: por ejemplo, el routing algorithm puede ser fijo o un algoritmo de load balancing, hay que elegir un scheduling algorithm, y la topology puede cambiar agregando o quitando servidores dinámicamente.

## Relacionado

- [[quality-attribute-model]]

## Lo mencionan

- [[quality-attribute-model]]
