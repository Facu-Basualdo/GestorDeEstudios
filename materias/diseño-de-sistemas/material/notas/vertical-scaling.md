---
titulo: "Vertical Scaling"
tipo: concepto
tags: ["escalado","rendimiento","cloud","vm"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [312]
veces_en_examen: 0
---

# Vertical Scaling

> Estrategia para resolver la sobrecarga de un servicio ejecutándolo en un tipo de instancia más grande, que provee más del recurso necesario.

Se usa cuando un servicio recibe más solicitudes de las que puede procesar en la latencia requerida por insuficiente I/O, CPU, memoria u otro recurso. Es simple: el diseño del servicio no cambia; solo corre en una máquina virtual más grande. También se llama scaling up y corresponde a la táctica increase resources performance tactic del Capítulo 9. Tiene límites: puede no existir un tipo de VM lo bastante grande; en ese caso se usa horizontal scaling.

## Relacionado

- [[horizontal-scaling]]

