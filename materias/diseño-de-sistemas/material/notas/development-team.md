---
titulo: "Development Team"
tipo: concepto
tags: ["stakeholders","equipo-desarrollo","arquitectura"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [423]
veces_en_examen: 0
---

# Development Team

> Stakeholder que recibe instrucciones y restricciones de la arquitectura para implementar los elementos asignados.

Los miembros del equipo de desarrollo reciben restricciones sobre cómo hacer su trabajo. A veces tienen responsabilidad sobre un elemento que no implementaron (como un producto comercial o un elemento heredado). Necesitan conocer:
- La idea general del sistema.
- Qué elementos se le asignaron para implementar.
- Los detalles del elemento asignado, incluido el modelo de datos.
- Los elementos con los que interactúa y sus interfaces.
- Los activos de código que puede utilizar.
- Las restricciones que deben cumplirse (atributos de calidad, interfaces heredadas, presupuesto).

Probablemente quieran ver:
- Vistas de módulos: descomposición, usos y/o capas, y generalización.
- Vistas de componente y conector (C&C): varias, mostrando los componentes asignados y con los que interactúan.
- Vistas de asignación: despliegue, implementación e instalación.
- Otros: descripción general del sistema; diagrama de contexto; documentación de interfaces; guía de variabilidad; rationale y restricciones.

## Relacionado

- [[module-view]]
- [[component-and-connector-view]]
- [[allocation-views]]
- [[context-diagram]]
- [[interface-documentation]]
- [[variability-guide]]
- [[design-rationale]]

## Lo mencionan

- [[architecture-stakeholders]]
- [[maintainers]]
