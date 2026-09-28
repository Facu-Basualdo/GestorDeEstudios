---
titulo: "Functional Redundancy"
tipo: concepto
tags: ["disponibilidad","deteccion","votacion","redundancia","diversidad","safety","tactica"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78,203]
veces_en_examen: 0
---

# Functional Redundancy

> Es un esquema de voting que aborda el problema de las common-mode failures en componentes de hardware o software implementando design diversity.

Esta táctica intenta lidiar con la naturaleza sistemática de los design faults agregando diversidad a la redundancia. Las salidas de los componentes funcionalmente redundantes deberían ser las mismas dado el mismo input. La functional redundancy sigue siendo vulnerable a errores de especificación y, por supuesto, las réplicas funcionales serán más caras de desarrollar y verificar.

## Relacionado

- [[voting]]
- [[common-mode-failures]]
- [[design-diversity]]
- [[redundancy]]

## Lo mencionan

- [[voting]]
- [[common-mode-failures]]
- [[design-diversity]]
- [[redundancy]]
