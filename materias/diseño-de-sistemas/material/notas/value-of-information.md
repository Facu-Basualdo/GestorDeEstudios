---
titulo: "Value of Information (VoI)"
tipo: concepto
tags: ["decision","incertidumbre","experimentos","bayes","prototipos"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [363]
veces_en_examen: 0
---

# Value of Information (VoI)

> Value of Information (VoI) es una técnica que calcula la ganancia esperada de reducir la incertidumbre en una decisión mediante un ejercicio de recolección de datos, como la construcción de prototipos.

Se usa para decidir si vale la pena realizar experimentos como construir prototipos. Requiere estimar:

- el costo de tomar una decisión de diseño equivocada,
- el costo de realizar los experimentos,
- el nivel de confianza del equipo en cada opción de diseño,
- el nivel de confianza en los resultados de los experimentos.

Con estos valores, VoI aplica el teorema de Bayes y calcula dos cantidades: EVPI y EVSI. Como son valores esperados, deben evaluarse según la tolerancia al riesgo del equipo.

## Relacionado

- [[throwaway-prototype]]
- [[evpi]]
- [[evsi]]

## Lo mencionan

- [[throwaway-prototype]]
- [[evpi]]
- [[evsi]]
