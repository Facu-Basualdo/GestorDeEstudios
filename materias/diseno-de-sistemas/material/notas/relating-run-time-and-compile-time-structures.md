---
titulo: "Relating Run-Time and Compile-Time Structures"
tipo: concepto
tags: ["patrones de diseno","run-time","compile-time","estructura"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [30]
veces_en_examen: 0
---

# Relating Run-Time and Compile-Time Structures

> La estructura en tiempo de ejecución (redes de objetos que se comunican) a menudo difiere significativamente de la estructura en tiempo de compilación (jerarquías de clases), y entender una a partir de la otra es difícil.

La estructura del código está congelada en tiempo de compilación; consiste en clases con relaciones de herencia fijas. La estructura en tiempo de ejecución consiste en redes de objetos que cambian rápidamente. Estas dos estructuras son en gran medida independientes. Intentar entender una desde la otra es como tratar de entender el dinamismo de los ecosistemas a partir de la taxonomía estática. Muchos patrones de diseño (Composite, Decorator, Observer, Chain of Responsibility) capturan esta distinción explícitamente. Las estructuras en tiempo de ejecución no son claras a partir del código hasta que se comprenden los patrones.

## Relacionado

- [[template-method]]
- [[strategy]]
- [[composite]]
- [[decorator]]
- [[observer]]
- [[chain-of-responsibility]]
- [[aggregation-vs-acquaintance]]

