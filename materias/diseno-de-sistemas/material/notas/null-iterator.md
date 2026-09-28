---
titulo: "NullIterator"
tipo: concepto
tags: ["iterator","leaf","null object","degenerate","patron-de-diseno","nulo","composite","iterador"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [64,249,250,251,252,253,254,255,256]
veces_en_examen: 0
---

# NullIterator

> NullIterator es un iterador degenerado cuya operación IsDone siempre devuelve true, útil para manejar condiciones de borde en estructuras jerárquicas.

Se utiliza principalmente para simplificar el recorrido de estructuras como Composite. En lugar de comprobar si un nodo es hoja, se le pide su iterador de hijos; las hojas devuelven un NullIterator. Esto permite recorrer la estructura completa de manera uniforme.

## Relacionado

- [[glyph]]
- [[iterator]]
- [[composite]]

## Lo mencionan

- [[iterator]]
