---
titulo: "IteratorPtr"
tipo: concepto
tags: ["smart pointer","proxy","manejo de memoria","c++"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [252]
veces_en_examen: 0
---

# IteratorPtr

> IteratorPtr es un proxy (smart pointer) que gestiona automáticamente la eliminación de un iterador cuando sale de ámbito.

Sobrecarga operator-> y operator* para comportarse como un puntero al iterador. Su destructor elimina el iterador real. Se asigna siempre en la pila para que C++ llame automáticamente al destructor. Prohíbe copia y asignación para evitar múltiples eliminaciones.

## Relacionado

- [[iterator]]

