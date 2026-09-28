---
titulo: "Biestables de Estado en Abacus"
tipo: concepto
tags: ["abacus","biestables","ciclo-de-instruccion","ciclo-de-operando","secuenciador"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [77]
veces_en_examen: 0
---

# Biestables de Estado en Abacus

> Conjunto de biestables que indican el estado del secuenciador de Abacus: marcha/detención, dígito de signo, ciclo de instrucción (I) y ciclo de operando (O).

- Marcha/Detención: anula el Clock y el secuenciador queda congelado en una fase.
- Dígito de Signo: es para el salto condicional por signo de AC positivo.
- Ciclo de Instrucción: I = 1 indica que se encuentra en ciclo de instrucción.
- Ciclo de Operando: O = 1 indica que se encuentra en ciclo de operando.

Existe la combinación I = O = 0, que es una condición para la búsqueda de operando con modo de direccionamiento indirecto.

## Relacionado

- [[ind-en-abacus]]
- [[sap-en-abacus]]

## Lo mencionan

- [[distribuidor-de-dos-fases-en-abacus]]
- [[ecuaciones-para-biestables-de-estado-en-abacus]]
- [[familia-ibo-en-abacus]]
- [[resumen-de-las-ecuaciones-del-secuenciador-de-abacus]]
