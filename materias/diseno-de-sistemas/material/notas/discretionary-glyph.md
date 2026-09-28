---
titulo: "Discretionary Glyph"
tipo: concepto
tags: ["glifo","discrecional","separacion-silabica","glyph"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [70]
veces_en_examen: 0
---

# Discretionary Glyph

> Un glifo discrecional es una instancia de Discretionary, una subclase de Glyph, que representa un punto de separación silábica potencial.

Un glifo discrecional tiene dos apariencias posibles dependiendo de si es o no el último carácter de una línea. Si es el último, se muestra como un guión; si no está al final, no tiene apariencia. El discrecional verifica su padre (un objeto Row) para ver si es el último hijo. Hace esta verificación cada vez que se le pide dibujarse o calcular sus límites. La estrategia de formateo trata a los discrecionales igual que a los espacios en blanco, haciéndolos candidatos para terminar una línea.

## Relacionado

- [[glyph]]
- [[visitor]]

## Lo mencionan

- [[visitor]]
