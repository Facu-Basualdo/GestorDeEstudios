---
titulo: "Virtual Machine"
tipo: concepto
tags: ["virtualizacion","vm","hipervisor","aislamiento","maquina-virtual","hardware"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [292,300,303]
veces_en_examen: 0
---

# Virtual Machine

> Una virtual machine (VM) es un computador simulado que se ejecuta en una única computadora física, permitiendo que múltiples sistemas operativos y aplicaciones corran aislados.

Las virtual machines permiten la ejecución de múltiples computadores simulados, o virtuales, en una sola computadora física. La computadora física se llama **host computer** y las VMs se llaman **guest computers**.

Desde la perspectiva del sistema operativo y los servicios dentro de una VM, el software parece ejecutarse en una máquina física real (bare-metal). La VM provee CPU, memoria, dispositivos de I/O y una conexión de red.

Una VM se bootea igual que una máquina física: al comenzar la ejecución, se lee un **boot loader** desde el almacenamiento en disco, que carga el código del sistema operativo en memoria y transfiere la ejecución al sistema operativo. En el caso de una VM, la conexión al disco la establece el hypervisor cuando inicia la VM.

## Relacionado

- [[hypervisor]]
- [[boot-loader]]
- [[hardware-virtualization]]
- [[container]]
- [[container-runtime-engine]]

## Lo mencionan

- [[package-dependencies]]
- [[virtualization]]
- [[shared-resources]]
- [[network-isolation]]
- [[hypervisor]]
- [[bare-metal-hypervisor]]
- [[hosted-hypervisor]]
- [[emulator]]
- [[boot-loader]]
- [[virtualization-overhead]]
- [[vm-image]]
- [[container]]
- [[kubernetes]]
- [[pod]]
- [[serverless-architecture]]
- [[hardware-virtualization]]
