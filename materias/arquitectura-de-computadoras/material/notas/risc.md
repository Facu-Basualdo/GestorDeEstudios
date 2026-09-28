---
titulo: "RISC"
tipo: concepto
tags: ["risc","arquitectura","instrucciones-reducidas","pipeline","vlsi"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [89,90]
veces_en_examen: 0
---

# RISC

> Arquitectura de procesador con un repertorio de instrucciones simples, pensada para ejecución en pipeline y con Unidad de Control Cableada.

Se caracteriza por tener un repertorio de instrucciones simples; se necesitan muchas instrucciones para realizar la misma tarea que una instrucción CISC. Son muy convenientes para ejecución en un pipeline (cauce segmentado), logrando velocidades elevadas. Usa tecnología de fabricación VLSI, por la cual necesita menos área para control y procesamiento de secuencia de instrucciones (mayor espacio para registros y cache). Tiene Unidad de Control Cableada debido a la sencillez de la arquitectura e implementa operaciones por hardware. Requiere el uso de compiladores optimizadores, desplazando la complejidad hacia estos.

**Criterios para definir una arquitectura RISC**
1. Determinar las operaciones más frecuentes sobre el campo de aplicación.
2. Optimizar los caminos que deben recorrer los datos para ejecutar las operaciones o instrucciones.
3. Incluir otras instrucciones solo si forman parte de los caminos optimizados y si su inclusión no hace más lenta la ejecución.
4. Pocas instrucciones y modos de direccionamiento.
5. Instrucciones que requieren un solo ciclo de memoria.
6. Conjunto de instrucciones load/store (cargar/almacenar): se accede a memoria exclusivamente mediante estas.
7. Gran cantidad de registros (de propósito general y específico).
8. Soporte de lenguajes de alto nivel: como hay pocas instrucciones, sobra lugar en el chip para elementos como manejo de listas, stacks, etc.

## Relacionado

- [[cisc]]
- [[modelo-cableado-vs-microprogramado-de-wilkes]]

## Lo mencionan

- [[cisc]]
- [[comparacion-cisc-vs-risc]]
