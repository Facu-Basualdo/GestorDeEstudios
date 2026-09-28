---
titulo: "Autoscaler"
tipo: concepto
tags: ["autoscaling","componente","cloud","monitoreo"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [320]
veces_en_examen: 0
---

# Autoscaler

> El autoscaler es un componente que monitorea la utilización de las instancias de servidor y crea o elimina instancias automáticamente según reglas.

El autoscaler monitorea la utilización de las instancias de servidor. Cuando crea una instancia nueva, notifica al load balancer la nueva IP para que distribuya requests hacia ella. La configuración incluye:
- La imagen de VM a lanzar y los parámetros de configuración (por ejemplo, seguridad).
- Umbrales de utilización de CPU (medidos en el tiempo) para lanzar o apagar instancias.
- Umbrales de ancho de banda de red I/O (medidos en el tiempo) para crear o borrar instancias.
- Los números mínimo y máximo de instancias en el grupo.
No usa valores instantáneos porque las métricas tienen picos y valles y porque arrancar una VM lleva minutos. También se pueden definir reglas por horario o límites mínimo/máximo.

## Relacionado

- [[autoscaling]]
- [[load-balancer]]
- [[draining]]
- [[vm]]

## Lo mencionan

- [[load-balancer]]
- [[autoscaling-vms]]
- [[draining]]
