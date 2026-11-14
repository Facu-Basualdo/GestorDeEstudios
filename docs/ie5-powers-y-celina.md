# IE5 — lo importante de los Powers de clase y el apunte de Celina

Análisis del tutor (2026-11-14) de dos archivos de `materias/diseno-de-sistemas/material/parcial-2/`:

- **Powers**: `2do Parcial - Powers de Clase (2).pdf`, 376 págs. Son las diapositivas de la
  cátedra con las **anotaciones de estudiantes de lo que dijo el profe en clase** (13/08 a 12/11).
  Lo que va entre comillas o como "dijo" es de esas anotaciones.
- **Celina**: `Apunte Segundo Parcial - Celina.pdf`, 157 págs. Apunte de estudiante que resume
  los libros. Cubre todo menos calidad y seguridad; lo más útil son los flujos del PU (págs. 81–127).

Las citas son `Powers p. N` / `Celina p. N`. El plan general está en [diseno-ie5.md](diseno-ie5.md).

## Lo que la cátedra marcó para el parcial

| Señal | Dónde |
|---|---|
| "Arquitectura es un tema central para la materia… **va a preguntar mucho en el parcial**" | Powers p. 113 |
| De los atributos de calidad (Bass caps. 4–14) "hay dos que nos vamos a enfocar, **va a ser los que va a tomar**": **modificabilidad** ("la más importante") y **rendimiento** | Powers p. 46–49, 61 |
| "¿Qué organización arquitectónica es la mejor para cumplir con los requisitos no funcionales? **Esta es una de las preguntas más importantes**" | Powers p. 30 |
| PU: el diagrama general "**resume prácticamente todo**" | Powers p. 130 |
| Flujos del PU: "pretendemos que sepan **cada paso** [actividad], no cada subpaso" | Powers p. 213 |
| Patrones: "es importante saber **explicar y aplicar** los patrones que se ven en las clases"; Adapter "está en dos clasificaciones, por lo cual es importante su estudio" | Powers p. 295 |
| Ágiles: Gaona recomienda "**redactar un párrafo** con las propuestas principales de cada uno. **Podría preguntar** alguna idea de alguno de estos métodos" | Powers p. 327 |
| XP: "enfocarse en las **prácticas centrales**: metáfora, diseño simple, refactorización, estándares de codificación" (+ spikes) | Powers p. 342 |
| Calidad: ISO 25010 "no va a pedir que nos acordemos todos, pero **3 o 4** para dar ejemplos" | Powers p. 349 |
| Seguridad: "**tema agregado en 2026**": no hay exámenes viejos que lo tomen | Powers p. 365 |

## Seguridad (nota nueva; todo de Powers p. 365–376)

Hilo conductor de la clase: un sistema de **pedidos**; **Ana** es clienta y **Bruno** es el
malicioso, que intenta ver el pedido 1042 de Ana. El profe tacha "información" en las
definiciones: el libro habla de **datos y servicios**.

- **Seguridad como atributo de calidad**: ¿alcanza con que Bruno tenga rol de cliente para que
  no acceda a los datos de Ana? (no: hace falta autorizar **sobre cada objeto**).
- **Tríada CIA**:
  - *Confidencialidad*: sólo acceden los autorizados (Bruno no ve la dirección de Ana).
  - *Integridad*: los datos no sufrieron cambios no autorizados; no es sólo autorización,
    hay que restringir qué datos se pueden modificar.
  - *Disponibilidad*: un ataque que sobrecarga el sistema (DoS) lo vuelve problema de seguridad;
    hay que poder **detectar** que alguien está atacando.
- **Amenaza, vulnerabilidad, ataque y riesgo** (Sommerville 2016) — "riesgo y amenaza se
  parecen, pero hay una diferencia sutil":

  | Concepto | Definición | En el caso |
  |---|---|---|
  | Amenaza | Circunstancia o evento con potencial de causar daño | Un cliente puede leer pedidos ajenos |
  | Vulnerabilidad | Debilidad que puede aprovecharse para causar ese daño | La consulta busca por ID sin verificar propietario |
  | Ataque | Acción deliberada que intenta comprometer la seguridad; puede tener éxito o fracasar | Bruno solicita el pedido 1042 |
  | Riesgo | Valoración del daño potencial: **probabilidad × impacto** | Posibilidad e impacto de exponer datos de clientes |

  "La vulnerabilidad esencial es que no haya validación o autorización".
