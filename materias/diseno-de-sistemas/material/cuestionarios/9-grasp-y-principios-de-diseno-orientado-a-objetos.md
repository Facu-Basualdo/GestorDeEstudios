# GRASP y principios de diseño orientado a objetos

## 1. ¿Cuál es la función principal del patrón Controlador en el diseño orientado a objetos?


- a) Implementar directamente toda la lógica de negocio del caso de uso que representa.
- b) Almacenar de forma persistente los datos ingresados por el usuario en la base de datos.
- c) Generar automáticamente las pantallas de la interfaz de usuario del sistema.
- **✔ d) Actuar como intermediario entre la interfaz de usuario y la lógica de negocio, recibiendo datos y enviándolos a las clases correspondientes.**

*El Controlador actúa como intermediario y coordinador, no como quien ejecuta la lógica de negocio. La opción B es tentadora porque el controlador 'controla o ejecuta un caso de uso', pero la nota aclara que 'no hace demasiado por sí solo, solo coordina'.*

## 2. ¿Cuáles de las siguientes afirmaciones sobre el patrón Controlador son correctas?


- **✔ a) Es el primer objeto llamado después de un cambio en la interfaz de usuario.**
- b) Debe concentrar toda la lógica de negocio para minimizar la cantidad de clases del sistema.
- c) Pertenece a la capa de presentación, ya que dibuja directamente los elementos visuales.
- **✔ d) Se recomienda dividir los eventos del sistema en el mayor número de controladores posible para aumentar cohesión y disminuir acoplamiento.**

*Ambas afirmaciones están respaldadas por la definición del patrón. La opción C es un distractor tentador porque el controlador está cerca de la UI, pero pertenece a la capa de aplicación o servicios, no a la de presentación.*

## 3. Según el patrón GRASP Creador, ¿cuáles de las siguientes condiciones justifican que una clase sea responsable de crear instancias de otra?


- **✔ a) Tiene la información necesaria para realizar la creación, es decir, es 'Experta'.**
- **✔ b) Usa directamente las instancias creadas del objeto.**
- **✔ c) Contiene o agrega la clase que va a crear.**
- d) Comparte el mismo espacio de nombres que la clase a crear.

*Las tres condiciones reales son contener/agregar, ser experta en la información necesaria y usar directamente las instancias. Compartir espacio de nombres es un distractor plausible pero no forma parte de las condiciones del patrón.*

## 4. Si la clase Cliente contiene y usa directamente los objetos Pedido en sus métodos, ¿qué indica el patrón Creador respecto a la responsabilidad de crear instancias de Pedido?


- a) Que se debe crear una Fabricación Pura para desacoplar la creación de Pedido de Cliente.
- b) Que Pedido debe crearse a sí mismo mediante un constructor estático, ya que es un patrón de mejor diseño.
- c) Que la creación debe delegarse a InformePresenter para mantener la separación de responsabilidades.
- **✔ d) Que Cliente debería ser la clase responsable de crear instancias de Pedido, dado que las contiene y usa directamente.**

*Cliente cumple las condiciones del Creador al contener y usar Pedido directamente. La opción B es tentadora porque Fabricación Pura es otro patrón GRASP relacionado con reducir acoplamiento, pero no aplica cuando ya existe una clase natural que cumple las condiciones de creación.*

## 5. ¿Qué establece el principio GRASP Experto en información?


- a) Que la responsabilidad de una operación debe asignarse siempre a la clase controladora del caso de uso.
- b) Que la responsabilidad de una operación debe asignarse a la clase que tenga menos métodos implementados.
- c) Que la responsabilidad de una operación debe asignarse a la clase que se instancia primero en el sistema.
- **✔ d) Que la responsabilidad de una operación debe asignarse a la clase que posee la información necesaria para realizarla.**

*El principio asigna la responsabilidad según quién tiene la información, promoviendo cohesión y encapsulamiento. La opción C confunde este principio con el patrón Controlador, que coordina pero no necesariamente posee la información.*

## 6. En un sistema con las clases Informe e InformePresenter, ¿qué clase debería calcular el total como suma de los valores parciales, según el principio Experto en información?


- **✔ a) Informe, porque es quien posee los datos parciales necesarios para calcular el total.**
- b) Cualquiera de las dos, ya que ambas tienen acceso indirecto a los datos parciales.
- c) Una nueva clase de Fabricación Pura creada especialmente para realizar el cálculo.
- d) InformePresenter, porque su función es procesar y transformar los datos antes de mostrarlos.

*Informe es quien tiene la información necesaria y debe calcular el total. La opción B es tentadora porque suena a que el Presenter procesa datos, pero su rol es solo presentar, no calcular.*

## 7. ¿En qué consiste el patrón GRASP Fabricación Pura?


- a) En reemplazar una clase existente por una interfaz que oculte su implementación concreta.
- b) En agrupar varias clases del dominio en un único componente para simplificar el diseño.
- c) En dividir una clase del dominio en dos subclases que hereden su comportamiento original.
- **✔ d) En crear una clase artificial que no representa una entidad del dominio, con el fin de reducir acoplamiento, aumentar cohesión y potenciar reutilización.**

