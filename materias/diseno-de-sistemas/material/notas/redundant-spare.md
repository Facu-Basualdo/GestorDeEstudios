---
titulo: "Redundant Spare"
tipo: concepto
tags: ["redundancia","tacticas","disponibilidad","recuperacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81]
veces_en_examen: 0
---

# Redundant Spare

> Táctica en la que uno o más componentes duplicados pueden intervenir y asumir el trabajo si el componente principal falla.

Constituye el núcleo de los patrones hot spare, warm spare y cold spare, que se diferencian principalmente por el grado de actualización del componente de respaldo al momento de asumir el control.


## Lo mencionan

- [[recover-from-faults]]
- [[rollback]]
- [[hitless-in-service-software-upgrade-issu]]
- [[state-resynchronization]]
- [[escalating-restart]]
- [[protection-group]]
- [[active-redundancy]]
- [[one-plus-one-redundancy]]
- [[passive-redundancy]]
- [[spare]]
