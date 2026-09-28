---
titulo: "Steady-State Availability"
tipo: concepto
tags: ["disponibilidad","mtbf","mttr","medicion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [73]
veces_en_examen: 0
---

# Steady-State Availability

> Medida de la disponibilidad de un sistema como la probabilidad de que provea los servicios especificados dentro de los límites requeridos durante un intervalo de tiempo determinado, calculada con la expresión MTBF/(MTBF+MTTR).

La availability de un sistema puede medirse como la probabilidad de que provea los servicios especificados dentro de los límites requeridos durante un intervalo de tiempo especificado. La expresión conocida para derivar la steady-state availability (disponibilidad en estado estable) proviene del mundo del hardware:

MTBF/(MTBF + MTTR)

donde MTBF es el tiempo medio entre failures (mean time between failures) y MTTR es el tiempo medio de reparación (mean time to repair). En el mundo del software, esta fórmula debe interpretarse como pensar en qué hará fallar al sistema, qué tan probable es que ocurra ese evento y cuánto tiempo se requerirá para repararlo. Los downtime programados no deben considerarse al calcular la disponibilidad, ya que se considera que el sistema "no se necesita" entonces; esto depende de los requisitos específicos, que suelen estar codificados en un service level agreement (SLA).

## Relacionado

- [[availability]]
- [[failure]]
- [[service-level-agreement]]

