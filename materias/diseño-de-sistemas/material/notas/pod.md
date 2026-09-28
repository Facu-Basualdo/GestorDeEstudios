---
titulo: "Pod"
tipo: concepto
tags: ["pod","kubernetes","containers","ipc"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [300]
veces_en_examen: 0
---

# Pod

> Un Pod es un grupo de containers relacionados en Kubernetes que comparten dirección IP, espacio de puertos, mecanismos de comunicación entre procesos, almacenamiento efímero y ciclo de vida.

Los containers en un Pod comparten dirección IP y espacio de puertos para recibir solicitudes de otros servicios. Pueden comunicarse entre sí usando mecanismos de comunicación entre procesos (IPC), como semáforos o memoria compartida, y pueden compartir volúmenes de almacenamiento efímero que existen durante la vida del Pod. Tienen el mismo ciclo de vida: los containers de un Pod se asignan y desasignan juntos. Por ejemplo, los service meshes suelen empaquetarse como un Pod. El propósito de un Pod es reducir los costos de comunicación entre containers relacionados: si dos containers se comunican frecuentemente, el hecho de estar desplegados como Pod y asignados a la misma VM permite usar mecanismos de comunicación más rápidos que el paso de mensajes. En la figura se muestra un nodo con Pods que contienen containers.

## Relacionado

- [[kubernetes]]
- [[container]]
- [[virtual-machine]]
- [[service-mesh]]

## Lo mencionan

- [[package-dependencies]]
- [[kubernetes]]
