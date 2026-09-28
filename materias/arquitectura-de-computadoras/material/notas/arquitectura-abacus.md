---
titulo: "Arquitectura ABACUS"
tipo: concepto
tags: ["arquitectura","abacus","sincronica","registros","buses"]
temas: ["[[arquitectura-abacus]]"]
fuente: "Apunte%20te%C3%B3rico"
paginas: [32]
veces_en_examen: 0
---

# Arquitectura ABACUS

> Arquitectura académica simple que utiliza registros formados por biestables y realiza transferencias en paralelo entre ellos, sincronizada por un reloj.

Es una máquina sincrónica: todos sus componentes están sincronizados por un reloj que produce un pulso cada θ segundos, siendo 2·θ el ciclo base de memoria. Tiene una palabra de longitud n bits y un código de operación de longitud p bits, con la suposición de que la longitud de la palabra es suficiente para direccionar toda la memoria mediante los m bits de la parte de dirección.

Se organiza en torno a dos buses: BUS M para transferir palabras entre memoria y BUS S para transferir direcciones. Sus componentes son:

- Unidad de Almacenamiento: Memoria Principal, Registro M de Intercambio o Palabra, Registro S de Selección de Memoria.
- Unidad de Control: Registro de Instrucción (I), Registro P Contador Ordinal o de Programa.
- Unidad de Procesamiento – ALU: Registro AC – Acumulador y ALU.
- Buses: BUS S de Direcciones y BUS M de Datos e Instrucciones.

## Relacionado

- [[memoria-principal]]
- [[registro-m-de-intercambio-o-palabra]]
- [[registro-s-de-seleccion-de-memoria]]
- [[registro-de-instruccion]]
- [[registro-p-contador-ordinal-o-de-programa]]
- [[registro-ac-acumulador]]
- [[alu-unidad-aritmetica-logica]]
- [[bus-s-de-direcciones]]
- [[bus-m-de-datos-e-instrucciones]]

## Lo mencionan

- [[registro-de-instruccion]]
- [[registro-p-contador-ordinal-o-de-programa]]
- [[bus-s-de-direcciones]]
- [[bus-m-de-datos-e-instrucciones]]
- [[tamano-de-cada-elemento-del-esquema]]
