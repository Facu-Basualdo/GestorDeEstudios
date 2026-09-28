---
titulo: "Intrusion Prevention System"
tipo: concepto
tags: ["seguridad","patrones","ips","intrusion-prevention"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [230]
veces_en_examen: 0
---

# Intrusion Prevention System

> Sistema autónomo cuyo propósito principal es identificar y analizar actividad sospechosa; si es aceptable se permite, y si es sospechosa se previene y reporta.

Estos sistemas buscan patrones sospechosos de uso general, no solo mensajes anómalos.

**Beneficios:**
- Pueden abarcar la mayoría de las tácticas de 'detect attacks' y 'react to attacks'.

**Tradeoffs:**
- Los patrones de actividad que busca un IPS cambian y evolucionan, por lo que la base de datos de patrones debe actualizarse constantemente.
- Los sistemas que emplean un IPS incurren en un costo de performance.
- Los IPS están disponibles como componentes comerciales listos para usar, lo que hace innecesario desarrollarlos pero quizás no totalmente adecuados para una aplicación específica.

## Relacionado

- [[react-to-attacks]]
- [[detect-attacks]]

