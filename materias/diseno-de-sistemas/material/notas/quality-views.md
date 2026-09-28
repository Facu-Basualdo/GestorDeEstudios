---
titulo: "Quality Views"
tipo: concepto
tags: ["vistas","calidad","stakeholders","arquitectura","documentacion"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [410]
veces_en_examen: 0
---

# Quality Views

> Quality views son vistas creadas extrayendo piezas relevantes de las vistas estructurales y empaquetándolas juntas para abordar preocupaciones específicas de stakeholders.

Module, C&C y allocation views son structural views. En sistemas donde ciertos atributos de calidad (o preocupaciones de stakeholders) son particularmente importantes y transversales, las structural views pueden no ser la mejor manera de presentar la solución arquitectónica porque la solución puede estar distribuida en múltiples estructuras difíciles de combinar. Las quality views se forman extrayendo las piezas relevantes de las structural views y empaquetándolas juntas. Ejemplos: security view, communications view, exception or error-handling view, reliability view y performance view. Estas vistas reflejan la filosofía de documentación de ISO/IEC/IEEE 42010:2011, que prescribe crear vistas guiadas por las preocupaciones de los stakeholders.

## Relacionado

- [[module-view]]
- [[allocation-views]]
- [[structural-views]]
- [[security-view]]
- [[communications-view]]
- [[exception-error-handling-view]]
- [[reliability-view]]
- [[performance-view]]

## Lo mencionan

- [[view]]
- [[security-view]]
- [[communications-view]]
- [[exception-error-handling-view]]
- [[reliability-view]]
- [[performance-view]]
