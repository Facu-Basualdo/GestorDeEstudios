---
titulo: "Elemento de la Unidad ALU"
tipo: concepto
tags: ["alu","bit","operador","sumador","registro-desplazamiento"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [37]
veces_en_examen: 0
---

# Elemento de la Unidad ALU

> Elemento de un bit que representa el i-ésimo bit de la ALU, situado entre el BUS M fuente y el registro Acumulador.

Cuenta con un sumador en paralelo y puertas lógicas para realizar operaciones aritméticas y lógicas. El acumulador funciona como un registro de desplazamiento y las operaciones son controladas por señales del código de operación. El resultado se estabiliza después de un tiempo y se introduce en el acumulador mediante la señal impulsional EAC.

Efectos según la operación y Fi:
- OR: Fi = 0 → No cambia; Fi = 1 → SET.
- AND: Fi = 0 → RESET; Fi = 1 → No cambia.
- XOR: Fi = 0 → No cambia; Fi = 1 → Complementa.

## Relacionado

- [[alu]]
- [[registro-ac]]
- [[bus-m-de-datos-e-instrucciones]]
- [[senales-impulsionales]]

