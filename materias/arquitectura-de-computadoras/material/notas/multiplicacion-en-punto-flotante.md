---
titulo: "Multiplicación en Punto Flotante"
tipo: concepto
tags: ["multiplicacion","punto-flotante","acumulador","registro-mc","doble-longitud"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [43]
veces_en_examen: 0
---

# Multiplicación en Punto Flotante

> Operación que se simplifica multiplicando las mantisas y sumando los exponentes, sin necesidad de comparar exponentes ni alinear mantisas.

Se consigue con una estructura compuesta por un registro acumulador (AC) y un registro multiplicador/cociente (MC).

- **AC** → Multiplicando.
- **MC** → Multiplicador en caso de multiplicación y cociente en caso de división.

Los productos parciales son iguales al multiplicando si el bit correspondiente del multiplicador es 1, y nulos en caso contrario. Se verifican sucesivamente los bits del multiplicador y los productos parciales, convenientemente desplazados, se totalizan en un acumulador.

Si multiplicando y multiplicador tienen n bits cada uno, el acumulador necesita capacidad para 2n bits: el resultado se obtiene en doble longitud.

Inicialización:
1. Carga del multiplicador en el acumulador.
2. Desplazamiento a derecha del conjunto AC + MC, con resultado: 0 en el acumulador y el multiplicador en MC.
3. Carga del multiplicando en B (eventualmente puede ser sustituido por el RPM).

Al final, el resultado ocupa en doble longitud el conjunto acumulador + MC.


## Lo mencionan

- [[division-sin-restauracion]]
