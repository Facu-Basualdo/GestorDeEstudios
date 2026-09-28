---
titulo: "Time Coordination in a Distributed System"
tipo: concepto
tags: ["tiempo","sincronizacion","distribuidos","relojes"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [317]
veces_en_examen: 0
---

# Time Coordination in a Distributed System

> Tarea de lograr que dos o más dispositivos coincidan en la hora, considerando las diferencias entre relojes y la necesidad de secuenciar eventos.

Determinar la hora exacta no es trivial: los relojes de hardware pierden o ganan un segundo cada 12 días aproximadamente. Un dispositivo con acceso a una señal de GPS puede obtener una hora precisa a 100 nanosegundos o menos.
Los relojes de dos dispositivos en una red serán diferentes; NTP se usa para sincronizarlos. Los proveedores de cloud, como Amazon y Google, usan relojes atómicos con deriva virtualmente no medible.
Para muchas aplicaciones, una hora casi exacta es suficiente y se debe asumir algún error entre relojes. Para coordinación crítica, se usan mecanismos como vector clocks para determinar el orden de eventos, en lugar de comparar tiempos.

## Relacionado

- [[network-time-protocol]]
- [[vector-clock]]
- [[event-ordering]]

## Lo mencionan

- [[network-time-protocol]]
- [[vector-clock]]
- [[event-ordering]]
