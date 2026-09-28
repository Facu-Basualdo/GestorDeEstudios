---
titulo: "Paridad Vertical Simple o a Nivel Carácter"
tipo: concepto
tags: ["paridad","caracter","deteccion","errores"]
temas: ["[[codificacion-de-la-informacion]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [16]
veces_en_examen: 0
---

# Paridad Vertical Simple o a Nivel Carácter

> Modalidad de paridad que agrega un bit al final de cada carácter para que la suma de unos del carácter completo sea par o impar.

El bit de paridad se agrega al octeto. Al final de cada carácter se incluye un bit, de manera que la suma de 'unos' del carácter completo sea par (paridad par) o impar (paridad impar).

Este código de detección de errores solo se utiliza si la tasa de error en la cadena de bits no es superior a uno; es decir, si hay dos bits erróneos no permite detectarlos.

## Relacionado

- [[bit-de-paridad]]
- [[caracter]]

## Lo mencionan

- [[bit-de-paridad]]
- [[paridad-entrelazada]]
