---
titulo: "Traversal Responsibility"
tipo: concepto
tags: ["visitor","traversal","design-patterns"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [343,344]
veces_en_examen: 0
---

# Traversal Responsibility

> En el patrón Visitor, la responsabilidad de recorrer la estructura de objetos puede recaer en la propia estructura, en el visitor o en un iterador separado.

Hay tres lugares donde colocar la responsabilidad de recorrer la estructura de objetos al usar el patrón Visitor:

- **Estructura de objetos**: La colección itera sobre sus elementos y llama a Accept en cada uno. Por ejemplo, el Accept de un CompositeElement recorre sus hijos y llama a Accept en cada uno recursivamente.
- **El propio visitor**: El visitor contiene el algoritmo de recorrido, pero esto puede llevar a duplicación de código de recorrido en cada ConcreteVisitor para cada ConcreteElement agregado. Es útil para implementar un recorrido particularmente complejo que depende de los resultados de las operaciones sobre la estructura.
- **Iterador separado**: Se puede usar un iterador para visitar los elementos. En C++, se puede usar un iterador interno o externo. En Smalltalk, se suele usar un iterador interno con `do:` y un bloque. Usar un iterador interno es similar a que la estructura de objetos sea responsable, pero no produce double dispatch; llama a una operación en el visitor con un elemento como argumento en lugar de llamar a Accept en el elemento con el visitor como argumento.

## Relacionado

- [[visitor]]
- [[iterator]]
- [[composite]]

