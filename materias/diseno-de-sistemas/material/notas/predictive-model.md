---
titulo: "Predictive Model"
tipo: concepto
tags: ["monitoreo","prediccion","tacticas","prevencion","safety","tactica"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [84,202]
veces_en_examen: 0
---

# Predictive Model

> Táctica que, combinada con un monitor, vigila el estado de salud de un proceso del sistema para asegurar que opera dentro de sus parámetros nominales y tomar acciones correctivas cuando se acerca a un umbral crítico.

Las métricas de rendimiento operativo monitoreadas se usan para predecir la aparición de fallas; ejemplos incluyen la tasa de establecimiento de sesiones (en un servidor HTTP), el cruce de umbrales (monitoreo de marcas altas y bajas de algún recurso compartido restringido), estadísticas del estado del proceso (en servicio, fuera de servicio, en mantenimiento, inactivo) y estadísticas de longitud de cola de mensajes.

## Relacionado

- [[monitor]]
- [[condition-monitoring]]

## Lo mencionan

- [[condition-monitoring]]
- [[prevent-faults]]
