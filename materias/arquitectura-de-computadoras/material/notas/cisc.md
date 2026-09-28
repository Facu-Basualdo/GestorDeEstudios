---
titulo: "CISC"
tipo: concepto
tags: ["cisc","arquitectura","instrucciones-complejas","unidad-de-control-microprogramada"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [89]
veces_en_examen: 0
---

# CISC

> Arquitectura de procesador con un repertorio de instrucciones complejas, que requiere una Unidad de Control Microprogramada.

Se caracteriza por tener un repertorio de instrucciones complejas y muchas instrucciones potentes, para lograr una implementación más directa con lenguajes de alto nivel. Requiere una Unidad de Control Microprogramada; si fuera cableada tendría millones de cables.

Ejemplo: `SUM A, B, C`
- 1º ciclo: carga A y B.
- 2º ciclo: guarda (A + B) en C.

**Criterios para definir una arquitectura CISC**
1. Muchas instrucciones y modos de direccionamiento.
2. Instrucciones que requieren más de un ciclo de memoria.
3. Varios tipos de instrucciones tienen acceso a memoria.
4. Existencia de registros de propósito específico.
5. Instrucciones de máquina de un relativo alto nivel (cercano a las sentencias de los lenguajes de alto nivel).
6. Las instrucciones compuestas son decodificadas internamente y ejecutadas con una serie de microinstrucciones almacenadas en una ROM interna.

## Relacionado

- [[modelo-cableado-vs-microprogramado-de-wilkes]]
- [[risc]]

## Lo mencionan

- [[modelo-cableado-vs-microprogramado-de-wilkes]]
- [[risc]]
- [[comparacion-cisc-vs-risc]]
