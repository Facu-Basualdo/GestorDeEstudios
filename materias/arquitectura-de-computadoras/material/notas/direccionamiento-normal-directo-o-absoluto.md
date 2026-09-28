---
titulo: "Direccionamiento Normal, Directo o Absoluto"
tipo: concepto
tags: ["direccionamiento","directo","absoluto","memoria","modos"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [63]
veces_en_examen: 0
---

# Direccionamiento Normal, Directo o Absoluto

> Modo de direccionamiento en el que el campo Dir contiene la dirección efectiva de la palabra en memoria.

Ocupa solo un ciclo de memoria. Su implementación es muy sencilla pero solo permite direccionar 2^Dir palabras de memoria.

Ventajas:
- Es veloz porque no está asociado con circuitos complicados.
- Requiere solo un ciclo de memoria.
- Sencillez: no necesita ningún cálculo.

Desventajas:
- Según el número de bits del campo Dir, el rango de posiciones direccionables es más o menos amplio.
- Si fuera el único modo, el campo Dir debería tener suficiente longitud para direccionar toda la memoria, alargando demasiado el registro de instrucción.

## Relacionado

- [[modos-de-direccionamiento]]

