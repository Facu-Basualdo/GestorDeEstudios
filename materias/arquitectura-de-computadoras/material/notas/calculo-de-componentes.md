---
titulo: "Cálculo de Componentes"
tipo: concepto
tags: ["calculo","componentes","memoria","registro de seleccion","formulas"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [61]
veces_en_examen: 0
---

# Cálculo de Componentes

> Fórmulas para calcular la cantidad de puntos de memoria y los bits del Registro de Selección según la organización 2D o 3D.

Cantidad de palabras: PAL. Bits por palabra = Bits del RPM: B. Cantidad de Puntos de Memoria: PM = PAL × B.

Bits del Registro de Selección:
- En 2D: N = log(PAL) / log(2).
- En 3D: se divide N/2 y luego:
  - Bits para direccionar filas: P = N/2, redondeado hacia arriba.
  - Bits para direccionar columnas: Q = N/2, redondeado hacia abajo.

Si me dan los bits del RS: 2^N = PAL.

## Relacionado

- [[organizacion-2d]]
- [[organizacion-3d]]
- [[registro-de-seleccion]]

