---
titulo: "Mapping Between Views"
tipo: concepto
tags: ["arquitectura","vistas","mapeo","documentacion"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [420]
veces_en_examen: 0
---

# Mapping Between Views

> Asociaciones entre elementos de distintas vistas de una arquitectura, generalmente muchos-a-muchos, que se pueden capturar como tablas.

Como todas las vistas describen el mismo sistema, dos vistas tendrán mucho en común. Combinar vistas produce un conjunto de vistas, e iluminar las asociaciones entre ellas ayuda al lector a entender cómo la arquitectura funciona como un todo conceptual unificado. Las asociaciones entre elementos a través de vistas son en general muchos-a-muchos: cada módulo puede mapear a múltiples elementos runtime y cada elemento runtime puede mapear a múltiples módulos. Para crear una tabla, se listan los elementos de la primera vista en algún orden de búsqueda conveniente, y se anota o introduce la tabla con una explicación de la asociación que representa. Ejemplos de asociaciones: "is implemented by" para mapear de una vista C&C a una vista de módulos, "implements" para mapear de una vista de módulos a una C&C, "included in" para mapear de una vista de descomposición a una vista en capas, entre otras.

## Relacionado

- [[combined-view]]
- [[module-view]]

