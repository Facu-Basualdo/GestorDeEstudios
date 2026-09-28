---
titulo: "Vector Clock"
tipo: concepto
tags: ["vector-clock","orden","distribuidos","relojes"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [317]
veces_en_examen: 0
---

# Vector Clock

> Mecanismo, que no es realmente un reloj sino contadores, que rastrea las acciones a medida que se propagan por los servicios de una aplicación para determinar si un evento ocurrió antes que otro.

Los vector clocks se usan para la coordinación crítica entre dispositivos, en lugar de comparar horas. Permiten determinar si un evento ocurrió antes que otro, rastreando las acciones a medida que se propagan por los servicios de una aplicación.
La mayoría de los mecanismos de coordinación de datos se basan en este tipo de ordenamiento de acciones.

## Relacionado

- [[event-ordering]]
- [[time-coordination-distributed-system]]

## Lo mencionan

- [[time-coordination-distributed-system]]
- [[event-ordering]]
