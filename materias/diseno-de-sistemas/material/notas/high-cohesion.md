---
titulo: "High Cohesion"
tipo: concepto
tags: ["grasp","patron","cohesion","diseno","acoplamiento","responsabilidades"]
temas: ["[[patrones-grasp]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [19,44]
veces_en_examen: 0
---

# High Cohesion

> High Cohesion es un patrón GRASP que guía la asignación de responsabilidades para mantener alta la cohesión de los objetos y, como efecto secundario, favorecer el bajo acoplamiento.

Problema: ¿Cómo mantener los objetos enfocados, comprensibles y manejables, y como efecto secundario, favorecer el bajo acoplamiento? Solución: Asignar una responsabilidad de modo que la cohesión permanezca alta. Usar esto para evaluar alternativas. Una clase con baja cohesión hace muchas cosas no relacionadas o demasiado trabajo; es difícil de comprender, reutilizar, mantener y es frágil ante cambios. Ejemplo: si Register crea el Payment y lo asocia a Sale, Register asume parte de la responsabilidad de makePayment; si continúa asumiendo trabajo de muchas operaciones del sistema, se vuelve inflado e incohesivo. En cambio, delegar la creación del Payment a Sale mantiene alta la cohesión en Register. El segundo diseño, que soporta alta cohesión y bajo acoplamiento, es deseable. Como Low Coupling, este principio se debe tener en cuenta en todas las decisiones de diseño; es un principio evaluativo. Una clase con alta cohesión tiene un número relativamente pequeño de métodos, con funcionalidad muy relacionada, y no hace demasiado trabajo; colabora con otros objetos para compartir el esfuerzo si la tarea es grande. Ventajas: fácil de mantener, comprender y reutilizar; simplifica mantenimiento y mejoras; el grano fino de funcionalidad relacionada aumenta el potencial de reutilización. Analogía: una persona que asume demasiadas responsabilidades no relacionadas no es efectiva; sufre de baja cohesión.

## Relacionado

- [[cohesion]]
- [[low-coupling]]
- [[controller]]
- [[creator]]

## Lo mencionan

- [[grasp]]
- [[information-expert]]
- [[low-coupling]]
- [[controller]]
- [[cohesion]]
- [[facade-controller]]
- [[use-case-controller]]
- [[bloated-controller]]
- [[modular-design]]
