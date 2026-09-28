---
titulo: "Autoscaling"
tipo: concepto
tags: ["autoscaling","nube","infraestructura","elasticidad","cloud","escalabilidad"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [319,320]
veces_en_examen: 0
---

# Autoscaling

> Servicio de infraestructura que crea automáticamente nuevas instancias cuando se necesitan y libera las instancias sobrantes cuando ya no hacen falta.

Autoscaling suele trabajar junto con load balancing para agrandar o reducir el pool de instancias detrás de un load balancer. Se usa en sistemas con cargas de trabajo dinámicas que tienen aumentos y disminuciones rápidas en la tasa de solicitudes.
En un data center tradicional, la organización debe asignar hardware para el pico de carga y el resto queda inactivo; en el cloud, la elasticidad permite ajustar los recursos. El autoscaling de contenedores es ligeramente diferente del de VMs.

## Relacionado

- [[load-balancer]]
- [[elasticity]]
- [[autoscaling-vms]]
- [[autoscaling-containers]]

## Lo mencionan

- [[elasticity]]
- [[load-balancer]]
- [[autoscaler]]
- [[autoscaling-vms]]
- [[autoscaling-containers]]
- [[draining]]
