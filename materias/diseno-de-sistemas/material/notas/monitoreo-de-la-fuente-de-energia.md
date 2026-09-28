---
titulo: "Monitoreo de la fuente de energía"
tipo: concepto
tags: ["energia","bateria","arquitectura","monitoreo"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [326]
veces_en_examen: 0
---

# Monitoreo de la fuente de energía

> El monitoreo de la fuente de energía es la preocupación arquitectónica de supervisar el estado de la energía para iniciar comportamientos apropiados cuando la energía disponible se vuelve baja.

El capítulo 6 introduce la categoría de tácticas llamada "resource monitoring" para monitorear el uso de recursos computacionales, que son consumidores de energía. En los sistemas móviles, se necesita monitorear la fuente de energía. En un dispositivo móvil alimentado por batería, esto puede incluir informar al usuario que el nivel de batería es bajo, poner el dispositivo en modo de ahorro de batería, alertar a las aplicaciones del apagado inminente para que se preparen para un reinicio, y determinar el consumo de energía de cada aplicación. Todos estos usos dependen de monitorear el estado actual de la batería. La supervisión también juega un rol en sistemas con generador: algunas aplicaciones pueden necesitar apagarse o ponerse en standby cuando la salida del generador es baja.

## Relacionado

- [[resource-monitoring]]
- [[smart-battery]]
- [[battery-manager]]

