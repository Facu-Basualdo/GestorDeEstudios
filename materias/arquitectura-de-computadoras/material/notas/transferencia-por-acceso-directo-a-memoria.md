---
titulo: "Transferencia por Acceso Directo a Memoria"
tipo: concepto
tags: ["transferencia","e-s","memoria","acceso-directo"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [102]
veces_en_examen: 0
---

# Transferencia por Acceso Directo a Memoria

> Técnica de transferencia de E/S en la que la memoria posee dos vías de acceso y las peticiones de ciclo de memoria se dirigen a la Unidad de Control de Acceso a Memoria.

Se supone que la memoria posee dos vías de acceso (muelles de acceso): una reservada al ordenador y otra a la unidad exterior. Las peticiones de ciclo de memoria son dirigidas a la Unidad de Control de Acceso a Memoria, tanto si proceden de la UC o de la unidad exterior. El programa en curso no se suspende durante el ciclo de memoria solicitado, excepto cuando en la UC hubiera el ciclo simultáneamente. Este sistema es interesante si se dispone de varios bloques de memoria independientes.

## Relacionado

- [[unidad-de-control-de-acceso-a-memoria]]

## Lo mencionan

- [[canal-automatico]]
