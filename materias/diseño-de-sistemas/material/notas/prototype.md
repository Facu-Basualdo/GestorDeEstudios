---
titulo: "Prototype"
tipo: concepto
tags: ["patron-de-diseno","creacional","patron de diseno","clonacion","prototype","prototipo"]
temas: ["[[patrones-de-creacion]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,71,288,289,290,291,292,295]
veces_en_examen: 0
---

# Prototype

> Especifica los tipos de objetos a crear usando una instancia prototípica y crea nuevos objetos copiando este prototipo.

## Motivación

Un editor de partituras construido sobre un framework gráfico necesita crear objetos musicales como notas y pentagramas. El framework proporciona una clase abstracta `Graphic` y una clase `GraphicTool` para herramientas que crean instancias de objetos gráficos. `GraphicTool` no sabe cómo crear instancias de las clases de música específicas. Se podría subclasificar `GraphicTool` para cada tipo de objeto musical, pero eso generaría muchas subclases. La solución es hacer que `GraphicTool` cree un nuevo `Graphic` copiando o "clonando" una instancia de una subclase de `Graphic`. A esta instancia se le llama **prototipo**. Si todas las subclases de `Graphic` soportan una operación `Clone`, entonces `GraphicTool` puede clonar cualquier tipo de `Graphic`. Cada herramienta para crear un objeto musical es una instancia de `GraphicTool` inicializada con un prototipo diferente. Esto reduce el número de clases y facilita añadir nuevos tipos de notas.

## Aplicabilidad

Usar el patrón Prototype cuando:
- un sistema debe ser independiente de cómo se crean, componen y representan sus productos;
- las clases a instanciar se especifican en tiempo de ejecución (por ejemplo, mediante carga dinámica);
- para evitar construir una jerarquía de clases de fábrica que paralelice la jerarquía de clases de productos;
- cuando las instancias de una clase pueden tener una de pocas combinaciones de estado, siendo más conveniente instalar un número correspondiente de prototipos y clonarlos en lugar de instanciar la clase manualmente cada vez con el estado apropiado.

## Participantes

- **Prototype** (`Graphic`): declara una interfaz para clonarse a sí mismo.
- **ConcretePrototype** (`Staff`, `WholeNote`, `HalfNote`): implementa una operación para clonarse a sí mismo.
- **Client** (`GraphicTool`): crea un nuevo objeto pidiéndole a un prototipo que se clone.

## Colaboraciones

- Un cliente le pide a un prototipo que se clone a sí mismo.

## Consecuencias

Prototype tiene muchas de las mismas consecuencias que Abstract Factory (87) y Builder (97): oculta las clases concretas de producto al cliente, reduciendo la cantidad de nombres que el cliente conoce. Además, permite al cliente trabajar con clases específicas de la aplicación sin modificaciones. Beneficios adicionales:

1. **Añadir y eliminar productos en tiempo de ejecución**: los prototipos permiten incorporar una nueva clase de producto con solo registrar una instancia prototípica en el cliente.
2. **Especificar nuevos objetos variando valores**: se pueden definir nuevos tipos de objetos sin programar, simplemente instanciando clases existentes y registrando las instancias como prototipos.
3. **Especificar nuevos objetos variando la estructura**: permite usar estructuras complejas (como subcircuitos) como prototipos, siempre que implementen `Clone` como copia profunda.
4. **Reducción de subclases**: evita la jerarquía de clases `Creator` que a veces requiere Factory Method (107).
5. **Configurar una aplicación con clases dinámicamente**: en entornos que permiten carga dinámica de clases, el patrón Prototype es clave para explotar esa facilidad.

La principal desventaja es que cada subclase de Prototype debe implementar la operación `Clone`, lo que puede ser difícil, especialmente si las clases ya existen o contienen objetos que no soportan copia o tienen referencias circulares.

## Relacionado

- [[abstract-factory]]
- [[builder]]
- [[factory-method]]
- [[composite]]
- [[decorator]]
- [[singleton]]

## Lo mencionan

- [[abstract-factory]]
- [[adapter]]
- [[command]]
- [[factory-method]]
- [[singleton]]
- [[design-pattern-classification]]
- [[program-to-interface-not-implementation]]
- [[program-to-an-interface]]
- [[crear-objeto-especificando-clase-explicitamente]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[creational-patterns]]
