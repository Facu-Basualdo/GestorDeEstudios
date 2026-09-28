---
titulo: "System Quality Attributes"
tipo: concepto
tags: ["atributos-de-calidad","sistemas-fisicos","software-embebido","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [264]
veces_en_examen: 0
---

# System Quality Attributes

> Atributos de calidad de los sistemas físicos con software embebido, como peso, tamaño, consumo eléctrico, potencia de salida, contaminación, resistencia al clima y duración de batería, entre otros.

A menudo la arquitectura de software puede tener un efecto profundo en los atributos de calidad del sistema. Por ejemplo, un software que hace un uso ineficiente de los recursos de cómputo puede requerir memoria adicional, un procesador más rápido, una batería más grande o incluso un procesador adicional. Los procesadores adicionales suman consumo de energía, peso, perfil físico y gasto. A la inversa, la arquitectura o la implementación de un sistema puede habilitar o impedir que el software cumpla sus requisitos de calidad. Ejemplos:
1. La performance de un software está fundamentalmente limitada por la performance del procesador que lo ejecuta. Por más bien diseñado que esté, no se puede ejecutar el último modelo de pronóstico meteorológico global en una laptop vieja y esperar saber si va a llover mañana.
2. La seguridad física probablemente sea más importante y efectiva que la seguridad de software para prevenir fraude y robo. La lección es que, si uno es arquitecto de software que reside en un sistema físico, debe entender los atributos de calidad importantes para todo el sistema y trabajar con los arquitectos e ingenieros del sistema para que la arquitectura de software contribuya positivamente a lograrlos. Las técnicas de escenarios para atributos de calidad de software funcionan igual de bien para atributos de calidad de sistema.

## Relacionado

- [[energy-efficiency]]
- [[performance]]
- [[security]]

