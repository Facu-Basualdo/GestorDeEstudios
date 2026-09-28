---
titulo: "Implementación 2D – Selección Lineal"
tipo: concepto
tags: ["memorias de nucleos","seleccion lineal","hilo de palabra","hilo de bit","cargas coincidentes"]
temas: ["[[memoria-y-almacenamiento]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [55]
veces_en_examen: 0
---

# Implementación 2D – Selección Lineal

> Implementación de memorias de núcleos que reduce la cantidad de hilos usando un hilo de palabra y un hilo de bit por plano, mediante selección lineal.

El hilo que pasa por todas las columnas se llama hilo de palabra, y el hilo que pasa por todas las filas se llama hilo de bit. Para una memoria de 1 KB se necesitan 1.024 hilos de palabra y 8 hilos de bit, en total 1.032 hilos, mucho menos que los 16.384.

Escritura:
1. Puesta a cero de la palabra: se manda una corriente negativa por el hilo de dicha palabra y todos los núcleos se ponen a 0.
2. Escritura con cargas coincidentes: se manda media carga por el hilo de palabra; donde se escribe 0 no se manda nada por el hilo de bit, y donde se escribe 1 se manda la media carga restante para que los núcleos basculen.

Lectura:
1. Se manda una carga negativa por el hilo de palabra elegido que lleva todos los anillos al estado 0; los que estaban en 1 basculan e inducen una corriente apreciable en su hilo de bit. Esa corriente es menor que la necesaria para forzar una conmutación, por lo que no afecta a otros anillos del mismo hilo.
2. Se reescribe la palabra leída enviando una corriente positiva por el hilo de palabra: los núcleos que tenían carga negativa previa se mantienen en 0 y los que tenían carga positiva pasan a 1.

Desventajas: el crecimiento del plano es vertical y el decodificador resulta muy grande y caro, ya que crece exponencialmente con la cantidad de entradas. Ventaja: simplicidad de construcción material del plano.

## Relacionado

- [[memorias-de-nucleos]]
- [[decodificador]]

