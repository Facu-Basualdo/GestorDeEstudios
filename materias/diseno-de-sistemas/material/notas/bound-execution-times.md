---
titulo: "Bound Execution Times"
tipo: concepto
tags: ["rendimiento","tiempos","ejecucion","latencia","performance","tacticas","tiempo","recursos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [179,181,182,183,184,185,186,188,189]
veces_en_examen: 0
---

# Bound Execution Times

> Táctica de performance que limita el tiempo de ejecución usado para responder a un evento, por ejemplo acotando el número de iteraciones en algoritmos iterativos dependientes de datos.

Coloca un límite sobre cuánto tiempo de ejecución se usa para responder a un evento. Para algoritmos iterativos dependientes de datos, limitar el número de iteraciones es un método para acotar los tiempos de ejecución. El costo suele ser una computación menos precisa. Al adoptar esta táctica hay que evaluar su efecto en la precisión y ver si el resultado es 'suficientemente bueno'. El texto la presenta como una táctica de gestión de recursos que se combina frecuentemente con la táctica manage sampling rate.

## Relacionado

- [[manage-sampling-rate]]
- [[control-resource-demand]]

## Lo mencionan

- [[reduce-resource-demand]]
- [[control-resource-demand]]
