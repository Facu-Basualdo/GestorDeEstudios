---
titulo: "Código de Hamming"
tipo: concepto
tags: ["hamming","codigos","correccion","deteccion","paridad"]
temas: ["[[codificacion-de-la-informacion]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [17,18]
veces_en_examen: 0
---

# Código de Hamming

> Código que permite detectar y corregir un solo error en una palabra de información binaria agregando p bits de paridad, con 2^p ≥ i + p + 1.

Permite detectar y corregir los errores producidos en una transmisión con sólo agregar p bits de paridad.

- 'i' es bits de información.
- 'p' es bits de paridad.

Ubicación de los bits de paridad en el mensaje: son bits de paridad los que ocupan las posiciones equivalentes a las potencias de dos y el resto son bits de datos.

Control y corrección del lado del receptor:
- Si el bit de control es igual a 0 es correcto, si es 1 es incorrecto.
- La posición del error se determina según los valores obtenidos en los bits de control ordenados en forma decreciente, es decir C2, C1 y C0.
- Si todos los bits de control son igual a cero no se detecta error en el mensaje.

## Relacionado

- [[distancia-de-hamming]]
- [[bit-de-paridad]]

## Lo mencionan

- [[distancia-minima-de-un-codigo]]
- [[distancia-de-hamming]]
