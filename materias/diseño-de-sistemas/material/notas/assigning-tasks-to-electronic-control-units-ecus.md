---
titulo: "Assigning Tasks to Electronic Control Units (ECUs)"
tipo: concepto
tags: ["ecu","asignacion","arquitectura","sistemas-moviles"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [332]
veces_en_examen: 0
---

# Assigning Tasks to Electronic Control Units (ECUs)

> Asignar tareas a ECUs es la decisión del arquitecto sobre qué subsistemas se asignan a cada unidad de control electrónico del sistema móvil.

Esta decisión puede basarse en varios factores: ajuste de la ECU a la función (funciones con procesador gráfico en una ECU con GPU), criticidad (las ECU más potentes para funciones críticas como controladores de motor), ubicación en el vehículo (mejor conectividad Wi-Fi en primera clase), conectividad (funciones divididas entre ECUs deben estar en la misma red interna), localidad de la comunicación (componentes que se comunican intensamente en la misma ECU mejoran rendimiento y reducen tráfico de red) y costo (minimizar el número de ECUs).

## Relacionado

- [[ecu]]

