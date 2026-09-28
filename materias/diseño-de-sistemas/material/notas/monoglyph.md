---
titulo: "MonoGlyph"
tipo: concepto
tags: ["monoglyph","glyph","embellecimiento","transparente"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [46]
veces_en_examen: 0
---

# MonoGlyph

> Subclase abstracta de Glyph que almacena un componente y delega todas las operaciones, sirviendo como base para glifos de embellecimiento.

MonoGlyph almacena una referencia a un componente y reenvía todas las solicitudes a él. Esto hace que MonoGlyph sea totalmente transparente para los clientes por defecto. Por ejemplo, MonoGlyph::Draw llama a _component->Draw. Las subclases de MonoGlyph reimplementan al menos una de estas operaciones de reenvío. Border::Draw primero invoca MonoGlyph::Draw en el componente para que el componente haga su parte (dibujar todo excepto el borde), luego dibuja el borde. Otra subclase es Scroller, que dibuja su componente en diferentes ubicaciones según las posiciones de dos barras de desplazamiento.

## Relacionado

- [[glyph]]

## Lo mencionan

- [[decorator]]
- [[transparent-enclosure]]
