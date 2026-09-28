---
titulo: "Sumador Binario en Serie"
tipo: concepto
tags: ["sumador","serie","combinacional","acarreo","cpu"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [22]
veces_en_examen: 0
---

# Sumador Binario en Serie

> Circuito sumador que usa un solo sumador completo y un elemento acumulador para conservar el arrastre de salida, procesando los bits en serie.

Las operaciones en serie son más lentas y requieren menos equipo. El circuito sumador en serie usa solamente un circuito sumador completo y un elemento acumulador para conservar el arrastre de salida generado. Las entradas A y B son trenes de pulso, las cuales contienen las cadenas que se pretenden sumar.

Ventaja: Simpleza y economía del circuito con un solo sumador de dos compuertas (ORX, ORX) más una suma y multiplicación lógica (AND y OR) logramos hacer un sumador completo con un circuito que permita llevar el acarreo. También evita el lag.

Desventaja: Consume muchos ciclos de CPU y mantiene ocupado al procesador lo que dure la suma, dependiendo del tren de entrada N ciclos y si lo guardo N+1, es decir, dura tanto como dígitos tengan los operandos.

## Relacionado

- [[sumador-completo]]

