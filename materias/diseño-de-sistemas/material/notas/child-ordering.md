---
titulo: "Child ordering"
tipo: concepto
tags: ["composite","orden-hijos","iterator"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [185]
veces_en_examen: 0
---

# Child ordering

> Muchos diseños especifican un orden en los hijos de un Composite, y el patrón Iterator puede guiar en la gestión de la secuencia.

Muchos diseños especifican un orden en los hijos de un Composite. En el ejemplo de gráficos anterior, el orden puede reflejar el orden de frente a atrás. Si los Composites representan árboles de análisis sintáctico, entonces las sentencias compuestas pueden ser instancias de un Composite cuyos hijos deben estar ordenados para reflejar el programa. Cuando el orden de los hijos es un problema, se deben diseñar cuidadosamente las interfaces de acceso y gestión de hijos para manejar la secuencia de hijos. El patrón Iterator puede guiar en esto.

## Relacionado

- [[iterator]]

