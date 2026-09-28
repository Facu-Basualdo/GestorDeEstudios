---
titulo: "Ecuaciones para los biestables de estado en Abacus"
tipo: concepto
tags: ["abacus","biestables","ecuaciones","ciclo-de-instruccion","ciclo-de-operando"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [85]
veces_en_examen: 0
---

# Ecuaciones para los biestables de estado en Abacus

> Ecuaciones que indican cuándo se debe hacer set o reset en los biestables de estado de ciclo de instrucción (I) y de ciclo de operando (O).

Para el biestable de estado del ciclo de instrucción:
- SI: se produce un set al final de un ciclo de búsqueda del operando.
- RI: se produce un reset al final del ciclo de búsqueda de la instrucción, para aquellas instrucciones que requieran búsqueda del operando (familia IBO y alm).

Para el biestable de estado del ciclo de operando:
- Las ecuaciones RO y SI están conectadas: cuando se hace un reset en O, debe hacerse un set en I, y viceversa.

## Relacionado

- [[biestables-de-estado-en-abacus]]
- [[familia-ibo-en-abacus]]
- [[alm-en-abacus]]

## Lo mencionan

- [[resumen-de-las-ecuaciones-del-secuenciador-de-abacus]]
