---
titulo: "ASR"
tipo: concepto
tags: ["arquitectura","requisitos","asr","calidad","stakeholders"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [351]
veces_en_examen: 0
---

# ASR

> Un ASR (Architecturally Significant Requirement) es un requisito con un impacto profundo en la arquitectura y un alto valor de negocio o misión.

Un ASR debe tener:

- **Un impacto profundo en la arquitectura**: incluir este requisito probablemente resulte en una arquitectura diferente de la que habría si no se incluyera.
- **Un alto valor de negocio o misión**: si la arquitectura va a satisfacer este requisito, potencialmente a expensas de no satisfacer otros, debe ser de alto valor para stakeholders importantes.

Los ASR se pueden extraer de un documento de requisitos, capturarse de stakeholders durante un taller (por ejemplo, un QAW), capturarse del arquitecto en un utility tree, o derivarse de business goals. Conviene registrarlos en un solo lugar para que la lista pueda revisarse, referenciarse, usarse para justificar decisiones de diseño y revisitarse con el tiempo o ante cambios mayores.

## Relacionado

- [[utility-tree]]
- [[business-goals]]

## Lo mencionan

- [[traceability]]
- [[business-goals]]
- [[utility-tree]]
- [[change-happens]]
- [[evaluation-by-the-architect]]
- [[evaluation-by-peer-review]]
- [[atam]]
