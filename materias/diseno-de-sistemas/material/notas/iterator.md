---
titulo: "Iterator"
tipo: concepto
tags: ["patron-de-diseno","comportamental","iterator","abstract class","traversal","interface","patron","comportamiento","acceso","recorrido","iterador","patron de diseno","agregado","polimorfismo","design pattern","encapsulation","composite","iteracion","acceso a objetos"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,63,64,65,66,71,100,101,244,245,246,249]
veces_en_examen: 0
---

# Iterator

> Proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación subyacente.

## Motivación

Un objeto agregado como una lista debe permitir acceder a sus elementos sin exponer su estructura interna. Además, pueden necesitarse diferentes recorridos y más de un recorrido simultáneo. La solución es separar la responsabilidad de acceso y recorrido en un objeto iterador.

El iterador define una interfaz para acceder a los elementos y mantiene la posición actual. Por ejemplo, `First` inicializa, `Next` avanza, `IsDone` verifica si terminó, y `CurrentItem` devuelve el elemento actual.

Para soportar polimorfismo, se define una clase abstracta `Iterator` y una clase abstracta `Aggregate` con un método `CreateIterator` (un Factory Method) que conecta las dos jerarquías.

## Aplicabilidad

Usar el patrón Iterator cuando:
- Se necesita acceder al contenido de un agregado sin exponer su representación interna.
- Se necesitan múltiples recorridos sobre objetos agregados.
- Se desea una interfaz uniforme para recorrer diferentes estructuras agregadas (iteración polimórfica).

## Estructura

- **Iterator**: define la interfaz para acceder y recorrer elementos.
- **ConcreteIterator**: implementa la interfaz Iterator y mantiene la posición actual en el recorrido.
- **Aggregate**: define la interfaz para crear un objeto Iterator.
- **ConcreteAggregate**: implementa la interfaz de creación de iteradores para devolver una instancia de ConcreteIterator.

## Colaboraciones

Un ConcreteIterator mantiene el objeto actual en el agregado y puede calcular el siguiente objeto en el recorrido.

## Consecuencias

1. **Variaciones en el recorrido**: se pueden cambiar algoritmos de recorrido (por ejemplo, inorder vs. preorder) reemplazando el iterador, o crear subclases para nuevos recorridos.
2. **Simplifica la interfaz del Aggregate**: elimina la necesidad de una interfaz de recorrido en el agregado.
3. **Múltiples recorridos simultáneos**: un iterador mantiene su propio estado, permitiendo varios recorridos a la vez.

## Relacionado

- [[list-iterator]]
- [[preorder-iterator]]
- [[null-iterator]]
- [[glyph]]
- [[list]]
- [[factory-method]]
- [[composite]]

## Lo mencionan

- [[observer]]
- [[composite]]
- [[memento]]
- [[proxy]]
- [[visitor]]
- [[design-pattern-classification]]
- [[dependencias-algoritmicas]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[null-iterator]]
- [[preorder-iterator]]
- [[list-iterator]]
- [[traversal-vs-traversal-actions]]
- [[encapsulating-the-analysis]]
- [[behavioral-patterns]]
- [[list]]
- [[listiterator]]
- [[child-ordering]]
- [[external-iterator]]
- [[internal-iterator]]
- [[cursor]]
- [[robust-iterator]]
- [[polymorphic-iterator]]
- [[reverse-list-iterator]]
- [[iterator-ptr]]
- [[polymorphic-iteration]]
- [[double-dispatch]]
- [[traversal-responsibility]]
