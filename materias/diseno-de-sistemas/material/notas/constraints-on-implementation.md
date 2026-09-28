---
titulo: "Constraints on Implementation"
tipo: concepto
tags: ["arquitectura","implementacion","restricciones","tradeoffs","performance"]
temas: ["[[fundamentos-de-la-arquitectura-de-software]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [51,52]
veces_en_examen: 0
---

# Constraints on Implementation

> Para que la implementación se ajuste a una arquitectura, debe cumplir las restricciones que esta prescribe sobre los elementos, sus interacciones y sus responsabilidades.

Cada prescripción de la arquitectura es una restricción para el implementador: el sistema debe tener los elementos prescriptos, estos deben interactuar de la forma prescripta y cada elemento debe cumplir su responsabilidad frente a los demás. Quienes construyen cada elemento deben conocer bien las especificaciones de su elemento, pero pueden no conocer los tradeoffs arquitectónicos; la arquitectura los restringe de modo de satisfacer esos tradeoffs. Un ejemplo clásico es cuando el arquitecto asigna presupuestos de performance a las piezas de software involucradas en una funcionalidad mayor: si cada unidad se mantiene dentro de su presupuesto, la transacción global cumple su requerimiento de performance, aunque los implementadores de cada pieza no conozcan el presupuesto global. Los arquitectos no necesitan ser expertos en todos los aspectos del diseño de algoritmos ni en los detalles del lenguaje de programación, aunque deben saber lo suficiente para no diseñar algo difícil de construir; son responsables de establecer, analizar y hacer cumplir las decisiones y tradeoffs arquitectónicos.


