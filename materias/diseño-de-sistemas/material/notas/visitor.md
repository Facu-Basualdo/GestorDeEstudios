---
titulo: "Visitor"
tipo: concepto
tags: ["patron-de-diseno","comportamental","patron de diseno","visitor","analisis","polimorfismo","recorrido","behavioral","patron","comportamiento","distribucion","patron de diseño","estructura de objetos","operacion","patron-de-disenio","estructura-de-objetos","operaciones","estable"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,22,69,70,71,338,340,341,345,346,347]
veces_en_examen: 0
---

# Visitor

> Visitor representa una operación a ser realizada sobre los elementos de una estructura de objetos. Permite definir una nueva operación sin cambiar las clases de los elementos sobre los que opera.

**Motivación:** En un compilador que representa programas como árboles de sintaxis abstracta, se necesitan muchas operaciones (type-checking, generación de código, pretty-printing, etc.). Distribuir estas operaciones en las clases de nodos lleva a un sistema difícil de mantener. Visitor permite empaquetar operaciones relacionadas en un objeto visitor separado, y pasarlo a los elementos durante un recorrido.

**Aplicabilidad:** Usar Visitor cuando:
- Una estructura de objetos contiene muchas clases con interfaces diferentes y se quieren realizar operaciones que dependen de sus clases concretas.
- Muchas operaciones distintas y no relacionadas necesitan ser realizadas y se quiere evitar "contaminar" las clases con esas operaciones.
- Las clases que definen la estructura de objetos raramente cambian, pero a menudo se quieren definir nuevas operaciones.

**Estructura y Participantes:**
- **Visitor (NodeVisitor):** Declara una operación Visit para cada clase de ConcreteElement.
- **ConcreteVisitor (TypeCheckingVisitor):** Implementa cada operación Visit, definiendo un fragmento del algoritmo.
- **Element (Node):** Define una operación Accept que toma un visitor como argumento.
- **ConcreteElement (AssignmentNode, VariableRefNode):** Implementa Accept llamando a la operación Visit correspondiente en el visitor.
- **ObjectStructure (Program):** Puede enumerar sus elementos y proveer una interfaz de alto nivel para el visitor.

**Colaboraciones:** Un cliente crea un ConcreteVisitor y recorre la estructura, visitando cada elemento con el visitor. Cuando un elemento es visitado, llama a la operación Visit que corresponde a su clase, pasándose a sí mismo como argumento.

**Consecuencias:**
1. Hace fácil agregar nuevas operaciones (solo agregar un nuevo visitor).
2. Agrupa operaciones relacionadas y separa las no relacionadas.
3. Dificulta agregar nuevas subclases de Element (cada nuevo ConcreteElement requiere agregar una operación abstracta en Visitor y su implementación en todos los ConcreteVisitors).
4. Permite visitar objetos a través de jerarquías de clases (no requiere una clase base común).
5. Los visitors pueden acumular estado durante el recorrido.
6. Puede romper la encapsulación al requerir operaciones públicas para acceder al estado interno de los elementos.

## Relacionado

- [[composite]]
- [[iterator]]
- [[interpreter]]
- [[internal-iterator]]
- [[double-dispatch]]
- [[glyph]]
- [[discretionary-glyph]]

## Lo mencionan

- [[composite]]
- [[facade]]
- [[interpreter]]
- [[template-method]]
- [[design-pattern-classification]]
- [[object-granularity]]
- [[interface]]
- [[delegation]]
- [[dependencias-algoritmicas]]
- [[incapacidad-de-alterar-clases-convenientemente]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[discretionary-glyph]]
- [[behavioral-patterns]]
- [[double-dispatch]]
- [[traversal-responsibility]]
