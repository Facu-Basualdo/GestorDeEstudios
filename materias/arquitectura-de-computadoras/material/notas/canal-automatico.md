---
titulo: "Canal Automático"
tipo: concepto
tags: ["canal","e-s","bloques","memoria"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [104]
veces_en_examen: 0
---

# Canal Automático

> Canal capaz de gestionar el conjunto de una operación de E/S sin intervención de la UC, salvo para inicializar y finalizar la operación, y que permite transferir una o varias palabras contiguas (bloques).

Las transferencias elementales pueden ser efectuadas por instrucción forzada, por robo de ciclo o por acceso directo a memoria (el esquema usa robo de ciclo). Lleva la tarea de control de transferencia, intentando disminuir el número de interrupciones a la MC y los procesos concurrentes.

Una operación de E/S se define por el sentido de la transferencia (ENT/SAL) y por la zona de almacenamiento en memoria, delimitada mediante la dirección de su primera palabra y la cantidad de palabras.

Registros:
- DEC (Dirección En Curso): se carga con la dirección de la primera palabra, se manda directamente al BUS S y se incrementa en 1 para recorrer el bloque.
- CDP (Cantidad De Palabras): se carga con la cantidad de palabras y se resta en 1 en cada ciclo; cuando llega a cero, finaliza la transferencia. Si el sentido es periférico a memoria, la controladora puede mandar la señal de fin de información.
- T (Tampón): recibe la palabra de memoria en lugar de enviarla directamente al periférico; actúa como intermediario y libera a la memoria después de un robo de ciclo. Puede ser de varias palabras para armar una cola de elementos a transferir.

El periférico determina el ritmo del canal. Ventaja: permite transferir o recibir más de una palabra contigua (bloques). Desventaja: la información debe estar contigua, pero en el mundo real está fragmentada.

## Relacionado

- [[transferencia-por-instruccion-forzada]]
- [[transferencia-por-robo-de-ciclo]]
- [[transferencia-por-acceso-directo-a-memoria]]

