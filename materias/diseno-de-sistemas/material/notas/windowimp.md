---
titulo: "WindowImp"
tipo: concepto
tags: ["window","implementacion","dependencia","abstraccion"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [54]
veces_en_examen: 0
---

# WindowImp

> Clase abstracta para objetos que encapsulan código dependiente del sistema de ventanas, ocultando las variaciones en las interfaces de los sistemas de ventanas.

WindowImp es una jerarquía separada que oculta las implementaciones específicas de cada sistema de ventanas. Las subclases de WindowImp convierten las solicitudes de la ventana en operaciones específicas del sistema. Por ejemplo, Window::DrawRect delega en _imp->DeviceRect(). La relación entre Window y WindowImp permite que la jerarquía Window se mantenga pequeña y estable.

## Relacionado

- [[window-class]]
- [[windowimp-subclasses]]

## Lo mencionan

- [[window-class]]
- [[windowimp-subclasses]]
- [[windowsystemfactory]]
