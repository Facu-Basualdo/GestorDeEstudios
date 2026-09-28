---
titulo: "Associating Responsibilities and Identifying Properties"
tipo: concepto
tags: ["responsabilidades","propiedades","instanciacion","cohesion","acoplamiento"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [366]
veces_en_examen: 0
---

# Associating Responsibilities and Identifying Properties

> Associating Responsibilities and Identifying Properties es la actividad de ADD que asigna responsabilidades a los elementos instanciados e identifica sus propiedades para apoyar el análisis y la documentación del design rationale.

Al instanciar conceptos hay que decidir qué harán los elementos, cuántos se despliegan y qué propiedades tendrán. Por ejemplo, al instanciar el patrón de arquitectura de microservicios hay que decidir qué hará cada microservicio, cuántos de cada tipo se despliegan y cuáles son sus propiedades. Se debe respetar el principio de diseño de que los elementos tengan alta cohesión internamente, un conjunto acotado de responsabilidades y bajo acoplamiento externamente. Las propiedades a identificar incluyen opciones de configuración, statefulness, manejo de recursos, prioridad o características de hardware si son nodos físicos. Identificar estas propiedades apoya el análisis y la documentación del design rationale.

## Relacionado

- [[instantiating-elements]]

