---
titulo: "Safety Tactics"
tipo: concepto
tags: ["safety","tacticas","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [200]
veces_en_examen: 0
---

# Safety Tactics

> Las safety tactics son las tácticas arquitectónicas para lograr safety, categorizadas en unsafe state avoidance, unsafe state detection y unsafe state remediation.

Las safety tactics asumen que el sistema reconoce qué constituye un unsafe state, por lo que se debe realizar un hazard analysis o un FTA una vez que se tiene la arquitectura. Las decisiones de diseño pueden introducir nuevas vulnerabilidades de safety no contempladas en el análisis de requisitos. Hay una superposición sustancial con las tácticas de availability, porque los problemas de disponibilidad suelen derivar en problemas de safety y comparten soluciones de diseño.

## Relacionado

- [[availability]]
- [[fault-tree-analysis]]
- [[unsafe-state-avoidance]]
- [[unsafe-state-detection]]
- [[safety]]

## Lo mencionan

- [[unsafe-state-avoidance]]
