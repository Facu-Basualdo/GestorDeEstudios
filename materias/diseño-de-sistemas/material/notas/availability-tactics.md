---
titulo: "Availability Tactics"
tipo: concepto
tags: ["tacticas","disponibilidad","deteccion","recuperacion","prevencion","arquitectura","fault","middleware"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [76,78,79,80,81]
veces_en_examen: 0
---

# Availability Tactics

> Tácticas de diseño que permiten a un sistema prevenir o soportar faults para que el servicio entregado permanezca conforme a su especificación.

Las availability tactics (tácticas de disponibilidad) están diseñadas para permitir que un sistema prevenga o soporte faults, de modo que un servicio que está entregando el sistema permanezca conforme a su especificación. Estas tácticas evitan que los faults se conviertan en failures, o al menos acotan los efectos del fault y hacen posible la reparación. Tienen uno de tres propósitos:
- Fault detection (detección de faults)
- Fault recovery (recuperación de faults)
- Fault prevention (prevención de faults)
A menudo serán provistas por una infraestructura de software, como un middleware; el trabajo del arquitecto puede ser elegir y evaluar las tácticas de availability y la combinación correcta, más que implementarlas.

## Relacionado

- [[architectural-tactic]]
- [[availability]]
- [[fault]]
- [[failure]]
- [[detect-faults]]

## Lo mencionan

- [[failure]]
- [[fault]]
- [[recover-from-attacks]]