- **Escenario de seguridad E1** (las 6 partes de Bass): fuente y estímulo = Bruno autenticado
  pide el pedido de Ana · artefacto = servicio de consulta y datos del pedido 1042 · entorno =
  operación normal, sesión válida · respuesta = denegar, no devolver datos ajenos y **registrar el
  intento** · medida = cantidad de datos divulgados al no autorizado: **cero**.
- **Arquitectura**: diagrama de despliegue con puntos críticos (canal de acceso, autorización
  ausente, base expuesta, gestión expuesta, registros y copias, identidad y sesión). "Para
  seguridad ver también las **conexiones**".
- **STRIDE** (Pressman y Maxim):

  | | Amenaza | Viola | En el caso |
  |---|---|---|---|
  | **S**poofing (suplantación) | Hacerse pasar por otro usuario | autenticación | Usar la sesión robada de Ana |
  | **T**ampering (alteración) | Modificar datos sin autorización | integridad | Cambiar el importe o cancelar un pedido ajeno |
  | **R**epudiation (repudio) | Negar acciones tomadas | no repudio | Negar una cancelación sin evidencia confiable |
  | **I**nformation disclosure (divulgación) | Acceso a información confidencial | confidencialidad | Exponer la dirección o datos en un log |
  | **D**enial of service | Interrumpir el acceso a servicios | disponibilidad | Agotar recursos con consultas costosas |
  | **E**levation of privilege | Con acceso limitado, obtener derechos superiores | autorización | Ejecutar como cliente una función de operador |

  La columna "Viola" es *(agregado)*: la diapositiva no la tiene, pero es la forma usual de
  relacionar STRIDE con CIA.
- **OWASP Top 10 (2025)**: A01 Broken Access Control (es **el caso de Bruno**) · A02 Security
  Misconfiguration · A03 Software Supply Chain Failures · A04 Cryptographic Failures ·
  A05 Injection · A06 Insecure Design · A07 Authentication Failures · A08 Software or Data
  Integrity Failures · A09 Security Logging & Alerting Failures · A10 Mishandling of Exceptional
  Conditions. (Orden según la diapositiva: confirmalo contra owasp.org si lo preguntan con número.)
- **Ataques y controles de aplicación**: pedido ajeno accesible → permiso sobre **objeto y
  acción** · inyección SQL → consulta **parametrizada** y entradas acotadas · XSS → salida
  **codificada** según contexto · consulta que agota recursos → paginación, cuotas, tiempos máximos.
- **Tácticas de seguridad de Bass (cap. 11)**, cuatro familias:

  | Familia | Tácticas | En el caso |
  |---|---|---|
  | **Detectar** ataques | detectar intrusión, detectar denegación de servicio, verificar integridad del mensaje, detectar demoras anómalas en mensajes | Observar patrones anormales y denegaciones |
  | **Resistir** ataques | identificar actores, autenticar, autorizar, limitar acceso, limitar exposición, cifrar datos, separar entidades, validar entradas, cambiar credenciales | Autenticar, autorizar, cifrar y limitar exposición |
  | **Reaccionar** | revocar acceso, restringir login, informar a los actores | Revocar sesiones, restringir e informar |
  | **Recuperarse** | auditoría, no repudio | Usar evidencia y restaurar servicios y datos |

  "Para E1, la táctica central es **autorizar actores**".
- **Autenticación y sesión**: autenticar = comprobar la identidad declarada; usar un proveedor o
  framework de identidad actualizado; **MFA** para accesos sensibles; proteger, expirar y revocar
  la sesión. **Autorización** sobre cada pedido: la identidad sale de la sesión validada, la
  consulta filtra por `cliente_id = actor.id`, si no existe se responde un 404 genérico y se
  devuelven sólo los campos permitidos.
- **Protección del servidor y datos**: actualizar y ejecutar sin privilegios de administrador ·
  exponer lo necesario y separar credenciales del código · registros sin contraseñas ni sesiones ·
  aislar copias y **ensayar** una restauración.
- **Pruebas y compromisos**: Ana ve sus campos; Bruno no recibe datos ni modifica estado; si
  falla la validación, la operación queda denegada. Costos a discutir: latencia, dependencia del
  proveedor y retención de registros.

## Calidad (nota nueva; Powers p. 345–364)

