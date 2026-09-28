---
titulo: "Versioning"
tipo: concepto
tags: ["interfaces","evolucion","versiones","compatibilidad"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [276]
veces_en_examen: 0
---

# Versioning

> El versionado es una técnica de evolución de interfaces que mantiene la interfaz antigua y agrega una nueva, requiriendo que el actor especifique qué versión usa.

Mantener múltiples interfaces permite evolución. La interfaz antigua puede deprecarse cuando ya no se necesite o cuando se decida no seguir soportándola. Esto requiere que el actor especifique qué versión de la interfaz está usando.

## Relacionado

- [[interface-evolution]]
- [[deprecation]]

## Lo mencionan

- [[interface-evolution]]
