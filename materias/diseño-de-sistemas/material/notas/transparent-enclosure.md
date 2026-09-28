---
titulo: "Transparent Enclosure"
tipo: concepto
tags: ["transparente","envoltorio","composicion","interfaz"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [45,46]
veces_en_examen: 0
---

# Transparent Enclosure

> Concepto que combina composición de un solo hijo con interfaces compatibles para que un envoltorio pueda añadir comportamiento de manera transparente.

Transparent enclosure combina las nociones de composición de un solo hijo (o componente) e interfaces compatibles. Los clientes generalmente no pueden distinguir si están tratando con el componente o su envoltorio, especialmente si el envoltorio simplemente delega todas sus operaciones al componente. Pero el envoltorio también puede aumentar el comportamiento del componente realizando trabajo propio antes y/o después de delegar una operación. El envoltorio puede añadir estado al componente de manera efectiva.

## Relacionado

- [[monoglyph]]
- [[glyph]]

## Lo mencionan

- [[decorator]]
