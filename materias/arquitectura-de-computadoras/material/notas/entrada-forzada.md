---
titulo: "Entrada Forzada"
tipo: concepto
tags: ["registros","transferencia","semiconductores","senal-de-gobierno"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [29]
veces_en_examen: 0
---

# Entrada Forzada

> Técnica de transferencia entre registros que invierte los bits de un registro cuando se recibe una señal de gobierno impulsional.

También conocida como “Implementación de Semiconductores”. Hay dos formas de hacerlo: la primera utiliza dos líneas del registro B para cada salida; la segunda utiliza una sola línea y agrega una compuerta NOT para representar la otra salida. La elección entre estas formas depende del arquitecto y está vinculada a una relación de costo-beneficio: la primera opción reduce el costo pero aumenta el tamaño, y la segunda disminuye el tamaño pero aumenta el costo.

## Relacionado

- [[senales-de-gobierno]]
- [[registros]]

## Lo mencionan

- [[operaciones-elementales-sobre-registros]]
