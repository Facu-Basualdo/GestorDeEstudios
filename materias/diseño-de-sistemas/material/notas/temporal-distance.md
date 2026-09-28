---
titulo: "Temporal Distance"
tipo: concepto
tags: ["distancia","tiempo","dependencias","integracion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [135]
veces_en_examen: 0
---

# Temporal Distance

> La distancia temporal es la que existe cuando los elementos que cooperan deben acordar suposiciones sobre el tiempo, como operar a tasas diferentes o tener supuestos de latencia distintos.

Ejemplos de distancia temporal: un elemento emite valores a una tasa de 10 Hz y el otro espera valores a 60 Hz, o un elemento espera que el evento A siga al evento B y el otro espera que A siga a B con no más de 50 ms de latencia.

Aunque podría considerarse un subcaso de la semántica de comportamiento, es tan importante y a menudo sutil que se la distingue explícitamente.

## Relacionado

- [[behavioral-semantic-distance]]

## Lo mencionan

- [[distance]]
