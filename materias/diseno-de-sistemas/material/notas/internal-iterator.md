---
titulo: "Internal Iterator"
tipo: concepto
tags: ["iterator","patron-de-diseno","iteracion","catalogo","gof","iterador","patron de diseno","comportamiento"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [247,256]
veces_en_examen: 0
---

# Internal Iterator

> Un iterador interno que controla el proceso de iteración y ejecuta una operación sobre cada elemento, sin exponer explícitamente el cursor al cliente.

Los iteradores internos pueden encapsular diferentes tipos de iteración. Por ejemplo, FilteringListTraverser encapsula una iteración que solo procesa elementos que satisfacen una prueba. En Smalltalk, las colecciones estándar definen un método de iteración interna do: que toma un bloque como argumento, y cada elemento se vincula a la variable local del bloque.

## Relacionado

- [[iterator]]
- [[external-iterator]]
- [[filtering-list-traverser]]

## Lo mencionan

- [[visitor]]
- [[external-iterator]]
- [[filtering-list-traverser]]
