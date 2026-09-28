---
titulo: "Aggregation vs Acquaintance"
tipo: concepto
tags: ["agregacion","asociacion","diseno orientado a objetos","relaciones"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [30]
veces_en_examen: 0
---

# Aggregation vs Acquaintance

> La agregación implica propiedad y tiempos de vida idénticos, mientras que el conocimiento (acquaintance) implica una relación más débil de 'saber' sin responsabilidad.

La agregación significa que un objeto posee o es responsable de otro; el agregado y sus partes tienen tiempos de vida idénticos. El conocimiento (también llamado asociación o relación de 'uso') significa que un objeto simplemente conoce a otro; los objetos conocidos pueden solicitar operaciones entre sí, pero no son responsables el uno del otro. En los diagramas, la agregación se denota con una línea con un diamante en la base, y el conocimiento con una línea de punta de flecha simple. A menudo se implementan de manera similar (por ejemplo, ambos usan punteros en C++), por lo que la distinción es más de intención que de mecanismos del lenguaje. Las relaciones de agregación tienden a ser menos numerosas y más permanentes; los conocimientos son más dinámicos y de corta duración.


## Lo mencionan

- [[relating-run-time-and-compile-time-structures]]
