---
titulo: "Interpreter"
tipo: concepto
tags: ["patron-de-diseno","comportamental","patron","comportamiento","interpreter","gramatica","interprete","patron de diseno","lenguaje","interpretacion","interpret","design-patterns","behavioral-pattern","grammar","abstract-syntax-tree","composite"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,71,231,233,234,235,236]
veces_en_examen: 0
---

# Interpreter

> Dado un lenguaje, definir una representacion para su gramatica junto con un interprete que use la representacion para interpretar oraciones en el lenguaje.

El patron Interpreter describe como definir una gramatica para lenguajes simples, representar oraciones en el lenguaje e interpretar esas oraciones.

**Motivacion**: Si un tipo particular de problema ocurre con frecuencia, puede valer la pena expresar instancias del problema como oraciones en un lenguaje simple. Por ejemplo, las expresiones regulares son un lenguaje estandar para especificar patrones de cadenas. En lugar de construir algoritmos personalizados, se puede interpretar una expresion regular.

**Aplicabilidad**: Usar el patron Interpreter cuando hay un lenguaje que interpretar y se pueden representar las sentencias como arboles de sintaxis abstracta. Funciona mejor cuando:
- La gramatica es simple (para gramaticas complejas, generadores de analizadores sintacticos son mejores).
- La eficiencia no es una preocupacion critica.

**Estructura y participantes**:
- **AbstractExpression** (RegularExpression): declara una operacion Interpret abstracta comun a todos los nodos del arbol sintactico.
- **TerminalExpression** (LiteralExpression): implementa Interpret asociada a simbolos terminales de la gramatica.
- **NonterminalExpression** (AlternationExpression, RepetitionExpression, SequenceExpression): una clase por cada regla gramatical; mantiene variables de instancia de tipo AbstractExpression para cada simbolo de la regla e implementa Interpret recursivamente.
- **Context**: contiene informacion global al interprete.
- **Client**: construye (o recibe) un arbol sintactico abstracto e invoca la operacion Interpret.

**Colaboraciones**: El cliente construye el arbol sintactico abstracto de instancias de NonterminalExpression y TerminalExpression, inicializa el contexto e invoca Interpret. Cada nodo NonterminalExpression define Interpret en terminos de Interpret en cada subexpresion. TerminalExpression define el caso base.

**Consecuencias**:
1. Facil de cambiar y extender la gramatica (usando herencia).
2. Facil de implementar la gramatica (clases similares, posible automatizacion).
3. Gramaticas complejas son dificiles de mantener (cada regla requiere al menos una clase).
4. Anadir nuevas formas de interpretar expresiones: se puede definir una nueva operacion en las clases de expresion. Si se crean muchas formas, considerar el patron Visitor (331).

## Relacionado

- [[visitor]]
- [[composite]]
- [[flyweight]]

## Lo mencionan

- [[composite]]
- [[command]]
- [[visitor]]
- [[design-pattern-classification]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[behavioral-patterns]]
- [[best-data-structure-for-storing-components]]
