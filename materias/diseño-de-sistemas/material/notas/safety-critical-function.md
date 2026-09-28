---
titulo: "Safety-Critical Function"
tipo: concepto
tags: ["safety","funciones","arquitectura","analisis"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [194]
veces_en_examen: 0
---

# Safety-Critical Function

> Una safety-critical function es una función del sistema que podría causar daño, lesión o pérdida de vida si se comporta de manera insegura.

La arquitectura para safety comienza identificando las safety-critical functions del sistema, usando técnicas como failure mode and effects analysis (FMEA; también llamado hazard analysis) y fault tree analysis (FTA). Una vez que las fallas han sido identificadas, el arquitecto necesita diseñar mecanismos para detectar y mitigar la falla (y finalmente el peligro).

## Relacionado

- [[fault-tree-analysis]]
- [[safety]]

