---
titulo: "Interface"
tipo: concepto
tags: ["interfaz","poo","encapsulacion","interface","object","signature","design-patterns","software-interfaces","arquitectura","elementos","interaccion","interfaces","contrato","diseno","operaciones","eventos","propiedades","contratos"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]","[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [273,276,287,359,367]
veces_en_examen: 0
---

# Interface

> Límite, de software o no, a través del cual los elementos se encuentran, interactúan, se comunican y coordinan.

Los elementos tienen interfaces que controlan el acceso a sus partes internas. Los actores de un elemento son los otros elementos, usuarios o sistemas con los que interactúa; la colección de esos actores se llama entorno del elemento. Por "interactuar" se entiende cualquier cosa que un elemento haga que pueda impactar el procesamiento de otro elemento. Esta interacción forma parte de la interfaz.

Las interacciones pueden adoptar varias formas, aunque la mayoría implica transferencia de control y/o datos. Algunas están soportadas por constructos estándar de los lenguajes de programación, como llamadas a procedimiento locales o remotas (RPC), flujos de datos, memoria compartida y paso de mensajes. Estos constructos, que proveen puntos de interacción directa con un elemento, se llaman recursos. También hay interacciones indirectas; el capítulo se centra solo en las directas.

Las interfaces tienen un impacto desproporcionado en la modificabilidad, usabilidad, testabilidad, performance e integrabilidad del sistema. Las interfaces asincrónicas, comunes en sistemas distribuidos, requieren event handlers. Para una interfaz dada puede haber una o más implementaciones, con diferentes garantías de performance, escalabilidad o disponibilidad, y para diferentes plataformas.

Tres puntos:
1. Todos los elementos tienen interfaces.
2. Las interfaces son de dos vías: incluyen lo que el elemento provee y lo que requiere de su entorno.
3. Un elemento puede interactuar con más de un actor a través de la misma interfaz.

## Relacionado

- [[signature]]
- [[type]]
- [[subtype]]
- [[memento]]
- [[decorator]]
- [[proxy]]
- [[visitor]]
- [[object]]
- [[operation]]
- [[request]]
- [[resource]]
- [[event]]
- [[properties]]
- [[interface-documentation]]
- [[error-handling]]
- [[interface-evolution]]

## Lo mencionan

- [[signature]]
- [[type]]
- [[subtype]]
- [[dynamic-binding]]
- [[polymorphism]]
- [[class]]
- [[abstract-class]]
- [[inheritance]]
- [[protocol]]
- [[mediator]]
- [[event]]
- [[multiple-interfaces]]
- [[resource]]
- [[operation]]
- [[property]]
- [[properties]]
- [[interface-evolution]]
- [[error-handling]]
- [[interface-documentation]]
- [[hyrms-law]]
- [[step-5-instantiate-architectural-elements-allocate-responsibilities-and-define-interfaces]]
