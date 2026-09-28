---
titulo: "Design Rationale"
tipo: concepto
tags: ["design-rationale","decisiones","arquitectura","documentacion","rationale","decisiones-diseno"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [370,421]
veces_en_examen: 0
---

# Design Rationale

> Es el registro de las decisiones de diseño y su justificación, que explica por qué el diseño tiene su forma actual y por qué es sólido.

Cuando se estudia un diagrama de arquitectura, se ve el producto final del proceso de pensamiento, pero no las decisiones que llevaron a ese resultado. Registrar las decisiones de diseño más allá de la representación de elementos, relaciones y propiedades es fundamental para entender cómo se llegó al resultado; esto constituye la rationale.

Las decisiones de diseño incluyen:
- Seleccionar un concepto de diseño entre varias alternativas.
- Crear estructuras instanciando el concepto seleccionado.
- Establecer relaciones entre elementos y definir interfaces.
- Asignar recursos (personas, hardware, cómputo).

Cuando el objetivo de la iteración involucra satisfacer un escenario de atributo de calidad importante, algunas decisiones juegan un rol significativo. Se debe tener especial cuidado en registrarlas, justificar las decisiones y documentar los riesgos asociados para que puedan revisarse.

La cantidad de información puede ajustarse según la criticidad del sistema. Un mínimo puede ser una tabla simple; se puede agregar: qué evidencia justificó las decisiones, quién hizo qué, por qué se tomaron atajos, por qué se hicieron tradeoffs, y qué supuestos se asumieron.

Se deben registrar las decisiones en el momento en que se toman, no dejarlo para después.

## Relacionado

- [[propiedades-de-los-elementos]]
- [[relaciones-entre-los-elementos]]
- [[vistas-de-la-arquitectura]]
- [[design-decision]]
- [[quality-attribute-scenario]]

## Lo mencionan

- [[propiedades-de-los-elementos]]
- [[development-team]]
- [[maintainers]]
- [[future-architects]]
