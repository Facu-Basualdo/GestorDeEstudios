---
titulo: "Autoscaling VMs"
tipo: concepto
tags: ["autoscaling","vm","cloud","load-balancer"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [320]
veces_en_examen: 0
---

# Autoscaling VMs

> Autoscaling VMs es el proceso en el que el autoscaler crea o elimina instancias de VM según la utilización para adaptar la capacidad del servicio.

Cuando los requests superan la capacidad de las instancias existentes, se crea una instancia nueva a partir de la misma imagen de VM usada para las anteriores. El autoscaler notifica al load balancer la nueva IP para que distribuya requests entre todas las instancias. Si el request rate baja, una instancia puede ser removida del pool del load balancer, detenida y desasignada, sin que el cliente lo note. Las reglas del autoscaler pueden incluir umbrales de CPU, de ancho de banda de red y un mínimo/máximo de instancias. También se pueden programar asignaciones según el patrón histórico de uso, por ejemplo más VMs al comenzar el día laboral y menos al terminar.

## Relacionado

- [[autoscaling]]
- [[autoscaler]]
- [[load-balancer]]
- [[draining]]

## Lo mencionan

- [[autoscaling]]
- [[autoscaling-containers]]
