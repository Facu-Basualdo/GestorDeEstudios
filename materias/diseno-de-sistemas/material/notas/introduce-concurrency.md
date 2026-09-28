---
titulo: "Introduce Concurrency"
tipo: concepto
tags: ["performance","tacticas","concurrencia","threads","paralelismo"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [181]
veces_en_examen: 0
---

# Introduce Concurrency

> Táctica de gestión de recursos que procesa pedidos en paralelo para reducir el tiempo bloqueado.

Si los pedidos pueden procesarse en paralelo, el tiempo bloqueado puede reducirse. La concurrencia puede introducirse procesando diferentes flujos de eventos en diferentes hilos, o creando hilos adicionales para procesar diferentes conjuntos de actividades. Una vez introducida la concurrencia, se pueden elegir políticas de scheduling para lograr los objetivos deseables usando la táctica schedule resources.

## Relacionado

- [[schedule-resources]]
- [[manage-resources]]

## Lo mencionan

- [[manage-resources]]
