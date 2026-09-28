---
titulo: "Encapsulating the Formatting Algorithm"
tipo: concepto
tags: ["encapsulacion","algoritmo de formateo","reemplazable","strategy pattern"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [43,44]
veces_en_examen: 0
---

# Encapsulating the Formatting Algorithm

> Diseño que aísla y hace reemplazable el algoritmo de formateo encapsulándolo en un objeto de una jerarquía de clases separada.

Para permitir cambiar fácilmente el algoritmo de formateo, se define una jerarquía de clases separada para objetos que encapsulan algoritmos de formateo. La raíz de la jerarquía define una interfaz que soporta una amplia gama de algoritmos, y cada subclase implementa la interfaz para un algoritmo particular. Luego se introduce una subclase de Glyph que estructura automáticamente sus hijos usando un objeto de algoritmo dado. Esto mantiene los algoritmos independientes de la estructura del documento y permite añadir nuevos algoritmos sin modificar los glifos existentes.

## Relacionado

- [[glyph]]

