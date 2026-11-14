# Atributos de calidad y tácticas arquitectónicas
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 4 · Peso 2 (**Parcial 2 / IE5**, clases de Arquitectura I)
> · Fuentes: `2do Parcial - Powers de Clase (2).pdf` (pp. 30–31, 45–68) y
> `DSI-03-Arquitectura I - Bass SW Architecture in Practice 4ed.pdf` (cap. 3 pp. 59–70, cap. 8
> Modifiability pp. 154–170 y cap. 9 Performance pp. 172–192). El concepto general de arquitectura,
> estructuras y vistas 4+1 está en [Arquitectura de software y diseño arquitectónico](arquitectura-de-software.md),
> y seguridad en [Seguridad de software](seguridad-de-software.md).

## Preguntas de recuperación

- ¿Qué es un atributo de calidad? :: Una propiedad medible o testeable que indica qué tan bien el sistema satisface a los stakeholders, más allá de la funcionalidad. [→ Atributos de calidad, funcionalidad y arquitectura](#Atributos%20de%20calidad%2C%20funcionalidad%20y%20arquitectura)
- ¿Por qué la funcionalidad no determina la arquitectura? :: Porque cualquier estructura, hasta un monolito, puede cumplirla; lo que le da forma a la arquitectura son los requisitos no funcionales. [→ Atributos de calidad, funcionalidad y arquitectura](#Atributos%20de%20calidad%2C%20funcionalidad%20y%20arquitectura)
- ¿Qué organización arquitectónica conviene según el atributo prioritario? :: Rendimiento: pocas operaciones críticas en pocos componentes de una misma máquina. Seguridad: capas, con lo crítico adentro. Safety: lo crítico en uno o pocos componentes. Disponibilidad: componentes redundantes. Mantenibilidad: componentes reemplazables, productores separados de consumidores. [→ Qué organización arquitectónica elegir según el atributo prioritario](#Qu%C3%A9%20organizaci%C3%B3n%20arquitect%C3%B3nica%20elegir%20seg%C3%BAn%20el%20atributo%20prioritario)
- ¿Cuáles son las 6 partes de un escenario de calidad? :: Fuente del estímulo, estímulo, artefacto, entorno, respuesta y medida de la respuesta. [→ Especificación mediante escenarios de calidad (6 partes)](#Especificaci%C3%B3n%20mediante%20escenarios%20de%20calidad%20%286%20partes%29)
- ¿Qué tres problemas de hablar informalmente de atributos resuelven los escenarios? :: Definiciones no testeables, categorías que se solapan y vocabularios distintos según la comunidad. [→ Especificación mediante escenarios de calidad (6 partes)](#Especificaci%C3%B3n%20mediante%20escenarios%20de%20calidad%20%286%20partes%29)
- Diferenciá táctica y patrón arquitectónico. :: Táctica: decisión puntual que afecta la respuesta de un solo atributo. Patrón: solución probada que empaqueta varias tácticas y por eso trae compromisos entre atributos. [→ Tácticas vs. patrones arquitectónicos](#T%C3%A1cticas%20vs.%20patrones%20arquitect%C3%B3nicos)
- ¿Qué cuatro preguntas plantea la modificabilidad? :: Qué puede cambiar, qué probabilidad tiene el cambio, cuándo se hace y quién lo hace, y cuánto cuesta. [→ Cuatro preguntas de planificación](#Cuatro%20preguntas%20de%20planificaci%C3%B3n)
- ¿Cuándo conviene crear un mecanismo de cambio? :: Cuando N × costo sin mecanismo supera el costo de crearlo + N × costo con mecanismo. [→ Cuatro preguntas de planificación](#Cuatro%20preguntas%20de%20planificaci%C3%B3n)
- ¿Cuáles son las variantes de la modificabilidad? :: Escalabilidad (horizontal o vertical), variabilidad, portabilidad e independencia de ubicación. [→ Modificabilidad (Bass, cap. 8)](#Modificabilidad%20%28Bass%2C%20cap.%208%29)
- ¿Qué categorías de tácticas de modificabilidad hay? :: Aumentar la cohesión, reducir el acoplamiento y diferir el enlace (binding). [→ Modificabilidad (Bass, cap. 8)](#Modificabilidad%20%28Bass%2C%20cap.%208%29)
- Nombrá tácticas para reducir el acoplamiento. :: Encapsular, usar un intermediario, abstraer servicios comunes y restringir dependencias. [→ Modificabilidad (Bass, cap. 8)](#Modificabilidad%20%28Bass%2C%20cap.%208%29)
- ¿Qué patrones favorecen la modificabilidad? :: Cliente-servidor, plug-in (microkernel), capas y publicador-suscriptor. [→ Modificabilidad (Bass, cap. 8)](#Modificabilidad%20%28Bass%2C%20cap.%208%29)
- ¿De qué dos contribuciones sale el tiempo de respuesta? :: Del tiempo de procesamiento (consumo de recursos) y del tiempo bloqueado (contención, recurso no disponible o dependencia de otro cómputo). [→ Rendimiento (Performance, Bass, cap. 9)](#Rendimiento%20%28Performance%2C%20Bass%2C%20cap.%209%29)
- ¿Cuáles son las 2 categorías de tácticas de rendimiento? :: Controlar la demanda de recursos y gestionar los recursos. [→ Rendimiento (Performance, Bass, cap. 9)](#Rendimiento%20%28Performance%2C%20Bass%2C%20cap.%209%29)
- ¿Por qué reducir la sobrecarga computacional choca con la modificabilidad? :: Porque saca intermediarios e indirecciones, que son justamente tácticas de modificabilidad. [→ Rendimiento (Performance, Bass, cap. 9)](#Rendimiento%20%28Performance%2C%20Bass%2C%20cap.%209%29)
- Nombrá patrones de rendimiento. :: Service mesh, balanceador de carga, throttling y map-reduce. [→ Rendimiento (Performance, Bass, cap. 9)](#Rendimiento%20%28Performance%2C%20Bass%2C%20cap.%209%29)
- Diferenciá escalado horizontal y vertical. :: Horizontal: más instancias o nodos (elasticidad en la nube). Vertical: más CPU o memoria en la misma máquina. [→ Modificabilidad (Bass, cap. 8)](#Modificabilidad%20%28Bass%2C%20cap.%208%29)

## Cuestionario

1. ¿Cuál de las siguientes es la definición más acertada del objetivo de modificabilidad? *(cátedra)*
   - [ ] Una medida de la calidad de un programa, a veces expresada como tiempo medio entre fallos
   - [ ] El grado en que un sistema puede corregirse fácilmente cuando se descubren errores durante su vida productiva
   - [x] La capacidad de un sistema de ser cambiado o mejorado para satisfacer las necesidades de un usuario durante su vida productiva
   - [ ] La capacidad de un sistema de usarse ampliamente, adaptarse a muchas variaciones y funcionar en muchos entornos
   > La primera es fiabilidad; la segunda, sólo corrección de errores; la cuarta se parece a portabilidad. [→ Modificabilidad (Bass, cap. 8)](#Modificabilidad%20%28Bass%2C%20cap.%208%29)
2. Si el atributo prioritario es la disponibilidad, ¿qué organización conviene?
   - [x] Componentes replicados o redundantes
   - [ ] Capas, con lo crítico en las internas
   - [ ] Las operaciones críticas en pocos componentes de una misma máquina
   - [ ] Componentes reemplazables, con productores separados de consumidores
   > Capas = seguridad; pocos componentes juntos = rendimiento; reemplazables = mantenibilidad. [→ Qué organización arquitectónica elegir según el atributo prioritario](#Qu%C3%A9%20organizaci%C3%B3n%20arquitect%C3%B3nica%20elegir%20seg%C3%BAn%20el%20atributo%20prioritario)
3. Si el atributo prioritario es el rendimiento, ¿qué organización conviene?
   - [ ] Muchos componentes distribuidos en red
   - [x] Las operaciones críticas en pocos componentes, en la misma máquina
   - [ ] Capas con dependencias unidireccionales
   - [ ] Componentes redundantes
   > Cada salto por la red o por una capa suma latencia. [→ Qué organización arquitectónica elegir según el atributo prioritario](#Qu%C3%A9%20organizaci%C3%B3n%20arquitect%C3%B3nica%20elegir%20seg%C3%BAn%20el%20atributo%20prioritario)
4. En el escenario "500 usuarios inician 2.000 peticiones en 30 s; el sistema las procesa todas con latencia promedio de 2 s", ¿qué es "latencia promedio de 2 s"?
   - [x] La medida de la respuesta
   - [ ] La respuesta
   - [ ] El estímulo
   - [ ] El entorno
   > La respuesta es "procesa todas las peticiones"; la medida es el número que la verifica. [→ Especificación mediante escenarios de calidad (6 partes)](#Especificaci%C3%B3n%20mediante%20escenarios%20de%20calidad%20%286%20partes%29)
5. ¿Cuáles son partes de un escenario de atributo de calidad?
   - [x] Fuente del estímulo
   - [x] Artefacto
   - [x] Entorno
   - [x] Medida de la respuesta
   - [ ] Táctica aplicada
   > Las 6 partes son fuente, estímulo, artefacto, entorno, respuesta y medida; la táctica es la decisión de diseño que se toma para cumplirlo. [→ Especificación mediante escenarios de calidad (6 partes)](#Especificaci%C3%B3n%20mediante%20escenarios%20de%20calidad%20%286%20partes%29)
6. ¿Qué diferencia una táctica de un patrón arquitectónico?
   - [x] La táctica afecta a un solo atributo; el patrón empaqueta varias tácticas y trae compromisos
   - [ ] La táctica es de bajo nivel (código) y el patrón de alto nivel
   - [ ] Las tácticas se inventan para cada sistema; los patrones son probados
   - [ ] No hay diferencia: son sinónimos en Bass
   > Las tácticas tampoco se inventan: formalizan lo que hacen los buenos arquitectos. [→ Tácticas vs. patrones arquitectónicos](#T%C3%A1cticas%20vs.%20patrones%20arquitect%C3%B3nicos)
7. ¿Qué tácticas sirven para reducir el acoplamiento?
   - [x] Encapsular
   - [x] Usar un intermediario
   - [x] Restringir dependencias
   - [ ] Dividir el módulo
   - [ ] Introducir concurrencia
   > Dividir el módulo aumenta la cohesión; la concurrencia es una táctica de rendimiento. [→ Modificabilidad (Bass, cap. 8)](#Modificabilidad%20%28Bass%2C%20cap.%208%29)
8. ¿Cuáles son tácticas de "gestionar los recursos" en rendimiento?
   - [x] Introducir concurrencia
   - [x] Mantener múltiples copias de datos (caché)
   - [x] Planificar recursos
   - [ ] Priorizar eventos
   - [ ] Acotar tiempos de ejecución
   > Priorizar eventos y acotar tiempos son de "controlar la demanda de recursos". [→ Rendimiento (Performance, Bass, cap. 9)](#Rendimiento%20%28Performance%2C%20Bass%2C%20cap.%209%29)
9. ¿Qué táctica de rendimiento entra en conflicto con la modificabilidad?
   - [x] Reducir la sobrecarga computacional (sacar intermediarios)
   - [ ] Aumentar recursos
   - [ ] Introducir concurrencia
   - [ ] Acotar el tamaño de las colas
   > Los intermediarios bajan el acoplamiento, pero cada uno agrega tiempo de procesamiento. [→ Rendimiento (Performance, Bass, cap. 9)](#Rendimiento%20%28Performance%2C%20Bass%2C%20cap.%209%29)
10. ¿Qué patrones menciona Bass para favorecer la modificabilidad?
    - [x] Capas
    - [x] Publicador-suscriptor
    - [x] Plug-in (microkernel)
    - [ ] Balanceador de carga
    - [ ] Map-reduce
    > Balanceador y map-reduce son patrones de rendimiento. [→ Modificabilidad (Bass, cap. 8)](#Modificabilidad%20%28Bass%2C%20cap.%208%29)
11. ¿Qué atributos remarcó la cátedra que se evalúan en detalle en el parcial?
    - [x] Modificabilidad
    - [x] Rendimiento
    - [ ] Usabilidad
    - [ ] Disponibilidad
    > "La más importante" es modificabilidad; el segundo foco, rendimiento. [→ Modificabilidad (Bass, cap. 8)](#Modificabilidad%20%28Bass%2C%20cap.%208%29)

## Atributos de calidad, funcionalidad y arquitectura

Un **atributo de calidad** es una propiedad **medible o testeable** del sistema que indica qué tan bien satisface las necesidades de los *stakeholders* más allá de la funcionalidad básica (`Bass cap. 3, pág. 59`; `Powers, pág. 45`).

- **Funcionalidad vs. arquitectura**: la funcionalidad (*qué hace* el sistema) no determina la arquitectura —un monolito sin estructura podría cumplirla—; es el mapeo de responsabilidades sobre estructuras orientado a los **requisitos no funcionales** lo que da forma a la arquitectura (`Bass cap. 3, págs. 59–60`; `Powers, pág. 45`).
- **Dos grandes categorías** (`Bass cap. 3, pág. 62`; `Powers, pág. 61`):
  - **En tiempo de ejecución**: disponibilidad, rendimiento (*performance*), seguridad (*security*), usabilidad, etc.
  - **En tiempo de desarrollo**: **modificabilidad**, testeabilidad, desplegabilidad (*deployability*), etc.
- **Compromisos (*trade-offs*)**: nunca se optimiza un atributo de manera aislada; mejorar uno suele degradar otro —por ejemplo, aislar dependencias para portabilidad o agregar capas para modificabilidad suele penalizar el rendimiento (`Bass cap. 3, pág. 62`).
- **Estructuras y vistas vinculadas** (`Bass cap. 1–3`, en relación con `Powers, págs. 33–43`): las estructuras de **módulos** son la base para razonar sobre **modificabilidad**, mientras que las de **componentes y conectores (C&C)** son cruciales para razonar sobre **rendimiento, seguridad y disponibilidad**.

### Qué organización arquitectónica elegir según el atributo prioritario

En clase se remarcó como *"una de las preguntas más importantes"* (`Powers, págs. 30–31`):

| Atributo prioritario | Organización arquitectónica sugerida (`Powers, pág. 31`) |
|---|---|
| **Rendimiento** (*Performance*) | Minimizar operaciones críticas concentrándolas en pocos componentes y ubicándolos en una misma máquina antes que separados en red |
| **Seguridad** (*Security*, ataques intencionales) | Arquitectura en **capas**, protegiendo especialmente las capas internas/críticas |
| **Protección física** (*Safety*, fallos no intencionales) | Operaciones críticas en uno o pocos componentes para aislar fallas y apagar sin propagar daño |
| **Disponibilidad** (*Availability*) | Componentes **replicados / redundantes** para tolerar caídas |
| **Mantenibilidad** | Componentes fácilmente reemplazables, separando productores de consumidores de datos |

## Especificación mediante escenarios de calidad (6 partes)

Para evaluar una arquitectura, Bass identifica **tres problemas** de hablar de atributos de forma informal (`Bass cap. 3, págs. 61–62`; `Powers, págs. 48–49`):

1. **Definiciones no testeables**: decir *"el sistema será modificable"* no dice ante qué cambios ni en cuánto tiempo.
2. **Categorías solapadas**: un ataque DoS cae a la vez bajo disponibilidad, rendimiento, seguridad y usabilidad; debatir la etiqueta no ayuda a diseñar.
3. **Vocabularios distintos por comunidad**: rendimiento habla de *eventos*, seguridad de *ataques*, disponibilidad de *fallas* y usabilidad de *entradas del usuario*.

La solución común y verificable es especificar **escenarios de atributos de calidad** (**generales** cuando son independientes del sistema, y **concretos** al bajarlos al sistema real) con **6 partes** (`Bass cap. 3, págs. 63–64`; `Powers, pág. 49`):

| Parte | Qué especifica | Ejemplo **Modificabilidad** (`Bass cap. 8, pág. 159`) | Ejemplo **Rendimiento** (`Powers, pág. 62`; `Bass cap. 9, pág. 176`) |
|---|---|---|---|
| **1. Fuente del estímulo** | Entidad que origina el estímulo | Desarrollador | 500 usuarios |
| **2. Estímulo** | Evento o petición que llega | Desea cambiar la interfaz de usuario | Inician 2.000 peticiones en un intervalo de 30 s |
| **3. Artefacto** | Qué parte recibe el estímulo (sistema o módulo concreto) | Código de la interfaz de usuario | Sistema |
| **4. Entorno** | Estado o momento en que ocurre (operación normal, pico, desarrollo, congelamiento) | En tiempo de diseño | Operación normal |
| **5. Respuesta** | Qué debe hacer el sistema o el equipo | Se realiza y prueba el cambio sin efectos colaterales | Procesa todas las peticiones |
| **6. Medida de respuesta** | Métrica objetiva (*"si no puedo medir, no sé si la decisión fue correcta"*; `Powers, pág. 49`) | Menos de 3 horas | Latencia promedio de 2 segundos |

## Tácticas vs. patrones arquitectónicos

- **Táctica arquitectónica**: decisión de diseño puntual que influye directamente sobre cómo el sistema responde a un estímulo de **un atributo de calidad** (`Bass cap. 3, pág. 66`; `Powers, pág. 50`). No se inventan: formalizan lo que hacen los buenos arquitectos.
  - Sirven por **tres razones**: (1) adaptar/complementar un patrón cuando no alcanza tal cual; (2) construir un fragmento de diseño desde cero (*first principles*) si no hay patrón; y (3) sistematizar análisis y diseño (incluso mediante cuestionarios basados en tácticas; `Bass cap. 3, págs. 67–69`).
- **Patrón arquitectónico**: solución probada a un problema recurrente que define elementos, responsabilidades y relaciones; suele **empaquetar varias tácticas** y por eso introduce ***trade-offs*** entre atributos (`Bass cap. 3, pág. 66`; `Powers, pág. 50`).
- **Deuda arquitectónica (*architecture debt*)**: deterioro gradual de modificabilidad, rendimiento u otros atributos por decisiones locales acumuladas (*"muerte por mil cortes"*); se revierte mediante refactorización (`Bass cap. 3, págs. 66–67`).

## Modificabilidad (Bass, cap. 8)

La cátedra señaló a la **modificabilidad** (muy cercana a mantenibilidad) como *"la más importante"* y uno de los **dos atributos evaluados en detalle** junto a rendimiento (`Powers, págs. 46, 49, 51`). Busca realizar cambios con el **menor tiempo, costo y riesgo posibles** (`Bass cap. 8, pág. 154`).

### Cuatro preguntas de planificación

1. **¿Qué puede cambiar?** Funciones, plataforma (HW, SO, middleware), entorno/protocolos externos, cualidades futuras o capacidad (`Bass cap. 8, pág. 154`).
2. **¿Cuál es la probabilidad de cambio?** No se puede preparar para todo: hay que priorizar los cambios más probables (`Powers, pág. 51`).
3. **¿Cuándo ocurre y quién lo hace?** Implementación (código), compilación (*switches*), construcción (bibliotecas), configuración (parámetros) o ejecución (*plug-ins*, parámetros dinámicos), ejecutado por un desarrollador, administrador, usuario final o el propio sistema (`Bass cap. 8, págs. 154–155`; `Powers, pág. 51`).
4. **¿Cuánto cuesta?** Hay **dos costos**: el de introducir el mecanismo de cambio y el de usarlo luego (`Powers, pág. 52`). Sólo conviene crear un mecanismo si `N * costo_sin_mecanismo` supera `costo_crear_mecanismo + N * costo_con_mecanismo` (`Bass cap. 8, pág. 155`); si no se introduce mecanismo ante cambios repetidos, crece la deuda técnica (`Powers, pág. 52`).

### Variantes (*flavors*) de modificabilidad (`Powers, págs. 52–53`; `Bass cap. 8, págs. 156–157`)

- **Escalabilidad**: manejar más carga añadiendo recursos eficazmente (mejora medible, sin esfuerzo excesivo ni interrupción). Puede ser **horizontal** (*scaling out*: más instancias/nodos lógicos; llamada **elasticidad** en la nube) o **vertical** (*scaling up*: más CPU/memoria en la misma máquina). Vincula modificabilidad con rendimiento.
- **Variabilidad**: capacidad del sistema y sus artefactos para producir variantes planificadas en una **línea de productos de software**, compartiendo activos comunes.
- **Portabilidad**: facilidad para trasladar software de una plataforma a otra minimizando y aislando dependencias de plataforma (por ejemplo usando una máquina virtual como JVM).
- **Independencia de ubicación**: dos piezas distribuidas interactúan sin conocer de antemano dónde residen físicamente, permitiendo mover servicios en tiempo de ejecución vía descubrimiento.

### Tácticas de modificabilidad (`Powers, págs. 54–55`; `Bass cap. 8, págs. 160–163`)

Se fundamentan en reducir tamaño de módulo, aumentar cohesión, reducir acoplamiento y diferir el enlace (*binding*) lo más tarde posible en el ciclo de vida:

| Categoría | Tácticas concretas y efecto |
|---|---|
| **Aumentar cohesión** (responsabilidades muy relacionadas; menos probabilidad de que un cambio toque varios módulos) | **Dividir módulo** (*Split module*, también reduce tamaño) · **Redistribuir responsabilidades** (*Redistribute responsibilities*, agrupar responsabilidades afectadas por los mismos cambios) |
| **Reducir acoplamiento** (bajar la probabilidad de que cambiar un módulo propague cambios a otro) | **Encapsular** · **Usar un intermediario** (*Use an intermediary*) · **Abstraer servicios comunes** (*Abstract common services*) · **Restringir dependencias** (*Restrict dependencies*: visibilidad restringida en capas y *wrappers*) |
| **Diferir enlace (*Defer binding*)** (preparar mecanismos para fijar variaciones tarde, idealmente sin recompilar) | **Compilación/construcción**: reemplazo de componentes en *build*, parametrización en compilación, aspectos · **Despliegue/arranque**: enlace en configuración, archivos de recursos (`.properties`, `.json`, `.env`) · **Ejecución**: descubrimiento (*discovery*), interpretar parámetros, repositorios compartidos, polimorfismo |

### Patrones que favorecen modificabilidad y sus *trade-offs* (`Powers, págs. 56–60`; `Bass cap. 8, págs. 165–170`)

- **Cliente-Servidor**: separa clientes (UI) y servidor mediante descubrimiento dinámico e instancias sin o con estado; permite evolucionar y escalar por separado, pero introduce latencia/imprevisibilidad de red y riesgos de seguridad/confidencialidad.
- **Plug-in (Microkernel)**: núcleo mínimo + *plug-ins* desacoplados tras interfaces fijas; permite extensión y portabilidad por equipos externos, pero facilita vulnerabilidades e incertidumbre de privacidad en *plug-ins* de terceros.
- **En capas (*Layers*)**: particiona en capas con dependencias unidireccionales (normalmente sólo hacia la capa inferior inmediata; saltarla es *layer bridging*); favorece modificabilidad, reutilización y portabilidad multiplataforma, pero penaliza el rendimiento al atravesar capas y pierde beneficios si abunda el *bridging*.
- **Publicador-Suscriptor**: comunicación asíncrona por eventos/temas sobre un bus de invocación implícita; desacopla totalmente publicadores y suscriptores y facilita grabar/reproducir eventos, pero complica predecir latencia, resta determinismo, dificulta las pruebas y limita el cifrado extremo a extremo.

## Rendimiento (*Performance*, Bass, cap. 9)

Es el segundo atributo foco de evaluación (`Powers, pág. 49`). Trata sobre el **tiempo** y la capacidad del sistema para responder a eventos (solicitudes, mensajes, interrupciones, reloj) dentro de cotas temporales razonables (`Powers, pág. 61`; `Bass cap. 9, pág. 172`). Está ligado a la **escalabilidad** y requiere instrumentación para optimizar las zonas críticas y no micro-detalles irrelevantes (`Powers, pág. 61`). En paralelo, introducir **concurrencia** (hilos, múltiples núcleos) reduce esperas pero obliga a proteger secciones críticas contra condiciones de carrera (*race conditions*, mediante bloqueos o partición de estado; `Bass cap. 9, págs. 173–174`).

El tiempo de respuesta surge de dos contribuciones (`Powers, pág. 63`; `Bass cap. 9, págs. 177–179`):
1. **Tiempo de procesamiento y consumo de recursos**: CPU, memoria (atención al umbral de *swapping*), disco, ancho de banda de red, *thread pools* y *buffers*.
2. **Tiempo bloqueado y contención**: espera por contención de recursos exclusivos, indisponibilidad de un recurso/componente, o dependencia sincrónica con otro cómputo (agravada si cruza la red).

Métricas habituales (`Bass cap. 9, págs. 172, 185`): **latencia** (promedio y peor caso), **rendimiento / *throughput*** (solicitudes procesadas por unidad de tiempo), **variación admisible (*jitter*)** y eventos perdidos.

### Tácticas de rendimiento (`Powers, págs. 64–66`; `Bass cap. 9, págs. 179–184`)

| Categoría | Tácticas concretas |
|---|---|
| **Controlar la demanda de recursos** (*Control Resource Demand*) | **Gestionar peticiones de trabajo** (*Manage Work Requests*: acuerdos **SLA** de tasa de llegada o reducir tasa de muestreo sacando fidelidad) · **Limitar respuesta a eventos** (encolar o descartar excedentes) · **Priorizar eventos** · **Reducir sobrecarga computacional** (reducir indirección/intermediarios —**conflicto clásico con modificabilidad**—, **co-locar** recursos que se comunican mucho, limpiezas periódicas) · **Acotar tiempos de ejecución** (*Bound execution times*, p. ej. tope de iteraciones sacrificando precisión) · **Aumentar eficiencia** de algoritmos críticos |
| **Gestionar los recursos** (*Manage Resources*) | **Aumentar recursos** (HW más rápido o abundante) · **Introducir concurrencia** (paralelismo entre hilos/procesadores) · **Mantener múltiples copias de cómputos** (réplicas de servidores/servicios) · **Mantener múltiples copias de datos** (replicación + **caché** con sincronización) · **Acotar tamaños de cola** (*Bound queue sizes*) · **Planificar recursos** (*Schedule resources*: FIFO, prioridad fija como tasa/plazo monótono, prioridad dinámica como *round-robin*, *earliest-deadline-first* o *least-slack-first*) |

### Patrones de rendimiento (`Powers, págs. 66–68`; `Bass cap. 9, págs. 188–192`)

- **Service Mesh**: cada microservicio lleva un *sidecar* proxy en el mismo nodo para resolver aspectos transversales (comunicación, descubrimiento, cifrado, observabilidad, *canary*/A-B) sin mensajes de red adicionales entre servicio y utilidad; agrega procesos en memoria y sobrecarga de funciones no siempre usadas.
- **Load Balancer (Balanceador de carga)**: intermediario con único punto de contacto que distribuye peticiones entre instancias replicadas usando estrategias de planificación; oculta caídas y mantiene latencia predecible, pero si es lento degrada rendimiento y es punto único de fallo (suele replicarse).
- **Throttling (Limitación / estrangulamiento)**: intermediario que empaqueta *manage work requests* limitando solicitudes entrantes para mantener al servicio en su punto óptimo; exige lógica rápida, buffers o política ante descartes y es difícil de acoplar si cliente y servidor están muy acoplados.
- **Map-Reduce**: paralelismo distribuido para grandes volúmenes de datos sin ordenar en tres fases (**Map** filtra y agrupa por clave → **Shuffle** ordena/agrupa → **Reduce** resume a `<clave, valor>`); tolera bien fallas por partición, pero su sobrecarga no se justifica en datos chicos o particiones desbalanceadas.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Arquitectura de software y diseño arquitectónico](arquitectura-de-software.md): estructuras (módulos, C&C, asignación) y vistas 4+1.
- [Estilos arquitectónicos](estilos-arquitectonicos.md): capas, tuberías y filtros, pizarrón y MVC.
- [Seguridad de software](seguridad-de-software.md): escenario E1 de 6 partes, STRIDE y tácticas del cap. 11 de Bass.

