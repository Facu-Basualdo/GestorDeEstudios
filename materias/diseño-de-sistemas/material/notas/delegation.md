---
titulo: "Delegation"
tipo: concepto
tags: ["delegacion","composicion","reutilizacion","patrones-diseno","delegation","object","request","design-patterns"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [27,88]
veces_en_examen: 0
---

# Delegation

> Forma de hacer que la composición sea tan poderosa como la herencia para la reutilización, donde un objeto receptor delega operaciones a su delegado.

Dos objetos participan en el manejo de una solicitud: el receptor pasa una referencia de sí mismo al delegado. Ejemplo: Window delega su operación Area a una instancia de Rectangle. Ventaja: permite componer comportamientos en tiempo de ejecución y cambiarlos fácilmente. Desventaja: el software dinámico es más difícil de entender y puede ser ineficiente. Varios patrones de diseño usan delegación: State, Strategy, Visitor, Mediator, Chain of Responsibility, Bridge.

## Relacionado

- [[state]]
- [[strategy]]
- [[visitor]]
- [[mediator]]
- [[chain-of-responsibility]]
- [[bridge]]
- [[class-inheritance]]
- [[object-composition]]
- [[object]]
- [[request]]

