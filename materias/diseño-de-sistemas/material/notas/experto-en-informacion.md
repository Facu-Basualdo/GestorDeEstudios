---
titulo: "Experto en información"
tipo: concepto
tags: ["grasp","informacion","responsabilidad","cohesion","encapsulamiento","asignacion"]
temas: ["[[patrones-de-asignacion-de-responsabilidades-grasp]]","[[patrones-grasp]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [33,34]
veces_en_examen: 0
---

# Experto en información

> Principio GRASP que asigna la responsabilidad de una operación o creación a la clase que posee la información necesaria para realizarla, promoviendo cohesión y encapsulamiento.

Es el principio básico de asignación de responsabilidades, la S de SOLID. Dice que la responsabilidad debe recaer sobre la clase que conoce toda la información necesaria para crearlo o ejecutarlo. Esto obtiene mayor cohesión, información encapsulada y menor acoplamiento.

Ejemplo: Informe debe calcular el total (suma de parciales), no InformePresenter. InformePresenter solo debe presentar.

Regla de oro: aplicar este principio junto con SRP para que una clase tenga un solo motivo de cambio y sea ella misma la encargada de crear los objetos e implementar los métodos sobre los que es experta.

## Relacionado

- [[single-responsibility-principle]]
- [[creator]]

## Lo mencionan

- [[creador]]
- [[grasp]]
