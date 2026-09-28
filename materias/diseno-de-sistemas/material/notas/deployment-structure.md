---
titulo: "Deployment Structure"
tipo: concepto
tags: ["despliegue","hardware","distribuidos","arquitectura"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [33]
veces_en_examen: 0
---

# Deployment Structure

> La deployment structure (estructura de despliegue) muestra cómo el software se asigna a los elementos de hardware de procesamiento y comunicación.

Los elementos son software (usualmente un proceso de una C&C structure), entidades de hardware (procesadores) y vías de comunicación. Las relaciones son "allocated-to", que muestra en qué unidades físicas residen los elementos de software, y "migrates-to", si la asignación es dinámica.

Se usa para razonar sobre performance, integridad de datos, seguridad y disponibilidad. Es de particular interés en sistemas distribuidos y es la estructura clave para lograr el atributo de calidad de deployability.

## Relacionado

- [[allocation-structures]]
- [[component-and-connector-structures]]

## Lo mencionan

- [[allocation-structures]]
- [[fewer-is-better]]
- [[incremental-architecture]]
