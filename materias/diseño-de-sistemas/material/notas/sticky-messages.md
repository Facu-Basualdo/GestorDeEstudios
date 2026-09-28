---
titulo: "Sticky Messages"
tipo: concepto
tags: ["sticky","load-balancer","sesiones","distribuidos"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [316]
veces_en_examen: 0
---

# Sticky Messages

> Mecanismo por el cual un load balancer envía las solicitudes subsiguientes de un cliente a la misma instancia de servicio que atendió el último mensaje de ese cliente.

Algunos load balancers pueden configurarse para tratar ciertos tipos de solicitudes como sticky. Esto hace que las solicitudes posteriores del mismo cliente se dirijan a la misma instancia que atendió el último mensaje.
Esta técnica, junto con las sesiones directas, debe usarse solo en circunstancias especiales porque existe la posibilidad de que la instancia falle o se sobrecargue.

## Relacionado

- [[direct-session]]
- [[load-balancer]]

## Lo mencionan

- [[direct-session]]
