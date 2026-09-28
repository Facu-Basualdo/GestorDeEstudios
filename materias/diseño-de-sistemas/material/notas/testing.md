---
titulo: "Testing"
tipo: concepto
tags: ["testing","movil","interfaz-de-usuario","bateria","redes"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [334]
veces_en_examen: 0
---

# Testing

> Las pruebas en dispositivos móviles presentan consideraciones particulares: verificación de layouts, casos límite operativos, uso de recursos y transiciones de red.

Consideraciones específicas:

- **Test display layouts**: los smartphones y tablets vienen en gran variedad de formas, tamaños y relaciones de aspecto; verificar la corrección del layout en todos ellos es complicado. Por ejemplo, una generación ingenua para una pantalla pequeña podría producir controles de 1×1 píxel, controles en el borde o controles superpuestos que escapen a la detección durante las pruebas.
- **Test operational edge cases**: la aplicación debe sobrevivir al agotamiento de la batería y al apagado del sistema; hay que asegurar y probar la preservación del estado. Además, como la interfaz de usuario opera asincrónicamente respecto del software que provee la funcionalidad, cuando no reacciona correctamente es difícil recrear la secuencia de eventos que causó el problema.
- **Test resource usage**: algunos fabricantes ofrecen simuladores de sus dispositivos, pero probar el uso de batería con un simulador es problemático.
- **Test for network transitions**: hay que asegurar que el sistema haga la mejor elección cuando hay múltiples redes disponibles; al pasar de una red a otra (Wi-Fi, celular, otro Wi-Fi), el usuario debería no notar la transición.

Para sistemas de transporte o industriales, las pruebas tienden a organizarse en cuatro niveles.

## Relacionado

- [[cuatro-niveles-de-prueba]]

## Lo mencionan

- [[preocupaciones-del-arquitecto]]
