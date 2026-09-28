# Diseño de Software: XP, Cambio y Principios SOLID

## 1. ¿Qué implica la práctica de Prueba Antes del Diseño según Agile Modeling?


- a) Reemplaza completamente la necesidad de revisar el diseño en iteraciones futuras
- **✔ b) Fuerza a pensar el diseño antes de escribir código, removiendo la necesidad de modelado detallado del diseño**
- c) Elimina la necesidad de escribir pruebas automatizadas durante el desarrollo
- d) Requiere escribir toda la documentación de diseño antes de definir los casos de prueba

*La práctica hace que se piense el diseño a través de los casos de prueba, evitando modelado detallado previo. El distractor tentador es pensar que se escribe documentación de diseño primero, pero es justo lo contrario: se evita ese modelado formal.*

## 2. ¿Cuáles de las siguientes afirmaciones sobre Prueba Antes del Diseño son correctas?


- a) Sustituye por completo la necesidad de escribir código de producción
- **✔ b) Es una parte integral de XP**
- c) Fue creada específicamente para reemplazar la refactorización
- **✔ d) Consiste en considerar los casos de prueba antes de escribir el código**

*Es parte de XP y consiste en pensar los casos de prueba antes de codificar. El distractor de que sustituye al código de producción es tentador pero falso: las pruebas acompañan al código, no lo reemplazan.*

## 3. Según la práctica de Diseño Simple en XP, ¿qué funcionalidad debe soportar el diseño del sistema?


- a) Únicamente los requisitos no funcionales de performance y seguridad
- **✔ b) Específicamente la funcionalidad requerida actualmente para el sistema**
- c) Las funcionalidades que el cliente podría solicitar en el largo plazo
- d) Toda la funcionalidad prevista para futuras versiones del producto

*El diseño simple se enfoca solo en lo que se necesita ahora. El distractor de diseñar para funcionalidad futura es tentador porque suena previsor, pero XP evita el sobrediseño anticipado.*

## 4. ¿Cuáles de las siguientes afirmaciones sobre el diseño en XP son correctas?


- **✔ a) Se lleva a cabo mediante revisiones periódicas y refactorización**
- **✔ b) Es un proceso incremental e iterativo**
- c) Se realiza una única vez al comienzo del desarrollo
- **✔ d) Hay pasos de diseño en cada Planificación de Entregas y de Iteración**

*El diseño en XP es incremental, iterativo, con pasos en cada planificación y sostenido por revisiones y refactorización. El distractor de que se hace una sola vez al inicio es justamente lo que XP rechaza.*

## 5. ¿En qué se enfoca principalmente el proceso de refactorización en XP?


- a) En la creación de nueva documentación técnica detallada del diseño
- b) En la reescritura completa del sistema desde cero en cada iteración
- **✔ c) En la eliminación de código duplicado, incrementando la cohesión y minimizando el acoplamiento**
- d) En la reducción del número de pruebas automatizadas necesarias

*La refactorización busca eliminar duplicación, mejorar cohesión y bajar acoplamiento. El distractor de reescribir todo desde cero es tentador pero incorrecto: la refactorización mejora el diseño existente sin descartarlo.*

## 6. ¿Qué garantiza que la refactorización no rompa funcionalidad existente?


- a) La reducción de la cantidad de iteraciones del proyecto
- b) La revisión manual del código por parte del cliente
- c) La eliminación previa de todo el código duplicado
- **✔ d) Las pruebas intensivas que acompañan al proceso**

*Son las pruebas intensivas las que aseguran que el diseño evolucione sin romper lo hecho. El distractor de la revisión del cliente es tentador porque suena razonable, pero el mecanismo real es el testing, no la validación humana.*

## 7. ¿Qué riesgo corre un diseño que no considera los cambios futuros?


- **✔ a) Un rediseño mayor que implique redefinición y reimplementación de clases, modificación de clientes y retesteo**
- b) Una reducción en la cantidad de patrones de diseño aplicables al sistema
- c) Una disminución automática de la cohesión de todas las clases del sistema
- d) La imposibilidad de escribir pruebas de prueba antes del diseño

