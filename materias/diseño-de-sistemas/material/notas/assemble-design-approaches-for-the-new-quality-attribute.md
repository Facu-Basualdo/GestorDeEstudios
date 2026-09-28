---
titulo: "Assemble Design Approaches for the New Quality Attribute"
tipo: concepto
tags: ["atributos-de-calidad","diseno","mecanismos","arquitectura","modelo"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [269]
veces_en_examen: 0
---

# Assemble Design Approaches for the New Quality Attribute

> Proceso que, a partir del modelo del QA, enumera sus parámetros y para cada uno identifica las características y mecanismos arquitectónicos que pueden afectarlo.

Los pasos del proceso son:

1. Enumerar los parámetros del modelo.
2. Para cada parámetro, enumerar las características arquitectónicas (y los mecanismos para lograrlas) que pueden afectar ese parámetro.

Para generar esas listas se puede:

- Revisar el cuerpo de mecanismos conocido y preguntarse cómo afecta cada uno al parámetro del QA.
- Buscar diseños que hayan manejado exitosamente el QA, tanto por el nombre del QA como por los términos elegidos al refinar el QA en subatributos.
- Buscar publicaciones y blogs sobre el QA y generalizar sus observaciones y hallazgos.
- Encontrar expertos en el área y entrevistarlos o pedirles consejo.

El resultado es una lista finita y razonablemente pequeña de mecanismos para controlar el QA, porque el número de parámetros del modelo está acotado y para cada parámetro hay un número limitado de decisiones arquitectónicas.

## Relacionado

- [[quality-attribute-model]]

## Lo mencionan

- [[bringing-a-new-qa-into-the-fold]]
- [[quality-attribute-model]]
