---
titulo: "Event Bus"
tipo: concepto
tags: ["event-bus","publish-subscribe","eventos","arquitectura","runtime"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [168]
veces_en_examen: 0
---

# Event Bus

> El event bus es el componente del patrón publish-subscribe que gestiona suscripciones y despacho de mensajes como parte de la infraestructura de runtime.

En el patrón publish-subscribe, el event bus gestiona las suscripciones y el despacho de mensajes como parte de la infraestructura de runtime. Cuando se publica un mensaje, el bus notifica a todos los elementos que registraron interés en ese evento o topic.

## Relacionado

- [[publish-subscribe-pattern]]

## Lo mencionan

- [[publish-subscribe-pattern]]
- [[implicit-invocation]]
