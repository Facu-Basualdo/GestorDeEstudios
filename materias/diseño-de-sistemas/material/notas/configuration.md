---
titulo: "Configuration"
tipo: concepto
tags: ["configuration","vm-image","servicios"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [295]
veces_en_examen: 0
---

# Configuration

> Proceso de agregar servicios a una VM image después de que la VM arranca, en lugar de incluirlos al crear la imagen.

- Instalar servicios al crear la imagen llevaría a una imagen única para cada versión de cada servicio; además del costo de almacenamiento, esa proliferación de imágenes es difícil de rastrear y administrar.
- Por eso es habitual crear imágenes que contengan solo el sistema operativo y otros programas esenciales, y luego agregar los servicios a esas imágenes después de bootear la VM.
- Ese proceso se llama configuration.

## Relacionado

- [[vm-image]]

## Lo mencionan

- [[vm-image]]
