---
titulo: "Recursive Composition"
tipo: concepto
tags: ["recursive composition","jerarquia","estructura de documento","composicion"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [40]
veces_en_examen: 0
---

# Recursive Composition

> Técnica para representar información estructurada jerárquicamente construyendo elementos complejos a partir de elementos más simples.

Se utiliza para componer un documento a partir de elementos gráficos simples. Como primer paso, se alinean caracteres y gráficos de izquierda a derecha para formar una línea. Luego se organizan varias líneas en una columna, y varias columnas en una página, etc. Cada elemento importante (tanto visibles como estructurales) se representa con un objeto. Esto promueve flexibilidad y permite tratar texto y gráficos de manera uniforme. La estructura de objetos imita la estructura física del documento. Esta técnica implica que las clases correspondientes deben tener interfaces compatibles, lo que se logra mediante herencia.

## Relacionado

- [[composite]]

