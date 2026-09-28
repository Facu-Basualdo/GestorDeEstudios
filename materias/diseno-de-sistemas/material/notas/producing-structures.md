---
titulo: "Producing Structures"
tipo: concepto
tags: ["add","estructuras","instanciacion","arquitectura"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [364]
veces_en_examen: 0
---

# Producing Structures

> Producing Structures es la instanciación de conceptos de diseño que consiste en identificar y conectar elementos derivados de los conceptos seleccionados para satisfacer los drivers arquitectónicos.

En ADD, los conceptos de diseño por sí solos no satisfacen los drivers; hace falta producir estructuras. Esto implica la fase de instanciación: crear elementos y relaciones, y asociar responsabilidades. Las estructuras del sistema se agrupan en tres categorías:

- Module structures
- Component and connector (C&C) structures
- Allocation structures

Un ejemplo del texto: instanciar el patrón passive redundancy (warm spare) afecta tanto una estructura C&C como una allocation, y ciertas decisiones de ese patrón (cantidad de spares, mecanismo de transferencia de estado, detección de fallas) son responsabilidades que deben vivir en elementos de una module structure.

## Relacionado

- [[module-structures]]
- [[component-and-connector-c-c-structures]]
- [[allocation-structures]]
- [[passive-redundancy]]

## Lo mencionan

- [[establishing-relationships-between-the-elements]]
