---
titulo: "Bloated Controller"
tipo: concepto
tags: ["grasp","controller","anti-patron","cohesion","responsabilidad"]
temas: ["[[controladores-y-arquitectura-en-capas]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [41]
veces_en_examen: 0
---

# Bloated Controller

> Controller con baja cohesión que resulta desenfocado y maneja demasiadas áreas de responsabilidad.

El fragmento lo llama *bloated controller* y da estos signos:

- Hay un único controller que recibe todos los eventos del sistema; esto puede pasar si se elige un facade controller.
- El controller realiza muchas de las tareas necesarias para cumplir el evento sin delegar el trabajo; esto suele implicar una violación de Information Expert y High Cohesion.
- Tiene muchos atributos y mantiene información significativa del sistema o dominio que debería estar distribuida, o duplica información que existe en otro lado.

Curas propuestas:

1. Agregar más controllers: no hace falta que haya uno solo. En lugar de facade controllers, usar use case controllers. Por ejemplo, un sistema de reservas aéreas puede tener `MakeReservationHandler`, `ManageSchedulesHandler` y `ManageFaresHandler`.
2. Diseñar el controller para que delegue principalmente el cumplimiento de cada operación del sistema a otros objetos.

## Relacionado

- [[controller]]
- [[facade-controller]]
- [[use-case-controller]]
- [[information-expert]]
- [[high-cohesion]]

## Lo mencionan

- [[facade-controller]]
- [[use-case-controller]]
