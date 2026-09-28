---
titulo: "Patterns for Performance"
tipo: concepto
tags: ["performance","patrones","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [188]
veces_en_examen: 0
---

# Patterns for Performance

> Conjunto de patrones de software desarrollados para manejar diversos aspectos de la performance.

Los problemas de performance han afectado a los ingenieros de software por décadas, por lo que existe un rico conjunto de patrones para manejar varios aspectos de la performance. Algunos patrones sirven para múltiples propósitos; por ejemplo, el patrón circuit breaker, identificado antes como un patrón de disponibilidad, también tiene un beneficio para performance porque reduce el tiempo de espera por servicios que no responden. Los patrones que se introducen en la sección son service mesh, load balancer, throttling y map-reduce.

## Relacionado

- [[circuit-breaker]]
- [[load-balancer]]
- [[service-mesh]]
- [[throttling]]
- [[map-reduce]]

## Lo mencionan

- [[load-balancer]]