*No anticipar cambios puede forzar un rediseño costoso que afecta clases y clientes. El distractor sobre reducir patrones aplicables es tentador pero no es lo que describe el riesgo real, que es el costo de rehacer el trabajo.*

## 8. ¿Cuáles de las siguientes son causas comunes de rediseño que los patrones de diseño ayudan a abordar?


- **✔ a) Dependencia en plataforma de hardware y software**
- **✔ b) Crear un objeto especificando una clase explícitamente**
- **✔ c) Dependencia en operaciones específicas**
- d) Exceso de pruebas automatizadas en el proceso de desarrollo

*Las tres primeras son causas listadas explícitamente que motivan el uso de patrones de diseño. El distractor sobre exceso de pruebas es tentador porque suena a problema de desarrollo, pero no figura como causa de rediseño en este contexto.*

## 9. ¿Cuál de los siguientes es uno de los siete problemas de diseño identificados en el editor Lexi?


- a) Compresión de archivos multimedia
- **✔ b) Estructura del documento**
- c) Gestión de versiones del documento
- d) Sincronización con servicios en la nube

*La estructura del documento es uno de los siete problemas listados para Lexi. Los otros distractores son problemas plausibles de cualquier editor moderno, pero no forman parte de la lista original de Lexi.*

## 10. ¿Cuáles de los siguientes son problemas de diseño identificados en el editor Lexi?


- a) Integración con bases de datos relacionales
- **✔ b) Soporte de múltiples sistemas de ventanas**
- **✔ c) Corrección ortográfica y separación silábica**
- **✔ d) Formateo**

*Formateo, corrección ortográfica/separación silábica y soporte de múltiples sistemas de ventanas son tres de los siete problemas listados. La integración con bases de datos es un distractor plausible pero no figura en la lista de Lexi.*

## 11. ¿Cuáles de las siguientes afirmaciones sobre los principios SOLID son correctas?


- a) Garantizan que un sistema nunca requerirá refactorización
- b) Se aplican únicamente a proyectos que usan lenguajes funcionales
- **✔ c) Representan cinco principios básicos de la programación orientada a objetos y el diseño**
- **✔ d) Fueron enunciados por Robert C. Martin alrededor del año 2000**

*SOLID fue enunciado por Robert C. Martin alrededor del 2000 y son cinco principios básicos de POO y diseño. El distractor de que eliminan la necesidad de refactorizar es tentador pero falso: SOLID facilita el mantenimiento, no lo hace innecesario.*

## 12. ¿Qué se logra al aplicar los principios SOLID en conjunto?


- **✔ a) Es más probable crear un sistema fácil de mantener y ampliar en el tiempo**
- b) Se elimina la necesidad de realizar pruebas de software
- c) Se garantiza automáticamente un mejor rendimiento en tiempo de ejecución
- d) Se reduce a cero la cantidad de clases necesarias en el sistema

*Aplicar SOLID en conjunto hace más probable un sistema mantenible y extensible. El distractor de mejor rendimiento es tentador porque suena a beneficio técnico, pero SOLID apunta a mantenibilidad, no a performance.*

## 13. ¿Qué establece el Principio de Responsabilidad Única (SRP)?


- a) Una clase debe permitir ser extendida solo mediante modificación directa de su código
- b) Una clase debe implementar todas las interfaces posibles relacionadas con su dominio
- c) Una clase debe depender siempre de implementaciones concretas y no de abstracciones
- **✔ d) No debería haber nunca más de una razón para cambiar una clase**

*SRP establece que una clase debe tener un único motivo de cambio. El distractor de implementar todas las interfaces posibles es tentador porque suena a cobertura completa, pero SRP busca justamente concentrar responsabilidades, no ampliarlas.*

## 14. En el ejemplo del correo electrónico que viola SRP, ¿por qué la clase CorreoElectronico tenía más de una razón para cambiar?


- a) Porque el método SetEmisor dependía de una clase abstracta externa
- b) Porque la clase heredaba de múltiples clases base con responsabilidades distintas
- c) Porque la clase no implementaba ninguna interfaz relacionada con el correo
- **✔ d) Porque un cambio en el contenido o en el protocolo del correo obligaba a modificar la misma clase**

