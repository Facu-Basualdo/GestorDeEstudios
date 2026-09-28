---
titulo: "Response of a Class"
tipo: concepto
tags: ["testability","metricas","clases","acoplamiento","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [242]
veces_en_examen: 0
---

# Response of a Class

> Métrica estructural que cuenta los métodos de una clase C más los métodos de otras clases invocados por los métodos de C.

Se ha demostrado empíricamente que correlaciona con la testability: mantener baja esta métrica puede aumentar la testability. Es una métrica a nivel de clase. A nivel de arquitectura, propagation cost y decoupling level miden el nivel general de acoplamiento.

## Relacionado

- [[limit-structural-complexity]]
- [[decoupling-level]]

## Lo mencionan

- [[limit-structural-complexity]]
