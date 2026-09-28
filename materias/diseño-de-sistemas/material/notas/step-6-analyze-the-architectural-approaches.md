---
titulo: "Step 6: Analyze the Architectural Approaches"
tipo: concepto
tags: ["atam","arquitectura","analisis","riesgos","tradeoffs","paso"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [385]
veces_en_examen: 0
---

# Step 6: Analyze the Architectural Approaches

> Paso de la fase 1 del ATAM en el que el equipo de evaluación examina los escenarios de mayor prioridad, documenta decisiones arquitectónicas e identifica riesgos, no-riesgos y tradeoffs.

El equipo de evaluación examina los escenarios mejor rankeados (identificados en el utility tree) uno a la vez; se le pide al arquitecto que explique cómo la arquitectura soporta cada uno. Los miembros del equipo, especialmente los questioners, indagan sobre los architectural approaches usados para llevar a cabo el escenario.

El equipo documenta las decisiones arquitectónicas relevantes e identifica y cataloga riesgos, no-riesgos y tradeoffs. Para los approaches conocidos, pregunta cómo el arquitecto superó debilidades conocidas u obtuvo aseguramiento de que el approach era suficiente. El análisis no pretende ser exhaustivo; la clave es establecer un vínculo entre las decisiones tomadas y los requisitos de atributos de calidad que deben satisfacerse.

Por ejemplo, la frecuencia de heartbeats afecta el tiempo en que el sistema puede detectar un componente fallado; algunas asignaciones resultan en valores inaceptables (riesgos). El heartbeat más frecuente mejora la disponibilidad pero consume más tiempo de procesamiento y ancho de banda (tradeoff). Al final del paso 6, el equipo debe tener un panorama claro de los aspectos más importantes de la arquitectura, la justificación de las decisiones de diseño y una lista de riesgos, no-riesgos, puntos de sensibilidad y puntos de tradeoff.

## Relacionado

- [[architectural-approaches]]
- [[quality-attribute-utility-tree]]

## Lo mencionan

- [[atam]]
- [[hiatus-and-start-of-phase-2]]
- [[step-8-analyze-the-architectural-approaches]]
