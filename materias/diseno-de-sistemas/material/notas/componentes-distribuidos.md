---
titulo: "Componentes Distribuidos"
tipo: concepto
tags: ["componentes","distribuidos","arquitectura","middleware"]
temas: ["[[otros-estilos-arquitectonicos]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [14]
veces_en_examen: 0
---

# Componentes Distribuidos

> Arquitectura que separa lógicamente cada capa para que los elementos se dediquen exclusivamente a la capa asignada.

A diferencia de la propuesta anterior, se divide la capa del servidor en componentes (u objetos). Los componentes se comunican entre sí a través de una capa llamada middleware, que permite que estén hechos con diferentes lenguajes. Cada componente se puede desarrollar de manera separada y los clientes consumen esos servicios. En la teoría funciona bien, pero en la práctica es difícil saber si un servicio se dedica exclusivamente a su capa. Es necesario tener bien definidas las interfaces. Está basada en un estándar de la OMG (CORBA), pero no tuvo mucho éxito porque cada empresa implementó su propia tecnología; por ejemplo, .NET intentó algo parecido dentro de Windows. Sus desventajas: son mucho más complejos de diseñar y en la práctica es muy complicado aplicar algo tan separado en capas. Esta arquitectura es la predecesora de los microservicios.

## Relacionado

- [[middleware]]
- [[microservicios]]

## Lo mencionan

- [[middleware]]
- [[peer-to-peer-p2p]]
- [[orientada-a-servicios-soa]]
- [[software-as-a-service-saas]]
