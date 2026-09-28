---
titulo: "Separated Safety"
tipo: concepto
tags: ["seguridad","patron","certificacion","separacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [210]
veces_en_examen: 0
---

# Separated Safety

> Patrón de seguridad que divide el sistema en porciones críticas para la seguridad y porciones no críticas, reduciendo los costos de certificación y limitando la influencia de la parte no crítica sobre la crítica.

Los sistemas críticos para la seguridad deben ser certificados frecuentemente por alguna autoridad. Certificar un sistema grande es costoso, pero dividir el sistema en porciones críticas y no críticas puede reducir esos costos. La porción crítica debe ser certificada, y también la división entre ambas porciones debe certificarse para asegurar que no haya influencia de la parte no crítica sobre la crítica.

**Beneficios:**
- El costo de certificación se reduce porque solo hay que certificar una porción (usualmente pequeña) del sistema total.
- Se acumulan beneficios de costo y seguridad porque el esfuerzo se concentra en las porciones pertinentes a la seguridad.

**Tradeoffs:**
- El trabajo de realizar la separación puede ser costoso, por ejemplo instalar dos redes diferentes en un sistema para separar mensajes críticos de los que no lo son. Este enfoque limita el riesgo y las consecuencias de bugs en la porción no crítica sobre la crítica.
- Separar el sistema y convencer a la agencia certificadora de que la separación se hizo correctamente y no hay influencias es difícil, pero mucho más fácil que la alternativa: que la agencia certifique todo al mismo nivel rígido.


## Lo mencionan

- [[design-assurance-level]]
