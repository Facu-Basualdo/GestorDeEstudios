---
titulo: "Final de arquitectura"
tipo: tema_examen
tags: []
temas: []
fuente: null
paginas: []
veces_en_examen: 0
---

# Final de arquitectura

> Final  · mesa Thu Feb 19 2026 00:00:00 GMT+0000 (Coordinated Universal Time)

Final de arquitectura

FINAL 19-02-2026
ARQUITECTURA DE COMPUTADORAS
1. (45%) Para verificar automáticamente si una tarjeta magnética corresponde a un usuario autorizado en un sistema de acceso, se desea diseñar un circuito secuencial cuyo autómata cumpla las siguientes condiciones:
a) Cada tarjeta posee un código de 4 dígitos. El sistema solo dispone de una entrada serial, que indica si el dígito leído en la tarjeta coincide o no coincide con el dígito correspondiente almacenado en memoria como "código autorizado".
b) El autómata debe iniciar siempre en un estado inicial, y regresar a él solo cuando hayan sido evaluados los cuatro dígitos de la tarjeta. La verificación debe realizarse en forma serial, comenzando por el dígito menos significativo (unidades).
c) Al finalizar la verificación de cada tarjeta, el autómata debe indicar el nivel de acceso otorgado o si el acceso debe ser denegado. Se definen tres niveles de acceso, según cuántos dígitos coincidan consecutivamente desde las unidades hacia arriba:
A1: acceso básico para tarjetas cuyo primer dígito coincide (unidades).
A2: acceso intermedio para tarjetas cuyos dos últimos dígitos coinciden (unidades y decenas).
A3: acceso completo para tarjetas cuyos cuatro dígitos coinciden exactamente con el código autorizado.
En caso de no cumplirse ninguna de estas condiciones, el sistema debe indicar Acceso Denegado.
Realizar:
a) Diagrama de estados del autómata secuencial solicitado.
b) Tabla de transición y salida.
c) Implementación digital mediante biestables T y la lógica combinacional necesaria.

2. (45%) Realice un programa en assembler para 8086 utilizando únicamente interrupciones (NO la librería emu8086) donde se ingresen por teclado 10 dígitos y luego imprima por pantalla: el valor máximo, la cantidad de números pares de la serie y la suma de todos los dígitos ingresados.

3. (15%) Codifique utilizando el método de Hamming el número 625, representado en Alken.


