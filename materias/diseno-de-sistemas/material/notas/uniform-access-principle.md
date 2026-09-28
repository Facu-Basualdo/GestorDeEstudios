---
titulo: "Uniform Access Principle"
tipo: concepto
tags: ["interfaces","diseno","principios","abstraccion"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [277]
veces_en_examen: 0
---

# Uniform Access Principle

> El principio de acceso uniforme establece que un recurso debe ser accesible para sus actores de la misma manera, sin importar cómo esté implementado.

Se debe evitar filtrar detalles de implementación a través de la interfaz. Un actor no debería saber, por ejemplo, si un valor proviene de un caché, de un cálculo o de una obtención reciente desde una fuente externa.


## Lo mencionan

- [[designing-an-interface]]
