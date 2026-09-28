---
titulo: "Remote Procedure Call (RPC)"
tipo: concepto
tags: ["rpc","red","llamadas","interaccion"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [280]
veces_en_examen: 0
---

# Remote Procedure Call (RPC)

> Remote Procedure Call (RPC) es un estilo de interacción modelado sobre las llamadas a procedimientos de los lenguajes imperativos, en el que el procedimiento llamado se encuentra en otra parte de la red.

El programador escribe la llamada como si fuera a un procedimiento local (con alguna variación sintáctica); la llamada se traduce a un mensaje enviado a un elemento remoto donde se invoca el procedimiento real. Finalmente, los resultados se envían de vuelta como mensaje al elemento llamante. RPC data de los años 1980 y ha tenido muchas modificaciones. Las primeras versiones eran síncronas y enviaban los parámetros como texto. La versión más reciente, gRPC, transfiere los parámetros en binario, es asincrónica y soporta autenticación, streaming bidireccional, control de flujo, bindings bloqueantes o no bloqueantes, cancelación y timeouts; usa HTTP 2.0 para el transporte.

## Relacionado

- [[grpc]]
- [[http]]

## Lo mencionan

- [[interaction-styles]]
- [[grpc]]
