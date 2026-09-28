---
titulo: "Layer bridging (puente de capas)"
tipo: concepto
tags: ["capas","layer-bridging","patron-arquitectonico","patron-capas","arquitectura","modificabilidad","acoplamiento"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-arquitectonicos]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [24]
veces_en_examen: 0
---

# Layer bridging (puente de capas)

> Layer bridging (puente de capas) es el caso en el que un módulo de una capa superior usa directamente módulos de una capa inferior no adyacente.

En el patrón de capas, normalmente solo se permiten usos de la capa inmediatamente inferior. El caso en el que una capa superior usa módulos de una capa inferior no adyacente se denomina layer bridging (puente de capas).

No se permiten usos ascendentes. Si se producen muchos casos de layer bridging, el sistema puede no cumplir con sus objetivos de portabilidad y modificación.

## Relacionado

- [[layers]]

## Lo mencionan

- [[layers]]
