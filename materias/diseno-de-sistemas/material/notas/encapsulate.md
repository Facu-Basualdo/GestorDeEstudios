---
titulo: "Encapsulate"
tipo: concepto
tags: ["tactica","encapsulacion","integracion","dependencias","interfaces"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [141]
veces_en_examen: 0
---

# Encapsulate

> La táctica Encapsulate introduce una interfaz explícita a un elemento y asegura que todo acceso al elemento pase por esa interfaz, eliminando dependencias sobre los internals del elemento.

La encapsulación es la base sobre la que se construyen todas las demás tácticas de integrabilidad; por eso rara vez se la ve sola y su uso está implícito en las otras tácticas.

Al eliminar las dependencias sobre los internals del elemento, reduce la probabilidad de que un cambio en un elemento se propague a otros elementos, ya sea reduciendo el número de dependencias o su distancia. Estas fortalezas se ven reducidas porque la interfaz limita las formas en que las responsabilidades externas pueden interactuar con el elemento (quizás a través de un wrapper). Como consecuencia, las responsabilidades externas solo pueden interactuar directamente con el elemento mediante la interfaz expuesta; las interacciones indirectas, como la dependencia de la calidad de servicio, probablemente permanezcan igual.

La encapsulación también puede ocultar interfaces que no son relevantes para una tarea de integración particular. Un ejemplo es una biblioteca usada por un servicio que puede ocultarse por completo de todos los consumidores y cambiarse sin que esos cambios se propaguen a los consumidores.

De este modo, la encapsulación puede reducir el número de dependencias y las distancias sintáctica, de datos y de comportamiento semántico entre C y S.

## Relacionado

- [[integrability-tactics]]
- [[distance]]

## Lo mencionan

- [[integrability-tactics]]
- [[reduce-coupling]]
