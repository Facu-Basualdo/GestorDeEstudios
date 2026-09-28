---
titulo: "Command"
tipo: concepto
tags: ["patron-de-diseno","comportamental","patron","comportamiento","command","solicitud","encapsulacion","behavioral-pattern","encapsulation","undo","transaction","design-patterns","behavioral","macro-command","c++-templates","patron de diseno","deshacer","rehacer"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,22,61,71,172,174,175,176,177,180]
veces_en_examen: 0
---

# Command

> Encapsular una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, poner en cola o registrar solicitudes, y soportar operaciones deshacer.

**Motivación**: A veces es necesario emitir solicitudes a objetos sin conocer nada sobre la operación solicitada ni el receptor. El patrón Command convierte la solicitud en un objeto, permitiendo parametrizar clientes con diferentes solicitudes, poner en cola o registrar solicitudes, y soportar operaciones deshacer.

**Aplicabilidad**: Usar Command cuando se quiera:
- parametrizar objetos con una acción a realizar,
- especificar, poner en cola y ejecutar solicitudes en diferentes momentos,
- soportar deshacer,
- soportar logging de cambios,
- estructurar un sistema en torno a operaciones de alto nivel construidas sobre primitivas (transacciones).

**Estructura y Participantes**:
- **Command**: declara una interfaz para ejecutar una operación.
- **ConcreteCommand** (PasteCommand, OpenCommand): define un enlace entre un objeto Receiver y una acción; implementa Execute invocando operaciones en el Receiver.
- **Client** (Application): crea un ConcreteCommand y establece su receiver.
- **Invoker** (MenuItem): pide al comando que ejecute la solicitud.
- **Receiver** (Document, Application): sabe cómo realizar las operaciones.

**Colaboraciones**: El cliente crea un ConcreteCommand y especifica su receiver. Un Invoker almacena el ConcreteCommand y emite la solicitud llamando a Execute. ConcreteCommand invoca operaciones en su Receiver.

**Consecuencias**:
1. Desacopla el invocador del que sabe cómo realizar la operación.
2. Los comandos son objetos de primera clase.
3. Se pueden ensamblar en comandos compuestos (ej. MacroCommand, que es un Composite).
4. Es fácil añadir nuevos comandos.

**También conocido como**: Action, Transaction.

## Relacionado

- [[chain-of-responsibility]]
- [[composite]]
- [[memento]]
- [[prototype]]
- [[interpreter]]

## Lo mencionan

- [[observer]]
- [[composite]]
- [[memento]]
- [[design-pattern-classification]]
- [[object-granularity]]
- [[dependencia-en-operaciones-especificas]]
- [[acoplamiento-fuerte]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[behavioral-patterns]]
