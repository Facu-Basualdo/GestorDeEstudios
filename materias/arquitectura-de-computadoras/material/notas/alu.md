---
titulo: "ALU – Unidad Aritmético Lógica"
tipo: concepto
tags: ["alu","unidad-aritmetica","circuito","registro-ac"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [35]
veces_en_examen: 0
---

# ALU – Unidad Aritmético Lógica

> Motor de cálculo de la máquina: una unidad autónoma compuesta por circuitos dedicados a realizar operaciones aritméticas y lógicas.

Es el motor de cálculo y está directamente relacionada con el Registro AC.

Es una unidad autónoma compuesta de circuitos dedicados a realizar operaciones aritméticas y lógicas (familia IBO). Dispone de operadores o unidades funcionales destinadas a realizar una o varias operaciones aritméticas o lógicas.

El usuario de la ALU es el programa con lenguaje de máquina; en particular, el registro de instrucción y su código de operación. El Decodificador (DECO) vincula el código de operación con la ALU: es un circuito combinacional cuyas entradas son los bits del CO y cuyas salidas son 2^cant_bits.

## Relacionado

- [[registro-ac]]
- [[decodificador]]

## Lo mencionan

- [[senales-de-gobierno-de-la-arquitectura-abacus]]
- [[salto-incondicional-sai]]
- [[salto-condicional-sac]]
- [[decodificador]]
- [[elemento-de-la-unidad-alu]]
- [[esquema-alu-con-operadores-de-caracter-combinacional]]
