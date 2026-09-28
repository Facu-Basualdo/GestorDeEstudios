---
titulo: "Flip-Flop Maestro-Esclavo"
tipo: concepto
tags: ["flip-flop","maestro-esclavo","sincronizacion","clock","cascada","electronica-digital","biestable"]
temas: ["[[circuitos-digitales-y-sistemas-logicos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [27]
veces_en_examen: 0
---

# Flip-Flop Maestro-Esclavo

> Componente que almacena un bit y cambia su estado en respuesta a señales de control, compuesto por dos Flip-Flop's en cascada (maestro y esclavo) y un inversor, para sincronizar señales y evitar cambios inesperados.

Es un componente esencial en electrónica digital que almacena un único bit y cambia su estado en respuesta a señales de control. Compuesto por dos Flip-Flop's conectados en cascada, llamados maestro y esclavo, y un inversor, se utiliza para sincronizar señales y evitar problemas en aplicaciones secuenciales.

Su operación tiene dos fases clave: la fase de captura (maestro), donde se asegura la información de entrada, y la fase de transferencia (esclavo), donde el valor almacenado se presenta como salida. Esta estructura maestro-esclavo se emplea para evitar cambios inesperados en la salida durante las transiciones de datos de entrada, garantizando un comportamiento estable.

Durante la operación, cuando el pulso de reloj CK = 1, la información se transmite al maestro; cuando CK = 0, la salida del inversor es 1, aísla el maestro, y el esclavo se activa. La sincronización del maestro y esclavo asegura que ambos estén en el mismo estado al finalizar el pulso de reloj, evitando interferencias externas durante el proceso.

## Relacionado

- [[biestable]]

