---
titulo: "Data Semantic Distance"
tipo: concepto
tags: ["distancia","semantica","datos","integracion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [135]
veces_en_examen: 0
---

# Data Semantic Distance

> La distancia semántica de datos es la que existe cuando dos elementos comparten el mismo tipo de dato pero interpretan los valores de manera diferente.

Aunque dos elementos compartan el mismo tipo de datos, sus valores pueden interpretarse de forma distinta. Por ejemplo, si un valor de datos representa altitud en metros y el otro representa altitud en pies, hay una distancia semántica de datos que debe salvarse.

Este tipo de desajuste es difícil de observar y predecir, aunque la tarea del analista mejora si los elementos involucrados emplean metadata. Los desajustes en la semántica de datos pueden descubrirse comparando documentación de interfaces, descripciones de metadata, si están disponibles, o revisando el código, si está disponible.


## Lo mencionan

- [[distance]]
