# Proceso Unificado de Desarrollo de Software (PUDS)
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 5.1 · Peso provisorio 2/3 (**entra en el 2º parcial**, clases 22 "PUDS" y 23 "PUDS II")
> · Fuentes: doc 13 *proceso unificado* (filminas y clase, pp. 1–51) y doc 14 *flujos de
> trabajo* (pp. 2–25), basados en Jacobson, Booch y Rumbaugh, caps. 1 a 5, vía el export de
> Faro. La captura de requisitos está en [su propia nota](captura-de-requisitos-en-el-pu.md).

## Preguntas de recuperación

- ¿Qué define un proceso de desarrollo de software? :: **Quién** hace las cosas, **qué** actividades se hacen, **qué** se produce (artefactos) y **cuándo** (la secuencia). El **cómo** ya sería demasiado prescriptivo. [→ Qué es el PUDS](#Qué%20es%20el%20PUDS)
- ¿Qué es el PUDS? :: Un **marco de trabajo de proceso** (*process framework*) genérico, pensado para sistemas grandes y complejos, **dirigido por casos de uso, centrado en la arquitectura e iterativo e incremental**. Viene de Jacobson (uno de los autores de UML). [→ Qué es el PUDS](#Qué%20es%20el%20PUDS)
- Metodología vs. framework de proceso :: El PUDS es un **framework**: una plantilla genérica que se **especializa** para cada proyecto (un proyecto es una instancia del proceso). Se lo asocia a una metodología prescriptiva, pero no hace falta tomar todo. [→ Qué es el PUDS](#Qué%20es%20el%20PUDS)
- ¿Qué son las 4P + H? :: **Personas, proyecto, producto, proceso y herramientas**: los elementos que intervienen en un proyecto guiado por el PU. [→ Qué es el PUDS](#Qué%20es%20el%20PUDS)
- ¿Cuáles son las tres características innegociables del PU? :: **Dirigido por casos de uso**, **centrado en la arquitectura** e **iterativo e incremental**. [→ Las tres características](#Las%20tres%20características)
- ¿Qué significa "dirigido por casos de uso"? :: Los casos de uso son el **punto de partida y el conductor** de todo el proceso: de ellos salen el análisis, el diseño, la implementación y las pruebas. Algo sin casos de uso no es PU. [→ Las tres características](#Las%20tres%20características)
- ¿Qué significa "centrado en la arquitectura"? :: El foco está en las **decisiones significativas** (estructura, componentes, interfaces, vistas), que se toman a partir de los **casos de uso más importantes** (3 o 4) y se construyen de a poco. [→ Las tres características](#Las%20tres%20características)
- ¿Qué significa "iterativo e incremental" en el PU? :: Cada fase tiene iteraciones que pasan por los flujos de trabajo y dejan un **incremento**, que **no necesariamente es aditivo** (puede ser una mejora o un reemplazo). Es **dirigido por el riesgo**: lo más riesgoso primero. [→ Las tres características](#Las%20tres%20características)
- ¿Cómo se estructura el ciclo de vida del PU? :: El desarrollo es una serie de **ciclos**; cada ciclo termina en una **versión** del producto y tiene **cuatro fases**; cada fase tiene **iteraciones**, y cada iteración termina en un **hito**. [→ Ciclo de vida](#Ciclo%20de%20vida)
- ¿Cuáles son las cuatro fases y el objetivo de cada una? :: **Inicio** (factibilidad, alcance, boceto de arquitectura) · **Elaboración** (línea base de la arquitectura, esqueleto del sistema) · **Construcción** (desarrollar el producto) · **Transición** (instalarlo y que lo usen los usuarios). [→ Las cuatro fases](#Las%20cuatro%20fases)
- ¿Por qué la arquitectura tiene que quedar definida al terminar la elaboración? :: Porque **cambiarla después cuesta mucho**. El PU admite el cambio de requisitos, pero pide la arquitectura estable al final de la elaboración. [→ Las cuatro fases](#Las%20cuatro%20fases)
- ¿Qué es un hito? :: Un **punto de control**. Hay hitos menores al final de cada iteración y uno principal al final de cada fase. [→ Ciclo de vida](#Ciclo%20de%20vida)
- ¿Cuáles son los flujos de trabajo fundamentales (disciplinas)? :: **Requisitos, análisis, diseño, implementación y prueba**. En las primeras iteraciones pesan requisitos y análisis; en las últimas, diseño, implementación y prueba. [→ Flujos de trabajo y disciplinas](#Flujos%20de%20trabajo%20y%20disciplinas)
- Trabajador, actividad y artefacto :: **Trabajador**: un rol (en RUP se llama "rol"). **Actividad**: una responsabilidad bien definida que un trabajador hace con artefactos de entrada y produce artefactos de salida. **Artefacto**: cualquier producto del proceso (modelo, ejecutable, prototipo). [→ Conceptos clave](#Conceptos%20clave)
- ¿Qué diferencias hay entre PUDS y RUP? :: RUP deriva del PU: usa **rol** en lugar de trabajador, tiene **más disciplinas** (y junta algunas del PU) y **mucho más detalle**. [→ Conceptos clave](#Conceptos%20clave)
- ¿Cuáles son los dos entregables clave de la fase de Construcción? :: El **software ejecutable** (capacidad operativa inicial) y la **descripción de la arquitectura mantenida y mínimamente actualizada**. La línea base de la arquitectura es de Elaboración. [→ Las cuatro fases](#Las%20cuatro%20fases)
- ¿Qué beneficios da el enfoque iterativo e incremental? :: **Retroalimentación temprana y continua**, **más calidad** (se corrigen errores constantemente, y antes es más barato) y **más adaptabilidad al cambio**. [→ Las tres características](#Las%20tres%20características)

## Cuestionario

1. ¿Cuáles son las tres características fundamentales del Proceso Unificado?
   - [x] Dirigido por casos de uso
   - [x] Centrado en la arquitectura
   - [x] Iterativo e incremental
   - [ ] Dirigido por las pruebas
   > Dirigido por pruebas es TDD, de XP. Las tres del PU son innegociables. [→ Las tres características](#Las%20tres%20características)
2. ¿Qué define un proceso de desarrollo según las filminas?
   - [x] Quién hace las cosas, qué actividades se hacen, qué se produce y cuándo
   - [ ] Sólo el cómo se programa cada componente
   - [ ] El lenguaje y las herramientas a usar
   - [ ] El presupuesto y el cronograma del proyecto
   > El "cómo" sería demasiado prescriptivo; y el proceso no se ata a una tecnología. [→ Qué es el PUDS](#Qué%20es%20el%20PUDS)
3. ¿Qué elementos componen las 4P + H?
   - [x] Personas, proyecto, producto, proceso y herramientas
   - [ ] Planificación, prueba, programación, producción y hardware
   - [ ] Personas, presupuesto, plazos, prioridades y herramientas
   - [ ] Proceso, plan, prototipo, producto y hitos
   > El proceso es la plantilla del proyecto; a las personas se las considera por su rol (trabajador). [→ Qué es el PUDS](#Qué%20es%20el%20PUDS)
4. En el PU, un incremento…
   - [x] no necesariamente agrega funcionalidad: puede ser una mejora, una refactorización o un reemplazo
   - [ ] siempre agrega funcionalidad nueva
   - [ ] se entrega siempre al cliente
   - [ ] sólo ocurre en la fase de construcción
   > Los incrementos de cada iteración suelen ser versiones internas. [→ Las tres características](#Las%20tres%20características)
5. ¿En qué fase se define la línea base de la arquitectura y el esqueleto del sistema?
   - [x] Elaboración
   - [ ] Inicio
   - [ ] Construcción
   - [ ] Transición
   > En inicio hay sólo un boceto de arquitectura; cambiarla después de la elaboración cuesta mucho. [→ Las cuatro fases](#Las%20cuatro%20fases)
6. ¿Cuál es uno de los objetivos principales de la fase de inicio?
   - [x] Identificar la factibilidad del proyecto
   - [ ] Desarrollar el software ejecutable completo
   - [ ] Instalar el producto en el sitio del cliente
   - [ ] Fijar la arquitectura definitiva
   > En inicio se arma una vista de características y un boceto de la arquitectura. [→ Las cuatro fases](#Las%20cuatro%20fases)
7. ¿En qué fase el artefacto más importante es el software ejecutable y deberían estar definidos todos los casos de uso?
   - [x] Construcción
   - [ ] Elaboración
   - [ ] Inicio
   - [ ] Transición
   > Al final de construcción el sistema está casi completo, aunque no libre de errores. [→ Las cuatro fases](#Las%20cuatro%20fases)
8. ¿Qué pasa en la fase de transición?
   - [x] El producto se instala donde debe funcionar, lo empiezan a usar los usuarios y se hacen correcciones
   - [ ] Se define el alcance y la factibilidad
   - [ ] Se congela la arquitectura
   - [ ] Se hace el mantenimiento evolutivo por años
   > Pueden aparecer casos de uso menores; al terminarla termina un ciclo. No es mantenimiento. [→ Las cuatro fases](#Las%20cuatro%20fases)
9. ¿Cómo se desplaza el esfuerzo entre flujos de trabajo a lo largo de las iteraciones?
   - [x] De requisitos y análisis en las primeras iteraciones hacia diseño, implementación y prueba en las últimas
   - [ ] Todas las iteraciones tienen el mismo peso en cada flujo
   - [ ] De la prueba hacia los requisitos
   - [ ] Cada fase hace un solo flujo de trabajo, como en cascada
   > El PU toma las disciplinas de la cascada pero las repite en cada iteración con distinto énfasis. [→ Flujos de trabajo y disciplinas](#Flujos%20de%20trabajo%20y%20disciplinas)
10. Lo que en RUP se llama "rol", en el PU se llama…
    - [x] trabajador
    - [ ] actor
    - [ ] artefacto
    - [ ] actividad
    > El actor es externo al sistema; el trabajador es un rol dentro del proceso. [→ Conceptos clave](#Conceptos%20clave)
11. Dos modelos del PU están unidos por una relación de traza. ¿Qué implica?
    - [x] Los une sin agregarles información, así cada modelo sigue siendo autocontenido
    - [ ] Un modelo copia toda la información del otro
    - [ ] No se puede leer uno sin el otro
    - [ ] Son el mismo modelo en dos notaciones
    > Un modelo depende del anterior para construirse, pero se entiende por sí solo. [→ Conceptos clave](#Conceptos%20clave)
12. Comparado con el modelo de diseño, el modelo de análisis es…
    - [x] conceptual, genérico, menos formal y más barato (1:5)
    - [ ] físico, específico de la implementación y más caro
    - [ ] el que se mantiene durante todo el ciclo de vida
    - [ ] el que tiene más capas y estereotipos
    > Las otras opciones describen al modelo de diseño. [→ Flujos de trabajo y disciplinas](#Flujos%20de%20trabajo%20y%20disciplinas)
13. ¿Cuáles son entregables clave de la fase de Construcción del PUDS? (recuperatorio 2024)
    - [x] El software ejecutable: la versión inicial con capacidad operativa
    - [x] La descripción de la arquitectura mantenida y mínimamente actualizada
    - [ ] La línea base de la arquitectura
    - [ ] La lista de riesgos actualizada
    - [ ] Manuales y materiales de capacitación para el usuario final, el operador y el administrador
    > La línea base es de Elaboración; en Construcción la arquitectura sólo se mantiene al día. Se erró en el recu 2024 marcando sólo el ejecutable. [→ Las cuatro fases](#Las%20cuatro%20fases)
14. ¿Cuál es la principal razón por la que el Proceso Unificado utiliza un enfoque iterativo e incremental? *(cátedra)*
    - [ ] Para reducir los costos de desarrollo.
    - [ ] Para facilitar la incorporación de nuevas tecnologías.
    - [ ] Para maximizar la reutilización de código.
    - [x] Para manejar mejor los riesgos y permitir la retroalimentación temprana.
    > Cada iteración ataca primero los riesgos más grandes y muestra resultados pronto. [→ Las tres características](#Las%20tres%20caracter%C3%ADsticas)
15. ¿Cuáles de los siguientes factores influyen directamente en la arquitectura según el PUDS? *(cátedra)*
    - [x] Los casos de uso más importantes.
    - [x] Los requisitos no funcionales (rendimiento, disponibilidad, confiabilidad, etc.).
    - [ ] Las preferencias individuales de los programadores.
    - [x] Los patrones arquitectónicos.
    > Sección 4.3 del libro (casos de uso y arquitectura): también los patrones arquitectónicos; en 2025 se olvidó esa opción. [→ Las tres características](#Las%20tres%20caracter%C3%ADsticas)
16. ¿Cuál es el propósito principal de un hito en el Proceso Unificado? *(cátedra)*
    - [ ] Completar la codificación de un módulo específico del sistema.
    - [ ] Establecer los costos finales del proyecto.
    - [x] Proporcionar un punto de evaluación para decidir la continuación o ajuste del proyecto.
    - [ ] Definir el alcance total del proyecto desde el inicio.
    > Al final de cada fase hay un hito donde se decide si seguir, ajustar o cancelar. [→ Ciclo de vida](#Ciclo%20de%20vida)
17. ¿Cuál de las siguientes afirmaciones sobre los flujos de trabajo en el Proceso Unificado es correcta? *(cátedra)*
    - [x] El flujo de trabajo de diseño suele tener más actividad durante la fase de elaboración.
    - [ ] El flujo de trabajo de implementación comienza solo después de que todos los requisitos estén completamente definidos.
    - [ ] El flujo de trabajo de prueba solo se realiza en la fase de transición.
    - [ ] Los flujos de trabajo no se pueden superponer.
    > Los flujos se superponen en todas las fases; sólo cambia el esfuerzo. (La captura de 2025 no muestra la corrección; las otras tres contradicen el PU.) [→ Flujos de trabajo y disciplinas](#Flujos%20de%20trabajo%20y%20disciplinas)
18. ¿Cuál de los siguientes artefactos es el foco de la fase de elaboración? *(cátedra)*
    - [ ] Elaborar el plan para la fase de transición
    - [x] Establecer la línea base de la arquitectura
    - [ ] Completar el modelo de Diseño
    - [ ] Elaborar la versión beta del producto final
    > La beta es de construcción y transición; el modelo de diseño se completa en construcción. [→ Las cuatro fases](#Las%20cuatro%20fases)

## Contenido

### Qué es el PUDS

- Un **proceso de desarrollo** organiza las tareas y guía al equipo. Define **quién** hace las cosas, **qué** actividades, **qué** se produce (artefactos) y **cuándo** (secuencia). El **cómo** ya sería demasiado prescriptivo. Debe poder evolucionar y no atarse a una tecnología (doc 13, p. 3).
- El **PUDS** es un **marco de trabajo de proceso** (*process framework*) general, **dirigido por casos de uso, centrado en la arquitectura e iterativo e incremental** (pp. 1 y 4).
  - Suele asociarse a una **metodología prescriptiva** (dice qué hacer), pero no hace falta tomar todo: se **especializa** para cada proyecto. Un **proyecto es una instancia del proceso**.
  - Está **cargado de modelos** (a diferencia de Scrum o XP) y pensado para **proyectos grandes y rigurosos**, donde no se admiten muchos errores.
  - Viene de **Jacobson**, uno de los tres autores de UML. Una crítica: hoy casi no se usa.
- **4P + H** (p. 5):
  - **Proceso**: la plantilla del proyecto.
  - **Proyecto**: donde participan muchas personas con distintos roles.
  - **Personas**: se las considera por su rol, el **trabajador**. El proceso se orienta a las personas: tiene que servirle a quien lo usa.
  - **Producto**: el ejecutable y, además, los modelos.
  - **Herramientas**: sin ellas es inviable.

### Las tres características

1. **Dirigido por casos de uso** (p. 8): los casos de uso son el **punto de partida y el conductor** de todo el proceso; a partir de ellos se hacen requisitos, análisis, diseño, implementación y pruebas. Es **innegociable**: sin casos de uso no hay PU. La **realización de un caso de uso** (su diseño con objetos) es una parte importante.
2. **Centrado en la arquitectura** (p. 9): se enfoca en las **decisiones significativas**: estructura, componentes, interfaces y vistas. Se empieza bosquejando la arquitectura y definiendo los **3 o 4 casos de uso más importantes** (no sólo por funcionalidad: si hay muchos usuarios, quizás microservicios). La arquitectura se construye **de a poco**, junto con el sistema.
3. **Iterativo e incremental** (p. 11): cada fase tiene iteraciones que pasan por los flujos de trabajo. Un incremento **no necesariamente es aditivo**: puede ser una modificación, una refactorización o reemplazar algo hecho. La planificación depende de los casos de uso elegidos, y el proceso es **dirigido por el riesgo**: lo más riesgoso se ataca primero.

Casos de uso y arquitectura se equilibran: los casos de uso dicen **qué** tiene que hacer el sistema, y la arquitectura da la **forma** donde se realizan *(explicación del tutor)*.

**Beneficios** (p. 12): **retroalimentación temprana y continua** · **mayor calidad** (corregir al principio es mucho más barato) · **mayor adaptabilidad al cambio**, de forma controlada (los requisitos van a cambiar).

### Ciclo de vida

- El desarrollo es una **serie de ciclos**. Cada ciclo termina en una **versión** (*release*) del producto, que incluye el ejecutable y los modelos (doc 13, p. 13).
- Cada ciclo tiene **cuatro fases**; cada fase, **iteraciones**; cada iteración pasa por los flujos de trabajo.
- Cada iteración produce una **versión interna o incremento**: no se entrega al cliente, pero permite ver el progreso, probar y recibir retroalimentación. Hay releases **externas** (para el cliente) e **internas** (para el equipo).
- **Hito**: un **punto de control**. Al final de cada iteración hay **hitos menores** (p. 16). Al final de cada fase hay un **hito principal**, donde se decide si se sigue *(explicación del tutor, según Jacobson)*:

| Fase | Hito principal al terminar |
|---|---|
| Inicio | Objetivos del ciclo de vida |
| Elaboración | **Arquitectura del ciclo de vida** (la nombra la fuente) |
| Construcción | Capacidad operativa inicial |
| Transición | Versión del producto |

- **Ciclo**: termina cuando termina la fase de transición.

### Las cuatro fases

| Fase | Objetivo | Qué queda al final |
|---|---|---|
| **Inicio** | Identificar la **factibilidad**; definir el alcance | Vista de **características**, **boceto de arquitectura**, modelo de negocio o de dominio, casos de uso principales |
| **Elaboración** | Fijar la **línea base de la arquitectura** | Arquitectura definida o muy parecida a la final, **esqueleto** del sistema, casi todos los casos de uso: el **qué**, no el cómo |
| **Construcción** | **Desarrollar** el producto | **Software ejecutable** casi completo, todos los casos de uso definidos; no libre de errores |
| **Transición** | **Instalarlo** y que lo usen los usuarios finales | Producto **funcionando en el sitio del cliente**, con correcciones y casos de uso menores |

- **Inicio** (p. 29): ser iterativo e incremental lo hace menos riesgoso. El **modelo de negocio** describe el dominio en alto nivel; su caso especial es el **modelo de dominio** (clases conceptuales). Además, valida si la solución propuesta resuelve el problema para los usuarios y clientes (`2do Parcial - Powers de Clase (2), pp. 143–145`).
- **Elaboración** (p. 30): al final la arquitectura tiene que estar definida, porque **cambiarla después cuesta mucho**; el PU admite cambios de requisitos, no de arquitectura. Se fija la **línea base de la arquitectura** (`2do Parcial - Powers de Clase (2), pp. 143–145`) y se llega a capturar cerca del **80% de los requisitos** (`Apunte Ivo 2do Parcial, p. 190`, apunte de estudiante), a diferencia de Construcción (donde se implementa el sistema final). Trampa de `Segundo Parcial Teoria 2024, P10` *(cátedra)*: "captura casos de uso hasta ~80%" y "crea una línea base de la arquitectura" son **distractores de Inicio**; Inicio es **delimitar el alcance** y **demostrar a usuarios o clientes que el sistema propuesto resuelve su problema**. Se mira el proyecto más a largo plazo. Cuesta distinguirla de la construcción: la construcción es implementar el sistema final.
- **Construcción** (p. 31): el artefacto más importante es el **ejecutable**. Para la cátedra (`2do recu parcial Teoria 2024, P4`, clave de Moodle) los **entregables clave** son dos: el **software ejecutable**, la versión de **capacidad operativa inicial**, y la **descripción de la arquitectura mantenida y mínimamente actualizada** (la arquitectura ya quedó fijada en Elaboración: en Construcción sólo se mantiene al día). Distractores de esa pregunta: **línea base de la arquitectura** (es de Elaboración), **lista de riesgos actualizada** y **manuales y materiales de capacitación para usuario final, operador y administrador**. Ojo: `Apunte Segundo Parcial - Celina` (apunte de estudiante) pone "manuales del usuario" entre los artefactos de Construcción; en el examen, la clave no los aceptó.
- **Transición** (p. 32): los artefactos son los mismos que en construcción. No es mantenimiento: se corrigen detalles que no se vieron al construir.

### Flujos de trabajo y disciplinas

- **Flujo de trabajo fundamental** (*core workflow*) = **disciplina**: un agrupamiento de actividades que, al ejecutarse, toma una secuencia y lo realizan los trabajadores (doc 13, pp. 20 y 27). Se distingue del **flujo de trabajo de la iteración**, que representa el trabajo concreto dentro de una iteración particular (`2do Parcial - Powers de Clase (2), p. 134`).
- La cascada es fácil de entender pero no es realista: el PU toma sus disciplinas y las **repite en cada iteración**.
- **Disciplinas básicas**: **requisitos → análisis → diseño → implementación → prueba** (p. 33) — ver detalle por disciplina en [Flujos de trabajo del PU](flujos-de-trabajo-del-pu.md):
  - **Requisitos**: se arma el **modelo de casos de uso**.
  - **Análisis**: un modelo **conceptual**, con menos detalle; también **realiza casos de uso**, pero de manera conceptual (`2do Parcial - Powers de Clase (2), p. 129`).
  - **Diseño**: llevar esas clases a una **tecnología** (lenguaje, ventanas, framework); realiza los casos de uso de forma física (`2do Parcial - Powers de Clase (2), p. 129`).
  - **Implementación**: **ejecutables** y componentes.
  - **Prueba**: casos y procedimientos de prueba.
- **Cómo cambia el énfasis** (doc 14, p. 2): en las primeras iteraciones pesan **requisitos y análisis**; en las últimas, **diseño, implementación y prueba**.

| | Modelo de análisis | Modelo de diseño |
|---|---|---|
| Naturaleza | **Conceptual**, genérico | **Físico**, un plano de la implementación |
| Estereotipos | Tres: **control, entidad e interfaz** | Los que pida el lenguaje |
| Formalidad y costo | Menos formal, más barato (1:5) | Más formal, más caro (5:1) |
| Mantenimiento | Puede no mantenerse todo el ciclo | Se mantiene durante todo el ciclo de vida |

### Conceptos clave

- **Trabajador** (*worker*): el nombre abstracto del **rol** que cumple una persona; un **concentrador de responsabilidades**. En un proyecto, a cada trabajador se le asigna una o más personas. En **RUP** se llama **rol** (doc 13, pp. 22 y 27). El **Arquitecto** participa en requisitos, análisis, diseño e implementación (sólo sale en prueba) (`2do Parcial - Powers de Clase (2), pp. 136, 157`).
- **Actividad**: una responsabilidad bien definida de un trabajador dentro de un flujo, con **artefactos de entrada** que usa y **de salida** que produce.
- **Artefacto**: cualquier producto o parte del sistema: modelos, ejecutables, prototipos de interfaz. (Lo que en UML era un "artefacto", en el PU es un **componente**.) Los artefactos se mantienen **versionados** a lo largo de las iteraciones (`2do Parcial - Powers de Clase (2), pp. 136, 157`). Dentro de las **4P+H** (cuatro P más Herramientas), el Apéndice C clasifica herramientas de requisitos, modelado visual, programación, QA/regresión y control de versiones/configuración/defectos (`2do Parcial - Powers de Clase (2), p. 121`).
- **Modelo**: es **autocontenido**: se entiende solo, aunque tenga **relaciones de traza** con otros. La traza **une sin agregar información** (por eso los modelos siguen siendo autocontenidos), aunque para construir un modelo se dependa del anterior.
- **PUDS vs. RUP** (p. 26): RUP deriva del PU y a veces se lo llama "proceso unificado", pero no son lo mismo. RUP usa **rol** en vez de trabajador, tiene **más disciplinas** (y junta algunas del PU) y **mucho más detalle**.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Captura de requisitos en el PU](captura-de-requisitos-en-el-pu.md): el primer flujo de trabajo en detalle.
- [Arquitectura de software](arquitectura-de-software.md): las vistas 4+1 que usa el PU.
- [Patrones GRASP](patrones-grasp.md#Artefactos%20que%20entran%20al%20diseño%20de%20objetos): la realización de casos de uso (Guía de TP N° 6).
- [Modelado Ágil](modelado-agil.md#AM%20con%20XP%20y%20con%20RUP): cómo adoptar prácticas ágiles en RUP.
