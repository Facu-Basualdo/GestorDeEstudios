---
titulo: "Early Design Decisions"
tipo: concepto
tags: ["arquitectura","decisiones-de-diseno","diseno-de-software","impacto-temprano"]
temas: ["[[fundamentos-de-la-arquitectura-de-software]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [50]
veces_en_examen: 0
---

# Early Design Decisions

> La arquitectura de software es la manifestación de las decisiones de diseño más tempranas de un sistema, y esas decisiones tienen un peso desproporcionado sobre el desarrollo, el despliegue y el mantenimiento.

Cualquier diseño puede verse como una secuencia de decisiones. Como en una pintura, las primeras decisiones —el material del lienzo, el medio, la primera línea— influyen fuertemente en el resultado final y condicionan las decisiones que siguen. En arquitectura, cambiar esas decisiones tempranas produce un efecto dominó en las decisiones que dependen de ellas; a veces hay que refactorizar o rediseñar, pero no es una tarea que se encara a la ligera porque el "ripple" puede convertirse en una avalancha. El texto pregunta y ejemplifica: ¿el sistema corre en un procesador o está distribuido en varios? ¿Se usan capas y cuántas? ¿Los componentes se comunican sincrónica o asincrónicamente? ¿Interactúan transfiriendo control, datos, o ambos? ¿Se cifra la información que fluye? ¿Qué sistema operativo y qué protocolo de comunicación se eligen? Estas decisiones empiezan a dar forma a las estructuras de la arquitectura y a sus interacciones.

## Relacionado

- [[refactoring]]

## Lo mencionan

- [[communication-among-stakeholders]]
