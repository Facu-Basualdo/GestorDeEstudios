---
titulo: "State"
tipo: concepto
tags: ["patron-de-diseno","comportamental","patron","comportamiento","state","estado","patron de diseno","patron-de-disenio","maquina-de-estados","tcp","distribuidos","servicios","informacion"]
temas: ["[[patrones-de-comportamiento]]","[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,21,71,314,315,316,317,318,321,322]
veces_en_examen: 0
---

# State

> Permitir que un objeto altere su comportamiento cuando su estado interno cambia. El objeto parecerá cambiar de clase.

## Motivación

Considere una clase `TCPConnection` que representa una conexión de red. Un objeto `TCPConnection` puede estar en uno de varios estados: *Established*, *Listening*, *Closed*. Cuando recibe peticiones, responde de manera diferente según su estado actual. Por ejemplo, el efecto de una operación `Open` depende de si la conexión está en estado *Closed* o *Established*. El patrón State describe cómo `TCPConnection` puede exhibir un comportamiento diferente en cada estado.

La idea clave es introducir una clase abstracta `TCPState` para representar los estados. `TCPState` declara una interfaz común para todas las clases que representan estados operativos. Las subclases de `TCPState` implementan comportamientos específicos de cada estado (por ejemplo, `TCPEstablished`, `TCPClosed`). `TCPConnection` mantiene un objeto estado (una instancia de una subclase de `TCPState`) que representa el estado actual, y delega todas las peticiones específicas de estado a este objeto. Cuando la conexión cambia de estado, `TCPConnection` reemplaza el objeto estado.

## Aplicabilidad

Use el patrón State en cualquiera de los siguientes casos:

- El comportamiento de un objeto depende de su estado y debe cambiar su comportamiento en tiempo de ejecución según ese estado.
- Las operaciones tienen sentencias condicionales grandes y multiparte que dependen del estado del objeto. Este estado suele representarse mediante constantes enumeradas. El patrón State coloca cada rama del condicional en una clase separada, tratando el estado como un objeto independiente.

## Estructura y Participantes

- **Context** (`TCPConnection`): define la interfaz de interés para los clientes; mantiene una instancia de una subclase `ConcreteState` que define el estado actual.
- **State** (`TCPState`): define una interfaz para encapsular el comportamiento asociado con un estado particular del Context.
- **ConcreteState subclasses** (`TCPEstablished`, `TCPListen`, `TCPClosed`): cada subclase implementa un comportamiento asociado con un estado del Context.

## Colaboraciones

- El Context delega peticiones específicas de estado al objeto `ConcreteState` actual.
- El Context puede pasarse a sí mismo como argumento al objeto State que maneja la petición, permitiendo que el State acceda al Context si es necesario.
- El Context es la interfaz principal para los clientes. Los clientes pueden configurar un Context con objetos State; una vez configurado, no necesitan tratar directamente con los objetos State.
- Tanto el Context como las subclases `ConcreteState` pueden decidir qué estado sigue a otro y bajo qué circunstancias.

## Consecuencias

1. **Localiza el comportamiento específico de estado y lo divide entre diferentes estados.** Todo el comportamiento asociado a un estado particular se coloca en un único objeto. Nuevos estados y transiciones pueden añadirse fácilmente definiendo nuevas subclases. Alternativamente, se podrían usar valores de datos para definir estados internos, pero eso esparciría condicionales por todo el Context. El patrón State evita esto, aunque aumenta el número de clases.
2. **Hace explícitas las transiciones de estado.** Introducir objetos separados para diferentes estados hace que las transiciones sean más explícitas. Además, los objetos State pueden proteger al Context de estados internos inconsistentes, porque las transiciones son atómicas desde la perspectiva del Context (se produce al reasignar una única variable).
3. **Los objetos State pueden compartirse.** Si los objetos State no tienen variables de instancia (el estado está codificado únicamente en su tipo), los contextos pueden compartir un objeto State. En ese caso, son esencialmente *flyweights* (ver Flyweight (195)) sin estado intrínseco, solo comportamiento.

## Implementación

1. **¿Quién define las transiciones de estado?** El patrón no especifica qué participante define los criterios. Si los criterios son fijos, pueden implementarse enteramente en el Context. Sin embargo, es más flexible dejar que las subclases State especifiquen su propio estado sucesor y cuándo hacer la transición. Esto requiere añadir una interfaz al Context para que los objetos State puedan establecer el estado actual explícitamente. Descentralizar la lógica de transición facilita la modificación o extensión, pero introduce dependencias entre subclases.
2. **Alternativa basada en tablas.** Cargill [Car92] describe el uso de tablas para mapear entradas a transiciones de estado. Cada estado tiene una tabla que mapea cada posible entrada a un estado sucesor. La ventaja es la regularidad: se pueden cambiar los criterios modificando datos en lugar de código. Desventajas: la búsqueda en tabla suele ser menos eficiente que una llamada a función (virtual); la lógica de transición se vuelve menos explícita y más difícil de entender; es difícil añadir acciones que acompañen a las transiciones. La diferencia clave es que el patrón State modela comportamiento específico de estado, mientras que el enfoque de tablas se centra en definir transiciones.
3. **Creación y destrucción de objetos State.** Hay dos opciones: (a) crear objetos State solo cuando se necesiten y destruirlos después, o (b) crearlos por adelantado y nunca destruirlos. La primera es preferible cuando los estados que se entrarán no se conocen en tiempo de ejecución y los cambios de estado son poco frecuentes; evita crear objetos que no se usarán. La segunda es mejor cuando los cambios de estado son rápidos, para evitar costos de destrucción y re-creación; el Context debe mantener referencias a todos los estados posibles.
4. **Uso de herencia dinámica.** Cambiar el comportamiento de un objeto podría lograrse cambiando su clase en tiempo de ejecución, pero esto no es posible en la mayoría de los lenguajes orientados a objetos. Excepciones incluyen Self y otros lenguajes basados en delegación que proporcionan herencia dinámica. Cambiar el destino de la delegación en tiempo de ejecución cambia efectivamente la estructura de herencia, permitiendo que los objetos cambien su comportamiento.

## Relacionado

- [[flyweight]]
- [[singleton]]
- [[strategy]]
- [[observer]]
- [[stateful-service]]
- [[stateless-service]]
- [[state-management-distributed-systems]]

## Lo mencionan

- [[design-pattern-classification]]
- [[delegation]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[behavioral-patterns]]
- [[state-management-distributed-systems]]
- [[stateful-service]]
- [[stateless-service]]
