---
titulo: "Hypervisor"
tipo: concepto
tags: ["hypervisor","virtualizacion","vm","gestion","seguridad","cloud"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [292,305]
veces_en_examen: 0
---

# Hypervisor

> Un hypervisor es un sistema operativo para virtual machines que gestiona el código que corre dentro de cada VM y las propias VMs.

El hypervisor corre directamente sobre el hardware de la computadora física o como servicio sobre un sistema operativo anfitrión, y aloja una o más VMs. Requiere que las VMs invitadas usen el mismo set de instrucciones que la CPU física subyacente: no traduce ni simula la ejecución de instrucciones.

Funciones principales:

1. **Gestionar el código que corre en cada VM**: el código que se comunica fuera de la VM (accediendo a un disco virtualizado o una interfaz de red) es interceptado por el hypervisor y ejecutado por él en nombre de la VM. Esto le permite etiquetar las solicitudes externas para enrutar las respuestas a la VM correcta. Las respuestas a solicitudes I/O o de red son interrupciones asincrónicas, inicialmente manejadas por el hypervisor.
2. **Gestionar las VMs**: crearlas y destruirlas, monitorearlas (health checks y uso de recursos), estar dentro del perímetro defensivo de seguridad y asegurar que una VM no exceda sus límites de utilización de recursos (CPU, memoria, ancho de banda de disco y red). Antes de iniciar una VM, el hypervisor verifica que haya suficientes recursos físicos y luego hace cumplir esos límites mientras la VM corre.

## Relacionado

- [[virtual-machine]]
- [[bare-metal-hypervisor]]
- [[hosted-hypervisor]]
- [[emulator]]
- [[cloud]]
- [[vm-image]]
- [[management-gateway]]

## Lo mencionan

- [[virtual-machine]]
- [[bare-metal-hypervisor]]
- [[hosted-hypervisor]]
- [[emulator]]
- [[boot-loader]]
- [[virtualization-overhead]]
- [[vm]]
- [[container-runtime-engine]]
- [[containers-and-vms]]
- [[management-gateway]]
