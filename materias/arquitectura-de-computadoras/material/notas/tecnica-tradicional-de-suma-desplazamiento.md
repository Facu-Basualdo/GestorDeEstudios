---
titulo: "Técnica Tradicional de Suma-Desplazamiento"
tipo: concepto
tags: ["multiplicacion","suma-desplazamiento","rapidez","ciclos-cpu"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [45]
veces_en_examen: 0
---

# Técnica Tradicional de Suma-Desplazamiento

> Técnica para mejorar la rapidez de la multiplicación que condensa operaciones repetitivas para evitar el consumo de ciclos de CPU.

Incluye dos estrategias:

- **Analizar cantidad de ceros contiguos**: dotar al acumulador de circuitos para desplazar varias posiciones en una sola operación; una sucesión de 0’s se trata con un solo desplazamiento.
- **Analizar cantidad de unos contiguos**: emplear el método de “suma y sustracción”; en el esquema tradicional, una serie de 1 contiguos da lugar a una serie de adiciones, cada una seguida de un desplazamiento.


