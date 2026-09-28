---
titulo: "Service Mesh"
tipo: concepto
tags: ["microservicios","sidecar","proxy","malla-de-servicios","comunicacion","patron","monitoreo","seguridad"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-arquitectonicos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [189]
veces_en_examen: 0
---

# Service Mesh

> Patrón de arquitectura de microservicios en el que un sidecar (proxy) acompaña a cada microservicio y maneja la comunicación y coordinación entre servicios.

Se usa en arquitecturas de microservicios. Su característica principal es un sidecar, un tipo de proxy que acompaña a cada microservicio y provee capacidades transversales (concerns independientes de la aplicación) como comunicación entre servicios, monitoreo y seguridad. El sidecar se ejecuta junto al microservicio y maneja toda la comunicación y coordinación entre servicios. Esto permite separar la lógica de negocio del microservicio de la implementación, gestión y mantenimiento de concerns transversales como autenticación y autorización, descubrimiento de servicios, balanceo de carga, cifrado y observabilidad.

Beneficios:
- El software para gestionar concerns transversales puede comprarse o ser mantenido por un equipo especialista, permitiendo que los desarrolladores de la lógica de negocio se concentren solo en esa lógica.
- Al desplegar las utilidades en el mismo procesador que los servicios que las usan, se reduce el tiempo de comunicación, ya que no se necesitan mensajes de red.
- Puede configurarse para que la comunicación dependa del contexto, simplificando funciones como canary testing y A/B testing.

Tradeoffs:
- Los sidecars introducen más procesos en ejecución, y cada uno consume poder de procesamiento, aumentando el overhead del sistema.
- Un sidecar típicamente incluye múltiples funciones, y no todas se necesitan en cada servicio o en cada invocación.

## Relacionado

- [[load-balancer]]
- [[sidecar]]
- [[canary-testing]]
- [[ab-testing]]

## Lo mencionan

- [[package-dependencies]]
- [[microservice-architecture]]
- [[patterns-for-performance]]
- [[sidecar]]
- [[pod]]
