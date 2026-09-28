---
titulo: "Desbordamiento o Sobrecapacidad"
tipo: concepto
tags: ["desbordamiento","sobrecapacidad","registros","biestable"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [38]
veces_en_examen: 0
---

# Desbordamiento o Sobrecapacidad

> Situación de sobrecapacidad que se detecta comparando los arrastres del bit más significativo de la magnitud y del bit del signo; si son distintos, hay desbordamiento.

Debido a la longitud fija del tamaño de los registros, estos deben verificar situaciones de sobrecapacidad e indicar esta situación en un biestable diseñado a tal efecto.

- Si signo de A ≠ signo de B → no hay sobrecapacidad.
- Si signo de A = signo de B → puede haber sobrecapacidad.

La condición se detecta observando el arrastre producido por el bit más significativo de la magnitud y el del bit del signo. Si son distintos, se produce una condición de sobrecapacidad y debe indicarse en un bit desbordamiento.

## Relacionado

- [[biestable]]

## Lo mencionan

- [[circuito-sumador-sustractor-algebraico-con-signo]]
- [[circuito-sumador-sustractor-algebraico-con-coma-flotante]]
