---
titulo: "Direccionamiento Indirecto Mediante Registro"
tipo: concepto
tags: ["direccionamiento","modo","indirecto","registro","mov"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [95]
veces_en_examen: 0
---

# Direccionamiento Indirecto Mediante Registro

> El direccionamiento indirecto mediante registro se usa cuando el operando está en memoria en una posición contenida en un registro (BX, BP, SI o DI).

`MOV AX, [BX]` → Almacena en AX el contenido de la dirección de memoria `DS:[BX]`.

## Relacionado

- [[instruccion-mov]]
- [[registros-de-segmento]]

## Lo mencionan

- [[modos-de-direccionamiento-de-memoria]]
