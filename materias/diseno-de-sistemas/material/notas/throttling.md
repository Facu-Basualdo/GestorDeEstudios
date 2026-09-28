---
titulo: "Throttling"
tipo: concepto
tags: ["limitacion","rendimiento","sobrecarga","buffer","patron","control-de-demanda","intermediario"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[tacticas-de-arquitectura]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [190]
veces_en_examen: 0
---

# Throttling

> Patrón que limita el acceso a un recurso o servicio importante mediante un intermediario (throttler) que monitorea las solicitudes y decide si una solicitud entrante puede ser atendida.

Es un empaquetamiento de la táctica "manage work requests". Se usa para limitar el acceso a algún recurso o servicio importante. En este patrón hay típicamente un intermediario, el throttler, que monitorea las solicitudes al servicio y determina si una solicitud entrante puede ser atendida.

Beneficios:
- Al limitar las solicitudes entrantes, se manejan con elegancia las variaciones en la demanda. Los servicios nunca se sobrecargan y se mantienen en un "punto dulce" de rendimiento.

Tradeoffs:
- La lógica de throttling debe ser muy rápida; de lo contrario, puede contribuir a problemas de rendimiento.
- Si la demanda del cliente excede regularmente la capacidad, los buffers deberán ser muy grandes o habrá riesgo de perder solicitudes.
- Puede ser difícil de agregar a un sistema existente con clientes y servidores fuertemente acoplados.


## Lo mencionan

- [[patterns-for-performance]]
