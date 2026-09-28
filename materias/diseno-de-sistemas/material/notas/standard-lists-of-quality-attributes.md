---
titulo: "Standard lists of quality attributes"
tipo: concepto
tags: ["atributos-de-calidad","checklist","arquitectura","requerimientos","iso-25010"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [264,265,266]
veces_en_examen: 0
---

# Standard lists of quality attributes

> Listas que enumeran atributos de calidad conocidos y que sirven como checklist para no pasar por alto necesidades, aunque no son completas ni taxonomías perfectas.

Estas listas, de las que existen muchas, pueden servir para:

- Ayudar a los requirements gatherers a asegurarse de que no se pasen por alto necesidades importantes.
- Servir de base para crear una lista propia con los QA de interés para un dominio, industria, organización o productos.
- Servir de base para establecer medidas, aunque los nombres dan poca pista de cómo medir: si "fun" es un concern importante, ¿cómo se mide?

También tienen desventajas:

1. **Ninguna lista es completa.** Por ejemplo, algunos autores hablan de "manageability" (facilidad para que los administradores manejen la aplicación). También se menciona una arquitectura diseñada para lograr "Iowability": retener personal clave y atraer talento a una región tranquila, logrado con tecnología de punta y libertad creativa.
2. **Generan controversia.** Se puede argumentar que "functional correctness" debería ser parte de "reliability", que "portability" es un tipo de "modifiability", o que "maintainability" es un tipo de "modifiability". Los autores de ISO 25010 decidieron que security fuera una característica propia y no una sub-característica de functionality.
3. **Pretenden ser taxonomías**, pero los QA son escurridizos: denial of service puede considerarse parte de security, availability, performance y usability.

La conclusión es que los nombres de QA por sí solos son casi inútiles y funcionan como invitaciones a comenzar una conversación. Los escenarios son la mejor forma de especificar qué se quiere decir con un QA. Las listas deben usarse como checklist, sin adherirse servilmente a su terminología ni estructura.

## Relacionado

- [[iso-iec-25010]]

## Lo mencionan

- [[iso-iec-25010]]
