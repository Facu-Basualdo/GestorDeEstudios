---
titulo: "Two-way Adapter"
tipo: concepto
tags: ["patron de diseno","adaptador","transparencia","herencia multiple","adapter","multiple-interfaces","unidraw","qoca","herencia-multiple"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [136,137]
veces_en_examen: 0
---

# Two-way Adapter

> Adaptador que conforma tanto a la interfaz Target como a la interfaz Adaptee, permitiendo que el objeto adaptado sea usado de forma transparente por ambos lados.

Un **two-way adapter** (adaptador bidireccional) resuelve el problema de que los adaptadores comunes no son transparentes para todos los clientes: un objeto adaptado ya no cumple con la interfaz Adaptee, por lo que no puede usarse donde se espera un Adaptee. Un adaptador bidireccional conforma a ambas interfaces, permitiendo que dos clientes diferentes vean el objeto de manera distinta.

Por ejemplo, para integrar Unidraw (editor gráfico) y QOCA (sistema de resolución de restricciones), se necesita que ConstraintVariable (de QOCA) sea adaptado a StateVariable (de Unidraw) y viceversa. La solución es una clase ConstraintStateVariable que hereda de ambas, adaptando las dos interfaces mutuamente. La herencia múltiple es viable aquí porque las interfaces de las clases adaptadas son sustancialmente diferentes.

## Relacionado

- [[adapter]]
- [[class-adapter]]

## Lo mencionan

- [[adapter]]
