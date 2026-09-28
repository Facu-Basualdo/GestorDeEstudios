---
titulo: "Redistribute Responsibilities"
tipo: concepto
tags: ["modificabilidad","cohesion","refactoring"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [161]
veces_en_examen: 0
---

# Redistribute Responsibilities

> Redistribute responsibilities es una tactica de Increase Cohesion que agrupa responsabilidades similares que estan dispersas en varios modulos.

Si las responsabilidades A, A' y A'' (todas similares) estan repartidas en varios modulos, deben colocarse juntas. Esta refactorizacion puede implicar crear un modulo nuevo o mover responsabilidades a modulos existentes. Un metodo para identificarlas es hipotetizar un conjunto de cambios probables como escenarios: si los escenarios afectan consistentemente una sola parte de un modulo, tal vez las otras partes tienen responsabilidades separadas y deberian moverse; si algunos escenarios requieren modificaciones en multiples modulos, quizas las responsabilidades afectadas deberian agruparse en un modulo nuevo.

## Relacionado

- [[increase-cohesion]]

## Lo mencionan

- [[increase-cohesion]]
