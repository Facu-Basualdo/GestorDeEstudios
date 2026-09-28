---
titulo: "Prioritize Events"
tipo: concepto
tags: ["rendimiento","prioridad","eventos","tacticas","performance"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [179,183]
veces_en_examen: 0
---

# Prioritize Events

> Táctica que impone un esquema de prioridades a los eventos para ignorar los de baja prioridad cuando no hay recursos suficientes.

Si no todos los eventos son igual de importantes, se puede imponer una prioridad que los ordene según la importancia de atenderlos. Si no hay recursos suficientes, los eventos de baja prioridad pueden ignorarse. Ignorar eventos consume recursos mínimos (incluyendo tiempo), lo que mejora el rendimiento frente a un sistema que atiende todos los eventos todo el tiempo. Por ejemplo, en un sistema de gestión de edificios, las alarmas que ponen en peligro la vida, como un incendio, deben tener prioridad más alta que las alarmas informativas, como una habitación demasiado fría.

## Relacionado

- [[control-resource-demand]]
- [[manage-event-rate]]

## Lo mencionan

- [[reduce-resource-demand]]
- [[control-resource-demand]]
- [[manage-event-rate]]
