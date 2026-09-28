---
titulo: "Hotspot"
tipo: concepto
tags: ["hotspot","anti-patron","falla-diseno","deuda-tecnica","hotspots","arquitectura","anti-patterns","mantenimiento"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [433,436]
veces_en_examen: 0
---

# Hotspot

> Conjuntos de elementos del sistema que contribuyen de manera desproporcionada a los costos de mantenimiento y representan áreas de la arquitectura con fallas de diseño.

Los hotspots son áreas de la arquitectura con fallas de diseño, también llamados architecture anti-patterns o architecture flaws. Para identificarlos, se buscan anti-patrones que contribuyan al alto acoplamiento y la baja cohesión. No todos los archivos de un hotspot están fuertemente acoplados entre sí; una colección de archivos puede estar fuertemente acoplada entre ellos y desacoplada del resto. Cada colección de este tipo es un posible hotspot y un candidato para eliminar deuda mediante refactoring.

En el caso SS1, tres clusters de archivos relacionados arquitectónicamente concentraban el 89 por ciento de los defectos del proyecto, aunque representaban algo más de un tercio de sus archivos.

## Relacionado

- [[architecture-debt]]
- [[unstable-interface]]
- [[modularity-violation]]
- [[unhealthy-inheritance]]
- [[cyclic-dependency]]
- [[package-cycle]]
- [[crossing]]

## Lo mencionan

- [[architecture-debt]]
- [[automation]]
- [[architecture-debt-monitoring-process]]
