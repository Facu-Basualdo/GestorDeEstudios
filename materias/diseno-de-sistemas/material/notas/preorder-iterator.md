---
titulo: "PreorderIterator"
tipo: concepto
tags: ["iterator","preorder","traversal","tree"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [64,65]
veces_en_examen: 0
---

# PreorderIterator

> An iterator that traverses a glyph structure in preorder using a stack of iterators.

PreorderIterator gets the iterator from the root glyph, initializes it, and pushes it onto a stack. CurrentItem returns the current item from the top iterator. Next pops iterators as they are exhausted and pushes new ones from the current glyph's children, ensuring a preorder traversal.

## Relacionado

- [[glyph]]
- [[iterator]]

## Lo mencionan

- [[iterator]]
