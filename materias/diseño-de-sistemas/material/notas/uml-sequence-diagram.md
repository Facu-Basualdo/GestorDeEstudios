---
titulo: "UML Sequence Diagram"
tipo: concepto
tags: ["uml","diagramas","comportamiento"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [413]
veces_en_examen: 0
---

# UML Sequence Diagram

> Diagrama UML que muestra una secuencia de interacciones entre instancias de elementos extraídos de la documentación estructural, ordenadas en el tiempo.

Es útil para identificar dónde deben definirse interfaces al diseñar un sistema. Muestra solo las instancias que participan en el escenario documentado. Tiene dos dimensiones: la vertical representa el tiempo y la horizontal representa las distintas instancias. Las interacciones se ordenan en secuencia temporal de arriba hacia abajo. Las instancias tienen una lifeline (línea de vida), dibujada como una línea vertical punteada. La secuencia suele comenzar con un actor a la izquierda. Las instancias interactúan enviando mensajes, mostrados como flechas horizontales; un mensaje puede ser un mensaje por red, una llamada a función o un evento enviado por una cola. Una flecha con punta rellena en línea sólida es un mensaje síncrono; una flecha con punta abierta es asíncrono; la flecha punteada es un mensaje de retorno. Las barras de execution occurrence a lo largo de la lifeline indican que la instancia está procesando o bloqueada esperando un retorno. Los diagramas de secuencia no son explícitos sobre concurrencia; para eso se usan activity diagrams.

## Relacionado

- [[uml-communication-diagram]]
- [[uml-activity-diagram]]

## Lo mencionan

- [[trace]]
- [[trace-oriented-notation]]
- [[uml-communication-diagram]]
- [[uml-activity-diagram]]
