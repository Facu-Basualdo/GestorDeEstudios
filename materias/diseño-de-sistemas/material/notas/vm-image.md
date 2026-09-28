---
titulo: "VM Image"
tipo: concepto
tags: ["vm-image","virtualizacion","imagenes","vm","imagen","aprovisionamiento","cloud"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [295,303,305]
veces_en_examen: 0
---

# VM Image

> Contenido del almacenamiento de disco desde el que se bootea una VM, formado por los bits del sistema operativo y los servicios, organizados en archivos y directorios, más el boot loader.

- La VM image contiene los bits que representan las instrucciones y datos del software que se va a ejecutar (sistema operativo y servicios).
- Los bits están organizados en archivos y directorios según el file system del sistema operativo.
- La imagen también contiene el boot load program, guardado en su ubicación predeterminada.
- Las imágenes de VM son muy grandes, por lo que transferirlas por red puede ser lento.
- Una imagen viene empaquetada con todas sus dependencias.
- Se puede construir una VM image en una computadora de desarrollo y luego desplegarla a la nube.
- Es habitual crear imágenes que contengan solo el sistema operativo y programas esenciales; los servicios se agregan después de bootear la VM mediante configuration.

## Relacionado

- [[vm]]
- [[configuration]]
- [[virtual-machine]]
- [[management-gateway]]

## Lo mencionan

- [[hypervisor]]
- [[creacion-de-una-vm-image]]
- [[riesgos-de-las-imagenes-de-vm-de-terceros]]
- [[configuration]]
- [[container]]
- [[container-image]]
- [[management-gateway]]
