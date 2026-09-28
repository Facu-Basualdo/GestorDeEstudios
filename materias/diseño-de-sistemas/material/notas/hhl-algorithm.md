---
titulo: "HHL Algorithm"
tipo: concepto
tags: ["hhl","inversion-matricial","algoritmo-cuantico","machine-learning"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [476]
veces_en_examen: 0
---

# HHL Algorithm

> El algoritmo HHL, de Harrow, Hassidim y Lloyd, invierte una matriz lineal en una computadora cuántica, sujeto a ciertas restricciones.

El problema general es resolver la ecuación Ax = b, donde A es una matriz N×N, x es un conjunto de N incógnitas y b es un conjunto de N valores conocidos. Cuando N crece, la inversión de matrices se convierte en la técnica estándar para resolver el sistema. El algoritmo HHL invierte una matriz lineal en una computadora cuántica, sujeto a estas restricciones:

1. Los valores de b deben ser rápidamente accesibles; este es el problema que se supone que resuelve QRAM.
2. La matriz A debe cumplir ciertas condiciones: si es dispersa (sparse), probablemente pueda procesarse eficientemente; además debe estar bien condicionada, es decir, su determinante debe ser no nulo o cercano a cero.
3. El resultado de aplicar HHL es que los valores de x aparecen en superposición, así que se necesita un mecanismo para aislar eficientemente los valores reales desde la superposición.

El algoritmo es demasiado complicado para presentarlo en el texto, pero un elemento destacable es que se apoya en una técnica de amplificación de amplitud basada en fases.

## Relacionado

- [[qram]]

