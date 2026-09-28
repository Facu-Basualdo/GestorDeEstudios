---
titulo: "Syntactic Distance"
tipo: concepto
tags: ["distancia","sintaxis","dependencias","integracion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [135]
veces_en_examen: 0
---

# Syntactic Distance

> La distancia sintáctica es la que existe cuando los elementos que cooperan no coinciden en el número y tipo de los elementos de datos que comparten.

Los elementos que cooperan deben acordar el número y tipo de los elementos de datos que se comparten. Por ejemplo, si un elemento envía un entero y el otro espera un punto flotante, o si los bits dentro de un campo de datos se interpretan de manera diferente, hay una distancia sintáctica que debe salvarse.

Las diferencias en tipos de datos suelen ser fáciles de observar y predecir; un compilador puede detectar desajustes de tipos. Las diferencias en bit masks, aunque similares, suelen ser más difíciles de detectar, y el analista puede necesitar apoyarse en documentación o en el escrutinio del código para identificarlas.


## Lo mencionan

- [[distance]]
