---
titulo: "Program to an Interface, not an Implementation"
tipo: concepto
tags: ["poo","diseno","principio","interfaz","desacoplamiento"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [25]
veces_en_examen: 0
---

# Program to an Interface, not an Implementation

> Principio de diseño que recomienda manipular objetos únicamente en términos de la interfaz definida por clases abstractas.

Beneficios: 1) Los clientes no conocen los tipos específicos de objetos que usan, siempre que los objetos cumplan con la interfaz esperada. 2) Los clientes no conocen las clases que implementan estos objetos. Esto reduce enormemente las dependencias de implementación entre subsistemas. Se deben instanciar clases concretas en algún lugar, y los patrones creacionales (Abstract Factory, Builder, Factory Method, Prototype, Singleton) permiten hacerlo de manera que el sistema esté escrito en términos de interfaces, no implementaciones.

## Relacionado

- [[abstract-class]]
- [[abstract-factory]]
- [[builder]]
- [[factory-method]]
- [[prototype]]
- [[singleton]]

