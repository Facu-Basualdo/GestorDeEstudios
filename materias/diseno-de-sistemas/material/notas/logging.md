---
titulo: "Logging"
tipo: concepto
tags: ["logging","logs","movil","incidentes","analisis"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [337]
veces_en_examen: 0
---

# Logging

> Los logs son críticos para investigar y resolver incidentes que han ocurrido o pueden ocurrir en sistemas móviles.

En los sistemas móviles, los logs deben descargarse a una ubicación donde sean accesibles independientemente de la accesibilidad del propio sistema móvil. Esto sirve tanto para el manejo de incidentes como para realizar varios tipos de análisis sobre el uso del sistema.

Muchas aplicaciones de software hacen algo similar cuando encuentran un problema y piden permiso para enviar los detalles al vendedor. En los sistemas móviles, esta capacidad de logging es particularmente importante y puede que ni siquiera pidan permiso para obtener los datos.


## Lo mencionan

- [[preocupaciones-del-arquitecto]]
