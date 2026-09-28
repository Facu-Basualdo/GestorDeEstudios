---
titulo: "System Operation"
tipo: concepto
tags: ["analisis","eventos","sistema","ssd","operaciones"]
temas: ["[[controladores-y-arquitectura-en-capas]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [32]
veces_en_examen: 0
---

# System Operation

> Una operación de sistema es un evento de entrada principal sobre el sistema, como presionar un botón que genera un pedido de trabajo.

Las operaciones de sistema se exploraron por primera vez durante el análisis en el SSD (System Sequence Diagram).

Son los principales eventos de entrada sobre el sistema. Por ejemplo:
- Cuando un cajero presiona el botón "End Sale" en una terminal POS, genera un evento de sistema que indica "la venta ha terminado".
- Cuando un escritor presiona el botón "spell check" en un procesador de texto, genera un evento de sistema que indica "realizar una verificación ortográfica".

Durante el diseño, las operaciones de sistema descubiertas en el análisis de comportamiento se asignan a una o más clases controller, como `Register`.

En un modelo de análisis pueden asignarse a la clase `System`, pero eso no significa que una clase de software llamada `System` las cumpla en el diseño.

## Relacionado

- [[controller]]

## Lo mencionan

- [[controller]]
