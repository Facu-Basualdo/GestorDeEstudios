---
titulo: "Bajo acoplamiento"
tipo: concepto
tags: ["grasp","acoplamiento","bajo acoplamiento","dependencias","mantenimiento","reutilizacion"]
temas: ["[[conceptos-fundamentales-de-grasp]]","[[patrones-grasp]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [25,27]
veces_en_examen: 0
---

# Bajo acoplamiento

> Bajo acoplamiento es un principio GRASP que busca tener las clases lo menos ligadas entre sí para minimizar el impacto de los cambios y potenciar la reutilización.

El grado de acoplamiento indica lo vinculadas que están unas clases con otras y cómo un cambio en una afecta a las demás. Tipos de acoplamiento:
1. Acoplamiento de contenido: un módulo referencia directamente el contenido de otro.
2. Acoplamiento común: dos módulos acceden y afectan a un mismo valor global.
3. Acoplamiento de control: un módulo envía a otro un elemento de control que determina su lógica.
La aplicación de principios SOLID, como la inversión de dependencias, ayuda a lograr bajo acoplamiento.

## Relacionado

- [[alta-cohesion]]

## Lo mencionan

- [[alta-cohesion]]
- [[grasp]]
- [[creator]]
