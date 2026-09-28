---
titulo: "Health Check"
tipo: concepto
tags: ["health-check","disponibilidad","deteccion-de-fallas","load-balancer"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [313]
veces_en_examen: 0
---

# Health Check

> Mecanismo que permite al load balancer determinar si una instancia de servicio está realizando su trabajo correctamente, marcándola como no saludable si no responde.

El load balancer revisa periódicamente la salud de las instancias. Si una instancia no responde al health check, se la marca como no saludable y no se le envían más mensajes. Los health checks pueden consistir en pings desde el load balancer, apertura de una conexión TCP o el envío de un mensaje para procesar; en este último caso, la IP de retorno es la del load balancer. Una instancia puede volver a estar saludable, por lo que el load balancer revisa varias veces antes de moverla a la lista no saludable y sigue chequeando esa lista para ver si responde de nuevo. Esto corresponde a la categoría fault detection de las availability tactics del Capítulo 4.

## Relacionado

- [[load-balancer]]

## Lo mencionan

- [[load-balancer]]
