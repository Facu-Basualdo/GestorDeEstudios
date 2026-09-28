---
titulo: "Quality Attribute Workshop (QAW)"
tipo: concepto
tags: ["quality-attribute-workshop","qaw","escenarios","atributos-de-calidad","stakeholders"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [343,344]
veces_en_examen: 0
---

# Quality Attribute Workshop (QAW)

> Método facilitado y centrado en los stakeholders para generar, priorizar y refinar escenarios de atributos de calidad antes de que la arquitectura de software esté completa.

El QAW enfatiza las preocupaciones a nivel de sistema y el rol que el software tendrá en el sistema; depende de la participación de los stakeholders. Sus pasos son:

- Business/mission presentation: el representante del negocio presenta el contexto, los requisitos funcionales amplios, las restricciones y los QA conocidos (alrededor de una hora).
- Architectural plan presentation: el arquitecto presenta los planes arquitectónicos actuales.
- Identification of architectural drivers: los facilitadores comparten su lista de drivers y se consensúa una lista destilada con overall requirements, business drivers, constraints y quality attributes.
- Scenario brainstorming: cada stakeholder expresa un escenario que aborda una preocupación de QA, con estímulo y respuesta explícitos.
- Scenario consolidation: se fusionan escenarios similares si los proponentes aceptan.
- Scenario prioritization: cada stakeholder recibe una cantidad de votos igual al 30% del total de escenarios tras la consolidación.
- Scenario refinement: los escenarios principales se refinan en la forma de seis partes source–stimulus–artifact–environment–response–response measure.

Los resultados incluyen una lista de architectural drivers y un conjunto de QA scenarios priorizados, que sirven para refinar requisitos, esclarecer drivers, fundamentar decisiones de diseño, guiar prototipos y ordenar el desarrollo.

## Relacionado

- [[architectural-driver]]
- [[quality-attribute-scenario]]

## Lo mencionan

- [[architecturally-significant-requirement]]
- [[gathering-asrs-by-interviewing-stakeholders]]
- [[architectural-driver]]
