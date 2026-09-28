---
titulo: "Forward Error Recovery"
tipo: concepto
tags: ["disponibilidad","recuperacion-de-errores","patron","redundancia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [94]
veces_en_examen: 0
---

# Forward Error Recovery

> Patrón de disponibilidad que permite salir de un estado indeseable avanzando a un estado deseable, a menudo mediante capacidades de corrección de errores incorporadas, como la redundancia de datos.

Forward error recovery provee una forma de salir de un estado indeseable moviéndose hacia adelante a un estado deseable. Frecuentemente se apoya en capacidades de corrección de errores incorporadas, como la redundancia de datos, para que los errores puedan corregirse sin necesidad de volver a un estado previo o de reintentar. Encuentra un estado seguro, posiblemente degradado, desde el cual la operación puede continuar.

## Relacionado

- [[retry]]

