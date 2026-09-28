---
titulo: "Blocked Time"
tipo: concepto
tags: ["tiempo-bloqueado","rendimiento","contencion","recursos","latencia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [177]
veces_en_examen: 0
---

# Blocked Time

> Es el tiempo durante el cual el sistema no puede responder, a causa de contención de recursos, falta de disponibilidad o dependencia de otros cómputos.

Una computación puede bloquearse por contención de un recurso necesario, porque el recurso no está disponible, o porque depende de resultados de otras computaciones que aún no están disponibles. La contención ocurre cuando muchos recursos solo pueden ser usados por un cliente a la vez; cuantos más flujos compiten por el mismo recurso, más crece la latencia. La no disponibilidad puede deberse a que el recurso está offline o a una falla del componente. La dependencia de otro cómputo ocurre si hay que sincronizar con resultados de otra computación o esperar por una llamada iniciada; el tiempo puede ser significativo si el componente llamado está en otro extremo de la red o está muy cargado.

## Relacionado

- [[processing-time]]

## Lo mencionan

- [[performance-tactics]]
- [[processing-time]]
