---
titulo: "Message Handling Systems"
tipo: concepto
tags: ["sistemas","mensajes","command","controller"]
temas: ["[[controladores-y-arquitectura-en-capas]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [42]
veces_en_examen: 0
---

# Message Handling Systems

> Sistemas o servidores que reciben solicitudes desde otros procesos, como un conmutador de telecomunicaciones.

En estos sistemas, el diseño de la interfaz y del controller es algo diferente del caso común.

Una solución que se menciona es usar el patrón Command y el patrón Command Processor, aunque los detalles se ven en un capítulo posterior.

La sección de Related Patterns agrega que, en un sistema de manejo de mensajes, cada mensaje puede ser representado y manejado por un objeto Command separado.

## Relacionado

- [[controller]]

