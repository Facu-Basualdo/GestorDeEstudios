---
titulo: "Disk Sharing"
tipo: concepto
tags: ["disco","aislamiento","sistema-operativo","recursos"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [290]
veces_en_examen: 0
---

# Disk Sharing

> Disk sharing es el mecanismo que permite que las aplicaciones compartan discos físicos de forma aislada, mediante un controlador de disco y etiquetas de usuario y grupo.

El aislamiento del disco se logra con varios mecanismos:

- Los discos físicos solo se pueden acceder a través de un **disk controller**, que asegura que los flujos de datos hacia y desde cada hilo se entreguen en secuencia.
- El sistema operativo puede etiquetar los hilos en ejecución y el contenido del disco (archivos y directorios) con información como un **user ID** y un **grupo**, y restringir la visibilidad o el acceso comparando las etiquetas del hilo que solicita acceso con las del contenido.

## Relacionado

- [[shared-resources]]
- [[thread]]

## Lo mencionan

- [[shared-resources]]
