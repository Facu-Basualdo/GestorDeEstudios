---
titulo: "Collaboration"
tipo: concepto
tags: ["colaboracion","rdd","responsabilidades","objetos","metodos"]
temas: ["[[fundamentos-de-diseno-orientado-a-objetos]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [6,7]
veces_en_examen: 0
---

# Collaboration

> En RDD, la colaboración es la implementación de responsabilidades mediante métodos que actúan solos o se coordinan con otros métodos y objetos.

RDD incluye la idea de colaboración: las responsabilidades se implementan por medio de métodos que actúan solos o colaboran con otros métodos y objetos.

Por ejemplo, la clase Sale podría definir uno o más métodos para conocer su total, como getTotal. Para cumplir esa responsabilidad, Sale puede colaborar con otros objetos enviando un mensaje getSubtotal a cada objeto SalesLineItem pidiendo su subtotal.

En la metáfora de RDD, un diseño OO se ve como una comunidad de objetos responsables que colaboran.

## Relacionado

- [[responsibility]]
- [[responsibility-driven-design]]

## Lo mencionan

- [[responsibility-driven-design]]
- [[responsibility]]
