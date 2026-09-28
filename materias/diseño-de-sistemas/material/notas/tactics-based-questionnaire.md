---
titulo: "Tactics-Based Questionnaire"
tipo: concepto
tags: ["analisis","arquitectura","atributo-de-calidad","tacticas","cuestionario","evaluacion-de-arquitectura","atributos-de-calidad","riesgos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [69,394]
veces_en_examen: 0
---

# Tactics-Based Questionnaire

> Cuestionario basado en tactics que permite analizar el logro de atributos de calidad en distintas etapas del diseño arquitectónico.

Se usa para analizar qué tan bien se han logrado los atributos de calidad y no hay que esperar a que el diseño esté completo para comenzar. Las oportunidades de análisis aparecen en muchos puntos del ciclo de vida del desarrollo de software, incluso muy tempranos.

El analista (que puede ser el arquitecto) responde según los artefactos disponibles; la precisión del análisis varía según la madurez de los artefactos.

Para cada pregunta del cuestionario se registra:
- Si cada tactic está soportada por la arquitectura del sistema.
- Si hay riesgos obvios en el uso o no uso de la tactic. Si se usó, cómo se realiza o se pretende realizar (código custom, frameworks genéricos o componentes externos).
- Las decisiones de diseño específicas para realizar la tactic y dónde en la base de código puede encontrarse la implementación.
- La justificación o supuestos hechos en la realización de la tactic.

Pasos para usarlo:
1. Completar la columna 'Supported' con Y o N.
2. Si es Y, en 'Design Decisions and Location' describir las decisiones y enumerar dónde están o estarán en la arquitectura.
3. En 'Risk' indicar el riesgo con escala H/M/L.
4. En 'Rationale' describir la justificación y las implicancias de la decisión (por ejemplo, en costo, schedule, evolución).

El enfoque puede sonar simplista pero es poderoso: obliga al arquitecto a dar un paso atrás y considerar el panorama general. Un cuestionario típico para un solo atributo de calidad toma entre 30 y 90 minutos.

## Relacionado

- [[architectural-tactic]]
- [[quality-attribute]]

## Lo mencionan

- [[evaluation-by-peer-review]]
