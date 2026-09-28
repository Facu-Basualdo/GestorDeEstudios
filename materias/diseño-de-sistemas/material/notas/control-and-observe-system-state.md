---
titulo: "Control and Observe System State"
tipo: concepto
tags: ["testability","control","observabilidad","estado","pruebas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [239]
veces_en_examen: 0
---

# Control and Observe System State

> Categoría de tácticas de testability que busca controlar y observar el estado interno de un componente para hacerlo más testeable.

La forma más simple de control y observación es darle a un componente un conjunto de entradas, dejar que haga su trabajo y observar sus salidas. Estas tácticas van más allá: hacen que el componente mantenga información de estado, permiten a los testers asignar un valor a esa información y la hacen accesible bajo demanda. El estado puede ser un estado operativo, el valor de una variable clave, la carga de performance, pasos intermedios del proceso, etc.

Incluye las tácticas:
- Specialized interfaces
- Record/playback
- Localize state storage
- Abstract data sources
- Sandbox
- Executable assertions

## Relacionado

- [[testability-tactics]]
- [[specialized-interfaces]]
- [[record-playback]]
- [[localize-state-storage]]
- [[abstract-data-sources]]
- [[sandbox]]
- [[executable-assertions]]

## Lo mencionan

- [[testability-tactics]]
- [[specialized-interfaces]]
- [[record-playback]]
- [[localize-state-storage]]
- [[abstract-data-sources]]
- [[sandbox]]
- [[executable-assertions]]
