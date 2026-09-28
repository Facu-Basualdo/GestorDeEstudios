---
titulo: "Interaction Styles"
tipo: concepto
tags: ["interfaces","comunicacion","coordinacion","estilos"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [280]
veces_en_examen: 0
---

# Interaction Styles

> Los estilos de interacción son las distintas maneras en que las interfaces se conectan para que los elementos se comuniquen (transferir datos) y se coordinen (transferir control).

La elección del estilo depende de la combinación entre comunicación y coordinación, y de si los elementos están co-ubicados o desplegados remotamente. Ejemplos:
- Interfaces de elementos co-ubicados pueden acceder eficientemente a grandes cantidades de datos mediante buffers de memoria compartida local.
- Elementos que se espera estén disponibles al mismo tiempo pueden usar llamadas síncronas.
- Elementos desplegados en un entorno distribuido no confiable dependen de interacciones asincrónicas basadas en producir y consumir eventos, intercambiados por colas de mensajes o flujos de datos.
El material se centra en dos estilos muy usados: RPC y REST.

## Relacionado

- [[rpc]]
- [[rest]]

## Lo mencionan

- [[designing-an-interface]]
