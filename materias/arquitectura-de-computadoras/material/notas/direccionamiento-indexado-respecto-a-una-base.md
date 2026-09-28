---
titulo: "Direccionamiento Indexado Respecto a una Base"
tipo: concepto
tags: ["direccionamiento","modo","indexado","registro-base","mov"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [96]
veces_en_examen: 0
---

# Direccionamiento Indexado Respecto a una Base

> El direccionamiento indexado respecto a una base se usa cuando la dirección del operando se obtiene de la suma de un registro base (BP o BX), un índice (DI o SI) y, opcionalmente, un desplazamiento.

`MOV AX, TABLA[BX][DI]` → Almacena en AX el contenido de la dirección apuntada por la suma de TABLA, BX y DI.

## Relacionado

- [[instruccion-mov]]

## Lo mencionan

- [[modos-de-direccionamiento-de-memoria]]
