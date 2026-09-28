---
titulo: "Abstract Factory"
tipo: concepto
tags: ["patron-de-diseno","creacional","patron","abstract-factory","creacion","productos","familia","objetos","interfaz","patron de diseno","abstract factory","gof","patron-creacional","factory-method","familia-de-objetos","kit"]
temas: ["[[patrones-de-creacion]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,22,49,50,52,71,124,125,126,127,128,132]
veces_en_examen: 0
---

# Abstract Factory

> Provee una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

## Intención
Proveer una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

## También conocido como
Kit

## Motivación
Un toolkit de interfaz de usuario que soporta múltiples estándares de apariencia (look-and-feel), como Motif y Presentation Manager. Diferentes apariencias definen diferentes comportamientos y apariencias para widgets como barras de desplazamiento, ventanas y botones. Para ser portable, una aplicación no debe hard-codear los widgets para una apariencia particular. Instanciar clases específicas de widgets a lo largo de la aplicación dificulta cambiar la apariencia posteriormente. Se resuelve definiendo una clase abstracta `WidgetFactory` que declara una interfaz para crear cada tipo básico de widget. También hay una clase abstracta para cada tipo de widget, y subclases concretas que implementan widgets para apariencias específicas. La interfaz de `WidgetFactory` tiene una operación que devuelve un nuevo objeto widget para cada clase abstracta de widget. Los clientes llaman a estas operaciones para obtener instancias, pero no conocen las clases concretas que están usando. Así los clientes permanecen independientes de la apariencia. Cada apariencia tiene una subclase concreta de `WidgetFactory` que implementa las operaciones para crear el widget apropiado. Por ejemplo, `CreateScrollBar` en `MotifWidgetFactory` instancia y devuelve una barra de desplazamiento Motif, mientras que la operación correspondiente en `PMWidgetFactory` devuelve una barra para Presentation Manager. Los clientes crean widgets solo a través de la interfaz `WidgetFactory` y no conocen las clases que implementan los widgets para una apariencia particular. Un `WidgetFactory` también impone dependencias entre las clases concretas de widgets: una barra de desplazamiento Motif debe usarse con un botón Motif y un editor de texto Motif, y esa restricción se impone automáticamente al usar un `MotifWidgetFactory`.

## Aplicabilidad
Usar el patrón Abstract Factory cuando:
- Un sistema debe ser independiente de cómo se crean, componen y representan sus productos.
- Un sistema debe configurarse con una de múltiples familias de productos.
- Una familia de objetos producto relacionados está diseñada para usarse junto, y se necesita imponer esa restricción.
- Se quiere proporcionar una librería de clases de productos y revelar solo sus interfaces, no sus implementaciones.

## Participantes
- **AbstractFactory** (`WidgetFactory`): declara una interfaz para operaciones que crean objetos producto abstractos.
- **ConcreteFactory** (`MotifWidgetFactory`, `PMWidgetFactory`): implementa las operaciones para crear objetos producto concretos.
- **AbstractProduct** (`Window`, `ScrollBar`): declara una interfaz para un tipo de objeto producto.
- **ConcreteProduct** (`MotifWindow`, `MotifScrollBar`): define un objeto producto a ser creado por la fábrica concreta correspondiente; implementa la interfaz de AbstractProduct.
- **Client**: usa solo interfaces declaradas por AbstractFactory y AbstractProduct.

## Colaboraciones
- Normalmente una sola instancia de una clase ConcreteFactory se crea en tiempo de ejecución. Esta fábrica concreta crea objetos producto con una implementación particular. Para crear diferentes objetos producto, los clientes deben usar una fábrica concreta diferente.
- AbstractFactory delega la creación de objetos producto a su subclase ConcreteFactory.

## Consecuencias
1. **Aísla clases concretas**: controla las clases de objetos que una aplicación crea. La fábrica encapsula la responsabilidad y el proceso de creación, aislando a los clientes de las clases de implementación. Los nombres de las clases producto están aislados en la implementación de la fábrica concreta.
2. **Facilita el intercambio de familias de productos**: la clase de la fábrica concreta aparece solo una vez en la aplicación (donde se instancia). Cambiar la fábrica concreta cambia toda la familia de productos.
3. **Promueve la consistencia entre productos**: es fácil imponer que se usen objetos de una sola familia a la vez.
4. **Difícil de soportar nuevos tipos de productos**: la interfaz de AbstractFactory fija el conjunto de productos que se pueden crear. Extenderla requiere cambiar la clase AbstractFactory y todas sus subclases.

## Implementación
- **Fábricas como singleton**: normalmente solo se necesita una instancia de ConcreteFactory por familia, por lo que se implementa como un Singleton.
- **Creación de productos**: AbstractFactory solo declara una interfaz para crear productos. Lo común es definir un Factory Method para cada producto. Una fábrica concreta especifica sus productos sobrescribiendo el método de fábrica para cada uno. Si hay muchas familias posibles, se puede usar el patrón Prototype: la fábrica concreta se inicializa con una instancia prototípica de cada producto y crea nuevos productos clonando el prototipo. También se puede usar un enfoque basado en clases cuando el lenguaje trata las clases como objetos de primera clase (Smalltalk, Objective C).
- **Fábricas extensibles**: se puede agregar un parámetro a las operaciones que crean objetos para especificar el tipo de producto, en lugar de tener un método por producto. Esto es más flexible pero menos seguro, especialmente en lenguajes estáticamente tipados como C++, donde se necesita downcast y puede fallar.

## Relacionado

- [[singleton]]
- [[factory-method]]
- [[prototype]]
- [[builder]]

## Lo mencionan

- [[adapter]]
- [[bridge]]
- [[facade]]
- [[factory-method]]
- [[prototype]]
- [[singleton]]
- [[design-pattern-classification]]
- [[object-granularity]]
- [[program-to-interface-not-implementation]]
- [[program-to-an-interface]]
- [[crear-objeto-especificando-clase-explicitamente]]
- [[dependencia-en-plataforma-hardware-y-software]]
- [[dependencia-en-representaciones-o-implementaciones-de-objetos]]
- [[acoplamiento-fuerte]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[windowsystemfactory]]
- [[creational-patterns]]
- [[structural-patterns]]
