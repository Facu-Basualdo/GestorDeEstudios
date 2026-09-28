---
titulo: "Limitación del uso de energía"
tipo: concepto
tags: ["energia","arquitectura","rendimiento","ahorro"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [327]
veces_en_examen: 0
---

# Limitación del uso de energía

> La limitación del uso de energía consiste en reducir el uso de energía terminando o degradando partes del sistema que consumen energía.

Esta es la táctica "throttle usage" descrita en el capítulo 6. Los detalles dependen de los elementos individuales del sistema. Algunas técnicas mencionadas son:

- Reducir el brillo o la frecuencia de actualización de la pantalla de un smartphone.
- Reducir la cantidad de núcleos activos del procesador.
- Reducir la frecuencia de reloj de los núcleos.
- Reducir la frecuencia de lecturas de sensores; por ejemplo, pedir datos de GPS cada minuto en lugar de cada pocos segundos.
- Usar una sola fuente de datos de ubicación (por ejemplo, solo GPS o solo celdas) en lugar de varias.


