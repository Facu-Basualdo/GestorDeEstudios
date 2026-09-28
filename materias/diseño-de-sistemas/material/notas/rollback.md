---
titulo: "Rollback"
tipo: concepto
tags: ["recuperacion","estados","checkpoint","tacticas","safety","tactica","rollback"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81,205]
veces_en_examen: 0
---

# Rollback

> Táctica que permite revertir el sistema a un estado bueno conocido (la 'rollback line') al detectarse una falla.

Una vez alcanzado el buen estado, la ejecución puede continuar. Suele combinarse con las tácticas de transactions y redundant spare para que, después de un rollback, una versión standby del componente fallado sea promovida a estado activo. Depende de que exista una copia de un estado bueno anterior (checkpoint) para los componentes que están haciendo el rollback; esos checkpoints pueden guardarse en una ubicación fija y actualizarse a intervalos regulares o en momentos significativos del procesamiento, como al completar una operación compleja.

## Relacionado

- [[transactions]]
- [[redundant-spare]]
- [[retry]]
- [[degradation]]

## Lo mencionan

- [[recover-from-faults]]
- [[process-pairs]]
- [[recovery]]
