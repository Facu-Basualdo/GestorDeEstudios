---
titulo: "Modos de Organización: Comparación"
tipo: concepto
tags: ["memoria","2d","3d","comparacion","diodos","eficiencia"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [62]
veces_en_examen: 0
---

# Modos de Organización: Comparación

> Comparación entre la memoria 2D y la memoria 3D que muestra que la 3D es más eficiente y necesita menos componentes.

Memoria 2D:
- Los decodificadores 2D utilizan muchos diodos: 8 × 2^8 = 2048 para 8 entradas, y la cantidad se duplica al agregar un bit extra: 9 × 2^9 = 4608 para 9 entradas.

Memoria 3D:
- Para 16 palabras de 1 bit: (2^2 + 2^2) × 2 = 16 diodos, mientras que en 2D se necesitan 4 × 2^4 = 64 diodos.
- Para 4096 palabras: (2^6 + 2^6) × 6 = 768 diodos, mientras que en 2D se necesitan 12 × 2^12 = 49152 diodos.

En resumen, la 3D es más eficiente y necesita menos componentes, especialmente en configuraciones más grandes.


