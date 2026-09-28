---
titulo: "Hosted Hypervisor"
tipo: concepto
tags: ["hypervisor","type-2","virtualizacion","desarrollo","escritorio"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [292]
veces_en_examen: 0
---

# Hosted Hypervisor

> Un hosted hypervisor, también llamado Type 2 hypervisor, es un hypervisor que corre como servicio sobre un sistema operativo anfitrión.

También se lo llama **Type 2 hypervisor**. Corre como servicio sobre un sistema operativo anfitrión (host operating system) y a su vez aloja una o más VMs. Se usa típicamente en computadoras de escritorio o laptops. Permite a los desarrolladores correr y probar aplicaciones que no son compatibles con el sistema operativo anfitrión (por ejemplo, correr aplicaciones Linux en una computadora Windows, o aplicaciones Windows en una computadora Apple). También se usa para replicar un entorno de producción en una computadora de desarrollo, aunque el sistema operativo sea el mismo, asegurando que los entornos de desarrollo y producción coincidan.

## Relacionado

- [[hypervisor]]
- [[virtual-machine]]
- [[emulator]]

## Lo mencionan

- [[hypervisor]]
- [[emulator]]
