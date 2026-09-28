---
titulo: "Secuenciador Cableado Asíncrono"
tipo: concepto
tags: ["secuenciador","asincrono","logica-cableada","microoperaciones"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [74]
veces_en_examen: 0
---

# Secuenciador Cableado Asíncrono

> Secuenciador de lógica cableada que no lanza una nueva operación hasta recibir señales de que las operaciones precedentes terminaron y de que el órgano que debe realizarla está libre.

El secuenciador recibe de los diferentes órganos señales indicando que han terminado las operaciones ordenadas y que se liberan, y también puede comprobar su estado. No lanzará una nueva operación más que después de haber quedado advertido de que las operaciones precedentes han sido ejecutadas completamente y de haberse asegurado de que el órgano que debe realizarla está libre.

En el esquema, las compuertas AND representan simbólicamente que solo se pasa a las siguientes microoperaciones siempre que el conjunto de las anteriores haya finalizado.

Diferencias con el síncrono: el síncrono es más conservador, mientras que el asíncrono es más transgresor, porque se basa en el ciclo de memoria desconociendo cuánto le lleva a cada ciclo estabilizarse. Por lo tanto, debe haber una mejor utilización de los recursos de los distintos órganos para que acompañen al asincrónico.

## Relacionado

- [[secuenciador-de-logica-cableada]]
- [[secuenciador-cableado-sincrono]]

## Lo mencionan

- [[secuenciador-de-logica-cableada]]
