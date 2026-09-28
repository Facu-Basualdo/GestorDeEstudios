---
titulo: "Polymorphic Iteration"
tipo: concepto
tags: ["factory method","polimorfismo","iterador","c++"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [251]
veces_en_examen: 0
---

# Polymorphic Iteration

> La iteración polimórfica permite a los clientes usar iteradores sin conocer la implementación concreta del agregado, mediante un método factoría CreateIterator en una clase abstracta.

Se introduce una clase AbstractList que define un método virtual puro CreateIterator(). Las subclases concretas (List, SkipList) lo implementan devolviendo su iterador correspondiente. El cliente solo sabe que tiene un AbstractList y llama a CreateIterator() para obtener un iterador. Esto libera al cliente de depender de una implementación específica.

## Relacionado

- [[iterator]]
- [[list-iterator]]

