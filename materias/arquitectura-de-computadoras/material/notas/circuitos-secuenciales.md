---
titulo: "Circuitos Secuenciales"
tipo: concepto
tags: ["circuitos","secuenciales","sincronicos","memoria","automatas"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [23]
veces_en_examen: 0
---

# Circuitos Secuenciales

> Circuitos sincrónicos cuyas salidas dependen de las entradas, del estado actual y del tiempo, y que poseen memoria para almacenar el estado anterior del autómata finito.

Funcionan sobre la base del tiempo. Son circuitos sincrónicos. Las salidas dependen de las entradas, del estado actual y del tiempo. Posee una memoria que almacena el estado anterior del AF.

Donde:
- Q(t) = H(t) → Estado del AF en 't'. Historia del AF.
- H(t) es la historia de todos los distintos estados del autómata.
- Q(t) es el último estado del autómata.
- Como nuestro caso de estudio es un AF de un solo punto de memoria, solamente es capaz de recordar el último estado. Por lo tanto, utilizamos Q(t).
- E(t) → Entradas del AF en 't'.
- F → Función de salida del AF.
- S(t + 1) → Devuelve la salida del AF en el estado siguiente.
- Q(t + 1) → Función de transición que actualiza el estado del AF.
- G → Función que debe explicar el cambio de estado del AF.

## Relacionado

- [[automata-finito]]
- [[funciones-de-transicion]]
- [[tabla-de-estados]]
- [[tabla-de-excitacion]]

## Lo mencionan

- [[tabla-de-estados]]
- [[tabla-de-excitacion]]
