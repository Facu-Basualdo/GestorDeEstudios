---
titulo: "Registros de propósito general"
tipo: concepto
tags: ["registros","gpr","von-neumann","proposito-general","8086","ax-bx-cx-dx"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [29,92]
veces_en_examen: 0
---

# Registros de propósito general

> Conjunto de registros del 8086 (AX, BX, CX, DX) que almacenan valores temporales para las operaciones aritméticas y otros usos específicos.

- **AX**: acumulador principal, utilizado para operaciones de entrada/salida y la mayor parte de la aritmética. Las instrucciones de multiplicar, dividir y traducir suponen su uso. Algunas operaciones generan código más eficiente si se refieren a AX.
- **BX**: registro base; es el único de propósito general que puede ser índice para direccionamiento indexado y emplearse para cálculos. Se usa para almacenar el offset de una estructura de datos (normalmente posiciones de memoria sumadas a una dirección base para conseguir una dirección absoluta).
- **CX**: registro contador/descontador; usado para cálculos, pero su función principal es controlar la cantidad de ciclos de una estructura loop.
- **DX**: registro de datos; algunas operaciones de entrada/salida requieren su uso, y las operaciones de multiplicación y división con cifras grandes suponen el trabajo en conjunto de AX y DX.

## Relacionado

- [[registros]]
- [[arquitectura-8086]]
- [[registros-indices]]

## Lo mencionan

- [[tipos-de-registros]]
- [[arquitectura-8086]]
- [[ciclo-fetch]]
- [[registros-de-direcciones-de-datos-apuntadores]]
