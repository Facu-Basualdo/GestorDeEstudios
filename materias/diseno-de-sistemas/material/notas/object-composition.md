---
titulo: "Object Composition"
tipo: concepto
tags: ["composicion","reutilizacion","caja-negra","encapsulamiento","tiempo-ejecucion","composition","object","design-patterns"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [27,88]
veces_en_examen: 0
---

# Object Composition

> Mecanismo alternativo a la herencia donde la nueva funcionalidad se obtiene ensamblando o componiendo objetos con interfaces bien definidas.

También llamada reutilización de caja negra porque los detalles internos de los objetos no son visibles. Se define dinámicamente en tiempo de ejecución. Ventajas: no rompe encapsulamiento, permite reemplazar objetos en tiempo de ejecución, reduce dependencias de implementación. Desventajas: puede resultar en más objetos y el comportamiento depende de las interrelaciones.

## Relacionado

- [[class-inheritance]]
- [[object]]

## Lo mencionan

- [[class-inheritance]]
- [[favor-object-composition-over-class-inheritance]]
- [[delegation]]
- [[parameterized-type]]
- [[consolidating-phase]]
- [[black-box-reuse]]
