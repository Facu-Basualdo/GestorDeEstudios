---
titulo: "Indirección"
tipo: concepto
tags: ["grasp","indireccion","mediacion","acoplamiento","abstraccion"]
temas: ["[[patrones-de-asignacion-de-responsabilidades-grasp]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [36]
veces_en_examen: 0
---

# Indirección

> Patrón GRASP que asigna la responsabilidad de mediar entre dos clases a una clase intermedia, para reducir el acoplamiento directo y proteger frente a cambios.

Permite mejorar el bajo acoplamiento entre dos clases asignando la responsabilidad de la mediación a una clase intermedia. Problema: ¿dónde asignar responsabilidades para evitar acoplamiento directo? Solución: asignar a un objeto que medie entre los elementos para proteger al primer objeto de cambios previsibles en el segundo.

Ejemplo: crear un ServicioLog intermedio entre CualquierPresentador y Log4Net, de modo que cambios en Log4Net no afecten al presentador. Este patrón es fundamental para crear abstracciones e introducir APIs externas sin gran impacto.


## Lo mencionan

- [[variaciones-protegidas]]
