---
titulo: "El Monoestable"
tipo: concepto
tags: ["flip-flop-rs","biestable","multivibrador","temporizador"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [27]
veces_en_examen: 0
---

# El Monoestable

> Tipo de flip-flop RS que tiene un estado estable (0) y otro casi estable (1), y que retorna al estado de equilibrio después de un impulso de entrada.

La entrada 'S' provoca que el biestable pase al estado casi estable (1) y, simultáneamente, la entrada 'R' se posiciona en 1, volviendo el sistema al estado de equilibrio (0). La duración de la señal de salida se ajusta mediante el temporizador, que después de un cierto tiempo produce un Reset y estabiliza el estado 0.

Implementación: mediante un circuito multivibrador que funciona secuencialmente. Cuando recibe una excitación exterior, cambia de estado y se mantiene en ese estado durante un periodo determinado por una constante de tiempo. Después de ese periodo, la salida del monoestable regresa a su estado original.


