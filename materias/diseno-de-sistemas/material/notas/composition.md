---
titulo: "Composition"
tipo: concepto
tags: ["composition","glyph","formateo","lexi"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [44]
veces_en_examen: 0
---

# Composition

> Subclase de Glyph que contiene glifos básicos y utiliza un Compositor para insertar glifos estructurales como Row y Column según un algoritmo de linebreaking.

Una Composition sin formatear contiene solo los glifos visibles que constituyen el contenido básico del documento. No contiene glifos que determinen la estructura física, como Row y Column. Cuando la composition necesita formateo, llama a la operación Compose de su compositor. El compositor itera sobre los hijos de la composition e inserta nuevos glifos Row y Column según su algoritmo de linebreaking. La separación Compositor-Composition asegura una separación fuerte entre el código que soporta la estructura física del documento y el código para diferentes algoritmos de formateo.

## Relacionado

- [[compositor]]
- [[glyph]]

## Lo mencionan

- [[strategy]]
- [[framework]]
- [[compositor]]
