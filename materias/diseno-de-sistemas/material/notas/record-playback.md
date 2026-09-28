---
titulo: "Record/Playback"
tipo: concepto
tags: ["testability","pruebas","grabacion","reproduccion","estado"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [239]
veces_en_examen: 0
---

# Record/Playback

> Táctica de testability que registra el estado que cruza una interfaz y lo usa como entrada para reproducir un fault.

Record se refiere a capturar información que cruza una interfaz; playback se refiere a usarla como entrada para más pruebas. El estado que causó un fault suele ser difícil de recrear, y esta táctica permite re-crearlo.

## Relacionado

- [[control-and-observe-system-state]]

## Lo mencionan

- [[control-and-observe-system-state]]
- [[limit-nondeterminism]]
