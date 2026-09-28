---
titulo: "Containers and VMs"
tipo: concepto
tags: ["containers","vms","arquitectura","tradeoffs"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [299]
veces_en_examen: 0
---

# Containers and VMs

> Análisis de los tradeoffs entre entregar un servicio en una VM y entregarlo en un container.

- Una VM virtualiza el hardware físico (CPU, disco, memoria y red). El software que corre incluye un sistema operativo completo y se puede ejecutar casi cualquier SO.
- En una VM se puede correr casi cualquier programa, salvo los que deban interactuar directamente con el hardware físico. Esto es importante para software legacy o comprado.
- Tener el sistema operativo completo permite ejecutar múltiples servicios en la misma VM, deseable cuando los servicios están acoplados, comparten grandes conjuntos de datos o se busca comunicación y coordinación eficiente.
- El hypervisor asegura que el sistema operativo arranque, monitorea su ejecución y lo reinicia si se cae.
- Las container instances comparten un sistema operativo. El OS debe ser compatible con el container runtime engine, lo que limita el software que puede correr en un container.
- El container runtime engine inicia, monitorea y reinicia el servicio que corre en un container y típicamente monitorea un solo programa. Si ese programa termina, el container termina. Por eso los containers generalmente corren un solo servicio.
- El tamaño de la container image es chico, incluyendo solo los programas y librerías necesarios. Múltiples servicios en un container podrían aumentar el tamaño de la imagen, el tiempo de arranque y la memoria.
- Se pueden agrupar container instances que ejecutan servicios relacionados para que corran en la misma máquina física y se comuniquen eficientemente; algunos container runtime engines permiten que containers de un grupo compartan memoria y mecanismos como semáforos.
- Otras diferencias:
  - Una VM puede correr cualquier sistema operativo; los containers están limitados a Linux, Windows o IOS.
  - Los servicios en una VM se inician, detienen y pausan mediante funciones del sistema operativo; en containers, mediante funciones del container runtime engine.
  - Las VMs persisten más allá de la terminación de los servicios que corren dentro; los containers no.
  - Existen algunas restricciones de uso de puertos en containers que no existen en VMs.

## Relacionado

- [[container]]
- [[vm]]
- [[container-runtime-engine]]
- [[hypervisor]]

