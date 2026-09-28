---
titulo: "Network Isolation"
tipo: concepto
tags: ["red","ip","puertos","aislamiento","virtualizacion"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [290]
veces_en_examen: 0
---

# Network Isolation

> Network isolation es el mecanismo que aísla el tráfico de red de cada VM o container identificando los mensajes mediante direcciones IP y puertos.

El aislamiento de red se logra a través de la identificación de mensajes:

- Cada **virtual machine** o **container** tiene una dirección **IP**, que se usa para identificar mensajes hacia o desde esa VM o container. En esencia, la dirección IP enruta las respuestas a la VM o container correcto.
- Otro mecanismo de red usa **puertos**: todo mensaje destinado a un servicio tiene un número de puerto asociado. Un servicio escucha en un puerto y recibe los mensajes que llegan al dispositivo, designados para el puerto en el que está escuchando.

## Relacionado

- [[shared-resources]]
- [[virtual-machine]]
- [[container]]

## Lo mencionan

- [[shared-resources]]
