---
titulo: "WindowImp subclasses"
tipo: concepto
tags: ["window","implementacion","plataforma","xwindow","presentation-manager"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [55]
veces_en_examen: 0
---

# WindowImp subclasses

> Subclases concretas de WindowImp que implementan operaciones específicas del sistema de ventanas, como DeviceRect, para plataformas particulares.

Ejemplos: XWindowImp implementa DeviceRect usando XDrawRectangle; PMWindowImp lo hace mediante GpiBeginPath, GpiPolyLine, etc. Cada subclase convierte las coordenadas en el formato esperado por el sistema de ventanas subyacente.

## Relacionado

- [[windowimp]]
- [[window-class]]

## Lo mencionan

- [[windowimp]]
