---
titulo: "Modo por Prueba de Estado"
tipo: concepto
tags: ["e-s","transferencia","prueba-estado","periferico","pre"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [98]
veces_en_examen: 0
---

# Modo por Prueba de Estado

> El modo por prueba de estado agrega puntos de prueba que consultan el estado del periférico antes de realizar la transferencia elemental.

No es un cambio físico en el canal, sino el agregado de una nueva instrucción `PRE(Nro_Periférico)` (Prueba de Estado), que devuelve con 0 o 1 el estado del periférico.

Ventaja: logra que el programa en curso no se detenga.

Desventajas: la pregunta consume un ciclo de CPU; el canal no resuelve el problema, sino que se lo tira al periférico.

## Relacionado

- [[transferencia-elemental]]

## Lo mencionan

- [[tipos-de-transferencia-de-entrada-salida]]
