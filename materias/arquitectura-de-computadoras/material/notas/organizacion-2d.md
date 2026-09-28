---
titulo: "Organización 2D"
tipo: concepto
tags: ["organizacion 2d","memoria","punto de memoria","flip-flop rs","decodificador"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [57]
veces_en_examen: 0
---

# Organización 2D

> Organización de memoria cuyo punto de memoria tiene una única línea de selección (S) y se direcciona mediante un decodificador que activa una línea por cada combinación de entrada.

El punto de memoria está formado por un Flip-Flop RS y se asocian 3 entradas y 1 salida.

Operación de lectura: primero se selecciona la palabra S = True y se habilita la lectura (LEC). El contenido de las celdas de la palabra se transfiere, habilitando las líneas de salida (O), al Registro M.

Operación de escritura: se selecciona S = True, se habilita la escritura (ESC), se carga desde el Registro M la información disponible en las líneas de entrada (I = Dato) y, por último, se habilita la escritura W = True para la grabación sobre la palabra.

El decodificador tiene una entrada por cada bit de la dirección que decodifica. En general, para n bits de entrada tendrá 2^n líneas de salida, y para cada combinación de entrada se activará una sola línea de salida.

Ventaja: punto de memoria y arquitectura sencillas. Desventajas: ampliar la memoria hace crecer el espacio y el costo de forma exponencial, y el decodificador resulta muy grande y caro a medida que aumenta el tamaño de la memoria.

## Relacionado

- [[punto-de-memoria]]
- [[decodificador]]
- [[registro-de-seleccion]]

## Lo mencionan

- [[decodificador]]
- [[calculo-de-componentes]]
- [[registro-de-seleccion]]
- [[organizacion-3d]]
- [[organizacion-2-5d]]
