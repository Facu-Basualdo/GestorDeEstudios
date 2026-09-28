# Patrones GRASP y UML
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 3 · Peso provisorio 2/3 (entra en IE3; cuestionario semanal 9 completo) · Fuentes:
> doc 1 *SOLID y GRASP — Buenas prácticas* (pp. 24–41) y doc 33 Larman, cap. 17 *UML y
> patrones* (pp. 1–48), vía el export de Faro. Las preguntas *(cátedra)* salen del cuestionario semanal 9.

## Preguntas de recuperación

- ¿Qué es GRASP? :: Nueve principios o patrones básicos de diseño OO para **asignar responsabilidades** a los objetos, de forma metódica y explicable (Larman). [→ Qué es GRASP](#Qué%20es%20GRASP)
- ¿Cuáles son los nueve patrones GRASP? :: Experto en información, Creador, Controlador, Bajo acoplamiento, Alta cohesión, Polimorfismo, Fabricación pura, Indirección y Variaciones protegidas. [→ Qué es GRASP](#Qué%20es%20GRASP)
- ¿Qué dice Experto en información? :: La responsabilidad va a la clase que tiene la información necesaria para cumplirla. Ej.: `Informe` calcula el total, no `InformePresenter`. [→ Experto en información](#Experto%20en%20información)
- ¿Cuándo Experto da una mala solución? :: Cuando empeora cohesión y acoplamiento: `Sale` tiene los datos para guardarse en la base, pero la persistencia va en un subsistema aparte. [→ Experto en información](#Experto%20en%20información)
- ¿Cuándo una clase B debe crear instancias de A (Creador)? :: Si B contiene o agrega a A, la almacena o registra, tiene los datos para inicializarla (es experta) o la usa directamente. Se prefiere la que contiene o agrega. [→ Creador](#Creador)
- ¿Qué es el Controlador GRASP? :: El primer objeto después de la capa de UI que recibe una operación de sistema. Coordina y **delega**; no hace el trabajo. Está en la capa de aplicación o dominio, no en la de presentación. [→ Controlador](#Controlador)
- Controlador de fachada vs. controlador de caso de uso :: Fachada: una clase que representa todo el sistema o dispositivo (`Register`), para pocos eventos. Caso de uso: `<CasoDeUso>Handler`, uno por caso de uso, cuando la fachada se infla. [→ Controlador](#Controlador)
- ¿Qué es un controlador inflado y cómo se cura? :: Uno solo recibe todos los eventos, hace el trabajo sin delegar y acumula atributos. Se cura agregando controladores (por caso de uso) y delegando. [→ Controlador](#Controlador)
- ¿Qué es el acoplamiento y qué problemas trae si es alto? :: Cuánto depende un elemento de otros. Si es alto: cambios forzados por clases relacionadas, difícil de entender aislado y de reutilizar. [→ Bajo acoplamiento y alta cohesión](#Bajo%20acoplamiento%20y%20alta%20cohesión)
- ¿Qué es la cohesión? :: Cuán relacionadas y enfocadas están las responsabilidades de un elemento. Alta cohesión: pocos métodos, muy relacionados, y colabora con otros si la tarea es grande. [→ Bajo acoplamiento y alta cohesión](#Bajo%20acoplamiento%20y%20alta%20cohesión)
- ¿Cuál es el tipo de cohesión más débil y cuál el más fuerte? :: Coincidente (tareas sin relación) es la peor; funcional (una única tarea) es la mejor. [→ Bajo acoplamiento y alta cohesión](#Bajo%20acoplamiento%20y%20alta%20cohesión)
- ¿Qué recomienda Polimorfismo GRASP? :: Si el comportamiento depende del tipo, no usar `switch`: poner el mismo servicio en distintas clases, una por tipo. [→ Polimorfismo](#Polimorfismo)
- ¿Qué es una Fabricación pura? :: Una clase inventada, que no existe en el dominio, creada para bajar el acoplamiento, subir la cohesión o reutilizar. Base de MVC, MVP y MVVM. Abusar lleva a clases de un solo método. [→ Fabricación pura](#Fabricación%20pura)
- ¿Qué propone Indirección? :: Poner un objeto intermedio que medie entre dos clases, para que los cambios de una no afecten a la otra. Ej.: `ServicioLog` entre el presentador y Log4Net. [→ Indirección](#Indirección)
- ¿Qué es Variaciones protegidas y con qué se relaciona? :: Envolver lo que se prevé que cambie en una interfaz y usar polimorfismo para tener varias implementaciones. Se relaciona con Polimorfismo e Indirección. [→ Variaciones protegidas](#Variaciones%20protegidas)
- ¿Qué significa "elegí tus batallas"? :: Bajar el acoplamiento sólo en puntos realmente inestables; el acoplamiento a elementos estables (como `java.util`) no es problema. [→ Bajo acoplamiento y alta cohesión](#Bajo%20acoplamiento%20y%20alta%20cohesión)

## Cuestionario

1. ¿Cuál es la función principal del patrón Controlador? *(cátedra)*
   - [ ] Implementar directamente toda la lógica de negocio del caso de uso que representa
   - [ ] Almacenar de forma persistente los datos ingresados por el usuario en la base de datos
   - [ ] Generar automáticamente las pantallas de la interfaz de usuario del sistema
   - [x] Actuar como intermediario entre la interfaz de usuario y la lógica de negocio, recibiendo datos y enviándolos a las clases correspondientes
   > Controla o ejecuta un caso de uso, pero "no hace demasiado por sí solo, sólo coordina". [→ Controlador](#Controlador)
2. ¿Cuáles de las siguientes afirmaciones sobre el patrón Controlador son correctas? *(cátedra)*
   - [x] Es el primer objeto llamado después de un cambio en la interfaz de usuario
   - [ ] Debe concentrar toda la lógica de negocio para minimizar la cantidad de clases del sistema
   - [ ] Pertenece a la capa de presentación, ya que dibuja directamente los elementos visuales
   - [x] Se recomienda dividir los eventos del sistema en el mayor número de controladores posible para aumentar cohesión y disminuir acoplamiento
   > Está cerca de la UI pero pertenece a la capa de aplicación o servicios, no a la de presentación. [→ Controlador](#Controlador)
3. Según el patrón Creador, ¿qué condiciones justifican que una clase cree instancias de otra? *(cátedra)*
   - [x] Tiene la información necesaria para realizar la creación, es decir, es "experta"
   - [x] Usa directamente las instancias creadas del objeto
   - [x] Contiene o agrega la clase que va a crear
   - [ ] Comparte el mismo espacio de nombres que la clase a crear
   > Las condiciones son contener o agregar, almacenar, ser experta y usar directamente. El espacio de nombres no tiene nada que ver. [→ Creador](#Creador)
4. Si `Cliente` contiene y usa directamente los objetos `Pedido`, ¿qué indica el patrón Creador? *(cátedra)*
   - [ ] Que se debe crear una Fabricación pura para desacoplar la creación de Pedido de Cliente
   - [ ] Que Pedido debe crearse a sí mismo mediante un constructor estático
   - [ ] Que la creación debe delegarse a InformePresenter para mantener la separación de responsabilidades
   - [x] Que Cliente debería ser la clase responsable de crear instancias de Pedido
   > Cliente cumple las condiciones. La Fabricación pura no aplica si ya existe una clase natural del dominio que las cumple. [→ Creador](#Creador)
5. ¿Qué establece el principio Experto en información? *(cátedra)*
   - [ ] Que la responsabilidad debe asignarse siempre a la clase controladora del caso de uso
   - [ ] Que la responsabilidad debe asignarse a la clase que tenga menos métodos implementados
   - [ ] Que la responsabilidad debe asignarse a la clase que se instancia primero en el sistema
   - [x] Que la responsabilidad debe asignarse a la clase que posee la información necesaria para realizarla
   > El Controlador coordina, pero no necesariamente tiene la información. [→ Experto en información](#Experto%20en%20información)
6. Con las clases `Informe` e `InformePresenter`, ¿cuál debería calcular el total como suma de los parciales? *(cátedra)*
   - [x] Informe, porque posee los datos parciales necesarios
   - [ ] Cualquiera de las dos, ya que ambas tienen acceso indirecto a los datos
   - [ ] Una nueva clase de Fabricación pura creada para el cálculo
   - [ ] InformePresenter, porque su función es procesar y transformar los datos antes de mostrarlos
   > El Presenter sólo presenta; el cálculo es del experto. [→ Experto en información](#Experto%20en%20información)
7. ¿En qué consiste la Fabricación pura? *(cátedra)*
   - [ ] En reemplazar una clase existente por una interfaz que oculte su implementación
   - [ ] En agrupar varias clases del dominio en un único componente
   - [ ] En dividir una clase del dominio en dos subclases que hereden su comportamiento
   - [x] En crear una clase artificial que no representa una entidad del dominio, para reducir acoplamiento, aumentar cohesión y potenciar la reutilización
   > Ocultar detrás de una interfaz se parece a Variaciones protegidas, no a Fabricación pura. [→ Fabricación pura](#Fabricación%20pura)
8. ¿Cuáles de las siguientes afirmaciones sobre la Fabricación pura son correctas? *(cátedra)*
   - [x] Surge cuando una clase tiene poca cohesión y no existe otra clase natural del dominio donde ubicar ciertos métodos
   - [ ] Sólo puede aplicarse en sistemas que no utilicen arquitecturas como MVC o MVP
   - [x] Su abuso puede derivar en clases función, es decir, clases con un único método
   - [ ] Es la base teórica exclusiva del principio de Experto en información
   > Al revés: la Fabricación pura es la base de MVC, MVP y MVVM. [→ Fabricación pura](#Fabricación%20pura)
9. ¿Qué propone Indirección para reducir el acoplamiento entre dos clases? *(cátedra)*
   - [ ] Eliminar una de las dos clases y fusionar sus responsabilidades
   - [x] Asignar la responsabilidad de mediar entre ambas a una clase intermedia
   - [ ] Hacer que ambas hereden de una clase base común que centralice el comportamiento
   - [ ] Convertir ambas clases en estáticas para no instanciarlas
   > El mecanismo es la mediación, no la herencia. [→ Indirección](#Indirección)
10. ¿Cuáles de las siguientes afirmaciones describen correctamente a Indirección? *(cátedra)*
    - [ ] Fusiona las responsabilidades de ambas clases en una sola clase de dominio
    - [x] Asigna la responsabilidad de mediar entre dos clases a una clase intermedia para reducir el acoplamiento directo
    - [x] Protege a un objeto frente a cambios previsibles en otro objeto con el que se relaciona
    - [ ] Sólo puede aplicarse cuando ambas clases pertenecen a la capa de presentación
    > No está limitado a ninguna capa. [→ Indirección](#Indirección)
11. ¿Qué describe el polimorfismo en programación orientada a objetos? *(cátedra)*
    - [ ] Que una clase herede atributos y métodos de varias clases base a la vez
    - [ ] Que existan varios métodos con el mismo nombre en una clase con distintos parámetros
    - [ ] Que un mismo objeto cambie su tipo dinámicamente en tiempo de ejecución
    - [x] Que varias clases se comporten de manera distinta dependiendo del tipo que sean
    > Varios métodos con el mismo nombre y distintos parámetros es sobrecarga, no polimorfismo. [→ Polimorfismo](#Polimorfismo)
12. Un método usa un `switch` sobre un enum de tipos para decidir qué hacer. Según Polimorfismo, ¿qué se recomienda? *(cátedra)*
    - [ ] Dividir el método en varios controladores, uno por cada valor del enum
    - [x] Reemplazar el switch por servicios con el mismo nombre implementados en distintos objetos, uno por tipo
    - [ ] Mantener el switch pero documentarlo mejor
    - [ ] Convertir el enum en una clase estática con constantes
    > Es el ejemplo del `Log` con `TipoDeLog`: se reemplaza por `IMensajeDelLog` con `MensajeDebug` y `MensajeError`. [→ Polimorfismo](#Polimorfismo)
13. ¿En qué consiste Variaciones protegidas? *(cátedra)*
    - [ ] En centralizar todos los cambios previstos en una única clase controladora
    - [ ] En evitar cualquier modificación futura fijando el diseño desde el inicio
    - [ ] En duplicar el código de las clases que podrían cambiar
    - [x] En envolver lo que se prevé susceptible de cambio en una interfaz y usar polimorfismo para crear varias implementaciones
    > "El cambio debe ser bienvenido, pero no motivo de desesperación": no se evita, se aísla. [→ Variaciones protegidas](#Variaciones%20protegidas)
14. ¿Con qué conceptos está estrechamente relacionado Variaciones protegidas? *(cátedra)*
    - [x] Polimorfismo
    - [x] Indirección
    - [ ] Creador
    - [ ] Fabricación pura
    > La fuente lo vincula explícitamente con polimorfismo e indirección. [→ Variaciones protegidas](#Variaciones%20protegidas)
15. En NextGen POS hay que crear un `Payment` y asociarlo a la `Sale`. ¿Qué opción prefieren Bajo acoplamiento y Alta cohesión?
    - [x] Que `Sale` cree el `Payment`, porque ya está acoplada a él y `Register` no suma trabajo
    - [ ] Que `Register` cree el `Payment` y se lo pase a `Sale` con `addPayment`
    - [ ] Que `Payment` se cree a sí mismo con un método estático
    - [ ] Que la UI cree el `Payment` y se lo mande al controlador
    > Si `Register` lo crea, se acopla a `Payment` y se infla; `Sale` ya conoce a `Payment`. [→ Bajo acoplamiento y alta cohesión](#Bajo%20acoplamiento%20y%20alta%20cohesión)
16. Un único controlador recibe todos los eventos del sistema, hace el trabajo él mismo y tiene muchos atributos. ¿Qué se recomienda?
    - [x] Pasar a controladores por caso de uso y hacer que deleguen el trabajo
    - [ ] Moverlo a la capa de presentación
    - [ ] Convertirlo en Singleton
    - [ ] Fusionarlo con las clases de dominio
    > Es un controlador inflado (*bloated controller*): viola Experto y Alta cohesión. [→ Controlador](#Controlador)

## Contenido

### Qué es GRASP

- **GRASP** (Larman): nueve principios o patrones básicos de diseño OO que sirven de **ayuda para aprender a asignar responsabilidades** a los objetos de forma metódica, racional y explicable (doc 33, pp. 1–21).
- Se piensa en responsabilidades al codificar o al modelar. En UML, **dibujar diagramas de interacción** es el momento de decidir responsabilidades, y GRASP guía esas decisiones.
- ¿Patrones o principios? Larman cita a los GoF: "el patrón de una persona es el bloque de construcción primitivo de otra". Lo importante es que el nombre ayuda a recordar ideas clásicas de diseño.

| Patrón | Problema que resuelve |
|---|---|
| Experto en información | ¿A quién le doy una responsabilidad? Al que tiene la información |
| Creador | ¿Quién crea las instancias de A? |
| Controlador | ¿Qué objeto recibe primero una operación de sistema desde la UI? |
| Bajo acoplamiento | ¿Cómo reducir el impacto del cambio y reutilizar? |
| Alta cohesión | ¿Cómo mantener los objetos enfocados y manejables? |
| Polimorfismo | ¿Cómo manejar comportamiento que depende del tipo? |
| Fabricación pura | ¿Dónde pongo algo que no le corresponde a ninguna clase del dominio? |
| Indirección | ¿Cómo evito el acoplamiento directo entre dos elementos? |
| Variaciones protegidas | ¿Cómo evito que los cambios en un elemento impacten en otros? |

### Experto en información

- Asignar la responsabilidad a la clase que **tiene la información necesaria** para cumplirla (doc 1, pp. 33–34; doc 33).
- En el doc 1 lo presentan como el principio básico, "la S de SOLID": aplicado junto con SRP, la clase tiene un solo motivo de cambio.
- **Ejemplo (doc 1)**: `Informe` calcula el total (suma de parciales); `InformePresenter` sólo presenta.
- **Ejemplo (Larman, NextGen POS)**: la información está repartida y colaboran varios **expertos parciales**:
  - `Sale` conoce sus líneas → `getTotal()`.
  - `SalesLineItem` conoce cantidad y producto → `getSubtotal()`.
  - `ProductDescription` conoce el precio → `getPrice()`.
- Estrategia "*Do It Myself*" (Coad): el objeto hace lo que en el mundo real se haría *sobre* la cosa que representa.
- **Contraindicación**: si empeora cohesión y acoplamiento. `Sale` tiene los datos para guardarse en la base, pero la persistencia va en un subsistema de servicios aparte.
- **Beneficios**: mantiene el encapsulamiento, reparte el comportamiento en clases livianas y suele apoyar el bajo acoplamiento y la alta cohesión.

### Creador

B debe crear instancias de A si (doc 1, pp. 30–32; doc 33):

- B **contiene o agrega** a A (la opción preferida si hay varias);
- B **almacena o registra** a A (por ejemplo, un repositorio que la persiste);
- B **tiene los datos de inicialización** de A (es experta);
- B **usa directamente** a A.

Ejemplos: `Cliente` contiene, persiste, conoce el id y usa `Pedido` → `Cliente` crea `Pedido`. En NextGen, `Sale` agrega `SalesLineItem` → `Sale.makeLineItem()`.

- **Por qué**: el creador ya está conectado con lo que crea, así que no suma acoplamiento.
- **Contraindicación**: si crear es complejo (reciclar instancias, crear condicionalmente una familia de clases), se delega a una *Factory* (ver [patrones creacionales](patrones-creacionales.md)).

### Controlador

- Es el **primer objeto después de la capa de UI** que recibe y coordina una **operación de sistema** (doc 33, pp. 16 y 32).
- Coordina y **delega**; no hace el trabajo él mismo. Según el doc 1 pertenece a la **capa de aplicación o servicios**; según Larman, a la capa de dominio. Nunca a la de presentación.
- **Operación de sistema**: evento de entrada principal (el cajero toca "Finalizar venta"). Se descubren en el análisis con los **diagramas de secuencia del sistema (DSS)**.

| Variante | Qué clase recibe los eventos | Cuándo |
|---|---|---|
| **Controlador de fachada** | Una que representa todo el sistema, un dispositivo o subsistema (`Register`, `POSSystem`, `ChessGame`) | Pocos eventos |
| **Controlador de caso de uso** | Una artificial por caso de uso (`<CasoDeUso>Handler`, `Coordinator` o `Session`), que es una Fabricación pura | Muchos eventos, o la fachada se infla |

- Usar **el mismo controlador para todos los eventos de un caso de uso**, así lleva el estado y detecta secuencias ilegales (`makePayment` antes de `endSale`).
- **Corolario**: la UI (ventanas, vistas) no maneja eventos de sistema; los recibe y **delega** al controlador. Así la lógica se reutiliza, se puede cambiar de framework de UI o correr en modo batch.
- **Controlador inflado** (*bloated controller*): uno solo recibe todos los eventos, hace el trabajo sin delegar (viola Experto y Alta cohesión) y acumula atributos. **Cura**: más controladores (por caso de uso) que deleguen.
- No confundir con el controlador de **MVC web**: ese es parte de la capa de UI y maneja el flujo de páginas.
- En el UP, los objetos *boundary* (interfaces), *control* (controladores de caso de uso) y *entity* (dominio persistente) son una clasificación opcional equivalente.

### Bajo acoplamiento y alta cohesión

**Acoplamiento**: cuánto está conectado, conoce o depende un elemento de otros (doc 33, p. 29). Con acoplamiento alto:

- un cambio en una clase relacionada fuerza cambios locales;
- cuesta entender la clase aislada;
- cuesta reutilizarla, porque arrastra a las que depende.

Formas de que X se acople a Y: X tiene un atributo de tipo Y, llama a servicios de Y, recibe o devuelve Y en un método, es subclase de Y o implementa la interfaz Y.

Tipos de acoplamiento en el doc 1 (p. 25): **de contenido** (un módulo referencia directamente el contenido de otro), **común** (comparten una variable global) y **de control** (uno le manda al otro un elemento que decide su lógica).

- Es un principio **evaluativo**: se tiene en cuenta en todas las decisiones.
- Una **subclase está fuertemente acoplada** a su superclase: heredar es una decisión cuidadosa.
- Llevado al extremo (cero acoplamiento) contradice la idea de objetos que colaboran con mensajes.
- **Elegí tus batallas**: el problema no es el acoplamiento alto sino el acoplamiento a elementos **inestables**. Acoplarse a `java.util` no preocupa; a calculadoras de impuestos de terceros, sí.

**Cohesión**: cuán relacionadas y enfocadas están las responsabilidades de un elemento. Con alta cohesión, una clase tiene pocos métodos, muy relacionados, y colabora si la tarea es grande. Con baja cohesión es difícil de entender, reutilizar y mantener, y es frágil.

Tipos de cohesión (doc 1, p. 24), de la peor a la mejor:

1. **Coincidente**: tareas sin ninguna relación.
2. **Lógica**: tareas relacionadas, pero se ejecuta una sola.
3. **Temporal**: tareas que se ejecutan al mismo tiempo.
4. **De procedimiento**: pasos de una secuencia.
5. **De comunicación**: tareas que afectan a los mismos datos.
6. **De información**: cada tarea con su propio punto de entrada, sobre los mismos datos (los objetos).
7. **Funcional**: una única tarea.

Maximizar la cohesión dentro del módulo minimiza el acoplamiento entre módulos.

**Ejemplo (Larman)**: para crear el `Payment` de una `Sale`, Creador sugiere `Register`, pero eso lo acopla a `Payment` y lo infla. Mejor que lo cree `Sale`, que ya lo conoce: bajo acoplamiento y alta cohesión a la vez.

### Polimorfismo

- Si una responsabilidad **depende del tipo**, se usa polimorfismo: el mismo nombre de servicio implementado en distintos objetos, uno por tipo (doc 1, pp. 37–38).
- **Ejemplo**: `Log.Registrar(mensaje, TipoDeLog)` con un `switch` sobre Debug o Error → interfaz `IMensajeDelLog` con `MensajeDebug` y `MensajeError`. `Log.Registrar(IMensajeDelLog)` sólo escribe `mensaje.Valor`, y el experto en información decide qué mensaje crear.
- No confundir con **sobrecarga** (mismo nombre, distintos parámetros, en una misma clase).

### Fabricación pura

- Una **clase inventada**, que no representa nada del dominio, creada a propósito para **bajar el acoplamiento, subir la cohesión o reutilizar** (doc 1, p. 35).
- Surge cuando una clase tiene poca cohesión y **no hay otra clase natural** donde poner ciertos métodos.
- **Ejemplo**: en Angry Birds se saca `Mostrar()` de `PajaroEnfadado` y se crean `PajaroEnfadadoPresenter` y `PajaroEnfadadoView`. Es la base de **MVC, MVP y MVVM**.
- Otros ejemplos: el controlador de caso de uso y el servicio de persistencia.
- **Contraindicación**: abusar lleva a **clases función**, con un solo método.

### Indirección

- Asigna la responsabilidad de **mediar** entre dos elementos a un **objeto intermedio**, para evitar el acoplamiento directo y proteger al primero de cambios previsibles en el segundo (doc 1, p. 36).
- **Ejemplo**: un `ServicioLog` entre `CualquierPresentador` y Log4Net; si cambia Log4Net, el presentador no se entera.
- Es la base para crear abstracciones e **integrar APIs externas** sin gran impacto.

### Variaciones protegidas

- Principio fundamental de **protegerse frente al cambio**: lo que el análisis muestra como susceptible de cambiar se **envuelve en una interfaz** y se usa **polimorfismo** para tener varias implementaciones (doc 1, pp. 40–41).
- "El cambio debe ser bienvenido, pero no debe ser motivo de desesperación": no se evita, se aísla.
- **Ejemplo**: `MostrarImagenController` recibe `ImagenJpeg` → recibe `IImagen`; si llega otro formato, el controlador no cambia.
- Muy relacionado con **Polimorfismo** e **Indirección**. Es la misma idea que OCP (ver [SOLID](principios-solid.md)).

### Artefactos que entran al diseño de objetos

Según Larman (doc 33, pp. 2–3), el diseño OO en el UP se llama **realización de casos de uso**: los objetos se diseñan para "realizar" (implementar) los casos de uso. Entradas:

| Artefacto | Qué aporta |
|---|---|
| Texto de los casos de uso | El comportamiento visible que los objetos deben soportar |
| Diagramas de secuencia del sistema (DSS) | Las operaciones de sistema: los mensajes iniciales de los diagramas de interacción |
| Contratos de operación | Qué debe lograr cada operación de sistema (poscondiciones) |
| Modelo de dominio | Nombres y atributos de los objetos de la capa de dominio |
| Glosario | Detalle de datos, formatos y validaciones |
| Especificación suplementaria | Objetivos no funcionales (por ejemplo, internacionalización) |

- **UML** es un lenguaje estándar de modelado visual, pero conocerlo **no enseña a pensar en objetos**. La herramienta crítica es una mente formada en principios de diseño.
- En el modelado se dibujan **diagramas de interacción** (dinámicos) y **diagramas de clases** (estáticos) que se complementan.

## Dónde me equivoco

_Sin errores registrados todavía._ Trampas típicas: ubicar al Controlador en la capa de presentación; confundir Fabricación pura con Variaciones protegidas; creer que Polimorfismo es sobrecarga.

## Ver también

- [Principios SOLID](principios-solid.md): Variaciones protegidas ≈ OCP; Indirección + DIP → inyector de dependencias.
- [Principios de diseño orientado a objetos](principios-de-diseno-orientado-a-objetos.md): delegación y composición.
- [Patrones creacionales](patrones-creacionales.md): cuando Creador no alcanza, Factory.
