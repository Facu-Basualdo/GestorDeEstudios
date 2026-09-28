---
titulo: "Testers and Integrators"
tipo: concepto
tags: ["stakeholders","testing","integracion","arquitectura"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [423]
veces_en_examen: 0
---

# Testers and Integrators

> Stakeholders para quienes la arquitectura especifica el comportamiento de caja negra correcto de las piezas que deben encajar.

Un tester de caja negra necesita acceso a la documentación de interfaces del elemento. Los integradores y testers de sistema necesitan ver colecciones de interfaces, especificaciones de comportamiento y una vista de usos para trabajar con subconjuntos incrementales.

Probablemente quieran ver:
- Vistas de módulos: descomposición, usos y modelo de datos.
- Vistas C&C: todas.
- Vistas de asignación: despliegue, instalación e implementación (para encontrar los activos).
- Otros: diagramas de contexto; documentación de interfaces y especificaciones de comportamiento de los módulos y de aquellos con los que interactúan.

El testing puede consumir aproximadamente la mitad del esfuerzo total del proyecto.

## Relacionado

- [[module-view]]
- [[component-and-connector-view]]
- [[allocation-views]]
- [[data-model]]
- [[context-diagram]]
- [[interface-documentation]]

## Lo mencionan

- [[architecture-stakeholders]]
