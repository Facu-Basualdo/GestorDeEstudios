---
titulo: "Super-tactics"
tipo: concepto
tags: ["tacticas","diseno","arquitectura","patrones"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [67]
veces_en_examen: 0
---

# Super-tactics

> Tácticas tan fundamentales y omnipresentes en el diseño de arquitecturas que merecen una mención especial.

Son tactics que aparecen en la realización de casi todos los patrones. El texto menciona como ejemplos las tactics de modificabilidad: encapsulación, restricción de dependencias, uso de un intermediario y abstracción de servicios comunes.

Otras tactics, como la de scheduling de performance, también aparecen en muchos lugares: por ejemplo, un load balancer es un intermediario que hace scheduling. La monitorización aparece en varios atributos de calidad: se monitorean aspectos del sistema para lograr eficiencia energética, performance, disponibilidad y seguridad.

Esto muestra que no se debe esperar que una tactic viva en un solo lugar ni para un único atributo de calidad. Las tactics son primitivas de diseño y, como tales, se encuentran una y otra vez.

## Relacionado

- [[architectural-tactic]]
- [[architectural-pattern]]

## Lo mencionan

- [[architectural-tactic]]
