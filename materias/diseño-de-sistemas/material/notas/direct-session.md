---
titulo: "Direct Session"
tipo: concepto
tags: ["sesiones","load-balancer","distribuidos"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [316]
veces_en_examen: 0
---

# Direct Session

> Mecanismo en el que el cliente establece una sesión directamente con la instancia de servicio que atendió su primera solicitud, evitando al load balancer en las solicitudes subsiguientes.

Se logra haciendo que la primera solicitud de una serie sea distribuida por el load balancer a una instancia de servicio; luego el cliente establece una sesión directa con esa instancia y las solicitudes subsiguientes evitan al load balancer.
Debe usarse solo bajo circunstancias especiales, por la posibilidad de falla de la instancia y por el riesgo de sobrecarga de esa instancia.

## Relacionado

- [[sticky-messages]]
- [[load-balancer]]

## Lo mencionan

- [[sticky-messages]]
