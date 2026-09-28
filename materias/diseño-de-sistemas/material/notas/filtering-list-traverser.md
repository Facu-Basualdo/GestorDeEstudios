---
titulo: "FilteringListTraverser"
tipo: concepto
tags: ["iterador interno","filtro","c++","iterador","patron de diseno","internal iterator","template"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [255,256]
veces_en_examen: 0
---

# FilteringListTraverser

> Un iterador interno que procesa solo los elementos de una lista que satisfacen una prueba definida por una función virtual TestItem.

FilteringListTraverser es una clase template que extiende el concepto de iterador interno para filtrar elementos. Define una interfaz con las funciones miembro virtuales TestItem y ProcessItem. La función Traverse itera sobre la lista, y para cada elemento, si TestItem es verdadero, llama a ProcessItem. Si ProcessItem devuelve false, la iteración se detiene. Una variante podría definir Traverse para que retorne si al menos un elemento satisface la prueba.

## Relacionado

- [[list-traverser]]
- [[internal-iterator]]

## Lo mencionan

- [[internal-iterator]]
