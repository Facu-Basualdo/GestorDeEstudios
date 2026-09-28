---
titulo: "Roll Back"
tipo: concepto
tags: ["deployability","rollback","tactica","despliegue"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [110]
veces_en_examen: 0
---

# Roll Back

> Roll back es una táctica de deployability que permite revertir un despliegue a su estado anterior si se descubren defectos o no cumple las expectativas.

Como los despliegues pueden involucrar múltiples actualizaciones coordinadas de servicios y sus datos, el mecanismo de rollback debe poder realizar un seguimiento de todas ellas o revertir las consecuencias de cualquier actualización, idealmente de forma automatizada.

## Relacionado

- [[manage-deployment-pipeline]]
- [[tactics-for-deployability]]

## Lo mencionan

- [[tactics-for-deployability]]
- [[manage-deployment-pipeline]]
- [[scale-rollouts]]
