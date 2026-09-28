---
titulo: "Voting"
tipo: concepto
tags: ["disponibilidad","deteccion","votacion","redundancia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78]
veces_en_examen: 0
---

# Voting

> Es una táctica que compara resultados computacionales de múltiples fuentes que deberían producir los mismos resultados y, si no los producen, decide qué resultados usar.

Depende críticamente de la lógica de votación, que suele realizarse como un singleton simple, rigurosamente revisado y probado, para que la probabilidad de error sea baja. También depende críticamente de tener múltiples fuentes para evaluar. Los esquemas típicos incluyen Replication, Functional Redundancy y Analytic Redundancy.

## Relacionado

- [[replication]]
- [[functional-redundancy]]
- [[analytic-redundancy]]
- [[detect-faults]]

## Lo mencionan

- [[detect-faults]]
- [[replication]]
- [[functional-redundancy]]
- [[analytic-redundancy]]
- [[comparison]]
- [[masking]]
