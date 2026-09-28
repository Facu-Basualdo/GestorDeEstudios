# Patrones estructurales
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 4 · Peso provisorio 2/3 (entra en IE3) · Fuentes: doc 2 Gamma et al., *Design
> Patterns*, cap. 4 (pp. 71 y 133–306), y doc 16 *patrones de diseño* (filminas, p. 9), vía
> el export de Faro. Ningún cuestionario semanal preguntó todavía por estos patrones: las preguntas son del tutor.

## Preguntas de recuperación

- ¿De qué se ocupan los patrones estructurales? :: De cómo se **componen clases y objetos para formar estructuras más grandes**. Los de clase usan herencia; los de objeto, composición, que puede cambiar en ejecución. [→ Qué resuelven](#Qué%20resuelven)
- ¿Cuáles son los siete estructurales de GoF? :: Adapter, Bridge, Composite, Decorator, Facade, Flyweight y Proxy. [→ Qué resuelven](#Qué%20resuelven)
- Intención de Adapter :: Convertir la interfaz de una clase en **otra que el cliente espera**, para que clases con interfaces incompatibles trabajen juntas. Ej.: `TextShape` adapta `TextView` a `Shape`. [→ Adapter](#Adapter)
- Adapter de clase vs. de objeto :: De clase: herencia múltiple, adapta un solo adaptado concreto y puede redefinir su comportamiento. De objeto: composición, un adaptador sirve para el adaptado y todas sus subclases. [→ Adapter](#Adapter)
- Intención de Bridge :: **Desacoplar una abstracción de su implementación** para que las dos varíen independientemente. Ej.: `Window` (abstracción) delega en `WindowImp` (`XWindowImp`, `PMWindowImp`). [→ Bridge](#Bridge)
- ¿Qué problema evita Bridge? :: La **explosión de subclases** (una por cada combinación de tipo de ventana y plataforma) y que el cliente dependa de la plataforma. [→ Bridge](#Bridge)
- Intención de Composite :: Componer objetos en **árboles** para representar jerarquías parte–todo y que el cliente trate igual a los objetos individuales y a las composiciones. [→ Composite](#Composite)
- Transparencia vs. seguridad en Composite :: Declarar `Add`/`Remove` en `Component` da transparencia (todo se trata igual) pero es inseguro (se le puede agregar hijos a una hoja). Declararlos sólo en `Composite` es seguro pero menos transparente. GoF prioriza la transparencia. [→ Composite](#Composite)
- Intención de Decorator :: Agregar **responsabilidades a un objeto dinámicamente** envolviéndolo en decoradores con su misma interfaz. Alternativa flexible a la herencia. Ej.: `new BorderDecorator(new ScrollDecorator(textView))`. [→ Decorator](#Decorator)
- Desventajas de Decorator :: El objeto decorado **no es idéntico** al componente (identidad) y quedan **muchos objetos chicos**, difíciles de entender y depurar. [→ Decorator](#Decorator)
- Intención de Facade :: Dar una **interfaz unificada y de más alto nivel** a un subsistema complejo. Ej.: `Compiler` frente a `Scanner`, `Parser`, `ProgramNode`… [→ Facade](#Facade)
- Intención de Flyweight :: **Compartir** muchísimos objetos chicos para ahorrar memoria, separando el estado **intrínseco** (compartido, dentro del objeto) del **extrínseco** (lo pasa el cliente). Ej.: un objeto `Character` por letra. [→ Flyweight](#Flyweight)
- Intención de Proxy y sus 4 tipos :: Dar un **sustituto** de otro objeto para **controlar el acceso**. Remoto (objeto en otro espacio de direcciones), virtual (crea lo costoso a demanda), de protección (permisos), referencia inteligente (acciones extra al acceder). [→ Proxy](#Proxy)
- Adapter vs. Decorator vs. Proxy :: Adapter **cambia** la interfaz; Decorator **mantiene** la interfaz y **agrega** responsabilidades; Proxy **mantiene** la interfaz y **controla el acceso**. [→ Cómo no confundirlos](#Cómo%20no%20confundirlos)

## Cuestionario

1. Un editor de dibujo necesita un `TextShape` y ya existe `TextView` en un toolkit, pero con otra interfaz. ¿Qué patrón conviene?
   - [x] Adapter
   - [ ] Bridge
   - [ ] Decorator
   - [ ] Facade
   > Se reutiliza una clase existente cuya interfaz no coincide: `TextShape` adapta `TextView` a `Shape`. [→ Adapter](#Adapter)
2. ¿Qué ventaja tiene el adaptador **de objeto** sobre el **de clase**?
   - [x] Un solo adaptador funciona con el adaptado y todas sus subclases
   - [ ] Permite redefinir comportamiento del adaptado sin subclasificarlo
   - [ ] No agrega ningún objeto ni indirección
   - [ ] Usa herencia múltiple
   > Las otras tres son características del adaptador **de clase**. [→ Adapter](#Adapter)
3. Hay que soportar tipos de ventana (`IconWindow`, `TransientWindow`) en dos plataformas (X y PM), sin una subclase por combinación. ¿Qué patrón es?
   - [x] Bridge
   - [ ] Adapter
   - [ ] Abstract Factory
   - [ ] Composite
   > Separa la jerarquía de abstracciones (`Window`) de la de implementaciones (`WindowImp`); las dos crecen por separado. Abstract Factory se usa a veces para **crear** el implementador correcto. [→ Bridge](#Bridge)
4. En un editor, el usuario agrupa líneas y textos en dibujos, que a su vez agrupa en otros dibujos, y quiere moverlos todos igual. ¿Qué patrón es?
   - [x] Composite
   - [ ] Decorator
   - [ ] Flyweight
   - [ ] Facade
   > Jerarquía parte–todo tratada uniformemente: `Graphic` (componente), `Line` y `Text` (hojas), `Picture` (compuesto). [→ Composite](#Composite)
5. Hay que agregar borde y barra de desplazamiento a una vista de texto, combinables y en tiempo de ejecución. ¿Qué patrón conviene?
   - [x] Decorator
   - [ ] Adapter
   - [ ] Proxy
   - [ ] Bridge
   > Se anidan decoradores: `BorderDecorator(ScrollDecorator(textView))`. Con herencia habría una subclase por combinación. [→ Decorator](#Decorator)
6. ¿Qué desventaja tiene Decorator?
   - [x] El componente decorado no es idéntico al original y el sistema se llena de objetos chicos
   - [ ] Las responsabilidades sólo se pueden agregar al compilar
   - [ ] Obliga a cargar la clase raíz con todas las funcionalidades
   - [ ] Cambia la interfaz del componente
   > Las otras opciones son justamente lo que Decorator evita. [→ Decorator](#Decorator)
7. La mayoría de los clientes de un subsistema de compilación sólo quiere "compilar", sin usar `Scanner`, `Parser` ni `ProgramNode`. ¿Qué patrón conviene?
   - [x] Facade
   - [ ] Proxy
   - [ ] Mediator
   - [ ] Adapter
   > `Compiler` da una interfaz simple. Igual no impide usar las clases del subsistema si alguien las necesita. [→ Facade](#Facade)
8. En Flyweight, ¿dónde está el estado **extrínseco**?
   - [x] Lo guarda o calcula el cliente y se lo pasa al flyweight en cada operación
   - [ ] Dentro del flyweight concreto, compartido por todos
   - [ ] En la fábrica de flyweights
   - [ ] En una variable global
   > El intrínseco (el código del carácter) va adentro y se comparte; el extrínseco (posición, fuente) depende del contexto. [→ Flyweight](#Flyweight)
9. Abrir un documento con imágenes grandes tiene que ser rápido, así que cada imagen se carga recién cuando se dibuja. ¿Qué es?
   - [x] Un proxy virtual
   - [ ] Un proxy remoto
   - [ ] Un proxy de protección
   - [ ] Un decorador
   > `ImageProxy` guarda el nombre de archivo y el tamaño, y crea la `Image` real en el primer `Draw()`. [→ Proxy](#Proxy)
10. ¿Cuál de estos patrones **cambia** la interfaz del objeto que envuelve?
    - [x] Adapter
    - [ ] Decorator
    - [ ] Proxy
    - [ ] Composite
    > Decorator y Proxy mantienen la misma interfaz que el objeto envuelto. [→ Cómo no confundirlos](#Cómo%20no%20confundirlos)

## Contenido

### Qué resuelven

- Se ocupan de **cómo se componen clases y objetos para formar estructuras más grandes** (doc 2, p. 71). Según las filminas, permiten crear jerarquías más grandes por **herencia, agregación o composición** (doc 16, p. 9).
- **De clase**: usan herencia para componer interfaces o implementaciones (el Adapter de clase).
- **De objeto**: componen objetos para lograr funcionalidad nueva, y la composición **puede cambiar en ejecución**.

| Patrón | Intención en una línea |
|---|---|
| Adapter | Convertir una interfaz en la que el cliente espera |
| Bridge | Separar abstracción e implementación para que varíen por separado |
| Composite | Árboles parte–todo tratados de forma uniforme |
| Decorator | Agregar responsabilidades dinámicamente, envolviendo |
| Facade | Interfaz simple y unificada para un subsistema |
| Flyweight | Compartir muchos objetos chicos para ahorrar memoria |
| Proxy | Sustituto que controla el acceso a otro objeto |

### Adapter

- **Intención**: convertir la interfaz de una clase en **otra que los clientes esperan**, para que clases con interfaces incompatibles trabajen juntas. También conocido como *Wrapper* (doc 2, pp. 139 y ss.).
- **Motivación**: un editor de dibujo con la jerarquía `Shape` necesita `TextShape`. `TextView` (de un toolkit) ya hace eso, pero con otra interfaz. `TextShape` adapta: `BoundingBox()` de `Shape` se resuelve con `GetOrigin()` y `GetExtent()` de `TextView`, y agrega lo que falta (`CreateManipulator()`).
- **Aplicabilidad**: usar una clase existente con interfaz distinta · crear una clase reutilizable que coopere con clases imprevistas · (sólo de objeto) adaptar varias subclases existentes sin subclasificar cada una.
- **Participantes**: `Target` (`Shape`) · `Client` (`DrawingEditor`) · `Adaptee` (`TextView`) · `Adapter` (`TextShape`).

| | Adapter de clase | Adapter de objeto |
|---|---|---|
| Mecanismo | Herencia múltiple: pública de `Target`, privada de `Adaptee` | Composición: guarda una referencia al `Adaptee` y delega |
| Qué adapta | Un `Adaptee` concreto, no sus subclases | El `Adaptee` y **todas sus subclases** |
| Redefinir comportamiento del adaptado | Fácil, porque hereda de él | Difícil: hay que subclasificar el adaptado |
| Objetos | Uno solo, sin indirección | Uno más, con indirección |

- **Por eso Adapter es el único patrón en las dos filas de ámbito** (clase y objeto).
- Variantes: **adaptadores conectables** (*pluggable*): la clase ya trae incorporada la adaptación a una **interfaz estrecha** (pocas operaciones), con operaciones abstractas, delegados o bloques · **adaptadores bidireccionales**: cumplen las dos interfaces, para que dos clientes vean el mismo objeto de forma distinta.

### Bridge

- **Intención**: **desacoplar una abstracción de su implementación** para que ambas puedan variar independientemente (doc 2, pp. 151 y ss.).
- **Motivación**: una `Window` portable para X Window y Presentation Manager. Con herencia, cada tipo de ventana (`IconWindow`, `TransientWindow`) necesita una subclase por plataforma: **proliferación de clases** y clientes atados a la plataforma. Bridge separa dos jerarquías: `Window` (abstracciones) y `WindowImp` (implementaciones: `XWindowImp`, `PMWindowImp`). `Window.DrawRect()` delega en `imp.DeviceRect()`.
- **Aplicabilidad**: evitar un enlace permanente abstracción–implementación (elegirla o cambiarla en ejecución) · que ambas se extiendan por subclases · que cambiar la implementación no afecte (ni recompile) a los clientes · evitar la proliferación de clases · compartir una implementación entre varios objetos.
- **Participantes**: `Abstraction` (`Window`, guarda la referencia al implementador) · `RefinedAbstraction` (`IconWindow`) · `Implementor` (`WindowImp`, operaciones primitivas) · `ConcreteImplementor` (`XWindowImp`, `PMWindowImp`).
- **Consecuencias**: desacopla interfaz e implementación (se configura en ejecución, sin dependencias de compilación, favorece las capas) · **mejora la extensibilidad** de las dos jerarquías por separado · oculta detalles de implementación.
- El implementador correcto lo puede elegir la abstracción según parámetros o una **Abstract Factory** (en Lexi, `WindowSystemFactory`).

### Composite

- **Intención**: componer objetos en **estructuras de árbol** para representar jerarquías **parte–todo**, y que los clientes traten **uniformemente** a los objetos individuales y a las composiciones (doc 2, pp. 163 y ss.).
- **Motivación**: en un editor gráfico, el usuario agrupa primitivas (`Line`, `Text`) en dibujos y los dibujos en otros dibujos. Sin Composite, el código tendría que distinguir primitivas de contenedores aunque el usuario no lo haga.
- **Participantes**: `Component` (`Graphic`: interfaz común, comportamiento por defecto, gestión de hijos) · `Leaf` (`Rectangle`, `Line`, `Text`: sin hijos) · `Composite` (`Picture`: guarda hijos y les reenvía los pedidos) · `Client`.
- **Consecuencias**: donde se espera un primitivo puede ir un compuesto · **simplifica el cliente** · es **fácil agregar componentes nuevos** · puede volver el diseño **demasiado general**: cuesta restringir qué puede contener un compuesto (hay que controlarlo en ejecución).
- **Transparencia vs. seguridad**: si `Add`/`Remove` se declaran en `Component`, todo se trata igual pero se le pueden agregar hijos a una hoja (inseguro). Si se declaran sólo en `Composite`, es seguro pero las hojas y los compuestos tienen interfaces distintas. **GoF prioriza la transparencia** (con `Add` y `Remove` que fallan por defecto).
- Otras decisiones: referencia explícita al padre (facilita recorrer hacia arriba y Chain of Responsibility) · orden de los hijos (Iterator) · caché de datos de los hijos · en lenguajes sin recolector, el compuesto borra a sus hijos.

### Decorator

- **Intención**: **agregar responsabilidades a un objeto dinámicamente**. Es una alternativa flexible a la subclasificación. También conocido como *Wrapper* (doc 2, pp. 175 y ss.).
- **Participantes**: `Component` (`VisualComponent`) · `ConcreteComponent` (`TextView`) · `Decorator` (referencia a un `Component` con su **misma interfaz**) · `ConcreteDecorator` (`BorderDecorator`, `ScrollDecorator`).
- **Colaboración**: el decorador reenvía el pedido al componente y puede hacer trabajo propio **antes o después**. Se anidan: `new BorderDecorator(new ScrollDecorator(textView), 1)`.
- **Beneficios**: más flexible que la herencia (se agrega y quita en ejecución) · evita clases cargadas de funciones arriba de la jerarquía: se empieza simple y se suma de a poco.
- **Desventajas**: el decorador y su componente **no son idénticos** (identidad de objetos) · **muchos objetos chicos** que sólo difieren en cómo se conectan: difícil de aprender y depurar.
- Implementación: la clase `Component` tiene que ser liviana (sólo interfaz, sin datos). Decorator **cambia la piel**; si hay que cambiar **las entrañas** (el `Component` es pesado), conviene **Strategy**.
- En Lexi resuelve el **embellecimiento de la interfaz** (`MonoGlyph`, `Border`, `Scroller`).

### Facade

- **Intención**: proveer una **interfaz unificada** para un conjunto de interfaces de un subsistema; define una interfaz de **más alto nivel** que lo hace más fácil de usar (doc 2, pp. 185 y ss.).
- **Motivación**: un entorno de programación con un subsistema de compilación (`Scanner`, `Parser`, `ProgramNode`, `BytecodeStream`, `ProgramNodeBuilder`). La mayoría de los clientes sólo quiere compilar: `Compiler` es la fachada.
- **Aplicabilidad**: dar una interfaz simple a un subsistema complejo · hay muchas dependencias entre clientes y clases de implementación · **organizar subsistemas en capas** (una fachada por capa).
- **Participantes**: `Facade` (sabe qué clase del subsistema atiende cada pedido y delega) · clases del subsistema (hacen el trabajo y **no conocen a la fachada**).
- **Consecuencias**: reduce la cantidad de objetos con que trata el cliente · **acoplamiento débil** entre subsistema y clientes (y elimina dependencias circulares) · **no impide** usar las clases del subsistema si hace falta.

### Flyweight

- **Intención**: usar **objetos compartidos** para soportar eficientemente **grandes cantidades de objetos de grano fino** (doc 2, pp. 195 y ss.).
- **Estado intrínseco**: independiente del contexto, guardado en el flyweight y compartido (el código de un carácter). **Estado extrínseco**: depende del contexto; lo guarda o calcula el cliente y se lo pasa en cada operación (la posición, la fuente).
- **Participantes**: `Flyweight` (interfaz que recibe el estado extrínseco) · `ConcreteFlyweight` (guarda el intrínseco, compartible) · `UnsharedConcreteFlyweight` (no todo se comparte, como las filas y columnas) · `FlyweightFactory` (crea y **comparte**: devuelve el existente o crea uno nuevo) · `Client`. Los clientes nunca instancian flyweights directamente.
- **Consecuencias**: costo en tiempo por pasar o calcular el estado extrínseco, compensado por el ahorro de memoria, que crece con la cantidad de objetos compartidos. Se combina con **Composite** (hojas compartidas, que por eso no pueden guardar un puntero al padre).
- Ejemplo: en un editor, un `Character` por letra del alfabeto; la fuente va en un `GlyphContext` externo.

### Proxy

- **Intención**: proveer un **sustituto** o representante de otro objeto para **controlar el acceso** a él. También conocido como *Surrogate* (doc 2, pp. 207 y ss.).
- **Motivación**: abrir un documento con imágenes grandes tiene que ser rápido. `ImageProxy` guarda el nombre del archivo y el tamaño (responde `GetExtent()` sin cargar nada) y crea la `Image` real recién en el primer `Draw()`.
- **Tipos**:
  1. **Remoto**: representante local de un objeto en **otro espacio de direcciones**.
  2. **Virtual**: crea objetos costosos **a demanda**.
  3. **De protección**: controla el acceso según **permisos**.
  4. **Referencia inteligente**: hace algo extra al acceder (contar referencias, cargar un objeto persistente, verificar bloqueos).
- **Participantes**: `Proxy` (`ImageProxy`: misma interfaz que el sujeto, referencia al real, puede crearlo y borrarlo) · `Subject` (`Graphic`: interfaz común) · `RealSubject` (`Image`).
- **Consecuencias**: agrega un **nivel de indirección** que oculta la ubicación remota, permite optimizaciones (creación a demanda) y tareas de mantenimiento. **Copy-on-write**: postergar la copia de un objeto pesado hasta que alguien lo modifica.

### Cómo no confundirlos

| Patrón | ¿Misma interfaz que el envuelto? | Para qué |
|---|---|---|
| Adapter | **No**: la cambia | Hacer compatible una clase existente |
| Decorator | Sí | **Agregar** responsabilidades, anidables |
| Proxy | Sí | **Controlar el acceso** (remoto, a demanda, permisos) |
| Facade | No: una interfaz **nueva y más simple** para muchos objetos | Simplificar un subsistema |
| Bridge | — | Se diseña **de antemano** para que abstracción e implementación varíen; Adapter se aplica **después**, para compatibilizar lo que ya existe |

*(Tabla del tutor, armada a partir de las intenciones de la fuente.)*

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Fundamentos de patrones de diseño](fundamentos-de-patrones-de-diseno.md): clasificación y el caso Lexi (Composite, Decorator, Bridge).
- [Patrones creacionales](patrones-creacionales.md) · [de comportamiento](patrones-de-comportamiento.md).
- [Patrones GRASP](patrones-grasp.md#Indirección): Indirección es la idea general detrás de Adapter, Facade y Proxy.