- **5 puntos de vista** de la calidad, mnemotecnia **TVPUF**: **T**rascendental (se reconoce
  pero no se explica: el arte) · **V**alor (costo-beneficio que percibe quien compra) ·
  **P**roducto (características inherentes, comparables: pantalla, batería) · **U**suario (responde
  a mis necesidades) · **F**abricación (salió con los estándares del proceso).
- **Calidad de diseño** (el diseño cumple los requisitos) vs. **calidad de conformidad** (la
  implementación sigue el diseño). Ecuación de Glass: satisfacción del usuario = producto que
  funciona + buena calidad + entrega dentro del presupuesto y plazo *(la anotación quedó
  incompleta; la fórmula es la de Pressman)*.
- **Pressman**: calidad = proceso eficaz + producto útil + valor medible. "ES UN PROCESO QUE
  DURA TODO EL TIEMPO".
- **Modelos**: **McCall** (pirámide, de los más antiguos): operación, transición y revisión del
  producto. **ISO 25010**: familia de calidad del producto; saber 3 o 4 atributos para dar ejemplos
  ("Interaction Capability" = la usabilidad renombrada).
- **Evaluación**: cualitativa (preferida: hay cosas difíciles de medir) y cuantitativa; las
  métricas son **indirectas** y ninguna es perfecta: se combinan.
- **Dilema de la calidad**: equilibrio calidad–tiempo–costo; lanzar software **aceptable**
  (funciones esenciales, errores menores), con el riesgo de reputación.
- **Costo de la calidad**: prevención · evaluación (testing, revisiones, recolección de datos) ·
  **fallas** — "la que más cuesta": internas (antes de liberar) y **externas** (después; más
  costosas, generan más soporte).
- **Calidad y seguridad**: "dos caras de la misma moneda"; además de *bugs* de código hay
  *flaws*, fallas de **arquitectura**, más graves.
- **Factores de gestión** que dañan la calidad: estimaciones irreales, atajos en planificación o
  pruebas, falta de gestión de riesgos (riesgo = problema potencial).
- **Cuatro pilares**: procesos de ingeniería · buenas prácticas de gestión · **control de
  calidad (SQC)**: controlar el producto (testing) · **aseguramiento (SQA)**: más abstracto,
  controla los **procesos** ("¿los casos de prueba fueron bien planteados?").
- **Revisiones**: filtro de calidad, control **estático**; mayor impacto en **diseño** (ahí se
  introduce el 50–65 % de los errores). No retrasan: evitan retrabajo. **Error** = antes del
  release; **defecto** = después. Esfuerzo de revisión = preparación + evaluación + retrabajo.
  **Informales** (pair programming) vs. **formales (FTR)**: más formalidad cuanto más crítico el
  proyecto. Buenas prácticas: revisar el producto, no a la persona; seguir la agenda; sólo marcar
  errores, no resolverlos ahí; checklists; capacitar y registrar.
- **En ágil**: sprint planning, daily, pair programming, sprint review, retrospectiva.
- **SQA** es una actividad **sombrilla** (todo el proceso). Gaona: la **prueba necesita código
  ejecutable; la revisión no**. Control de cambios para **trazabilidad**. **Validación** = satisface
  las necesidades del usuario; cumplir estándares = control de calidad.

## Flujos del PU: análisis, diseño, implementación y prueba (nota nueva)

De Powers p. 176–273 (con el resumen de actividades en p. 250–273) y Celina p. 81–127.

| Flujo | Trabajadores | Artefactos | Actividades |
|---|---|---|---|
| **Análisis** | arquitecto, ing. de casos de uso, ing. de componentes | modelo de análisis, clase del análisis, realización de CU–análisis, paquete de análisis (y de servicio), descripción de la arquitectura (vista del análisis) | 1. análisis de la arquitectura · 2. analizar un CU · 3. analizar una clase · 4. analizar un paquete |
| **Diseño** | los mismos tres | modelo de diseño, clase de diseño, realización de CU–diseño, subsistema de diseño (y de servicio), **interfaz**, descripción de la arquitectura (vistas de diseño y de despliegue), **modelo de despliegue** | 1. diseño de la arquitectura · 2. diseñar un CU · 3. diseñar una clase · 4. diseñar un subsistema |
| **Implementación** | arquitecto, ing. de componentes, **integrador de sistemas** (nuevo) | modelo de implementación, **componente**, subsistema de implementación, interfaz, descripción de la arquitectura, **plan de integración de construcciones** | 1. implementación de la arquitectura · 2. integrar el sistema · 3. implementar un subsistema · 4. implementar una clase · 5. **realizar prueba de unidad** |
| **Prueba** | **diseñador de pruebas**, ing. de componentes, **ing. de pruebas de integración**, **ing. de pruebas de sistema** (desaparece el arquitecto) | modelo de pruebas, **caso de prueba**, procedimiento de prueba, componente de prueba, plan de prueba, **defecto**, evaluación de prueba | 1. planificar · 2. diseñar · 3. implementar la prueba · 4. prueba de integración · 5. prueba de sistema · 6. evaluar |

