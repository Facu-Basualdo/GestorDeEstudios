---
titulo: "Smoothing Data"
tipo: concepto
tags: ["smoothing","sensores","ruido","kalman-filter"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [330]
veces_en_examen: 0
---

# Smoothing Data

> Suavizar datos es un proceso que usa una serie de mediciones a lo largo del tiempo para producir una estimación que tiende a ser más precisa que las lecturas individuales.

Los datos crudos suelen tener ruido o variación por causas como variaciones de voltaje, suciedad en el sensor u otras. Dos técnicas mencionadas son calcular un promedio móvil (moving average) y usar un filtro de Kalman (Kalman filter).

## Relacionado

- [[sensor]]

## Lo mencionan

- [[sensor-stack]]
