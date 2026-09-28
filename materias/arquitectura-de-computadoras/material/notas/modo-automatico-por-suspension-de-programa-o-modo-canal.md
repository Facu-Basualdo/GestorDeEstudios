---
titulo: "Modo Automático, por Suspensión de Programa o Modo Canal"
tipo: concepto
tags: ["e-s","transferencia","automatico","canal","bloque","suspension"]
temas: ["[[entradasalida-y-perifericos]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [98]
veces_en_examen: 0
---

# Modo Automático, por Suspensión de Programa o Modo Canal

> El modo automático es un tipo de transferencia en el que unidades capaces toman a su cargo la transferencia de todo un bloque de información.

Si el canal necesita realizar una transferencia, no genera una interrupción, sino una solicitud de servicio para que se le conceda un ciclo de memoria. Una técnica para esto es el “Robo de Ciclo Bajo Demanda”.

La instrucción provee al canal:

- A. Número y emplazamiento (cantidad) de información a transferir.
- B. Dirección del periférico y dirección de inicio del bloque.
- C. Condición de finalización de la transferencia.

La transferencia se realiza al ritmo del periférico. El canal roba ciclos al procesador y avisa la finalización.

Desventaja: solo se puede transferir un bloque contiguo. Si se tienen 5 bloques, deben generarse 5 sentencias de información.

## Relacionado

- [[robo-de-ciclo-bajo-demanda]]
- [[canal]]

## Lo mencionan

- [[tipos-de-transferencia-de-entrada-salida]]
- [[robo-de-ciclo-bajo-demanda]]
- [[encadenamiento-automatico-de-las-transferencias]]
