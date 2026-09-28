---
titulo: "Secuenciador Microprogramado: Modelo Wilkes"
tipo: concepto
tags: ["secuenciador","microprogramado","wilkes","memoria-de-control","microinstrucciones"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [87]
veces_en_examen: 0
---

# Secuenciador Microprogramado: Modelo Wilkes

> Modelo de secuenciador microprogramado que abandona el conjunto de ecuaciones lógicas y arma una memoria de control donde cada palabra está asociada a una microorden y contiene la dirección de la siguiente microinstrucción.

Abandona el concepto de secuenciador como conjunto de ecuaciones lógicas y arma una memoria de control, donde cada palabra de control está relacionada con una y solo una microorden, y donde cada palabra corresponde a una columna del cronograma.

Cada bit está relacionado con una señal de gobierno. Cada microinstrucción tiene asociada, en los bits de menor peso, la dirección de la siguiente microinstrucción. El iniciador es el código de operación, que indica la dirección de la primera microorden.

Funcionamiento:
- En el primer batido de reloj, el código de operación direcciona la primera microinstrucción que debe desarrollarse del microprograma relacionado a la instrucción, mediante el decodificador SMC, que direcciona una memoria dedicada al microprograma.
- Por corrientes coincidentes se ubican los microprogramas, los cuales generan las microórdenes necesarias para un batido de reloj.
- Desde los bits de menor peso de la memoria se obtiene la dirección del siguiente conjunto de microórdenes para el siguiente batido del reloj, redireccionando a través del decodificador SMC, y el ciclo de direccionamientos se repite hasta llegar a las microórdenes que lanzan la búsqueda de la siguiente instrucción.

Biestable de Estado “E”: este bit de estado indica si se debe o no realizar el salto; de tal forma, los AND redireccionan a una microinstrucción u otra. El salto tiene que estar cableado (único lugar donde se incluyen compuertas lógicas).

## Relacionado

- [[modelo-microprogramado]]
- [[secuenciador-de-logica-cableada]]

