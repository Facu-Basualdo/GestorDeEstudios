---
titulo: "Timeout Mechanism"
tipo: concepto
tags: ["timeout","deteccion-de-fallas","tolerancia-a-fallas","disponibilidad"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [311,312,313,314,315,316]
veces_en_examen: 0
---

# Timeout Mechanism

> Mecanismo de detección de fallas que define cuánto tiempo esperar antes de considerar fallida una respuesta y cuántas respuestas perdidas se necesitan para disparar la recuperación.

El mecanismo de timeout tiene dos parámetros: el intervalo de timeout (cuánto esperar antes de decidir que una respuesta falló) y la cantidad de respuestas perdidas en un intervalo más largo que dispara la recuperación de fallas. En general no se activa la recuperación tras una única respuesta perdida: se busca un número de respuestas perdidas sobre un período más largo. Por ejemplo, se puede configurar un timeout de 200 ms y disparar la recuperación después de 3 mensajes perdidos en un intervalo de 1 segundo. Para sistemas en un solo data center los timeouts y umbrales pueden ser agresivos; en redes WAN, celulares o satelitales deben relajarse por los retardos intermitentes.


