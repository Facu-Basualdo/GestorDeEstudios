---
titulo: "Preocupaciones de conectividad de red"
tipo: concepto
tags: ["redes","arquitectura","movil","conectividad"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [328]
veces_en_examen: 0
---

# Preocupaciones de conectividad de red

> Las preocupaciones de conectividad de red son los aspectos que el arquitecto debe equilibrar al diseñar la comunicación y la conectividad de red de un sistema móvil.

Incluyen:

- **Número de interfaces de comunicación:** solo deben incluirse las estrictamente necesarias para optimizar consumo de energía, generación de calor y espacio.
- **Movimiento entre protocolos:** el sistema puede pasar de un entorno con un protocolo a otro (por ejemplo, de Wi-Fi a celular durante una sesión de video) y la transición debe ser transparente para el usuario.
- **Elección dinámica del protocolo:** si hay múltiples protocolos disponibles, se elige según costo, ancho de banda y consumo de energía.
- **Modificabilidad:** el sistema debe poder soportar cambios o reemplazos en los elementos de comunicación debido a la evolución de los protocolos.
- **Ancho de banda:** la información debe analizarse según distancia, volumen y requerimientos de latencia.
- **Conectividad intermitente/limitada/nula:** debe mantenerse la integridad de los datos y poder reanudar el cómputo sin pérdida de consistencia cuando vuelve la conectividad. Deben existir modos degradados o de fallback disponibles dinámicamente.
- **Seguridad:** los dispositivos móviles son vulnerables a spoofing, eavesdropping y man-in-the-middle, por lo que responder a esos ataques es parte de las preocupaciones.


