---
titulo: "Manage Event Arrival"
tipo: concepto
tags: ["rendimiento","eventos","sla","escalabilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [179]
veces_en_examen: 0
---

# Manage Event Arrival

> Táctica que gestiona la llegada de eventos desde sistemas externos, por ejemplo mediante un Service Level Agreement (SLA).

Una forma habitual de gestionar las llegadas desde un sistema externo es establecer un SLA que especifica la tasa máxima de llegada de eventos que se está dispuesto a soportar. Un SLA es un acuerdo de la forma: "El sistema o componente procesará X eventos que llegan por unidad de tiempo con un tiempo de respuesta Y". Este acuerdo restringe tanto al sistema (debe cumplir esa respuesta) como al cliente (si hace más de X solicitudes por unidad de tiempo, la respuesta no está garantizada). Si el cliente necesita que se atiendan más de X solicitudes por unidad de tiempo, debe usar múltiples instancias del elemento que procesa las solicitudes. Los SLA son un método para gestionar la escalabilidad en sistemas basados en Internet.

## Relacionado

- [[service-level-agreement]]
- [[manage-work-requests]]
- [[control-resource-demand]]

## Lo mencionan

- [[service-level-agreement]]
- [[reduce-resource-demand]]
- [[manage-work-requests]]
