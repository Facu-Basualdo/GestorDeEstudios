---
titulo: "Who should delete components?"
tipo: concepto
tags: ["composite","gestion-memoria","eliminacion"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [185]
veces_en_examen: 0
---

# Who should delete components?

> En lenguajes sin recolección de basura, el Composite debería ser responsable de eliminar sus hijos al ser destruido, excepto cuando los Leaf son inmutables y pueden compartirse.

En lenguajes sin recolección de basura, generalmente es mejor hacer que un Composite sea responsable de eliminar sus hijos cuando es destruido. Una excepción a esta regla es cuando los objetos Leaf son inmutables y, por lo tanto, pueden compartirse.


