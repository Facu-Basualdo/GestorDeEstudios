---
titulo: "Object Granularity"
tipo: concepto
tags: ["granularidad","objetos","patrones"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [22]
veces_en_examen: 0
---

# Object Granularity

> Los objetos pueden variar enormemente en tamaño y número, desde el hardware hasta aplicaciones completas. Los patrones de diseño ayudan a decidir qué debería ser un objeto.

Los objetos pueden representar desde el hardware hasta aplicaciones completas. El patrón Facade describe cómo representar subsistemas completos como objetos, mientras que Flyweight describe cómo soportar grandes cantidades de objetos a las granularidades más finas. Otros patrones como Abstract Factory y Builder producen objetos cuya única responsabilidad es crear otros objetos; Visitor y Command producen objetos cuya única responsabilidad es implementar una solicitud sobre otro objeto o grupo de objetos.

## Relacionado

- [[facade]]
- [[flyweight]]
- [[abstract-factory]]
- [[builder]]
- [[visitor]]
- [[command]]

