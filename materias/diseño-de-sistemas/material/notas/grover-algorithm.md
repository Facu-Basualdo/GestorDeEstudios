---
titulo: "Grover's Algorithm"
tipo: concepto
tags: ["grover","algoritmo-cuantico","hash","computacion-cuantica"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [475]
veces_en_examen: 0
---

# Grover's Algorithm

> El algoritmo de Grover es un algoritmo probabilístico que computa la inversa de una función, como una función hash, con una aceleración cuadrática respecto de los algoritmos clásicos.

Un ejemplo de algoritmo probabilístico que computa la inversa de una función. En particular, puede calcular la inversa de una función hash. Para una hash basada en 256 bits, el algoritmo necesita del orden de 2^128 iteraciones. Esto representa una aceleración cuadrática respecto de los algoritmos convencionales: el tiempo del algoritmo cuántico es aproximadamente la raíz cuadrada del tiempo del algoritmo clásico. Por eso, una gran cantidad de material protegido por contraseñas, que antes se consideraba seguro, se vuelve vulnerable.


