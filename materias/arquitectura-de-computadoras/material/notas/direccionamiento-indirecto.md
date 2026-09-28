---
titulo: "Direccionamiento Indirecto"
tipo: concepto
tags: ["direccionamiento","indirecto","memoria","punteros","tablas-de-salto"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [64]
veces_en_examen: 0
---

# Direccionamiento Indirecto

> Modo de direccionamiento en el que el campo Dir contiene la dirección de la palabra de memoria que contiene la dirección efectiva.

La búsqueda y selección requiere de dos ciclos de memoria:
- Ciclo 1: búsqueda y lectura de la palabra de memoria con la dirección del operando.
- Ciclo 2: búsqueda y lectura del operando basada en la dirección leída en el ciclo 1.

Permite organizar la memoria como una estructura de datos gobernada por las palabras que integran los accesos al primer ciclo. Su mayor utilidad es la construcción de tablas de salto, arreglos cuyos elementos son direcciones.

Ventajas:
- Organiza la memoria como una estructura de datos flexible (punteros).
- No existe limitación en el conjunto de direcciones accesibles.

Desventajas:
- Consume dos ciclos de memoria.
- Utiliza mayor cantidad de memoria.

## Relacionado

- [[modos-de-direccionamiento]]

