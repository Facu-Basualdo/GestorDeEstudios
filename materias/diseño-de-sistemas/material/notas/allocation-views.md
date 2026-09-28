---
titulo: "Allocation Views"
tipo: concepto
tags: ["vistas","asignacion","mapeo","arquitectura"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [408]
veces_en_examen: 0
---

# Allocation Views

> Allocation views describen el mapeo de unidades de software a elementos del entorno en el que el software se desarrolla o ejecuta.

Las allocation views consisten en elementos de software y elementos ambientales. Ejemplos de elementos ambientales: un procesador, un disk farm, un archivo o carpeta, o un grupo de desarrolladores. Los elementos de software provienen de una vista de módulos o de una vista C&C. La relación en una vista de asignación es *allocated-to* (asignado a). Normalmente se habla de un mapeo desde elementos de software hacia elementos ambientales, aunque el mapeo inverso también sería relevante. Un único elemento de software puede asignarse a múltiples elementos ambientales, y múltiples elementos de software pueden asignarse a un único elemento ambiental. Si estas asignaciones cambian durante la ejecución, la arquitectura se considera dinámica con respecto a esa asignación (por ejemplo, procesos que migran de un procesador o máquina virtual a otro). Un objetivo de la vista es comparar las propiedades requeridas por el elemento de software con las provistas por los elementos ambientales para determinar si la asignación será exitosa. Una vista estática ilustra una asignación fija de recursos en un entorno; una vista dinámica muestra las condiciones y los disparadores por los cuales la asignación de recursos cambia.

## Relacionado

- [[module-view]]

## Lo mencionan

- [[view]]
- [[basis-for-training]]
- [[module-view]]
- [[quality-views]]
- [[structural-views]]
- [[project-manager]]
- [[development-team]]
- [[testers-and-integrators]]
- [[end-users]]
- [[infrastructure-support-personnel]]
