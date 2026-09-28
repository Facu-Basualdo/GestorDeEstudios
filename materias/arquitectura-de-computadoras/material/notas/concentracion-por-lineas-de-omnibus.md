---
titulo: "Concentración por Líneas de Ómnibus"
tipo: concepto
tags: ["omnibus","interfase","canal","controladoras","linea"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [100]
veces_en_examen: 0
---

# Concentración por Líneas de Ómnibus

> La concentración por líneas de ómnibus es un modelo de interfase que simplifica el esquema de multiplaje conectando varias controladoras a un solo canal mediante una única línea ómnibus.

La cabecera de la palabra lleva consigo el número de la controladora sobre la cual debe impactar.

Desventajas: más lenta porque para comunicar una sola palabra debe recorrer varias controladoras; consume mayor ancho de banda porque utiliza parte de la palabra para indicar la identificación de la controladora; la cantidad de bits designada para la cabecera limita la cantidad de dispositivos.

Ventaja: económica, simple y fácil de implementar.

## Relacionado

- [[concentracion-por-multiplaje]]
- [[canal]]

## Lo mencionan

- [[interfase]]
