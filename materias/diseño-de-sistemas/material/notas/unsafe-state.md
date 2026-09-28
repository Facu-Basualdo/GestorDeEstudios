---
titulo: "Unsafe State"
tipo: concepto
tags: ["safety","estado-inseguro","causas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [194]
veces_en_examen: 0
---

# Unsafe State

> Un unsafe state es un estado en el que el sistema causa o conduce a daño, lesión o pérdida de vida a los actores de su entorno.

Las causas de un unsafe state incluyen: omisiones (la falla de que un evento ocurra), comisión (la ocurrencia espuria de un evento no deseado), timing temprano o tardío, problemas con los valores del sistema (valores incorrectos gruesos, detectables, o sutiles, típicamente indetectables), omisión y comisión en una secuencia de eventos, y eventos fuera de secuencia.

## Relacionado

- [[safety]]

## Lo mencionan

- [[safety]]
- [[fault-tree-analysis]]
