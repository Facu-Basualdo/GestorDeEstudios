---
titulo: "Distancia de Hamming entre dos códigos"
tipo: concepto
tags: ["distancia","hamming","errores","bits"]
temas: ["[[codificacion-de-la-informacion]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [17]
veces_en_examen: 0
---

# Distancia de Hamming entre dos códigos

> Mínima cantidad de bits que se deben modificar para pasar de una combinación válida a otra cambiando un solo bit entre combinaciones.

Se realiza una suma sin acarreo de los dos códigos y al resultado se le cuenta la cantidad de 1's.

- Con dH = 1 no se detecta ni se corrigen errores.
- Con dH = 2 se detecta un error sin posibilidad de corrección (paridad simple).
- Se necesita mucha distancia para corregir más errores.
- La eficiencia del código de Hamming comienza a partir de distancias dH >= 3.

## Relacionado

- [[codigo-de-hamming]]
- [[bit-de-paridad]]

## Lo mencionan

- [[codigo-de-hamming]]
