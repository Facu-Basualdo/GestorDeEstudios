---
titulo: "Watchdog"
tipo: concepto
tags: ["disponibilidad","watchdog","monitoreo","deteccion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78]
veces_en_examen: 0
---

# Watchdog

> Especialización del system monitor en la que el mecanismo de detección se implementa con un contador o temporizador que se resetea periódicamente.

Durante la operación nominal, el proceso monitoreado resetea periódicamente el contador/temporizador del watchdog como parte de su señal de que está funcionando correctamente; esto a veces se llama 'petting the watchdog'.

## Relacionado

- [[monitor]]

## Lo mencionan

- [[monitor]]
- [[heartbeat]]
