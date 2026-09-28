---
titulo: "Event"
tipo: concepto
tags: ["evento","performance","tiempo","disparador","eventos","asincronico","interfaces","recursos","notificaciones","asincronia","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [172,177,275,276,277,278,279,280,281]
veces_en_examen: 0
---

# Event

> Recurso de interfaz, normalmente asíncrono, que representa mensajes entrantes o notificaciones salientes sobre sucesos dentro del elemento.

Los eventos entrantes pueden representar la recepción de un mensaje tomado de una cola, o la llegada de un elemento de un stream que debe ser consumido. Los elementos activos —aquellos que no esperan pasivamente a ser invocados por otros elementos— producen eventos salientes para notificar a listeners (o suscriptores) sobre cosas interesantes que suceden dentro del elemento.

## Relacionado

- [[performance]]
- [[resource]]
- [[operation]]
- [[property]]
- [[interface]]

## Lo mencionan

- [[performance]]
- [[performance-general-scenario]]
- [[performance-tactics]]
- [[interface]]
- [[resource-semantics]]
- [[operation]]
- [[property]]
- [[properties]]
