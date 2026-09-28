---
titulo: "Step 7: Brainstorm and Prioritize Scenarios"
tipo: concepto
tags: ["atam","stakeholders","escenarios","priorizacion","paso"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [388]
veces_en_examen: 0
---

# Step 7: Brainstorm and Prioritize Scenarios

> Paso de la fase 2 del ATAM en el que los stakeholders proponen escenarios de atributos de calidad y votan para priorizar los más importantes.

El equipo de evaluación pide a los stakeholders que propongan (brainstorm) escenarios de atributos de calidad que sean operativamente significativos con respecto a sus roles individuales. Un mantenedor probablemente propondrá un escenario de modificabilidad; un usuario, uno que exprese facilidad de operación; y una persona de aseguramiento de calidad, uno sobre probar el sistema o poder replicar el estado del sistema previo a una falla.

Mientras que la generación del utility tree (paso 5) se usa principalmente para entender cómo el arquitecto percibió y manejó los drivers arquitectónicos, el propósito del brainstorming de escenarios es tomar el pulso de la comunidad de stakeholders: entender qué significa el éxito del sistema para ellos. El brainstorming funciona bien en grupos grandes.

Para priorizar, primero los stakeholders fusionan los escenarios que representan el mismo comportamiento o preocupación de calidad; luego votan por los que consideran más importantes. Cada stakeholder recibe una cantidad de votos igual al 30% del número de escenarios, redondeado hacia arriba (por ejemplo, 40 escenarios → 12 votos). La lista priorizada se compara con la del utility tree: si coinciden, hay buena alineación entre lo que el arquitecto tenía en mente y lo que los stakeholders realmente querían; si aparecen escenarios impulsores adicionales, esto puede ser un riesgo si la discrepancia es grande.

## Relacionado

- [[quality-attribute-scenario]]
- [[quality-attribute-utility-tree]]
- [[step-5-generate-a-quality-attribute-utility-tree]]

## Lo mencionan

- [[atam]]
- [[step-8-analyze-the-architectural-approaches]]
