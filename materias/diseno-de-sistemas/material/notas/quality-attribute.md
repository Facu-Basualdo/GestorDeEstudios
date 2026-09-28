---
titulo: "Quality Attribute"
tipo: concepto
tags: ["calidad","atributo","arquitectura","stakeholders","medible","quality-attribute","performance"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [59,61]
veces_en_examen: 0
---

# Quality Attribute

> Un quality attribute es una propiedad del sistema o de su desarrollo que se refiere a las funciones del sistema.

Los quality attributes no están solos: se refieren a las funciones del sistema. Si un requisito funcional es "cuando el usuario presiona el botón verde, aparece el diálogo Options", una anotación de performance puede describir cuán rápido debe aparecer; una de availability, cuán a menudo se permite que falle y cuán rápido se repara; una de usability, cuán fácil es aprender la función.

El estudio de los quality attributes como tema tiene al menos desde los años 70. Hay tres problemas con la mayoría de las discusiones:
1. Las definiciones no son testeables: decir que un sistema será "modificable" es vacío sin aclarar respecto de qué conjunto de cambios.
2. El debate por categorías no ayuda: un ataque de denial-of-service puede ser reclamado por availability, performance, security y usability.
3. Cada comunidad tiene su vocabulario: performance habla de "events", security de "attacks", availability de "faults", usability de "user input".

Se distinguen dos categorías:
- Atributos de runtime: describen propiedades del sistema en ejecución, como availability, performance o usability.
- Atributos de desarrollo: describen propiedades del desarrollo del sistema, como modifiability, testability o deployability.

Los quality attributes nunca se logran aisladamente: el logro de uno afecta (a veces positiva, a veces negativamente) el logro de otros. Casi todos afectan negativamente a la performance. Por ejemplo, la técnica principal para lograr software portable es aislar dependencias, lo que introduce overhead en la ejecución (típicamente como límites de proceso o procedimiento) y perjudica la performance.

## Relacionado

- [[functionality]]
- [[quality-attribute-scenario]]

## Lo mencionan

- [[software-architecture]]
- [[architectural-structure]]
- [[dominant-structure]]
- [[which-structures-to-choose]]
- [[good-architecture]]
- [[structures-as-engineering-leverage-points]]
- [[why-is-software-architecture-important]]
- [[inhibiting-or-enabling-a-systems-quality-attributes]]
- [[modifiability]]
- [[predicting-system-qualities]]
- [[list-of-thirteen]]
- [[functionality]]
- [[functional-requirements]]
- [[functional-suitability]]
- [[responsibility]]
- [[quality-attribute-scenario]]
- [[tactics-based-questionnaire]]
- [[deployability]]
- [[continuous-deployment]]
- [[architecturally-significant-requirement]]
- [[busqueda-de-asrs-en-documentos-de-requisitos]]
- [[business-goals]]
- [[palm]]
- [[utility-tree]]
- [[evaluation-by-outsiders]]
- [[participants-in-the-atam]]
- [[architectural-risk]]
- [[sensitivity-point]]
- [[tradeoff-point]]
- [[analysts]]
