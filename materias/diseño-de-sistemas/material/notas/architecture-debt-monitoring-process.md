---
titulo: "Architecture Debt Monitoring Process"
tipo: concepto
tags: ["deuda-arquitectonica","proceso","hotspots","anti-patrones","refactoring"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [441]
veces_en_examen: 0
---

# Architecture Debt Monitoring Process

> Proceso para identificar y cuantificar la deuda arquitectónica en un proyecto, reuniendo información del issue tracker, del sistema de control de revisiones y del código fuente.

Este capítulo presenta un proceso para identificar y cuantificar la deuda arquitectónica en un proyecto. El proceso consiste en reunir información del issue tracker del proyecto, de su sistema de control de revisiones y del código fuente. Con esta información se identifican anti-patrones de arquitectura y se agrupan en hotspots, y se puede cuantificar el impacto de esos hotspots.

Este proceso de monitoreo de deuda arquitectónica puede automatizarse e integrarse en una suite de integración continua. Una vez identificada la deuda arquitectónica, si es suficientemente grave, debe eliminarse mediante refactoring. El resultado del proceso proporciona los datos cuantitativos necesarios para hacer el caso de negocio del refactoring ante la gestión del proyecto.

## Relacionado

- [[architecture-debt]]
- [[hotspot]]
- [[refactoring]]

