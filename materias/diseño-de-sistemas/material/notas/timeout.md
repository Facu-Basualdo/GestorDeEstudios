---
titulo: "Timeout"
tipo: concepto
tags: ["disponibilidad","deteccion","timeout","timing","safety","tactica","tiempo","fallas","sistemas-distribuidos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78,202,310,311]
veces_en_examen: 0
---

# Timeout

> Un timeout es una táctica de disponibilidad que se usa en sistemas distribuidos para detectar fallas al decidir que una respuesta ha tardado demasiado.

Los timeouts se usan para detectar fallas en un sistema distribuido. Tienen varias consecuencias:

- No pueden distinguir entre una computadora caída o una conexión de red rota y una respuesta lenta que excede el período del timeout; esto hace que algunas respuestas lentas se etiqueten como fallas.
- No indican dónde ocurre la falla o la lentitud.
- Cuando un request dispara pedidos a otros servicios, la latencia total puede sugerir falsamente una falla aunque cada respuesta individual haya estado cerca del promedio esperado.

Un timeout no puede aislar si la causa está en el software del servicio, en la máquina virtual o física, o en la conexión de red. En la mayoría de los casos la causa no importa: se hizo una petición o se esperaba un heartbeat y no llegó una respuesta a tiempo, así que hay que tomar acción.

Configurar timeouts tiene costos: iniciar una VM nueva puede tardar minutos, o establecer una sesión nueva con otra instancia de servicio puede afectar la usabilidad. Como los tiempos de respuesta en la nube varían considerablemente, declarar una falla cuando solo hubo una demora temporal puede agregar un costo de recuperación innecesario.

Los diseñadores suelen parametrizar el mecanismo de detección con el intervalo de timeout (cuánto esperar antes de decidir que una respuesta falló) y la cantidad de respuestas perdidas en un intervalo mayor. Por ejemplo, se puede fijar un timeout de 200 milisegundos y disparar la recuperación tras 3 mensajes perdidos en un intervalo de 1 segundo. En un solo data center los parámetros pueden ser agresivos; en redes de área amplia, celulares o satelitales conviene relajarlos para evitar recuperaciones innecesarias.

## Relacionado

- [[exception-detection]]
- [[heartbeat]]
- [[ping-echo]]

## Lo mencionan

- [[ping-echo]]
- [[exception-detection]]
- [[unsafe-state-detection]]
- [[error-handling]]
- [[fallas-en-la-nube]]
