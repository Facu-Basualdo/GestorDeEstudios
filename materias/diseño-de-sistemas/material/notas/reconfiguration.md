---
titulo: "Reconfiguration"
tipo: concepto
tags: ["recuperacion","tacticas","reconfiguracion","disponibilidad","safety","tactica"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81,205]
veces_en_examen: 0
---

# Reconfiguration

> Táctica de recovery que intenta recuperarse de fallas de componentes remapeando la arquitectura lógica sobre los recursos que quedan funcionando.

Idealmente, este remapeo permite mantener la funcionalidad completa. Cuando no es posible, el sistema puede mantener funcionalidad parcial en combinación con la táctica degradation.

## Relacionado

- [[degradation]]

## Lo mencionan

- [[recover-from-faults]]
- [[recovery]]
