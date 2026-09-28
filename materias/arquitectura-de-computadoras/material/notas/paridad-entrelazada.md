---
titulo: "Paridad Entrelazada"
tipo: concepto
tags: ["paridad","entrelazada","deteccion","correccion","errores"]
temas: ["[[codificacion-de-la-informacion]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [16]
veces_en_examen: 0
---

# Paridad Entrelazada

> Código que utiliza en conjunto la paridad vertical y la horizontal y permite detectar y corregir errores.

Utiliza en conjunto el código de paridad vertical con el horizontal.
- Los caracteres a transmitir se agrupan en bloques de 'm' filas y 'n' columnas.
- Se calcula el bit de paridad de cada fila y se añade al final.
- Se calcula el bit de paridad de cada columna y se añade al final.
- El bloque a transmitir tendrá una fila y una columna más que el original.
- Adicionalmente se emplea un bit de paridad cruzada que se calcula a partir de los bits de paridad de filas y columnas.

Ejemplo: bloque de 48 bits, 6 filas de 8 bits cada una. Se usa paridad par de unos.

El bit de paridad cruzada, denominado "Volcado Lineal", consiste en disponer los bits de paridad vertical, el bit de paridad cruzada y los bits de paridad horizontal juntos y analizarlos como una sola tira de bits.

Ventaja: permite detectar y corregir más de un error.
Desventajas: consumo elevado de ancho de banda, retransmisión del bloque entero, alta ocupación de CPU, complicaciones con múltiples errores, detección imprecisa del error exacto y optimización cuestionada en la práctica.

## Relacionado

- [[bit-de-paridad]]
- [[paridad-vertical-simple]]
- [[paridad-horizontal]]

## Lo mencionan

- [[bit-de-paridad]]
