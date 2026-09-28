---
titulo: "Bound Queue Sizes"
tipo: concepto
tags: ["performance","tacticas","colas","recursos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [181]
veces_en_examen: 0
---

# Bound Queue Sizes

> Táctica de gestión de recursos que controla el número máximo de arribos en cola y, por lo tanto, los recursos usados para procesarlos.

Controla el máximo de arribos encolados y consecuentemente los recursos usados para procesarlos. Si se adopta, hay que establecer una política para cuando las colas se desbordan y decidir si no responder a los eventos perdidos es aceptable. Esta táctica se combina frecuentemente con la táctica limit event response.

## Relacionado

- [[limit-event-response]]
- [[manage-resources]]

## Lo mencionan

- [[manage-resources]]
