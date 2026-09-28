---
titulo: "Passive Redundancy"
tipo: concepto
tags: ["disponibilidad","redundancia","warm-spare","patron"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [94]
veces_en_examen: 0
---

# Passive Redundancy

> Patrón de disponibilidad (warm spare) en el que solo los miembros activos de un protection group procesan tráfico de entrada y proporcionan actualizaciones periódicas de estado a los redundant spares.

En passive redundancy (warm spare), solo los miembros activos del protection group procesan tráfico de entrada. Una de sus tareas es proporcionar a los redundant spares actualizaciones periódicas de estado. Como el estado mantenido por los redundant spares está solo débilmente acoplado con el de los nodos activos (la holgura depende del período de actualización), los nodos redundantes se llaman warm spares. Passive redundancy logra un equilibrio entre el patrón active redundancy—más disponible pero más costoso en cómputo—y el patrón cold spare—menos disponible pero significativamente menos complejo y más barato.

## Relacionado

- [[protection-group]]
- [[active-redundancy]]
- [[spare]]
- [[redundant-spare]]

## Lo mencionan

- [[state-resynchronization]]
- [[producing-structures]]
