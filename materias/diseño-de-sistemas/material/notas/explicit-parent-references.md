---
titulo: "Explicit parent references"
tipo: concepto
tags: ["composite","implementacion","referencias-al-padre"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [185]
veces_en_examen: 0
---

# Explicit parent references

> Las referencias explícitas a los padres simplifican el recorrido y la gestión de una estructura composite.

Mantener referencias desde los componentes hijos a su padre puede simplificar el recorrido y la gestión de una estructura composite. La referencia al padre facilita moverse hacia arriba en la estructura y eliminar un componente. Las referencias a padres también ayudan a soportar el patrón Chain of Responsibility.

## Relacionado

- [[chain-of-responsibility]]

