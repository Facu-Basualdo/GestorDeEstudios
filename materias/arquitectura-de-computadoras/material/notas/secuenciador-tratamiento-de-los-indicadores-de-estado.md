---
titulo: "Secuenciador: Tratamiento de los Indicadores de Estado"
tipo: concepto
tags: ["secuenciador","indicadores-de-estado","interrupciones","abacus","pcmes"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [76]
veces_en_examen: 0
---

# Secuenciador: Tratamiento de los Indicadores de Estado

> Manejo que hace el secuenciador de las intervenciones externas mediante los indicadores de estado IT y PCMES, bajo ciertas hipótesis sobre interrupciones y peticiones de ciclo de memoria.

Las intervenciones externas (petición de ciclo para E/S, interrupciones, etc.) son consideradas por bifurcadores lógicos. Se explican bajo las siguientes hipótesis:
- El computador no puede ser detenido por el operador.
- El computador no acepta una interrupción más que al fin de una instrucción.
- El computador acepta una petición de ciclo de memoria a cada fin de ciclo, pero después de haberlo concedido, es él quien utiliza el siguiente ciclo.

Existen dos tipos de indicadores de estado:
- IT: interrupción de un periférico.
- PCMES: petición de un canal por un ciclo de memoria de E/S.

Según sus valores:
- IT = 1 y PCMES = 1: hay un pedido de periférico para cargar un dato a memoria; primero se atiende el ciclo de memoria y luego la interrupción que carga el dato en memoria.
- IT = 1 y PCMES = 0: hay un pedido de periférico sin requerir un ciclo de memoria (ej.: movimiento del mouse).
- IT = 0 y PCMES = 1: hay un pedido de un canal por un ciclo de E/S; debe atender el ciclo de instrucción.
- IT = 0 y PCMES = 0: hay un pedido de un canal pero no hay petición de E/S; se realiza el ciclo de instrucción.

Luego, dependiendo de la instrucción, se toma un camino:
- Si PCMES = 1, la instrucción requiere 2 ciclos de memoria.
- Si PCMES = 0, la instrucción no requiere ciclo de E/S y es de la familia IBO.
- Si la instrucción es ALM, SAC o SAI, no se requiere búsqueda de operando.

## Relacionado

- [[familia-ibo-en-abacus]]
- [[alm-en-abacus]]

