---
titulo: "Uses Structure"
tipo: concepto
tags: ["dependencias","desarrollo-incremental","deuda-social"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [27]
veces_en_examen: 0
---

# Uses Structure

> La uses structure (estructura de usos) relaciona unidades de software mediante la relación uses, una forma especializada de dependencia: una unidad usa a otra si la corrección de la primera requiere la presencia de una versión que funcione correctamente de la segunda.

Se usa para diseñar sistemas que puedan extenderse agregando funcionalidad o de los que se puedan extraer subconjuntos funcionales útiles. La posibilidad de crear subconjuntos permite el desarrollo incremental. También es la base para medir la deuda social: la cantidad de comunicación que realmente ocurre entre equipos, en contraste con la que debería ocurrir, ya que define qué equipos deberían hablarse.

## Relacionado

- [[module]]
- [[module-structures]]

## Lo mencionan

- [[incremental-architecture]]
