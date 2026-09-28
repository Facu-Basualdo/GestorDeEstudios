---
titulo: "Diagrama de despliegue"
tipo: concepto
tags: ["diagramas","arquitectura","despliegue","sistemas-distribuidos","diagrama","red"]
temas: ["[[arquitectura-y-middleware]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [8,12]
veces_en_examen: 0
---

# Diagrama de despliegue

> Diagrama que muestra computadoras, servidores físicos que alojan más de un servidor lógico y cómo se relacionan a través de la red.

El ejemplo de cliente-servidor se representa con un diagrama que contempla nodos, ya sean físicos o virtuales. En el ejemplo hay 4 servidores y 12 clientes. Los servidores tienen cierta robustez para estar atendiendo todo el tiempo los servicios que se solicitan.

El diagrama oculta a qué servidor está asociado cada proceso. Los procesos están conectados a una red común, pero no indica quién conoce a quién.

No son diagramas UML: son instancias de proceso que están interactuando y muestran a qué servidor se comunica cada proceso.

Importante: nunca se puede modelar una arquitectura con un solo diagrama, porque cada vista puede mostrar algo diferente y priorizar cierta información por sobre otra.

## Relacionado

- [[cliente-servidor]]
- [[arquitectura-en-capas]]

## Lo mencionan

- [[arquitectura-en-capas]]
