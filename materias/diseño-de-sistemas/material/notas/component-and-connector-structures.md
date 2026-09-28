---
titulo: "Component-and-Connector Structures"
tipo: concepto
tags: ["arquitectura","runtime","componentes","conectores","estructuras","tiempo-de-ejecucion","arquitectura-de-software"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [22,32,40,41,42,43,44,45,46]
veces_en_examen: 0
---

# Component-and-Connector Structures

> Las C&C structures (estructuras de componente-conector) se centran en cómo los elementos interactúan entre sí en runtime para llevar a cabo las funciones del sistema.

Describen el sistema como un conjunto de elementos con comportamiento en runtime (components) e interacciones (connectors). Sirven para responder preguntas como:

- ¿Cuáles son los componentes ejecutantes principales y cómo interactúan?
- ¿Cuáles son los almacenes de datos compartidos?
- ¿Qué partes del sistema están replicadas?
- ¿Cómo progresa el dato a través del sistema?
- ¿Qué partes pueden correr en paralelo?
- ¿Puede la estructura cambiar mientras se ejecuta?

Son importantes para propiedades runtime como performance, seguridad y disponibilidad. Un ejemplo típico es un sistema con un repositorio compartido accedido por servidores y un componente administrativo, con clientes que se comunican mediante un conector publish-subscribe.

En la vista runtime, los módulos ya compilados se convierten en formas ejecutables; por eso las C&C structures son ortogonales a las module structures.

## Relacionado

- [[component]]
- [[connector]]
- [[module-structures]]
- [[software-architecture]]
- [[allocation-structures]]
- [[structures-as-engineering-leverage-points]]

## Lo mencionan

- [[software-architecture]]
- [[architectural-structure]]
- [[component]]
- [[connector]]
- [[module-structures]]
- [[allocation-structures]]
- [[service-structure]]
- [[concurrency-structure]]
- [[deployment-structure]]
- [[relating-structures-to-each-other]]
- [[dominant-structure]]
- [[fewer-is-better]]
- [[structures-as-engineering-leverage-points]]
- [[incremental-architecture]]
