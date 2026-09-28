# Diseño de Software: XP, Patrones y Principios SOLID

## 1. ¿Qué implica la práctica de "Prueba antes del diseño"?


- a) Documentar el diseño detallado antes de comenzar a codificar
- **✔ b) Considerar primero los casos de prueba antes de escribir el código**
- c) Escribir el código completo y luego generar pruebas automáticas
- d) Diseñar la arquitectura completa antes de definir los casos de uso

*La práctica consiste justamente en pensar los casos de prueba antes de codificar, lo que fuerza a razonar el diseño primero. El distractor de escribir el código y luego las pruebas invierte el orden que define la práctica.*

## 2. ¿Cuáles de las siguientes afirmaciones sobre "Prueba antes del diseño" son correctas? Seleccioná todas las que apliquen.


- **✔ a) Es una parte integral de XP**
- **✔ b) Según Agile Modeling, remueve la necesidad de modelado detallado del diseño**
- c) Requiere completar toda la documentación UML antes de iniciar el desarrollo
- d) Solo aplica a proyectos que usan arquitectura en capas

*La práctica es parte de XP y, según AM, evita el modelado detallado previo. No exige documentación UML exhaustiva ni está limitada a arquitecturas en capas, esas condiciones no aparecen en la definición de la práctica.*

## 3. ¿Qué caracteriza al diseño que mantiene un equipo XP?


- a) Anticipa todos los requisitos futuros posibles desde el inicio
- **✔ b) Soporta específicamente la funcionalidad requerida actualmente para el sistema**
- c) Se define completamente antes de comenzar cualquier iteración
- d) Lo define únicamente el arquitecto sin revisiones posteriores

*El diseño en XP se enfoca en lo que se necesita ahora, no en anticipar todo lo futuro. El distractor de anticipar todos los requisitos futuros contradice el enfoque incremental de XP.*

## 4. ¿Cuáles de las siguientes afirmaciones sobre el diseño en XP son correctas? Seleccioná todas las que apliquen.


- a) Se realiza una única vez al comienzo del desarrollo
- b) Se documenta exhaustivamente antes de cada iteración
- **✔ c) Es un proceso incremental e iterativo llevado a cabo por revisiones periódicas y refactorización**
- **✔ d) Hay pasos de diseño en cada Planificación de Entregas y en cada Planificación de Iteración**

*El diseño en XP ocurre en cada planificación y evoluciona mediante revisiones y refactorización. El distractor de que se hace una única vez al inicio contradice explícitamente el carácter incremental del diseño en XP.*

## 5. ¿En qué se enfoca el proceso de refactorización dentro de XP?


- a) En incrementar el acoplamiento para facilitar la reutilización de código
- **✔ b) En eliminar código duplicado, incrementando la cohesión y minimizando el acoplamiento**
- c) En aumentar exclusivamente la cantidad de pruebas unitarias del sistema
- d) En documentar el diseño original sin modificar el código existente

*La refactorización busca eliminar duplicación, mejorar cohesión y reducir acoplamiento. El distractor de incrementar el acoplamiento es lo opuesto a lo que busca este proceso.*

## 6. ¿Qué asegura que la refactorización no rompa la funcionalidad existente del sistema?


- a) La documentación detallada de cada clase antes de modificarla
- **✔ b) Las pruebas intensivas que respaldan al código durante la evolución del diseño**
- c) El uso exclusivo de patrones de diseño en cada iteración
- d) La revisión manual del código por parte del arquitecto principal

*XP respalda la refactorización con pruebas intensivas para detectar roturas. El distractor de la revisión manual del arquitecto no es el mecanismo que menciona la práctica, sino un control alternativo menos confiable.*

## 7. ¿Qué riesgo corre un diseño que no considera los cambios futuros del sistema?


- a) Una disminución del rendimiento en tiempo de ejecución del sistema
- b) Un mayor acoplamiento que no afecta el proceso de testing
- **✔ c) Un rediseño mayor que puede implicar redefinición y reimplementación de clases, modificación de clientes y retesteo**
- d) Un aumento en la cantidad de líneas de código sin impacto real en el mantenimiento

