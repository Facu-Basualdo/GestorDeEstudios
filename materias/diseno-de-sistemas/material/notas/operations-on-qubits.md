---
titulo: "Operations on Qubits"
tipo: concepto
tags: ["computacion-cuantica","qubit","operaciones","invertibilidad"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [473]
veces_en_examen: 0
---

# Operations on Qubits

> Las operations on qubits son operaciones que manipulan uno o más qubits; la mayoría son invertibles, a diferencia de las operaciones clásicas de bits, y la única excepción es la operación READ, que es destructiva.

Algunas operaciones de un solo qubit son análogas a las operaciones clásicas de bits; otras son específicas de qubits. Una característica de la mayoría de las operaciones cuánticas es que son invertibles: dado el resultado de una operación, es posible recuperar la entrada. Esto las distingue de las operaciones clásicas de bits. La excepción es la operación READ, porque la medición es destructiva.

Ejemplos de operaciones de un solo qubit:
- READ: toma un qubit y produce 0 o 1 con probabilidades determinadas por las amplitudes; el valor del qubit colapsa a 0 o 1.
- NOT: toma un qubit en superposición y voltea las amplitudes.
- Z: suma π a la phase del qubit (módulo 2π).
- HAD (Hadamard): crea una superposición igual; una entrada 0 genera phase 0 y una entrada 1 genera phase π.

Es posible encadenar varias operaciones para producir unidades de funcionalidad más sofisticadas. También hay operadores que trabajan sobre más de un qubit, como CNOT.

## Relacionado

- [[qubit]]
- [[phase]]
- [[cnot]]

## Lo mencionan

- [[cnot]]
