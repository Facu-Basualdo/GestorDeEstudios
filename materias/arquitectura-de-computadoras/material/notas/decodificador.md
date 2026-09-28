---
titulo: "Decodificador"
tipo: concepto
tags: ["decodificador","deco","circuito-combinacional","alu","memoria","direccionamiento","logica combinacional"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [35,57,58,60]
veces_en_examen: 0
---

# Decodificador

> Circuito que, para n bits de entrada de dirección, tiene 2^n líneas de salida y activa una sola línea por cada combinación de entrada.

En una memoria, el decodificador tiene una entrada por cada bit de la dirección que decodifica. Para n bits de entrada tendrá 2^n líneas de salida y, para cada combinación de entrada, se activará una sola línea de salida.

En la organización 3D, el Registro S se divide en dos partes y se utilizan dos decodificadores: uno para filas, que manda la línea de selección S1, y otro para columnas, que manda la línea de selección S2.

En la organización 2.5D, X es el decodificador de filas y trabaja sobre el único hilo de selección del punto de memoria 2D; Y es el decodificador de columnas y selecciona una columna basándose en el input y el output.

## Relacionado

- [[alu]]
- [[organizacion-2d]]
- [[organizacion-3d]]
- [[organizacion-2-5d]]
- [[registro-de-seleccion]]

## Lo mencionan

- [[alu]]
- [[implementacion-2d-seleccion-lineal]]
- [[implementacion-3d-seleccion-por-corrientes-coincidentes]]
- [[organizacion-2d]]
- [[organizacion-3d]]
- [[organizacion-2-5d]]
