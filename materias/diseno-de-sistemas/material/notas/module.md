---
titulo: "Module"
tipo: concepto
tags: ["modulo","implementacion","arquitectura","responsabilidades"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [22,403]
veces_en_examen: 0
---

# Module

> Un module (módulo) es una unidad de implementación que provee un conjunto coherente de responsabilidades.

Un module puede tomar la forma de una clase, una colección de clases, una capa, un aspect, o cualquier descomposición de la unidad de implementación. Las relaciones que los modules tienen entre sí incluyen is-part-of, depends-on e is-a.

Propiedades que suelen documentarse para cada module:
- **Name**: el nombre principal, que puede reflejar su posición en una jerarquía (por ejemplo, A.B.C es un submodule de B, que es submodule de A).
- **Responsibilities**: describe el rol del module en el sistema; suele trazarse a la especificación de requerimientos.
- **Implementation information**: mapping a unidades de código fuente, información de testing y de gestión.
- **Implementation constraints**: restricciones que la implementación debe seguir.
- **Revision history**: autores y cambios, útil para mantenimiento.

## Relacionado

- [[module-structures]]
- [[module-view]]

## Lo mencionan

- [[module-structures]]
- [[decomposition-structure]]
- [[uses-structure]]
- [[layer-structure]]
- [[class-structure]]
- [[implementation-structure]]
- [[work-assignment-structure]]
- [[module-view]]
