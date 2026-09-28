---
titulo: "Utility Tree"
tipo: concepto
tags: ["arquitectura","requisitos","asr","calidad","escenarios","utility-tree","requisitos-de-calidad","priorizacion"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [348,352,353,354,355,356,357,358,359]
veces_en_examen: 0
---

# Utility Tree

> Construcción de arriba hacia abajo que representa lo que el arquitecto cree que son los ASR relacionados con la calidad y críticos para el éxito del sistema, cuando no se dispone de las fuentes primarias de requisitos.

Un utility tree se usa cuando no se tiene acceso a los stakeholders o fuentes primarias de requisitos. Es una representación top-down de los ASR que el arquitecto considera críticos.

Comienza con el nodo raíz "Utility", que expresa la bondad general del sistema. Luego se elabora ese nodo listando los principales quality attributes (QA) que el sistema debe exhibir. Los nombres de QA se usan solo como placeholders intermedios para refinamientos posteriores.

Bajo cada QA se registran refinamientos específicos. Por ejemplo, performance puede descomponerse en "latencia de datos" y "throughput de transacciones", o en "tiempo de espera del usuario" y "tiempo de refresco de página web". Bajo cada refinamiento se registran los ASR concretos expresados como QA scenarios.

Cada scenario se evalúa con dos criterios: valor de negocio y riesgo técnico. Una escala simple H/M/L es suficiente.

- Para valor de negocio: H = requisito imprescindible; M = importante pero su omisión no causaría fracaso; L = agradable de cumplir pero no vale mucho esfuerzo.
- Para riesgo técnico: H = mantener al arquitecto despierto por la noche; M = preocupante pero no de alto riesgo; L = confianza en poder cumplirlo.

El árbol permite verificar áreas sin ASR scenarios e identificar los escenarios (H, H), que merecen más atención. La Tabla 19.1 muestra un ejemplo de utility tree en forma tabular para un sistema de salud.

## Relacionado

- [[asr]]
- [[quality-attribute]]

## Lo mencionan

- [[architecturally-significant-requirement]]
- [[asr]]
- [[step-9-present-the-results]]
