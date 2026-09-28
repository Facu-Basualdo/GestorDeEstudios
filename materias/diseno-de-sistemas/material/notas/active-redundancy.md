---
titulo: "Active Redundancy"
tipo: concepto
tags: ["disponibilidad","redundancia","hot-spare","patron"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [94]
veces_en_examen: 0
---

# Active Redundancy

> Patrón de disponibilidad (hot spare) en el que todos los nodos de un protection group reciben y procesan entradas idénticas en paralelo, manteniendo el repuesto redundante un estado síncrono con el nodo activo.

Active redundancy (hot spare) se usa para componentes con estado. En esta configuración, todos los nodos (activos o redundant spares) de un protection group reciben y procesan entradas idénticas en paralelo, lo que permite que los redundant spares mantengan un estado síncrono con los nodos activos. Como el redundant spare posee un estado idéntico al del procesador activo, puede reemplazar a un componente fallado en cuestión de milisegundos. El caso simple de un nodo activo y un nodo redundante se denomina one-plus-one redundancy. Active redundancy también puede usarse para facilities protection, donde se emplean enlaces de red activos y en espera para asegurar conectividad de red altamente disponible.

## Relacionado

- [[protection-group]]
- [[one-plus-one-redundancy]]
- [[redundant-spare]]

## Lo mencionan

- [[state-resynchronization]]
- [[one-plus-one-redundancy]]
- [[passive-redundancy]]
- [[comparison]]
- [[architectural-approaches]]
- [[step-4-identify-the-architectural-approaches]]
