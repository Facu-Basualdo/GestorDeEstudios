---
titulo: "Microservicios"
tipo: concepto
tags: ["microservicios","arquitectura","soa","escalabilidad"]
temas: ["[[servicios-y-microservicios]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [25]
veces_en_examen: 0
---

# Microservicios

> Arquitectura de servicios de escala más pequeña que SOA, donde cada elemento o servicio es autónomo.

Es difícil diferenciarlos de una arquitectura SOA; la escala debería ser incluso más pequeña que SOA porque es muy importante que sean autónomos. Se puede relacionar con el primer principio de SOLID: Responsabilidad Única. Es una arquitectura muy escalable, pero a su vez más compleja de manejar porque hay más módulos. Un diagrama muestra a la izquierda lo que hoy se considera una arquitectura monolítica y a la derecha microservicios que trabajan de manera autónoma y se despliegan como nodos. Al estar todo tan dividido, se necesita una capa que junte todos los microservicios, generalmente llamada capa API.

## Relacionado

- [[orientada-a-servicios-soa]]

## Lo mencionan

- [[estilos-arquitectonicos]]
- [[componentes-distribuidos]]
- [[orientada-a-servicios-soa]]
