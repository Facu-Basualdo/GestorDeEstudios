---
titulo: "Spare"
tipo: concepto
tags: ["disponibilidad","redundancia","cold-spare","patron"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [94]
veces_en_examen: 0
---

# Spare

> Patrón de disponibilidad (cold spare) en el que los redundant spares permanecen fuera de servicio hasta que ocurre un failover, momento en el que se inicia un power-on-reset antes de ponerlos en servicio.

Cold sparing se refiere a una configuración en la que los redundant spares permanecen fuera de servicio hasta que ocurre un failover. En ese momento se inicia un procedimiento de power-on-reset en el redundant spare antes de ponerlo en servicio. Debido a su pobre rendimiento de recuperación y, por lo tanto, su alto mean time to repair, este patrón es poco adecuado para sistemas con altos requisitos de disponibilidad.

## Relacionado

- [[redundant-spare]]

## Lo mencionan

- [[passive-redundancy]]
