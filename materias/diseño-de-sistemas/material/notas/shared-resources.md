---
titulo: "Shared Resources"
tipo: concepto
tags: ["recursos-compartidos","virtualizacion","cpu","memoria","disco","red"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [290]
veces_en_examen: 0
---

# Shared Resources

> Shared resources son los recursos físicos de una computadora (CPU, memoria, disco y conexión de red) que múltiples aplicaciones comparten en un mismo sistema.

Por razones económicas, muchas organizaciones adoptan formas de shared resources porque reducen drásticamente los costos de desplegar un sistema. Los cuatro recursos que típicamente se comparten son:

- **CPU**: las computadoras modernas tienen múltiples CPUs, cada una con múltiples núcleos de procesamiento, y pueden tener GPUs u otros procesadores de propósito especial como TPUs.
- **Memoria**: la computadora física tiene una cantidad fija de memoria física.
- **Disk storage**: los discos proveen almacenamiento persistente para instrucciones y datos, a través de reinicios y apagados; pueden ser discos rotatorios (magnéticos u ópticos) o discos de estado sólido (SSD).
- **Network connection**: toda computadora física no trivial tiene una o más conexiones de red por donde pasan todos los mensajes.

Compartir estos recursos requiere hacerlo de forma suficientemente aislada para que las aplicaciones no sepan de la existencia de las demás.

## Relacionado

- [[processor-sharing]]
- [[virtual-memory]]
- [[disk-sharing]]
- [[network-isolation]]
- [[virtual-machine]]
- [[container]]

## Lo mencionan

- [[processor-sharing]]
- [[virtual-memory]]
- [[disk-sharing]]
- [[network-isolation]]
