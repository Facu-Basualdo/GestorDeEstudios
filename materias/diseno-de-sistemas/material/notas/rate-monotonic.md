---
titulo: "Rate Monotonic"
tipo: concepto
tags: ["scheduling","periodico","prioridad","tiempo-real","performance"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [182]
veces_en_examen: 0
---

# Rate Monotonic

> Asignación estática de prioridades para flujos periódicos que asigna mayor prioridad a los flujos con períodos más cortos.

Es una asignación de prioridad estática para flujos periódicos. Es un caso especial de deadline monotonic, pero es más conocido y más probable que esté soportado por el sistema operativo.

## Relacionado

- [[fixed-priority-scheduling]]
- [[deadline-monotonic]]

## Lo mencionan

- [[fixed-priority-scheduling]]
- [[deadline-monotonic]]
