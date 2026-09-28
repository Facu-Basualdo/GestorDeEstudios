---
titulo: "Monitor"
tipo: concepto
tags: ["disponibilidad","monitoreo","deteccion","fault"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78]
veces_en_examen: 0
---

# Monitor

> Es un componente utilizado para monitorear el estado de salud de varias partes del sistema: procesadores, procesos, I/O, memoria, etc.

Un system monitor puede detectar failure o congestión en la red u otros recursos compartidos, como en un ataque de denial-of-service. Orquesta software que usa otras tácticas de esta categoría para detectar componentes que funcionan mal. Por ejemplo, puede iniciar self-tests, o detectar timestamps incorrectos o heartbeats perdidos. Una especialización del system monitor es el watchdog, cuando el mecanismo de detección se implementa con un contador o temporizador que se resetea periódicamente.

## Relacionado

- [[detect-faults]]
- [[watchdog]]
- [[self-test]]
- [[timestamp]]
- [[heartbeat]]

## Lo mencionan

- [[detect-faults]]
- [[watchdog]]
- [[ping-echo]]
- [[heartbeat]]
- [[self-test]]
- [[predictive-model]]
