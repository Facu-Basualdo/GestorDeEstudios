---
titulo: "Pick Your Battles"
tipo: concepto
tags: ["diseno","acoplamiento","estabilidad","grasp"]
temas: ["[[patrones-grasp]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [32]
veces_en_examen: 0
---

# Pick Your Battles

> Consejo de diseño que recomienda concentrar los esfuerzos de reducción de acoplamiento en los puntos de alta inestabilidad o evolución realista en lugar de intentar bajar el acoplamiento en todo el sistema.

No es el acoplamiento alto en sí mismo lo problemático; es el acoplamiento alto a elementos que son inestables en alguna dimensión, como su interfaz, su implementación o su mera presencia.

Como diseñadores podemos agregar flexibilidad, encapsular detalles e implementaciones, y en general diseñar con menor acoplamiento en muchas áreas. Pero si ponemos esfuerzo en "blindar contra el futuro" o bajar el acoplamiento sin una motivación realista, no es tiempo bien invertido.

Hay que elegir las batallas en la reducción de acoplamiento y en la encapsulación. Hay que enfocarse en los puntos de alta inestabilidad o evolución realista. Por ejemplo, en el proyecto NextGen se sabe que deben conectarse diferentes calculadoras de impuestos de terceros (con interfaces únicas); por lo tanto, diseñar con bajo acoplamiento en ese punto de variación es práctico.

## Relacionado

- [[low-coupling]]
- [[coupling]]

