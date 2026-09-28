---
titulo: "UML Activity Diagram"
tipo: concepto
tags: ["uml","diagramas","comportamiento","concurrencia"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [413]
veces_en_examen: 0
---

# UML Activity Diagram

> Diagrama UML similar a un flowchart que muestra un proceso de negocio como una secuencia de pasos (acciones), con notación para expresar branching condicional y concurrencia.

Las flechas entre acciones indican el flujo de control. Opcionalmente, puede indicar el elemento de arquitectura o actor que realiza las acciones. Puede expresar concurrencia: un fork node (barra gruesa ortogonal a las flechas de flujo) divide el flujo en dos o más flujos concurrentes, que luego pueden sincronizarse en un join node (también barra ortogonal) que espera a que todos los flujos entrantes se completen. El branching condicional (diamante) permite que un solo diagrama represente múltiples traces, aunque normalmente no intenta mostrar todos los traces posibles ni el comportamiento completo. A diferencia de sequence y communication diagrams, no muestra las operaciones reales realizadas sobre objetos específicos, por lo que es útil para describir pasos de un workflow.

## Relacionado

- [[uml-sequence-diagram]]
- [[uml-communication-diagram]]

## Lo mencionan

- [[trace]]
- [[trace-oriented-notation]]
- [[uml-sequence-diagram]]
