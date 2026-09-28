---
titulo: "Interfase"
tipo: concepto
tags: ["interfase","canal","controladoras","lineas","comunicacion"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [99]
veces_en_examen: 0
---

# Interfase

> La interfase es la organización lógica que permite establecer las líneas de comunicación entre el canal de la arquitectura y las controladoras de los periféricos.

Existen dos modelos de interfase: Concentración por Multiplaje y Concentración por Líneas de Ómnibus.

Tipos de líneas de transferencia:

- Hilo de Gobierno “E/S”: indica el sentido de la transferencia.
- Hilos de Sincronización: sirven para sincronizar la transferencia; incluyen DEM (“Demanda”) y ADEM (“Aceptación”).
- Hilos de Información: la cantidad depende del canal; en este modelo son 16 líneas.

## Relacionado

- [[canal]]
- [[concentracion-por-multiplaje]]
- [[concentracion-por-lineas-de-omnibus]]

## Lo mencionan

- [[concentracion-por-multiplaje]]
