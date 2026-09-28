---
titulo: "Flip-Flop RS Asíncrona"
tipo: concepto
tags: ["flip-flop","rs","asincrona","nor","set","reset"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [24]
veces_en_examen: 0
---

# Flip-Flop RS Asíncrona

> Biestable asíncrono, también llamado Latch SR, formado por dos compuertas NOR realimentadas, con entradas Set y Reset que cambian su salida tras un breve retardo ante cambios en la entrada.

Operación Asíncrona: La salida del biestable cambia, tras un breve tiempo de retardo, en respuesta a un cambio en la entrada. Problema: Tiende a desincronizarse.

También se le conoce como “Latch SR”. Formado por dos compuertas NOR montadas en oposición, con sus salidas realimentadas. La entrada “Set” indica “puesta a uno”, y la entrada “Reset”, “puesta a cero”. En ausencia de señal a la entrada, el Flip-Flop mantiene el valor almacenado, lo que lo convierte en un componente ideal para almacenar un valor lógico de manera temporal.

Tabla de Funcionamiento:
- Si R = S = 0 → Q(t + 1) = Q(t) → Mantiene su valor.
- Si S = 1 y R = 0 → Q(t + 1) = 1 → Set
- Si S = 0 y R = 1 → Q(t + 1) = 0 → Reset
- Si S = R = 1 → Q(t + 1) = 0 ó 1 → Indeterminación.

S = R = 1 se denominan estados indeseables porque en el campo de los números reales es imposible determinar qué señal ocurrió primero, si la del Set o la del Reset.

## Relacionado

- [[biestable]]

## Lo mencionan

- [[flip-flop-rs-sincrona]]
- [[flip-flop-d]]
- [[flip-flop-jk]]
