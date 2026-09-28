---
titulo: "Design Kanban Board"
tipo: concepto
tags: ["kanban","tablero","seguimiento","diseno","arquitectura"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [371]
veces_en_examen: 0
---

# Design Kanban Board

> Tablero Kanban usado para hacer seguimiento visual del progreso del diseño de la arquitectura.

Establece tres categorías de ítems del backlog:
- “Not Yet Addressed”,
- “Partially Addressed”,
- “Completely Addressed”.

Al comienzo de una iteración, las entradas del backlog están en “Not Yet Addressed”. Cuando se comienza la iteración, los drivers que corresponden a la meta de la iteración se mueven a “Partially Addressed”. Al terminar la iteración y el análisis confirma que un driver fue abordado, se mueve a “Completely Addressed”.

Se deben establecer criterios claros para mover un driver; por ejemplo, que haya sido analizado o implementado en un prototipo y que se determine que satisface sus requisitos. Los drivers seleccionados para una iteración pueden no quedar completamente abordados y permanecen en “Partially Addressed”.

Se pueden usar colores para diferenciar la prioridad de las entradas. El tablero permite decidir si se necesitan iteraciones adicionales; idealmente la ronda de diseño termina cuando la mayoría de los drivers (o al menos los de mayor prioridad) están en “Completely Addressed”.

## Relacionado

- [[architectural-backlog]]
- [[architectural-driver]]

## Lo mencionan

- [[architectural-backlog]]
