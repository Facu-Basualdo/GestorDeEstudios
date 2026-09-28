---
titulo: "Organización 3D"
tipo: concepto
tags: ["organizacion 3d","memoria","planos","punto de memoria","decodificador"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [58,59]
veces_en_examen: 0
---

# Organización 3D

> Organización de memoria en planos espaciales donde cada plano representa un bit de las palabras y cada punto de memoria tiene dos líneas de selección (S1 y S2).

Plantea planos en distintas posiciones espaciales donde cada plano representa un bit del conjunto de palabras de la memoria. 1 plano significa que la memoria tiene palabras de 1 bit; N planos significa palabras de N bits.

La memoria se divide en m matrices de 2^n biestables, donde m es el número de bits de la palabra de memoria y n el número de bits del Registro S. Cada biestable de la i-ésima matriz corresponde al bit de peso i de una de las 2^n palabras.

El punto de memoria posee 2 líneas de selección: S1 (filas) y S2 (columnas). Las dos AND de entrada tienen 4 entradas cada una, en total 8, y la AND de salida tiene 3 entradas; por lo tanto pasa de 8 entradas en la 2D a 11 entradas, lo que lo hace más caro y complejo.

Operación de lectura: se selecciona la palabra con S1 = S2 = True, se habilita la lectura (LEC) y se obtiene por las líneas de salida (O) el valor almacenado. Operación de escritura: se selecciona con S1 = S2 = True, se habilita la escritura (ESC) y se habilita la carga de la información presente en las líneas de entrada (I).

El Registro S se divide en dos partes para direccionar la memoria en forma de matriz: se usan un decodificador de filas que manda S1 y un decodificador de columnas que manda S2.

Periferia combinacional extra para la lectura: por cada matriz i existe una compuerta ORi que agrupa las salidas de cada palabra de la matriz, y una compuerta ANDi que recibe la salida de su ORi y la señal de LECTURA.

Ventajas: ocupa mucho menos espacio que la 2D por la disposición por capa y simplifica la complejidad del decodificador, que al estar dividido no crece exponencialmente. Desventajas: la simplificación del decodificador se paga con la complejidad del punto de memoria, y hay mayor temperatura por la densidad de componentes.

## Relacionado

- [[organizacion-2d]]
- [[punto-de-memoria]]
- [[decodificador]]
- [[registro-de-seleccion]]

## Lo mencionan

- [[decodificador]]
- [[calculo-de-componentes]]
- [[registro-de-seleccion]]
- [[organizacion-2-5d]]
