---
titulo: "Behavioral Patterns"
tipo: concepto
tags: ["patrones","comportamiento","algoritmos","responsabilidades","comunicacion"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [71]
veces_en_examen: 0
---

# Behavioral Patterns

> Los patrones de comportamiento se ocupan de algoritmos y la asignación de responsabilidades entre objetos.

Los patrones de comportamiento se ocupan de algoritmos y la asignación de responsabilidades entre objetos. Los patrones de comportamiento describen no solo patrones de objetos o clases, sino también los patrones de comunicación entre ellos. Estos patrones caracterizan un flujo de control complejo que es difícil de seguir en tiempo de ejecución. Desvían el enfoque del flujo de control para concentrarse en la forma en que los objetos están interconectados. Los patrones de clase de comportamiento usan herencia para distribuir el comportamiento entre clases. Este capítulo incluye dos de esos patrones. Template Method (325) es el más simple y común de los dos. Un template method es una definición abstracta de un algoritmo. Define el algoritmo paso a paso. Cada paso invoca una operación abstracta o una operación primitiva. Una subclase desarrolla el algoritmo definiendo las operaciones abstractas. El otro patrón de clase de comportamiento es Interpreter (243), que representa una gramática como una jerarquía de clases e implementa un intérprete como una operación en instancias de estas clases. Los patrones de objeto de comportamiento usan composición de objetos en lugar de herencia. Algunos describen cómo un grupo de objetos pares cooperan para realizar una tarea que ningún objeto puede realizar por sí mismo. Un problema importante aquí es cómo los objetos pares se conocen entre sí. Los pares podrían mantener referencias explícitas entre sí, pero eso aumentaría su acoplamiento. En el extremo, cada objeto conocería a todos los demás. El patrón Mediator (273) evita esto introduciendo un objeto mediador entre los pares. El mediador proporciona la indirección necesaria para un acoplamiento flojo. Chain of Responsibility (223) proporciona un acoplamiento aún más flojo. Permite enviar solicitudes a un objeto implícitamente a través de una cadena de objetos candidatos. Cualquier candidato puede cumplir la solicitud dependiendo de las condiciones de tiempo de ejecución. El número de candidatos es abierto, y se puede seleccionar qué candidatos participan en la cadena en tiempo de ejecución. El patrón Observer (293) define y mantiene una dependencia entre objetos. El ejemplo clásico de Observer es en Smalltalk Model/View/Controller, donde todas las vistas del modelo son notificadas cada vez que el estado del modelo cambia. Otros patrones de objeto de comportamiento se ocupan de encapsular el comportamiento en un objeto y delegar solicitudes a él. El patrón Strategy (315) encapsula un algoritmo en un objeto. Strategy facilita especificar y cambiar el algoritmo que usa un objeto. El patrón Command (233) encapsula una solicitud en un objeto para que pueda pasarse como parámetro, almacenarse en una lista de historial o manipularse de otras maneras. El patrón State (305) encapsula los estados de un objeto para que el objeto pueda cambiar su comportamiento cuando cambia su objeto de estado. Visitor (331) encapsula un comportamiento que de otro modo estaría distribuido entre clases, e Iterator (257) abstractiza la forma en que se accede y recorre objetos en un agregado.

## Relacionado

- [[template-method]]
- [[interpreter]]
- [[mediator]]
- [[chain-of-responsibility]]
- [[observer]]
- [[strategy]]
- [[command]]
- [[state]]
- [[visitor]]
- [[iterator]]

