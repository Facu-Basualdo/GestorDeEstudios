# Principios de diseño orientado a objetos
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 3 · Peso provisorio 2/3 (entra en IE3) · Fuentes: doc 2 Gamma et al., *Design
> Patterns*, cap. 1 (pp. 21–31) y glosario (p. 88); doc 33 Larman, cap. 17 (pp. 1–7 y 47),
> vía el export de Faro. Las preguntas *(cátedra)* son de los cuestionarios semanales 10 y 11.

## Preguntas de recuperación

- ¿Qué es el diseño dirigido por responsabilidades (RDD)? :: Pensar los objetos en términos de **responsabilidades, roles y colaboraciones**: una comunidad de objetos responsables que colaboran, como personas. [→ Responsabilidades y colaboración](#Responsabilidades%20y%20colaboración)
- ¿Qué dos tipos de responsabilidades hay? Un ejemplo de cada uno :: **Hacer** (crear, calcular, iniciar acciones en otros, coordinar): "Sale crea SalesLineItems". **Conocer** (datos propios, objetos relacionados, lo que puede derivar): "Sale conoce su total". [→ Responsabilidades y colaboración](#Responsabilidades%20y%20colaboración)
- ¿Una responsabilidad es lo mismo que un método? :: No. La responsabilidad es una abstracción; los métodos la cumplen, solos o colaborando con otros objetos. [→ Responsabilidades y colaboración](#Responsabilidades%20y%20colaboración)
- ¿Qué es la modularidad según Booch? :: La propiedad de un sistema descompuesto en módulos **cohesivos y débilmente acoplados**. [→ Responsabilidades y colaboración](#Responsabilidades%20y%20colaboración)
- ¿Qué es el encapsulamiento? :: El estado interno sólo se cambia con operaciones, y las operaciones sólo se ejecutan con solicitudes (mensajes): la representación es invisible desde afuera. [→ Objetos, interfaces y tipos](#Objetos,%20interfaces%20y%20tipos)
- ¿Qué es la interfaz de un objeto y qué es un tipo? :: Interfaz: el conjunto de las signaturas de sus operaciones. Tipo: el nombre de una interfaz particular. Un objeto puede tener muchos tipos, y objetos distintos pueden compartir uno. [→ Objetos, interfaces y tipos](#Objetos,%20interfaces%20y%20tipos)
- ¿Qué es el enlace dinámico y qué permite? :: Asociar en tiempo de ejecución una solicitud con la operación de un objeto concreto. Permite el polimorfismo: sustituir en ejecución objetos con la misma interfaz. [→ Objetos, interfaces y tipos](#Objetos,%20interfaces%20y%20tipos)
- Herencia de clase vs. herencia de interfaz :: De clase: define la implementación en términos de otra (reutiliza código). De interfaz (subtipado): dice cuándo un objeto puede usarse en lugar de otro. [→ Herencia vs. composición](#Herencia%20vs.%20composición)
- ¿Cuáles son los dos principios del diseño OO reutilizable (GoF)? :: 1) Programar para una interfaz, no para una implementación. 2) Preferir la composición de objetos a la herencia de clases. [→ Los dos principios de GoF](#Los%20dos%20principios%20de%20GoF)
- ¿Por qué "programar para una interfaz"? :: El cliente no conoce ni el tipo concreto ni la clase que implementa a los objetos que usa: se reducen mucho las dependencias de implementación. Los patrones creacionales permiten instanciar sin romper esto. [→ Los dos principios de GoF](#Los%20dos%20principios%20de%20GoF)
- Reutilización de caja blanca vs. caja negra :: Caja blanca = herencia: se ven los internos del padre, es estática y rompe el encapsulamiento. Caja negra = composición: no se ven los internos, es dinámica y no rompe el encapsulamiento. [→ Herencia vs. composición](#Herencia%20vs.%20composición)
- ¿Qué es la delegación? :: Un receptor pasa la solicitud (y una referencia a sí mismo) a un delegado. Hace a la composición tan potente como la herencia. Ej.: `Window` delega `Area()` en un `Rectangle`. [→ Herencia vs. composición](#Herencia%20vs.%20composición)
- Agregación vs. conocimiento (*acquaintance*) :: Agregación: un objeto posee a otro y comparten tiempo de vida (rombo). Conocimiento: sólo lo conoce y le pide cosas, sin ser responsable de él (flecha simple). [→ Estructura en compilación y en ejecución](#Estructura%20en%20compilación%20y%20en%20ejecución)
- ¿Qué riesgo corre un diseño que no considera los cambios? :: Un rediseño mayor: redefinir y reimplementar clases, modificar clientes y volver a testear. [→ Diseñar para el cambio](#Diseñar%20para%20el%20cambio)
- ¿Cuáles son las 8 causas comunes de rediseño según GoF? :: 1) Crear objetos nombrando la clase explícitamente. 2) Depender de operaciones específicas. 3) Depender de la plataforma. 4) Depender de representaciones o implementaciones. 5) Dependencias algorítmicas. 6) Acoplamiento fuerte. 7) Extender funcionalidad con subclases. 8) No poder alterar clases cómodamente. [→ Diseñar para el cambio](#Diseñar%20para%20el%20cambio)

## Cuestionario

1. ¿Qué riesgo corre un diseño que no considera los cambios futuros? *(cátedra)*
   - [x] Un rediseño mayor que implique redefinición y reimplementación de clases, modificación de clientes y retesteo
   - [ ] Una reducción en la cantidad de patrones de diseño aplicables al sistema
   - [ ] Una disminución del rendimiento en tiempo de ejecución del sistema
   - [ ] Una disminución automática de la cohesión de todas las clases
   > El costo real es rehacer el trabajo, no la performance ni la cantidad de patrones. [→ Diseñar para el cambio](#Diseñar%20para%20el%20cambio)
2. ¿Cuáles de las siguientes son causas comunes de rediseño que los patrones ayudan a abordar? *(cátedra)*
   - [x] Dependencia en plataforma de hardware y software
   - [x] Crear un objeto especificando una clase explícitamente
   - [x] Dependencia en operaciones específicas
   - [ ] Exceso de pruebas automatizadas en el proceso de desarrollo
   > Las pruebas no figuran entre las 8 causas. [→ Diseñar para el cambio](#Diseñar%20para%20el%20cambio)
3. ¿Cuáles son causas comunes de rediseño que los patrones ayudan a evitar? *(cátedra)*
   - [ ] Dependencia en el lenguaje de programación utilizado
   - [x] Dependencia en operaciones específicas
   - [x] Crear un objeto especificando una clase explícitamente
   - [x] Dependencia en representaciones o implementaciones de objetos
   > La causa es la dependencia de **plataforma** (hardware y software), no del lenguaje. [→ Diseñar para el cambio](#Diseñar%20para%20el%20cambio)
4. ¿Qué dos principios propone GoF para el diseño orientado a objetos reutilizable?
   - [x] Programar para una interfaz, no para una implementación, y preferir la composición a la herencia
   - [ ] Programar para una implementación concreta y preferir la herencia a la composición
   - [ ] Una responsabilidad por clase y una clase por archivo
   - [ ] Evitar las clases abstractas y usar sólo clases concretas
   > Son los dos principios del capítulo 1 del libro de patrones. [→ Los dos principios de GoF](#Los%20dos%20principios%20de%20GoF)
5. ¿Cuál es una desventaja de la herencia de clases frente a la composición?
   - [x] Rompe el encapsulamiento y no se puede cambiar en tiempo de ejecución
   - [ ] Genera más objetos en tiempo de ejecución
   - [ ] Obliga a que los objetos tengan interfaces bien definidas
   - [ ] No permite reutilizar código
   > La herencia es caja blanca y se fija al compilar. Tener más objetos es la desventaja de la **composición**. [→ Herencia vs. composición](#Herencia%20vs.%20composición)
6. Un `Window` implementa `Area()` pasándole el pedido a un `Rectangle` que tiene adentro. ¿Qué mecanismo es?
   - [x] Delegación
   - [ ] Herencia de clase
   - [ ] Tipo parametrizado
   - [ ] Enlace estático
   > Es el ejemplo de GoF: el receptor delega en otro objeto. Lo usan State, Strategy, Visitor, Mediator, Chain of Responsibility y Bridge. [→ Herencia vs. composición](#Herencia%20vs.%20composición)
7. "Una Sale conoce su total" es una responsabilidad de tipo…
   - [x] conocer
   - [ ] hacer
   - [ ] coordinar
   - [ ] crear
   > Conocer datos propios, objetos relacionados o cosas que puede calcular. "Sale crea SalesLineItems" sería de hacer. [→ Responsabilidades y colaboración](#Responsabilidades%20y%20colaboración)
8. Si un algoritmo es propenso a cambiar, ¿qué causa de rediseño se evita aislándolo, y con qué patrones?
   - [x] Dependencias algorítmicas: Builder, Iterator, Strategy, Template Method, Visitor
   - [ ] Acoplamiento fuerte: Facade, Mediator, Observer
   - [ ] Dependencia de plataforma: Abstract Factory, Bridge
   - [ ] No poder alterar clases: Adapter, Decorator, Visitor
   > Los algoritmos se extienden, optimizan y reemplazan: los objetos que dependen de ellos cambian con ellos. [→ Diseñar para el cambio](#Diseñar%20para%20el%20cambio)

## Contenido

### Responsabilidades y colaboración

- **Diseño OO** (Larman): decidir qué métodos van en qué clases y cómo interactúan los objetos. No es mecánico: se guía por un gran conjunto de principios "blandos" y patrones que se pueden nombrar y aplicar (doc 33, p. 1).
- La herramienta crítica de diseño **no es UML** sino una mente formada en principios de diseño (GRASP, patrones GoF). Se modela **para entender y comunicar**, no para documentar.
- **RDD** (*Responsibility-Driven Design*): los objetos son como personas con responsabilidades que colaboran para hacer el trabajo (doc 33, pp. 6–7).
- **Responsabilidad**: contrato u obligación de una clase según su rol. Hay dos tipos:

| Hacer (*doing*) | Conocer (*knowing*) |
|---|---|
| Hacer algo por sí mismo (crear un objeto, calcular) | Conocer sus datos privados encapsulados |
| Iniciar acciones en otros objetos | Conocer objetos relacionados |
| Controlar y coordinar actividades de otros | Conocer cosas que puede derivar o calcular |

- Una responsabilidad **no es un método**: es una abstracción, y los métodos la cumplen. Las de conocer suelen salir del modelo de dominio (bajo salto representacional: si `Sale` tiene `time` en el dominio, la clase `Sale` conoce su `time`).
- **Colaboración**: para cumplir `getTotal()`, `Sale` le pide `getSubtotal()` a cada `SalesLineItem`.
- **Diseño modular** (Booch): sistema descompuesto en **módulos cohesivos y débilmente acoplados**. En los objetos: cada método con un propósito claro y único, y cada clase agrupando preocupaciones relacionadas.

### Objetos, interfaces y tipos

Vocabulario del capítulo 1 de GoF (doc 2, pp. 21–24):

- **Objeto**: empaqueta datos y los procedimientos (operaciones o métodos) que los manipulan. Ejecuta una operación cuando recibe una **solicitud** (mensaje).
- **Encapsulamiento**: las operaciones son la única forma de cambiar el estado interno y las solicitudes, la única forma de ejecutar una operación. El estado es invisible desde afuera.
- **Signatura**: nombre de la operación, parámetros y valor de retorno. La **interfaz** de un objeto es el conjunto de todas sus signaturas.
- **Tipo**: nombre de una interfaz particular. Un objeto puede tener muchos tipos, y objetos muy distintos pueden compartir un tipo. **Subtipo**: su interfaz contiene la del supertipo.
- **Clase**: define la implementación (datos y operaciones). Una clase también define un tipo, pero **clase y tipo no son lo mismo**.
- **Clase abstracta**: define una interfaz común para sus subclases; difiere parte de su implementación en **operaciones abstractas** y no se puede instanciar. **Clase concreta**: se puede instanciar. **Mixin**: da funcionalidad opcional y requiere herencia múltiple.
- **Enlace dinámico**: la solicitud se asocia a la operación concreta **en tiempo de ejecución**. Eso permite el **polimorfismo**: sustituir en ejecución objetos con interfaces idénticas. El cliente sólo supone que el objeto soporta una interfaz, y queda desacoplado.
- **Granularidad**: los objetos van desde hardware hasta aplicaciones completas, y los patrones ayudan a decidir qué es un objeto (Facade: un subsistema entero; Flyweight: objetos finísimos y muchos).

### Herencia vs. composición

| | Herencia de clase | Composición de objetos |
|---|---|---|
| Reutilización | **Caja blanca**: los internos del padre son visibles | **Caja negra**: sólo se ven interfaces |
| Cuándo se define | Estática, en compilación | Dinámica, en ejecución |
| Ventajas | Fácil de usar y de modificar la implementación heredada | No rompe el encapsulamiento; los objetos se reemplazan en ejecución; menos dependencias de implementación |
| Desventajas | Rompe el encapsulamiento; dependencias de implementación; no cambia en ejecución | Más objetos; el comportamiento depende de cómo se relacionan |

- **Herencia de clase** = herencia de interfaz + herencia de implementación. **Herencia de interfaz** (subtipado): dice cuándo un objeto puede usarse en lugar de otro. Muchos lenguajes no las distinguen.
- Mitigación de la herencia: heredar sólo de **clases abstractas**.
- **Delegación**: dos objetos manejan la solicitud; el receptor la pasa al delegado junto con una referencia a sí mismo. Hace a la composición tan poderosa como la herencia. Ejemplo: `Window` delega `Area()` en un `Rectangle`. Ventaja: el comportamiento se compone y cambia en ejecución. Desventaja: el software dinámico es más difícil de entender y puede ser menos eficiente. La usan **State, Strategy, Visitor, Mediator, Chain of Responsibility y Bridge**.
- **Tipos parametrizados** (*generics*, *templates*): tercera forma de componer comportamiento (ej.: `List<T>`). No cambian en ejecución.

### Los dos principios de GoF

1. **Programar para una interfaz, no para una implementación** (doc 2, p. 25). No declarar variables de clases concretas, sino de la interfaz de una clase abstracta. Beneficios:
   - los clientes no conocen el tipo específico de los objetos que usan, mientras cumplan la interfaz;
   - los clientes no conocen las clases que los implementan.

   Eso reduce muchísimo las dependencias entre subsistemas. Algo tiene que instanciar las clases concretas: para eso están los **patrones creacionales** (Abstract Factory, Builder, Factory Method, Prototype, Singleton).
2. **Preferir la composición de objetos a la herencia de clases** (doc 2, p. 27). Idealmente se reutiliza ensamblando componentes existentes, no creando nuevos. La experiencia muestra que se **abusa de la herencia**; los diseños con más composición son más simples y reutilizables.

### Estructura en compilación y en ejecución

- La estructura del **código** (jerarquías de clases, fija al compilar) y la de **ejecución** (redes de objetos que cambian rápido) son en gran medida independientes. Entender una desde la otra es como entender un ecosistema mirando la taxonomía (doc 2, p. 30).
- Composite, Decorator, Observer y Chain of Responsibility capturan esa diferencia.
- **Agregación**: un objeto posee a otro o es responsable de él; tienen el **mismo tiempo de vida**. Se dibuja con **rombo**.
- **Conocimiento** (*acquaintance*, asociación, "usa"): un objeto sólo conoce a otro y le pide operaciones, sin ser responsable de él. Es más débil, dinámico y de corta duración. Se dibuja con **flecha simple**.
- Suelen implementarse igual (con referencias o punteros): la diferencia es de **intención**.
- Notación de GoF (OMT): herencia con triángulo, agregación con rombo, referencia con flecha simple, creación con flecha punteada, multiplicidad con un círculo relleno.

### Diseñar para el cambio

- La clave para maximizar la reutilización es **anticipar** requisitos nuevos y cambios. Si no, se arriesga un **rediseño mayor**: redefinir y reimplementar clases, modificar clientes y volver a testear (doc 2, p. 31).
- Los patrones hacen que ciertos aspectos varíen **independientemente**, así el sistema resiste un tipo particular de cambio.

| # | Causa de rediseño | Patrones que la evitan |
|---|---|---|
| 1 | Crear un objeto especificando la clase explícitamente | Abstract Factory, Factory Method, Prototype |
| 2 | Depender de operaciones específicas | Chain of Responsibility, Command |
| 3 | Depender de la plataforma de hardware y software | Abstract Factory, Bridge |
| 4 | Depender de representaciones o implementaciones de objetos | Abstract Factory, Bridge, Memento, Proxy |
| 5 | Dependencias algorítmicas | Builder, Iterator, Strategy, Template Method, Visitor |
| 6 | Acoplamiento fuerte | Abstract Factory, Bridge, Chain of Responsibility, Command, Facade, Mediator, Observer |
| 7 | Extender funcionalidad mediante subclases | Bridge, Chain of Responsibility, Composite, Decorator, Observer, Strategy |
| 8 | No poder alterar clases cómodamente (sin código fuente, o afecta muchas subclases) | Adapter, Decorator, Visitor |

## Dónde me equivoco

_Sin errores registrados todavía._ Trampas de los cuestionarios: la causa 3 es la dependencia de **plataforma**, no del lenguaje; el riesgo de no diseñar para el cambio es el **rediseño**, no la performance.

## Ver también

- [Principios SOLID](principios-solid.md): DIP y OCP son la misma idea que "programar para una interfaz".
- [Patrones GRASP](patrones-grasp.md): cómo asignar responsabilidades en concreto.
- [Fundamentos de patrones de diseño](fundamentos-de-patrones-de-diseno.md): qué es un patrón y cómo se clasifica.
