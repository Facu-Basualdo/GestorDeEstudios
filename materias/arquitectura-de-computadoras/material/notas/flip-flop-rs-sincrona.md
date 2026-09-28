---
titulo: "Flip-Flop RS Síncrona"
tipo: concepto
tags: ["flip-flop","rs","sincrona","clock","reloj"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [25]
veces_en_examen: 0
---

# Flip-Flop RS Síncrona

> Biestable sincronizado por un pulso de reloj, donde las entradas S y R solo se aplican a las compuertas NOR durante el pulso de reloj.

Operación Síncrona: El biestable está sincronizado por un pulso de reloj. La salida cambia, solo en un pulso de reloj, en respuesta a un cambio en la entrada.

La mayoría de los acontecimientos en computadores digitales están sincronizados por un pulso de reloj, así que los cambios ocurren solo en un pulso de reloj.

Las entradas “S” y “R” se aplican a las entradas de las compuertas NOR solo durante el pulso de reloj. Es idéntico al asincrónico, nada más que se agrega una señal de “Clock”, solamente cuando esté en verdadero será posible el funcionamiento del Flip-Flop.

La necesidad de que sea o no sincrónico está relacionado con el tiempo de respuesta del componente. Cuando el componente requiere un tiempo de respuesta, es necesario diseñarlo sincrónico, de manera tal que el espacio de tiempo esté regulado por el “Clock”.

## Relacionado

- [[flip-flop-rs-asincrona]]

## Lo mencionan

- [[flip-flop-d]]
- [[flip-flop-jk]]
