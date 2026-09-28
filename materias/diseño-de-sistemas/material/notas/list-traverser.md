---
titulo: "ListTraverser"
tipo: concepto
tags: ["iterador interno","c++","template method"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [253]
veces_en_examen: 0
---

# ListTraverser

> ListTraverser es un iterador interno que controla la iteración y aplica una operación a cada elemento de la lista.

Utiliza internamente un ListIterator externo. El método Traverse() itera sobre la lista y llama a ProcessItem() virtual pura para cada elemento. Si ProcessItem() devuelve false, la iteración termina prematuramente. El cliente debe subclasificar ListTraverser y sobrescribir ProcessItem().

## Relacionado

- [[list-iterator]]

## Lo mencionan

- [[filtering-list-traverser]]
