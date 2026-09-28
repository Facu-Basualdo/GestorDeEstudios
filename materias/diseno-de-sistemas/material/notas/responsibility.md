---
titulo: "Responsibility"
tipo: concepto
tags: ["responsabilidad","rdd","uml","metodos","diseno","requisitos","arquitectura","funcionalidad","responsibility"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[fundamentos-de-diseno-orientado-a-objetos]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [6,7]
veces_en_examen: 0
---

# Responsibility

> Según la UML, una responsibility es un contrato u obligación de un classifier, relacionada con las obligaciones o el comportamiento de un objeto en términos de su rol.

En RDD, las responsabilidades son una abstracción de lo que hace un objeto. Son de dos tipos: doing y knowing.

- Doing responsibilities: hacer algo por sí mismo, iniciar acción en otros objetos, controlar y coordinar actividades en otros objetos.
- Knowing responsibilities: conocer datos privados encapsulados, conocer objetos relacionados, conocer cosas que puede derivar o calcular.

Las responsabilidades se asignan a clases de objetos durante el diseño. Una responsibility no es lo mismo que un method: es una abstracción, pero los métodos la cumplen. Por ejemplo, se puede declarar que "una Sale es responsable de crear SalesLineItems" (doing) o que "una Sale es responsable de conocer su total" (knowing).

Al dibujar un diagrama de interacción UML se están decidiendo asignaciones de responsabilidades, realizadas como métodos. Por ejemplo, en la Figura 17.2, los objetos Sale tienen la responsabilidad de crear Payments, invocada con un mensaje makePayment y manejada con un método makePayment.

## Relacionado

- [[responsibility-driven-design]]
- [[doing-responsibilities]]
- [[knowing-responsibilities]]
- [[collaboration]]
- [[grasp]]
- [[uml]]
- [[functional-requirements]]
- [[quality-attribute]]

## Lo mencionan

- [[grasp]]
- [[responsibility-driven-design]]
- [[collaboration]]
- [[doing-responsibilities]]
- [[knowing-responsibilities]]
- [[information-expert]]
- [[functionality]]
- [[functional-requirements]]
- [[quality-attribute-scenario]]
