---
titulo: "Best data structure for storing components"
tipo: concepto
tags: ["composite","estructura-datos","eficiencia"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [185]
veces_en_examen: 0
---

# Best data structure for storing components

> Los composites pueden usar diversas estructuras de datos para almacenar a sus hijos, dependiendo de la eficiencia.

Los composites pueden usar una variedad de estructuras de datos para almacenar a sus hijos, incluyendo listas enlazadas, árboles, arreglos y tablas hash. La elección de la estructura de datos depende de la eficiencia. De hecho, ni siquiera es necesario usar una estructura de datos de propósito general. A veces los composites tienen una variable para cada hijo, aunque esto requiere que cada subclase de Composite implemente su propia interfaz de gestión. Ver Interpreter para un ejemplo.

## Relacionado

- [[interpreter]]

