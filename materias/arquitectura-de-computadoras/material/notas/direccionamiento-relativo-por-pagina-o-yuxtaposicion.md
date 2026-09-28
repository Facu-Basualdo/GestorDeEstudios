---
titulo: "Direccionamiento Relativo: Por Página o Yuxtaposición"
tipo: concepto
tags: ["direccionamiento","relativo","paginas","yuxtaposicion","memoria","multiprogramacion"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [66]
veces_en_examen: 0
---

# Direccionamiento Relativo: Por Página o Yuxtaposición

> Variante del direccionamiento relativo que divide la memoria en páginas y yuxtapone los bits de mayor peso del contador de programa a los bits del campo Dir.

La memoria se considera dividida en 2^P zonas de 2^n palabras cada una, llamadas páginas. El campo Dir contiene n bits, por lo que no permite direccionar más palabras que las de una página (2^n). Entonces se yuxtaponen los bits de mayor peso del contador de programa a los bits del campo Dir.

La dirección efectiva se compone de:
- Número de página (P), dado por los primeros p bits del contador de programa.
- Dirección de la instrucción dentro de una página, dado por el campo Dir.

Compuerta A: si está cerrada, hay direccionamiento directo en la primera página (00); si está abierta, hay direccionamiento dentro de la página dada por los primeros p bits del CP.

Tamaños: memoria de 2^P páginas, cada una con 2^n palabras.
Estructura del RS: Página | Pos. Palabra → 01 | 001.

Ventajas:
- Amplía la capacidad de direccionamiento del RS.
- Promueve bases sólidas para apoyar técnicas de multiprogramación.

Desventaja:
- Posible reducción de espacio, ya que cada programa se almacena en una página y es imposible reubicar las palabras libres.

## Relacionado

- [[direccionamiento-relativo]]
- [[registro-de-seleccion]]

