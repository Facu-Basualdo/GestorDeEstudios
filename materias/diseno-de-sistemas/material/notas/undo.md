---
titulo: "Undo"
tipo: concepto
tags: ["usabilidad","tacticas","undo","deshacer"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [254]
veces_en_examen: 0
---

# Undo

> Undo es una táctica de usabilidad que permite restaurar un estado anterior del sistema a pedido del usuario.

Para soportar undo, el sistema debe mantener suficiente información sobre su estado para poder restaurar un estado anterior. Esa información puede tomar la forma de "snapshots" (por ejemplo, checkpoints) o de un conjunto de operaciones reversibles.

No todas las operaciones se pueden revertir fácilmente: cambiar todas las ocurrencias de la letra "a" a "b" en un documento no puede revertirse cambiando todas las "b" a "a", porque algunas "b" pueden haber existido antes del cambio original. Algunas operaciones no pueden deshacerse en absoluto; por ejemplo, no se puede "desenviar" un paquete ni "desdisparar" un misil.

Undo tiene variantes:

* **Undo simple**: invocar undo nuevamente vuelve al estado en que se ordenó el primer undo (deshace el undo).
* **Undo múltiple**: varias operaciones de undo retroceden a través de muchos estados anteriores, hasta un límite o hasta que la aplicación se abrió por última vez.

## Relacionado

- [[usability-tactics]]

## Lo mencionan

- [[usability-tactics]]
- [[memento]]
