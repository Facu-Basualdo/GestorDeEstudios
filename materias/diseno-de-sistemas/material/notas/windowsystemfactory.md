---
titulo: "WindowSystemFactory"
tipo: concepto
tags: ["factory","abstract-factory","configuracion","implementacion"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [56]
veces_en_examen: 0
---

# WindowSystemFactory

> Clase de fábrica abstracta que proporciona una interfaz para crear objetos de implementación dependientes del sistema de ventanas, como WindowImp, ColorImp y FontImp.

Concrete factories como PMWindowSystemFactory y XWindowSystemFactory crean los objetos correspondientes. El constructor de Window usa esta fábrica para inicializar _imp. La variable global windowSystemFactory se inicializa similarmente a guiFactory.

## Relacionado

- [[abstract-factory]]
- [[windowimp]]
- [[window-class]]

