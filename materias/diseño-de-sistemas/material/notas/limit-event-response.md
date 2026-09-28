---
titulo: "Limit Event Response"
tipo: concepto
tags: ["rendimiento","eventos","colas","latencia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [179]
veces_en_examen: 0
---

# Limit Event Response

> Táctica que limita la tasa de procesamiento de eventos encolándolos o descartándolos cuando llegan demasiado rápido.

Cuando llegan eventos discretos demasiado rápido para ser procesados, se encolan hasta que puedan procesarse o se descartan. Se puede procesar solo hasta una tasa máxima, asegurando un procesamiento predecible para los eventos que sí se atienden. Esta táctica puede activarse por un tamaño de cola o una utilización del procesador que supera un nivel de advertencia, o por una tasa de eventos que viola un SLA. Si no se pueden perder eventos, las colas deben ser suficientemente grandes para el peor caso. Si se decide descartar eventos, hay que elegir una política: registrar los descartados o ignorarlos, y notificar a otros sistemas, usuarios o administradores.

## Relacionado

- [[service-level-agreement]]
- [[control-resource-demand]]

## Lo mencionan

- [[reduce-resource-demand]]
- [[control-resource-demand]]
- [[bound-queue-sizes]]
