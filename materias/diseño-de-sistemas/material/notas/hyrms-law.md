---
titulo: "Hyrum's Law"
tipo: concepto
tags: ["interfaz","documentacion","comportamiento-observable","usuarios","contrato"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [286]
veces_en_examen: 0
---

# Hyrum's Law

> Con suficientes usuarios de una interfaz, no importa lo que se prometa en el contrato: todo comportamiento observable del sistema será dependido por alguien.

La ley apareció en la discusión sobre documentación de interfaces. Con suficientes usuarios, aunque el contrato no prometa un comportamiento, los usuarios terminan dependiendo de todo comportamiento observable. El texto aclara que un actor que depende de algo no documentado lo hace bajo su propio riesgo.

## Relacionado

- [[interface]]
- [[interface-documentation]]

## Lo mencionan

- [[interface-documentation]]
