---
titulo: "Direccionamiento Relativo: Por Base y Desplazamiento"
tipo: concepto
tags: ["direccionamiento","relativo","base","desplazamiento","registro-base"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [65]
veces_en_examen: 0
---

# Direccionamiento Relativo: Por Base y Desplazamiento

> Variante del direccionamiento relativo en la que un Registro Base contiene la dirección de inicio de un programa o lista de operandos y el campo Dir es el desplazamiento relativo a la base.

Dirección Efectiva = Registro Base + Desplazamiento

Ventajas:
- Permite direccionar palabras más allá de la capacidad del registro I.
- Organiza la memoria como una estructura de datos flexible.
- Organiza de manera sencilla bifurcaciones hacia adelante o hacia atrás.

Desventajas:
- Consume tiempo al utilizar la suma para su resolución.
- Cuando la memoria física es demasiado grande y organizada por bancos, se requiere un registro Base por banco para poder alcanzarlos.
- Mayor costo de implementación debido a los sumadores y registros Base.

## Relacionado

- [[direccionamiento-relativo]]

## Lo mencionan

- [[direccionamiento-indexado]]
