---
titulo: "Window class"
tipo: concepto
tags: ["window","abstraccion","interfaz","graficos"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [52]
veces_en_examen: 0
---

# Window class

> Clase abstracta que encapsula las operaciones comunes de ventanas entre distintos sistemas de ventanas, proporcionando una interfaz uniforme para que los glifos se dibujen a sí mismos.

La clase Window es abstracta y provee operaciones de gestión de ventanas y gráficos, como se muestra en la Tabla 2.3. Las subclases concretas (ApplicationWindow, IconWindow, DialogWindow) capturan diferencias de comportamiento. La interfaz de Window incluye operaciones como Redraw, Raise, Lower, Iconify, Deiconify, DrawLine, DrawRect, DrawPolygon, DrawText, entre otras.

## Relacionado

- [[windowimp]]

## Lo mencionan

- [[windowimp]]
- [[windowimp-subclasses]]
- [[windowsystemfactory]]
