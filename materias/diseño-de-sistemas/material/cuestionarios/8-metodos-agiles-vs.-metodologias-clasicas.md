# Métodos Ágiles vs. Metodologías Clásicas

## 1. ¿Qué implica la práctica de "prueba antes del diseño" en el contexto de XP?


- a) Escribir toda la documentación de diseño detallada antes de comenzar a programar
- b) Ejecutar pruebas de aceptación únicamente después de finalizada toda la iteración
- **✔ c) Escribir los casos de prueba antes de escribir el código, forzando a pensar el diseño antes de codificar**
- d) Delegar la definición de casos de prueba al equipo de control de calidad al final del proyecto

*La práctica consiste en pensar los casos de prueba antes de codificar, lo cual obliga a razonar el diseño. El distractor de la documentación detallada es tentador porque también implica "pensar antes", pero justamente esta práctica busca reemplazar ese modelado exhaustivo, no generarlo.*

## 2. Según Agile Modeling (AM), ¿qué efecto tiene la práctica de prueba antes del diseño sobre la necesidad de modelado detallado?


- a) No tiene relación con el modelado, son actividades independientes
- b) La incrementa, porque cada caso de prueba requiere un modelo UML asociado
- **✔ c) La elimina, porque pensar los casos de prueba ya obliga a razonar el diseño**
- d) La reemplaza por una revisión formal de arquitectura antes de cada iteración

*AM sostiene que pensar en las pruebas antes de codificar reemplaza al modelado detallado, no lo complementa. El distractor de que aumenta el modelado confunde causa y efecto: la práctica busca reducir esa necesidad, no multiplicarla.*

## 3. ¿Cuáles de las siguientes afirmaciones sobre el diseño en XP son correctas?


- **✔ a) El diseño es un proceso incremental e iterativo, sostenido con revisiones periódicas y refactorización**
- b) El diseño se congela apenas termina la primera iteración para evitar retrabajo
- **✔ c) Hay pasos de diseño tanto en la Planificación de Entregas como en la Planificación de cada Iteración**
- d) El diseño se realiza una única vez, al comienzo del desarrollo, y luego no se modifica

*En XP el diseño se revisa y refactoriza continuamente, con pasos concretos en cada planificación de entrega e iteración. Las opciones de "una única vez al comienzo" o "congelado" son las confusiones típicas de quien asocia XP con las metodologías clásicas de diseño previo.*

## 4. ¿Qué caracteriza el alcance del diseño que mantiene un equipo XP en un momento dado?


- a) Anticipa y soporta todas las funcionalidades futuras previstas en el roadmap del producto
- b) Prioriza la flexibilidad genérica por sobre la funcionalidad actual del sistema
- c) Se define una sola vez al comienzo y no se modifica durante el proyecto
- **✔ d) Soporta específicamente la funcionalidad requerida actualmente para el sistema**

*XP mantiene el diseño enfocado en lo que el sistema necesita ahora, no en anticipar funcionalidad futura. El distractor de anticipar el roadmap completo es tentador porque suena a "buen diseño", pero es justo lo que XP evita para no sobrediseñar.*

## 5. ¿En qué se enfoca principalmente el proceso de refactorización en XP?


- **✔ a) Eliminar código duplicado, incrementar la cohesión y minimizar el acoplamiento**
- b) Reducir la cantidad de pruebas automatizadas para acelerar la entrega
- c) Reescribir completamente la arquitectura del sistema en cada iteración
- d) Documentar exhaustivamente cada cambio de diseño antes de aplicarlo

*La refactorización busca eliminar duplicación, subir cohesión y bajar acoplamiento, manteniendo el comportamiento externo. Reescribir toda la arquitectura es un distractor tentador porque suena a "mejorar el diseño", pero la refactorización es incremental, no una reescritura total.*

## 6. ¿Qué práctica sostiene la seguridad de la refactorización, asegurando que el diseño evolucione sin "romper" funcionalidad ya existente?


- **✔ a) Las pruebas intensivas que acompañan la evolución del código**
- b) La revisión gerencial de cada cambio de código antes de aplicarlo
- c) La documentación exhaustiva de diseño elaborada antes de programar
- d) El congelamiento total del código durante cada iteración

*Son las pruebas intensivas las que dan la confianza de que refactorizar no rompe nada. El distractor de la documentación exhaustiva es tentador porque también busca "seguridad", pero XP reemplaza ese control por pruebas automatizadas, no por papeles.*

