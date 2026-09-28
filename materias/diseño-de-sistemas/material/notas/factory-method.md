---
titulo: "Factory Method"
tipo: concepto
tags: ["patron-de-diseno","creacional","factory-method","virtual-constructor","patron de diseno","factory method","gof","diseno de software","creacion","herencia","polimorfismo","fabrica","liskov","frameworks"]
temas: ["[[patrones-creacionales]]","[[patrones-de-creacion]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,71,210,211,212,213,216]
veces_en_examen: 0
---

# Factory Method

> Factory Method es un patrón de diseño creacional que define una interfaz para crear objetos, pero permite que las subclases decidan qué clase instanciar.

## Consecuencias

- Elimina la necesidad de enlazar clases específicas de la aplicación en el código; este solo trabaja con la interfaz Product.
- Un posible inconveniente es que los clientes pueden tener que subclasificar la clase Creator solo para crear un objeto ConcreteProduct.
- Proporciona ganchos (hooks) para subclases, dando mayor flexibilidad que crear objetos directamente.
- Conecta jerarquías de clases paralelas: el método factory define la conexión entre dos jerarquías, localizando el conocimiento de qué clases pertenecen juntas.

## Implementación

### Dos variedades principales
1. **Clase Creator abstracta** que no proporciona implementación del método factory (obliga a las subclases a definirla).
2. **Creator concreto** que proporciona una implementación por defecto del método factory, usándolo principalmente por flexibilidad.

### Métodos factory parametrizados
- El método factory recibe un parámetro que identifica el tipo de objeto a crear.
- Permite crear múltiples tipos de productos que comparten la interfaz Product.
- Se puede sobrescribir para extender o cambiar los productos que un Creator produce.

### Variantes y cuestiones específicas del lenguaje
- **Smalltalk**: se usa un método que retorna la clase del objeto a instanciar, logrando un enlace aún más tardío.
- **C++**: los factory methods son virtuales y a menudo puros; no deben llamarse en el constructor del Creator. Se puede usar inicialización perezosa (lazy initialization) mediante un accessor que crea el producto bajo demanda.

### Uso de templates para evitar subclasificación (C++)
- Se puede definir una subclase plantilla `StandardCreator` parametrizada por la clase Product, evitando que el cliente tenga que subclasificar Creator.

### Convenciones de nomenclatura
- Es buena práctica usar nombres que dejen claro que se está usando un factory method, por ejemplo `DoMakeClass()` en MacApp.

## Participantes (de la estructura)
- **Product** (Document): define la interfaz de los objetos que el factory method crea.
- **ConcreteProduct** (MyDocument): implementa la interfaz Product.
- **Creator** (Application): declara el factory method que retorna un objeto de tipo Product; puede definir una implementación por defecto.
- **ConcreteCreator** (MyApplication): sobrescribe el factory method para retornar una instancia de ConcreteProduct.

## Relacionado

- [[abstract-factory]]
- [[template-method]]
- [[prototype]]
- [[builder]]
- [[proxy]]
- [[patrones-creacionales]]

## Lo mencionan

- [[model-view-controller]]
- [[abstract-factory]]
- [[adapter]]
- [[bridge]]
- [[iterator]]
- [[prototype]]
- [[template-method]]
- [[design-pattern-classification]]
- [[program-to-interface-not-implementation]]
- [[program-to-an-interface]]
- [[crear-objeto-especificando-clase-explicitamente]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[creational-patterns]]
- [[polymorphic-iterator]]
- [[patrones-creacionales]]
