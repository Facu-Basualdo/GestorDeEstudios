---
titulo: "Organización 2.5D"
tipo: concepto
tags: ["organizacion 2.5d","memoria","punto de memoria 2d","organizacion 3d","economia"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [60]
veces_en_examen: 0
---

# Organización 2.5D

> Arquitectura de memoria que combina la organización 3D con puntos de memoria 2D, usando una sola línea de selección y selección por corrientes coincidentes.

Surge del afán de economizar: la organización 2.5D es una arquitectura 3D con puntos de memoria 2D. Aprovecha lo mejor de las arquitecturas 2D y 3D: de la 2D, su punto de memoria con una sola línea de selección; de la 3D, su organización de múltiples niveles.

El esquema de selección usa un control en las entradas LEER y ESCRIBIR para lograr la organización 3D. Es también una selección por corrientes coincidentes, con la única diferencia respecto a la selección 3D de que la habilitación para escritura no se sitúa a nivel de los biestables, sino al de las líneas de selección de columna.

Decodificadores:
- X: decodificador de filas, trabaja sobre el único hilo de selección del punto de memoria 2D.
- Y: decodificador de columnas, selecciona una columna basándose en el input y el output.

Periferia combinacional extra para el decodificador de columnas: se implementan 2 compuertas AND por cada columna, una para escribir y otra para leer. Selecciona una columna a través de la señal de escritura, en caso de requerirse una escritura, o del output (O), en caso de requerirse una lectura. La señal de escritura va por columnas a través de una compuerta AND; si hay 3 columnas, hay 3 compuertas AND. A su vez, los outputs de los puntos de memoria de cada columna de una matriz pasan por una compuerta AND antes de conectarse al OR.

Ventajas: combina las ventajas del 2D con las del 3D, disminuye costos por usar puntos de memoria 2D, y el agregado de dos AND por columna es mucho más económico que tener un punto 3D. Desventaja: mantiene el problema de la temperatura.

## Relacionado

- [[organizacion-3d]]
- [[organizacion-2d]]
- [[punto-de-memoria]]
- [[decodificador]]

## Lo mencionan

- [[decodificador]]
