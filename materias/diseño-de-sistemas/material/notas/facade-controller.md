---
titulo: "Facade Controller"
tipo: concepto
tags: ["grasp","controller","fachada","diseno","responsabilidad","facade","anti-patron"]
temas: ["[[controladores-y-arquitectura-en-capas]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [32,41]
veces_en_examen: 0
---

# Facade Controller

> Variante del patrón Controller en la que una clase que representa al sistema general, un objeto raíz, un dispositivo o un subsistema mayor recibe los eventos de sistema.

Es una de las dos opciones de receptor que propone el patrón Controller.

La clase elegida puede ser:
- Una abstracción de la unidad física general, como `Register`, `TelecommSwitch`, `Phone` o `Robot`.
- Una clase que representa el sistema de software completo, como `POSSystem`.
- Cualquier concepto que el diseñador elija para representar el sistema o un subsistema, incluso `ChessGame` en software de juegos.

Es adecuado cuando no hay "demasiados" eventos de sistema o cuando la interfaz de usuario no puede redirigir los mensajes de evento a controllers alternativos, como en un sistema de procesamiento de mensajes.

Si se le asignan demasiadas responsabilidades, el facade controller se vuelve "inflado" y el diseño sufre baja cohesión o alto acoplamiento; en ese caso conviene considerar un use case controller.

En el ejemplo NextGen, `Register` (una terminal POS) cumple el papel de facade controller para operaciones como `enterItem`, `endSale`, `makeNewSale` y `makePayment`.

## Relacionado

- [[controller]]
- [[use-case-controller]]
- [[high-cohesion]]
- [[bloated-controller]]

## Lo mencionan

- [[controller]]
- [[use-case-controller]]
- [[bloated-controller]]
