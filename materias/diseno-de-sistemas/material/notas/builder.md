---
titulo: "Builder"
tipo: concepto
tags: ["patron-de-diseno","creacional","creacion","construccion","separacion","design-pattern","creational-pattern","builder","object-oriented"]
temas: ["[[patrones-de-creacion]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,22,71,153,154,155,156]
veces_en_examen: 0
---

# Builder

> Builder separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción cree diferentes representaciones.

El patrón Builder captura las relaciones entre un director y un constructor. El director (como RTFReader) es responsable de interpretar un formato de entrada, mientras que el constructor (como TextConverter) proporciona una interfaz abstracta para crear partes del producto. Esto permite reutilizar el algoritmo de parseo para generar diferentes representaciones.

**Participantes:**
- **Builder** (TextConverter): Define una interfaz abstracta para crear partes de un producto.
- **ConcreteBuilder** (ASCIIConverter, TeXConverter, TextWidgetConverter): Implementa la interfaz Builder, construye y ensambla las partes, y provee una interfaz para recuperar el producto.
- **Director** (RTFReader): Construye un objeto usando la interfaz Builder.
- **Product** (ASCIIText, TeXText, TextWidget): Representa el objeto complejo en construcción.

**Colaboraciones:**
- El cliente crea el Director y lo configura con el Builder deseado.
- El Director notifica al Builder cuando debe construir una parte.
- El Builder maneja los pedidos y añade partes al producto.
- El cliente obtiene el producto del Builder.

**Consecuencias:**
1. Permite variar la representación interna del producto.
2. Aísla el código de construcción y representación, mejorando la modularidad.
3. Proporciona control fino sobre el proceso de construcción paso a paso.

**Implementación:**
- Generalmente se define una clase Builder abstracta con operaciones vacías por defecto, así las subclases solo sobreescriben las que les interesan.
- El interfaz de construcción debe ser suficientemente general para todos los builders concretos.
- Normalmente no se necesita una clase abstracta para los productos, ya que suelen diferir mucho.

**Código de ejemplo:**
Se presenta una variante de CreateMaze que toma un MazeBuilder. Distintos builders como StandardMazeBuilder (construye un laberinto real) y CountingMazeBuilder (solo cuenta componentes) muestran la flexibilidad del patrón.


## Lo mencionan

- [[abstract-factory]]
- [[facade]]
- [[factory-method]]
- [[prototype]]
- [[singleton]]
- [[design-pattern-classification]]
- [[object-granularity]]
- [[program-to-interface-not-implementation]]
- [[program-to-an-interface]]
- [[dependencias-algoritmicas]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[creational-patterns]]
