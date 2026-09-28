---
titulo: "Direccionamiento Directo"
tipo: concepto
tags: ["direccionamiento","modo","directo","memoria","mov","offset"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [95]
veces_en_examen: 0
---

# Direccionamiento Directo

> El direccionamiento directo se usa cuando el operando es una dirección de memoria.

La dirección puede especificarse con su valor entre `[ ]`, o mediante una variable definida previamente.

- `MOV BX, [1000]` → Almacena en BX el contenido de la dirección `DS:1000`.
- `MOV AX, TABLA` → Almacena en AX el contenido de la dirección `DS:TABLA`.

`TABLA` es el offset. En el ejemplo, BB está en la dirección TABLA y AA en TABLA + DS. Este cálculo es interno.

## Relacionado

- [[instruccion-mov]]
- [[registros-de-segmento]]

## Lo mencionan

- [[modos-de-direccionamiento-de-memoria]]
