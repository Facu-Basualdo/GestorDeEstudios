---
titulo: "Round-Robin"
tipo: concepto
tags: ["scheduling","round-robin","performance","load-balancer","algoritmo","distribucion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [182,313]
veces_en_examen: 0
---

# Round-Robin

> Estrategia de scheduling que ordena los pedidos y, en cada oportunidad de asignación, asigna el recurso al siguiente pedido en ese orden.

Los pedidos se ordenan y, en cada oportunidad de asignación, se asigna el recurso al siguiente pedido. Una forma especial de round-robin es el cyclic executive, donde los tiempos posibles de asignación se designan en intervalos fijos.

## Relacionado

- [[dynamic-priority-scheduling]]
- [[cyclic-executive]]
- [[load-balancer]]

## Lo mencionan

- [[maintain-multiple-copies-of-computations]]
- [[dynamic-priority-scheduling]]
- [[cyclic-executive]]
- [[load-balancer]]
