---
titulo: "Singleton"
tipo: concepto
tags: ["patron-de-diseno","creacional","patron creacional","instancia unica","acceso global","singleton","punto de acceso","patron de diseno","instancia","acceso-global"]
temas: ["[[patrones-creacionales]]","[[patrones-de-creacion]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,71,307,308,311,313]
veces_en_examen: 0
---

# Singleton

> El patrón Singleton hace que la única instancia sea una instancia normal de una clase, pero esa clase está escrita de modo que solo se pueda crear una instancia.

**Beneficios**
- Reduce el espacio de nombres al evitar variables globales
- Permite refinar operaciones y representación mediante subclases
- Permite un número variable de instancias (fácil de cambiar)
- Más flexible que las operaciones de clase (métodos static)

**Implementación**
1. Asegurar una instancia única: usar una operación de clase (static) con inicialización perezosa.
   - En C++: `Instance()` crea el objeto la primera vez que se llama
   - En Smalltalk: sobrescribir `new` para que lance error y usar clase `default`
   - Constructor protegido para evitar instanciación directa
   - Evitar objetos globales/static por problemas de orden de inicialización y dependencias
2. Subclase: la instancia única puede ser de una subclase. Técnicas:
   - Determinar la subclase en `Instance()` (ej. con variable de entorno)
   - Registro de singletons: las subclases se registran con nombre y `Instance()` consulta el registro

**Código de ejemplo**
Se muestra `MazeFactory` como Singleton: se añaden `Instance()` y `_instance` estático, constructor protegido. Para subclases, se usa `getenv("MAZESTYLE")` para elegir la subclase (BombedMazeFactory, EnchantedMazeFactory, etc.).

**Usos conocidos**
- En Smalltalk-80: `ChangeSet current`
- En InterViews: `Session` (bucle de eventos, preferencias) y `WidgetKit` (Abstract Factory para look-and-feel)

**Patrones relacionados**
- Abstract Factory, Builder, Prototype suelen implementarse con Singleton.

## Relacionado

- [[abstract-factory]]
- [[builder]]
- [[prototype]]
- [[patrones-creacionales]]

## Lo mencionan

- [[abstract-factory]]
- [[adapter]]
- [[bridge]]
- [[facade]]
- [[prototype]]
- [[state]]
- [[design-pattern-classification]]
- [[program-to-interface-not-implementation]]
- [[program-to-an-interface]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[creational-patterns]]
- [[change-manager]]
- [[patrones-creacionales]]