Conteo para recordar: **análisis 4, diseño 4, implementación 5, prueba 6** actividades
(requisitos tenía 5).

Lo que remarcó el profe:

- **Análisis**: lleva los requisitos "al ámbito del desarrollador"; CU = el **qué**, análisis y
  diseño = el **cómo**. Clases **conceptuales**: atributos y responsabilidades, **sin métodos**.
  Estereotipos: **frontera** (todo actor interactúa a través de una), **control** (el Controlador de
  GRASP; uno por CU, termina el CU y se destruye), **entidad** (conoce los datos). Las
  realizaciones–análisis se modelan con **diagramas de comunicación**. El modelo de análisis es
  **opcional**: hay 3 formas de encararlo (completo, como bosquejo puente al diseño, o no hacerlo
  y detallar más el modelo de CU). El "flujo de sucesos–análisis" incluye objetos; la descripción
  textual de un CU, no. Paquete de servicio: "no es tan importante, pero es complicado".
- **Análisis vs. diseño** (Celina p. 81, 93): modelo de análisis = **conceptual**, genérico del
  dominio, más barato, puede no mantenerse · modelo de diseño = **físico**, "plano de la
  implementación", específico del lenguaje, más costoso, **se mantiene** todo el proyecto.
  En diseño aparecen las **interfaces**, la **visibilidad** y **todas las operaciones**; las
  realizaciones–diseño usan **diagramas de secuencia**. Subsistemas: bajo acoplamiento, alta
  cohesión. El modelo de despliegue se plantea en diseño y se refina en implementación; "es de
  los pocos modelos que van casi completos en la arquitectura".
