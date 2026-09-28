---
titulo: "Program to an Interface"
tipo: concepto
tags: ["principio","diseno","interfaz","abstraccion","patrones-creacionales"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [27]
veces_en_examen: 0
---

# Program to an Interface

> Principio de diseño reusable orientado a objetos que indica programar contra una interfaz, no contra una implementación.

Reduce las dependencias de implementación entre subsistemas. En lugar de declarar variables como instancias de clases concretas, se debe comprometer solo con una interfaz definida por una clase abstracta. Los patrones creacionales (Abstract Factory, Builder, Factory Method, Prototype, Singleton) permiten instanciar clases concretas manteniendo la abstracción de la interfaz.

## Relacionado

- [[abstract-factory]]
- [[builder]]
- [[factory-method]]
- [[prototype]]
- [[singleton]]

