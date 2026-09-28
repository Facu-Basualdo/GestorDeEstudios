---
titulo: "Control Resource Demand"
tipo: concepto
tags: ["tactica","rendimiento","recursos","demanda-de-recursos","performance","tacticas","latencia","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[tacticas-de-arquitectura]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [30]
veces_en_examen: 0
---

# Control Resource Demand

> Control Resource Demand (controlar la demanda de recursos) es una categoría de tácticas de rendimiento que busca reducir la demanda de recursos del sistema.

Estrategias para reducir la demanda de recursos:
- Manejando los mensajes: reducir la cantidad de mensajes que el sistema puede recibir en un período de tiempo.
- Limitar la respuesta de eventos: poner los eventos en una cola de tamaño determinado; cuando se llena, deja de recibir mensajes o los descarta.
- Priorizar eventos: establecer un esquema de prioridades según la importancia; si no hay recursos suficientes, se ignoran los de menor prioridad.
- Reducir sobrecarga computacional: reducir la cantidad de intermediarios (redirección) para obtener menor latencia; ubicar recursos que se comunican frecuentemente en el mismo lugar para evitar latencia de red; hacer limpiezas periódicas que eliminen recursos ineficientes (reiniciar, borrar caché o virtualización).
- Limitar el tiempo de respuesta: el costo suele ser una menor precisión en el cálculo.
- Incrementar la eficiencia del uso de recursos: mejorar algoritmos para reducir latencia y tiempo de cálculo.

## Relacionado

- [[manage-work-requests]]
- [[limit-event-response]]
- [[prioritize-events]]
- [[reduce-computational-overhead]]
- [[bound-execution-times]]
- [[increase-efficiency-of-resource-usage]]
- [[manage-resources]]

## Lo mencionan

- [[performance]]
- [[manage-resources]]
- [[manage-work-requests]]
- [[manage-event-arrival]]
- [[manage-sampling-rate]]
- [[limit-event-response]]
- [[prioritize-events]]
- [[reduce-computational-overhead]]
- [[bound-execution-times]]
- [[increase-efficiency-of-resource-usage]]
