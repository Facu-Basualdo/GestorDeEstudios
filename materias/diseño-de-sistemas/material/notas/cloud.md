---
titulo: "Cloud"
tipo: concepto
tags: ["cloud","data-center","infraestructura","vm"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [322]
veces_en_examen: 0
---

# Cloud

> Cloud es una infraestructura compuesta por data centers distribuidos, cada uno con decenas de miles de computadoras, gestionada a través de un management gateway accesible por Internet.

El cloud es gestionado por un management gateway accesible por Internet, responsable de asignar, desasignar y monitorear VMs, medir el uso de recursos y calcular la facturación. Debido a la gran cantidad de computadoras en un data center, las fallas de una computadora son frecuentes; el arquitecto debe asumir que las VMs fallarán en algún momento.

## Relacionado

- [[vm]]

## Lo mencionan

- [[hypervisor]]
- [[bare-metal-hypervisor]]
- [[virtualization-overhead]]
- [[stateless-service]]
- [[long-tail-distribution]]