## 7. ¿Qué describe la frase "codificar y corregir"?


- a) Un proceso de refactorización continua orientado a la calidad
- **✔ b) Un desarrollo artesanal y caótico, sin procesos formales establecidos**
- c) Una técnica formal de la ingeniería de software clásica con planificación detallada
- d) Una metodología ágil basada en iteraciones cortas de codificación

*La frase describe años de desarrollo sin procesos formales, puramente artesanal. El distractor que la asocia a un método ágil confunde el caos previo con el enfoque iterativo y disciplinado que después propusieron los métodos ágiles.*

## 8. ¿Qué elemento estuvo ausente durante el período de desarrollo caracterizado como "codificar y corregir"?


- a) Compiladores capaces de generar código optimizado
- b) Herramientas de control de versiones en general
- **✔ c) Procesos formales y establecidos de desarrollo**
- d) Lenguajes de programación de alto nivel

*Lo que faltaba era un proceso formal y establecido para guiar el desarrollo, no herramientas técnicas puntuales. El distractor sobre control de versiones es plausible pero es un detalle técnico, no la causa señalada del caos.*

## 9. ¿Cuál es la crítica más habitual hacia las metodologías clásicas de desarrollo de software?


- a) Su rechazo total a cualquier tipo de planificación
- b) Su falta de documentación técnica
- c) Su incapacidad para producir software funcional
- **✔ d) Su burocracia excesiva**

*La burocracia es la crítica central señalada hacia las metodologías clásicas. El distractor de "falta de documentación" es engañoso porque en realidad estas metodologías se caracterizan por producir demasiada documentación, no por carecer de ella.*

## 10. ¿Qué disciplina inspiró el proceso detallado con fuerte énfasis en la planificación que establecieron las metodologías clásicas?


- **✔ a) Otras disciplinas de la ingeniería**
- b) La administración de recursos humanos
- c) Los métodos ágiles surgidos posteriormente
- d) Las ciencias sociales aplicadas a la gestión de equipos

*El proceso detallado y planificado se inspiró en otras disciplinas de la ingeniería, buscando predictibilidad. El distractor de los métodos ágiles es un error de orden histórico: estos surgieron después, como reacción a la burocracia de las metodologías clásicas.*

## 11. ¿Cuáles de las siguientes son limitaciones señaladas para la aplicación de métodos ágiles?


- a) Proyectos organizados en iteraciones cortas con entregas frecuentes
- **✔ b) Equipos geográficamente distribuidos**
- **✔ c) Entornos con requerimientos claramente definidos desde el inicio, como sistemas de tiempo real**
- **✔ d) Resistencia gerencial a prácticas como la programación de a pares**

*Las tres primeras son limitaciones explícitas para aplicar métodos ágiles. La cuarta opción describe justamente una característica propia y deseable de los métodos ágiles, no una limitación, por lo que es el distractor más tentador para quien confunde característica con obstáculo.*

## 12. ¿Qué enfoque caracteriza a los métodos ágiles frente al desarrollo de software?


- a) Centrado en la documentación exhaustiva como principal entregable
- **✔ b) Iterativo e incremental, con pequeñas entregas reales a corto plazo**
- c) Basado en contratos de precio fijo definidos desde el inicio del proyecto
- d) Predictivo, con un plan detallado fijado antes de comenzar a codificar

*Los métodos ágiles se definen por su enfoque iterativo e incremental con entregas frecuentes. El distractor del plan detallado fijo describe justamente el enfoque predictivo de las metodologías clásicas, que es lo opuesto a lo ágil.*

## 13. ¿Qué tipo de relación con el cliente requieren los procesos adaptables?


- a) Una relación formal basada en contratos de precio fijo
- b) Ninguna relación directa, delegada en un intermediario contractual
- c) Una relación distante, limitada a revisiones trimestrales
- **✔ d) Una relación cercana, con control fino del cliente sobre el desarrollo**

*Los procesos adaptables necesitan al cliente cerca, involucrado y con control fino sobre las decisiones. El distractor del contrato de precio fijo es justamente lo contrario a lo que permiten estos procesos, ya que no funcionan bajo ese esquema.*

## 14. ¿Cuáles de las siguientes afirmaciones sobre los procesos adaptables son correctas?


