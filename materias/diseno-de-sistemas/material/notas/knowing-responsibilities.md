---
titulo: "Knowing responsibilities"
tipo: concepto
tags: ["rdd","responsabilidades","knowing","modelo-de-dominio","diseno-oo"]
temas: ["[[fundamentos-de-diseno-orientado-a-objetos]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [6]
veces_en_examen: 0
---

# Knowing responsibilities

> Tipo de responsabilidad en RDD que consiste en conocer datos privados encapsulados, objetos relacionados o cosas que puede derivar o calcular.

Son una de las dos categorías de responsabilidades en RDD. Incluyen:

- Conocer sobre datos privados encapsulados.
- Conocer sobre objetos relacionados.
- Conocer sobre cosas que puede derivar o calcular.

Para objetos de software de dominio, el modelo de dominio, por los atributos y asociaciones que ilustra, suele inspirar las responsabilidades relacionadas con "knowing". Por ejemplo, si la clase Sale del modelo de dominio tiene un atributo time, es natural que una clase de software Sale conozca su time, por el objetivo de low representational gap.

## Relacionado

- [[responsibility]]
- [[responsibility-driven-design]]

## Lo mencionan

- [[responsibility]]
