---
titulo: "Encadenamiento de Datos"
tipo: concepto
tags: ["encadenamiento","e-s","canal","memoria","bloques"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [107]
veces_en_examen: 0
---

# Encadenamiento de Datos

> Técnica que permite pasar de una zona de memoria a otra sin necesidad de inicializar una nueva operación de E/S, bajo el control del canal y sin intervención de la UC.

Sin esta técnica, luego de la interrupción "fin de transferencia" de la primera zona, habría que generar un nuevo programa canal para recargar los registros DEC y CDP para la segunda zona.

Para que el canal tome el control del encadenamiento, se agrega a los bloques a transferir: información de dirección (DEC), cantidad de palabras (CDP), interrupción de fin de transferencia (IT) y encadenamiento (ED). Consiste en efectuar la carga de dichos registros bajo el control del canal, para pasar de una zona de memoria a otra de manera automática dentro de una única operación de E/S.

Formato de las últimas dos palabras:
- IT = 0 y ED = 1: hay encadenamiento.
- IT = 1 y ED = 0: fin del encadenamiento.
- IT = 0 y ED = 0 o IT = 1 y ED = 1: no están definidos.

Se sacrifican las dos últimas palabras del bloque para depositar la información de la dirección del bloque fragmentado y su cantidad de palabras. El anteúltimo bloque indica con IT = 1 y ED = 0 que el próximo será el último de la cadena y no deberá contener esa información en sus últimas dos palabras. Al terminar el recorrido del último bloque recién se libera el periférico.

Ventajas: mejora la performance del modelo de canal y, con el agregado de las dos palabras al final del bloque, se ahorra tener que agregar un puntero. Esta información se almacena en la zona de datos de la memoria; al llegar al final de un bloque se topa con DEC, que indica que se debe continuar leyendo en otra zona de memoria.

## Relacionado

- [[programa-canal]]

## Lo mencionan

- [[programa-canal]]
