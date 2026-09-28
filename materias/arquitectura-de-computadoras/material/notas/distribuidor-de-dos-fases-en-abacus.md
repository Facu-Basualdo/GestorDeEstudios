---
titulo: "Distribuidor de dos fases en Abacus"
tipo: concepto
tags: ["abacus","fases","distribuidor-de-fases","biestables"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [78]
veces_en_examen: 0
---

# Distribuidor de dos fases en Abacus

> Explicación de por qué Abacus usa solamente dos fases: las señales φ y θ se reutilizan para los ciclos de instrucción y de operando porque nunca se chocan.

Al comienzo se ejecutan φ0 y θ0, terminan y arrancan φ1 y θ1; en ese punto, φ0 y θ0 pasan a ser φ2 y θ2. Lo mismo ocurre con φ1 y θ1: al término de su ejecución, pasan a ser φ3 y θ3. Se aprovechan los biestables I y O.

Con I = 1 y O = 0 se tienen φ0/θ0 y φ1/θ1. Con I = 0 y O = 1, φ2 = φ0 y θ2 = θ0; φ3 = φ1 y θ3 = θ1.

Esto es útil por dos motivos:
1. Ahorra muchos componentes y optimiza el distribuidor de fases.
2. φ0 y θ0 son iguales a φ2 y θ2; así como φ1 y θ1 son iguales a φ3 y θ3.

## Relacionado

- [[biestables-de-estado-en-abacus]]
- [[distribuidor-de-fases]]

## Lo mencionan

- [[ecuaciones-de-senales-para-la-operacion-p-s]]
- [[familia-ibo-en-abacus]]
