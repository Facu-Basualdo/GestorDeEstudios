---
titulo: "Orchestrate"
tipo: concepto
tags: ["orquestacion","integrabilidad","workflow","servicios","bpm"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [145]
veces_en_examen: 0
---

# Orchestrate

> Orchestrate es una táctica que usa un mecanismo de control para coordinar y gestionar la invocación de servicios particulares, de modo que puedan permanecer ajenos entre sí.

La orquestación ayuda a integrar un conjunto de servicios reutilizables débilmente acoplados para crear un sistema que satisface una nueva necesidad. Los costos de integración se reducen cuando la orquestación se incluye en una arquitectura de manera que soporte los servicios que probablemente se integren en el futuro. Esta táctica permite que las actividades de integración futuras se enfoquen en la integración con el mecanismo de orquestación en lugar de la integración punto a punto con múltiples componentes.

Los motores de workflow comúnmente usan la táctica de orquestación. Un workflow es un conjunto de actividades organizadas que ordenan y coordinan componentes de software para completar un proceso de negocio; puede consistir en otros workflows, cada uno de los cuales puede consistir a su vez en servicios agregados. El modelo de workflow fomenta la reutilización y la agilidad, lo que lleva a procesos de negocio más flexibles. Los procesos de negocio pueden gestionarse bajo una filosofía de gestión de procesos de negocio (BPM) que los ve como activos competitivos. La orquestación compleja puede especificarse en un lenguaje como BPEL (Business Process Execution Language).

La orquestación funciona reduciendo el número de dependencias entre un sistema S y los nuevos componentes {Ci}, y eliminando por completo las dependencias explícitas entre los componentes {Ci}, al centralizar esas dependencias en el mecanismo de orquestación. También puede reducir la distancia sintáctica y semántica de datos si se usa junto con tácticas como la adhesión a estándares.

## Relacionado

- [[adhere-to-standards]]

