---
titulo: "Class Inheritance"
tipo: concepto
tags: ["poo","herencia","implementacion","reutilizacion","caja-blanca","encapsulamiento","tiempo-compilacion"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [24,27]
veces_en_examen: 0
---

# Class Inheritance

> Mecanismo que permite definir la implementación de una clase en términos de otra, permitiendo la reutilización mediante subclases.

También conocida como reutilización de caja blanca porque los internos de las clases padre son visibles para las subclases. Se define estáticamente en tiempo de compilación. Ventajas: facilidad de uso y modificación de implementación. Desventajas: rompe el encapsulamiento, genera dependencias de implementación y no permite cambios en tiempo de ejecución. Una solución es heredar solo de clases abstractas.

## Relacionado

- [[interface-inheritance]]
- [[object-composition]]

## Lo mencionan

- [[interface-inheritance]]
- [[favor-object-composition-over-class-inheritance]]
- [[object-composition]]
- [[delegation]]
- [[parameterized-type]]
