---
titulo: "framework"
tipo: concepto
tags: ["framework","arquitectura","reutilizacion","inversion-de-control","reuse","architecture","design-patterns"]
temas: ["[[introduccion-y-fundamentos-de-patrones]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [34,88]
veces_en_examen: 0
---

# framework

> Un framework (marco de trabajo) es un conjunto de clases cooperantes que conforman un diseño reutilizable para una clase específica de software.

Un framework define la arquitectura de la aplicación, incluyendo la estructura general, la partición en clases y objetos, las responsabilidades clave, la colaboración y el hilo de control. El framework captura las decisiones de diseño comunes a su dominio de aplicación. Los frameworks enfatizan la reutilización del diseño sobre la reutilización de código. La reutilización a este nivel lleva a una inversión de control entre la aplicación y el software subyacente. Cuando se usa un framework, se reutiliza el cuerpo principal y se escribe el código que éste llama. Los frameworks son más difíciles de diseñar que los toolkits. La aplicación es particularmente sensible a cambios en las interfaces del framework. El uso de patrones de diseño ayuda a lograr altos niveles de reutilización.

## Relacionado

- [[class]]
- [[abstract-class]]
- [[subclass]]
- [[composition]]