- **✔ a) XP sugiere iteraciones de entre 1 y 3 semanas de duración**
- **✔ b) Se basan en el desarrollo iterativo para controlar lo impredecible**
- c) SCRUM sugiere iteraciones de una semana de duración
- **✔ d) No funcionan con contratos de precio fijo**

*Las tres primeras son correctas según lo establecido para los procesos adaptables. La cuarta es el distractor más tentador porque mezcla el dato real: SCRUM sugiere iteraciones de un mes, no de una semana.*

## 15. En el desarrollo iterativo, ¿qué característica tiene la planificación a largo plazo en comparación con la de corto plazo?


- a) Es igualmente estable que la planificación a corto plazo durante todo el proyecto
- **✔ b) Es variable, mientras que solo los planes a corto plazo son estables**
- c) Es fija desde el inicio, mientras que la de corto plazo cambia constantemente
- d) No existe planificación a largo plazo en absoluto en este enfoque

*La planificación a largo plazo es variable y solo la de corto plazo (una iteración) se mantiene estable. El distractor que invierte esto (largo plazo fijo, corto plazo cambiante) confunde el principio central del desarrollo iterativo.*

## 16. ¿Qué ventaja aporta el desarrollo iterativo frente a depender solo de la documentación para detectar errores?


- a) Extiende los plazos de entrega para garantizar mayor calidad documental
- **✔ b) Permite detectar errores rápidamente mediante versiones operacionales probadas e integradas**
- c) Elimina por completo la necesidad de realizar pruebas durante el proyecto
- d) Reemplaza la retroalimentación del cliente por revisiones internas del equipo

*Producir versiones operacionales frecuentes permite detectar errores antes que confiando en la documentación. El distractor de eliminar las pruebas es contrario al espíritu del desarrollo iterativo, que justamente se apoya en pruebas constantes.*

## 17. ¿Quiénes deben realizar las decisiones técnicas importantes, como la estimación de tiempo, según el enfoque ágil sobre el factor humano?


- **✔ a) Quienes desarrollarán la característica**
- b) El cliente, sin intervención del equipo técnico
- c) Un gerente de proyecto ajeno al equipo técnico
- d) Un comité de calidad externo al equipo de desarrollo

*Las decisiones técnicas, incluida la estimación, quedan en manos de quienes efectivamente van a desarrollar la característica. El distractor del gerente ajeno refleja la visión tradicional que el enfoque ágil rechaza explícitamente.*

## 18. ¿Cuáles de las siguientes afirmaciones reflejan la visión de los métodos ágiles sobre el factor humano?


- **✔ a) No adhieren a la visión Taylorista de las personas como recursos reemplazables**
- **✔ b) Valoran a los individuos y su integración en equipo**
- c) Tratan a las personas como roles reemplazables, igual que las metodologías tradicionales
- **✔ d) Consideran el desarrollo de software como una tarea creativa**

*Los métodos ágiles valoran a las personas, rechazan el Taylorismo y ven el desarrollo como tarea creativa. La cuarta opción describe justamente la visión tradicional que los métodos ágiles rechazan, siendo el distractor más engañoso por contradecir directamente el concepto.*

## 19. Según el Manifiesto Ágil, ¿cómo se relacionan los valores de la izquierda con los de la derecha (por ejemplo, software funcionando vs. documentación extensa)?


- a) Se descarta por completo cualquier valor en los ítems de la derecha
- b) Se valoran ambos por igual, sin ninguna preferencia establecida
- **✔ c) Se reconoce valor en los ítems de la derecha, pero se valora más a los de la izquierda**
- d) Se prioriza siempre la documentación extensa por sobre el software funcionando

*El Manifiesto no descarta los ítems de la derecha, sino que da más peso a los de la izquierda. El distractor de descartarlos por completo es el error típico de quien interpreta el manifiesto como un rechazo total a la documentación o los procesos.*

## 20. ¿Cuáles de los siguientes son valores establecidos en el Manifiesto Ágil?


- **✔ a) Colaboración del cliente sobre negociación contractual**
- **✔ b) Individuos e interacciones sobre procesos y herramientas**
- **✔ c) Responder al cambio sobre seguir un plan**
- d) Seguir un plan sobre responder al cambio

*Los tres primeros son los valores textuales del Manifiesto Ágil. La cuarta opción invierte exactamente el valor real, siendo el distractor más tentador para quien recuerda el tema pero confunde el sentido de la preferencia.*
