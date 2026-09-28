---
titulo: "Double Dispatch"
tipo: concepto
tags: ["visitor","double-dispatch","design-patterns","programacion","orientada-a-objetos","polimorfismo","dispatch"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [343,349]
veces_en_examen: 0
---

# Double Dispatch

> Double dispatch es una técnica en la que la operación ejecutada depende del tipo de dos receptores (el visitante y el elemento), utilizada en el patrón Visitor para agregar operaciones a clases sin modificarlas.

En el patrón Visitor, el double dispatch permite que la operación ejecutada dependa tanto del tipo de Visitor como del tipo de Element que visita. En lugar de vincular operaciones estáticamente en la interfaz de Element, las operaciones se consolidan en un Visitor y se usa Accept para realizar el enlace en tiempo de ejecución. Accept es una operación de double dispatch porque su significado depende de dos tipos: el del Visitor y el del Element. Esta es la clave del patrón Visitor. Extender la interfaz de Element equivale a definir una nueva subclase de Visitor en lugar de muchas nuevas subclases de Element. En C++, se usa single-dispatch (la operación depende del nombre de la solicitud y del tipo del receptor), pero el double dispatch es soportado directamente en algunos lenguajes como CLOS.

## Relacionado

- [[visitor]]
- [[iterator]]
- [[composite]]

## Lo mencionan

- [[visitor]]
