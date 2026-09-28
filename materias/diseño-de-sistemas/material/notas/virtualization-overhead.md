---
titulo: "Virtualization Overhead"
tipo: concepto
tags: ["rendimiento","overhead","virtualizacion","hypervisor"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [292]
veces_en_examen: 0
---

# Virtualization Overhead

> Virtualization overhead es el costo de rendimiento que introduce el uso de VMs respecto de correr directamente en una máquina física.

Una preocupación con las VMs es el overhead introducido por el compartir y aislar recursos para la virtualización: cuánto más lento corre un servicio en una VM comparado con correr directamente en una máquina física. La respuesta depende de las características del servicio y de la tecnología de virtualización usada.

Los servicios que hacen más I/O de disco y red incurren en más overhead que los que no comparten esos recursos del host. La tecnología de virtualización mejora todo el tiempo, pero Microsoft reportó overheads de aproximadamente 10% en su hypervisor Hyper-V.

## Relacionado

- [[virtual-machine]]
- [[hypervisor]]
- [[cloud]]

