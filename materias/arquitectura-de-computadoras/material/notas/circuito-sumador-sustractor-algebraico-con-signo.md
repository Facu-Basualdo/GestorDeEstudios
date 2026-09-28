---
titulo: "Circuito Sumador/Sustractor Algebraico Con Signo"
tipo: concepto
tags: ["sumador","sustractor","signo","desbordamiento","flip-flop"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [38,39]
veces_en_examen: 0
---

# Circuito Sumador/Sustractor Algebraico Con Signo

> Circuito basado en el sumador paralelo que permite sumar o restar números con signo y detectar desbordamiento mediante sumadores y un flip-flop.

Se parte de la base del Sumador Paralelo, que tiene los siguientes problemas: no puede manejar signos, restar ni manejar desbordamiento de capacidad.

Para desarrollar el circuito es necesario:
- Expresar las magnitudes positivas en valor absoluto e indicar en el bit de mayor peso su signo a través de un CERO.
- Expresar las magnitudes negativas por complemento absoluto e indicar en el bit de mayor peso su signo a través de un UNO.
- Verificar situaciones de desborde analizando el arrastre del dígito de mayor peso de la magnitud junto al arrastre de la suma de los signos, detectando situaciones donde alguno de ellos sea igual a UNO.

Registro A: es el Acumulador. Almacena un sumando con su bit de signo en An. Registro B: almacena un sumando con su bit de signo en Bn. Los dos números se suman a través de un Sumador Paralelo de n bits y el resultado se carga en el Registro A. Se destina un Sumador Completo solamente para los bits de mayor peso (bit de signo).

Análisis del desbordamiento: el resultado queda en el Flip-Flop F.
- F = 1 → hay sobrecapacidad, la suma es incorrecta (C_{n+1} ≠ C_n).
- F = 0 → no hay sobrecapacidad, la suma es correcta (C_{n+1} = C_n).

Operación de sustracción: A – B = A + (–B). Se reduce a la suma algebraica del primer operando con el segundo complementado a 2. Este método evita tener que situar un sustractor junto al sumador.

## Relacionado

- [[registro-ac]]
- [[desbordamiento-o-sobrecapacidad]]
- [[numeros-binarios-con-signo]]

