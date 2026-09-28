---
titulo: "Segmentación de Memoria"
tipo: concepto
tags: ["memoria","segmentacion","direcciones","procesador","cs","ip"]
temas: ["[[arquitectura-8086-y-modos-de-direccionamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [94]
veces_en_examen: 0
---

# Segmentación de Memoria

> La segmentación de memoria es el proceso en el que la memoria principal se divide lógicamente en diferentes segmentos, cada uno con su propia dirección base.

Básicamente se utiliza para mejorar la velocidad de ejecución del sistema, de modo que el procesador pueda recuperar y ejecutar los datos de la memoria de forma fácil y rápida.

`CS + IP` → dirección efectiva de la siguiente instrucción.

Ejemplo de acceso a datos:

1. Partimos de `Offset = D756` y `DS = 1E1E`.
2. Se multiplica `DS` por `A` (10 hexadecimal) para agregar un 0 a la derecha: `1E1E x A = 1E1E0`.
3. Se suma el segmento base más el desplazamiento: `1E1E0 + D756 = 2B936`.
4. Dirección efectiva del operando = `2B936h`.

## Relacionado

- [[puntero-de-instrucciones]]
- [[registros-de-segmento]]