*El problema es que dos motivos distintos de cambio (contenido y protocolo) afectan a la misma clase. El distractor sobre herencia múltiple es tentador porque suena a un problema de diseño similar, pero no es lo que describe este ejemplo puntual.*

## 15. ¿Qué establece el Principio Abierto/Cerrado (OCP)?


- a) Las funciones deben conocer los detalles internos de sus clases derivadas
- b) Los módulos deben poder modificarse libremente para agregar nuevas funcionalidades
- c) Las clases deben depender exclusivamente de sus subclases para funcionar correctamente
- **✔ d) Las entidades de software deberían estar abiertas a la extensión pero cerradas a la modificación**

*OCP dice que las entidades deben poder extenderse sin modificar su código existente. El distractor de modificar libremente los módulos es justo lo opuesto a lo que propone el principio.*

## 16. ¿Cuáles de las siguientes son formas mediante las cuales, según el Principio Abierto/Cerrado, se puede cambiar el comportamiento de una clase sin modificar su código existente?


- a) Modificación directa del método original
- **✔ b) Herencia**
- **✔ c) Composición**
- **✔ d) Polimorfismo**

*Herencia, polimorfismo y composición permiten extender comportamiento sin tocar el código existente. El distractor de modificar directamente el método es exactamente lo que OCP busca evitar.*

## 17. ¿Qué establece el Principio de Sustitución de Liskov (LSP)?


- a) Las funciones deben conocer explícitamente el tipo concreto de cada objeto derivado
- b) Las clases derivadas deben implementar más métodos que sus clases base
- c) Las clases base deben depender siempre de sus clases derivadas para funcionar
- **✔ d) Las funciones que usan referencias a clases base deben poder usar objetos de clases derivadas sin saberlo**

*LSP exige que las subclases puedan sustituir a la clase base sin que el código cliente lo note. El distractor de que las funciones conozcan el tipo concreto es lo contrario a la idea de sustitución transparente.*

## 18. En el ejemplo del cuadrado que hereda de rectángulo, ¿por qué se viola el LSP?


- a) Porque el rectángulo depende directamente de la clase cuadrado para funcionar
- b) Porque el cuadrado no puede calcular su área correctamente en ningún caso
- c) Porque la interfaz IRectangular no puede ser implementada por ninguna clase
- **✔ d) Porque al modificar alto y ancho por separado el cuadrado no se comporta correctamente, ya que sus lados se igualan**

*El problema surge porque modificar alto y ancho por separado rompe la invariante del cuadrado. El distractor sobre que la interfaz no puede implementarse es falso, ya que justamente esa interfaz es la solución propuesta.*

## 19. ¿Qué establece el Principio de Segregación de Interfaces (ISP)?


- **✔ a) Los clientes no deberían ser forzados a depender de interfaces que no utilizan**
- b) Las interfaces deben concentrar todos los métodos posibles de un dominio en una sola definición
- c) Las clases deben implementar únicamente interfaces con un solo método cada una
- d) Los clientes deben depender siempre de clases concretas en lugar de interfaces

*ISP busca que los clientes no dependan de métodos que no usan. El distractor de concentrar todos los métodos en una sola interfaz es justo el problema que ISP intenta resolver, no su enunciado.*

## 20. En el ejemplo de la interfaz ITrabajador con métodos Trabajar, Descansar y Comer, ¿cuál era el problema para una clase como Robot?


- a) Debía heredar de una clase abstracta que no existía en el sistema
- **✔ b) Se veía forzada a implementar métodos que no necesitaba, como Descansar o Comer**
- c) Necesitaba implementar más interfaces de las que ya tenía disponibles
- d) No podía implementar ningún método de la interfaz ITrabajador

*Robot debía implementar métodos irrelevantes para su naturaleza, como Descansar o Comer. El distractor de que no podía implementar ningún método es incorrecto: sí podía implementarlos, aunque no tuvieran sentido para un robot.*
