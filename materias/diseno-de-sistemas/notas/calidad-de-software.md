# Calidad de software
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 6 (supuesta) · Peso 2 (**Parcial 2 / IE5**, clase del 12/11)
> · Fuentes: `2do Parcial - Powers de Clase (2).pdf` (pp. 345–364), `17-calidad.pdf` (pp. 1–20) y
> `4-pressman` (`Pressman y Maxim`, caps. 15, 16 y 17, págs. 310–355 del libro).

## Preguntas de recuperación

- ¿Cuáles son los 5 puntos de vista de la calidad de Garvin (TVPUF)? :: Trascendental, del valor, del producto, del usuario y de la fabricación. [→ Concepto de calidad y los 5 puntos de vista (TVPUF)](#Concepto%20de%20calidad%20y%20los%205%20puntos%20de%20vista%20%28TVPUF%29)
- Diferenciá calidad de diseño y calidad de conformidad. :: Diseño: grado en que el diseño cumple los requisitos. Conformidad: grado en que la implementación sigue el diseño. [→ Calidad de diseño, de conformidad, Glass y Pressman](#Calidad%20de%20dise%C3%B1o%2C%20de%20conformidad%2C%20Glass%20y%20Pressman)
- ¿Qué dice la ecuación de Glass? :: Satisfacción del usuario = producto conforme + buena calidad + entrega dentro del plazo y del presupuesto. [→ Calidad de diseño, de conformidad, Glass y Pressman](#Calidad%20de%20dise%C3%B1o%2C%20de%20conformidad%2C%20Glass%20y%20Pressman)
- ¿Cómo define Pressman la calidad del software? :: Un proceso eficaz aplicado de manera que crea un producto útil, que da valor medible a quienes lo producen y a quienes lo usan. [→ Calidad de diseño, de conformidad, Glass y Pressman](#Calidad%20de%20dise%C3%B1o%2C%20de%20conformidad%2C%20Glass%20y%20Pressman)
- ¿Cuáles son las 3 perspectivas de McCall? :: Operación del producto, revisión del producto (mantenerlo y cambiarlo) y transición del producto (adaptarlo a otros entornos). [→ McCall y Walters (1977)](#McCall%20y%20Walters%20%281977%29)
- ¿Qué modelos define ISO 25010 y qué pide la cátedra? :: Calidad en uso y calidad del producto (8 características). La cátedra toma la versión de Pressman y pide saber 3 o 4 características para dar ejemplos. [→ ISO/IEC 25010](#ISO%2FIEC%2025010)
- Nombrá 4 características de calidad del producto de ISO 25010, con una subcaracterística cada una. :: Por ejemplo: eficiencia de desempeño (comportamiento temporal), fiabilidad (disponibilidad), seguridad (confidencialidad), mantenibilidad (modificabilidad). [→ ISO/IEC 25010](#ISO%2FIEC%2025010)
- ¿Qué es el "software suficientemente bueno" y qué riesgos trae? :: Entregar lo esencial asumiendo errores menores. Riesgos: daño a la reputación, litigios y que sea inaceptable en sistemas críticos. [→ El dilema de la calidad, costos, riesgos y seguridad](#El%20dilema%20de%20la%20calidad%2C%20costos%2C%20riesgos%20y%20seguridad)
- ¿Cuáles son las 4 categorías del costo de la calidad y cuál es la más cara? :: Prevención, evaluación, fallas internas y fallas externas; las externas (después del release) son las más caras. [→ Costo de la calidad](#Costo%20de%20la%20calidad)
- Diferenciá bugs y flaws según McGraw. :: Bugs: errores de implementación. Flaws: fallas de arquitectura y diseño, más graves y más descuidadas. [→ Relación con riesgos y seguridad](#Relaci%C3%B3n%20con%20riesgos%20y%20seguridad)
- ¿Cuáles son los 4 pilares para lograr la calidad? :: Métodos de ingeniería de software, gestión de proyectos, control de calidad y aseguramiento de calidad. [→ Los cuatro pilares para lograr la calidad](#Los%20cuatro%20pilares%20para%20lograr%20la%20calidad)
- Diferenciá SQC y SQA. :: SQC (control) mira el producto y detecta defectos con revisiones y pruebas. SQA (aseguramiento) mira el proceso y previene defectos con auditorías y estándares. [→ Aseguramiento (SQA) vs. Control de Calidad (SQC) y Verificación/Validación](#Aseguramiento%20%28SQA%29%20vs.%20Control%20de%20Calidad%20%28SQC%29%20y%20Verificaci%C3%B3n%2FValidaci%C3%B3n)
- Diferenciá error y defecto. :: Error: problema encontrado antes del release. Defecto: problema encontrado después. [→ Revisiones técnicas como filtro de calidad](#Revisiones%20t%C3%A9cnicas%20como%20filtro%20de%20calidad)
- ¿Cuántos errores nacen en diseño y cuántos detectan las revisiones? :: Entre el 50 y el 65% de los errores se introducen en diseño; las revisiones detectan hasta el 75%. [→ Revisiones técnicas como filtro de calidad](#Revisiones%20t%C3%A9cnicas%20como%20filtro%20de%20calidad)
- ¿Qué diferencia hay entre prueba y revisión? :: La prueba necesita código ejecutable; la revisión no (se hace sobre requisitos o diagramas). [→ Aseguramiento (SQA) vs. Control de Calidad (SQC) y Verificación/Validación](#Aseguramiento%20%28SQA%29%20vs.%20Control%20de%20Calidad%20%28SQC%29%20y%20Verificaci%C3%B3n%2FValidaci%C3%B3n)
- ¿Cómo se calcula la densidad de errores de una revisión? :: Errores totales (menores + mayores) dividido el tamaño del producto revisado (WPS). [→ Revisiones técnicas como filtro de calidad](#Revisiones%20t%C3%A9cnicas%20como%20filtro%20de%20calidad)
- ¿Por qué SQA es una "actividad sombrilla"? :: Porque atraviesa todo el proceso y todos los involucrados son responsables de la calidad, no un área al final. [→ Aseguramiento (SQA) vs. Control de Calidad (SQC) y Verificación/Validación](#Aseguramiento%20%28SQA%29%20vs.%20Control%20de%20Calidad%20%28SQC%29%20y%20Verificaci%C3%B3n%2FValidaci%C3%B3n)
- Nombrá buenas prácticas de una revisión técnica formal (FTR). :: Revisar el producto y no a la persona, respetar agenda y tiempos, marcar los errores sin resolverlos en la reunión y usar checklists. [→ Tipos de revisiones, buenas prácticas y entornos ágiles](#Tipos%20de%20revisiones%2C%20buenas%20pr%C3%A1cticas%20y%20entornos%20%C3%A1giles)

## Cuestionario

1. Un cliente dice: "lo que pagué vale lo que recibo". ¿Qué punto de vista de la calidad es?
   - [x] Del valor
   - [ ] Del usuario
   - [ ] Del producto
   - [ ] Trascendental
   > Valor = relación costo-beneficio percibida. Usuario sería "responde a mis necesidades". [→ Concepto de calidad y los 5 puntos de vista (TVPUF)](#Concepto%20de%20calidad%20y%20los%205%20puntos%20de%20vista%20%28TVPUF%29)
2. "El producto salió de fábrica con los estándares esperados". ¿Qué punto de vista es?
   - [x] De la fabricación
   - [ ] Del producto
   - [ ] Del usuario
   - [ ] Del valor
   > Fabricación = cumplir los estándares del proceso; producto = características medibles del producto. [→ Concepto de calidad y los 5 puntos de vista (TVPUF)](#Concepto%20de%20calidad%20y%20los%205%20puntos%20de%20vista%20%28TVPUF%29)
3. La calidad de conformidad es el grado en que:
   - [x] La implementación sigue el diseño
   - [ ] El diseño cumple los requisitos especificados
   - [ ] El usuario queda satisfecho con el producto
   - [ ] El producto cumple la norma ISO 25010
   > Que el diseño cumpla los requisitos es la calidad de diseño. [→ Calidad de diseño, de conformidad, Glass y Pressman](#Calidad%20de%20dise%C3%B1o%2C%20de%20conformidad%2C%20Glass%20y%20Pressman)
4. ¿Cuáles de estos son costos de fallas externas?
   - [x] Soporte técnico
   - [x] Reclamos y garantías
   - [ ] Retrabajo antes del lanzamiento
   - [ ] Revisiones técnicas
   - [ ] Capacitación del equipo
   > Retrabajo previo = fallas internas; revisiones = evaluación; capacitación = prevención. [→ Costo de la calidad](#Costo%20de%20la%20calidad)
5. ¿Qué categoría del costo de la calidad es la más cara?
   - [ ] Prevención
   - [ ] Evaluación
   - [ ] Fallas internas
   - [x] Fallas externas
   > Cuanto más tarde se detecta, más cuesta: de USD 139 en requisitos a USD 14.102 en mantenimiento. [→ Costo de la calidad](#Costo%20de%20la%20calidad)
6. ¿Cuáles de estas afirmaciones corresponden al aseguramiento de calidad (SQA)?
   - [x] Se enfoca en el proceso
   - [x] Busca prevenir defectos
   - [x] Incluye auditorías del proceso y definición de estándares
   - [ ] Se enfoca en probar el producto
   - [ ] Busca detectar defectos en el producto terminado
   > Probar y detectar defectos en el producto es control de calidad (SQC). [→ Aseguramiento (SQA) vs. Control de Calidad (SQC) y Verificación/Validación](#Aseguramiento%20%28SQA%29%20vs.%20Control%20de%20Calidad%20%28SQC%29%20y%20Verificaci%C3%B3n%2FValidaci%C3%B3n)
7. Un cliente encuentra un problema después del release. Según Pressman, es:
   - [x] Un defecto
   - [ ] Un error
   - [ ] Un flaw
   - [ ] Una no conformidad de diseño
   > Error = antes del release; defecto = después. [→ Revisiones técnicas como filtro de calidad](#Revisiones%20t%C3%A9cnicas%20como%20filtro%20de%20calidad)
8. ¿Cuáles son verdaderas sobre las revisiones técnicas?
   - [x] No necesitan código ejecutable
   - [x] Pueden detectar hasta el 75% de los errores de diseño
   - [ ] Retrasan el proyecto porque agregan reuniones
   - [ ] En una FTR los errores se resuelven durante la reunión
   > Revisar acelera porque corta la amplificación de errores; en la FTR sólo se marcan. [→ Revisiones técnicas como filtro de calidad](#Revisiones%20t%C3%A9cnicas%20como%20filtro%20de%20calidad)
9. ¿Qué factores de McCall pertenecen a la revisión del producto?
   - [x] Mantenibilidad
   - [x] Flexibilidad
   - [x] Testeabilidad
   - [ ] Portabilidad
   - [ ] Usabilidad
   > Portabilidad es de transición; usabilidad, de operación. [→ McCall y Walters (1977)](#McCall%20y%20Walters%20%281977%29)
10. Una arquitectura que no tiene ningún punto de autorización es, según McGraw:
    - [x] Un flaw
    - [ ] Un bug
    - [ ] Un defecto de conformidad
    - [ ] Un error de codificación
    > Los flaws son fallas de arquitectura y diseño; los bugs, de implementación. [→ Relación con riesgos y seguridad](#Relaci%C3%B3n%20con%20riesgos%20y%20seguridad)
11. ¿Cuáles son características de calidad del producto en ISO 25010?
    - [x] Eficiencia de desempeño
    - [x] Mantenibilidad
    - [x] Seguridad
    - [ ] Satisfacción
    - [ ] Corrección
    > Satisfacción es de calidad en uso; corrección (*correctness*) es un factor de McCall. [→ ISO/IEC 25010](#ISO%2FIEC%2025010)
12. ¿Qué incluye la ecuación de Glass para la satisfacción del usuario?
    - [x] Producto conforme
    - [x] Buena calidad
    - [x] Entrega dentro del plazo y del presupuesto
    - [ ] Cantidad de funcionalidades
    > Glass no habla de cantidad de funcionalidades: suma conformidad, calidad y entrega a tiempo. [→ Calidad de diseño, de conformidad, Glass y Pressman](#Calidad%20de%20dise%C3%B1o%2C%20de%20conformidad%2C%20Glass%20y%20Pressman)

## Concepto de calidad y los 5 puntos de vista (TVPUF)

David Garvin (1984) sostiene que la calidad es un fenómeno multifacético que requiere múltiples perspectivas, recordadas con la mnemotecnia **TVPUF** (`Powers, págs. 346–347`; `17-calidad.pdf, págs. 2–3`):

| Punto de vista | Qué mira | Ejemplo / aclaración de clase |
|---|---|---|
| **T**rascendental | Algo que se reconoce como mejor sin poder explicarlo del todo | El arte |
| **V**alor | Relación **costo-beneficio** que percibe quien compra | El usuario siente que lo que pagó vale la pena |
| **P**roducto | Características **inherentes**, medibles y comparables | Pantalla o batería de un celular |
| **U**suario | Grado en que responde a las **necesidades** de quien lo usa | Adecuación al uso |
| **F**abricación | Cumplimiento con los **estándares del proceso** | *"¿El producto salió de la fábrica con los estándares esperados?"* |

### Calidad de diseño, de conformidad, Glass y Pressman

- **Calidad de diseño**: grado en que el modelo de diseño cumple con los requisitos especificados (`Powers, pág. 347`).
- **Calidad de conformidad**: grado en que la implementación sigue el diseño establecido (`Powers, pág. 347`).
- **Ecuación conceptual de Robert Glass** (`Powers, pág. 347`):

  > `satisfacción del usuario = producto conforme + buena calidad + entrega dentro de plazo y presupuesto`

- **Definición de Pressman** (`Powers, pág. 348`): un **proceso de software eficaz**, aplicado de manera que crea un **producto útil** que proporciona un **valor medible** para quienes lo producen y quienes lo usan. El docente remarca: *"es un proceso que dura todo el tiempo, no en un momento determinado"* (`Powers, pág. 348`).

## Modelos de factores de calidad: McCall e ISO/IEC 25010

### McCall y Walters (1977)

Organiza **11 factores** en una pirámide/triángulo de **tres perspectivas** sobre el producto (`Powers, págs. 348–349`; `Pressman cap. 15, pág. 313`):

| Perspectiva | Factores que agrupa |
|---|---|
| **Operación del producto** (*Product operation*) | *Correctness*, *Reliability*, *Efficiency*, *Integrity*, *Usability* |
| **Revisión del producto** (*Product revision*) | *Maintainability*, *Flexibility*, *Testability* (enfocado en mantener/cambiar) |
| **Transición del producto** (*Product transition*) | *Portability*, *Reusability*, *Interoperability* (adaptarse a nuevos entornos) |

### ISO/IEC 25010

Define dos modelos principales (`Powers, pág. 349`; `Pressman cap. 15, págs. 313–314`):

1. **Calidad en uso** (*Quality in Use* — versión 2011–2017 del libro): *Effectiveness*, *Efficiency*, *Satisfaction*, *Freedom from risk*, *Context coverage*.
2. **Calidad del producto** (*Product Quality*, ocho características en el libro `Pressman cap. 15, págs. 313–314`):
   - *Functional suitability* (completitud, corrección, pertinencia).
   - *Performance efficiency* (comportamiento temporal, uso de recursos, capacidad).
   - *Compatibility* (coexistencia, interoperabilidad).
   - *Usability* (renombrada **Interaction Capability** en la revisión 2024 de la norma mostrada en clase: reconocibilidad, aprendizaje, operabilidad, protección contra errores de usuario, etc.; `Powers, págs. 349–350`).
   - *Reliability* (disponibilidad, tolerancia a fallos, recuperabilidad).
   - *Security* (confidencialidad, integridad, no repudio, trazabilidad/*accountability*, autenticidad).
   - *Maintainability* (modularidad, reusabilidad, modificabilidad, testeabilidad).
   - *Portability* (adaptabilidad, instalabilidad, reemplazabilidad).

> **Señal de examen y diferencia libro vs. norma 2024**: Gaona indicó que la cátedra toma la versión de **Pressman** (2011–2017, con *Quality in Use* y *Usability*) aunque la actualización 2024 se enfoque en *Product Quality* y llame *Interaction Capability* a la usabilidad; no pide memorizar los 8, sino saber **3 o 4 características para dar ejemplos** (`Powers, pág. 349`).

### Evaluación cualitativa y cuantitativa

Son enfoques **complementarios** (`Powers, págs. 350–351`; `Pressman cap. 15, págs. 314–315`):

- **Cualitativo** (listas de chequeo, encuestas, observación): se prefiere cuando los atributos son difíciles de reducir a un número (por ejemplo, usabilidad).
- **Cuantitativo** (métricas sobre atributos internos como acoplamiento o complejidad): *"cada medición es parcialmente imperfecta"* (Cavano y McCall). La calidad no se mide directamente: las métricas son **indicadores indirectos**, por lo que conviene combinar varias (`Powers, págs. 350–351`).

## El dilema de la calidad, costos, riesgos y seguridad

### Dilema de la calidad y *"software suficientemente bueno"*

Bertrand Meyer plantea que si el software tiene pésima calidad nadie lo compra, pero buscar la perfección absoluta con esfuerzo y costo infinitos saca a la empresa del mercado por tiempo o presupuesto (`Powers, pág. 351`; `Pressman cap. 15, pág. 315`). El punto medio práctico es entregar **software aceptable** (*good enough*) que cumpla las funciones esenciales con errores menores asumidos, pero conlleva **riesgos** graves: daño reputacional (crítico en empresas pequeñas), litigios e inadmisibilidad en sistemas críticos (`Powers, págs. 351–352`; `Pressman cap. 15, pág. 316`).

### Costo de la calidad

*"La calidad cuesta tiempo y dinero, pero su ausencia también cuesta dinero"* (`Powers, pág. 352`). Los costos se clasifican en (`Powers, págs. 352–353`; `Pressman cap. 15, págs. 317–318`):

| Categoría | Qué incluye | Nivel de costo |
|---|---|---|
| **Prevención** | Planificación y coordinación de QA/QC, modelado completo de requisitos y diseño, planificación de pruebas, capacitación | Inversión proactiva con alto retorno |
| **Evaluación** | Revisiones técnicas, testing y depuración, recolección y evaluación de métricas | Detección *"a la primera"* |
| **Fallas internas** | Retrabajo previo al lanzamiento, efectos colaterales del arreglo, métricas de fallos | Más caro que prevenir/evaluar |
| **Fallas externas** | Defectos luego de liberar: **soporte técnico**, reclamos, reemplazos, garantías, pérdida de reputación | **La categoría más costosa** (`Powers, pág. 353`) |

Cuanto más tarde se detecta un problema, más caro es corregirlo: según los promedios de industria de Boehm y Basili citados en `Pressman cap. 15, pág. 318`, el costo medio pasa de **USD 139** en requisitos y **USD 455** en diseño a **USD 977** en codificación, **USD 7.136** en pruebas de sistema y **USD 14.102** en mantenimiento.

### Relación con riesgos y seguridad

- Las fallas de software también provocan daños humanos y legales; caso real visto en clase: **sobredosis por software en Panamá (2000)** donde murieron 5 pacientes y 15 sufrieron complicaciones graves (`Powers, pág. 353`; `Pressman cap. 15, pág. 319`).
- **Calidad y seguridad son *"dos caras de la misma moneda"***: la baja calidad introduce vulnerabilidades (`Powers, pág. 353`). Siguiendo a Gary McGraw (`Pressman cap. 15, pág. 320`), suele prestarse atención sólo a los ***bugs*** (errores de implementación) y se descuidan los ***flaws*** (fallas de **arquitectura y diseño**, más drásticas).

### Factores de gestión que degradan la calidad

1. **Estimaciones poco realistas** impuestas por presión comercial del negocio (`Powers, pág. 354`; `Pressman cap. 15, pág. 321`).
2. **Atajos en planificación o pruebas** (saltear pruebas de dependencias por falta de tiempo).
3. **Falta de gestión de riesgos** (optimismo ciego sin planes de contingencia; riesgo = problema potencial).

> **Ley de Meskimen**: *"Nunca hay tiempo para hacerlo bien, pero siempre hay tiempo para hacerlo otra vez"* (`Powers, pág. 354`).

## Los cuatro pilares para lograr la calidad

Para lograr software de calidad hacen falta cuatro pilares (`Powers, págs. 354–355`; `Pressman cap. 15, pág. 321`):

1. **Procesos (métodos) de ingeniería de software**: entender el problema y aplicar métodos probados de análisis y diseño.
2. **Buenas prácticas de gestión de proyectos**: validar fechas con estimaciones reales, respetar dependencias y planificar riesgos.
3. **Control de calidad (SQC / QC)**: enfocado en **el producto** mediante exámenes, revisiones y testing para detectar defectos (`Powers, págs. 355, 360`).
4. **Aseguramiento de calidad (SQA / QA)**: más abstracto; enfocado en **el proceso** para prevenir defectos (*"¿el proceso es correcto y se sigue?", "¿los casos de prueba fueron bien planteados?"*; `Powers, págs. 355, 360`). En Pressman suele usarse como sinónimo de *quality management*.

## Revisiones técnicas como filtro de calidad

Las revisiones son formas **estáticas** de control de calidad y actúan como el filtro del proceso (`Powers, pág. 355`).

- **Impacto en diseño**: entre el **50 y 65 %** de los errores se introducen en diseño, y las revisiones pueden detectar hasta el **75 %** de ellos (el docente menciona *"salvar el 70"* en clase; `Powers, págs. 355–356`).
- **Amplificación y propagación**: **revisar no retrasa, acelera**, porque corta la amplificación hacia código y pruebas y evita retrabajo masivo (`Powers, págs. 355–356`).
- **Error vs. defecto**: **error** es el problema detectado **antes** del *release*; **defecto** es el detectado **después** del *release* (`Powers, pág. 356`).

### Métricas de revisión (`Pressman cap. 16, pág. 328`; `Powers, págs. 356–357`)

- **Esfuerzo total de revisión**: `E_review = Ep + Ea + Er` (en horas-persona), donde `Ep` es preparación previa, `Ea` evaluación durante la reunión y `Er` retrabajo para corregir lo hallado.
- **Errores totales**: `Err_tot = Err_minor + Err_major`.
- **Densidad de errores**: `Error density = Err_tot / WPS`, donde `WPS` (*Work Product Size*) mide el tamaño del artefacto revisado (diagramas UML, páginas o líneas de código).

### Tipos de revisiones, buenas prácticas y entornos ágiles

| Aspecto | Revisiones informales | Revisiones Técnicas Formales (FTR) |
|---|---|---|
| **Dinámica** | Poca o nula preparación previa, sin agenda formal (`desk check`, *pair programming*) | Reunión planificada (3–5 personas, <= 2 hs de preparación y <= 2 hs de reunión) con roles (líder, revisor, registrador, productor), agenda y seguimiento (`Pressman cap. 16, págs. 332–333`) |
| **Cuándo escalar** | Uso frecuente/continuo en iteraciones cortas | **Aumentar la formalidad** cuando crece la **criticidad** del proyecto (`Powers, pág. 357`) |

- **Buenas prácticas de FTR** (`Powers, pág. 357`): revisar el **producto** y no a la persona · seguir agenda y límites de tiempo · **sólo marcar errores, no resolverlos** en la reunión · usar *checklists* (diseño, arquitectura, interfaz) · capacitar revisores y registrar resultados.
- **Revisiones en entornos ágiles** (`Powers, pág. 358`; `Pressman cap. 16, pág. 336`): *Sprint planning* y *Daily Scrum* (informales), *Pair programming* (revisión continua), *Sprint review* (similar a FTR, aunque decide el *Product Owner*) y **Retrospectiva** (*postmortem* de lecciones aprendidas).

## Aseguramiento (SQA) vs. Control de Calidad (SQC) y Verificación/Validación

SQA es una **actividad sombrilla** transversal a todo el proceso: **todos** los involucrados son responsables de la calidad, no sólo un área al final (`Powers, pág. 358`; `Pressman cap. 17, pág. 340`).

### Diferencia entre SQC, SQA, verificación y validación (`Powers, págs. 359–360`)

| Concepto | Enfoque y objetivo | Pregunta clave y aclaración de clase | Ejemplos |
|---|---|---|---|
| **Control de calidad (QC)** | En el **producto**: detectar defectos | *"¿El producto cumple los requisitos/estándares?"* | Revisiones técnicas, pruebas (*testing*) |
| **Aseguramiento de calidad (QA / SQA)** | En el **proceso**: prevenir defectos | *"¿El proceso es correcto y se sigue?"* Viene de la industria manufacturera | Auditorías de proceso, definición de estándares, capacitación |
| **Verificación y validación** | Cercanas al QC (origen distinto en ingeniería) | **Validación**: *"¿el producto satisface las necesidades del usuario?"* | Prototipos, pruebas de aceptación |

> **Prueba vs. revisión (Gaona)**: **la prueba necesita código ejecutable; la revisión no necesariamente** (puede hacerse sobre requisitos o diagramas) (`Powers, pág. 359`).
> **Control de cambios**: pieza clave de SQA para mantener **trazabilidad** y localizar dónde nacieron los errores (`Powers, pág. 359`).

### Componentes, elementos y tareas de SQA

- **Componentes** (`Powers, pág. 359`): definición del proceso SQA · revisiones y pruebas · métodos y herramientas · control de cambios · auditorías y cumplimiento · mediciones y reportes.
- **Diez elementos de SQA** (`Powers, pág. 361`; `Pressman cap. 17, págs. 341–342`): estándares (IEEE, ISO) · revisiones y auditorías · pruebas (*testing*) · recolección y análisis de errores/defectos · gestión del cambio · educación/capacitación (remarcado en clase: sin formación de RR. HH. no hay calidad) · gestión de proveedores · gestión de la seguridad (*security*) · seguridad física/crítica (*safety*) · gestión de riesgos.
- **Seis tareas del grupo independiente SQA** (`Powers, pág. 362`; `Pressman cap. 17, págs. 343–344`): (1) preparar el Plan de SQA, (2) participar en la descripción del proceso, (3) revisar actividades para verificar cumplimiento del proceso, (4) auditar productos de trabajo contra estándares, (5) asegurar el registro y manejo de desviaciones, (6) registrar e informar no conformidades hasta su resolución.
- **Cuatro objetivos SQA con ejemplos de métricas** (`Powers, pág. 363`; `Pressman cap. 17, pág. 346`): **calidad de requisitos** (modificadores ambiguos, TBA/TBD, cambios por requisito, no trazables) · **calidad del diseño** (*lo central de la materia*: modelo arquitectónico, componentes trazados a arquitectura, complejidad de interfaz, patrones usados) · **calidad del código** (complejidad ciclomática, comentarios, reutilización, legibilidad) · **eficacia del QC** (horas por actividad, tasa de finalización, errores hallados y origen).

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Seguridad de software](seguridad-de-software.md): seguridad, CIA, STRIDE, OWASP y tácticas de Bass.
- [Atributos de calidad y tácticas](atributos-de-calidad-y-tacticas.md): escenarios de 6 partes, modificabilidad y rendimiento.
- [Programación Extrema (XP)](programacion-extrema.md): *pair programming* como revisión informal continua.

