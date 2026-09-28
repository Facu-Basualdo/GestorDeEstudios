---
titulo: "UML State Machine Diagram"
tipo: concepto
tags: ["uml","diagramas","comportamiento","state-machine"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [413]
veces_en_examen: 0
---

# UML State Machine Diagram

> Diagrama UML que modela el comportamiento de elementos de la arquitectura mediante estados y transiciones, permitiendo trazar el comportamiento del sistema ante entradas específicas.

Representa los estados con cajas y las transiciones entre estados con flechas. Cada transición está etiquetada con el evento que la causa; opcionalmente puede especificar una guard condition entre corchetes: cuando ocurre el evento, la condición se evalúa y la transición se habilita solo si la guard es verdadera. Las transiciones también pueden tener consecuencias (acciones o efectos) indicadas con una barra: cuando hay una acción, el comportamiento que sigue a la barra se realiza cuando ocurre la transición. Los estados pueden especificar entry y exit actions. La Figura 22.4 muestra un ejemplo de los estados de un autoestereo.

## Relacionado

- [[state-machine]]

## Lo mencionan

- [[state-machine]]
