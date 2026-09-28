---
titulo: "Performance"
tipo: concepto
tags: ["atributo-de-calidad","rendimiento","tiempo","tiempo-de-ejecucion","escalabilidad","performance","requisitos","arquitectura"]
temas: ["[[atributos-de-calidad]]","[[atributos-de-calidad-y-tacticas]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [27]
veces_en_examen: 0
---

# Performance

> Performance (rendimiento) es el atributo de calidad que se refiere al tiempo: el sistema debe responder a los eventos o estímulos en un tiempo razonable.

Es un atributo de calidad de la categoría de tiempo de ejecución. Cuando ocurre un evento o estímulo (interrupciones, mensajes, solicitudes de usuarios o de otros sistemas, eventos de reloj), el sistema debe responder a tiempo. Caracterizar los eventos posibles y la respuesta temporal del sistema es la esencia del análisis del rendimiento.

El rendimiento está ligado directamente a la escalabilidad: aumentar la capacidad de trabajo en teoría debería mejorar el rendimiento.

Factores que afectan el tiempo:
- Tiempo de procesamiento y consumo de recursos: el sistema consume recursos; en hardware, CPU, memoria, ancho de banda, etc. En este caso el recurso también puede ser tiempo.
- Tiempo de bloqueo y contención de recursos: puede producirse deadlock cuando los clientes requieren el mismo recurso y esperan por recursos que otros tienen.
- Disponibilidad de recursos: el cálculo no continúa si un recurso no está disponible, ya sea por estar ocupado o por falla.
- Dependencia de otros cálculos: un cálculo puede tener que esperar por sincronización o por resultados de otro cálculo; por ejemplo, si el componente llamado está en otro nodo de la red o sobrecargado.

Hay dos categorías de tácticas: Control Resource Demand y Manage Resources.

## Relacionado

- [[control-resource-demand]]
- [[manage-resources]]
- [[escalabilidad]]
- [[event]]
- [[scalability]]
- [[modifiability]]

## Lo mencionan

- [[escalabilidad]]
- [[cliente-servidor]]
- [[energy-efficiency]]
- [[scalability]]
- [[performance-general-scenario]]
- [[event]]
- [[memento]]
- [[system-quality-attributes]]
