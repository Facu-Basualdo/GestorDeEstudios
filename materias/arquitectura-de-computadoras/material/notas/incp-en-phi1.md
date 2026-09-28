---
titulo: "INCP en φ1"
tipo: concepto
tags: ["abacus","incp","contador-de-programa","fases","ecuaciones"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [84]
veces_en_examen: 0
---

# INCP en φ1

> Justificación de por qué la señal INCP se ejecuta en la fase φ1 en Abacus: todavía no se decodificó la instrucción y así se simplifican las ecuaciones.

INCP se hace en φ1 porque se ejecuta en el momento en que termina de leerse la instrucción, pero todavía no se decodificó y no se conoce de qué familia es; cuando se conozca será demasiado tarde en instrucciones que duren un solo ciclo.

Además, esto simplifica las ecuaciones de manera tal que ENI e INCP se ejecuten en el mismo momento, ahorrando componentes.

## Relacionado

- [[secuenciador-tratamiento-de-las-instrucciones]]

## Lo mencionan

- [[sap-en-abacus]]
- [[resumen-de-las-ecuaciones-del-secuenciador-de-abacus]]
