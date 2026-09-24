# Análisis de exámenes — Arquitectura de Computadoras
[← Índice Arquitectura de Computadoras](../INDICE.md)

> **Origen**: análisis de 5 parciales (2022 T1, 2022 T2, 2023 T2, 2024 T1, 2024 T2)
> aportado por el estudiante el 2026-09-23 en su
> [cronograma](../../../docs/cronograma-eval-1-arquitectura.md). No se hizo con
> `/cargar-examen` y esos parciales no están identificados entre las fuentes del
> notebook (las fechas de las fuentes parecen de finales). Cuando se cargue un modelo,
> se verifica contra esta tabla.

## Evaluación Nº 1 (2026-09-30, 16 hs)

Alcance según los criterios de evaluación del campus:

- **Teoría**: generaciones de computadoras, codificación de la información, combinacionales y secuenciales.
- **Práctica**: ejercicios de codificación, circuitos combinacionales y secuenciales.
- **No entra**: Unidad III (procesadores) ni IV.
- **Abierto**: si entran buses, registros, señales de gobierno y ABACUS (semanas 7–8
  del cronograma del campus); si hay preguntas teóricas aparte de los ejercicios.

## Tipos de ejercicio (acumulado de los 5 parciales)

Los 5 son 100% ejercicios. **2023–2024: siempre A + D + E + F**; 2022: A + B + C.
Formato más probable para el 30: el de 2024.

| Tipo | Qué piden | % del parcial | Aparece en | Temas |
|---|---|---|---|---|
| A. Hamming + códigos | verificar/corregir, decodificar (BCD, 2421, Aiken, Exceso 3, Gray, ASCII), "FIN" en ASCII octal | 20–25% | 5/5 | códigos redundantes, códigos numéricos, alfanuméricos, numeración |
| B. Álgebra de Boole | expresión de un circuito, simplificar citando leyes, sólo NAND | 20–30% | 3/5 (2022 T1, 2022 T2, 2023 T2) | álgebra de Boole |
| C. Combinacional de enunciado | tabla de verdad, Karnaugh, circuito (semáforo, motores) | 45% | 2/5 (2022 T1, 2022 T2) | combinacionales, simplificación |
| D. Biestable por ecuación | tabla de funcionamiento y excitación de UZ/WZ/KP; convertir a JK, RS o D | 15–20% | 3/5 (2023 T2, 2024 T1, 2024 T2) | biestables |
| E. Análisis secuencial | tabla de estados, redefinir con otro FF, Karnaugh, sólo NAND/NOR | 45% | 3/5 (2023 T2, 2024 T1, 2024 T2) | análisis secuencial, biestables, simplificación |
| F. Detector de secuencia serie | diagrama de estados con dos secuencias, cantidad de biestables | 15% | 2/5 (2024 T1, 2024 T2) | diseño secuencial |

## Peso resultante por tema

| Tema | Peso | Por qué |
|---|---|---|
| Códigos redundantes (Hamming) | 3 | tipo A, 5/5 |
| Códigos numéricos (BCD, 2421, Aiken, Ex3, Gray) | 3 | tipo A, 5/5 |
| Simplificación (Karnaugh) | 3 | dentro de C y E: 5/5 |
| Álgebra de Boole | 3 | tipo B 3/5, y NAND/NOR dentro de E |
| Biestables | 3 | tipo D 3/5 y base de E |
| Análisis de circuitos secuenciales | 3 | tipo E, 45% en 3/5 |
| Diseño secuencial y detectores de secuencia | 3 | tipo F en los dos 2024 (el formato más probable) |
| Códigos alfanuméricos (ASCII) | 2 | parte de A en algunos |
| Sistemas de numeración | 2 | auxiliar de A (octal, Gray→binario) |
| Funciones y formas canónicas | 2 | auxiliar de C y E |
| Circuitos combinacionales de enunciado | 2 | ejercicio completo pero sólo en 2022; ausente en 2023–2024 |
| Generaciones de computadoras | 1 | sólo teoría: nombrado en la evaluación, 0 ejercicios |
| Complementos, representación, punto fijo/flotante | 1 | teoría de codificación; 0 ejercicios |
| Registros y contadores | 1 | no aparece en ejercicios; dudoso si entra |
