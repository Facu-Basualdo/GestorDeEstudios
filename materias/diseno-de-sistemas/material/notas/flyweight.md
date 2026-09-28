---
titulo: "Flyweight"
tipo: concepto
tags: ["patron-de-diseno","estructural","patron","flyweight","compartir","eficiencia","patron de diseno","compartir objetos","memoria","estado intrinseco","estado extrinseco"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,22,71,219,223,224]
veces_en_examen: 0
---

# Flyweight

> Patrón de diseño estructural que permite compartir objetos para reducir el uso de memoria, distinguiendo entre estado intrínseco y extrínseco.

## Participantes
- **Flyweight**: Declara una interfaz para recibir y actuar sobre estado extrínseco.
- **ConcreteFlyweight**: Implementa la interfaz Flyweight y almacena estado intrínseco. Debe ser compartible.
- **UnsharedConcreteFlyweight**: No todas las subclases necesitan ser compartidas; la interfaz Flyweight permite compartir, pero no lo exige.
- **FlyweightFactory**: Crea y gestiona objetos flyweight; asegura que se compartan adecuadamente. Cuando un cliente solicita un flyweight, suministra una instancia existente o crea una nueva si no existe.
- **Client**: Mantiene referencias a flyweights y calcula o almacena el estado extrínseco.

## Colaboraciones
- El estado que un flyweight necesita para funcionar se caracteriza como intrínseco (almacenado en ConcreteFlyweight) o extrínseco (almacenado o calculado por los clientes). Los clientes pasan el estado extrínseco al flyweight cuando invocan sus operaciones.
- Los clientes no deben instanciar ConcreteFlyweights directamente; deben obtenerlos exclusivamente de FlyweightFactory para asegurar que se compartan.

## Consecuencias
- Pueden introducir costos de tiempo de ejecución por transferir, encontrar y/o computar estado extrínseco, compensados por ahorros de espacio que aumentan con el número de flyweights compartidos.
- Los ahorros de almacenamiento dependen de: reducción en el número total de instancias por compartir, cantidad de estado intrínseco por objeto, y si el estado extrínseco se computa o almacena.
- El patrón Flyweight se combina a menudo con Composite para representar estructuras jerárquicas con nodos hoja compartidos. Como consecuencia, los nodos hoja no pueden almacenar un puntero a su padre; el puntero al padre se pasa como parte del estado extrínseco.

## Implementación
1. **Remover estado extrínseco**: La aplicabilidad depende de qué tan fácil sea identificar y remover el estado extrínseco. Idealmente, el estado extrínseco puede computarse desde una estructura de objetos separada con requisitos de almacenamiento mucho menores.
2. **Manejo de objetos compartidos**: FlyweightFactory usa a menudo un almacén asociativo (ej. tabla de códigos de caracteres) para localizar flyweights. Se necesita conteo de referencias o recolección de basura para recuperar almacenamiento cuando ya no se necesita, aunque no es necesario si el número de flyweights es fijo y pequeño.

## Código de ejemplo
- Se define una clase base `Glyph` para objetos gráficos flyweight. `Character` almacena solo el código de carácter. El atributo de fuente se almacena extrínsecamente en `GlyphContext`, que mantiene un mapeo compacto entre glifos y fuentes usando una estructura `BTree`.
- `GlyphFactory` crea y comparte objetos `Character`; los glifos compuestos (Row, Column) no se comparten y se crean directamente.

## Relacionado

- [[facade]]
- [[composite]]

## Lo mencionan

- [[composite]]
- [[strategy]]
- [[interpreter]]
- [[proxy]]
- [[state]]
- [[design-pattern-classification]]
- [[object-granularity]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[structural-patterns]]
- [[class-diagram]]
- [[sharing-components]]
- [[sharing-terminal-symbols-with-flyweight]]
