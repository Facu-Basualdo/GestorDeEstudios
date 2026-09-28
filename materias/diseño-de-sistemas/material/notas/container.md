---
titulo: "Container"
tipo: concepto
tags: ["containers","virtualizacion","devops","container","contenedores","vm"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [296,300,303]
veces_en_examen: 0
---

# Container

> Un container es un mecanismo de empaquetado que virtualiza el sistema operativo.

Una ventaja de usar containers es que el tamaño de la imagen del container es pequeño, incluyendo solo los programas y bibliotecas necesarios para soportar el servicio que se quiere ejecutar. Sin embargo, múltiples servicios en un container podrían inflar el tamaño de la imagen, aumentando el tiempo de inicio del container y el footprint de memoria en runtime. Se pueden agrupar instancias de containers que ejecutan servicios relacionados para que se ejecuten en la misma máquina física y puedan comunicarse eficientemente; algunos container runtime engines incluso permiten que los containers de un grupo compartan memoria y mecanismos de coordinación como semáforos.

Las diferencias entre VMs y containers son:

- Mientras que una VM puede ejecutar cualquier sistema operativo, los containers están limitados actualmente a Linux, Windows o IOS.
- Los servicios dentro de una VM se inician, detienen y pausan mediante funciones del sistema operativo, mientras que los servicios dentro de containers se inician y detienen mediante funciones del container runtime engine.
- Las VMs persisten más allá de la terminación de los servicios que corren dentro de ellas; los containers no.
- Existen algunas restricciones en el uso de puertos cuando se usan containers que no existen cuando se usan VMs.

## Relacionado

- [[container-runtime-engine]]
- [[container-image]]
- [[container-image-layers]]
- [[vm]]
- [[vm-image]]
- [[virtual-machine]]

## Lo mencionan

- [[package-dependencies]]
- [[virtualization]]
- [[shared-resources]]
- [[network-isolation]]
- [[virtual-machine]]
- [[vm]]
- [[container-runtime-engine]]
- [[container-image-layers]]
- [[container-image-specification-file]]
- [[containers-and-vms]]
- [[container-portability]]
- [[kubernetes]]
- [[pod]]
- [[serverless-architecture]]
- [[function-as-a-service-faas]]
- [[autoscaling-containers]]
