---
titulo: "Use Case Controller"
tipo: concepto
tags: ["grasp","controller","caso-de-uso","pure-fabrication","estado"]
temas: ["[[controladores-y-arquitectura-en-capas]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [32,41]
veces_en_examen: 0
---

# Use Case Controller

> Variante del patrón Controller en la que una clase artificial, a menudo llamada `<UseCaseName>Handler`, `<UseCaseName>Coordinator` o `<UseCaseName>Session`, maneja todos los eventos de sistema de un escenario de caso de uso.

Es la segunda opción de receptor del patrón Controller.

Esta clase no es un objeto de dominio; es una construcción artificial para apoyar al sistema, es decir, un *Pure Fabrication* en términos de GRASP.

Se elige cuando colocar las responsabilidades en un facade controller lleva a diseños con baja cohesión o alto acoplamiento, típicamente cuando el facade controller se está "inflando" con responsabilidades excesivas.

Es una buena opción cuando hay muchos eventos de sistema en distintos procesos, porque factoriza su manejo en clases separadas manejables y permite conocer y razonar sobre el estado del escenario en curso.

Se recomienda usar el mismo controller para todos los eventos del mismo caso de uso, para mantener información de estado y detectar secuencias ilegales de operaciones.

En el método Objectory/UP, los *control objects* son handlers de casos de uso como los que describe el patrón Controller.

## Relacionado

- [[controller]]
- [[facade-controller]]
- [[high-cohesion]]
- [[boundary-control-entity]]
- [[bloated-controller]]

## Lo mencionan

- [[controller]]
- [[facade-controller]]
- [[boundary-control-entity]]
- [[bloated-controller]]
