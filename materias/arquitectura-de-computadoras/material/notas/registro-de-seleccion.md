---
titulo: "Registro de Selección"
tipo: concepto
tags: ["seleccion","memoria","registro","direccionamiento"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [57,61]
veces_en_examen: 0
---

# Registro de Selección

> Registro (S) que permite seleccionar una celda básica o palabra de memoria y cuyos bits se calculan según el modo de organización.

En cualquier memoria, para poder usar una celda básica o punto de memoria, esta debe poder ser seleccionada mediante el Registro de Selección (S). Se necesita también un método para controlar cuándo las celdas seleccionadas deban ser leídas o escritas.

El cálculo de sus bits depende del modo de organización:
- En 2D: N = log(PAL) / log(2).
- En 3D: se divide N/2; P = N/2 redondeado hacia arriba para filas y Q = N/2 redondeado hacia abajo para columnas.
- Si se dan los bits del RS, la cantidad de palabras es 2^N = PAL.

## Relacionado

- [[punto-de-memoria]]
- [[organizacion-2d]]
- [[organizacion-3d]]

## Lo mencionan

- [[decodificador]]
- [[punto-de-memoria]]
- [[calculo-de-componentes]]
- [[modos-de-organizacion]]
- [[organizacion-2d]]
- [[organizacion-3d]]
- [[modos-de-organizacion-calculo-de-componentes]]
- [[direccionamiento-relativo-por-pagina-o-yuxtaposicion]]
