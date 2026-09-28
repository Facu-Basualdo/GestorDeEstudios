---
titulo: "Serialization"
tipo: concepto
tags: ["serializacion","intercambio-de-datos","interfaces","marshaling"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [282]
veces_en_examen: 0
---

# Serialization

> Conversión de la representación interna de los datos, construida con tipos de un lenguaje de programación, a una representación externa adecuada para intercambiarse y enviarse por la red.

El pasaje de la representación interna a la externa también se llama *marshaling* o *translation*. Cada interfaz ofrece la oportunidad de abstraer la representación interna de datos (objetos, arrays, colecciones) hacia una representación más adecuada para distintas implementaciones de lenguajes de programación y para la transmisión por red.

## Relacionado

- [[data-interchange-format]]

## Lo mencionan

- [[data-interchange-format]]
