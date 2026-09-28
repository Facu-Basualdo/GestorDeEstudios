---
titulo: "Cuadro de Gestión: UC, Canal y Controladora"
tipo: concepto
tags: ["e-s","canal","uc","controladora","ejemplo"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [106]
veces_en_examen: 0
---

# Cuadro de Gestión: UC, Canal y Controladora

> Secuencia de pasos que describe la interacción entre la controladora, el canal y la UC durante una operación de E/S, ejemplificada con la carga desde un dispositivo a la memoria.

Ejemplo: carga desde un dispositivo a la memoria.
1. La controladora posiciona la información a transferir en las líneas de información.
2. La controladora realiza una demanda de transferencia.
3. El canal muestrea la información en T, la recopila y almacena.
4. El canal hace un acuerdo con DEM y manda ADEM; también carga el registro DEC.
5. Al recibir la aceptación de la demanda, la controladora libera su registro.
6. El canal pide un ciclo de memoria con PCM e intenta robarse un ciclo para hacer la transferencia.
7. Cuando la UC encuentra el final de un ciclo en curso, envía la dirección cargada en DEC hacia el registro S.
8. En este ejemplo se realiza la carga desde un dispositivo a la memoria, por lo que se lanza un ciclo de escritura.
9. La UC mueve el contenido del registro T al registro M, acepta el pedido de ciclo de memoria del canal y escribe la palabra.
10. El canal incrementa DEC para avanzar a la siguiente palabra, decrementa CDP para actualizar la cantidad de palabras; si CDP = 0 finaliza la operación, si no espera por DEM.


