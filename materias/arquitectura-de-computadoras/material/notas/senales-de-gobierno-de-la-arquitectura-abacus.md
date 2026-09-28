---
titulo: "Señales de Gobierno de la Arquitectura ABACUS"
tipo: concepto
tags: ["senales-de-gobierno","abacus","control","instrucciones"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [34]
veces_en_examen: 0
---

# Señales de Gobierno de la Arquitectura ABACUS

> Conjunto de señales de gobierno específicas de la arquitectura ABACUS que controlan transferencias, entradas, salidas, memoria y operaciones de la ALU.

Señales de transferencia:
- PACM: “Puesta A Cero Registro M”. Impulsional. 0 → M.
- INCP: “Incrementar Contador de Programa”. Impulsional. (P) + 1 → P.

Señales de entrada:
- ENS: “Entrada Registro S”. Impulsional. (BUS S) → S.
- ENM: “Entrada Registro M”. Impulsional. (BUS M) → M.
- ENI: “Entrada Registro I”. Impulsional. (BUS M) → I.
- ENA: “Entrada ALU”. De nivel. (BUS M) → ALU.
- ENP: “Entrada Registro P”. Impulsional. (BUS S) → P. Permite las instrucciones SAC y SAI.
- EAC: “Entrada Registro Acumulador”. Impulsional.

Señales de salida:
- SRM: “Salida Registro M”. De nivel. (M) → BUS M.
- SRD: “Salida Registro D”. De nivel. (D) → BUS S.
- SRP: “Salida Registro P”. De nivel. (P) → BUS S.
- SAC (salida): “Salida Registro Acumulador”. De nivel. (AC) → BUS M.

Señales de memoria:
- ICM: “Inicio Ciclo de Memoria”. Impulsional.
- LEC y ESC: “Lectura” y “Escritura”. De nivel.

Señales de la ALU:
- CAR, SUM, SUS, etc: set de instrucciones. Operaciones de cálculo. De nivel. NOT va aparte.
- SAI: “Salto Incondicional”. Rompe la secuencia del contador de programa.
- SAC (salto): “Salto Condicional”. Depende del signo del AC: (-) salta, (+) anula.

## Relacionado

- [[registro-p]]
- [[registro-ac]]
- [[alu]]
- [[memoria]]
- [[salto-incondicional-sai]]
- [[salto-condicional-sac]]

## Lo mencionan

- [[naturaleza-combinacional]]
- [[naturaleza-secuencial]]
