---
titulo: "Boot Loader"
tipo: concepto
tags: ["boot","sistema-operativo","vm","arranque"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [292]
veces_en_examen: 0
---

# Boot Loader

> Un boot loader es un programa especial que se lee automáticamente desde el almacenamiento en disco al iniciar la ejecución y carga el sistema operativo en memoria.

Cuando la máquina comienza a ejecutarse, lee automáticamente el boot loader desde el almacenamiento en disco, ya sea interno o conectado por red. El boot loader carga el código del sistema operativo desde el disco a la memoria y luego transfiere la ejecución al sistema operativo.

En una computadora física, la conexión al disco se hace durante el proceso de encendido; en una VM, la conexión al disco la establece el hypervisor cuando inicia la VM.

## Relacionado

- [[virtual-machine]]
- [[hypervisor]]

## Lo mencionan

- [[virtual-machine]]
