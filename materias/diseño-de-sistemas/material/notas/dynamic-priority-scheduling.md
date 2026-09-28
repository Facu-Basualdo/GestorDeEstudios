---
titulo: "Dynamic Priority Scheduling"
tipo: concepto
tags: ["scheduling","dinamico","performance","prioridad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [182]
veces_en_examen: 0
---

# Dynamic Priority Scheduling

> Política de scheduling que asigna prioridades de forma dinámica, con estrategias como round-robin, earliest-deadline-first y least-slack-first.

Las estrategias incluidas son: round-robin, earliest-deadline-first y least-slack-first. En round-robin, se ordenan los pedidos y, en cada oportunidad de asignación, se asigna el recurso al siguiente pedido en ese orden; una forma especial de round-robin es el cyclic executive, donde los tiempos posibles de asignación se designan en intervalos fijos. Earliest-deadline-first asigna prioridades basadas en los pedidos pendientes con el deadline más temprano. Least-slack-first asigna la mayor prioridad al trabajo con menos 'slack time', es decir, la diferencia entre el tiempo de ejecución restante y el tiempo hasta el deadline. Para un solo procesador y procesos preemptibles, tanto earliest-deadline-first como least-slack-first son óptimos: si el conjunto de procesos puede planificarse para cumplir todos los deadlines, estas estrategias podrán planificar ese conjunto exitosamente.

## Relacionado

- [[round-robin]]
- [[earliest-deadline-first]]
- [[least-slack-first]]
- [[scheduling-policies]]

## Lo mencionan

- [[scheduling-policies]]
- [[round-robin]]
- [[earliest-deadline-first]]
- [[least-slack-first]]
