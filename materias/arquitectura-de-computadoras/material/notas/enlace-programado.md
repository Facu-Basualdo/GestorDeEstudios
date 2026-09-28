---
titulo: "Enlace Programado"
tipo: concepto
tags: ["enlace","interfase","transferencia-programada","e-s","periferico"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [103]
veces_en_examen: 0
---

# Enlace Programado

> Interfase de acceso controlada por el programa, donde cada transferencia elemental está gobernada por una instrucción del programa en curso y se utiliza la técnica de transferencia programada.

No es un canal, sino una interfase. El acceso a memoria utiliza modo bloqueado y por interrupción de programa. El primer paso es que la CPU manda la petición DEM y la controladora devuelve la aceptación ADEM; así se sincroniza la memoria con el periférico.

Son necesarias cuatro instrucciones de E/S:
- SAL DIR (SI): extrae contenido de la dirección DIR hacia las líneas de salida de información de la interfase.
- ENT DIR (NI): almacena en la dirección DIR el contenido presente en las líneas de entrada de información de la interfase.
- GCP (SC): transfiere el contenido de la memoria a las líneas de control y dirección; permite gobernar el periférico.
- PRE (NC): almacena en el Acumulador el contenido de las líneas de entrada de estados; permite verificar si el periférico se encuentra libre.

Señales de gobierno de la interfase: SI, NI, SC y NC. Este enlace programado solo permite transferencias de una palabra; no existe la transferencia de bloques.

## Relacionado

- [[transferencia-programada]]

