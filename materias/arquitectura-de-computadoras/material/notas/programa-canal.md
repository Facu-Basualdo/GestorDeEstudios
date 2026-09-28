---
titulo: "Programa Canal"
tipo: concepto
tags: ["canal","e-s","programa","instrucciones","memoria"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [108]
veces_en_examen: 0
---

# Programa Canal

> Unidad de canal programable capaz de leer, codificar y ejecutar un programa de gobierno de E/S registrado en MC, y también el conjunto de operaciones de E/S que se pasan directamente al controlador.

El programa de gobierno se ejecuta con los mismos derechos con los que la UC lee, decodifica y ejecuta un programa de procesamiento.

Convenciones:
- La UC lee, decodifica y ejecuta instrucciones.
- El canal lee, decodifica y ejecuta instrucciones de canal.
- El controlador de periférico recibe, decodifica y ejecuta códigos de operación de periféricos.

Formato del programa de la UC:
- INICIO E/S: instrucción que genera el inicio de una operación de E/S; se manda a la UC.
- DIR Periférico: indica la dirección del periférico; se manda al canal.
- DIR Programa E/S: indica la dirección del programa canal para transferir a ese periférico; se manda al canal.

Durante la ejecución del programa de la UC, se genera en memoria una lista de instrucciones de canal, conocida como "Programa de Gobierno de E/S" o simplemente "Programa Canal".

Formato del Programa Canal:
- COP: código de operación.
- DIR: dirección de inicio del bloque.
- CDP: cantidad de palabras.
- IT: bit de interrupción.
- ED: bit de encadenamiento de datos.
- EG: bit de encadenamiento de gobierno.

Existe un doble encadenamiento: uno para los datos (ED), que encadena bloques de memoria con datos, y otro para los programas (EG), que encadena bloques de memoria con programas. La dirección de la primera instrucción del canal se carga en el Registro Dirección de Instrucción de Canal; a partir de ahí el programa canal se desarrolla sin intervención de la Unidad Central. El canal busca en memoria la primera instrucción de canal y el registro debe irse incrementando para avanzar de instrucción.

Las demandas de transferencias elementales salen del controlador de periférico, que trabaja a su propio ritmo. Por cada transferencia se actualizan DEC y CDP. La transferencia termina cuando CDP = 0 o por la señal "Fin de Transferencia" del controlador de periférico.

El canal controla los tres indicadores:
- Si ED = 0: pasa a la siguiente instrucción de canal, ignorando COP.
- Si EG = 0: pasa a la siguiente instrucción de canal usando el nuevo COP.
- Si IT = 1: se genera una interrupción al final de la transferencia.

## Relacionado

- [[encadenamiento-de-datos]]

## Lo mencionan

- [[encadenamiento-de-datos]]
