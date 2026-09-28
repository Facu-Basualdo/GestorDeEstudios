---
titulo: "Transferencia Programada"
tipo: concepto
tags: ["transferencia","programada","e-s","instruccion","dem","cpu","instrucciones"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [100,102,103,104,105,106,107,108,109,110]
veces_en_examen: 0
---

# Transferencia Programada

> La transferencia programada se ejecuta cuando el programa llega a una instrucción de transferencia.

El computador inicializa la demanda de transferencia (DEM). La información complementaria la brinda la instrucción según la forma:

- `ENT DIR`: toma información del exterior y la almacena en DIR.
- `SAL DIR`: lee información de memoria de dirección DIR y la envía al exterior.

Ventajas: no se cambia la arquitectura, solo se añade una instrucción al set.

Desventajas: la instrucción de transferencia compite por los recursos de la CPU con el programa en curso.

## Relacionado

- [[tecnicas-de-transferencia]]

## Lo mencionan

- [[enlace-programado]]
- [[tecnicas-de-transferencia]]
