---
titulo: "Structural Patterns"
tipo: concepto
tags: ["patrones","estructurales","composicion","herencia","objetos"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [71]
veces_en_examen: 0
---

# Structural Patterns

> Los patrones estructurales se ocupan de cómo se componen clases y objetos para formar estructuras más grandes.

Los patrones estructurales se ocupan de cómo se componen clases y objetos para formar estructuras más grandes. Los patrones de clase estructurales usan herencia para componer interfaces o implementaciones. Un ejemplo simple es cómo la herencia múltiple combina dos o más clases en una. Otro ejemplo es la forma de clase del patrón Adapter (139). En general, un adapter hace que una interfaz (la del adaptee) se adapte a otra, proporcionando una abstracción uniforme de interfaces diferentes. Un adapter de clase logra esto heredando privadamente de una clase adaptee. Luego expresa su interfaz en términos de la del adaptee. Los patrones de objeto estructurales describen formas de componer objetos para realizar nueva funcionalidad. La flexibilidad adicional de la composición de objetos proviene de la capacidad de cambiar la composición en tiempo de ejecución, lo cual es imposible con la composición estática de clases. Composite (163) es un ejemplo de patrón de objeto estructural. Describe cómo construir una jerarquía de clases compuesta por dos tipos de objetos: primitivos y compuestos. Los objetos compuestos permiten componer objetos primitivos y otros compuestos en estructuras arbitrariamente complejas. En el patrón Proxy (207), un proxy actúa como un sustituto o marcador de posición conveniente para otro objeto. Se puede usar de muchas maneras: como representante local de un objeto en un espacio de direcciones remoto, para representar un objeto grande que debe cargarse bajo demanda, o para proteger el acceso a un objeto sensible. Los proxies proporcionan un nivel de indirección a propiedades específicas de los objetos, por lo que pueden restringir, mejorar o alterar estas propiedades. El patrón Flyweight (195) define una estructura para compartir objetos. Los objetos se comparten por al menos dos razones: eficiencia y consistencia. Flyweight se centra en compartir para eficiencia de espacio. Las aplicaciones que usan muchos objetos deben prestar atención al costo de cada objeto. Se pueden obtener ahorros sustanciales compartiendo objetos en lugar de replicarlos. Pero los objetos solo se pueden compartir si no definen un estado dependiente del contexto. Los objetos Flyweight no tienen tal estado. Cualquier información adicional que necesiten para realizar su tarea se les pasa cuando es necesaria. Sin estado dependiente del contexto, los objetos Flyweight pueden compartirse libremente. Mientras que Flyweight muestra cómo hacer muchos objetos pequeños, Facade (185) muestra cómo hacer que un solo objeto represente un subsistema completo. Una fachada es un representante de un conjunto de objetos. La fachada cumple con sus responsabilidades reenviando mensajes a los objetos que representa. El patrón Bridge (151) separa la abstracción de un objeto de su implementación para que se puedan variar independientemente. Decorator (175) describe cómo agregar responsabilidades a objetos dinámicamente. Decorator es un patrón estructural que compone objetos recursivamente para permitir un número ilimitado de responsabilidades adicionales. Por ejemplo, un objeto Decorator que contiene un componente de interfaz de usuario puede agregar una decoración como un borde o sombra al componente, o puede agregar funcionalidad como desplazamiento y zoom. Se pueden agregar dos decoraciones simplemente anidando un objeto Decorator dentro de otro, y así sucesivamente para decoraciones adicionales. Para lograr esto, cada objeto Decorator debe ajustarse a la interfaz de su componente y reenviar mensajes a él. El Decorator puede hacer su trabajo (como dibujar un borde alrededor del componente) antes o después de reenviar un mensaje.

## Relacionado

- [[adapter]]
- [[composite]]
- [[proxy]]
- [[flyweight]]
- [[facade]]
- [[bridge]]
- [[decorator]]
- [[abstract-factory]]

