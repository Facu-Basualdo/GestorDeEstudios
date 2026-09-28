---
titulo: "QRAM"
tipo: concepto
tags: ["qram","memoria-cuantica","superposicion","algoritmos-cuanticos","machine-learning"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [476]
veces_en_examen: 0
---

# QRAM

> QRAM (Quantum Random Access Memory) es un elemento crítico, aún no implementado, que permitiría acceder eficientemente a grandes cantidades de datos en superposición para muchos algoritmos cuánticos.

Es un elemento crítico para implementar y aplicar muchos algoritmos cuánticos. Será necesaria para acceder eficientemente a grandes cantidades de datos, como los usados en aplicaciones de machine learning. Actualmente no existe una implementación de QRAM; varios grupos de investigación exploran cómo podría funcionar. Conceptualmente es similar a la RAM convencional: toma como entrada una ubicación de memoria (probablemente una superposición de ubicaciones) y devuelve como salida el contenido superpuesto de esas ubicaciones. Los valores devueltos fueron escritos convencionalmente, por lo que cada bit tiene un valor único y pueden copiarse de forma no destructiva. Un problema es que los recursos físicos requeridos escalan linealmente con la cantidad de bits recuperados, por lo que puede no ser práctico construir una QRAM para recuperaciones muy grandes. La QRAM está en etapa de discusión teórica, no de ingeniería.


## Lo mencionan

- [[hhl-algorithm]]
