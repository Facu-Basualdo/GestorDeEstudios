---
titulo: "Replication"
tipo: concepto
tags: ["disponibilidad","deteccion","votacion","replicacion","safety","tactica","redundancia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78,203]
veces_en_examen: 0
---

# Replication

> Es un esquema de voting en el que los componentes son clones exactos entre sí.

Tener múltiples copias de componentes idénticos puede ser efectivo para proteger contra fallas aleatorias de hardware, pero no puede proteger contra errores de diseño o implementación, en hardware o software, porque no hay ninguna forma de diversidad incorporada en esta táctica.

## Relacionado

- [[voting]]
- [[redundancy]]

## Lo mencionan

- [[voting]]
- [[redundancy]]
