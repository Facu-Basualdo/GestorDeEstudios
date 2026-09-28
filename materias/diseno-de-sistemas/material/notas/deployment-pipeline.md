---
titulo: "Deployment Pipeline"
tipo: concepto
tags: ["pipeline","despliegue","integracion","testing","automatizacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [101]
veces_en_examen: 0
---

# Deployment Pipeline

> Deployment pipeline (pipeline de despliegue) es la secuencia de herramientas y actividades que comienza al hacer check-in del código en un sistema de control de versiones y termina cuando la aplicación está desplegada para que los usuarios le envíen requests.

Entre esos dos puntos, una serie de herramientas integran y testean automáticamente el código recién commiteado, prueban el código integrado en cuanto a funcionalidad, y prueban la aplicación en aspectos como performance bajo carga, seguridad y cumplimiento de licencias. Cada etapa se desarrolla en un entorno establecido para aislarla y realizar las acciones apropiadas: desarrollo, integración, staging y producción.

## Relacionado

- [[deployment]]
- [[entornos-del-deployment-pipeline]]

## Lo mencionan

- [[entornos-del-deployment-pipeline]]
- [[cycle-time]]
- [[traceability]]
- [[repeatability]]
