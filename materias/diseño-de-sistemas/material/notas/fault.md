---
titulo: "Fault"
tipo: concepto
tags: ["defecto","falla","disponibilidad","recuperacion","fault","failure","tacticas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [73,78,79,80,81]
veces_en_examen: 0
---

# Fault

> Causa de una failure; puede ser interna o externa al sistema considerado.

Un fault (defecto) es la causa de una failure. Puede ser interno o externo al sistema bajo consideración. Los estados intermedios entre la ocurrencia de un fault y la ocurrencia de una failure se denominan errors (errores). Los faults pueden prevenirse, tolerarse, eliminarse o pronosticarse; mediante estas acciones, un sistema se vuelve "resiliente" a los faults. Si el código que contiene un fault se ejecuta pero el sistema se recupera sin desviación observable del comportamiento especificado, no se dice que haya ocurrido una failure.

## Relacionado

- [[failure]]
- [[error]]
- [[availability-tactics]]

## Lo mencionan

- [[availability]]
- [[failure]]
- [[error]]
- [[availability-tactics]]
