---
titulo: "Environment Parity"
tipo: concepto
tags: ["virtualizacion","entornos","paridad","provisioning"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [101]
veces_en_examen: 0
---

# Environment Parity

> Environment parity (paridad de entornos) es la capacidad de que los entornos difieran en escala pero no en tipo de hardware ni en estructura fundamental, lograda con virtualización.

Antes de la virtualización generalizada, los entornos development, integration y staging eran instalaciones físicas operadas por distintos grupos (desarrollo, test/QA, operaciones), y se perdía mucho tiempo tratando de entender por qué un test pasaba en un entorno y fallaba en otro. Con entornos virtualizados se logra environment parity, y varias herramientas de provisioning la apoyan permitiendo que cada equipo construya fácilmente un entorno común que imite lo más posible al entorno de producción.

## Relacionado

- [[entornos-del-deployment-pipeline]]

