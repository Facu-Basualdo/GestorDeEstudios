---
titulo: "Ley de Demeter"
tipo: concepto
tags: ["acoplamiento","diseno","poo","demeter"]
temas: ["[[principios-de-diseno-complementarios]]"]
fuente: "solid y grasp.pdf"
paginas: [7]
veces_en_examen: 0
---

# Ley de Demeter

> Guía de diseño en la programación orientada a objetos que busca reducir el acoplamiento entre objetos y promover un código más modular y fácil de mantener.

También conocida como el principio del mínimo conocimiento.

- Es un mecanismo de detección de acoplamiento: una clase solamente llama a funciones de otra clase con la cual se relaciona, ninguna que esté fuera o encadenada.
- La función solo debe interactuar con su propio ámbito, los objetos que crea o recibe, o con las funciones y estados de esa propia clase; salirse de ahí está incumpliendo la ley.
- Un objeto solo debe interactuar con sus "amigos inmediatos" y no con objetos a los que accede indirectamente a través de otros.

Sobre el incumplimiento de la Ley:
- No hay una única forma de resolverlo; es más bien como una alarma para indicar que las relaciones no están bien distribuidas.
- Hay que hacer que llamen dentro de cada clase y evitar así el encadenamiento.
- Una buena arquitectura es muy buena para el desacoplamiento, entonces será mucho más difícil violar esta ley.
- Teniendo en claro nuestro dominio no deberían surgir problemas de este tipo.


