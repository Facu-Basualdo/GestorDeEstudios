---
titulo: "Connector"
tipo: concepto
tags: ["runtime","conector","arquitectura","interaccion","protocolo"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [22,406]
veces_en_examen: 0
---

# Connector

> Un connector (conector) es un elemento de una C&C view que representa las vías de interacción entre components, como links de comunicación, protocolos, flujos de información y acceso a shared storage.

Ejemplos simples de connectors incluyen service invocation, asynchronous message queues, event multicast para interacciones publish-subscribe, y pipes que representan flujos de datos asíncronos y ordenados.

Los connectors no necesitan ser binarios: un connector publish-subscribe puede tener un número arbitrario de publishers y subscribers. Los connectors encarnan un protocolo de interacción: cuando dos o más components interactúan, deben respetar convenciones sobre orden de interacciones, locus of control, y manejo de condiciones de error y timeouts. Ese protocolo debe documentarse.

## Relacionado

- [[component-and-connector-structures]]
- [[component]]
- [[component-and-connector-view]]

## Lo mencionan

- [[component-and-connector-structures]]
- [[component]]
- [[component-and-connector-view]]
