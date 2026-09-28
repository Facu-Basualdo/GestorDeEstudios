---
titulo: "Architectural Tactic"
tipo: concepto
tags: ["diseno","arquitectura","atributo-de-calidad","tacticas","decisiones-de-diseno","atributos-de-calidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [66,67,71,72,73,74,76,77]
veces_en_examen: 0
---

# Architectural Tactic

> Decisión de diseño que influye en el logro de la respuesta de un atributo de calidad; afecta directamente la respuesta del sistema ante un estímulo.

En el texto se presenta como una técnica de diseño que los arquitectos usan desde hace años; en el libro se aíslan, catalogan y describen, no se inventan. Pueden dar portabilidad a un diseño, alto rendimiento a otro e integrabilidad a un tercero.

Razones para centrarse en las tactics:
- A veces no hay un patrón que resuelva el problema por completo; las tactics permiten aumentar un patrón existente para llenar los vacíos.
- Si no existe ningún patrón, permiten construir un fragmento de diseño desde primeros principios.
- Hacen el diseño y el análisis más sistemáticos, dentro de ciertos límites.

Una tactic debe refinarse al aplicarse: por ejemplo, 'schedule resources' se refina en una estrategia concreta como 'shortest-job-first' o 'round-robin'. Su aplicación depende del contexto; 'manage sampling rate' es relevante en algunos sistemas de tiempo real pero no en otros. Las tactics son primitivas de diseño y aparecen una y otra vez en distintos aspectos del diseño.

## Relacionado

- [[architectural-pattern]]
- [[super-tactics]]

## Lo mencionan

- [[architectural-pattern]]
- [[restricting-design-vocabulary]]
- [[super-tactics]]
- [[tactics-based-questionnaire]]
- [[tactics-based-checklist]]
- [[availability-tactics]]
- [[architecturally-significant-requirement]]
