---
titulo: "Modularity Violation"
tipo: concepto
tags: ["anti-pattern","arquitectura","modularidad","acoplamiento"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [436]
veces_en_examen: 0
---

# Modularity Violation

> Anti-patrón de arquitectura en el que módulos estructuralmente desacoplados cambian juntos con frecuencia.

Se identifica buscando dos o más archivos estructuralmente independientes —es decir, que no tienen dependencia estructural entre sí— que cambian juntos frecuentemente. Para eliminarlo, el 'secreto' no encapsulado compartido entre los archivos debe encapsularse como una abstracción propia.


## Lo mencionan

- [[hotspot]]
