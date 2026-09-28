---
titulo: "Direccionamiento Inmediato"
tipo: concepto
tags: ["direccionamiento","inmediato","constantes","instruccion","operando","modo","constante","mov"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [63,95]
veces_en_examen: 0
---

# Direccionamiento Inmediato

> Modo de direccionamiento en el que el campo Dir contiene el operando que se quiere procesar.

Se usa para un operando constante cuya longitud encaje en la instrucción misma. Se utiliza para trabajar con constantes que no se desean cargar en memoria. Ejemplo: (AC) + 3,1416.

Ventajas:
- Es veloz.
- Es eficiente porque libera a la memoria.
- Evita el uso de registros de máquina.

Desventajas:
- Limita el tamaño del operando a la capacidad del campo Dir.
- Complica el proceso de decodificación y los circuitos de control, al haber múltiples formas de definir cada instrucción aritmética/lógica.

## Relacionado

- [[modos-de-direccionamiento]]
- [[instruccion-mov]]

## Lo mencionan

- [[modos-de-direccionamiento-de-memoria]]
