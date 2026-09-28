---
titulo: "Inhibiting or Enabling a System's Quality Attributes"
tipo: concepto
tags: ["atributos-de-calidad","arquitectura-de-software","rendimiento","modificabilidad","seguridad","escalabilidad"]
temas: ["[[fundamentos-de-la-arquitectura-de-software]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [45]
veces_en_examen: 0
---

# Inhibiting or Enabling a System's Quality Attributes

> La capacidad de un sistema para cumplir sus atributos de calidad está determinada sustancialmente por su arquitectura.

Esta relación es tan importante que el material le dedica toda la Parte 2. Algunos ejemplos:

- Para alto rendimiento: gestionar el comportamiento basado en el tiempo de los elementos, su uso de recursos compartidos y la frecuencia y el volumen de la comunicación entre elementos.
- Para modificabilidad: asignar responsabilidades a los elementos y limitar el acoplamiento entre ellos, de modo que la mayoría de los cambios afecten a pocos elementos.
- Para seguridad: gestionar y proteger la comunicación entre elementos y controlar qué elementos pueden acceder a qué información; puede ser necesario introducir elementos especializados, como un mecanismo de autorización, para formar un perímetro fuerte.
- Para seguridad y protección (safe and secure): diseñar salvaguardas y mecanismos de recuperación.
- Para escalabilidad de rendimiento: localizar el uso de recursos para facilitar la introducción de reemplazos de mayor capacidad y evitar codificar supuestos o límites de recursos.
- Para entrega de subconjuntos incrementales: gestionar el uso entre componentes.
- Para reutilización de elementos en otros sistemas: restringir el acoplamiento entre elementos para que, al extraer uno, no salga con demasiados apegos a su entorno actual.

Sin embargo, una arquitectura por sí sola no puede garantizar la funcionalidad o la calidad requerida: las malas decisiones de diseño o implementación posteriores pueden socavar una arquitectura adecuada. Como dice el material: "What the architecture giveth, the implementation may taketh away". Las decisiones en todas las etapas del ciclo de vida afectan la calidad; la calidad no es completamente función del diseño arquitectónico, pero ahí comienza.

## Relacionado

- [[why-is-software-architecture-important]]
- [[quality-attribute]]

## Lo mencionan

- [[why-is-software-architecture-important]]
