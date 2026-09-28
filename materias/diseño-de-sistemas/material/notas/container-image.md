---
titulo: "Container Image"
tipo: concepto
tags: ["containers","imagenes","devops"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [296]
veces_en_examen: 0
---

# Container Image

> Imagen ejecutable que empaqueta un container para su transferencia y ejecución.

- Al igual que las VMs y las VM images, los containers se empaquetan en container images ejecutables para transferirlos.
- No es necesario transferir el sistema operativo como parte de la container image si la máquina destino ya tiene un container runtime engine estándar.
- Una container image es de tamaño chico: incluye solo los programas y librerías necesarios para soportar el servicio que se quiere correr.
- Se puede crear una container image mediante pasos; el container management system considera la imagen final formada por layers.
- Un archivo de especificación (script) puede contener los pasos de creación de la container image.

## Relacionado

- [[container-runtime-engine]]
- [[container-image-layers]]
- [[container-image-specification-file]]
- [[vm-image]]

## Lo mencionan

- [[container]]
- [[container-image-layers]]
- [[container-image-specification-file]]