- **Implementación**: centrada en codificar; el **componente** del PU es el **artefacto** de UML.
  Las **pruebas unitarias son de implementación, no del flujo de prueba** ("evitar esa
  confusión"): caja negra (especificación, clases de equivalencia; la más común) y caja blanca
  (estructura; más costosa). Primero se planea la construcción, después se implementa, se prueba
  y recién ahí se integra; en capas, se integran primero las inferiores. Un build fallido
  produce un defecto, que también es artefacto.
- **Prueba**: las dos grandes son **integración** (según el plan de integración; no tan atada a
  CU) y **sistema** (interacción con el usuario; atada a CU). Caso de prueba: traza directa a un
  CU, puede haber muchos por CU. Procedimiento de prueba: "de lo menos importante", una receta;
  uno puede servir para muchos casos. Componente de prueba: automatiza (los unitarios son los más
  automatizables; usabilidad, los menos). **Regresión**: probar hacia atrás; conviene en casos que
  no queden obsoletos al primer cambio. Evaluar la prueba = **completitud** (cobertura) y
  **fiabilidad**, contra el plan y los defectos.

## Atributos de calidad y tácticas (nota nueva)

De Powers p. 30–68 y Celina p. 26–38.

- **Escenario de calidad, 6 partes**: fuente del estímulo · estímulo · artefacto · entorno ·
  respuesta · **medida de la respuesta** ("si no puedo medir, no puedo saber si la decisión fue
  correcta"). Resuelve definiciones no testeables, categorías solapadas y vocabulario inconsistente.
- **Táctica** = una decisión de diseño que afecta la respuesta a un estímulo. **Patrón** =
  agrupa varias tácticas, por eso implica *trade-offs* (Celina p. 29).
- **Modificabilidad** ("la más importante"): reducir costo y riesgo del cambio; 4 preguntas
  (qué cambia, con qué probabilidad, cuándo y quién, a qué costo). Variantes: **escalabilidad,
  variabilidad** (líneas de producto), **portabilidad** (aislar dependencias de plataforma, VM),
  **independencia de ubicación**. Tácticas: **reducir el tamaño** del módulo, **aumentar la
  cohesión**, **reducir el acoplamiento** (encapsular, intermediario, abstraer servicios comunes,
  restringir dependencias) y **diferir el enlace**. Patrones: cliente-servidor, microkernel,
  capas, publicador-suscriptor.
- **Rendimiento**: tiempo y capacidad de cumplir requisitos temporales; "no hay otro atributo
  tan importante". Factores: tiempo de procesamiento y **tiempo bloqueado** (contención).
  Tácticas: **controlar la demanda** (gestionar llegada y muestreo, limitar respuesta, priorizar,
  reducir la sobrecarga) y **gestionar recursos** (aumentar recursos, concurrencia, réplicas,
  caché, limitar colas, planificar). Patrones: **balanceo de carga**, **throttling**, service mesh,
  map-reduce.
- **Qué arquitectura según el atributo prioritario** (Powers p. 31, "una de las preguntas más
  importantes"): rendimiento → pocas operaciones críticas, en pocos componentes y en la misma
  máquina · *security* → **capas**, con la intermedia más protegida · *safety* → operaciones en
  uno o pocos componentes · disponibilidad → componentes **replicados** · mantenibilidad →
  componentes reemplazables, productores separados de consumidores. (Ya está en la nota de
  arquitectura: verificar que esté completo.)

## Para las notas que ya existen

Lo que los Powers remarcan y conviene verificar o agregar:

| Nota | Qué falta o reforzar |
|---|---|
| arquitectura-de-software | "nunca se modela una arquitectura con un solo diagrama"; las vistas se diseñan casi siempre en diseño, para stakeholders |
| estilos-arquitectonicos | para la materia **estilo = patrón** (Sommerville cambió el nombre); **MVC**; repositorio pasivo vs. **pizarrón** activo; capas "cuando la seguridad es crucial" |
| arquitecturas-de-sistemas-distribuidos | microservicios relacionados con **SRP**, más chicos y autónomos que SOA; SOA: SOAP, WSDL, **UDDI** (cayó en desuso); QoS; transparencia y apertura |
| proceso-unificado | las 3 características son "**innegociables**"; elaboración = línea base de la arquitectura ("el qué, no el cómo"), construcción = el ejecutable es el artefacto más importante; el PU es prescriptivo y casi no se usa hoy |
| captura-de-requisitos-en-el-pu | convenciones de la cátedra para la **realización de CU**: sólo las clases necesarias; una interfaz y un controlador por realización; sólo el **camino feliz**; actores secundarios a la derecha; la interfaz colabora sólo con el controlador |
| fundamentos-de-patrones-de-diseno | propiedades **verdaderas** (vocabulario común, documentan arquitectura, compactan el diseño, más de una solución) y **falsas** (solución exacta, para todo, sólo OO); patrón = contexto–problema–solución; **catálogo vs. sistema** de patrones; tipos: arquitectónicos, de diseño, idiomas, de análisis, de organización |
| patrones-de-comportamiento | **Strategy vs. State** (externo vs. estado interno) y **Strategy vs. Template Method** (composición en ejecución vs. herencia en compilación); Observer = publicador-suscriptor, base de MVC |
| patrones-creacionales | Singleton: constructor privado, método estático; Factory Method usa LSP y polimorfismo; ejemplo de clase: Abstract Factory con armas y personajes de "dos mundos" |
| manifiesto-agil | **un párrafo por framework**: DSDM (MoSCoW, timebox), Scrum (gestión, no software), XP, FDD (el más cercano a cascada), Crystal (por color y dureza según tamaño y criticidad; comunicación osmótica), ASD (especular–colaborar–aprender); **post-agilismo**; "framework" en vez de "metodología" y *cherry picking* |
| programacion-extrema | valores **SCCRR** (simplicidad, comunicación, retroalimentación, coraje, respeto = seguridad psicológica); equipos de 2 a 10; **límites**: sin diseño formal, problemático en proyectos grandes; XP se mete en el código y no en la gestión (al revés que Scrum); **spike** = prueba técnica para despejar incertidumbre (ej.: integrar AFIP) |
| principios-solid | ojo: la anotación de ISP (p. 6) lo describe como "convertir unas interfaces en otras", que es **Adapter**, no ISP; **Ley de Demeter** como detector de acoplamiento (ya está) |