*No anticipar el cambio expone al sistema a un rediseño mayor con reimplementación y retesteo. El distractor del rendimiento en tiempo de ejecución no es la consecuencia que se describe, sino un problema distinto de performance.*

## 8. ¿Cuáles de las siguientes son causas comunes de rediseño que los patrones de diseño ayudan a evitar? Seleccioná todas las que apliquen.


- a) Dependencia en el lenguaje de programación utilizado para implementar el sistema
- **✔ b) Dependencia en operaciones específicas**
- **✔ c) Crear un objeto especificando una clase explícitamente**
- **✔ d) Dependencia en representaciones o implementaciones de objetos**

*Las causas listadas incluyen crear objetos con clases explícitas, depender de operaciones específicas y depender de representaciones de objetos. El distractor sobre el lenguaje de programación no figura entre las causas mencionadas, que hablan de plataforma de hardware y software, no del lenguaje en sí.*

## 9. ¿Cuál de los siguientes es uno de los siete problemas de diseño identificados en el editor Lexi?


- **✔ a) Soporte de múltiples estándares de apariencia (look-and-feel)**
- b) Gestión de una base de datos distribuida entre servidores
- c) Soporte de múltiples lenguajes de programación para su implementación
- d) Integración con sistemas de control de versiones de código

*El soporte de múltiples look-and-feel es uno de los siete problemas identificados en Lexi. Los otros distractores refieren a temas de infraestructura o herramientas que no forman parte de esa lista.*

## 10. ¿Cuáles de los siguientes se cuentan entre los siete problemas de diseño identificados en el editor Lexi? Seleccioná todas las que apliquen.


- **✔ a) Estructura del documento**
- b) Optimización del rendimiento de la red de comunicaciones
- **✔ c) Soporte de múltiples sistemas de ventanas**
- **✔ d) Corrección ortográfica y separación silábica**

*La estructura del documento, la corrección ortográfica y el soporte de múltiples sistemas de ventanas son tres de los siete problemas de Lexi. El distractor sobre optimización de red no aparece en esa lista de problemas.*

## 11. ¿Qué representa el acrónimo SOLID en el contexto de la programación orientada a objetos?


- a) Cuatro patrones de diseño estructurales aplicados al diseño de clases
- b) Tres principios de arquitectura en capas para sistemas distribuidos
- c) Seis reglas de estilo de codificación para mejorar la legibilidad
- **✔ d) Cinco principios básicos de la programación orientada a objetos y el diseño**

*SOLID agrupa cinco principios de diseño orientado a objetos. El distractor de los patrones estructurales confunde principios de diseño con patrones de diseño, que son conceptos distintos.*

## 12. ¿Quién enunció los principios SOLID?


- a) Martin Fowler, en su libro sobre refactorización
- b) Kent Beck, como parte de la metodología XP
- c) Erich Gamma, junto al resto del Gang of Four
- **✔ d) Robert C. Martin, alrededor del año 2000**

*Los principios SOLID fueron enunciados por Robert C. Martin a comienzos de la década del 2000. El distractor de Martin Fowler confunde a este autor, vinculado a la refactorización, con el creador de SOLID.*

## 13. ¿Qué establece el Principio de Responsabilidad Única (SRP)?


- a) Una clase debe implementar múltiples interfaces relacionadas entre sí
- b) Una clase debe estar abierta a la extensión pero cerrada a la modificación
- **✔ c) No debería haber nunca más de una razón para cambiar una clase**
- d) Una clase debe depender de abstracciones y no de implementaciones concretas

*SRP indica que una clase debe tener una sola razón para cambiar. El distractor sobre depender de abstracciones corresponde al principio de inversión de dependencias, no al de responsabilidad única.*

## 14. En el ejemplo de una clase CorreoElectronico con métodos para emisor, receptor y contenido, ¿por qué se considera que viola el SRP?


- a) Porque los métodos no siguen una convención de nombres adecuada
- **✔ b) Porque cambios en el contenido y cambios en el protocolo afectan a la misma clase por razones distintas**
- c) Porque la clase no implementa ninguna interfaz en su diseño
- d) Porque la clase depende de una clase base concreta en lugar de una abstracción

