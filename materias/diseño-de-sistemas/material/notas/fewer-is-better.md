---
titulo: "Fewer Is Better"
tipo: concepto
tags: ["estructuras","simplicidad","documentacion","arquitectura"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [37]
veces_en_examen: 0
---

# Fewer Is Better

> No todos los sistemas requieren muchas estructuras arquitectónicas; se debe diseñar y documentar una estructura solo si aporta un retorno positivo de la inversión, generalmente en menores costos de desarrollo o mantenimiento.

En sistemas pequeños, suele alcanzar con menos estructuras. Por ejemplo, en lugar de trabajar con varias estructuras C&C, generalmente una sola es suficiente. Si hay un solo proceso, la process structure se reduce a un único nodo y no hace falta representarla. Si no hay distribución (sistema en un solo procesador), la deployment structure es trivial y no se considera.

## Relacionado

- [[component-and-connector-structures]]
- [[deployment-structure]]

