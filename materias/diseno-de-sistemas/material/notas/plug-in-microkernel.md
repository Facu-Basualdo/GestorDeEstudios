---
titulo: "Plug-in (Microkernel)"
tipo: concepto
tags: ["plug-in","microkernel","patron","extension","interfaces","patron-arquitectonico","modificabilidad","plugin"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[patrones-arquitectonicos]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [23]
veces_en_examen: 0
---

# Plug-in (Microkernel)

> Patrón arquitectónico con un núcleo de funcionalidad básica y plug-ins que añaden funcionalidad mediante interfaces fijas.

El patrón de plug-ins tiene dos tipos de elementos: elementos que proporcionan un conjunto básico de funcionalidad y variantes especializadas (llamadas plug-ins) que añaden funcionalidad al núcleo mediante un conjunto fijo de interfaces. Los dos tipos se suelen vincular durante la compilación o posteriormente.

Ejemplos de uso:
- La funcionalidad principal puede ser un sistema operativo reducido (el micronúcleo) que proporciona mecanismos como la gestión del espacio de direcciones de bajo nivel, la gestión de hilos y la comunicación entre procesos (IPC). Los plug-ins proporcionan la funcionalidad real: controladores de dispositivos, gestión de tareas y gestión de solicitudes de E/S.
- La funcionalidad principal es un producto que proporciona servicios a sus usuarios. Los plug-ins proporcionan portabilidad (compatibilidad con el sistema operativo o bibliotecas de soporte), funcionalidad adicional no incluida en el producto principal, y pueden actuar como adaptadores para permitir la integración con sistemas externos (véase el capítulo 7).

Beneficios:
- Los plug-ins proporcionan un mecanismo controlado para extender un producto principal y hacerlo útil en diversos contextos.
- Pueden ser desarrollados por equipos u organizaciones diferentes, lo que permite dos mercados: el producto principal y los plug-ins.
- Los plug-ins pueden evolucionar independientemente del micronúcleo; como interactúan a través de interfaces fijas, mientras estas no cambien no están acoplados.

Desventajas:
- Como los plug-ins pueden ser desarrollados por diferentes organizaciones, es más fácil introducir vulnerabilidades de seguridad y amenazas a la privacidad.

## Relacionado

- [[portabilidad]]

