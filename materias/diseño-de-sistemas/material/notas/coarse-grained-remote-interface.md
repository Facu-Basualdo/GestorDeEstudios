---
titulo: "Coarse-Grained Remote Interface"
tipo: concepto
tags: ["patron","remoto","rendimiento","cohesion","distribuido","acoplamiento"]
temas: ["[[controladores-y-arquitectura-en-capas]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [48]
veces_en_examen: 0
---

# Coarse-Grained Remote Interface

> Patrón que hace las operaciones remotas más gruesas para reducir la penalidad de rendimiento de las llamadas remotas sobre una red.

En objetos servidores distribuidos, a veces es deseable crear menos objetos servidores y más grandes, menos cohesivos, que provean una interfaz para muchas operaciones. Por ejemplo, en lugar de un objeto remoto con tres operaciones finas setName, setSalary y setHireDate, se tiene una sola operación remota setData que recibe un conjunto de datos. Esto resulta en menos llamadas remotas y mejor rendimiento.

## Relacionado

- [[cohesion]]

