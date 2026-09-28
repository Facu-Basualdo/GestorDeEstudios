---
titulo: "Decomposition Structure"
tipo: concepto
tags: ["modulos","descomposicion","modificabilidad","arquitectura"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [27]
veces_en_examen: 0
---

# Decomposition Structure

> La decomposition structure (estructura de descomposición) relaciona módulos por la relación "is-a-submodule-of", mostrando cómo un módulo se descompone recursivamente en módulos más pequeños.

Los módulos en esta estructura representan un punto de partida común para el diseño: el arquitecto enumera lo que el software tendrá que hacer y asigna cada ítem a un módulo para su diseño e implementación posterior. Los módulos suelen tener productos asociados, como especificaciones de interfaz, código y planes de prueba. La estructura de descomposición determina en gran medida la modificabilidad del sistema y suele usarse como base para la organización del proyecto, la documentación y los planes de integración y prueba.

## Relacionado

- [[module]]
- [[module-structures]]

