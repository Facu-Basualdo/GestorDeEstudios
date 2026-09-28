---
titulo: "Graceful Degradation"
tipo: concepto
tags: ["disponibilidad","tacticas","degradacion","fallas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81]
veces_en_examen: 0
---

# Graceful Degradation

> Táctica que mantiene las funciones más críticas del sistema ante la presencia de fallas de componentes, mientras deja de lado las funciones menos críticas.

Se aplica en circunstancias donde las fallas de componentes individuales reducen gradualmente la funcionalidad del sistema en lugar de provocar una falla completa del sistema.


## Lo mencionan

- [[recover-from-faults]]
- [[escalating-restart]]
