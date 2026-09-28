---
titulo: "Creación de una VM image"
tipo: concepto
tags: ["vm-image","creacion","devops"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [295]
veces_en_examen: 0
---

# Creación de una VM image

> Conjunto de tres enfoques para crear una nueva VM image: copiar una máquina existente, partir de una imagen existente o crearla desde cero con medios de instalación.

- 1. Encontrar una máquina que ya esté ejecutando el software deseado y hacer una snapshot copy de los bits de su memoria.
- 2. Partir de una imagen existente y agregar software adicional.
- 3. Crear una imagen desde cero: obtener medios de instalación del sistema operativo, bootear la máquina nueva desde el medio de instalación, que formatea el disco, copia el SO y agrega el boot loader en la ubicación predeterminada.
- Para los dos primeros enfoques, existen repositorios de machine images (generalmente con software open source) que ofrecen desde imágenes mínimas solo con kernels hasta imágenes con aplicaciones completas.

## Relacionado

- [[vm-image]]

