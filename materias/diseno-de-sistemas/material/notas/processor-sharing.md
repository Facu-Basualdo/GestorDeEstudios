---
titulo: "Processor Sharing"
tipo: concepto
tags: ["cpu","scheduling","hilos","aislamiento"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [290]
veces_en_examen: 0
---

# Processor Sharing

> Processor sharing es el mecanismo por el cual un scheduler asigna hilos de ejecución a los procesadores disponibles, aislando unas aplicaciones de otras.

El scheduler selecciona y asigna un hilo de ejecución a un procesador disponible, y ese hilo mantiene el control hasta que el procesador es reprogramado (rescheduled). Ningún hilo de aplicación puede tomar control de un procesador sin pasar por el scheduler.

La reprogramación ocurre cuando el hilo cede el control del procesador, cuando expira un intervalo de tiempo fijo o cuando ocurre una interrupción.

## Relacionado

- [[shared-resources]]
- [[thread]]

## Lo mencionan

- [[shared-resources]]
