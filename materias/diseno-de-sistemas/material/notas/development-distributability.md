---
titulo: "Development Distributability"
tipo: concepto
tags: ["atributos-de-calidad","desarrollo","arquitectura","equipos-distribuidos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [263]
veces_en_examen: 0
---

# Development Distributability

> Atributo de calidad que consiste en diseñar el software para soportar su desarrollo distribuido.

Al igual que modifiability, esta calidad se mide en términos de las actividades de un proyecto de desarrollo. Muchos sistemas se desarrollan con equipos distribuidos globalmente. Un problema a superar es coordinar las actividades de los equipos. El sistema debe diseñarse de modo que la coordinación entre equipos se minimice, es decir, que los subsistemas principales tengan un bajo acoplamiento. Esa coordinación mínima debe lograrse tanto para el código como para el modelo de datos. Los equipos que trabajan en módulos que se comunican entre sí pueden necesitar negociar las interfaces de esos módulos. Cuando un módulo es usado por muchos otros módulos, cada uno desarrollado por un equipo distinto, la comunicación y la negociación se vuelven más complejas y pesadas. Así, la estructura arquitectónica y la estructura social (y de negocio) del proyecto deben estar razonablemente alineadas. Los escenarios de development distributability tratan sobre la compatibilidad entre las estructuras de comunicación y el modelo de datos del sistema en desarrollo y los mecanismos de coordinación que utilizan las organizaciones que hacen el desarrollo.

## Relacionado

- [[modifiability]]
- [[coupling]]

