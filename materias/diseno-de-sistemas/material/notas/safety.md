---
titulo: "Safety"
tipo: concepto
tags: ["safety","seguridad","estados-inseguros","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [194]
veces_en_examen: 0
---

# Safety

> Safety es la capacidad de un sistema de evitar estados inseguros que causen o lleven a daño, lesión o pérdida de vida a los actores de su entorno, y de detectarlos y recuperarse de ellos para minimizar el daño.

Safety se ocupa de evitar los estados inseguros y, si ocurren, de detectarlos y recuperarse de ellos. Cualquier parte del sistema puede llevar a un estado inseguro: el software, el hardware o el entorno. Una vez detectado, las respuestas posibles son continuar operando tras recuperarse del estado inseguro o pasar a un modo seguro, apagarse (fail safe), o transicionar a un estado que requiera operación manual. Además, el estado inseguro debe reportarse y/o registrarse inmediatamente. La arquitectura para safety comienza identificando las funciones críticas para la seguridad mediante técnicas como FMEA y FTA.

## Relacionado

- [[fault-tree-analysis]]
- [[unsafe-state]]

## Lo mencionan

- [[unsafe-state]]
- [[safety-critical-function]]
- [[fault-tree-analysis]]
- [[safety-general-scenario]]
- [[safety-tactics]]
