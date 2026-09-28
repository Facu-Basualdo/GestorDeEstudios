---
titulo: "Designing an Interface"
tipo: concepto
tags: ["interfaces","diseno","arquitectura","principios"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [277]
veces_en_examen: 0
---

# Designing an Interface

> Diseñar una interfaz consiste en decidir qué recursos son visibles externamente según las necesidades de los actores y acordar alcance, estilo de interacción, representación de datos y manejo de errores.

Agregar recursos a una interfaz implica un compromiso de mantenerlos mientras el elemento esté en uso. Una vez que los actores dependen de un recurso, sus elementos se rompen si el recurso se cambia o elimina. La confiabilidad de la arquitectura se afecta cuando se rompe el contrato entre elementos. Se destacan principios como el de menor sorpresa, interfaces pequeñas, acceso uniforme y no repetición. La consistencia en cómo se nombran los recursos, cómo se ordenan los parámetros de API y cómo se manejan los errores es importante para minimizar errores de desarrollo.

## Relacionado

- [[principle-of-least-surprise]]
- [[small-interfaces-principle]]
- [[uniform-access-principle]]
- [[don-t-repeat-yourself-principle]]
- [[interface-scope]]
- [[interaction-styles]]

