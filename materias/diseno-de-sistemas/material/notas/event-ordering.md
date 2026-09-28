---
titulo: "Event Ordering"
tipo: concepto
tags: ["orden","eventos","distribuidos"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [317]
veces_en_examen: 0
---

# Event Ordering

> Conocimiento del orden en que ocurrieron los eventos, más importante que la hora exacta en muchos sistemas distribuidos.

En aplicaciones como decisiones de trading en bolsa o subastas en línea, es crítico procesar los paquetes en el mismo orden en que fueron transmitidos.
Para ello, en lugar de comparar tiempos, los sistemas distribuidos usan mecanismos como vector clocks para determinar si un evento ocurrió antes que otro. Esto asegura que la aplicación aplique las acciones en el orden correcto.

## Relacionado

- [[vector-clock]]
- [[time-coordination-distributed-system]]

## Lo mencionan

- [[time-coordination-distributed-system]]
- [[vector-clock]]
