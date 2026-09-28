---
titulo: "Direccionamiento Indirecto por Registro Base"
tipo: concepto
tags: ["direccionamiento","modo","registro-base","bp","bx","mov"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [96]
veces_en_examen: 0
---

# Direccionamiento Indirecto por Registro Base

> El direccionamiento indirecto por registro base se usa cuando el operando está en memoria en una posición apuntada por BX o BP más un desplazamiento.

Permite acceder de forma cómoda a estructuras de datos que se encuentran en memoria.

`MOV AX, [BP] + 2` → Almacena en AX el contenido de la dirección de memoria que resulta de sumar 2 al contenido de BP (dentro del segmento de pila).

## Relacionado

- [[instruccion-mov]]
- [[registros-de-segmento]]

## Lo mencionan

- [[modos-de-direccionamiento-de-memoria]]
