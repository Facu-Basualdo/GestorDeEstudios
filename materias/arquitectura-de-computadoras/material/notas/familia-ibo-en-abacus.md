---
titulo: "Familia IBO en Abacus"
tipo: concepto
tags: ["abacus","familia-ibo","instrucciones","busqueda-de-operando"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [79]
veces_en_examen: 0
---

# Familia IBO en Abacus

> Familia de instrucciones de Abacus que, tras la búsqueda de instrucción, requiere una búsqueda de operando antes de ejecutar la operación.

I y O indican en qué fase se encuentra. Con I = 1, O = 0 se tiene la fase de búsqueda de la instrucción (φ0/θ0 y φ1/θ1); al término de esta, con I = 0, O = 1, comienza la fase de búsqueda del operando y se reutilizan φ0/θ0 y φ1/θ1.

Las señales sum / sus / and / or deben estar activas durante todo el tiempo que dure la operación; lo que hacen es sostener la operación.

El cronograma muestra un ciclo de búsqueda de instrucción (DECO, leer instrucción, regeneración) y un ciclo de búsqueda de operando (leer operando, regeneración).

## Relacionado

- [[biestables-de-estado-en-abacus]]
- [[distribuidor-de-dos-fases-en-abacus]]

## Lo mencionan

- [[secuenciador-tratamiento-de-las-instrucciones]]
- [[secuenciador-tratamiento-de-los-indicadores-de-estado]]
- [[ecuaciones-para-biestables-de-estado-en-abacus]]
- [[ind-en-abacus]]
- [[modelo-microprogramado]]
