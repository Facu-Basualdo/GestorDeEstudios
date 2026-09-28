---
titulo: "Draining"
tipo: concepto
tags: ["autoscaling","vm","load-balancer","terminacion"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [320]
veces_en_examen: 0
---

# Draining

> Draining es el proceso de notificar a una instancia que debe terminar sus actividades y apagarse antes de ser destruida.

Pasos:
1. El autoscaler notifica al load balancer que deje de enviar requests a la instancia.
2. Como la instancia puede estar procesando un request, el autoscaler le notifica que termine sus actividades y se apague.
3. Recién después se puede destruir la instancia.
El desarrollador del servicio es responsable de implementar la interfaz para recibir instrucciones de terminación y draining.

## Relacionado

- [[autoscaling]]
- [[autoscaler]]
- [[load-balancer]]

## Lo mencionan

- [[autoscaler]]
- [[autoscaling-vms]]
