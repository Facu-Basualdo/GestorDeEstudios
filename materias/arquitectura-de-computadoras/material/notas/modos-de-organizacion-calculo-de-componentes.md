---
titulo: "Modos de Organización: Cálculo de Componentes"
tipo: concepto
tags: ["memoria","modos-de-organizacion","registro-de-seleccion","puntos-de-memoria","formulas"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [62,63,64,65,66,67]
veces_en_examen: 0
---

# Modos de Organización: Cálculo de Componentes

> Conjunto de fórmulas para calcular la cantidad de palabras, bits, puntos de memoria y bits del registro de selección en los modos de organización de una memoria.

Cantidad de palabras: PAL
Bits por palabra: bits del RPM (B)
Puntos de Memoria: PM = PAL × B

Bits del Registro de Selección:
- En 2D → N = log(PAL) / log(2)
- En 3D → se divide N/2 y luego:
  - Bits para direccionar filas: P = N/2 → redondeado hacia arriba.
  - Bits para direccionar columnas: Q = N/2 → redondeado hacia abajo.
- Si dan los bits del RS → 2^N = PAL.

## Relacionado

- [[registro-de-seleccion]]

