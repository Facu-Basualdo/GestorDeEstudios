---
titulo: "La Báscula o El Astable"
tipo: concepto
tags: ["astable","biestable","flip-flop-jk","circuito-555","multivibrador"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [28]
veces_en_examen: 0
---

# La Báscula o El Astable

> Sistema sin estados estables definidos que conmuta constantemente entre dos estados inestables, implementable con un flip-flop JK o con el circuito integrado 555.

Puede lograrse conectando las dos entradas de un FF JK o utilizando el circuito integrado 555 en electrónica. Cuando la entrada T se mantiene en estado alto, el biestable cambia constantemente de estado; la velocidad de cambio está determinada por el tiempo de respuesta de los circuitos y es ajustable mediante los temporizadores. Estos biestables pueden emplearse para crear relojes que generan impulsos regularmente espaciados.

Ejemplo de temporización: se presentan señales de Set y Reset con la misma duración inicial (Tita); luego se muestra cómo enviar una señal de Reset con el doble de la duración de una señal de Set.

Implementación del astable: mediante un circuito multivibrador que no tiene ningún estado estable, por lo que posee dos estados inestables entre los que conmuta, permaneciendo en cada uno de ellos un tiempo determinado (manejado por los tiempos de carga y descarga de cada condensador).

## Relacionado

- [[flip-flop-jk]]

