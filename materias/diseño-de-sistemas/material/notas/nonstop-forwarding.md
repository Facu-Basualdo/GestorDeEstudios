---
titulo: "Nonstop Forwarding"
tipo: concepto
tags: ["routers","enrutamiento","tacticas","reintroduccion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81]
veces_en_examen: 0
---

# Nonstop Forwarding

> Concepto originado en el diseño de routers que asume que la funcionalidad se divide en un plano de control (supervisorio) y un plano de datos, y que permite continuar reenviando paquetes mientras el plano de control se recupera.

Si un router experimenta la falla de un supervisor activo, puede continuar reenviando paquetes por rutas conocidas con los routers vecinos mientras se recupera y valida la información del protocolo de enrutamiento. Cuando el plano de control se reinicia, implementa un 'graceful restart', reconstruyendo incrementalmente su base de datos de protocolo de enrutamiento mientras el plano de datos sigue operando.


## Lo mencionan

- [[recover-from-faults]]
