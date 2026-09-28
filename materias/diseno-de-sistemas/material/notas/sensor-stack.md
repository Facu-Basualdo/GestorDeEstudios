---
titulo: "Sensor Stack"
tipo: concepto
tags: ["sensor-stack","arquitectura","sensores","drivers"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [330]
veces_en_examen: 0
---

# Sensor Stack

> Un sensor stack es una confederación de dispositivos y drivers de software que ayudan a convertir datos crudos en información interpretada sobre el entorno.

Las distintas plataformas y dominios suelen tener sus propios sensor stacks, a menudo con frameworks para tratar con los dispositivos. Con el tiempo, los sensores incorporan más funcionalidad y las funciones del stack cambian. El stack debe lograr al menos: leer datos crudos, suavizar datos, convertir datos y fusionar sensores.

## Relacionado

- [[sensor]]
- [[reading-raw-data]]
- [[smoothing-data]]
- [[converting-data]]
- [[sensor-fusion]]

