---
titulo: "Funcionamiento del teclado"
tipo: concepto
tags: ["teclado","funcionamiento","scan-code","hardware"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [111]
veces_en_examen: 0
---

# Funcionamiento del teclado

> Proceso mediante el cual el teclado detecta una pulsación, genera un código de muestreo, lo envía al puerto y el procesador lo traduce y guarda hasta que el software lo solicite.

1) El circuito del teclado detecta la pulsación, genera un código de muestreo (scan code) y lo envía al puerto del teclado.
2) Se informa al procesador del suceso.
3) El procesador accede a la dirección de memoria donde se guarda el código de la tecla pulsada y lo lee.
4) Verifica teclas de control como mayúsculas, control, alt, etc.
5) Traduce y guarda el código de la tecla pulsada hasta que el software solicite la entrada del teclado.

Cuando se suelta la tecla, el circuito del teclado genera un código de tecla soltada (break code). El carácter que aparece corresponde a la tecla pulsada y depende del idioma del sistema operativo.

El sistema de transmisión del teclado es bidireccional, controlado por un reloj, con bloques de datos de 11 bits de longitud: 1 bit de inicio, 8 bits de datos, 1 bit de paridad y 1 bit de parada.

## Relacionado

- [[teclado]]

