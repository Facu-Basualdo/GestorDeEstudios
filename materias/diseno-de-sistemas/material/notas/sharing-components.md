---
titulo: "Sharing components"
tipo: concepto
tags: ["composite","comparticion","flyweight"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [185]
veces_en_examen: 0
---

# Sharing components

> Compartir componentes reduce los requisitos de almacenamiento, pero es difícil cuando un componente no puede tener más de un padre.

A menudo es útil compartir componentes para reducir los requisitos de almacenamiento. Pero cuando un componente no puede tener más de un padre, compartir componentes se vuelve difícil. Una posible solución es que los hijos almacenen múltiples padres, pero eso puede llevar a ambigüedades a medida que una solicitud se propaga hacia arriba en la estructura. El patrón Flyweight muestra cómo rediseñar para evitar almacenar padres por completo.

## Relacionado

- [[flyweight]]

