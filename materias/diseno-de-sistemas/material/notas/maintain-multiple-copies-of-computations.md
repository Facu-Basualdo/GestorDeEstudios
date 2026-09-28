---
titulo: "Maintain Multiple Copies of Computations"
tipo: concepto
tags: ["performance","tacticas","replicacion","microservicios","load-balancer"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [181]
veces_en_examen: 0
---

# Maintain Multiple Copies of Computations

> Táctica de gestión de recursos que mantiene copias duplicadas de cómputos para reducir la contención que ocurriría si todo el servicio se asignara a una sola instancia.

Reduce la contención que ocurriría si todos los pedidos de servicio se asignaran a una única instancia. Los servicios replicados en una arquitectura de microservicios o los servidores web replicados en un server pool son ejemplos de réplicas de cómputo. Un load balancer es un software que asigna trabajo nuevo a uno de los servidores duplicados disponibles; los criterios de asignación varían, desde un esquema round-robin hasta asignar el próximo pedido al servidor menos ocupado. El patrón load balancer se discute en detalle en la Sección 9.4.

## Relacionado

- [[load-balancer]]
- [[round-robin]]
- [[manage-resources]]

## Lo mencionan

- [[manage-resources]]
- [[load-balancer]]
