---
titulo: "Safety General Scenario"
tipo: concepto
tags: ["safety","escenario","requisitos","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [197]
veces_en_examen: 0
---

# Safety General Scenario

> El Safety General Scenario es la representación general de un escenario de safety, que se ilustra con un escenario concreto de un sistema de monitoreo de pacientes.

Un escenario de ejemplo es: un sensor en el sistema de monitoreo de pacientes no reporta un valor crítico después de 100 ms. La falla se registra, se enciende una luz de advertencia en la consola y se activa un sensor de respaldo (de menor fidelidad). El sistema monitorea al paciente usando el sensor de respaldo después de no más de 300 ms.

## Relacionado

- [[safety]]

