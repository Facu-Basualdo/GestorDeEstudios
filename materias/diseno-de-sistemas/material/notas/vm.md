---
titulo: "VM"
tipo: concepto
tags: ["vm","virtualizacion","hypervisor"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [299]
veces_en_examen: 0
---

# VM

> Máquina virtual que ejecuta sobre hardware virtualizado bajo el control de un hypervisor e incluye un sistema operativo completo.

- Una VM virtualiza el hardware físico: CPU, disco, memoria y red.
- El software que se corre en una VM incluye un sistema operativo completo, y en una VM se puede correr casi cualquier sistema operativo.
- Casi cualquier programa puede correr en una VM, salvo que deba interactuar directamente con el hardware físico.
- Tener el sistema operativo completo permite ejecutar múltiples servicios en la misma VM, algo deseable cuando los servicios están fuertemente acoplados, comparten grandes conjuntos de datos o se quiere aprovechar la comunicación y coordinación interservicios eficiente.
- El hypervisor asegura que el sistema operativo arranque, monitorea su ejecución y lo reinicia si se cae.
- Las VMs persisten más allá de la terminación de los servicios que corren dentro.

## Relacionado

- [[hypervisor]]
- [[container]]

## Lo mencionan

- [[vm-image]]
- [[container]]
- [[container-runtime-engine]]
- [[container-image-layers]]
- [[containers-and-vms]]
- [[autoscaler]]
- [[autoscaling-containers]]
- [[cloud]]
