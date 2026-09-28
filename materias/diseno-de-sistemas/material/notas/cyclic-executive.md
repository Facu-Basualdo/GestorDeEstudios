---
titulo: "Cyclic Executive"
tipo: concepto
tags: ["scheduling","round-robin","statico","performance"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [182,183]
veces_en_examen: 0
---

# Cyclic Executive

> Forma especial de round-robin y de static scheduling en la que los tiempos posibles de asignación, los puntos de preemption y la secuencia de asignación al recurso se determinan en intervalos fijos u offline.

Como forma especial de round-robin, los tiempos posibles de asignación se designan en intervalos fijos. Como estrategia de static scheduling, los puntos de preemption y la secuencia de asignación al recurso se determinan offline. La sobrecarga de runtime del scheduler se obvia.

## Relacionado

- [[round-robin]]
- [[static-scheduling]]

## Lo mencionan

- [[round-robin]]
- [[static-scheduling]]
