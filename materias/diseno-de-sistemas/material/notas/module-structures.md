---
titulo: "Module Structures"
tipo: concepto
tags: ["arquitectura","modulos","implementacion","modificabilidad","estructuras","codigo","datos","arquitectura-de-software","desarrollo"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [22,40,41,42,43,44,45,46,364]
veces_en_examen: 0
---

# Module Structures

> Las module structures (estructuras de módulos) dividen el sistema en unidades de implementación llamadas modules, que deben construirse o adquirirse.

Los módulos reciben responsabilidades computacionales específicas y son la base para asignar trabajo a los equipos de programación. Representan una forma estática de considerar el sistema; hay menos énfasis en cómo se manifiesta el software en runtime. Las relaciones entre módulos incluyen uses, generalization (o "is-a") e "is part of". Ejemplos de implementación incluyen paquetes, clases y capas.

Estas estructuras permiten responder:

- ¿Cuál es la responsabilidad funcional primaria de cada módulo?
- ¿Qué otros elementos de software puede usar un módulo?
- ¿Qué otro software usa y del cual depende?
- ¿Qué módulos se relacionan por generalización o especialización?

Son la principal herramienta para razonar sobre la modificabilidad del sistema.

## Relacionado

- [[module]]
- [[software-architecture]]
- [[allocation-structures]]
- [[structures-as-engineering-leverage-points]]
- [[component-and-connector-structures]]
- [[component-and-connector-c-c-structures]]

## Lo mencionan

- [[software-architecture]]
- [[architectural-structure]]
- [[component-and-connector-structures]]
- [[module]]
- [[allocation-structures]]
- [[decomposition-structure]]
- [[uses-structure]]
- [[layer-structure]]
- [[class-structure]]
- [[work-assignment-structure]]
- [[structures-as-engineering-leverage-points]]
- [[producing-structures]]
- [[component-and-connector-c-c-structures]]
