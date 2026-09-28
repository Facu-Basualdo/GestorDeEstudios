---
titulo: "Load Balancer"
tipo: concepto
tags: ["balanceo-de-carga","intermediario","disponibilidad","rendimiento","performance","load-balancer","replicacion","patrones","patron","escalabilidad","balanceo","alta-disponibilidad","distribucion","cloud","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[tacticas-de-arquitectura]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [181,189,313,322]
veces_en_examen: 0
---

# Load Balancer

> Intermediario que maneja mensajes de un conjunto de clientes y determina qué instancia de un servicio debe responder cada mensaje, balanceando la carga entre un grupo de proveedores.

Es un intermediario que maneja mensajes originados por un conjunto de clientes y determina qué instancia de un servicio responde a esos mensajes. Actúa como punto único de contacto para los mensajes entrantes, por ejemplo una única dirección IP, y reparte las solicitudes a un pool de proveedores (servidores o servicios). Implementa alguna forma de la táctica "schedule resources". El algoritmo de planificación puede ser muy simple, como round-robin, o puede tener en cuenta la carga de cada proveedor o la cantidad de solicitudes en espera.

Beneficios:
- Cualquier falla de un servidor es invisible para los clientes, siempre que queden recursos de procesamiento disponibles.
- Al compartir la carga entre varios proveedores, la latencia se mantiene más baja y predecible.
- Es relativamente simple agregar más recursos (más servidores, servidores más rápidos) al pool, y ningún cliente necesita saberlo.

Tradeoffs:
- El algoritmo de balanceo debe ser muy rápido; de lo contrario, puede contribuir a problemas de rendimiento.
- El load balancer es un posible cuello de botella o punto único de falla, por lo que suele replicarse e incluso balancearse.

## Relacionado

- [[maintain-multiple-copies-of-computations]]
- [[round-robin]]
- [[patterns-for-performance]]
- [[global-load-balancing]]
- [[health-check]]
- [[autoscaling]]
- [[autoscaler]]

## Lo mencionan

- [[service-mesh]]
- [[diseno-arquitectonico]]
- [[decisiones-diseno-arquitectonico]]
- [[estilos-arquitectonicos-segun-atributos-calidad]]
- [[maintain-multiple-copies-of-computations]]
- [[round-robin]]
- [[patterns-for-performance]]
- [[horizontal-scaling]]
- [[global-load-balancing]]
- [[health-check]]
- [[state-management-distributed-systems]]
- [[sticky-messages]]
- [[direct-session]]
- [[autoscaling]]
- [[autoscaler]]
- [[autoscaling-vms]]
- [[draining]]
