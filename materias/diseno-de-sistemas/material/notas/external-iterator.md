---
titulo: "External Iterator"
tipo: concepto
tags: ["iterator","patron-de-diseno","iteracion","catalogo","gof"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [247]
veces_en_examen: 0
---

# External Iterator

> Iterator donde el cliente controla la iteración, avanzando explícitamente la travesía y solicitando el siguiente elemento.

Los clientes que usan un external iterator deben avanzar la travesía y pedir el siguiente elemento explícitamente. Son más flexibles que los internal iterators; por ejemplo, es fácil comparar dos colecciones con un external iterator. Sin embargo, requieren más control por parte del cliente.

## Relacionado

- [[iterator]]
- [[internal-iterator]]

## Lo mencionan

- [[internal-iterator]]
