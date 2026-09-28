---
titulo: "Timestamp"
tipo: concepto
tags: ["disponibilidad","deteccion","timestamp","sistemas-distribuidos","safety","tactica"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78,202]
veces_en_examen: 0
---

# Timestamp

> Es una táctica usada para detectar secuencias incorrectas de eventos, principalmente en sistemas distribuidos de paso de mensajes.

Un timestamp de un evento se puede establecer asignando el estado de un reloj local al evento inmediatamente después de que ocurre. También se pueden usar números de secuencia, ya que los timestamps en un sistema distribuido pueden ser inconsistentes entre distintos procesadores. El Capítulo 17 contiene una discusión más completa sobre el tema del tiempo en un sistema distribuido.

## Relacionado

- [[detect-faults]]

## Lo mencionan

- [[detect-faults]]
- [[monitor]]
- [[unsafe-state-detection]]
