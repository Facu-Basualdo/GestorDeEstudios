---
titulo: "Secuenciador: Tratamiento de las Instrucciones"
tipo: concepto
tags: ["secuenciador","abacus","instrucciones","familias-de-instrucciones","bifurcadores"]
temas: ["[[secuenciador-y-control]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [75]
veces_en_examen: 0
---

# Secuenciador: Tratamiento de las Instrucciones

> Esquema general por el cual el secuenciador distribuye las distintas instrucciones en ramas, con bifurcadores gobernados por el decodificador de instrucciones, y vuelve al inicio para preparar la siguiente instrucción.

El esquema representa el caso general. Las diversas instrucciones posibles se distribuyen por ramas; las salidas de las diferentes ramas se agrupan y la salida común vuelve al inicio de una nueva instrucción. Los bifurcadores son gobernados por las señales procedentes del decodificador de instrucciones.

En Abacus, el secuenciador se plantea como un conjunto de bloques donde deben existir señales que generen la búsqueda de instrucción: SRP, ENS, ICM, PACM, LEC, SRM y ENI.

A continuación se toma un camino distinto dependiendo de la instrucción reconocida. Las familias de instrucciones son:
- IES (entrada y salida)
- IBO (con búsqueda de operando)
- ALM (solo almacenamiento, de AC a M)
- SAC (salto condicional)
- SAI (salto incondicional)

Preparar la siguiente instrucción es: ICP, SRP, ENS e ICM. Esto se realiza en todos los casos, excepto en SAI y en SAC con condición satisfecha.

## Relacionado

- [[familia-ibo-en-abacus]]
- [[alm-en-abacus]]

## Lo mencionan

- [[incp-en-phi1]]
