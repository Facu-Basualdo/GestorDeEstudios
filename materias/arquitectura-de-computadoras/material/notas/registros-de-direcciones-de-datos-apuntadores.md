---
titulo: "Registros de Direcciones de Datos (Apuntadores)"
tipo: concepto
tags: ["8086","registros","apuntadores","pila"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [92]
veces_en_examen: 0
---

# Registros de Direcciones de Datos (Apuntadores)

> Registros SP y BP del 8086 que sirven como punteros, especialmente para la pila y el direccionamiento indirecto dentro de ella.

- **SP (Puntero de Pila)**: aunque es de uso general, debe usarse sólo como puntero de pila. La pila sirve para almacenar direcciones de retorno de subrutinas y datos temporarios mediante PUSH y POP. Al hacer PUSH, a SP se le restan dos; al hacer POP, se le suman dos.
- **BP (Puntero de Base)**: generalmente se utiliza para realizar direccionamiento indirecto dentro de la pila.

## Relacionado

- [[arquitectura-8086]]
- [[registros-de-proposito-general]]

## Lo mencionan

- [[arquitectura-8086]]
