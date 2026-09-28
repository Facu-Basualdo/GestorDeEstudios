---
titulo: "ListIterator"
tipo: concepto
tags: ["iterator","list","concrete","subclass","iterador","lista","c++"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [63,249]
veces_en_examen: 0
---

# ListIterator

> ListIterator es una implementación concreta de Iterator para recorrer una lista en orden frontal a posterior.

Mantiene un índice _current y un puntero a la lista. First() inicializa _current a 0, Next() lo incrementa, IsDone() verifica si _current >= Count(), y CurrentItem() devuelve el elemento en _current. Si la iteración terminó, lanza IteratorOutOfBounds.

## Relacionado

- [[glyph]]
- [[iterator]]

## Lo mencionan

- [[iterator]]
- [[list-traverser]]
- [[polymorphic-iteration]]
