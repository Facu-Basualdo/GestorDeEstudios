---
titulo: "Polymorphic Iterator"
tipo: concepto
tags: ["iterator","patron-de-diseno","polimorfismo","c++"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [248,249]
veces_en_examen: 0
---

# Polymorphic Iterator

> Iterador que utiliza polimorfismo, requiriendo que el objeto iterador se aloque dinámicamente mediante un método fábrica.

Los polymorphic iterators tienen un costo: se asignan en el heap y el cliente es responsable de eliminarlos, lo cual es propenso a errores (olvidos o excepciones). El patrón Proxy (207) puede ayudar mediante un proxy asignado en la pila que elimina el iterador real en su destructor, asegurando una limpieza adecuada incluso ante excepciones. Es una aplicación de la técnica 'resource allocation is initialization'.

## Relacionado

- [[iterator]]
- [[proxy]]
- [[factory-method]]

