---
titulo: "Detect Message Delivery Anomalies"
tipo: concepto
tags: ["seguridad","deteccion","man-in-the-middle","red","tacticas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [221,222,223,224,225,230,231,232]
veces_en_examen: 0
---

# Detect Message Delivery Anomalies

> Táctica que busca detectar potenciales man-in-the-middle attacks, en los que una parte maliciosa intercepta y posiblemente modifica mensajes.

Si los tiempos de entrega de mensajes son normalmente estables, al verificar el tiempo que tarda en entregarse o recibirse un mensaje es posible detectar comportamientos temporales sospechosos. De manera similar, un número anormal de conexiones y desconexiones puede indicar este tipo de ataque.

## Relacionado

- [[man-in-the-middle-attack]]

## Lo mencionan

- [[detect-attacks]]
- [[man-in-the-middle-attack]]
- [[intercepting-validator]]
