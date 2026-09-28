---
titulo: "Orchestrate Tactic"
tipo: concepto
tags: ["integrabilidad","tactica","orquestacion","workflow","bpel"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [146,150,151,152,153]
veces_en_examen: 0
---

# Orchestrate Tactic

> Táctica de integrabilidad que centraliza en un mecanismo de orquestación las dependencias entre un sistema S y nuevos componentes, eliminando las dependencias explícitas entre esos componentes.

Los motores de workflow suelen usar esta táctica. Un workflow es un conjunto de actividades organizadas que ordenan y coordinan componentes de software para completar un proceso de negocio. Puede consistir en otros workflows, cada uno de los cuales puede a su vez consistir en servicios agregados. El modelo de workflow fomenta la reutilización y la agilidad, dando lugar a procesos de negocio más flexibles. Los procesos de negocio pueden gestionarse bajo una filosofía de business process management (BPM), que los considera como un conjunto de activos competitivos a gestionar. La orquestación compleja puede especificarse en un lenguaje como BPEL (Business Process Execution Language). La orquestación funciona reduciendo la cantidad de dependencias entre un sistema S y nuevos componentes {Ci}, y eliminando por completo las dependencias explícitas entre los componentes {Ci}, al centralizar esas dependencias en el mecanismo de orquestación. También puede reducir la distancia sintáctica y semántica de datos si se usa junto con tácticas como adherence to standards.

## Relacionado

- [[workflow]]
- [[business-process-management]]

## Lo mencionan

- [[workflow]]
