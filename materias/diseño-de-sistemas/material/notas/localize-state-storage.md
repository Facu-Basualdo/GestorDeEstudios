---
titulo: "Localize State Storage"
tipo: concepto
tags: ["testability","estado","pruebas","arquitectura","storage"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [239]
veces_en_examen: 0
---

# Localize State Storage

> Táctica de testability que almacena el estado de un sistema, subsistema o componente en un solo lugar para poder iniciar pruebas en un estado arbitrario.

Si el estado está enterrado o distribuido, fijar un estado arbitrario se vuelve difícil o imposible. El estado puede ser de grano fino, incluso a nivel de bit, o de grano grueso para representar abstracciones amplias o modos operativos; la granularidad depende de cómo se usará en las pruebas. Una forma conveniente de externalizar el almacenamiento del estado es usar una state machine (o un state machine object) como mecanismo para rastrear y reportar el estado actual.

## Relacionado

- [[control-and-observe-system-state]]
- [[state-machine]]

## Lo mencionan

- [[control-and-observe-system-state]]
