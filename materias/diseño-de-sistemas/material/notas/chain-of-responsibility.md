---
titulo: "Chain of Responsibility"
tipo: concepto
tags: ["patron-de-diseno","comportamental","patron","comportamiento","chain-of-responsibility","cadena","responsabilidad","desacoplamiento","patron de diseno","cadena de responsabilidad","manejo de peticiones"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,71,162,164,165,168]
veces_en_examen: 0
---

# Chain of Responsibility

> Evita acoplar el emisor de una solicitud a su receptor, dando a más de un objeto la oportunidad de manejar la solicitud, encadenando los objetos receptores y pasando la solicitud a lo largo de la cadena hasta que un objeto la maneje.

## Motivación

Considere un sistema de ayuda contextual para una interfaz gráfica de usuario. El usuario puede obtener información de ayuda sobre cualquier parte de la interfaz haciendo clic en ella. La ayuda proporcionada depende de la parte seleccionada y su contexto; por ejemplo, un botón en un cuadro de diálogo puede tener información de ayuda diferente que un botón similar en la ventana principal. Si no existe información de ayuda específica para esa parte, el sistema debe mostrar un mensaje de ayuda más general sobre el contexto inmediato (por ejemplo, el cuadro de diálogo completo).

Por lo tanto, es natural organizar la información de ayuda según su generalidad, desde la más específica hasta la más general. Además, está claro que una solicitud de ayuda es manejada por uno de varios objetos de la interfaz; cuál depende del contexto y de cuán específica sea la ayuda disponible.

El problema es que el objeto que finalmente proporciona la ayuda no es conocido explícitamente por el objeto (por ejemplo, el botón) que inicia la solicitud. Lo que se necesita es una forma de desacoplar el botón que inicia la solicitud de los objetos que pueden proporcionar información de ayuda. El patrón Chain of Responsibility define cómo ocurre eso.

La idea de este patrón es desacoplar emisores y receptores dando a múltiples objetos la oportunidad de manejar una solicitud. La solicitud se pasa a lo largo de una cadena de objetos hasta que uno la maneja.

El primer objeto en la cadena recibe la solicitud y la maneja o la reenvía al siguiente candidato en la cadena, que hace lo mismo. El objeto que realizó la solicitud no tiene conocimiento explícito de quién la manejará; decimos que la solicitud tiene un receptor implícito.

## Aplicabilidad

Use Chain of Responsibility cuando:

* Más de un objeto puede manejar una solicitud, y el manejador no se conoce a priori. El manejador debe determinarse automáticamente.
* Quiere emitir una solicitud a uno de varios objetos sin especificar explícitamente el receptor.
* El conjunto de objetos que pueden manejar una solicitud debe especificarse dinámicamente.

## Participantes

* **Handler** (HelpHandler): define una interfaz para manejar solicitudes. (Opcional) implementa el enlace al sucesor.
* **ConcreteHandler** (PrintButton, PrintDialog): maneja las solicitudes de las que es responsable. Puede acceder a su sucesor. Si puede manejar la solicitud, lo hace; de lo contrario, la reenvía a su sucesor.
* **Client**: inicia la solicitud a un objeto ConcreteHandler en la cadena.

## Colaboraciones

* Cuando un cliente emite una solicitud, esta se propaga a lo largo de la cadena hasta que un objeto ConcreteHandler asume la responsabilidad de manejarla.

## Consecuencias

1. **Acoplamiento reducido.** El patrón libera a un objeto de conocer qué otro objeto maneja una solicitud. Un objeto solo debe saber que la solicitud será manejada "apropiadamente". Tanto el receptor como el emisor no tienen conocimiento explícito el uno del otro, y un objeto en la cadena no tiene que conocer la estructura de la cadena. Como resultado, Chain of Responsibility puede simplificar las interconexiones entre objetos. En lugar de que los objetos mantengan referencias a todos los receptores candidatos, mantienen una única referencia a su sucesor.
2. **Flexibilidad añadida en la asignación de responsabilidades a los objetos.** Chain of Responsibility brinda flexibilidad adicional para distribuir responsabilidades entre objetos. Puede agregar o cambiar responsabilidades para manejar una solicitud agregando o modificando la cadena en tiempo de ejecución. Puede combinar esto con la subclasificación para especializar manejadores estáticamente.
3. **No se garantiza la recepción.** Dado que una solicitud no tiene un receptor explícito, no hay garantía de que sea manejada; la solicitud puede caerse al final de la cadena sin ser manejada. Una solicitud también puede quedar sin manejar si la cadena no está configurada correctamente.

## Relacionado

- [[mediator]]
- [[composite]]

## Lo mencionan

- [[composite]]
- [[command]]
- [[design-pattern-classification]]
- [[delegation]]
- [[relating-run-time-and-compile-time-structures]]
- [[dependencia-en-operaciones-especificas]]
- [[acoplamiento-fuerte]]
- [[extender-funcionalidad-mediante-subclases]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[behavioral-patterns]]
- [[explicit-parent-references]]
