---
titulo: "Strategy"
tipo: concepto
tags: ["patron","comportamiento","patron-de-diseno","comportamental","strategy","algoritmo","encapsulacion","patron de diseno","estrategia","algoritmos","strategy-pattern","testability"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [15,16,17,21,45,71,323,324,325,326,328]
veces_en_examen: 0
---

# Strategy

> Strategy es un patrón de diseño que define una familia de algoritmos, encapsula cada uno y los hace intercambiables, permitiendo que el algoritmo varíe independientemente de los clientes que lo usan.

## Participantes
- **Strategy** (Compositor): declara una interfaz común a todos los algoritmos soportados. Context usa esta interfaz para llamar al algoritmo definido por un ConcreteStrategy.
- **ConcreteStrategy** (SimpleCompositor, TeXCompositor, ArrayCompositor): implementa el algoritmo usando la interfaz Strategy.
- **Context** (Composition): se configura con un objeto ConcreteStrategy, mantiene una referencia a un objeto Strategy, y puede definir una interfaz para que Strategy acceda a sus datos.

## Colaboraciones
- Strategy y Context interactúan para implementar el algoritmo elegido. Un Context puede pasar todos los datos requeridos por el algoritmo a la estrategia cuando se llama al algoritmo, o pasarse a sí mismo como argumento.
- Un Context envía las solicitudes de sus clientes a su estrategia. Los clientes usualmente crean y pasan un objeto ConcreteStrategy al Context; luego interactúan exclusivamente con el Context.

## Consecuencias
1. **Familias de algoritmos relacionados.** Las jerarquías de clases Strategy definen una familia de algoritmos o comportamientos reutilizables para los Context.
2. **Alternativa a la subclasificación.** Encapsular el algoritmo en clases Strategy separadas permite variar el algoritmo independientemente de su contexto, facilitando el cambio, la comprensión y la extensión.
3. **Eliminación de sentencias condicionales.** El patrón elimina los condicionales típicos al seleccionar un comportamiento.
4. **Elección de implementaciones.** Los clientes pueden elegir entre estrategias con diferentes compensaciones de tiempo y espacio.
5. **Los clientes deben conocer las diferentes estrategias.** Los clientes deben entender cómo difieren las estrategias para seleccionar la adecuada.
6. **Sobrecarga de comunicación entre Strategy y Context.** La interfaz Strategy es compartida por todas las ConcreteStrategy, lo que puede llevar a pasar datos que no se usan.
7. **Aumento del número de objetos.** Las estrategias incrementan la cantidad de objetos. Se puede reducir implementándolas como objetos sin estado que los Context puedan compartir (ver Flyweight).

## Implementación
1. **Definición de interfaces Strategy y Context.** Puede pasarse los datos del Context a la Strategy como parámetros, o el Context pasarse a sí mismo para que la Strategy solicite los datos.
2. **Estrategias como parámetros de template (C++).** Si la estrategia se selecciona en tiempo de compilación y no cambia en tiempo de ejecución, se puede usar templates para configurar la clase Context.
3. **Hacer objetos Strategy opcionales.** El Context puede verificar si tiene una Strategy; si no, realiza un comportamiento por defecto.

## Código de ejemplo (Composition y Compositor)
La clase `Composition` mantiene una colección de componentes y utiliza un `Compositor` (la Strategy) para determinar los saltos de línea. `Compositor` es una clase abstracta con el método `Compose`. Las subclases concretas (`SimpleCompositor`, `TeXCompositor`, `ArrayCompositor`) implementan diferentes algoritmos de salto de línea. La composición llama a `_compositor->Compose()` dentro de su método `Repair()`, eliminando los condicionales.

Ejemplo de uso:
```cpp
Composition* quick = new Composition(new SimpleCompositor);
Composition* slick = new Composition(new TeXCompositor);
Composition* iconic = new Composition(new ArrayCompositor(100));
```

## Relacionado

- [[model-view-controller]]
- [[flyweight]]
- [[compositor]]
- [[composition]]

## Lo mencionan

- [[model-view-controller]]
- [[decorator]]
- [[facade]]
- [[state]]
- [[template-method]]
- [[design-pattern-classification]]
- [[delegation]]
- [[parameterized-type]]
- [[relating-run-time-and-compile-time-structures]]
- [[dependencias-algoritmicas]]
- [[extender-funcionalidad-mediante-subclases]]
- [[how-to-use-a-design-pattern]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[compositor]]
- [[behavioral-patterns]]
- [[common-design-vocabulary]]
- [[patterns-for-testability]]
- [[intercepting-filter-pattern]]
