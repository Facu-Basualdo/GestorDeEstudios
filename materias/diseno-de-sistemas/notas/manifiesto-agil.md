# Manifiesto ágil y métodos ágiles vs. clásicos
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 2 · Peso provisorio 1/3 (dudoso para IE3; es todo el cuestionario semanal 8) ·
> Fuentes: doc 3 *Apunte Agile* (pp. 3–6 y 20) y doc 15 *agilidad* (filminas y video,
> pp. 7–17), vía el export de Faro. Las preguntas *(cátedra)* salen del cuestionario semanal 8.

## Preguntas de recuperación

- ¿Qué describe la frase "codificar y corregir"? :: Los años de desarrollo **artesanal y caótico**, sin procesos formales establecidos. [→ De codificar y corregir a lo ágil](#De%20codificar%20y%20corregir%20a%20lo%20ágil)
- ¿Qué buscaban las metodologías clásicas, en qué se inspiraron y cuál es su crítica más habitual? :: Un proceso disciplinado y **predecible**, con fuerte énfasis en la planificación, inspirado en **otras ingenierías**. La crítica: la **burocracia**. [→ De codificar y corregir a lo ágil](#De%20codificar%20y%20corregir%20a%20lo%20ágil)
- ¿Qué caracteriza a los métodos ágiles? :: Enfoque **iterativo e incremental**, pequeñas entregas reales a corto plazo y modelos mínimos y sencillos. [→ De codificar y corregir a lo ágil](#De%20codificar%20y%20corregir%20a%20lo%20ágil)
- Procesos adaptables vs. predictivos :: Los adaptables abrazan el cambio con desarrollo iterativo, necesitan un **cliente cercano con control fino** y **no funcionan con precio fijo**. Los predictivos fijan un plan detallado antes de codificar. [→ Procesos adaptables y desarrollo iterativo](#Procesos%20adaptables%20y%20desarrollo%20iterativo)
- ¿Cuánto duran las iteraciones en XP y en Scrum? :: XP: de 1 a 3 semanas. Scrum: un mes. [→ Procesos adaptables y desarrollo iterativo](#Procesos%20adaptables%20y%20desarrollo%20iterativo)
- En el desarrollo iterativo, ¿qué planes son estables? :: Sólo los de **corto plazo** (una iteración); el plan de largo plazo es variable. [→ Procesos adaptables y desarrollo iterativo](#Procesos%20adaptables%20y%20desarrollo%20iterativo)
- ¿Cómo ven los métodos ágiles a las personas? :: Como el factor más importante, no como roles reemplazables: **rechazan la visión taylorista**. El desarrollo es una tarea **creativa** y las decisiones técnicas (como estimar) las toma **quien va a desarrollar**. [→ El factor humano](#El%20factor%20humano)
- ¿Cuándo, dónde y quiénes firmaron el Manifiesto Ágil? :: En **febrero de 2001**, en **Snowbird (Utah)**, representantes de XP, Scrum, Crystal, ASD, FDD y DSDM. [→ El Manifiesto Ágil](#El%20Manifiesto%20Ágil)
- ¿Cuáles son los 4 valores del Manifiesto? :: **Individuos e interacciones** sobre procesos y herramientas · **software funcionando** sobre documentación extensa · **colaboración con el cliente** sobre negociación contractual · **responder al cambio** sobre seguir un plan. [→ El Manifiesto Ágil](#El%20Manifiesto%20Ágil)
- ¿El Manifiesto descarta los ítems de la derecha? :: No: reconoce que tienen valor, pero valora **más** los de la izquierda. [→ El Manifiesto Ágil](#El%20Manifiesto%20Ágil)
- ¿Cuál es la principal medida de progreso según los principios ágiles? :: El **software funcionando**. [→ Los 12 principios](#Los%2012%20principios)
- ¿Qué limitaciones tienen los métodos ágiles? :: Requerimientos bien definidos desde el inicio (tiempo real, ERP, frameworks) · resistencia gerencial (programación de a pares) · presupuestos fijos · ERP cerrados · **equipos distribuidos** · falta de tecnología para refactorizar. [→ Limitaciones de los métodos ágiles](#Limitaciones%20de%20los%20métodos%20ágiles)
- ¿Qué significa "secuencial a largo plazo, iterativo a corto plazo, incremental en el tiempo"? :: A lo largo del proyecto el foco se desplaza de requisitos a producción (no es cascada); en el día a día se hace un poco de todo y se vuelve atrás; y se entregan versiones que crecen sobre las anteriores. [→ Ciclo de vida ágil](#Ciclo%20de%20vida%20ágil)
- ¿Cuál fue el primer framework ágil y qué técnica de priorización introdujo? :: **DSDM** (1994), con *timeboxing* y **MoSCoW** (Must, Should, Could, Won't). [→ Los frameworks ágiles](#Los%20frameworks%20ágiles)
- ¿Qué aportó Crystal (Cockburn)? :: Un método por proyecto según tamaño y criticidad (colores), **comunicación osmótica** (cara a cara), **seguridad psicológica** y la **mejora reflexiva**, antecesora de las retrospectivas. [→ Los frameworks ágiles](#Los%20frameworks%20ágiles)

## Cuestionario

1. ¿Qué describe la frase "codificar y corregir"? *(cátedra)*
   - [ ] Un proceso de refactorización continua orientado a la calidad
   - [x] Un desarrollo artesanal y caótico, sin procesos formales establecidos
   - [ ] Una técnica formal de la ingeniería de software clásica con planificación detallada
   - [ ] Una metodología ágil basada en iteraciones cortas de codificación
   > Es el caos previo a cualquier metodología, no un método ágil. [→ De codificar y corregir a lo ágil](#De%20codificar%20y%20corregir%20a%20lo%20ágil)
2. ¿Qué faltaba en el período de "codificar y corregir"? *(cátedra)*
   - [ ] Compiladores capaces de generar código optimizado
   - [ ] Herramientas de control de versiones
   - [x] Procesos formales y establecidos de desarrollo
   - [ ] Lenguajes de programación de alto nivel
   > Faltaba proceso, no herramientas. [→ De codificar y corregir a lo ágil](#De%20codificar%20y%20corregir%20a%20lo%20ágil)
3. ¿Cuál es la crítica más habitual hacia las metodologías clásicas? *(cátedra)*
   - [ ] Su rechazo total a cualquier tipo de planificación
   - [ ] Su falta de documentación técnica
   - [ ] Su incapacidad para producir software funcional
   - [x] Su burocracia excesiva
   > Al revés de lo que dice un distractor: producen demasiada documentación. [→ De codificar y corregir a lo ágil](#De%20codificar%20y%20corregir%20a%20lo%20ágil)
4. ¿Qué inspiró el proceso detallado y planificado de las metodologías clásicas? *(cátedra)*
   - [x] Otras disciplinas de la ingeniería
   - [ ] La administración de recursos humanos
   - [ ] Los métodos ágiles surgidos posteriormente
   - [ ] Las ciencias sociales aplicadas a la gestión de equipos
   > Los métodos ágiles vinieron después, como reacción. [→ De codificar y corregir a lo ágil](#De%20codificar%20y%20corregir%20a%20lo%20ágil)
5. ¿Cuáles son limitaciones señaladas para aplicar métodos ágiles? *(cátedra)*
   - [ ] Proyectos organizados en iteraciones cortas con entregas frecuentes
   - [x] Equipos geográficamente distribuidos
   - [x] Entornos con requerimientos claramente definidos desde el inicio, como sistemas de tiempo real
   - [x] Resistencia gerencial a prácticas como la programación de a pares
   > Las iteraciones cortas son una característica de lo ágil, no una limitación. [→ Limitaciones de los métodos ágiles](#Limitaciones%20de%20los%20métodos%20ágiles)
6. ¿Qué enfoque caracteriza a los métodos ágiles? *(cátedra)*
   - [ ] Centrado en la documentación exhaustiva como principal entregable
   - [x] Iterativo e incremental, con pequeñas entregas reales a corto plazo
   - [ ] Basado en contratos de precio fijo definidos desde el inicio
   - [ ] Predictivo, con un plan detallado fijado antes de comenzar a codificar
   > El plan detallado fijo es el enfoque predictivo de las clásicas. [→ De codificar y corregir a lo ágil](#De%20codificar%20y%20corregir%20a%20lo%20ágil)
7. ¿Qué relación con el cliente requieren los procesos adaptables? *(cátedra)*
   - [ ] Una relación formal basada en contratos de precio fijo
   - [ ] Ninguna relación directa, delegada en un intermediario contractual
   - [ ] Una relación distante, limitada a revisiones trimestrales
   - [x] Una relación cercana, con control fino del cliente sobre el desarrollo
   > No funcionan con precio fijo. [→ Procesos adaptables y desarrollo iterativo](#Procesos%20adaptables%20y%20desarrollo%20iterativo)
8. ¿Cuáles de las siguientes afirmaciones sobre los procesos adaptables son correctas? *(cátedra)*
   - [x] XP sugiere iteraciones de entre 1 y 3 semanas de duración
   - [x] Se basan en el desarrollo iterativo para controlar lo impredecible
   - [ ] Scrum sugiere iteraciones de una semana de duración
   - [x] No funcionan con contratos de precio fijo
   > Scrum sugiere un mes, no una semana. [→ Procesos adaptables y desarrollo iterativo](#Procesos%20adaptables%20y%20desarrollo%20iterativo)
9. En el desarrollo iterativo, ¿qué pasa con la planificación a largo plazo? *(cátedra)*
   - [ ] Es igualmente estable que la de corto plazo
   - [x] Es variable; sólo los planes a corto plazo son estables
   - [ ] Es fija desde el inicio, mientras la de corto plazo cambia constantemente
   - [ ] No existe planificación a largo plazo
   > El distractor más tentador invierte los términos. [→ Procesos adaptables y desarrollo iterativo](#Procesos%20adaptables%20y%20desarrollo%20iterativo)
10. ¿Qué ventaja da el desarrollo iterativo frente a depender sólo de la documentación para detectar errores? *(cátedra)*
    - [ ] Extiende los plazos para garantizar mayor calidad documental
    - [x] Permite detectar errores rápido con versiones operacionales probadas e integradas
    - [ ] Elimina la necesidad de realizar pruebas
    - [ ] Reemplaza la retroalimentación del cliente por revisiones internas
    > Cada iteración produce una unidad probada e integrada. [→ Procesos adaptables y desarrollo iterativo](#Procesos%20adaptables%20y%20desarrollo%20iterativo)
11. ¿Quiénes deben tomar las decisiones técnicas importantes, como la estimación de tiempo? *(cátedra)*
    - [x] Quienes desarrollarán la característica
    - [ ] El cliente, sin intervención del equipo técnico
    - [ ] Un gerente de proyecto ajeno al equipo técnico
    - [ ] Un comité de calidad externo
    > El gerente ajeno es la visión tradicional que lo ágil rechaza. [→ El factor humano](#El%20factor%20humano)
12. ¿Cuáles reflejan la visión de los métodos ágiles sobre el factor humano? *(cátedra)*
    - [x] No adhieren a la visión taylorista de las personas como recursos reemplazables
    - [x] Valoran a los individuos y su integración en equipo
    - [ ] Tratan a las personas como roles reemplazables, igual que las metodologías tradicionales
    - [x] Consideran el desarrollo de software como una tarea creativa
    > La tercera es justo la visión tradicional. [→ El factor humano](#El%20factor%20humano)
13. Según el Manifiesto Ágil, ¿cómo se relacionan los valores de la izquierda con los de la derecha? *(cátedra)*
    - [ ] Se descarta por completo cualquier valor en los ítems de la derecha
    - [ ] Se valoran ambos por igual, sin preferencia
    - [x] Se reconoce valor en los ítems de la derecha, pero se valora más a los de la izquierda
    - [ ] Se prioriza siempre la documentación extensa sobre el software funcionando
    > El error típico es leerlo como un rechazo total a la documentación. [→ El Manifiesto Ágil](#El%20Manifiesto%20Ágil)
14. ¿Cuáles de los siguientes son valores del Manifiesto Ágil? *(cátedra)*
    - [x] Colaboración con el cliente sobre negociación contractual
    - [x] Individuos e interacciones sobre procesos y herramientas
    - [x] Responder al cambio sobre seguir un plan
    - [ ] Seguir un plan sobre responder al cambio
    > El último invierte el valor real. [→ El Manifiesto Ágil](#El%20Manifiesto%20Ágil)
15. ¿Cuál es la principal medida de progreso según los principios del Manifiesto?
    - [x] El software funcionando
    - [ ] La documentación aprobada por el cliente
    - [ ] El cumplimiento del plan inicial
    - [ ] La cantidad de líneas de código
    > Es el principio 7. [→ Los 12 principios](#Los%2012%20principios)
16. ¿Qué framework ágil está orientado a la **gestión de proyectos** más que al software, con Product Owner, Scrum Master y reuniones Daily, Review y Retrospective?
    - [x] Scrum
    - [ ] XP
    - [ ] FDD
    - [ ] Crystal
    > XP es el de las prácticas técnicas; FDD, el más estructurado; Crystal, el centrado en las personas. [→ Los frameworks ágiles](#Los%20frameworks%20ágiles)

## Contenido

### De codificar y corregir a lo ágil

1. **Codificar y corregir**: durante años el desarrollo fue **caótico y artesanal**, sin procesos formales (doc 3, p. 3).
2. **Metodologías clásicas**: la reacción. Imponen un proceso **disciplinado y detallado**, con fuerte énfasis en la **planificación**, inspirado en **otras disciplinas de la ingeniería**, para que sea predecible y reproducible. No fueron notablemente exitosas ni populares; la crítica más habitual es su **burocracia**.
3. **Métodos ágiles**: un enfoque "controvertido y esperanzador" para el problema del **cambio continuo**. Se caracterizan por ser **iterativos e incrementales**, con **pequeñas entregas reales a corto plazo** y **modelos mínimos y sencillos**. No sirven para todos los contextos.

| | Metodologías clásicas | Métodos ágiles |
|---|---|---|
| Proceso | Predictivo: plan detallado antes de codificar | Adaptable: abraza el cambio |
| Personas | Roles reemplazables | El factor más importante |
| Documentación | Extensa | Mínima, lo necesario |
| Cliente | Contrato (precio fijo) | Colaboración cercana, control fino |
| Entregas | Al final | Frecuentes, incrementales |

### Procesos adaptables y desarrollo iterativo

- Los **procesos adaptables** son la alternativa a los **predictivos**: aceptan que el cambio es inevitable y lo controlan con **desarrollo iterativo** (doc 3, pp. 3–5).
- Necesitan una **relación cercana con el cliente**, que tiene **control fino** sobre el desarrollo. **No funcionan con contratos de precio fijo**.
- Duración de las iteraciones: **XP de 1 a 3 semanas**, **Scrum un mes**.
- **Desarrollo iterativo**: producir seguido **versiones operacionales** del sistema final con un subconjunto de las características. Cada iteración deja una unidad **probada e integrada**, y los errores aparecen rápido (la documentación los esconde).
- **Sólo los planes de corto plazo (una iteración) son estables**; el de largo plazo es variable. La tendencia es a iteraciones lo más cortas posible, para tener retroalimentación más seguido.

### El factor humano

- Las metodologías tradicionales tratan a las personas como **roles reemplazables**. Los métodos ágiles las ponen como el **factor más importante** y valoran a los individuos y su integración en equipo (doc 3, p. 5).
- **No adhieren a la visión taylorista**: el desarrollo es una **tarea creativa** y los desarrolladores deciden cómo hacer su trabajo.
- Las decisiones técnicas importantes, como **estimar el tiempo**, las toman **quienes van a desarrollar** la característica.

### El Manifiesto Ágil

Firmado en **febrero de 2001** en **Snowbird, Utah**, por representantes de **XP, Scrum, Crystal, ASD, FDD y DSDM** (doc 3, p. 6).

| Valoramos más… | …que |
|---|---|
| **Individuos e interacciones** | procesos y herramientas |
| **Software funcionando** | documentación extensa |
| **Colaboración con el cliente** | negociación contractual |
| **Responder al cambio** | seguir un plan |

"Aunque valoramos los elementos de la derecha, valoramos **más** los de la izquierda": no se descartan.

### Los 12 principios

1. Satisfacer al cliente con **entregas tempranas y continuas** de software valioso.
2. **Aceptar cambios** en los requerimientos, incluso tarde.
3. Entregar software funcionando **frecuentemente** (de semanas a meses, cuanto más corto mejor).
4. Gente de negocio y desarrolladores trabajan **juntos todos los días**.
5. Proyectos alrededor de **individuos motivados**, con apoyo y confianza.
6. La conversación **cara a cara** es el método de comunicación más eficiente.
7. El **software funcionando es la principal medida de progreso**.
8. **Desarrollo sostenible**, a ritmo constante.
9. Atención continua a la **excelencia técnica** y al buen diseño.
10. La **simplicidad** (maximizar el trabajo no hecho) es esencial.
11. Las mejores arquitecturas, requisitos y diseños emergen de **equipos autoorganizados**.
12. El equipo **reflexiona periódicamente** y ajusta su comportamiento.

### Limitaciones de los métodos ágiles

No son aptos para todos los contextos (doc 3, pp. 5 y 33):

- entornos con **requerimientos claramente definidos desde el inicio**: sistemas técnicos, **tiempo real**, ERP, frameworks;
- **resistencia gerencial** a prácticas como la **programación de a pares**;
- imposibilidad de **presupuestos fijos**;
- sistemas comerciales **ERP cerrados**;
- **equipos geográficamente distribuidos**;
- dependencia de **tecnología apropiada para refactorizar**.

Las de XP en particular están en [Programación Extrema](programacion-extrema.md#Limitaciones%20de%20XP).

### Ciclo de vida ágil

Un proceso ágil es **secuencial a largo plazo, iterativo a corto plazo e incremental en el tiempo** (doc 3, p. 20):

- **Secuencial a largo plazo**: el foco se desplaza de los requerimientos de alto nivel a la arquitectura, la construcción, el despliegue y la producción. **No es cascada**: las actividades se repiten en cada iteración.
- **Iterativo a corto plazo**: un poco de requerimientos, modelado, código y prueba, y se vuelve atrás, avanzando de a pequeños incrementos.
- **Incremental**: el sistema se entrega en varias versiones, cada una construida sobre la anterior.

### Los frameworks ágiles

En las filminas se prefiere **"framework" o marco de trabajo** en lugar de "metodología", que suena rígida y prescriptiva. Se promueve el **cherry picking**: tomar lo mejor de cada framework y armar la propia forma de trabajar. Seis frameworks clásicos (1994–1999) fueron la base del Manifiesto (doc 15, pp. 7 y 11).

| Framework | Origen | Qué lo distingue |
|---|---|---|
| **DSDM** | 1994, el **primero** | Muy orientado al negocio y a los stakeholders; *timeboxing* y priorización **MoSCoW** (Must, Should, Could, Won't) |
| **Scrum** | Schwaber, Sutherland y Beedle (OOPSLA) | El más popular. Orientado a la **gestión de proyectos**, no al software. Roles Product Owner, Scrum Master y Equipo; reuniones Daily, Review y Retrospective |
| **XP** | Kent Beck | Prácticas técnicas: programación de a pares, TDD, refactorización, integración continua. Equipos de 2 a 10. La comunidad más representada en el Manifiesto. Ver [XP](programacion-extrema.md) |
| **FDD** | Jeff De Luca, 1997 | Construye por **funcionalidades** (*features*). El más **estructurado**: un híbrido entre cascada y ágil |
| **Crystal** | Alistair Cockburn | Familia de métodos según **tamaño y criticidad** (colores y dureza, como los minerales: Clear, Yellow, Orange…). Humano, ligero y adaptativo |
| **ASD** | Jim Highsmith | Ciclo **especulación – colaboración – aprendizaje**; no hay una sola forma de hacer las cosas |

Aportes de Crystal a la cultura de equipo:

- **Comunicación osmótica**: comunicación cara a cara dentro del equipo.
- **Seguridad psicológica**: nadie tiene miedo de opinar; en Crystal, "poder proponer". En XP es el valor del **respeto**.
- **Mejora reflexiva**: antecesora de las **retrospectivas**.

## Dónde me equivoco

_Sin errores registrados todavía._ Trampas de los cuestionarios: invertir los valores del Manifiesto; creer que descarta la documentación; la duración de iteración de Scrum (un mes, no una semana).

## Ver también

- [Programación Extrema](programacion-extrema.md): valores, prácticas y limitaciones de XP.
- [Modelado Ágil](modelado-agil.md): cómo se modela y documenta en un proyecto ágil.
