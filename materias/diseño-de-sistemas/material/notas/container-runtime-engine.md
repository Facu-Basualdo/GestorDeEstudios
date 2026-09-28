---
titulo: "Container Runtime Engine"
tipo: concepto
tags: ["containers","runtime-engine","virtualizacion","container","runtime","docker","containerd","mesos"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [296,300]
veces_en_examen: 0
---

# Container Runtime Engine

> Software que actúa como sistema operativo virtualizado para los containers y que comparte el kernel del sistema operativo anfitrión entre todos los containers del host.

- El container runtime engine corre sobre un sistema operativo fijo, que puede estar cargado en una máquina física (bare metal) o en una VM.
- Todos los containers dentro de un host comparten el mismo kernel de OS a través del runtime engine; a través del sistema operativo, comparten el mismo hardware físico subyacente.
- El runtime engine inicia, monitorea y reinicia el servicio que corre en un container.
- Normalmente inicia y monitorea un solo programa en una container instance. Si ese programa completa y sale, la ejecución del container termina.
- Los servicios dentro de containers se inician y detienen a través de funciones del container runtime engine.
- Los containers se asignan encontrando un container runtime engine con suficientes recursos sin usar; esto puede requerir la creación de una VM adicional para soportar un runtime engine adicional.

## Relacionado

- [[container]]
- [[vm]]
- [[hypervisor]]

## Lo mencionan

- [[virtual-machine]]
- [[container]]
- [[container-image]]
- [[containers-and-vms]]
- [[container-portability]]
- [[serverless-architecture]]
