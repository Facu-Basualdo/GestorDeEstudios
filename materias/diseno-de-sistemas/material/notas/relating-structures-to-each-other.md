---
titulo: "Relating Structures to Each Other"
tipo: concepto
tags: ["estructuras","mapeos","vistas","arquitectura"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [36]
veces_en_examen: 0
---

# Relating Structures to Each Other

> Las estructuras arquitectónicas ofrecen perspectivas distintas pero no son independientes: los elementos de una estructura se relacionan con elementos de otras, y en general los mapeos entre estructuras son muchos a muchos.

Un módulo en una estructura de descomposición puede manifestarse como uno, parte de uno o varios componentes en una estructura C&C, reflejando su "alter-ego" en runtime. La Figura 1.11 muestra un sistema cliente-servidor con dos módulos (client software y server software) y, en runtime, once componentes (diez clientes y el servidor) y diez conectores. Las dos vistas sirven para fines distintos: la vista C&C puede usarse para análisis de performance, predicción de cuellos de botella y gestión de tráfico de red, algo muy difícil o imposible con la vista de descomposición.

## Relacionado

- [[component-and-connector-structures]]
- [[map-reduce]]

