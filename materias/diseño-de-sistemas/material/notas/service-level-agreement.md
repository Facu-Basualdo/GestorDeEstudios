---
titulo: "Service Level Agreement (SLA)"
tipo: concepto
tags: ["sla","disponibilidad","contrato","penalidades","servicios","calidad","acuerdo","rendimiento","escalabilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [73,151,179]
veces_en_examen: 0
---

# Service Level Agreement (SLA)

> Acuerdo que especifica la tasa máxima de llegada de eventos que el sistema está dispuesto a soportar y el tiempo de respuesta asociado.

Un SLA es un acuerdo de la forma: "El sistema o componente procesará X eventos que llegan por unidad de tiempo con un tiempo de respuesta Y". Se utiliza para gestionar la llegada de eventos desde sistemas externos. Restringe tanto al sistema (debe proveer esa respuesta) como al cliente (si hace más de X solicitudes por unidad de tiempo, la respuesta no está garantizada). Desde la perspectiva del cliente, si necesita que se atiendan más de X solicitudes por unidad de tiempo, debe utilizar múltiples instancias del elemento que procesa las solicitudes. Los SLA son un método para gestionar la escalabilidad en sistemas basados en Internet.

## Relacionado

- [[availability]]
- [[service-oriented-architecture-pattern]]
- [[manage-event-arrival]]

## Lo mencionan

- [[steady-state-availability]]
- [[service-oriented-architecture-pattern]]
- [[manage-event-arrival]]
- [[limit-event-response]]
