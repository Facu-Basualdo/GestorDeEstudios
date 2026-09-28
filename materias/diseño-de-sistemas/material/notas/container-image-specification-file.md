---
titulo: "Container Image Specification File"
tipo: concepto
tags: ["containers","scripts","infrastructure-as-code","version-control"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [296]
veces_en_examen: 0
---

# Container Image Specification File

> Archivo con un script de los pasos para crear una container image, específico de la herramienta de creación de imágenes.

- El archivo permite especificar qué piezas de software se cargan en el container y se guardan como imagen.
- Usar version control sobre el archivo de especificación asegura que cada miembro del equipo pueda crear una container image idéntica y modificar el archivo según sea necesario.
- Tratar estos scripts como código trae ventajas: pueden ser diseñados conscientemente, testeados, configuration controlled, revisados, documentados y compartidos.

## Relacionado

- [[container-image]]
- [[container]]

## Lo mencionan

- [[container-image]]
