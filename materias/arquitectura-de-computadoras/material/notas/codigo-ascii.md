---
titulo: "Código ASCII"
tipo: concepto
tags: ["ascii","codificacion","caracteres","7-bits"]
temas: ["[[codificacion-de-la-informacion]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [15]
veces_en_examen: 0
---

# Código ASCII

> Código estándar estadounidense para el intercambio de información que utiliza 7 bits para representar cada carácter y reserva configuraciones para funciones de control.

Aunque la mayoría de las máquinas actuales utilizan este código normalizado, suelen agregar un octavo bit para extensiones no previstas o como bit de control de paridad en transmisiones.

El éxito del código ASCII se basa en cumplir con condiciones de codificación de caracteres:
- Utiliza relaciones para establecer el código.
- Los valores para letras y caracteres siguen una secuencia binaria continua.
- Agrupa funciones de control para facilitar su identificación.

Representación de números en ASCII: cada dígito se codifica con 7 bits, asociados en dos grupos: ZONA y DÍGITO. La ZONA es siempre 011, y el DÍGITO corresponde a la representación BCD del número. Al igual que en EBCDIC, la dificultad para operaciones matemáticas con la ZONA se soluciona mediante el "empaque", comúnmente con 8 bits por dígito, sin conflictos al producirse el empaque.

## Relacionado

- [[codigo-ebcdic]]
- [[empaque]]
- [[bit-de-paridad]]

## Lo mencionan

- [[empaque]]
