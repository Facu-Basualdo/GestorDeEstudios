---
titulo: "Instrucción sap en Abacus"
tipo: concepto
tags: ["abacus","instruccion-sap","salto-condicional","salto-incondicional"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [82]
veces_en_examen: 0
---

# Instrucción sap en Abacus

> Instrucción de Abacus que realiza un salto incondicional o condicional según el signo positivo del acumulador, con el mismo cronograma en ambos casos.

Instrucción de Salto Incondicional y Condicional si Signo de AC es Positivo.

Ambos dan el mismo cronograma, con la siguiente diferencia:
- SAP si la condición es satisfecha → AP = V → salto incondicional.
- SAP si la condición NO es satisfecha → AN = V → salto condicional.

Si hubo salto → INCP y luego se sobrescribe: (D) → P.
Si no hubo salto → INCP y se sigue desde ahí.

Cronograma: FASE 1, DECO, leer instrucción, regeneración.

## Relacionado

- [[incp-en-phi1]]

## Lo mencionan

- [[biestables-de-estado-en-abacus]]
- [[resumen-de-las-ecuaciones-del-secuenciador-de-abacus]]
