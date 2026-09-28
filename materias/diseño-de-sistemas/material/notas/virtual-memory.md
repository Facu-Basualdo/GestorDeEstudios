---
titulo: "Virtual Memory"
tipo: concepto
tags: ["memoria","paginacion","aislamiento","sistema-operativo"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [290]
veces_en_examen: 0
---

# Virtual Memory

> Virtual memory es una tecnología que particiona el espacio de direcciones de un proceso en páginas y las intercambia entre la memoria física y el almacenamiento secundario según se necesiten.

Históricamente, a medida que las aplicaciones crecían, todo el código y los datos no entraban en la memoria física. La tecnología de virtual memory fue desarrollada para enfrentar este problema.

El hardware de gestión de memoria particiona el espacio de direcciones de un proceso en páginas e intercambia páginas entre la memoria física y el almacenamiento secundario. Las páginas que están en la memoria física se pueden acceder inmediatamente; las otras se guardan en la memoria secundaria hasta que se necesiten. El hardware soporta el aislamiento de un espacio de direcciones respecto de otro.

## Relacionado

- [[shared-resources]]

## Lo mencionan

- [[shared-resources]]
