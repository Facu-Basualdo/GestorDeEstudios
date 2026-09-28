---
titulo: "Availability"
tipo: concepto
tags: ["disponibilidad","confiabilidad","recuperacion","atributos-de-calidad","arquitectura","seguridad","cia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [72,73,216]
veces_en_examen: 0
---

# Availability

> Propiedad de un software de estar presente y listo para realizar su tarea cuando se lo necesita, incluyendo la noción de recuperación cuando el sistema se rompe.

Availability (disponibilidad) se refiere a la propiedad de un software de estar ahí y listo para llevar a cabo su tarea cuando se lo necesita. Es una perspectiva amplia que engloba lo que normalmente se llama reliability (confiabilidad), e incorpora la noción de recovery (recuperación): cuando el sistema se rompe, se repara a sí mismo. También abarca la capacidad de un sistema de enmascarar o reparar faults para que no se conviertan en failures, asegurando que el período acumulado de interrupción del servicio no exceda un valor requerido en un intervalo de tiempo especificado. Esta definición subsume conceptos de reliability, robustness y cualquier otro atributo de calidad que involucre un concepto de falla inaceptable. Availability está estrechamente relacionada con security, performance y safety, pero es distinta de ellas.

## Relacionado

- [[fault]]
- [[failure]]
- [[security]]
- [[confidentiality]]
- [[integrity]]

## Lo mencionan

- [[steady-state-availability]]
- [[service-level-agreement]]
- [[high-availability]]
- [[availability-tactics]]
- [[energy-efficiency]]
- [[safety-tactics]]
- [[security]]
- [[attack]]
- [[confidentiality]]
- [[integrity]]
- [[threat-modeling]]
- [[attack-tree]]
