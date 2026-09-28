---
titulo: "Design Structure Matrix"
tipo: concepto
tags: ["dsm","matriz-dependencias","acoplamiento","arquitectura-software"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [433]
veces_en_examen: 0
---

# Design Structure Matrix

> Una design structure matrix (DSM) es un tipo especial de matriz de adyacencia que representa las dependencias entre archivos de un proyecto, colocando las entidades en filas y columnas y anotando las celdas con el tipo de dependencia.

En un DSM, las entidades de interés (en este caso, archivos) se colocan tanto en las filas como en las columnas, en el mismo orden. Las celdas de la matriz se anotan para indicar el tipo de dependencia.

Se puede anotar una celda con información que muestre que el archivo en la fila hereda del archivo en la columna, o que lo llama, o que co-cambia con él. Las dos primeras anotaciones son estructurales, mientras que la tercera es evolutiva (o de historial).

Cada fila en el DSM representa un archivo; las entradas en una fila muestran las dependencias que ese archivo tiene sobre otros archivos del sistema.

Si el sistema tiene bajo acoplamiento, se espera que el DSM sea disperso (sparse); es decir, cualquier archivo depende de un pequeño número de otros archivos. Además, se espera que el DSM sea triangular inferior (lower diagonal); es decir, que todas las entradas aparezcan debajo de la diagonal, lo que significa que un archivo depende solo de archivos de nivel inferior y no hay dependencias cíclicas.

El ejemplo de la Figura 23.1 muestra 11 archivos de Apache Camel con sus dependencias estructurales. La Figura 23.2 superpone información histórica de co-cambio, mostrando una imagen muy diferente del proyecto, con acoplamiento evolutivo denso.

## Relacionado

- [[static-dependency]]
- [[evolutionary-dependency]]

## Lo mencionan

- [[static-dependency]]
- [[evolutionary-dependency]]
