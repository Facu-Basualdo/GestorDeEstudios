---
titulo: "Implementación 3D – Selección por Corrientes Coincidentes"
tipo: concepto
tags: ["memorias de nucleos","seleccion 3d","corrientes coincidentes","planos"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [56]
veces_en_examen: 0
---

# Implementación 3D – Selección por Corrientes Coincidentes

> Implementación de memorias de núcleos que superpone planos en zigzag y selecciona palabras mediante corrientes coincidentes en los ejes X e Y.

Reduce la cantidad de hilos superponiendo planos de manera alternada, creando un patrón en zigzag. La conexión en serie de los hilos de selección homólogos forma una estructura eficiente. Los decodificadores X (horizontal) e Y (vertical) facilitan la selección de palabras espaciales mediante corrientes coincidentes en el eje k.

La longitud de una palabra se relaciona con la cantidad de planos: 8 bits requieren 8 planos. La capacidad de la memoria se determina por la cantidad de palabras, siendo el producto de filas y columnas; por ejemplo, 4x4 resulta en 16 palabras. Cada núcleo atraviesa cuatro hilos: dos de selección (X e Y) y dos funcionales para lectura e inhibición, por pareja de matrices de núcleos.

Operación de lectura: se envían dos impulsos -I/2 por los hilos X e Y adecuados. La coincidencia de estos impulsos pone a cero a los núcleos de la palabra que estaban en 1, y ese basculamiento induce corrientes por los hilos de lectura.

Operación de escritura: se escriben los bits 1 de una palabra, con previa puesta a cero, enviando corrientes I/2 por los hilos X e Y que la seleccionan. Escribir 0 consiste en evitar el basculamiento: se envía una corriente -I/2 por el hilo de inhibición, opuesta a las dos corrientes I/2 de X e Y, de modo que la resultante igual a I/2 es insuficiente para provocar el basculamiento. Es posible usar el mismo hilo para lectura e inhibición.

Ventajas: modularidad y compactación; es más pequeña, comprimida y con menos conexiones que la 2D.

## Relacionado

- [[memorias-de-nucleos]]
- [[decodificador]]

## Lo mencionan

- [[implementacion-2-5d]]
