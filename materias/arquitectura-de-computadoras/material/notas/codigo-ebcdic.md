---
titulo: "Código EBCDIC"
tipo: concepto
tags: ["ebcdic","ibm","codificacion","zona","bcd"]
temas: ["[[codificacion-de-la-informacion]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [14]
veces_en_examen: 0
---

# Código EBCDIC

> Código expandido de intercambio binario decimal diseñado exclusivamente por IBM, que utiliza 8 bits para representar cada carácter.

Fue fundamental para códigos posteriores normalizados. La correspondencia entre las representaciones binarias se encuentra en tablas con distintos formatos. Puede presentar pequeñas alteraciones en países con distintos alfabetos.

Representación numérica en EBCDIC: cada dígito decimal se representa internamente con 8 bits, distribuidos en dos partes:
- ZONA: los 4 bits de orden superior del byte, con una secuencia binaria fija (1111) para cualquier número (F en hexadecimal).
- DÍGITO: representa el número decimal codificado en BCD en los 4 bits restantes.

Los datos numéricos codificados en EBCDIC con zona no son aptos para operaciones aritméticas. Para realizar operaciones, se debe eliminar la parte correspondiente a la ZONA de cada byte, proceso conocido como "empaque". La información resultante se llama información empacada o decimal sin zona. Los datos numéricos con zona se denominan información desempacada o zoneada.

Ejemplo: 36045 en EBCDIC. Medio byte correspondiente al signo: F o C (positivo), B o D (negativo).

## Relacionado

- [[byte]]
- [[empaque]]

## Lo mencionan

- [[empaque]]
- [[codigo-ascii]]
