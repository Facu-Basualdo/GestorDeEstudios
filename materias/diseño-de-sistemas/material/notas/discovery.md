---
titulo: "Discovery"
tipo: concepto
tags: ["eficiencia-energetica","discovery","tacticas","servicios"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [126]
veces_en_examen: 0
---

# Discovery

> Discovery es una táctica de Allocate Resources que permite elegir un proveedor de servicio según sus características de energía, anotando la solicitud con información energética.

Un discovery service hace corresponder solicitudes de servicio (de clientes) con proveedores de servicio.

- Tradicionalmente, la correspondencia se basa en una descripción de la solicitud (típicamente una API).
- En el contexto de eficiencia energética, la solicitud puede anotarse con información energética; así el solicitante elige un proveedor según sus características de energía, posiblemente dinámicas.
- En la nube, la información puede guardarse en un “green service directory” alimentado por metering, static classification o dynamic classification.
- En un smartphone, la información podría obtenerse de una app store.
- Hoy esa información es ad hoc en el mejor caso y normalmente inexistente en las APIs de servicio.

## Relacionado

- [[allocate-resources]]
- [[static-classification]]
- [[dynamic-classification]]
- [[metering]]

## Lo mencionan

- [[allocate-resources]]
- [[schedule-resources]]
- [[defer-binding]]
- [[client-server-pattern]]
