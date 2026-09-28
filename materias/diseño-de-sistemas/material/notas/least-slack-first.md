---
titulo: "Least-Slack-First"
tipo: concepto
tags: ["scheduling","slack","deadline","performance"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [182]
veces_en_examen: 0
---

# Least-Slack-First

> Estrategia de scheduling dinámico que asigna la mayor prioridad al trabajo con menos 'slack time', es decir, la diferencia entre el tiempo de ejecución restante y el tiempo hasta el deadline.

Asigna la mayor prioridad al trabajo con menos slack time. Junto con earliest-deadline-first, es una estrategia óptima para un solo procesador y procesos preemptibles.

## Relacionado

- [[dynamic-priority-scheduling]]
- [[earliest-deadline-first]]

## Lo mencionan

- [[dynamic-priority-scheduling]]
- [[earliest-deadline-first]]
