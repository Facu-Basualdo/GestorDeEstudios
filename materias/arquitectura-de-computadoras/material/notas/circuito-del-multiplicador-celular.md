---
titulo: "Circuito del Multiplicador Celular"
tipo: concepto
tags: ["multiplicacion","circuito","celular","hardware"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [45,46]
veces_en_examen: 0
---

# Circuito del Multiplicador Celular

> Circuito combinacional que implementa la multiplicación celular en paralelo y cuyas dimensiones se calculan a partir de la cantidad de filas y columnas.

Datos de funcionamiento:

- **Cantidad de Ciclos** = longitud_multiplicador(y) – 1
- **Cantidad de Batidos** = 1

Cálculos de tamaño:

- Cantidad de AND = cant_filas × cant_colum
- Cantidad de Entradas a los AND = cant_AND × 2
- Cantidad de SUM = (cant_filas – 1) × (cant_colum – 1)
- Cantidad de ½ SUM = cant_filas – 1
- Cantidad de Flip-Flop’s = 2 × (cant_filas + cant_colum)


