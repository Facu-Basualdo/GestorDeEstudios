---
titulo: "Should Component implement a list of Components?"
tipo: concepto
tags: ["composite","implementacion","estructura-datos"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [185]
veces_en_examen: 0
---

# Should Component implement a list of Components?

> Poner la lista de hijos en la clase Component incurre en una penalización de espacio para cada Leaf, por lo que solo vale la pena si hay relativamente pocos hijos en la estructura.

Podría tentarse a definir el conjunto de hijos como una variable de instancia en la clase Component, donde se declaran las operaciones de acceso y gestión de hijos. Pero poner el puntero a los hijos en la clase base incurre en una penalización de espacio para cada Leaf, aunque un Leaf nunca tenga hijos. Esto solo vale la pena si hay relativamente pocos hijos en la estructura.


