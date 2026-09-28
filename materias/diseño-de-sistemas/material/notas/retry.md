---
titulo: "Retry"
tipo: concepto
tags: ["reintentos","tolerancia-a-fallas","tacticas","redes","disponibilidad","retry","tactica"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81,94]
veces_en_examen: 0
---

# Retry

> Táctica de disponibilidad en la que, ante un timeout o falla al invocar un servicio, el invocador simplemente intenta de nuevo.

En el evento de un timeout o falla al invocar un servicio, el invocador simplemente vuelve a intentarlo—una y otra vez. Es una táctica comúnmente usada en disponibilidad, pero sin control puede convertirse en un ciclo interminable de reintentos.


## Lo mencionan

- [[recover-from-faults]]
- [[rollback]]
- [[circuit-breaker]]
- [[forward-error-recovery]]
