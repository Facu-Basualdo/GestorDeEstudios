---
titulo: "SAI en Abacus"
tipo: concepto
tags: ["sai","salto","instruccion","abacus"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [70]
veces_en_examen: 0
---

# SAI en Abacus

> Instrucción que sobrescribe el valor del registro P con el campo Dir para saltar a otra dirección y romper la secuencia lineal del programa.

En esta instrucción se envía `CO = SAI` y `Dir = dirección de la instrucción a la cual saltar`.

Permite la ruptura de secuencia lineal, es decir, se puede lanzar un salto a otra parte del programa (instrucción también llamada *Go to*).

**1º Fase: Búsqueda de la Instrucción**
- `(P) → S` ; `((S)) → M` ; `(M) → I`: consiste en la lectura de la instrucción en memoria.

**2º Fase: Ejecución de SAI**
- `(D) → P` ; `(D) → S`: se envía el contenido del campo Dir al Reg. P y al Reg. S. Al Reg. P para actualizarlo, sobrescribiendo su contenido, y al Reg. S para continuar la ejecución desde esa dirección.

No se realiza el incremento del Contador de Programa porque su valor ya fue actualizado con la dirección saltada.

Esta instrucción no dura más que un ciclo de memoria. Su desventaja es que se hacen 2 batidos solo para dejar a la máquina preparada para la próxima instrucción.


