# Patrones de comportamiento
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 4 · Peso provisorio 2/3 (entra en IE3) · Fuentes: doc 2 Gamma et al., *Design
> Patterns*, cap. 5 (pp. 71 y 162–349), y doc 16 *patrones de diseño* (filminas, p. 9), vía
> el export de Faro. Ningún cuestionario semanal preguntó todavía por estos patrones: las preguntas son del tutor.

## Preguntas de recuperación

- ¿De qué se ocupan los patrones de comportamiento? :: De los **algoritmos y la asignación de responsabilidades** entre objetos, y de cómo se **comunican**. Es la categoría con más patrones (11). [→ Qué resuelven](#Qué%20resuelven)
- ¿Cuáles son los dos de comportamiento de ámbito clase? :: **Template Method** e **Interpreter** (usan herencia). Los otros nueve son de objeto. [→ Qué resuelven](#Qué%20resuelven)
- Intención de Strategy :: Definir una **familia de algoritmos**, encapsular cada uno y hacerlos **intercambiables**: el algoritmo varía independientemente del cliente. Ej.: `Composition` con `SimpleCompositor` o `TeXCompositor`. [→ Strategy](#Strategy)
- Intención de State :: Que un objeto **cambie su comportamiento cuando cambia su estado interno**: parece que cambia de clase. Ej.: `TCPConnection` delega en `TCPEstablished`, `TCPListen` o `TCPClosed`. [→ State](#State)
- Strategy vs. State :: Estructura casi igual (un contexto delega en un objeto intercambiable). En Strategy **el cliente elige** el algoritmo; en State **el objeto cambia solo** de estado y los estados conocen sus transiciones. [→ Strategy vs. State y otros pares](#Strategy%20vs.%20State%20y%20otros%20pares)
- Intención de Observer :: Una dependencia **uno a muchos**: cuando el sujeto cambia, **todos sus observadores son notificados** y se actualizan solos. También se llama *publish–subscribe*. [→ Observer](#Observer)
- Consecuencias de Observer :: Acoplamiento **abstracto y mínimo** sujeto–observador (pueden estar en capas distintas) · comunicación **broadcast** · riesgo de **actualizaciones inesperadas** en cascada. [→ Observer](#Observer)
- Modelo push vs. pull en Observer :: Push: el sujeto manda el detalle del cambio (menos reutilizable). Pull: manda un aviso mínimo y el observador consulta (puede ser ineficiente). [→ Observer](#Observer)
- Intención de Command :: **Encapsular una solicitud como un objeto**: permite parametrizar clientes, encolar o registrar pedidos y **deshacer**. Ej.: `PasteCommand` ejecutado por un `MenuItem`. [→ Command](#Command)
- Intención de Template Method :: Definir el **esqueleto de un algoritmo** y dejar que las subclases redefinan algunos pasos sin cambiar la estructura. Aplica el **principio de Hollywood**: "no nos llames, nosotros te llamamos". [→ Template Method](#Template%20Method)
- Intención de Iterator :: **Recorrer secuencialmente** un agregado **sin exponer su representación**. Permite varios recorridos distintos y simultáneos. [→ Iterator](#Iterator)
- Intención de Chain of Responsibility :: Evitar acoplar al emisor con el receptor: la solicitud **pasa por una cadena** hasta que alguien la atiende. Ej.: ayuda contextual. Riesgo: que nadie la atienda. [→ Chain of Responsibility](#Chain%20of%20Responsibility)
- Intención de Mediator :: Un objeto que **encapsula cómo interactúan** varios objetos (colegas), que sólo conocen al mediador. Riesgo: que el mediador se vuelva un monolito. [→ Mediator](#Mediator)
- Intención de Memento :: **Capturar y externalizar el estado interno** de un objeto **sin violar el encapsulamiento**, para restaurarlo después (deshacer). [→ Memento](#Memento)
- Intención de Visitor y su desventaja :: Representar una **operación sobre los elementos de una estructura** para agregar operaciones nuevas **sin cambiar las clases**. Cuesta agregar **clases de elementos nuevas**. Usa *double dispatch*. [→ Visitor](#Visitor)
- Intención de Interpreter :: Dada una gramática simple, representarla con una clase por regla e **interpretar oraciones** recorriendo el árbol sintáctico. Ej.: expresiones regulares. [→ Interpreter](#Interpreter)

## Cuestionario

1. Un procesador de texto debe poder cambiar el algoritmo de corte de líneas (rápido o de calidad TeX) sin tocar la clase del documento. ¿Qué patrón es?
   - [x] Strategy
   - [ ] State
   - [ ] Template Method
   - [ ] Decorator
   > Cada algoritmo es una `ConcreteStrategy` intercambiable (`SimpleCompositor`, `TeXCompositor`) y elimina los condicionales. [→ Strategy](#Strategy)
2. Una `TCPConnection` responde distinto a `Open()` según esté establecida, escuchando o cerrada. ¿Qué patrón elimina los condicionales por estado?
   - [x] State
   - [ ] Strategy
   - [ ] Observer
   - [ ] Command
   > Cada rama del condicional pasa a una subclase de `TCPState` y la conexión reemplaza su objeto estado al cambiar. [→ State](#State)
3. ¿Qué diferencia principal hay entre Strategy y State?
   - [x] En Strategy el cliente elige el algoritmo; en State el objeto cambia de estado solo, y los estados pueden definir las transiciones
   - [ ] Strategy usa herencia y State usa composición
   - [ ] State encapsula algoritmos y Strategy encapsula estados
   - [ ] No hay diferencia, son sinónimos
   > Los dos usan composición y delegación; cambia quién decide el reemplazo y para qué. [→ Strategy vs. State y otros pares](#Strategy%20vs.%20State%20y%20otros%20pares)
4. Una planilla y un gráfico de barras muestran los mismos datos, y al cambiar los datos los dos se actualizan sin conocerse entre sí. ¿Qué patrón es?
   - [x] Observer
   - [ ] Mediator
   - [ ] Chain of Responsibility
   - [ ] Memento
   > Los datos son el sujeto; la planilla y el gráfico, observadores. Es la base del MVC de Smalltalk. [→ Observer](#Observer)
5. ¿Cuál es una **desventaja** de Observer?
   - [x] Una operación inocente en el sujeto puede disparar una cascada de actualizaciones inesperadas
   - [ ] El sujeto queda acoplado a las clases concretas de sus observadores
   - [ ] No permite agregar observadores en tiempo de ejecución
   - [ ] Sólo admite un observador por sujeto
   > El acoplamiento es abstracto y se pueden agregar y quitar observadores cuando se quiera. [→ Observer](#Observer)
6. Hay que soportar deshacer y rehacer en un editor, y que los ítems de menú ejecuten acciones sin saber qué hacen. ¿Qué patrón conviene?
   - [x] Command
   - [ ] Strategy
   - [ ] Iterator
   - [ ] Facade
   > Cada acción es un objeto con `Execute()` (y `Unexecute()`): se guarda en un historial. En Lexi resuelve las operaciones de usuario. [→ Command](#Command)
7. `Application.OpenDocument()` fija los pasos (verificar, crear, agregar, leer) y las subclases sólo redefinen `DoCreateDocument()` y `CanOpenDocument()`. ¿Qué patrón es?
   - [x] Template Method
   - [ ] Factory Method
   - [ ] Strategy
   - [ ] Builder
   > El esqueleto está en la clase padre y las subclases completan pasos. `DoCreateDocument()` además es un Factory Method llamado desde el template. [→ Template Method](#Template%20Method)
8. En la ayuda contextual, si un botón no tiene ayuda propia, el pedido pasa al diálogo y después a la ventana. ¿Qué patrón es y cuál es su riesgo?
   - [x] Chain of Responsibility; que el pedido llegue al final sin que nadie lo atienda
   - [ ] Observer; actualizaciones en cascada
   - [ ] Mediator; que el mediador se vuelva monolítico
   - [ ] Command; demasiados objetos comando
   > El emisor no conoce al receptor (receptor implícito) y la recepción no está garantizada. [→ Chain of Responsibility](#Chain%20of%20Responsibility)
9. En un compilador, los nodos del árbol sintáctico casi no cambian, pero se agregan seguido operaciones nuevas (chequeo de tipos, generación de código, impresión). ¿Qué patrón conviene?
   - [x] Visitor
   - [ ] Iterator
   - [ ] Interpreter
   - [ ] Composite
   > Cada operación es un visitor nuevo. Si lo que cambiara seguido fueran las clases de nodos, Visitor sería mala idea. [→ Visitor](#Visitor)
10. Un cuadro de diálogo tiene muchos widgets que dependen unos de otros. ¿Qué patrón evita que cada widget conozca a todos los demás?
    - [x] Mediator
    - [ ] Observer
    - [ ] Facade
    - [ ] Proxy
    > `FontDialogDirector` centraliza las interacciones; los widgets sólo conocen al director. [→ Mediator](#Mediator)
11. ¿Qué patrón guarda el estado de un objeto para restaurarlo después **sin romper su encapsulamiento**?
    - [x] Memento
    - [ ] Command
    - [ ] Prototype
    - [ ] State
    > El cuidador (*caretaker*) guarda el memento pero nunca mira adentro; sólo el originador lo lee. Command suele usar mementos para deshacer. [→ Memento](#Memento)
12. ¿Cuáles de estos patrones de comportamiento son de ámbito **clase**?
    - [x] Template Method
    - [x] Interpreter
    - [ ] Strategy
    - [ ] Observer
    > Usan herencia para repartir el comportamiento. El resto son de objeto (composición). [→ Qué resuelven](#Qué%20resuelven)

## Contenido

### Qué resuelven

- Se ocupan de **algoritmos y de la asignación de responsabilidades** entre objetos, y describen también **cómo se comunican**. Caracterizan flujos de control complejos, difíciles de seguir en ejecución (doc 2, p. 71).
- Es la categoría con **más patrones** (doc 16, p. 9): once.
- **De clase** (herencia): **Template Method** (el más simple y común) e **Interpreter**.
- **De objeto** (composición): grupos de objetos que cooperan en algo que ninguno haría solo. Para que se conozcan sin acoplarse: **Mediator** (un intermediario), **Chain of Responsibility** (acoplamiento todavía más flojo) y **Observer**. Otros encapsulan comportamiento en un objeto y le delegan: **Strategy** (un algoritmo), **Command** (una solicitud), **State** (los estados), **Visitor** (una operación repartida entre clases), **Iterator** (el recorrido). Y **Memento** (una instantánea del estado).

| Patrón | Intención en una línea |
|---|---|
| Chain of Responsibility | Pasar la solicitud por una cadena hasta que alguien la atienda |
| Command | Encapsular una solicitud como objeto (deshacer, colas, historial) |
| Interpreter | Representar una gramática simple e interpretar sus oraciones |
| Iterator | Recorrer un agregado sin exponer su representación |
| Mediator | Centralizar cómo interactúan varios objetos |
| Memento | Capturar el estado interno para restaurarlo, sin romper el encapsulamiento |
| Observer | Uno a muchos: notificar a todos los dependientes cuando algo cambia |
| State | Cambiar el comportamiento cuando cambia el estado |
| Strategy | Algoritmos intercambiables |
| Template Method | Esqueleto del algoritmo en la clase padre, pasos en las subclases |
| Visitor | Agregar operaciones sobre una estructura sin cambiar sus clases |

### Strategy

- **Intención**: definir una **familia de algoritmos**, encapsular cada uno y hacerlos **intercambiables**, para que el algoritmo varíe independientemente de los clientes que lo usan. También conocido como *Policy* (doc 2, pp. 315 y ss.).
- **Participantes**: `Strategy` (`Compositor`, interfaz común) · `ConcreteStrategy` (`SimpleCompositor`, `TeXCompositor`, `ArrayCompositor`) · `Context` (`Composition`: se configura con una estrategia y le delega).
- **Colaboración**: el cliente suele crear la estrategia y pasársela al contexto; después sólo habla con el contexto. El contexto le pasa los datos a la estrategia o se pasa a sí mismo.

```cpp
Composition* quick = new Composition(new SimpleCompositor);
Composition* slick = new Composition(new TeXCompositor);
```

- **Consecuencias**:
  1. Familias de algoritmos reutilizables.
  2. **Alternativa a la subclasificación**: el algoritmo varía sin tocar el contexto.
  3. **Elimina los condicionales** para elegir comportamiento.
  4. El cliente puede elegir implementaciones con distintos compromisos de tiempo y espacio.
  5. **Desventaja**: el cliente tiene que conocer las estrategias para elegir.
  6. **Desventaja**: sobrecarga de comunicación (la interfaz común puede pasar datos que alguna estrategia no usa).
  7. **Desventaja**: más objetos (se mitiga compartiendo estrategias sin estado, como flyweights).
- En Lexi resuelve el **formateo**.

### State

- **Intención**: permitir que un objeto **altere su comportamiento cuando cambia su estado interno**. El objeto **parecerá cambiar de clase** (doc 2, pp. 305 y ss.).
- **Motivación**: `TCPConnection` responde distinto a `Open()` según esté *Established*, *Listening* o *Closed*. Se crea `TCPState` (abstracta) con una subclase por estado; la conexión guarda su estado actual, **le delega** los pedidos y lo **reemplaza** al cambiar.
- **Aplicabilidad**: el comportamiento depende del estado y cambia en ejecución · hay **condicionales grandes que dependen del estado** (constantes enumeradas): cada rama pasa a una clase.
- **Participantes**: `Context` (`TCPConnection`) · `State` (`TCPState`) · `ConcreteState` (`TCPEstablished`, `TCPListen`, `TCPClosed`).
- **Consecuencias**: localiza el comportamiento de cada estado en un objeto (más clases, pero sin condicionales esparcidos) · hace **explícitas las transiciones** (son atómicas: se reasigna una variable) · los estados sin atributos **se pueden compartir** (flyweights).
- **¿Quién define las transiciones?** El patrón no lo fija: el contexto (si los criterios son fijos) o, más flexible, cada estado conoce a su sucesor. Alternativa: tablas de transiciones (más regulares pero menos explícitas).

### Observer

- **Intención**: definir una dependencia **uno a muchos**, de modo que cuando un objeto cambia de estado, **todos sus dependientes son notificados y actualizados** automáticamente. También conocido como *Dependents* o *Publish–Subscribe* (doc 2, pp. 293 y ss.).
- **Motivación**: separar la presentación de los datos. Una planilla y un gráfico de barras muestran los mismos datos **sin conocerse**, pero se comportan como si se conocieran: cambiás uno y el otro se actualiza.
- **Aplicabilidad**: una abstracción con dos aspectos, uno dependiente del otro · un cambio obliga a cambiar otros y no se sabe cuántos · un objeto debe notificar a otros **sin suponer quiénes son**.
- **Participantes**: `Subject` (conoce a sus observadores; `Attach`, `Detach`, `Notify`) · `Observer` (interfaz `Update`) · `ConcreteSubject` (guarda el estado y notifica al cambiar) · `ConcreteObserver` (referencia al sujeto; en `Update` le consulta el estado y se sincroniza).
- **Consecuencias**:
  1. **Acoplamiento abstracto y mínimo**: el sujeto sólo sabe que tiene una lista de `Observer`. Pueden estar en capas distintas: uno de bajo nivel avisa a uno de alto nivel sin romper las capas.
  2. **Comunicación broadcast**: la notificación no nombra receptor; se agregan y quitan observadores en cualquier momento.
  3. **Actualizaciones inesperadas**: una operación inocente puede disparar una **cascada**, y el protocolo simple no dice qué cambió.
- **Push vs. pull**: en *push* el sujeto manda el detalle (menos reutilizable, porque supone qué necesitan los observadores); en *pull* manda un aviso mínimo y los observadores preguntan (puede ser ineficiente).
- **ChangeManager**: cuando las dependencias son complejas, un objeto mapea sujetos y observadores y define la estrategia de actualización. Es un **Mediator**, y suele ser un Singleton.
- Es la base del **MVC** (el modelo notifica a las vistas).

### Command

- **Intención**: **encapsular una solicitud como un objeto**. Así se parametrizan clientes con distintas solicitudes, se encolan o registran, y se puede **deshacer**. También conocido como *Action* o *Transaction* (doc 2, pp. 233 y ss.).
- **Aplicabilidad**: parametrizar objetos con una acción · especificar, encolar y ejecutar pedidos en otro momento · **deshacer** · registrar cambios (log) · estructurar el sistema con operaciones de alto nivel (transacciones).
- **Participantes**: `Command` (interfaz `Execute`) · `ConcreteCommand` (`PasteCommand`, `OpenCommand`: une un receptor con una acción) · `Client` (`Application`: crea el comando y le fija el receptor) · `Invoker` (`MenuItem`: le pide que se ejecute) · `Receiver` (`Document`: sabe hacer la operación).
- **Consecuencias**: desacopla al que invoca del que sabe hacer la operación · los comandos son objetos de primera clase · se arman **comandos compuestos** (`MacroCommand` es un Composite) · es fácil agregar comandos.
- En Lexi resuelve las **operaciones de usuario** (con deshacer y rehacer).

### Template Method

- **Intención**: definir el **esqueleto de un algoritmo** en una operación, difiriendo algunos pasos a las subclases, que los redefinen **sin cambiar la estructura** (doc 2, pp. 325 y ss.).
- **Motivación**: `Application.OpenDocument()` fija los pasos (verificar si se puede abrir, crear el documento, agregarlo, leerlo); las subclases redefinen `CanOpenDocument()` y `DoCreateDocument()`, y las de `Document`, `DoRead()`.
- **Aplicabilidad**: implementar una vez lo invariante y dejar que las subclases hagan lo que varía · **factorizar código común** para no duplicarlo · controlar cómo se extienden las subclases con **ganchos** (*hooks*).
- **Participantes**: `AbstractClass` (`Application`: el template method y las operaciones primitivas abstractas) · `ConcreteClass` (`MyApplication`: implementa los pasos).
- **Consecuencias**: técnica fundamental de reutilización de código · **estructura de control invertida**: el **principio de Hollywood**, "no nos llames, nosotros te llamamos" (el padre llama a la subclase) · hay que dejar claro qué operaciones son **ganchos** (pueden redefinirse) y cuáles **abstractas** (deben redefinirse).
- Ejemplo: `View.Display()` = `SetFocus()`; `DoDisplay()`; `ResetFocus()`. Convención: prefijo `Do-` para los pasos redefinibles.

### Iterator

- **Intención**: acceder **secuencialmente** a los elementos de un agregado **sin exponer su representación**. También conocido como *Cursor* (doc 2, pp. 257 y ss.).
- La responsabilidad de recorrer sale del agregado y pasa a un **iterador**: `First()`, `Next()`, `IsDone()`, `CurrentItem()`.
- **Aplicabilidad**: acceder al contenido sin exponer la estructura · **varios recorridos** (y simultáneos) · una interfaz uniforme para recorrer estructuras distintas (**iteración polimórfica**: `Aggregate.CreateIterator()` es un Factory Method).
- **Participantes**: `Iterator` · `ConcreteIterator` (guarda la posición actual) · `Aggregate` (`CreateIterator`) · `ConcreteAggregate`.
- **Consecuencias**: permite variar el recorrido (inorden, preorden) cambiando el iterador · simplifica la interfaz del agregado · varios recorridos a la vez, cada uno con su estado.
- Variantes: **externo** (el cliente avanza; más flexible, por ejemplo para comparar dos colecciones) vs. **interno** (el iterador aplica una operación a cada elemento) · **robusto** (tolera altas y bajas durante el recorrido) · **iterador nulo** (`IsDone()` siempre verdadero, para las hojas de un Composite).

### Chain of Responsibility

- **Intención**: evitar acoplar al emisor de una solicitud con su receptor, dando a **más de un objeto la oportunidad de atenderla**: se encadenan los receptores y la solicitud pasa por la cadena hasta que uno la atiende (doc 2, pp. 223 y ss.).
- **Motivación**: ayuda contextual en una UI. Si el botón no tiene ayuda propia, la pide el diálogo; si no, la ventana. Se organiza de lo más específico a lo más general. El emisor no sabe quién atiende: **receptor implícito**.
- **Aplicabilidad**: más de un objeto puede atender y no se sabe de antemano cuál · emitir el pedido sin especificar el receptor · el conjunto de receptores se define dinámicamente.
- **Participantes**: `Handler` (`HelpHandler`, con el enlace al sucesor) · `ConcreteHandler` (`PrintButton`, `PrintDialog`: atiende o reenvía) · `Client`.
- **Consecuencias**: **menos acoplamiento** (cada objeto sólo conoce a su sucesor) · flexibilidad para repartir responsabilidades en ejecución · **la recepción no está garantizada**: el pedido puede caerse al final de la cadena.

### Mediator

- **Intención**: definir un objeto que **encapsula cómo interactúa un conjunto de objetos**. Promueve el acoplamiento débil porque los objetos no se refieren entre sí explícitamente (doc 2, pp. 273 y ss.).
- **Ejemplo**: `FontDialogDirector` coordina los widgets de un cuadro de diálogo; cada widget (colega) sólo conoce al director.
- **Aplicabilidad**: objetos que se comunican de formas complejas · un objeto difícil de reutilizar porque conoce a muchos otros · comportamiento repartido que debe personalizarse sin subclasificar mucho.
- **Consecuencias**: limita la subclasificación · desacopla a los colegas · simplifica los protocolos (de muchos a muchos pasa a uno a muchos) · abstrae cómo cooperan · **centraliza el control**: el mediador puede volverse un **monolito** difícil de mantener.
- La comunicación colega–mediador puede implementarse con **Observer**.

### Memento

- **Intención**: **capturar y externalizar el estado interno** de un objeto **sin violar su encapsulamiento**, para poder **restaurarlo** después. También conocido como *Token* (doc 2, pp. 283 y ss.).
- **Participantes**: `Memento` (`SolverState`: guarda el estado; interfaz **estrecha** para el cuidador y **amplia** para el originador) · `Originator` (`ConstraintSolver`: crea el memento y se restaura con él) · `Caretaker` (el mecanismo de deshacer: **custodia el memento y nunca mira su contenido**).
- **Consecuencias**: preserva el encapsulamiento · simplifica al originador · puede ser **costoso** si hay mucho estado · difícil de definir las dos interfaces en algunos lenguajes · costos ocultos de almacenamiento.
- **Relacionados**: Command usa mementos para las operaciones que se deshacen; Iterator puede usarlos para guardar el estado de la iteración.

### Visitor

- **Intención**: representar una **operación a realizar sobre los elementos de una estructura de objetos**. Permite definir **operaciones nuevas sin cambiar las clases** de los elementos (doc 2, pp. 331 y ss.).
- **Motivación**: un compilador con un árbol sintáctico necesita muchas operaciones (chequeo de tipos, generación de código, impresión). Repartirlas en las clases de nodos es inmantenible: se empaqueta cada operación en un **visitor** que se pasa a los elementos al recorrer.
- **Aplicabilidad**: muchas clases con interfaces distintas y operaciones que dependen de la clase concreta · muchas operaciones no relacionadas que no se quiere mezclar en las clases · **las clases de la estructura casi no cambian, pero se agregan operaciones seguido**.
- **Participantes**: `Visitor` (`NodeVisitor`: un `Visit` por clase de elemento) · `ConcreteVisitor` (`TypeCheckingVisitor`) · `Element` (`Node`: `Accept(visitor)`) · `ConcreteElement` (`AssignmentNode`: `Accept` llama al `Visit` que le corresponde) · `ObjectStructure` (`Program`).
- **Consecuencias**: fácil **agregar operaciones** · agrupa lo relacionado · **difícil agregar clases de elementos** (hay que tocar todos los visitors) · visita jerarquías distintas · acumula estado al recorrer · puede **romper el encapsulamiento** (los elementos exponen su estado).
- **Double dispatch**: la operación ejecutada depende de **dos tipos**, el del visitor y el del elemento. Es la clave del patrón.
- En Lexi, con Iterator, resuelve la **corrección ortográfica y la separación silábica**.

### Interpreter

- **Intención**: dado un lenguaje, definir una representación de su **gramática** y un **intérprete** que la use para interpretar oraciones (doc 2, pp. 243 y ss.).
- **Motivación**: si un problema se repite mucho, conviene expresarlo en un lenguaje simple (por ejemplo, **expresiones regulares**) e interpretarlo.
- **Participantes**: `AbstractExpression` (`Interpret`) · `TerminalExpression` (`LiteralExpression`) · `NonterminalExpression` (una clase por regla: `AlternationExpression`, `RepetitionExpression`, `SequenceExpression`) · `Context` · `Client` (arma el árbol sintáctico e invoca `Interpret`).
- Funciona bien con **gramáticas simples** y cuando la eficiencia no es crítica. Es fácil cambiar y extender la gramática, pero las complejas son difíciles de mantener (una clase por regla). Los terminales repetidos se pueden compartir con **Flyweight**.

### Strategy vs. State y otros pares

| Par | En qué se parecen | En qué se diferencian |
|---|---|---|
| Strategy vs. State | Un contexto delega en un objeto intercambiable | Strategy: el **cliente elige** el algoritmo. State: el **objeto cambia solo** según su estado, y los estados conocen sus transiciones |
| Strategy vs. Template Method | Los dos varían partes de un algoritmo | Strategy varía el algoritmo **entero** por **composición** (en ejecución). Template Method varía **pasos** por **herencia** (al compilar) |
| Observer vs. Mediator | Desacoplan objetos que se comunican | Observer: **uno a muchos**, el sujeto no conoce a los observadores. Mediator: **centraliza** las interacciones de muchos a muchos |
| Command vs. Memento | Los dos sirven para deshacer | Command encapsula la **acción**; Memento, el **estado** anterior |
| Visitor vs. Iterator | Los dos trabajan sobre una estructura | Iterator **recorre**; Visitor define **qué se hace** en cada elemento |

*(Tabla del tutor, armada a partir de las intenciones y consecuencias de la fuente.)*

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Fundamentos de patrones de diseño](fundamentos-de-patrones-de-diseno.md): clasificación y el caso Lexi (Strategy, Command, Iterator, Visitor).
- [Patrones creacionales](patrones-creacionales.md) · [estructurales](patrones-estructurales.md).
- [Patrones GRASP](patrones-grasp.md#Polimorfismo): Polimorfismo GRASP es la misma idea que Strategy y State (reemplazar el `switch` por tipo).
