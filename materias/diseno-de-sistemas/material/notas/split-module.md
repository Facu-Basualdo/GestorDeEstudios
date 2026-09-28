---
titulo: "Split Module"
tipo: concepto
tags: ["modificabilidad","cohesion","refactoring"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [161]
veces_en_examen: 0
---

# Split Module

> Split module es una tactica de Increase Cohesion que refactoriza un modulo en varios submodulos mas cohesivos.

Si el modulo que se modifica incluye responsabilidades que no son cohesivas, los costos de modificacion seran probablemente altos. Refactorizar el modulo en varios modulos mas cohesivos deberia reducir el costo promedio de cambios futuros. Dividir no debe consistir simplemente en poner la mitad de las lineas de codigo en cada submodulo; debe resultar en submodulos que sean cohesivos por si mismos.

## Relacionado

- [[increase-cohesion]]

## Lo mencionan

- [[increase-cohesion]]
