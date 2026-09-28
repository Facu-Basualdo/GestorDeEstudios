# Patrones creacionales
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 4 · Peso provisorio 2/3 (entra en IE3) · Fuentes: doc 2 Gamma et al., *Design
> Patterns*, cap. 3 (pp. 71–313), y doc 16 *patrones de diseño* (filminas, p. 9), vía el
> export de Faro. Ningún cuestionario semanal preguntó todavía por estos patrones: las preguntas son del tutor.

## Preguntas de recuperación

- ¿Qué hacen los patrones creacionales? :: Abstraen la instanciación: el sistema queda independiente de cómo se crean, componen y representan sus objetos. Encapsulan qué clases concretas se usan y ocultan cómo se crean. [→ Qué resuelven](#Qué%20resuelven)
- ¿Cuáles son los cinco patrones creacionales de GoF? :: Abstract Factory, Builder, Factory Method, Prototype y Singleton. [→ Qué resuelven](#Qué%20resuelven)
- ¿Cuál es el creacional de ámbito clase y en qué se diferencia de los de objeto? :: **Factory Method**: usa herencia y deja que una subclase decida qué instanciar. Los de objeto **delegan** la creación en otro objeto. [→ Qué resuelven](#Qué%20resuelven)
- Intención de Abstract Factory :: Dar una interfaz para crear **familias de objetos relacionados** o dependientes sin especificar sus clases concretas. Ej.: `WidgetFactory` con `MotifWidgetFactory` y `PMWidgetFactory`. [→ Abstract Factory](#Abstract%20Factory)
- ¿Cuál es la desventaja de Abstract Factory? :: Cuesta agregar un **tipo nuevo de producto**: la interfaz fija qué productos se crean, y hay que cambiarla junto con todas las fábricas concretas. [→ Abstract Factory](#Abstract%20Factory)
- Intención de Builder :: Separar la **construcción** de un objeto complejo de su **representación**, para que el mismo proceso cree representaciones distintas. Ej.: `RTFReader` (director) con `ASCIIConverter` o `TeXConverter` (builders). [→ Builder](#Builder)
- Intención de Factory Method :: Definir una interfaz para crear un objeto, pero dejar que **las subclases decidan qué clase instanciar**. Ej.: `Application.CreateDocument()` redefinido en `MyApplication`. [→ Factory Method](#Factory%20Method)
- Intención de Prototype :: Crear objetos **clonando una instancia prototípica**. Ej.: `GraphicTool` clona notas y pentagramas en un editor de partituras, sin una subclase por cada tipo. [→ Prototype](#Prototype)
- ¿Cuál es la desventaja de Prototype? :: Cada subclase tiene que implementar `Clone`, que es difícil si ya existe, tiene objetos que no se copian o referencias circulares. [→ Prototype](#Prototype)
- Intención de Singleton :: Garantizar que una clase tenga **una sola instancia** y dar un punto de acceso global a ella. [→ Singleton](#Singleton)
- ¿Cómo se implementa Singleton? :: Constructor protegido + operación de clase `Instance()` que crea el objeto la primera vez (inicialización perezosa) y lo guarda en un atributo estático. [→ Singleton](#Singleton)
- ¿Qué creacionales suelen implementarse como Singleton? :: Abstract Factory (una fábrica concreta por familia), Builder y Prototype. [→ Singleton](#Singleton)

## Cuestionario

1. Una aplicación debe poder cambiar de apariencia (Motif o Presentation Manager) y los widgets de una apariencia no se deben mezclar con los de otra. ¿Qué patrón conviene?
   - [x] Abstract Factory
   - [ ] Factory Method
   - [ ] Builder
   - [ ] Singleton
   > Crea **familias** de productos relacionados y fuerza la consistencia: usando `MotifWidgetFactory`, todos los widgets son Motif. [→ Abstract Factory](#Abstract%20Factory)
2. ¿Cuál es una consecuencia **negativa** de Abstract Factory?
   - [x] Es difícil agregar un nuevo tipo de producto
   - [ ] Es difícil cambiar de familia de productos
   - [ ] Los clientes quedan acoplados a las clases concretas
   - [ ] No se puede imponer que los productos sean de una sola familia
   > Cambiar de familia es fácil (se cambia una fábrica) y el cliente no conoce las clases concretas. Lo difícil es sumar un producto nuevo, porque hay que tocar la interfaz y todas las fábricas. [→ Abstract Factory](#Abstract%20Factory)
3. Un lector de RTF tiene que poder convertir el texto a ASCII, a TeX o a un widget, reutilizando el mismo algoritmo de lectura. ¿Qué patrón es?
   - [x] Builder
   - [ ] Prototype
   - [ ] Abstract Factory
   - [ ] Adapter
   > `RTFReader` es el director y cada `TextConverter` concreto es un builder: mismo proceso, distintas representaciones. [→ Builder](#Builder)
4. ¿Cuál es el único patrón creacional de ámbito **clase**?
   - [x] Factory Method
   - [ ] Abstract Factory
   - [ ] Prototype
   - [ ] Singleton
   > Difiere la creación a una subclase con herencia. Los otros la delegan en otro objeto. [→ Qué resuelven](#Qué%20resuelven)
5. En Factory Method, ¿quién decide qué clase concreta se instancia?
   - [x] La subclase del creador, al redefinir el método de fábrica
   - [ ] El cliente, pasando la clase por parámetro al constructor
   - [ ] Una fábrica global única
   - [ ] El producto, clonándose a sí mismo
   > `MyApplication` redefine `CreateDocument()` para devolver un `MyDocument`. La desventaja: a veces hay que subclasificar al creador sólo para crear un producto. [→ Factory Method](#Factory%20Method)
6. Un editor de partituras necesita herramientas para crear muchos tipos de notas sin una subclase de herramienta por cada tipo. ¿Qué patrón conviene?
   - [x] Prototype
   - [ ] Factory Method
   - [ ] Singleton
   - [ ] Builder
   > Cada `GraphicTool` se configura con un prototipo distinto y lo clona. Evita la jerarquía paralela de creadores que exigiría Factory Method. [→ Prototype](#Prototype)
7. ¿Por qué Singleton es mejor que usar una variable global?
   - [x] Garantiza una única instancia, no ensucia el espacio de nombres y permite subclasificar
   - [ ] Porque es más rápido en tiempo de ejecución
   - [ ] Porque permite crear tantas instancias como se necesiten sin control
   - [ ] Porque no requiere ninguna operación de clase
   > Además es más flexible que las operaciones estáticas y se puede cambiar a un número variable de instancias. [→ Singleton](#Singleton)
8. Los patrones creacionales a veces compiten entre sí. ¿Qué par da el libro como ejemplo de competidores?
   - [x] Prototype y Abstract Factory
   - [ ] Builder y Singleton
   - [ ] Factory Method y Singleton
   - [ ] Builder y Composite
   > Ambos resuelven la creación de productos sin nombrar clases concretas. Builder, en cambio, puede complementarse con otros creacionales. [→ Qué resuelven](#Qué%20resuelven)

## Contenido

### Qué resuelven

- **Abstraen el proceso de instanciación**: el sistema queda independiente de cómo se crean, componen y representan sus objetos (doc 2, p. 71).
- Dos temas recurrentes: **encapsulan el conocimiento sobre qué clases concretas** usa el sistema y **ocultan cómo se crean y ensamblan** las instancias.
- Ganan importancia cuando el sistema depende más de la composición que de la herencia.
- Las filminas (doc 16, p. 9): "la instanciación no es tan trivial"; la categoría ayuda a elegir el patrón que corresponde al contexto.
- **De clase** (Factory Method): herencia, una subclase decide la clase a instanciar. **De objeto** (los otros cuatro): delegan la instanciación en otro objeto.
- A veces **compiten** (Prototype y Abstract Factory) y a veces se **complementan** (Builder puede usar otros creacionales; Abstract Factory se implementa con Factory Method o Prototype).

| Patrón | Intención en una línea | Qué permite variar |
|---|---|---|
| Abstract Factory | Crear familias de objetos relacionados sin nombrar clases concretas | La familia de productos |
| Builder | Separar la construcción de un objeto complejo de su representación | Cómo se arma un objeto compuesto |
| Factory Method | Dejar que las subclases decidan qué clase instanciar | La subclase que se instancia |
| Prototype | Crear objetos clonando un prototipo | La clase que se instancia (en ejecución) |
| Singleton | Una sola instancia con acceso global | La única instancia |

### Abstract Factory

- **Intención**: proveer una interfaz para crear **familias de objetos relacionados o dependientes** sin especificar sus clases concretas. También conocido como **Kit** (doc 2, pp. 87 y ss.).
- **Motivación**: un toolkit de UI con varias apariencias (Motif, Presentation Manager). `WidgetFactory` declara `CreateScrollBar()`, `CreateWindow()`… y cada apariencia tiene su fábrica concreta. El cliente sólo usa las interfaces y no sabe qué clases concretas recibe.
- **Aplicabilidad**: el sistema debe ser independiente de cómo se crean sus productos · se configura con una de varias familias · los productos de una familia se usan juntos y hay que imponerlo · se quiere publicar una biblioteca de productos mostrando sólo interfaces.
- **Participantes**: `AbstractFactory` (`WidgetFactory`) · `ConcreteFactory` (`MotifWidgetFactory`, `PMWidgetFactory`) · `AbstractProduct` (`Window`, `ScrollBar`) · `ConcreteProduct` (`MotifWindow`, `MotifScrollBar`) · `Client`.
- **Consecuencias**:
  1. **Aísla las clases concretas**: sus nombres sólo aparecen en la fábrica concreta.
  2. **Facilita cambiar de familia**: la fábrica concreta aparece una sola vez; cambiarla cambia todo.
  3. **Promueve la consistencia** entre productos.
  4. **Dificulta agregar tipos nuevos de productos**: la interfaz fija el conjunto; extenderla obliga a cambiar la fábrica abstracta y todas sus subclases.
- **Implementación**: normalmente hay una sola fábrica concreta por familia → **Singleton**. Cada producto se crea con un **Factory Method**; si hay muchas familias, con **Prototype**. Una variante más flexible (y menos segura) recibe el tipo de producto por parámetro.
- En Lexi resuelve el soporte de **múltiples estándares de apariencia** (ver [fundamentos](fundamentos-de-patrones-de-diseno.md#Caso%20de%20estudio:%20el%20editor%20Lexi)).

### Builder

- **Intención**: separar la **construcción** de un objeto complejo de su **representación**, para que el mismo proceso de construcción cree representaciones diferentes (doc 2, pp. 97 y ss.).
- **Ejemplo**: `RTFReader` interpreta el formato RTF y, por cada elemento, le pide al builder que agregue una parte. `ASCIIConverter`, `TeXConverter` y `TextWidgetConverter` producen `ASCIIText`, `TeXText` y `TextWidget`.
- **Participantes**: `Builder` (`TextConverter`, interfaz para crear partes) · `ConcreteBuilder` (arma las partes y da el producto) · `Director` (`RTFReader`, usa la interfaz del builder) · `Product`.
- **Colaboración**: el cliente crea el director con el builder elegido → el director avisa qué parte construir → el builder agrega la parte → el cliente le pide el producto **al builder**.
- **Consecuencias**: 1) permite variar la representación interna del producto; 2) aísla el código de construcción del de representación (modularidad); 3) da **control fino, paso a paso**, del proceso.
- Implementación: builder abstracto con operaciones vacías por defecto; los productos casi nunca comparten clase abstracta porque difieren mucho. En el código de ejemplo, `StandardMazeBuilder` arma un laberinto y `CountingMazeBuilder` sólo cuenta sus partes.

### Factory Method

- **Intención**: definir una interfaz para crear un objeto, pero **dejar que las subclases decidan qué clase instanciar** (doc 2, pp. 107 y ss.).
- **Participantes**: `Product` (`Document`) · `ConcreteProduct` (`MyDocument`) · `Creator` (`Application`, declara el método de fábrica y puede tener una implementación por defecto) · `ConcreteCreator` (`MyApplication`, lo redefine).
- **Consecuencias**:
  - El código trabaja sólo con la interfaz `Product`: no se atan clases de la aplicación.
  - **Desventaja**: a veces hay que subclasificar el `Creator` sólo para crear un producto concreto.
  - Da **ganchos** (*hooks*) a las subclases: más flexible que crear el objeto directamente.
  - **Conecta jerarquías de clases paralelas**, localizando el conocimiento de qué clases van juntas.
- **Implementación**: `Creator` abstracto (obliga a redefinir) o concreto (con implementación por defecto) · **métodos parametrizados** (un parámetro indica el tipo de producto) · en C++ no se llama desde el constructor; se usa inicialización perezosa · conviene un nombre que lo delate (`DoMakeClass()`).

### Prototype

- **Intención**: especificar los tipos de objetos a crear con una **instancia prototípica** y crear nuevos objetos **copiándola** (doc 2, pp. 117 y ss.).
- **Motivación**: un editor de partituras sobre un framework gráfico. `GraphicTool` no conoce las clases musicales; subclasificarlo por cada una sería una explosión de clases. Cada herramienta es un `GraphicTool` configurado con un prototipo (`WholeNote`, `HalfNote`, `Staff`) que clona.
- **Aplicabilidad**: independencia de cómo se crean los productos · las clases a instanciar se conocen **en ejecución** (carga dinámica) · evitar una jerarquía de fábricas paralela a la de productos · las instancias tienen pocas combinaciones de estado.
- **Participantes**: `Prototype` (declara `Clone`) · `ConcretePrototype` (lo implementa) · `Client` (le pide a un prototipo que se clone).
- **Consecuencias** (además de ocultar las clases concretas, como Abstract Factory y Builder): agregar y quitar productos **en ejecución** · nuevos objetos variando valores o estructura · **menos subclases** que Factory Method · configurar la aplicación con clases cargadas dinámicamente.
- **Desventaja**: cada subclase debe implementar `Clone` (difícil con clases existentes, objetos no copiables o referencias circulares; con estructuras, hace falta copia profunda).

### Singleton

- **Intención**: asegurar que una clase tenga **una sola instancia** y proveer un punto de acceso global a ella. La instancia es un objeto normal; lo que cambia es que la clase está escrita para que sólo se pueda crear uno (doc 2, pp. 127 y ss.).
- **Implementación**:
  - operación de clase `Instance()` con **inicialización perezosa**: crea el objeto la primera vez y lo guarda en un atributo estático `_instance`;
  - **constructor protegido** para impedir la instanciación directa;
  - evitar objetos globales o estáticos (problemas de orden de inicialización).
- La instancia única puede ser de una **subclase**: se elige en `Instance()` (por ejemplo, con una variable de entorno, como `MAZESTYLE` para `BombedMazeFactory` o `EnchantedMazeFactory`) o con un **registro de singletons**.
- **Beneficios**: acceso controlado · reduce el espacio de nombres (en lugar de variables globales) · permite refinar por subclases · permite pasar a un número variable de instancias · más flexible que las operaciones de clase.
- **Relacionados**: Abstract Factory, Builder y Prototype suelen implementarse como Singleton.

## Dónde me equivoco

_Sin errores registrados todavía._ Trampas típicas: confundir Abstract Factory (familias, objeto) con Factory Method (un producto, herencia), y Builder (paso a paso, mismo proceso) con Abstract Factory (productos completos de una familia).

## Ver también

- [Fundamentos de patrones de diseño](fundamentos-de-patrones-de-diseno.md): clasificación y el caso Lexi.
- [Patrones GRASP](patrones-grasp.md#Creador): Creador, y cuándo pasar a una Factory.
- [Principios de diseño OO](principios-de-diseno-orientado-a-objetos.md#Los%20dos%20principios%20de%20GoF): "programar para una interfaz" necesita creacionales.
