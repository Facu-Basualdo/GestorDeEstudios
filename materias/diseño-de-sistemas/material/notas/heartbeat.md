---
titulo: "Heartbeat"
tipo: concepto
tags: ["disponibilidad","deteccion","heartbeat","monitoreo"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78]
veces_en_examen: 0
---

# Heartbeat

> Es un mecanismo de detección de faults que emplea un intercambio periódico de mensajes entre un system monitor y un proceso monitoreado.

Un caso especial de heartbeat es cuando el proceso monitoreado resetea periódicamente el watchdog timer en su monitor para evitar que expire y así señale un fault. En sistemas donde la escalabilidad es una preocupación, se puede reducir el overhead de transporte y procesamiento haciendo piggyback de los mensajes heartbeat sobre otros mensajes de control. La diferencia entre heartbeat y ping/echo radica en quién tiene la responsabilidad de iniciar la verificación de salud: el monitor o el componente mismo.

## Relacionado

- [[monitor]]
- [[watchdog]]
- [[ping-echo]]
- [[detect-faults]]

## Lo mencionan

- [[detect-faults]]
- [[monitor]]
- [[timeout]]
