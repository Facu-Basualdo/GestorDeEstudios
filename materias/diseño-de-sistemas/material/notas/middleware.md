---
titulo: "Middleware"
tipo: concepto
tags: ["middleware","sistemas-distribuidos","comunicacion","software","componentes","distribuidos"]
temas: ["[[arquitectura-y-middleware]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [3,14]
veces_en_examen: 0
---

# Middleware

> Software que actúa como capa de comunicación entre aplicaciones, sistemas operativos y bases de datos.

En un sistema distribuido, el middleware proporciona dos tipos de soporte:

1. **Soporte de interacción**: coordina las interacciones entre los componentes del sistema. Proporciona transparencia de ubicación, ya que no es necesario que los componentes conozcan la ubicación física de otros. También puede admitir la conversión de parámetros si se usan diferentes lenguajes de programación, la detección de eventos, la comunicación, etc.
2. **Provisión de servicios comunes**: proporciona implementaciones reutilizables de servicios que pueden ser requeridos por varios componentes. Al usar estos servicios comunes, los componentes pueden interoperar fácilmente y brindar servicios de usuario de manera consistente.

## Relacionado

- [[sistema-distribuido]]
- [[transparencia]]
- [[componentes-distribuidos]]

## Lo mencionan

- [[sistema-distribuido]]
- [[componentes-distribuidos]]