*La clase debe modificarse tanto si cambia el contenido como si cambia el protocolo, es decir, tiene más de un motivo de cambio. El distractor sobre depender de una clase base concreta corresponde a otro principio, no al SRP.*

## 15. ¿Qué establece el principio Open/Closed?


- a) Una clase debe tener una única razón para cambiar en su ciclo de vida
- **✔ b) Las entidades de software deberían estar abiertas a la extensión pero cerradas a la modificación**
- c) Las subclases deben poder sustituir a su clase base sin alterar el comportamiento esperado
- d) Las clases deben depender únicamente de interfaces abstractas en todos los casos

*OCP propone que el comportamiento se extienda sin modificar el código existente. El distractor sobre sustituir subclases por su clase base corresponde al principio de sustitución de Liskov, no al Open/Closed.*

## 16. En el ejemplo del EditorGrafico que usa un switch sobre el tipo de forma para dibujar, ¿qué principios se violan al tener que modificar el método para agregar una nueva forma? Seleccioná todas las que apliquen.


- a) Liskov Substitution Principle
- b) Interface Segregation Principle
- **✔ c) Open/Closed Principle**
- **✔ d) Single Responsibility Principle**

*Agregar una forma obliga a modificar el método existente, violando OCP, y además mezcla responsabilidades en la misma clase, violando SRP. Los distractores de ISP y LSP no aplican porque el problema no involucra interfaces sobrecargadas ni sustitución de subclases.*

## 17. ¿Qué establece el Principio de Sustitución de Liskov (LSP)?


- a) Las interfaces deben mantenerse pequeñas y cohesivas para cada tipo de cliente
- b) Los módulos de alto nivel no deben depender de módulos de bajo nivel concretos
- c) Las clases derivadas deben implementar todas las interfaces que implementa la clase base
- **✔ d) Las funciones que usan referencias a clases base deben poder usar objetos de clases derivadas sin saberlo**

*LSP exige que las subclases puedan reemplazar a la clase base sin que el código cliente note la diferencia. El distractor sobre interfaces pequeñas y cohesivas corresponde al principio de segregación de interfaces, no al de sustitución.*

## 18. En el ejemplo del cuadrado que hereda de rectángulo, ¿cuál es la solución propuesta para evitar la violación del LSP?


- a) Hacer que cuadrado sobrescriba los métodos de ancho y alto para igualar siempre los lados
- b) Eliminar la clase cuadrado del diseño del sistema por completo
- c) Permitir que la clase rectángulo herede directamente de la clase cuadrado
- **✔ d) Crear una interfaz común (IRectangular) de la que hereden tanto rectángulo como cuadrado**

*La solución consiste en crear una interfaz común de la que ambas clases hereden, evitando la relación de herencia problemática. El distractor de sobrescribir ancho y alto es justamente el comportamiento que genera el problema original, no la solución.*

## 19. ¿Qué establece el Principio de Segregación de Interfaces (ISP)?


- **✔ a) Los clientes no deberían ser forzados a depender de interfaces que no utilizan**
- b) Una clase debe tener una única responsabilidad bien definida
- c) Las subclases deben respetar el contrato definido por su clase base
- d) Las clases deben depender de abstracciones y no de implementaciones concretas

*ISP busca interfaces pequeñas y específicas para que los clientes no dependan de métodos que no usan. El distractor sobre depender de abstracciones corresponde al principio de inversión de dependencias, no al de segregación de interfaces.*

## 20. En el ejemplo de la interfaz ITrabajador con métodos Trabajar, Descansar y Comer, ¿cuál es el problema al implementarla en una clase Robot?


- **✔ a) Robot se ve forzado a implementar métodos que no necesita, como Descansar o Comer**
- b) Robot no puede implementar el método Trabajar debido a restricciones de herencia múltiple
- c) La interfaz ITrabajador impide que Robot use polimorfismo con otras clases
- d) Robot necesita heredar de una clase abstracta en lugar de implementar una interfaz

*Robot debe implementar métodos irrelevantes para su naturaleza, como Descansar o Comer, lo cual evidencia la violación del ISP. El distractor sobre restricciones de herencia múltiple no tiene relación con el problema descripto, que es puramente de diseño de interfaces.*
