---
titulo: "Alta cohesión"
tipo: concepto
tags: ["grasp","cohesion","alta cohesion","responsabilidad","acoplamiento","diseno"]
temas: ["[[conceptos-fundamentales-de-grasp]]","[[patrones-grasp]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [24,25]
veces_en_examen: 0
---

# Alta cohesión

> Alta cohesión es un principio GRASP que indica que la información que almacena una clase debe ser coherente y estar relacionada con la clase.

El grado de cohesión mide la coherencia de una clase, es decir, lo coherente que es la información que almacena con sus responsabilidades y relaciones. Maximizar la cohesión intramodular minimiza el acoplamiento intermodular. Existen 7 tipos de cohesión:
1. Cohesión coincidente: el módulo realiza múltiples tareas sin ninguna relación entre ellas.
2. Cohesión lógica: el módulo realiza múltiples tareas relacionadas pero solo una se ejecuta.
3. Cohesión temporal: las tareas se ejecutan al mismo tiempo.
4. Cohesión de procedimiento: las tareas corresponden a una secuencia de pasos del producto.
5. Cohesión de comunicación: las tareas afectan a los mismos datos.
6. Cohesión de información: las tareas tienen su propio punto de arranque y trabajan sobre los mismos datos (ejemplo: objetos).
7. Cohesión funcional: el módulo ejecuta una única tarea.

## Relacionado

- [[bajo-acoplamiento]]

## Lo mencionan

- [[bajo-acoplamiento]]
- [[grasp]]
