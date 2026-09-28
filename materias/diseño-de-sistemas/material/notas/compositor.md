---
titulo: "Compositor"
tipo: concepto
tags: ["compositor","formateo","algoritmo","lexi","estrategia"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [44]
veces_en_examen: 0
---

# Compositor

> Clase que encapsula un algoritmo de formateo, permitiendo variar el linebreaking independientemente de la estructura del documento.

Se define una clase Compositor para objetos que encapsulan un algoritmo de formateo. La interfaz permite al compositor saber qué glifos formatear y cuándo hacerlo. Los glifos que formatea son los hijos de una subclase especial de Glyph llamada Composition. Una Composition obtiene una instancia de una subclase de Compositor (especializada para un algoritmo de linebreaking particular) cuando se crea, y le dice al compositor que Componga sus glifos cuando sea necesario, por ejemplo, cuando el usuario cambia un documento. Cada subclase de Compositor puede implementar un algoritmo de linebreaking diferente, como SimpleCompositor (rápido, sin considerar el 'color') o TeXCompositor (algoritmo completo de TeX, que considera el color a cambio de tiempos de formateo más largos).

## Relacionado

- [[composition]]
- [[glyph]]
- [[strategy]]

## Lo mencionan

- [[strategy]]
- [[composition]]
