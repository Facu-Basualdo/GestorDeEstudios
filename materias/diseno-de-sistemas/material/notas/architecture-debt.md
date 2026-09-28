---
titulo: "Architecture debt"
tipo: concepto
tags: ["deuda","deuda-arquitectonica","arquitectura","deuda-tecnica","mantenimiento","refactoring","deuda-arquitectura","entropia","mantenibilidad","calidad-arquitectura","acoplamiento","cohesion","arquitectura-de-software","calidad-de-software"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [46,66,432,436,440,441]
veces_en_examen: 0
---

# Architecture debt

> La architecture debt es una forma de entropía del diseño que hace que los diseños sean más difíciles de mantener y evolucionar con el tiempo, y es una forma importante y costosa de deuda técnica.

Sin atención cuidadosa y el aporte de esfuerzo, los diseños se vuelven más difíciles de mantener y evolucionar con el tiempo. A esta forma de entropía se la llama "architecture debt".

La architecture debt es típicamente más difícil de detectar y erradicar que la deuda de código porque involucra preocupaciones no locales. Las herramientas y métodos que funcionan bien para descubrir deuda de código—inspecciones de código, comprobadores de calidad de código, etc.—generalmente no funcionan bien para detectar la architecture debt.

No toda deuda es onerosa ni mala. A veces se viola un principio cuando hay un tradeoff valioso—por ejemplo, sacrificar bajo acoplamiento o alta cohesión para mejorar el rendimiento en tiempo de ejecución o el tiempo de comercialización.

El proceso para analizar sistemas existentes en busca de architecture debt requiere tres tipos de información: código fuente (para dependencias estructurales), historial de revisiones (para co-evolución de unidades de código) e información de issues (para la razón de los cambios).

El modelo para analizar la deuda identifica áreas de la arquitectura que experimentan tasas anormalmente altas de bugs y churn (líneas de código commiteadas) y asocia estos síntomas con fallas de diseño.

## Relacionado

- [[modifiability]]
- [[refactoring]]
- [[hotspot]]

## Lo mencionan

- [[modifiability]]
- [[refactoring]]
- [[hotspot]]
- [[automation]]
- [[architecture-debt-monitoring-process]]
