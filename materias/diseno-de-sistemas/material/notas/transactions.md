---
titulo: "Transactions"
tipo: concepto
tags: ["transacciones","atomicidad","distribuidos","tacticas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [84]
veces_en_examen: 0
---

# Transactions

> Táctica que usa semántica transaccional para asegurar que los mensajes asíncronos intercambiados entre componentes distribuidos sean atómicos, consistentes, aislados y durables (propiedades ACID).

Es utilizada por sistemas que apuntan a servicios de alta disponibilidad. La realización más común es el protocolo de 'two-phase commit' (2PC). Esta táctica previene condiciones de carrera causadas por dos procesos que intentan actualizar el mismo dato al mismo tiempo.


## Lo mencionan

- [[rollback]]
- [[prevent-faults]]
