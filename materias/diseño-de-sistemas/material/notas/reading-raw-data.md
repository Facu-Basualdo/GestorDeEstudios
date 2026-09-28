---
titulo: "Reading Raw Data"
tipo: concepto
tags: ["sensor-stack","drivers","datos-crudos","sensores"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [330]
veces_en_examen: 0
---

# Reading Raw Data

> Leer datos crudos es la función de nivel más bajo del sensor stack, realizada por un driver de software que obtiene lecturas periódicas del sensor.

El driver lee el sensor directamente o, si el sensor es parte de un sensor hub, a través del hub. La frecuencia del período es un parámetro que influye tanto en la carga del procesador por leer y procesar el sensor como en la precisión de la representación creada.

## Relacionado

- [[sensor]]
- [[sensor-hub]]

## Lo mencionan

- [[sensor-stack]]
