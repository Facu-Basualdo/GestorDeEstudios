---
titulo: "Traversal versus Traversal Actions"
tipo: concepto
tags: ["recorrido","acciones","separacion de responsabilidades","analisis"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [66]
veces_en_examen: 0
---

# Traversal versus Traversal Actions

> Distinción entre el recorrido de una estructura y las acciones realizadas durante el recorrido, que permite reutilizar el mismo conjunto de iteradores para diferentes análisis.

En lugar de poner la responsabilidad del análisis en las clases iteradoras, se separa la lógica de recorrido de las acciones específicas del análisis. Diferentes análisis a menudo requieren el mismo tipo de recorrido (por ejemplo, preorden), por lo que se pueden reutilizar los iteradores. Cada análisis debe ser capaz de distinguir diferentes tipos de glifos. Una alternativa es poner la capacidad analítica en las clases de glifos, pero eso requiere cambiar toda la jerarquía al añadir un nuevo análisis y expande la interfaz de Glyph, ocultando su propósito principal.

## Relacionado

- [[iterator]]
- [[composite]]

