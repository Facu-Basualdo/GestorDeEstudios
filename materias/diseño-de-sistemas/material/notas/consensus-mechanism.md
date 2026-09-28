---
titulo: "Consensus Mechanism"
tipo: concepto
tags: ["consenso","distribuidos","algoritmos","fallos"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [318]
veces_en_examen: 0
---

# Consensus Mechanism

> Mecanismo en el que los participantes de un sistema distribuido llegan a un acuerdo incluso cuando ocurren fallos de computadoras o de red.

Paxos y otros algoritmos de coordinación distribuida dependen de un consensus mechanism para permitir que los participantes alcancen un acuerdo incluso cuando ocurren fallos de computadoras o de red.
Estos algoritmos son notoriamente complicados de diseñar correctamente e incluso implementar un algoritmo probado es difícil por sutilezas de semántica de lenguajes e interfaces de red.

## Relacionado

- [[paxos]]
- [[data-coordination-distributed-system]]

## Lo mencionan

- [[data-coordination-distributed-system]]
- [[distributed-lock]]
- [[paxos]]
