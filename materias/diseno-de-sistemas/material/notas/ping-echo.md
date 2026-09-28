---
titulo: "Ping/Echo"
tipo: concepto
tags: ["disponibilidad","deteccion","red","ping","echo"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78]
veces_en_examen: 0
---

# Ping/Echo

> Es una táctica de detección de faults que intercambia un par de mensajes asíncronos request/response entre nodos para determinar la alcanzabilidad y el retardo de ida y vuelta a través de la ruta de red.

El echo indica que el componente al que se le hizo ping está vivo. El ping suele ser enviado por un system monitor. Ping/echo requiere un umbral de tiempo que le dice al componente que hace ping cuánto tiempo esperar por el echo antes de considerar que el componente pinged falló (timed out). Existen implementaciones estándar para nodos interconectados mediante Internet Protocol (IP).

## Relacionado

- [[monitor]]
- [[timeout]]
- [[detect-faults]]

## Lo mencionan

- [[detect-faults]]
- [[heartbeat]]
- [[timeout]]
