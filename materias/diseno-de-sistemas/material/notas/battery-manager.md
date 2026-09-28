---
titulo: "Battery Manager"
tipo: concepto
tags: ["bateria","energia","kernel","software"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [326]
veces_en_examen: 0
---

# Battery Manager

> El battery manager es el componente responsable de consultar periódicamente al componente del sistema que interactúa con el BMS para obtener el estado de la batería.

Los sistemas móviles con batería incluyen un componente, a menudo en el kernel del sistema operativo, que sabe cómo interactuar con el BMS y puede devolver la capacidad actual de la batería a pedido. El battery manager consulta periódicamente ese componente. Esto permite:

- Informar al usuario del estado de energía.
- Activar el modo de ahorro de batería si es necesario.
- Notificar a las aplicaciones registradas que el dispositivo está por apagarse, para que se preparen para un reinicio.
- Determinar qué aplicaciones están activas y estimar su consumo de energía.

El battery manager también consume recursos (memoria y tiempo de CPU); el tiempo de CPU puede gestionarse ajustando el intervalo de consulta.

## Relacionado

- [[smart-battery]]

## Lo mencionan

- [[smart-battery]]
- [[monitoreo-de-la-fuente-de-energia]]
