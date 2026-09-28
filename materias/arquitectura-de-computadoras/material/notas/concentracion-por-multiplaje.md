---
titulo: "Concentración por Multiplaje"
tipo: concepto
tags: ["multiplaje","interfase","canal","controladoras","multiplexor"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [99]
veces_en_examen: 0
---

# Concentración por Multiplaje

> La concentración por multiplaje es un modelo de interfase que comunica el canal con el periférico específico mediante la concentración de varias vías en una sola.

Componentes:

- **Multiplaje**: permite concentrar varias vías de entrada en una sola o distribuir una vía de salida en varias.
- **Multiplexor**: dispositivo que recibe varias entradas de datos (controladoras) y las transmite por una única salida (canal).
- **Matriz de Decodificación**: tiene líneas verticales (dirección de la controladora y del periférico específico) y líneas horizontales (dirección del bus por el que debe fluir la información al multiplexor).
- **Reg. Dirección**: indica la dirección de la controladora del periférico.
- **Reg. Intercambio**: envía y recibe información a una y solo una controladora, la indicada por el Reg. Dirección.

Desventajas: circuito complejo y costoso.

Ventajas: más rápida porque comunica directamente el canal con el periférico específico.

## Relacionado

- [[multiplaje]]
- [[multiplexor]]
- [[matriz-de-decodificacion]]
- [[interfase]]
- [[canal]]

## Lo mencionan

- [[multiplexor]]
- [[multiplaje]]
- [[interfase]]
- [[matriz-de-decodificacion]]
- [[concentracion-por-lineas-de-omnibus]]
