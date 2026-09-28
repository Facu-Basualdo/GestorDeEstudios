---
titulo: "Module View"
tipo: concepto
tags: ["vista","arquitectura","modulos","estructura"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [403]
veces_en_examen: 0
---

# Module View

> Una module view (vista de módulos) es una vista estructural que representa la descomposición del software en unidades de implementación (modules) y las relaciones entre ellas.

Esta categoría de vista representa la descomposición del software en modules y las relaciones entre ellos. Ejemplos de module views son decomposition, uses y layers.

Cada module view tiene asignadas propiedades que expresan información importante de cada module y de las relaciones entre ellos, como responsabilidades, información de visibilidad (qué otros modules pueden usarlo) e historial de revisión.

Usos:
- Explicar la funcionalidad del sistema a alguien que no lo conoce, presentando las responsabilidades de forma top-down.
- Ayudar a un nuevo desarrollador a entender la estructura del code base, si la vista está actualizada.

Limitaciones:
- No sirven para inferir comportamiento en runtime, porque son una partición estática de las funciones del software.
- No se usan típicamente para análisis de performance, reliability u otras cualidades de runtime; para eso se usan component-and-connector y allocation views.

## Relacionado

- [[module]]
- [[component-and-connector-view]]
- [[allocation-views]]

## Lo mencionan

- [[module]]
- [[view]]
- [[basis-for-training]]
- [[allocation-views]]
- [[quality-views]]
- [[structural-views]]
- [[mapping-between-views]]
- [[project-manager]]
- [[development-team]]
- [[testers-and-integrators]]
- [[designers-of-other-systems]]
- [[infrastructure-support-personnel]]
