---
titulo: "Quality Attribute Scenario"
tipo: concepto
tags: ["quality-attribute-scenario","escenarios","arquitectura","requisitos","atributo-de-calidad","atributos-de-calidad","atam"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [63,70,71,72,73,74,76,77,385,388]
veces_en_examen: 0
---

# Quality Attribute Scenario

> Un quality attribute scenario es una forma común, testeable y sin ambigüedades de especificar un requisito de calidad, compuesta por seis partes: stimulus, stimulus source, response, response measure, environment y artifact.

Se usa una forma común para especificar todos los requisitos de calidad (QA) como escenarios. Esto resuelve el problema de vocabulario y no depende de categorizaciones.

Las seis partes son:
- **Stimulus**: un evento que llega al sistema o al proyecto. Para performance es un evento; para usability, una operación de usuario; para security, un ataque; para modifiability, una solicitud de modificación; para testability, la finalización de una unidad de desarrollo.
- **Stimulus source**: la entidad (humana, sistema u otro actor) que genera el stimulus. Puede afectar el tratamiento: una solicitud de un usuario confiable no pasa por el mismo escrutinio que una de un usuario no confiable.
- **Response**: la actividad que ocurre como resultado del stimulus; son las responsibilities que el sistema (para cualidades de runtime) o los desarrolladores (para cualidades de desarrollo) deben realizar.
- **Response measure**: la medida que permite testear si se logró la respuesta; para performance puede ser latencia o throughput; para modifiability, tiempo de trabajo o de pared para hacer, probar y desplegar la modificación.
- **Environment**: el conjunto de circunstancias en que ocurre el scenario, a menudo un estado de runtime (sobrecarga, operación normal, un modo particular) o estados en que el sistema no está corriendo (desarrollo, testing, refresco de datos, carga de batería).
- **Artifact**: el objetivo al que llega el stimulus; puede ser un conjunto de sistemas, el sistema completo o una o más piezas del sistema. Una falla en un data store puede tratarse distinto que una falla en el metadata store.

Aunque es común omitir alguna de las seis partes en etapas tempranas, saber que están todas obliga al arquitecto a considerar si cada parte es relevante.

## Relacionado

- [[quality-attribute]]
- [[responsibility]]
- [[general-scenario]]
- [[concrete-scenario]]
- [[quality-attribute-utility-tree]]

## Lo mencionan

- [[quality-attribute]]
- [[general-scenario]]
- [[concrete-scenario]]
- [[gathering-asrs-by-interviewing-stakeholders]]
- [[quality-attribute-workshop]]
- [[architectural-driver]]
- [[design-rationale]]
- [[evaluation-as-a-risk-reduction-activity]]
- [[key-evaluation-activities]]
- [[outputs-of-the-atam]]
- [[quality-attribute-utility-tree]]
- [[step-5-generate-a-quality-attribute-utility-tree]]
- [[step-7-brainstorm-and-prioritize-scenarios]]
- [[step-8-analyze-the-architectural-approaches]]
