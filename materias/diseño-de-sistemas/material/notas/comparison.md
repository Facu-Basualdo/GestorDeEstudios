---
titulo: "Comparison"
tipo: concepto
tags: ["safety","tactica","comparacion","redundancia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [203]
veces_en_examen: 0
---

# Comparison

> Táctica que permite detectar estados inseguros comparando las salidas producidas por varios elementos sincronizados o replicados.

Trabaja junto con una táctica de redundancy, típicamente la active redundancy presentada en availability. Cuando el número de réplicas es tres o más, comparison no solo puede detectar un estado inseguro sino también indicar qué componente lo causó. Se relaciona con la táctica de voting usada en availability, aunque comparison no siempre lleva a una votación: otra opción es apagar el sistema si las salidas difieren.

## Relacionado

- [[redundancy]]
- [[active-redundancy]]
- [[voting]]

## Lo mencionan

- [[unsafe-state-detection]]
