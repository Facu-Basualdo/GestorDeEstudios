# Arquitectura de software y diseño arquitectónico
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 4.1 · Peso provisorio 2/3 (**entra en el 2º parcial**, clases 19-20 "Arquitectura I")
> · Fuentes: doc 12 *arquitectura* (filminas de la cátedra, pp. 1–41) y doc 59 Bass, Clements y
> Kazman, *Software Architecture in Practice*, caps. 1–3 (pp. 16–58), vía el export de Faro.
> La bibliografía de la clase también incluye Sommerville, caps. 6 y 17. Los estilos (capas,
> repositorio, tuberías y filtros, microkernel) están en [estilos arquitectónicos](estilos-arquitectonicos.md).

## Preguntas de recuperación

- ¿Qué es la arquitectura de software según Bass? :: El **conjunto de estructuras necesarias para razonar sobre el sistema**: elementos de software, relaciones entre ellos y propiedades de ambos. [→ Qué es la arquitectura](#Qué%20es%20la%20arquitectura)
- ¿Cuándo una estructura es arquitectónica? :: Cuando permite **razonar sobre el sistema y sus propiedades**, en particular sobre un atributo importante para algún interesado. Las líneas de código con la letra "z" son una estructura, pero no arquitectónica. [→ Qué es la arquitectura](#Qué%20es%20la%20arquitectura)
- ¿Arquitectura y diseño son lo mismo? :: La arquitectura **es diseño, pero no todo diseño es arquitectura**: muchas decisiones quedan para los diseñadores e implementadores. [→ Qué es la arquitectura](#Qué%20es%20la%20arquitectura)
- ¿Todo sistema tiene arquitectura? ¿Es buena? :: Todo sistema tiene una (tiene elementos y relaciones), aunque nadie la conozca. No hay arquitecturas buenas o malas en absoluto: son **más o menos aptas para un propósito**. [→ Qué es la arquitectura](#Qué%20es%20la%20arquitectura)
- Arquitectura de software vs. de sistema vs. de empresa :: Software: la parte lógica, el nivel más específico. Sistema: suma el **hardware** (y redes) y las **personas**. Empresa: **procesos, roles e información** de la organización. [→ Niveles de arquitectura](#Niveles%20de%20arquitectura)
- ¿Por qué es importante la arquitectura? (al menos cinco razones) :: Habilita o inhibe los atributos de calidad · permite razonar sobre el cambio · predice cualidades temprano · mejora la comunicación · contiene las decisiones más tempranas y difíciles de cambiar · restringe la implementación · moldea la organización (Conway) · base del desarrollo incremental · estimar costos · reutilización (línea de productos) · ensamblar componentes · reduce la complejidad · capacitar gente nueva. [→ Por qué importa](#Por%20qué%20importa)
- ¿Qué dice la Ley de Conway? :: Las organizaciones producen diseños que **copian sus estructuras de comunicación**. [→ Por qué importa](#Por%20qué%20importa)
- ¿Qué es el diseño arquitectónico y cuándo se hace? :: La **puerta de entrada al diseño**, después de la ingeniería de requisitos: pensar los grandes elementos del sistema y decidir cómo se organizan. [→ Diseño arquitectónico](#Diseño%20arquitectónico)
- Arquitectura a pequeña escala vs. a gran escala :: Pequeña: cómo un **programa individual** se descompone en componentes. Grande: **sistemas empresariales** complejos que incluyen otros sistemas, quizás distribuidos y de distintas empresas. [→ Diseño arquitectónico](#Diseño%20arquitectónico)
- ¿Qué tres ventajas tiene diseñar y documentar explícitamente la arquitectura? :: **Comunicación con los interesados, análisis del sistema y reutilización a gran escala**. [→ Diseño arquitectónico](#Diseño%20arquitectónico)
- ¿Qué arquitectura conviene si se prioriza seguridad, protección, disponibilidad, rendimiento o mantenibilidad? :: Security: capas con lo crítico en la capa interna más protegida · safety: lo crítico en pocos componentes · availability: componentes redundantes · performance: operaciones críticas en pocos componentes y en la misma máquina · mantenibilidad: componentes reemplazables, productores separados de consumidores. [→ Arquitectura y atributos de calidad](#Arquitectura%20y%20atributos%20de%20calidad)
- ¿Cuáles son las tres familias de estructuras? :: **De módulos** (unidades de implementación, estáticas), **de componentes y conectores** (elementos en ejecución y sus interacciones) y **de asignación** (software → hardware, archivos, equipos). [→ Estructuras](#Estructuras)
- ¿Qué son las vistas 4+1 de Kruchten? :: Cuatro vistas (**lógica, de procesos, de desarrollo y física**) más los **escenarios** (casos de uso) que las vinculan. Es la organización que usa el Proceso Unificado. [→ Vistas 4+1](#Vistas%204+1)
- ¿Qué es un atributo de calidad? :: Una propiedad **no funcional, medible**, que indica qué tan bien el sistema satisface a los interesados. La arquitectura la determinan los no funcionales; la funcionalidad no. [→ Arquitectura y atributos de calidad](#Arquitectura%20y%20atributos%20de%20calidad)
- ¿Qué partes tiene un escenario de atributo de calidad? :: **Fuente, estímulo, artefacto, entorno, respuesta y medición**. [→ Arquitectura y atributos de calidad](#Arquitectura%20y%20atributos%20de%20calidad)
- Táctica vs. patrón arquitectónico :: Táctica: una **decisión de diseño** que define cómo el sistema responde a un estímulo (afecta un atributo). Patrón: una solución probada a un problema recurrente que **empaqueta varias tácticas**. [→ Arquitectura y atributos de calidad](#Arquitectura%20y%20atributos%20de%20calidad)

## Cuestionario

1. Según Bass, Clements y Kazman, la arquitectura de software de un sistema es…
   - [x] el conjunto de estructuras necesarias para razonar sobre el sistema
   - [ ] el conjunto de decisiones tempranas tomadas antes de programar
   - [ ] el diagrama de clases completo del sistema
   - [ ] la elección del lenguaje y del framework
   > El libro descarta definirla como "decisiones tempranas": no todas son tempranas (menos en ágil) y muchas tempranas no son arquitectónicas. [→ Qué es la arquitectura](#Qué%20es%20la%20arquitectura)
2. ¿Cuáles de las siguientes afirmaciones son correctas?
   - [x] Todo sistema de software tiene una arquitectura, aunque nadie la conozca
   - [x] La arquitectura es diseño, pero no todo diseño es arquitectura
   - [ ] Existen arquitecturas buenas o malas en términos absolutos
   - [ ] Sólo los sistemas documentados tienen arquitectura
   > Las arquitecturas son más o menos aptas **para un propósito**; y la arquitectura existe aunque no esté documentada. [→ Qué es la arquitectura](#Qué%20es%20la%20arquitectura)
3. ¿Qué nivel de arquitectura considera el hardware, las redes y las personas?
   - [x] La arquitectura de sistema
   - [ ] La arquitectura de software
   - [ ] La arquitectura de empresa
   - [ ] La arquitectura de datos
   > La de empresa trata procesos, roles e información de la organización; la de software, sólo la parte lógica. [→ Niveles de arquitectura](#Niveles%20de%20arquitectura)
4. ¿Qué dice la Ley de Conway?
   - [x] Las organizaciones producen diseños que copian sus estructuras de comunicación
   - [ ] La complejidad del software crece con el cuadrado de sus módulos
   - [ ] Toda arquitectura se degrada si no se refactoriza
   - [ ] Agregar gente a un proyecto atrasado lo atrasa más
   > La última es la ley de Brooks. Conway explica por qué la arquitectura dicta la estructura de la organización, o viceversa. [→ Por qué importa](#Por%20qué%20importa)
5. ¿Cuáles son las tres ventajas de diseñar y documentar explícitamente la arquitectura?
   - [x] Comunicación con los interesados, análisis del sistema y reutilización a gran escala
   - [ ] Menos código, menos pruebas y menos documentación
   - [ ] Elegir el lenguaje, el framework y la base de datos
   - [ ] Rendimiento, seguridad y disponibilidad garantizados
   > La arquitectura por sí sola no garantiza la calidad: "lo que la arquitectura da, la implementación lo puede quitar". [→ Diseño arquitectónico](#Diseño%20arquitectónico)
6. Si la **disponibilidad** es el atributo prioritario, ¿qué arquitectura conviene?
   - [x] Componentes redundantes, para que si uno cae un duplicado cumpla su función
   - [ ] Capas, con los activos críticos en la capa más interna
   - [ ] Las operaciones críticas concentradas en un único componente
   - [ ] Componentes de grano fino en muchas máquinas distintas
   > Capas con lo crítico adentro es para seguridad (security); concentrar lo crítico es para protección (safety). [→ Arquitectura y atributos de calidad](#Arquitectura%20y%20atributos%20de%20calidad)
7. ¿Qué estructura muestra los elementos **en tiempo de ejecución** (procesos, servicios, clientes, servidores) y cómo interactúan?
   - [x] La de componentes y conectores
   - [ ] La de módulos
   - [ ] La de asignación
   - [ ] La de descomposición
   > La de módulos es estática (unidades de implementación) y la de asignación mapea software a hardware, archivos o equipos. [→ Estructuras](#Estructuras)
8. En las vistas 4+1, ¿qué vista sirve para comprobar rendimiento y disponibilidad?
   - [x] La de procesos
   - [ ] La lógica
   - [ ] La de desarrollo
   - [ ] La de escenarios
   > La lógica muestra clases y objetos; la de desarrollo, cómo se reparte el software para programarlo; la física, el hardware. [→ Vistas 4+1](#Vistas%204+1)
9. ¿Qué es el "+1" de las vistas 4+1?
   - [x] Los escenarios (casos de uso) que vinculan las cuatro vistas
   - [ ] La vista de datos
   - [ ] La vista de seguridad
   - [ ] El documento de arquitectura
   > No definen la forma de la arquitectura, pero indican a qué prestarle atención. [→ Vistas 4+1](#Vistas%204+1)
10. ¿Qué determina principalmente la forma de la arquitectura?
    - [x] Los requisitos no funcionales (atributos de calidad)
    - [ ] Los requisitos funcionales
    - [ ] El lenguaje de programación
    - [ ] La cantidad de casos de uso
    > La funcionalidad se puede lograr con casi cualquier estructura; lo que la arquitectura habilita o inhibe son las cualidades. [→ Arquitectura y atributos de calidad](#Arquitectura%20y%20atributos%20de%20calidad)

## Contenido

### Qué es la arquitectura

- **Definición de Bass** (doc 59, p. 16): la arquitectura de software de un sistema es el **conjunto de estructuras necesarias para razonar sobre el sistema**; las estructuras comprenden elementos de software, sus relaciones y las propiedades de ambos.
- No se define como "decisiones tempranas o importantes": no todas las decisiones arquitectónicas son tempranas (sobre todo en proyectos ágiles), muchas decisiones tempranas no son arquitectónicas y es difícil saber de antemano cuáles son importantes.
- **Estructura** = conjunto de elementos unidos por una relación. Es **arquitectónica** si permite razonar sobre el sistema y sus propiedades, sobre algo que le importa a un interesado (la funcionalidad, seguir andando ante fallas o ataques, la facilidad de cambio, la respuesta a los usuarios).
- En las filminas (doc 12, p. 1): el **modelo del sistema con el nivel de abstracción necesario para comprenderlo en su totalidad**, sin llegar al detalle. Se enfoca en la parte **pública** (interfaces), no en la implementación privada.
- Principios:
  - la **arquitectura es diseño, pero no todo diseño es arquitectura**;
  - **todo sistema tiene arquitectura**, aunque no se conozca: hay que distinguir la arquitectura de su **representación** (de ahí la importancia de documentarla);
  - **no todas las arquitecturas son buenas**; no hay buenas o malas en absoluto, sino **aptas para un propósito** (tres capas orientada a servicios puede ser ideal para un B2B web e inapropiada para aviónica);
  - la arquitectura **incluye el comportamiento** de los elementos, en la medida en que sirve para razonar sobre el sistema.
- La arquitectura es el **puente** entre los objetivos de negocio (abstractos) y el sistema (concreto).

### Niveles de arquitectura

| Nivel | De qué se ocupa |
|---|---|
| **Software** | La parte lógica: cómo se estructura la funcionalidad y cómo interactúan los programas. El nivel más específico |
| **Sistema** | Hardware (incluidas las redes), software y **personas**. Permite razonar sobre consumo, peso, dimensiones |
| **Empresa** | Procesos, roles, flujos de información y unidades de la organización. No necesita computadoras, aunque hoy es impensable sin ellas |

### Por qué importa

Bass da **trece razones** (doc 59, pp. 44–57). Las filminas las resumen (doc 12, p. 2):

1. **Habilita o inhibe los atributos de calidad**. Igual no los garantiza: "lo que la arquitectura da, la implementación lo puede quitar".
2. Permite **razonar sobre el cambio** y gestionarlo.
3. Permite **predecir** temprano las cualidades del sistema.
4. **Mejora la comunicación** entre interesados: da un lenguaje común (a veces hasta hace aparecer requisitos que nadie había pensado).
5. Contiene las **decisiones más tempranas**, fundamentales y difíciles de cambiar (efecto dominó).
6. Define **restricciones** para la implementación.
7. **Dicta la estructura de la organización**, o viceversa. **Ley de Conway**: las organizaciones producen diseños que copian sus estructuras de comunicación. La arquitectura es la base del **desglose del trabajo** (*work-breakdown structure*).
8. Es la base del **desarrollo incremental**: primero un **sistema esqueleto** (la infraestructura con poca funcionalidad; el *walking skeleton* de Cockburn) y después se agrega funcionalidad.
9. Permite **estimar costos y cronograma**: lo mejor es el consenso entre las estimaciones de arriba hacia abajo (arquitecto y gerente) y de abajo hacia arriba (desarrolladores).
10. Es un **modelo transferible y reutilizable**: el corazón de una **línea de productos**.
11. Enfoca el desarrollo en **ensamblar componentes** (comerciales, libres, servicios), no sólo en crearlos. Los sistemas abiertos evitan el *vendor lock-in*.
12. **Restringe el vocabulario** de alternativas a soluciones probadas: canaliza la creatividad y reduce la complejidad.
13. Sirve para **capacitar** a los nuevos miembros del equipo.

### Diseño arquitectónico

- Es la **puerta de entrada al diseño**: la etapa posterior a la ingeniería de requisitos que piensa los **grandes elementos del sistema** y decide su organización (doc 12, p. 36, siguiendo a Sommerville).
- **Dos escalas**:
  - **pequeña**: cómo se descompone en componentes un **programa individual** (Sommerville, cap. 6);
  - **grande**: **sistemas empresariales** complejos que incluyen otros sistemas, programas y componentes, quizás distribuidos y de distintas empresas (caps. 17 y 18).
- **Ventajas de diseñarla y documentarla explícitamente**: 1) comunicación con los interesados; 2) análisis del sistema; 3) reutilización a gran escala.
- **Decisiones del diseño arquitectónico**: cómo se distribuye en el hardware · qué estrategia de control usar · cómo se documenta · cómo se organizan los requisitos no funcionales · qué patrones o estilos usar · cómo se descomponen los componentes · cuál es el enfoque fundamental (por ejemplo, repositorio o tuberías y filtros).
- **Modelos arquitectónicos**: se usan para **fomentar el debate** (abstractos, de alto nivel, para comunicarse, planificar y repartir tareas) o para **documentar** una arquitectura ya diseñada (completos, con componentes, interfaces y conexiones).

### Arquitectura y atributos de calidad

- **Atributo de calidad**: propiedad **no funcional y medible** que indica qué tan bien el sistema satisface a los interesados. La capacidad de cumplirlos está determinada **sustancialmente por la arquitectura** (doc 12, p. 11).
- **Los requisitos no funcionales determinan la forma de la arquitectura**; los funcionales sólo ayudan. Al arquitecto la funcionalidad le interesa en cuanto interactúa con las otras cualidades y las restringe.
- **Escenario de atributo de calidad** (p. 14): la forma precisa de especificarlo para **evaluar la arquitectura**. Partes: **fuente** (de dónde viene), **estímulo**, **artefacto** (qué se ve afectado), **entorno** (normal, con fallas…), **respuesta** y **medición** (si no se mide, no se sabe si la decisión fue buena).
- **Qué arquitectura según el atributo prioritario** (Sommerville, en doc 12, pp. 36 y 40):

| Atributo prioritario | Arquitectura |
|---|---|
| **Rendimiento** (*performance*) | Operaciones críticas en **pocos componentes**, en la **misma máquina** y no a través de la red |
| **Seguridad** (*security*, ataques) | **Capas**, con los activos críticos en la capa **más interna y protegida** |
| **Protección** (*safety*, fallas no intencionales) | Operaciones críticas en **un solo componente o pocos**, para poder apagarlo ante una falla |
| **Disponibilidad** | **Componentes redundantes**: si uno cae, un duplicado cumple su función |
| **Mantenibilidad** | Componentes **fácilmente reemplazables**, con los productores de datos separados de los consumidores |

  Si los atributos entran en conflicto, se resuelve con **patrones y tácticas**.
- **Táctica**: una decisión de diseño que define cómo responde el sistema a un estímulo. No se inventan: son buenas prácticas de los arquitectos. Ejemplos: **diferir el enlace** (modificabilidad: preparar la arquitectura para que el cambio se haga lo más tarde posible) · **controlar la demanda de recursos** y **gestionar los recursos** (rendimiento).
- **Patrón arquitectónico**: solución probada a un problema recurrente, que **empaqueta varias tácticas** y por eso hace concesiones entre atributos. Ver [estilos arquitectónicos](estilos-arquitectonicos.md).
- Algunos atributos (doc 12, pp. 17 y 27): **modificabilidad** (manejar cambios con el menor tiempo, costo y riesgo; incluye escalabilidad, variabilidad, portabilidad e independencia de ubicación) y **rendimiento** (responder a los eventos en un tiempo razonable).

### Estructuras

Bass agrupa las estructuras en tres familias (doc 59, pp. 22–33; doc 12, pp. 5–9):

| Familia | Qué muestra | Preguntas que responde | Ejemplos |
|---|---|---|---|
| **De módulos** | Unidades de **implementación**; vista **estática**. Es lo más parecido a UML | ¿Qué hace cada módulo? ¿Qué usa? ¿Quién depende de él? | Descomposición, usos, capas, clases, modelo de datos |
| **De componentes y conectores** (C&C) | Elementos **en ejecución** (procesos, servicios, clientes, servidores, filtros) y sus **interacciones** | ¿Qué corre y cómo interactúa? ¿Qué se replica? ¿Qué corre en paralelo? | Servicios, concurrencia |
| **De asignación** | Cómo el software se asigna a lo que **no es software** | ¿En qué procesador corre? ¿En qué archivo está? ¿Qué equipo lo hace? | Despliegue, implementación, asignación de trabajo |

- Las de módulos son la herramienta principal para razonar sobre la **modificabilidad**; las C&C, sobre **rendimiento, seguridad y disponibilidad**.
- Las estructuras se relacionan entre sí (un módulo puede ser varios componentes en ejecución: en un cliente–servidor hay 2 módulos y 11 componentes). Se documentan **sólo las que rinden** ("menos es más").
- **Vista**: representación de un conjunto de elementos y sus relaciones. **Documentar una arquitectura es documentar sus vistas relevantes**. Nunca alcanza **un solo diagrama**.

### Vistas 4+1

El modelo de **Kruchten** (doc 12, pp. 40–41), el que usa el **Proceso Unificado**:

| Vista | Qué muestra | Para quién o para qué |
|---|---|---|
| **Lógica** | Las abstracciones clave: **objetos y clases**. Se relacionan con los requisitos | Ver la arquitectura del problema |
| **De procesos** | Cómo el sistema se compone de **procesos en ejecución** | Comprobar **rendimiento y disponibilidad** |
| **De desarrollo** | Cómo se descompone el software en **componentes** que implementa un desarrollador o equipo | Programadores y gerentes |
| **Física** (o de despliegue) | El **hardware** y cómo se distribuye el software en él | Ingenieros que planifican el despliegue |
| **+1: escenarios** | **Casos de uso** que vinculan las cuatro vistas | No definen la forma, pero indican a qué prestar atención |

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Estilos arquitectónicos](estilos-arquitectonicos.md): capas, repositorio, tuberías y filtros, microkernel.
- [Arquitecturas de sistemas distribuidos](arquitecturas-de-sistemas-distribuidos.md).
- [Proceso Unificado](proceso-unificado.md): "centrado en la arquitectura".
