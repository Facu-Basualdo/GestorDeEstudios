---
titulo: "Sidecar"
tipo: concepto
tags: ["microservicios","proxy","patron","comunicacion","monitoreo","seguridad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [189]
veces_en_examen: 0
---

# Sidecar

> Proxy que acompaña a cada microservicio y provee capacidades transversales como comunicación entre servicios, monitoreo y seguridad.

Es un proxy que acompaña a cada microservicio y proporciona capacidades ampliamente útiles para concerns independientes de la aplicación, como comunicación entre servicios, monitoreo y seguridad. Se ejecuta junto al microservicio y maneja toda la comunicación y coordinación entre servicios. Al estar desplegado junto al microservicio, reduce la latencia debida al networking, lo que mejora el rendimiento.

## Relacionado

- [[service-mesh]]

## Lo mencionan

- [[package-dependencies]]
- [[service-mesh]]
