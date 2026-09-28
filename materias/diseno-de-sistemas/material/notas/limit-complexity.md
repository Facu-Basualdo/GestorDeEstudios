---
titulo: "Limit Complexity"
tipo: concepto
tags: ["testability","complejidad","pruebas","arquitectura","diseno"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [242]
veces_en_examen: 0
---

# Limit Complexity

> Categoría de tácticas de testability que limita la complejidad del diseño para facilitar las pruebas.

El software complejo es mucho más difícil de probar porque su estado operativo es grande y es más difícil re-crear un estado exacto en un espacio de estados grande. Como probar no es solo hacer fallar el software sino encontrar el fault que causó el failure, interesa hacer el comportamiento repetible. Incluye dos tácticas:
- Limit structural complexity
- Limit nondeterminism

## Relacionado

- [[testability-tactics]]
- [[limit-structural-complexity]]
- [[limit-nondeterminism]]

## Lo mencionan

- [[testability-tactics]]
- [[limit-structural-complexity]]
- [[limit-nondeterminism]]
