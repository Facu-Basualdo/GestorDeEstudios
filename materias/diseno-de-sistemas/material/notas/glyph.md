---
titulo: "Glyph"
tipo: concepto
tags: ["glyph","clase abstracta","interfaz","composite pattern","estructura de documento"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [41,42]
veces_en_examen: 0
---

# Glyph

> Clase abstracta para todos los objetos que pueden aparecer en una estructura de documento.

Los glyphs tienen tres responsabilidades básicas: (1) dibujarse a sí mismos, (2) conocer el espacio que ocupan, y (3) conocer sus hijos y padre. La interfaz incluye operaciones como `Draw(Window*)`, `Bounds(Rect&)`, `Intersects(const Point&)`, `Insert(Glyph*, int)`, `Remove(Glyph*)`, `Child(int)`, y `Parent()`. Las subclases redefinen estas operaciones para comportamientos específicos, por ejemplo, `Rectangle::Draw` llama a `DrawRect` de la ventana. Los padres necesitan conocer el área ocupada por los hijos para organizarlos sin superposición. La operación `Intersects` permite determinar qué glyph está bajo el mouse. Los glyphs que pueden tener hijos (como las filas) deben usar la interfaz unificada para acceder a ellos, evitando dependencias de la estructura de datos interna.


## Lo mencionan

- [[iterator]]
- [[visitor]]
- [[formatting]]
- [[encapsulating-the-formatting-algorithm]]
- [[compositor]]
- [[composition]]
- [[transparent-enclosure]]
- [[monoglyph]]
- [[null-iterator]]
- [[preorder-iterator]]
- [[list-iterator]]
- [[discretionary-glyph]]
