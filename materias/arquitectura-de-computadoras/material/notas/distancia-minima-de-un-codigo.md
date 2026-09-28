---
titulo: "Distancia Mínima de un Código"
tipo: concepto
tags: ["distancia","codigos","hamming","deteccion"]
temas: ["[[codificacion-de-la-informacion]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [17]
veces_en_examen: 0
---

# Distancia Mínima de un Código

> Menor distancia entre dos combinaciones binarias dentro de un código, calculada con la ecuación Dm = 2X + 1.

Dm es la distancia mínima que permite corregir errores en X líneas de datos. X es la cantidad mínima de líneas de datos diferentes entre dos palabras de código.

Ejemplos:
1. Código (0, 1): X = 0 y Dm = 1, ya que no hay líneas de datos diferentes entre las palabras de código y la distancia entre ambas es 1.
2. Código (00, 11): X = 1 y Dm = 3, porque hay una sola línea de datos diferente entre las palabras de código y la distancia entre ambas es 3; puedes ir de 00 a 01 y luego a 11. Hay una combinación incorrecta (01) entre dos correctas.

## Relacionado

- [[palabra]]
- [[codigo-de-hamming]]

