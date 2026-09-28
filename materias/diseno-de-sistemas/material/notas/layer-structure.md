---
titulo: "Layer Structure"
tipo: concepto
tags: ["capas","portabilidad","modulos","arquitectura"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [27]
veces_en_examen: 0
---

# Layer Structure

> La layer structure (estructura de capas) organiza los módulos en capas, donde cada capa es una "máquina virtual" abstracta que provee un conjunto cohesivo de servicios a través de una interfaz manejada.

Las capas pueden usar otras capas de manera manejada; en sistemas estrictamente en capas, una capa solo puede usar una única otra capa. Esta estructura le da al sistema portabilidad, es decir, la capacidad de cambiar la máquina virtual subyacente. El texto muestra como ejemplo la estructura de capas del sistema operativo UNIX System V.

## Relacionado

- [[layers]]
- [[module]]
- [[module-structures]]

## Lo mencionan

- [[layers]]
