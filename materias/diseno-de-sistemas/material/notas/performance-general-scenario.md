---
titulo: "Performance General Scenario"
tipo: concepto
tags: ["performance","escenarios","eventos","latencia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [173,177]
veces_en_examen: 0
---

# Performance General Scenario

> Un escenario de performance comienza con un evento que llega al sistema y requiere una respuesta que consume recursos, posiblemente mientras el sistema atiende otros eventos.

El escenario comienza con un evento que llega al sistema. Responder correctamente al evento requiere consumir recursos (incluido tiempo). Mientras tanto, el sistema puede estar atendiendo otros eventos simultáneamente. La Tabla 9.1 resume el escenario general. La Figura 9.1 da un ejemplo concreto: 500 usuarios inician 2,000 solicitudes en un intervalo de 30 segundos, en operación normal, y el sistema procesa todas las solicitudes con una latencia promedio de dos segundos.

## Relacionado

- [[performance]]
- [[event]]

