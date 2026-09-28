---
titulo: "Architecturally Significant Requirement (ASR)"
tipo: concepto
tags: ["asr","arquitectura-de-software","requisitos","calidad-de-software","arquitectura","stakeholders"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [340,352,353,354,355,356,357,358,359]
veces_en_examen: 0
---

# Architecturally Significant Requirement (ASR)

> Un Architecturally Significant Requirement (ASR) es un requisito que tiene un efecto profundo en la arquitectura, al punto de que la arquitectura podría ser dramáticamente distinta en su ausencia.

En este contexto, por “requisitos” se entiende no necesariamente un catálogo documentado, sino el conjunto de propiedades que, si no son satisfechas por el sistema, harán que el sistema sea un fracaso. Las arquitecturas existen para construir sistemas que satisfagan esos requisitos.

Para un arquitecto, no todos los requisitos son iguales. Los ASR suelen tomar la forma de requisitos de calidad (quality attribute requirements): rendimiento, seguridad, modificabilidad, disponibilidad, usabilidad, etc. Cada vez que se selecciona un patrón o táctica es por la necesidad de cumplir requisitos de calidad; cuanto más difícil e importante es el requisito de calidad, más probable es que sea un ASR.

Los arquitectos deben identificar los ASR, generalmente después de un trabajo considerable para descubrir candidatos; por eso los arquitectos experimentados empiezan hablando con los stakeholders importantes.

## Relacionado

- [[quality-attribute]]
- [[architectural-pattern]]
- [[architectural-tactic]]
- [[quality-attribute-workshop]]
- [[utility-tree]]
- [[business-goal-scenario]]
- [[palm]]

## Lo mencionan

- [[busqueda-de-asrs-en-documentos-de-requisitos]]
- [[architectural-driver]]
- [[attribute-driven-design]]
- [[evaluation-by-the-architect]]
