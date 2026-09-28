---
titulo: "Scheduling Policies"
tipo: concepto
tags: ["scheduling","performance","prioridad","despacho"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [182]
veces_en_examen: 0
---

# Scheduling Policies

> Políticas que asignan prioridades y despachan recursos ante contención, con una parte de asignación de prioridad y una de despacho.

Una scheduling policy tiene dos partes: asignación de prioridad y despacho. En algunos casos la asignación es tan simple como first-in/first-out; en otros puede estar atada al deadline del pedido o a su importancia semántica. Los criterios que compiten incluyen uso óptimo de recursos, importancia del pedido, minimización de recursos usados, minimización de latencia, maximización de throughput, prevención de starvation para asegurar justicia, etc. Un flujo de eventos de alta prioridad puede ser despachado—asignado a un recurso—solo si ese recurso está disponible; a veces esto depende de desalojar al usuario actual. Las opciones de preemption son: puede ocurrir en cualquier momento, solo en puntos de preemption específicos, o los procesos en ejecución no pueden ser desalojados. Las políticas comunes incluyen first-in/first-out, fixed-priority scheduling, dynamic priority scheduling y static scheduling.

## Relacionado

- [[first-in-first-out]]
- [[fixed-priority-scheduling]]
- [[dynamic-priority-scheduling]]
- [[static-scheduling]]

## Lo mencionan

- [[schedule-resources]]
- [[first-in-first-out]]
- [[fixed-priority-scheduling]]
- [[dynamic-priority-scheduling]]