*La Fabricación Pura crea una clase inventada, ajena al dominio, para mejorar la estructura. La opción C es tentadora porque se parece a Variaciones protegidas (uso de interfaces), pero ese no es el mecanismo de este patrón.*

## 8. ¿Cuáles de las siguientes afirmaciones sobre la Fabricación Pura son correctas?


- **✔ a) Surge cuando una clase tiene poca cohesión y no existe otra clase natural del dominio donde ubicar ciertos métodos.**
- b) Solo puede aplicarse en sistemas que no utilicen arquitecturas como MVC o MVP.
- **✔ c) Su abuso puede derivar en clases función, es decir, clases con un único método.**
- d) Es la base teórica exclusiva del principio de Experto en información.

*Ambas afirmaciones están respaldadas por la nota. La opción D es incorrecta porque la Fabricación Pura es justamente la base de arquitecturas como MVC, MVP y MVVM.*

## 9. ¿Qué propone el patrón GRASP Indirección para reducir el acoplamiento entre dos clases?


- a) Eliminar una de las dos clases y fusionar sus responsabilidades en una sola.
- **✔ b) Asignar la responsabilidad de mediar entre ambas a una clase intermedia que las desacople.**
- c) Hacer que ambas clases hereden de una clase base común que centralice el comportamiento.
- d) Convertir ambas clases en clases estáticas para evitar la necesidad de instanciarlas.

*La Indirección introduce un objeto mediador entre las dos clases. La opción C es tentadora porque propone herencia como solución de desacoplamiento, pero el mecanismo del patrón es la mediación, no la herencia.*

## 10. ¿Cuáles de las siguientes afirmaciones describen correctamente al patrón GRASP Indirección?


- a) Fusiona las responsabilidades de ambas clases en una sola clase de dominio.
- **✔ b) Asigna la responsabilidad de mediar entre dos clases a una clase intermedia para reducir el acoplamiento directo.**
- **✔ c) Protege a un objeto frente a cambios previsibles en otro objeto con el que se relaciona.**
- d) Solo puede aplicarse cuando ambas clases pertenecen a la capa de presentación.

*Ambas describen correctamente el objetivo del patrón: mediar y proteger frente a cambios. La opción D es un distractor porque el patrón no está limitado a una capa específica.*

## 11. ¿Qué concepto describe el polimorfismo en programación orientada a objetos?


- a) Permitir que una clase herede atributos y métodos de múltiples clases base simultáneamente.
- b) Permitir que varios métodos con el mismo nombre existan dentro de una misma clase con distintos parámetros.
- c) Permitir que un mismo objeto cambie su tipo dinámicamente en tiempo de ejecución.
- **✔ d) Permitir que varias clases se comporten de manera distinta dependiendo del tipo que sean.**

*El polimorfismo consiste en que distintas clases respondan de forma distinta según su tipo. La opción D describe sobrecarga de métodos, un concepto relacionado pero diferente al definido en la nota.*

## 12. Un método usa una estructura switch sobre un enum de tipos para decidir qué comportamiento ejecutar en cada caso. Según el concepto de polimorfismo, ¿qué se recomienda hacer en este escenario?


- a) Dividir el método en varios controladores, uno por cada valor del enum.
- **✔ b) Reemplazar el switch por servicios con el mismo nombre implementados en distintos objetos según cada tipo.**
- c) Mantener el switch pero documentarlo mejor para que sea más legible.
- d) Convertir el enum en una clase estática con constantes para reducir el acoplamiento.

*El polimorfismo propone reemplazar decisiones basadas en tipo por servicios homónimos en distintos objetos. La opción D es tentadora porque menciona controladores, pero ese patrón se usa para eventos del sistema, no para resolver dependencias de tipo.*

## 13. ¿En qué consiste el principio de Variaciones protegidas?


- a) En centralizar todos los cambios previstos en una única clase controladora del sistema.
- b) En evitar cualquier tipo de modificación futura fijando el diseño desde el inicio del proyecto.
- c) En duplicar el código de las clases que podrían cambiar para tener versiones alternativas listas.
- **✔ d) En envolver aquello que se prevé susceptible de cambio en una interfaz y usar polimorfismo para crear varias implementaciones.**

*El principio consiste en encapsular lo susceptible de cambio detrás de una interfaz y usar polimorfismo. La opción B es tentadora porque suena a 'protegerse del cambio', pero la nota aclara que el cambio debe ser bienvenido, no evitado.*

## 14. ¿Con qué otros conceptos está estrechamente relacionado el principio de Variaciones protegidas?


- **✔ a) Polimorfismo.**
- **✔ b) Indirección.**
- c) Creador.
- d) Fabricación Pura.

*La nota vincula explícitamente Variaciones protegidas con polimorfismo e indirección. Fabricación Pura y Creador son otros patrones GRASP, pero no son mencionados como relacionados directamente con este principio.*
