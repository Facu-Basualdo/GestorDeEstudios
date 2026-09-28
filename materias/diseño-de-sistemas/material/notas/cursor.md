---
titulo: "Cursor"
tipo: concepto
tags: ["iterator","patron-de-diseno","cursor","agregado"]
temas: ["[[patrones-de-comportamiento]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [247]
veces_en_examen: 0
---

# Cursor

> Tipo de iterador que solo almacena el estado de la iteración, mientras que el algoritmo de recorrido está definido en el agregado.

Un cursor simplemente apunta a la posición actual en el agregado. El cliente invoca la operación Next sobre el agregado con el cursor como argumento, y Next cambia el estado del cursor. Esto permite que el agregado defina el algoritmo de recorrido, facilitando el uso de diferentes algoritmos en el mismo agregado, pero puede violar el encapsulamiento si el algoritmo necesita acceder a variables privadas del agregado.

## Relacionado

- [[iterator]]

