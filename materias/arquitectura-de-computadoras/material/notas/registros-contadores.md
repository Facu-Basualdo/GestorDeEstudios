---
titulo: "Registros Contadores"
tipo: concepto
tags: ["registros","contadores","flip-flop","arrastre"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [30]
veces_en_examen: 0
---

# Registros Contadores

> Registros que permiten incrementar su contenido binario en una unidad por cada señal de cuenta.

Son capaces de contar el número de impulsos recibidos. Se implementan con una cadena de flip-flops preferentemente tipo T o JK, porque permiten complementar el valor con una señal de gobierno.

El contador funciona con una lógica combinacional que gestiona el impulso de cuenta (de duración θ1). Cuando el biestable de menor peso posicional está en 0, se activa para cambiar a 1 y propagar el impulso al siguiente biestable para tener en cuenta el arrastre. Es crucial que el biestable se complemente en todos los casos y propague el impulso solo si estaba en 1 antes de la complementación, condición necesaria para el arrastre.

## Relacionado

- [[flip-flop-jk]]
- [[flip-flop-t]]
- [[senales-de-gobierno]]
- [[registros]]
- [[registros-de-proposito-especifico]]

## Lo mencionan

- [[registros-descontadores]]
