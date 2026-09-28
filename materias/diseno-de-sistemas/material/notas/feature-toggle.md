---
titulo: "Feature Toggle"
tipo: concepto
tags: ["deployability","feature-toggle","kill-switch","tactica","despliegue"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [110]
veces_en_examen: 0
---

# Feature Toggle

> Feature toggle es una táctica de deployability que integra un 'kill switch' para desactivar automáticamente una funcionalidad en runtime sin necesidad de un nuevo despliegue.

Aun cuando el código esté completamente probado, pueden surgir problemas después de desplegar nuevas funcionalidades. El kill switch (o feature toggle) permite controlar las funcionalidades desplegadas sin el costo y el riesgo de volver a desplegar servicios.

## Relacionado

- [[manage-deployed-system]]
- [[tactics-for-deployability]]

## Lo mencionan

- [[continuous-deployment]]
- [[tactics-for-deployability]]
- [[manage-deployed-system]]
