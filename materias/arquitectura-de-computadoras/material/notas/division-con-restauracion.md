---
titulo: "División Con Restauración"
tipo: concepto
tags: ["division","restauracion","hardware","suma","resta"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [49]
veces_en_examen: 0
---

# División Con Restauración

> Método de división que reemplaza el comparador por una resta del divisor (B) al dividendo (AC), y decide si conservar la resta o restaurarla sumando según el signo resultante.

El circuito presupone que la porción del dividendo ingresada a AC es mayor o igual al divisor en B y efectúa la resta de ambos. De la comparación del signo resultante se toma la decisión de darlo por correcto (+) o de deshacer la operación de resta a través de la suma (-).

Ventajas:
- Es muy óptimo a nivel de diseño de circuito, porque la pregunta por el signo de AC está implementada en todas las arquitecturas de computadores.
- Evita desarrollar un caro y complejo comparador entre AC y B.

Paradoja del niño desobediente: la mamá dice que no pise el charco porque se va a embarrar; el niño lo pisa y pueden pasar dos cosas: no se embarra (salió bien), o si se embarra (hay que limpiarse/restaurarse).

## Relacionado

- [[division-sin-restauracion]]

## Lo mencionan

- [[division-sin-restauracion]]
