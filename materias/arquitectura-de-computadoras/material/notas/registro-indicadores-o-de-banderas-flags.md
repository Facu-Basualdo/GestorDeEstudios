---
titulo: "Registro Indicadores o de Banderas (Flags)"
tipo: concepto
tags: ["8086","registros","banderas","flags","estado","control"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [92]
veces_en_examen: 0
---

# Registro Indicadores o de Banderas (Flags)

> Registro de 16 bits del 8086 que contiene información de estado y control de las operaciones, con 9 banderas activas.

Contiene información de estado y control de las operaciones del microprocesador. De los 16 bits, solo se usan 9 y cada uno representa una bandera. Permite que instrucciones de bifurcación se respalden en resultados temporales de estos indicadores. Las posiciones 1, 3 y 5 son reservadas para uso interno y no deben modificarse.

**Banderas de estado** (registran el estado del procesador):
- OF (Overflow Flag): indica desbordamiento aritmético.
- SF (Sign Flag): indica resultado o comparación negativa.
- ZF (Zero Flag): indica resultado cero o comparación igual.
- AF (Auxiliar Flag): indica si hay necesidad de ajuste en operaciones aritméticas.
- PF (Parity Flag): indica paridad; se usa en la verificación de transferencias de bytes.
- CF (Carry Flag): indica acarreo en las instrucciones.

**Banderas de control** (registran el modo de funcionamiento):
- DF (Direction Flag): controla la dirección (adelante o atrás) en operaciones con cadenas, incrementando o decrementando automáticamente los registros índices.
- IF (Interrupt Flag): indica si están disponibles las interrupciones de los dispositivos externos.
- TF (Trap Flag): controla la operación paso a paso (modo Debug), usada por el programa.

Formato (16 bits): 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0; flags: - - - - OF DF IF TF SF ZF 0 AF 0 PF 1 CF.

## Relacionado

- [[arquitectura-8086]]
- [[registros-indices]]

## Lo mencionan

- [[arquitectura-8086]]
- [[ciclo-fetch]]
