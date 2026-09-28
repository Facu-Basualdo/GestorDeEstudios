---
titulo: "Unhealthy Inheritance"
tipo: concepto
tags: ["anti-pattern","herencia","arquitectura","deuda-tecnica","dsm"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [436]
veces_en_examen: 0
---

# Unhealthy Inheritance

> Anti-patrón de arquitectura en el que una clase base depende de sus subclases, o una clase cliente depende tanto de la clase base como de una o más de sus subclases.

Para determinarlo, se buscan en una DSM dos tipos de relaciones: en una jerarquía de herencia, un padre depende de su clase hija; o una clase cliente de la jerarquía depende tanto del padre como de uno o más de sus hijos.

En el ejemplo de Apache Cassandra, la clase io.sstable.SSTable (padre) depende de io.sstable.SSTableReader (hijo), y ambas fueron co-committed 68 veces, lo que representa una forma de deuda. Esta deuda se puede eliminar moviendo funcionalidad de la clase hija a la clase padre.


## Lo mencionan

- [[hotspot]]
