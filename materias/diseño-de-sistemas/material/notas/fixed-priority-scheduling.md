---
titulo: "Fixed-Priority Scheduling"
tipo: concepto
tags: ["scheduling","prioridad","performance","tacticas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [182]
veces_en_examen: 0
---

# Fixed-Priority Scheduling

> Política de scheduling que asigna a cada fuente de solicitudes de recursos una prioridad particular y asigna los recursos en ese orden de prioridad.

Asegura mejor servicio para las solicitudes de mayor prioridad. Sin embargo, admite la posibilidad de que una solicitud de menor prioridad, pero aún importante, tarde un tiempo arbitrariamente largo en ser atendida porque queda detrás de una serie de solicitudes de mayor prioridad. Las estrategias de priorización comunes son semantic importance, deadline monotonic y rate monotonic.

## Relacionado

- [[scheduling-policies]]
- [[semantic-importance]]
- [[deadline-monotonic]]
- [[rate-monotonic]]

## Lo mencionan

- [[scheduling-policies]]
- [[semantic-importance]]
- [[deadline-monotonic]]
- [[rate-monotonic]]
