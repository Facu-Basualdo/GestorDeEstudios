---
titulo: "Key Evaluation Activities"
tipo: concepto
tags: ["evaluacion","arquitectura","actividades","revision","escenarios"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [376]
veces_en_examen: 0
---

# Key Evaluation Activities

> Las key evaluation activities (actividades clave de evaluación) son los pasos mínimos que debe incluir toda evaluación de arquitectura, sin importar quién la realice ni en qué momento.

1. Los revisores, individualmente, se aseguran de entender el estado actual de la arquitectura mediante documentación compartida, una presentación del arquitecto o una combinación de ambas.
2. Los revisores determinan una serie de drivers para guiar la revisión. Los drivers pueden estar documentados o ser desarrollados por el equipo de revisión o por stakeholders adicionales. Los más importantes suelen ser los escenarios de atributos de calidad de alta prioridad.
3. Para cada escenario, cada revisor determina si el escenario se satisface. Hacen preguntas para determinar dos tipos de información: que el escenario se satisface (por ejemplo, con un walkthrough del arquitecto o con documentación) y si algún otro escenario considerado no se satisfará debido a las decisiones de la porción revisada. Pueden plantear alternativas para aspectos riesgosos, sometidas al mismo tipo de análisis. Las restricciones de tiempo influyen en la duración de este paso.
4. Los revisores capturan los problemas potenciales expuestos; esta lista forma la base del seguimiento. Si un problema es real, o se arregla o los diseñadores y el project manager deciden explícitamente aceptar el riesgo.

¿Cuánto análisis hacer? Las decisiones tomadas para lograr uno de los requisitos arquitectónicos conductores deben recibir más análisis que otras. Consideraciones: la importancia de la decisión, el número de alternativas potenciales, y 'suficientemente bueno' en lugar de perfecto.

## Relacionado

- [[architecture-evaluation]]
- [[architectural-driver]]
- [[quality-attribute-scenario]]
- [[risks]]

