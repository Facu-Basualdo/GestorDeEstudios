---
titulo: "Direccionamiento Relativo: Por Referencia al Programa"
tipo: concepto
tags: ["direccionamiento","relativo","contador-de-programa","offset","bifurcaciones"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [65]
veces_en_examen: 0
---

# Direccionamiento Relativo: Por Referencia al Programa

> Variante del direccionamiento relativo que toma el contenido del contador de programa como punto de referencia.

El punto de referencia es el contenido del contador de programa, correspondiente a la instrucción actual o, con más frecuencia, a la instrucción siguiente.

Con este sistema se pueden direccionar dos zonas de memoria: por encima (offset positivo) y por debajo (offset negativo) de la instrucción en curso, según la parte de dirección se sume o se reste con el contador de programa.

Ventaja:
- Organiza de manera sencilla bifurcaciones hacia adelante o hacia atrás en referencia a la dirección de la instrucción en curso.

Desventaja:
- El agregado de sentencias intermedias plantea la necesidad de controlar los saltos, ya que el valor del offset podría variar.

## Relacionado

- [[direccionamiento-relativo]]

