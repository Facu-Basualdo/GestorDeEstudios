---
titulo: "Instrucción pac en Abacus"
tipo: concepto
tags: ["abacus","instruccion-pac","puesta-a-cero","acumulador"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [81]
veces_en_examen: 0
---

# Instrucción pac en Abacus

> Instrucción de Abacus que pone a cero el acumulador y solo se realiza en la fase de búsqueda de la instrucción, sin ciclo de operando.

Instrucción de Puesta a Cero del Acumulador.

Se hace de forma sencilla, ya que no interesa la condición de direccionamiento ni la dirección, y solamente se realiza en la fase de búsqueda de la instrucción. No utiliza ciclo de operando.

pac debe sostenerse todo el tiempo que dure la operación. En este caso dura muy poco, porque la señal de gobierno PAC es impulsional.

La señal no se dibuja a un costado de la ALU como las demás; esta va dirigida al AC. Básicamente produce un reset en los registros del acumulador.


## Lo mencionan

- [[resumen-de-las-ecuaciones-del-secuenciador-de-abacus]]
