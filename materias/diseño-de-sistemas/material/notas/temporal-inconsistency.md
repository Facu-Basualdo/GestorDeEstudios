---
titulo: "Temporal Inconsistency"
tipo: concepto
tags: ["despliegue","inconsistencia-temporal","rolling-upgrade","problema"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [115]
veces_en_examen: 0
---

# Temporal Inconsistency

> Problema que ocurre en un rolling upgrade cuando, en una secuencia de requests de un cliente, algunas son atendidas por la versión antigua y otras por la nueva, produciendo resultados erróneos o inconsistentes.

Si las versiones del servicio se comportan de manera diferente, el cliente puede producir resultados erróneos o al menos inconsistentes. Este problema se puede prevenir usando la tactic manage service interactions.

## Relacionado

- [[rolling-upgrade]]

## Lo mencionan

- [[rolling-upgrade]]
