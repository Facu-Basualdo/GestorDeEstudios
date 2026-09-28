---
titulo: "Earliest-Deadline-First"
tipo: concepto
tags: ["scheduling","deadline","tiempo-real","performance"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [182]
veces_en_examen: 0
---

# Earliest-Deadline-First

> Estrategia de scheduling dinámico que asigna prioridades basándose en los pedidos pendientes con el deadline más temprano.

Asigna prioridades según los pedidos pendientes con el deadline más temprano. Para un solo procesador y procesos preemptibles, es una estrategia óptima junto con least-slack-first: si el conjunto de procesos puede planificarse para cumplir todos los deadlines, esta estrategia podrá planificarlo exitosamente.

## Relacionado

- [[dynamic-priority-scheduling]]
- [[least-slack-first]]

## Lo mencionan

- [[dynamic-priority-scheduling]]
- [[least-slack-first]]
