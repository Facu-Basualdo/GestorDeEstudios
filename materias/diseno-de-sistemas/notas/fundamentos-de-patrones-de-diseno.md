# Fundamentos de patrones de diseño
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 4 · Peso provisorio 2/3 (entra en IE3) · Fuentes: doc 16 *patrones de diseño*
> (filminas de la cátedra, pp. 3–9) y doc 2 Gamma et al., *Design Patterns* (caps. 1–2,
> pp. 3–88), vía el export de Faro. Las preguntas *(cátedra)* son de los cuestionarios semanales 10 y 11.

## Preguntas de recuperación

- ¿Qué es un patrón de diseño según Alexander? :: Describe un problema que ocurre una y otra vez en el entorno y el núcleo de su solución, que se puede usar un millón de veces sin repetirla dos veces igual. Es un par **problema–solución** en un contexto. [→ Qué es un patrón](#Qué%20es%20un%20patrón)
- ¿Qué componentes mínimos tiene un patrón según las filminas? ¿Cuál se considera menos importante? :: **Contexto, problema y solución**. El contexto es el menos importante, pero se aclara porque la solución no es universal. [→ Qué es un patrón](#Qué%20es%20un%20patrón)
- ¿Cuáles son los cuatro elementos esenciales de un patrón según GoF? :: **Nombre, problema, solución y consecuencias**. [→ Qué es un patrón](#Qué%20es%20un%20patrón)
- Propiedades verdaderas y falsas de los patrones :: Verdaderas: vocabulario común, comunicación efectiva, documentan arquitectura, compactan el diseño, admiten más de una solución, son abstracciones. Falsas: solución exacta, solución para todo, sólo para diseño OO. [→ Qué es un patrón](#Qué%20es%20un%20patrón)
- ¿Qué agrega la forma canónica de Alexander y qué el formato GoF? :: Alexander: nombre, **fuerzas** y ejemplos, más racionalidad y patrones relacionados. GoF: **clasificación, intención, aplicabilidad, estructura** (diagrama de clases), consecuencias, implementación y código. [→ Cómo se documenta un patrón](#Cómo%20se%20documenta%20un%20patrón)
- Catálogo vs. sistema de patrones :: Catálogo: patrones relacionados pero con relación débil. Sistema: conjunto más cohesivo, los patrones se usan juntos para armar la solución. [→ Cómo se documenta un patrón](#Cómo%20se%20documenta%20un%20patrón)
- ¿Cómo se clasifican los 23 patrones GoF? :: Por **propósito** (la más usada): creacionales, estructurales y de comportamiento. Por **ámbito**: de clase (herencia, estáticos) o de objeto (composición y agregación, dinámicos). [→ Clasificación de los patrones GoF](#Clasificación%20de%20los%20patrones%20GoF)
- ¿Qué patrón aparece en dos clasificaciones de ámbito? :: **Adapter**: tiene versión de clase (herencia) y de objeto (composición). [→ Clasificación de los patrones GoF](#Clasificación%20de%20los%20patrones%20GoF)
- Niveles de patrones de software :: De diseño: **arquitectónicos** (cliente-servidor, microservicios), **de diseño** y **de codificación** o idiomas (el más bajo nivel). Aparte están los patrones **de análisis**. [→ Qué es un patrón](#Qué%20es%20un%20patrón)
- Patrón vs. framework (3 diferencias) :: El patrón es más **abstracto** (se implementa cada vez; el framework es código), más **chico** (un framework contiene varios patrones) y menos **especializado** (el framework es de un dominio). [→ Patrones, toolkits y frameworks](#Patrones,%20toolkits%20y%20frameworks)
- ¿Cuáles son los 7 problemas de diseño del editor Lexi? :: Estructura del documento, formateo, embellecimiento de la UI, múltiples estándares de apariencia, múltiples sistemas de ventanas, operaciones de usuario, y corrección ortográfica y separación silábica. [→ Caso de estudio: el editor Lexi](#Caso%20de%20estudio:%20el%20editor%20Lexi)
- ¿Qué patrón resuelve cada problema de Lexi? :: Estructura → Composite · formateo → Strategy · embellecimiento → Decorator · apariencias → Abstract Factory · sistemas de ventanas → Bridge · operaciones → Command · ortografía → Iterator + Visitor. [→ Caso de estudio: el editor Lexi](#Caso%20de%20estudio:%20el%20editor%20Lexi)
- ¿Cuándo NO aplicar un patrón? :: Cuando no hace falta la flexibilidad que da: los patrones no se aplican indiscriminadamente, agregan complejidad. [→ Cómo elegir y usar un patrón](#Cómo%20elegir%20y%20usar%20un%20patrón)

## Cuestionario

1. ¿Cuál de los siguientes es uno de los siete problemas de diseño del editor Lexi? *(cátedra)*
   - [ ] Compresión de archivos multimedia
   - [x] Estructura del documento
   - [ ] Gestión de versiones del documento
   - [ ] Sincronización con servicios en la nube
   > Los distractores son problemas de un editor moderno, pero no están en la lista de Lexi. [→ Caso de estudio: el editor Lexi](#Caso%20de%20estudio:%20el%20editor%20Lexi)
2. ¿Cuáles de los siguientes son problemas de diseño identificados en Lexi? *(cátedra)*
   - [ ] Integración con bases de datos relacionales
   - [x] Soporte de múltiples sistemas de ventanas
   - [x] Corrección ortográfica y separación silábica
   - [x] Formateo
   > Las bases de datos no figuran entre los siete. [→ Caso de estudio: el editor Lexi](#Caso%20de%20estudio:%20el%20editor%20Lexi)
3. ¿Cuál de los siguientes es uno de los siete problemas de diseño de Lexi? *(cátedra)*
   - [x] Soporte de múltiples estándares de apariencia (look-and-feel)
   - [ ] Gestión de una base de datos distribuida entre servidores
   - [ ] Soporte de múltiples lenguajes de programación para su implementación
   - [ ] Integración con sistemas de control de versiones de código
   > Los distractores son temas de infraestructura o herramientas. [→ Caso de estudio: el editor Lexi](#Caso%20de%20estudio:%20el%20editor%20Lexi)
4. ¿Cuáles se cuentan entre los siete problemas de diseño de Lexi? *(cátedra)*
   - [x] Estructura del documento
   - [ ] Optimización del rendimiento de la red de comunicaciones
   - [x] Soporte de múltiples sistemas de ventanas
   - [x] Corrección ortográfica y separación silábica
   > La red no aparece en la lista. [→ Caso de estudio: el editor Lexi](#Caso%20de%20estudio:%20el%20editor%20Lexi)
5. ¿Cuál de estas es una propiedad **falsa** de los patrones, según las filminas?
   - [x] Sólo se aplican a diseños orientados a objetos
   - [ ] Brindan un vocabulario común
   - [ ] Admiten más de una solución posible
   - [ ] Permiten documentar la arquitectura de software
   > Tampoco son una solución exacta ni sirven para todos los problemas. [→ Qué es un patrón](#Qué%20es%20un%20patrón)
6. ¿Cuáles son los cuatro elementos esenciales de un patrón según GoF?
   - [x] Nombre, problema, solución y consecuencias
   - [ ] Contexto, fuerzas, ejemplos y racionalidad
   - [ ] Intención, estructura, participantes y código
   - [ ] Clase, objeto, interfaz y herencia
   > Contexto y fuerzas son de la forma de Alexander; intención y estructura son secciones de la plantilla GoF. [→ Qué es un patrón](#Qué%20es%20un%20patrón)
7. Los patrones de ámbito **de clase**…
   - [x] se basan en herencia y quedan fijados en tiempo de compilación
   - [ ] se basan en composición y pueden cambiar en ejecución
   - [ ] son la mayoría de los 23 patrones GoF
   - [ ] sólo pueden ser creacionales
   > La mayoría de los patrones son de ámbito objeto (composición, dinámicos). [→ Clasificación de los patrones GoF](#Clasificación%20de%20los%20patrones%20GoF)
8. ¿Qué diferencia a un patrón de diseño de un framework?
   - [x] El patrón es más abstracto: se implementa cada vez, mientras el framework es código ejecutable
   - [ ] El patrón es más grande: contiene varios frameworks
   - [ ] El patrón es más especializado: sirve para un solo dominio
   - [ ] No hay diferencias, son sinónimos
   > Es al revés en las otras dos: un framework contiene varios patrones y está atado a un dominio. [→ Patrones, toolkits y frameworks](#Patrones,%20toolkits%20y%20frameworks)
9. En Lexi, la clase `Compositor` encapsula el algoritmo que parte los glifos en líneas, para poder cambiarlo sin tocar la estructura del documento. ¿Qué patrón es?
   - [x] Strategy
   - [ ] Composite
   - [ ] Decorator
   - [ ] Bridge
   > Encapsular un algoritmo intercambiable en una jerarquía propia es Strategy. [→ Caso de estudio: el editor Lexi](#Caso%20de%20estudio:%20el%20editor%20Lexi)
10. ¿Qué agrega la forma canónica de Alexander a los componentes básicos de un patrón?
    - [x] Nombre, fuerzas y ejemplos
    - [ ] Clasificación, intención y aplicabilidad
    - [ ] Participantes, colaboraciones y código de ejemplo
    - [ ] Propósito y ámbito
    > Las fuerzas caracterizan el problema y la solución en el contexto. Clasificación, intención y aplicabilidad son del formato GoF. [→ Cómo se documenta un patrón](#Cómo%20se%20documenta%20un%20patrón)

## Contenido

### Qué es un patrón

- **Alexander**: "cada patrón describe un problema que ocurre una y otra vez en nuestro entorno, y luego describe el núcleo de la solución a ese problema, de tal manera que puedas usar esta solución un millón de veces, sin hacerlo nunca dos veces de la misma manera" (doc 2, p. 3).
- En las filminas (doc 16, p. 3): un **par problema–solución**. No es una receta, sino las características básicas para abordar el problema. Las soluciones no salen idénticas y cada una vale para un contexto. Van de lo más genérico a lo más específico.
- **Componentes** según las filminas (p. 5): **contexto, problema y solución**. El contexto es el menos importante, pero se aclara porque la solución no es universal.
- **Cuatro elementos esenciales** según GoF (doc 2):
  1. **Nombre**: resume problema, solución y consecuencias; amplía el vocabulario de diseño.
  2. **Problema**: cuándo aplicarlo (contexto y condiciones).
  3. **Solución**: clases y objetos, relaciones, responsabilidades y colaboraciones. Es una plantilla abstracta, no una implementación.
  4. **Consecuencias**: resultados y compromisos (flexibilidad, extensibilidad, portabilidad).
- Los patrones GoF no son diseños triviales (listas enlazadas) ni específicos de un dominio. No cubren concurrencia, distribución ni tiempo real.

**Propiedades** (doc 16, p. 4):

| Verdaderas | Falsas |
|---|---|
| Vocabulario común | Solución exacta |
| Comunicación efectiva | Solución para todos los problemas de diseño |
| Documentan la arquitectura (una arquitectura puede estar hecha de varios patrones) | Sólo se aplican a diseños orientados a objetos |
| Compactan el diseño: resolver parte por parte | |
| Más de una solución posible | |
| Son abstracciones de software | |

**Tipos de patrones de software** (p. 5):

- **De diseño**, en tres niveles: **arquitectónicos** (cliente-servidor, microservicios), **de diseño** y **de codificación**, también llamados idiomas o modismos (el nivel más bajo).
- **De análisis**.

### Cómo se documenta un patrón

- **Forma canónica de Alexander** (doc 16, p. 6): componentes básicos + **nombre** (para comunicar) + **fuerzas** (características del contexto que ayudan a caracterizar el problema y la solución) + **ejemplos**. Puede sumar racionalidad y patrones relacionados.
- **Formato GoF** (doc 16, p. 7): **clasificación** (en 3 categorías), **intención** (qué hace y qué resuelve), **aplicabilidad** (el contexto con otro nombre) y **estructura** (diagrama de clases), más consecuencias, implementación y código.
- **Plantilla completa del libro** (doc 2, pp. 16–17): nombre y clasificación · intención · también conocido como · motivación · aplicabilidad · estructura · participantes · colaboraciones · consecuencias · implementación · código de ejemplo · usos conocidos · patrones relacionados.
- **Catálogo de patrones**: patrones relacionados con una relación **débil**. **Sistema de patrones**: conjunto **más cohesivo**, los patrones se usan juntos para armar la solución (p. 9).
- **Lenguaje de patrones** (Alexander): conjunto ordenado que genera edificios completos. Los GoF aclaran que su catálogo **no** es un lenguaje de patrones: no genera programas completos.

### Clasificación de los patrones GoF

Los **23 patrones** del libro de Gamma, Helm, Johnson y Vlissides (1994–95, la "Biblia" de patrones) se clasifican con dos criterios (doc 2, p. 19; doc 16, p. 9):

- **Propósito** (el más usado): qué hace el patrón.
  - **Creacionales**: la creación de objetos.
  - **Estructurales**: la composición de clases u objetos.
  - **De comportamiento**: cómo interactúan los objetos y se reparten responsabilidades.
- **Ámbito**: a qué se aplica.
  - **De clase**: se basan en **herencia**, son estáticos (se fijan al compilar).
  - **De objeto**: se basan en **composición y agregación**, pueden cambiar en ejecución. **Son la mayoría**.

| Ámbito | Creacionales | Estructurales | De comportamiento |
|---|---|---|---|
| Clase | Factory Method | Adapter (de clase) | Interpreter, Template Method |
| Objeto | Abstract Factory, Builder, Prototype, Singleton | Adapter (de objeto), Bridge, Composite, Decorator, Facade, Flyweight, Proxy | Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor |

- **Adapter está en las dos filas** (de clase y de objeto), por eso las filminas remarcan estudiarlo.
- Creacionales de clase difieren la creación **a subclases**; de objeto, **a otro objeto**. De comportamiento de clase usan herencia para el flujo de control; de objeto, **grupos de objetos que cooperan** en algo que ninguno haría solo.

### Patrones, toolkits y frameworks

- **Toolkit**: clases reutilizables de uso general (colecciones, la biblioteca de E/S de C++). Reutilización **de código**, sin imponer un diseño (doc 2, p. 33).
- **Framework**: clases que cooperan formando un **diseño reutilizable** para una clase específica de software. Define la arquitectura de la aplicación y produce **inversión de control**: se reutiliza el cuerpo principal y uno escribe el código que el framework llama. Reutilización **de diseño**.
- **Patrón vs. framework** (doc 2, p. 35):
  1. El patrón es **más abstracto**: se implementa cada vez; el framework es código que se ejecuta.
  2. El patrón es **más chico**: un framework contiene varios patrones, nunca al revés.
  3. El patrón es **menos especializado**: el framework es de un dominio; los patrones sirven en casi cualquier aplicación.
- Ciclo de vida del software OO (doc 2, p. 84): **prototipado** (herencia, caja blanca) → **expansión** (crecen las jerarquías) → **consolidación** (refactorización, surgen los frameworks, la composición y la caja negra reemplazan a la herencia).

### Cómo elegir y usar un patrón

**Seis formas de elegir** (doc 2, p. 35): ver cómo los patrones resuelven problemas de diseño · leer las secciones de intención · estudiar cómo se relacionan · estudiar patrones de propósito similar · examinar una **causa de rediseño** (ver [principios de diseño OO](principios-de-diseno-orientado-a-objetos.md#Diseñar%20para%20el%20cambio)) · pensar **qué debería poder variar**.

**Siete pasos para usarlo** (p. 36): leerlo entero · estudiar estructura, participantes y colaboraciones · mirar el código de ejemplo · elegir nombres significativos para los participantes · definir las clases · nombrar las operaciones en términos de la aplicación · implementar.

**No aplicarlos indiscriminadamente**: sólo cuando hace falta la flexibilidad que dan.

Beneficios: un **vocabulario de diseño común** ("usemos un Observer acá"), ayudan a documentar y aprender, y hacen entendibles los sistemas existentes sin ingeniería inversa.

### Caso de estudio: el editor Lexi

Capítulo 2 de GoF: diseño de **Lexi**, un editor de documentos WYSIWYG, con **siete problemas de diseño** (doc 2, pp. 38–39).

| # | Problema | Patrón | Cómo se resuelve |
|---|---|---|---|
| 1 | Estructura del documento | **Composite** | Composición recursiva: caracteres → filas → columnas → páginas, todos `Glyph` con la misma interfaz |
| 2 | Formateo | **Strategy** | `Compositor` encapsula el algoritmo de corte de líneas (`SimpleCompositor`, `TeXCompositor`); `Composition` lo usa |
| 3 | Embellecimiento de la UI | **Decorator** | Envoltorio transparente: `MonoGlyph` delega en su componente; `Border` y `Scroller` agregan antes o después |
| 4 | Múltiples estándares de apariencia | **Abstract Factory** | Una fábrica crea todos los controles de una misma apariencia |
| 5 | Múltiples sistemas de ventanas | **Bridge** | `Window` (abstracción) delega en `WindowImp` (`XWindowImp`, `PMWindowImp`), creada por una `WindowSystemFactory` |
| 6 | Operaciones de usuario | **Command** | Cada operación es un objeto: se puede deshacer y rehacer |
| 7 | Corrección ortográfica y separación silábica | **Iterator + Visitor** | El iterador recorre (preorden) y un objeto de análisis, llevado a cada glifo, acumula el resultado sin casts |

*(Las filas 1, 4 y 6 las completa el tutor; en el export de Faro están sólo las piezas de las demás.)*

Detalles que aparecen en la fuente:

- **Glyph**: clase abstracta de todo lo que aparece en el documento. Tiene tres responsabilidades: **dibujarse**, **conocer su espacio** y **conocer a sus hijos y a su padre**.
- **Composición recursiva**: la estructura de objetos imita la estructura física del documento y trata texto y gráficos de forma uniforme.
- **Envoltorio transparente**: un solo hijo + interfaz compatible. El cliente no distingue el componente del envoltorio, y el envoltorio puede agregar comportamiento y estado.
- Separar el **recorrido** de las **acciones del recorrido**: el mismo iterador sirve para varios análisis. Poner el análisis en `Glyph` obligaría a cambiar toda la jerarquía por cada análisis nuevo → Visitor.

## Dónde me equivoco

_Sin errores registrados todavía._ Trampa típica: los distractores de Lexi son problemas modernos (nube, versiones, red, bases de datos) que no están en la lista.

## Ver también

- [Patrones creacionales](patrones-creacionales.md) · [estructurales](patrones-estructurales.md) · [de comportamiento](patrones-de-comportamiento.md).
- [Principios de diseño orientado a objetos](principios-de-diseno-orientado-a-objetos.md): las 8 causas de rediseño y qué patrón evita cada una.
