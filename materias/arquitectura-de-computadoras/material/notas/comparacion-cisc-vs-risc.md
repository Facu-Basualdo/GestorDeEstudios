---
titulo: "Comparación: CISC vs RISC"
tipo: concepto
tags: ["cisc","risc","comparacion","arquitectura","pipeline"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [90]
veces_en_examen: 0
---

# Comparación: CISC vs RISC

> Tabla comparativa entre CISC y RISC que contrasta énfasis, instrucciones, acceso a memoria, tamaño de código, ciclos, registros, costo, facilidad de modificación y velocidad.

| CISC | RISC |
|---|---|
| Énfasis en el hardware (velocidad) | Énfasis en el software (sencillez y rapidez con pipeline) |
| Incluye instrucciones complejas con más de un ciclo de memoria | Incluye instrucciones simples con un solo ciclo de memoria |
| Muchas instrucciones (+1000) | Pocas instrucciones (−100) |
| Instrucciones que trabajan de memoria a memoria | Instrucciones que trabajan de registro a registro |
| Una misma instrucción para carga y almacenamiento | Distintas instrucciones para carga y almacenamiento |
| El tamaño del código es pequeño | El tamaño del código es muy grande |
| Ciclos de reloj más extensos | Ciclos de reloj reducidos |
| Pocos registros para almacenar resultados | Muchos registros para almacenar resultados |
| Alto costo de producción | Bajo costo de producción |
| Difícil de modificar | Podrían realizarse cambios |
| Más lento | Más rápido |

**Actualidad**: evoluciona la convergencia entre ambas. Las PC con Intel x86 utilizan CISC transformadas como un conjunto de RISC. Los móviles utilizan ARM (Advanced RISC Machine). Apple trabaja en abandonar Intel e implementar ARM en sus PC.

## Relacionado

- [[cisc]]
- [[risc]]

