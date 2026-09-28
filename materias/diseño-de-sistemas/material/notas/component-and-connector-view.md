---
titulo: "Component-and-Connector View"
tipo: concepto
tags: ["vista","arquitectura","runtime","componentes","conectores"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [406]
veces_en_examen: 0
---

# Component-and-Connector View

> Una component-and-connector view (vista de componentes y conectores) es una vista de arquitectura que muestra elementos con presencia en runtime (components) y las vías de interacción entre ellos (connectors).

Este tipo de vista muestra los elements con presencia en runtime y sus interacciones. Ejemplos de este tipo de vista son client-server, microservice y communicating processes.

La relación primaria dentro de una C&C view es attachment: indica qué connectors están adjuntos a qué components, definiendo el sistema como un grafo de components y connectors. La compatibilidad entre elements se define en términos de tipo de información y protocolo; por ejemplo, si un web server espera comunicación cifrada vía HTTPS, el client debe realizar el cifrado.

Cada element (component o connector) de una C&C view tiene propiedades asociadas. Típicamente, cada element tiene un nombre y un tipo, y propiedades adicionales que soporten los análisis previstos:

- **Reliability**: probabilidad de falla de un component o connector; ayuda a determinar disponibilidad del sistema.
- **Performance**: tiempos de respuesta del component, bandwidth, latency o jitter del connector.
- **Resource requirements**: necesidades de procesamiento, storage y energía.
- **Functionality**: funciones que realiza el element.
- **Security**: features de seguridad como encryption, audit trails o authentication; ayuda a identificar vulnerabilidades.
- **Concurrency**: si el component ejecuta como proceso o thread separado; ayuda a analizar deadlocks y bottlenecks.
- **Runtime extensibility**: si la estructura de mensajería soporta evoluciones de los intercambios de datos.

Estas vistas se usan para mostrar cómo funciona el sistema: permiten trazar un thread de actividad end-to-end. También se usan para razonar sobre atributos de calidad en runtime como performance y availability, prediciendo propiedades del sistema a partir de propiedades de los elements individuales.

## Relacionado

- [[component]]
- [[connector]]

## Lo mencionan

- [[component]]
- [[connector]]
- [[view]]
- [[basis-for-training]]
- [[module-view]]
- [[notations-for-c-c-views]]
- [[development-team]]
- [[testers-and-integrators]]
- [[designers-of-other-systems]]
- [[end-users]]
- [[infrastructure-support-personnel]]
