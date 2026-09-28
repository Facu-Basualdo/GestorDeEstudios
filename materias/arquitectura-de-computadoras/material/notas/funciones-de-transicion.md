---
titulo: "Funciones de Transición"
tipo: concepto
tags: ["automatas","transicion","estados","ecuaciones"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [20]
veces_en_examen: 0
---

# Funciones de Transición

> Ecuaciones que calculan la respuesta y el estado siguiente de un autómata a partir del estado actual y la entrada.

Si Q(t) es el estado en el instante 't', la respuesta a E(t) es S(t+1) = F[Q(t), E(t)] (1). El estado Q(t+1) en el instante 't+1' depende solo de su estado anterior Q(t) y de la entrada E(t), expresado como Q(t+1) = G[Q(t), E(t)] (2). Las respuestas del autómata se calculan paso a paso según las ecuaciones (1) y (2), donde Q(t+1) y S(t+1) dependen únicamente de Q(t), E(t), y no de la historia anterior. Esto asegura que el autómata no pueda distinguir entre historias que lo llevan al mismo estado Q(t).

## Relacionado

- [[automata-finito]]
- [[estados-internos]]

## Lo mencionan

- [[circuitos-secuenciales]]
