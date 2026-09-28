---
titulo: "Business Goals"
tipo: concepto
tags: ["arquitectura","requisitos","asr","stakeholders","objetivos-de-negocio"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [345,348]
veces_en_examen: 0
---

# Business Goals

> Razón de ser para construir un sistema; objetivos de la organización que frecuentemente llevan a requisitos arquitectónicamente significativos (ASR).

Los business goals son la razón de ser para construir un sistema. Ninguna organización construye un sistema sin un motivo; quienes participan quieren avanzar la misión y ambiciones de la organización y de sí mismos. No se reducen a obtener ganancias: organizaciones sin fines de lucro, benéficas o gubernamentales pueden tener otras prioridades.

Para un arquitecto, los business goals importan porque frecuentemente llevan directamente a ASR. Hay tres relaciones posibles entre un business goal y la arquitectura:
1. Los business goals suelen llevar a requisitos de calidad (quality attributes). Por ejemplo, un deseo de diferenciar un producto y capturar mercado puede llevar a un requisito de tiempo de respuesta inusualmente rápido.
2. Pueden afectar la arquitectura sin inducir un requisito de calidad. Ejemplo: incluir una base de datos en la arquitectura para dar trabajo a un equipo de la organización, aunque técnicamente no hiciera falta.
3. Pueden no influir en la arquitectura. Ejemplo: reducir costos bajando la calefacción o los salarios.

Los arquitectos suelen conocer los business goals por ósmosis, pero conviene capturarlos explícitamente. Una forma es usar el método PALM, que incluye elicitación de business goals, expresarlos como business goal scenarios, consolidar casi-idénticos, priorizarlos e identificar QAs potenciales. Como disparadores de conversación se pueden usar categorías como crecimiento y continuidad, objetivos financieros, responsabilidad con empleados/sociedad/estado/accionistas, posición en el mercado, procesos de negocio y calidad de productos.

## Relacionado

- [[asr]]
- [[palm]]
- [[business-goal-scenario]]
- [[quality-attribute]]

## Lo mencionan

- [[software-architecture]]
- [[traceability]]
- [[busqueda-de-asrs-en-documentos-de-requisitos]]
- [[business-goal-scenario]]
- [[palm]]
- [[asr]]
- [[contextual-factors]]
- [[atam]]
- [[outputs-of-the-atam]]
- [[risk-theme]]
- [[phases-of-the-atam]]
- [[step-9-present-the-results]]
