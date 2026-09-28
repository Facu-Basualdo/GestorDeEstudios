# Códigos numéricos (BCD, ponderados, Exceso 3, Gray)
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 1 · Peso en exámenes: 3/3 (decodificar después del Hamming, 5/5 parciales) · Fuentes:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Codificación)
> ("Codificación" y "A. Hamming + códigos"); *Apunte teórico* (pp. 12–13, vía Faro); **tabla
> verificada con NotebookLM el 2026-09-28**: *2025 - Guía Autoestudio Codificación* (pp. 2–4) y
> *Sist. Numeración y Codificación 2018* (filminas 67, 70 y 73).

## Preguntas de recuperación

- ¿Qué es un código? :: Una correspondencia entre un conjunto de símbolos y combinaciones binarias. Con n bits se codifican hasta 2ⁿ símbolos. [→ Definiciones](#Definiciones)
- ¿Cuántos bits hacen falta como mínimo para codificar 40 símbolos? :: 6, porque 2⁵ = 32 < 40 ≤ 64 = 2⁶. [→ Definiciones](#Definiciones)
- ¿Qué es BCD y cuántas combinaciones quedan sin usar? :: Cada dígito decimal se codifica en 4 bits; de las 16 combinaciones se usan 10 y quedan 6 sin usar. [→ BCD y códigos ponderados](#BCD%20y%20códigos%20ponderados)
- Nombrá tres códigos ponderados y dos no ponderados. :: Ponderados: BCD 8421, Aiken (2421) y 8 4 -2 -1. No ponderados: Exceso 3 y Gray. [→ BCD y códigos ponderados](#BCD%20y%20códigos%20ponderados)
- ¿Aiken y 2421 son lo mismo? :: Aiken es **una elección dentro del 2421**: con pesos 2421 los dígitos 2 a 7 tienen dos combinaciones posibles, y Aiken toma la que lo hace autocomplementario (0 a 4 empiezan con 0; 5 a 9, con 1). [→ BCD y códigos ponderados](#BCD%20y%20códigos%20ponderados)
- ¿Qué es un código autocomplementario? ¿Cuáles lo son? :: Aquel en que el complemento a 9 de un dígito se obtiene invirtiendo sus bits. Lo son **Aiken, 8 4 -2 -1 y Exceso 3**. BCD y Gray no. [→ Propiedades](#Propiedades)
- ¿Qué significa que un código sea continuo y que sea cíclico? :: Continuo (progresivo): combinaciones consecutivas difieren en un solo bit. Cíclico: además, la última difiere en un bit de la primera. [→ Propiedades](#Propiedades)
- ¿Cómo se pasa de Gray a binario? :: El primer bit se copia; cada bit siguiente = bit binario anterior XOR bit Gray actual. [→ Gray a binario](#Gray%20a%20binario)
- ¿Cuánto vale 7 en Exceso 3? :: 1010 (7 + 3 = 10). [→ Tabla 0–9](#Tabla%200–9)
- ¿Qué combinaciones son inválidas en BCD 8421? :: De 1010 a 1111 (10 a 15). [→ Tabla 0–9](#Tabla%200–9)
- ¿Qué permite el código BCD Aiken? *(cátedra, Cuestionario Teórico Nº 1)* :: Hallar el **complemento restringido** (a 9) de un número decimal invirtiendo sus bits: es autocomplementario. [→ Propiedades](#Propiedades)
- ¿Cuántos bits hacen falta para 52 símbolos? *(cátedra, Cuestionario Teórico Nº 1)* :: **log₂ 52** redondeado para arriba: 6 bits (2⁶ = 64 ≥ 52). [→ Definiciones](#Definiciones)

## Cuestionario

1. ¿Cuáles de estos códigos son autocomplementarios?
   - [x] Exceso 3
   - [x] Aiken
   - [x] 8 4 -2 -1
   - [ ] BCD 8421
   > Invertir los bits da el complemento a 9: en Exceso 3, 2 = 0101 → 1010 = 7; en Aiken, 4 = 0100 → 1011 = 5; en 84-2-1, 1 = 0111 → 1000 = 8. En BCD, invertir 0000 da 1111, que no es 9. [→ Propiedades](#Propiedades)
2. ¿Cuánto es 1101 (Gray) en binario?
   - [x] 1001
   - [ ] 1011
   - [ ] 0110
   - [ ] 1101
   > b3 = 1 · b2 = 1 ⊕ 1 = 0 · b1 = 0 ⊕ 0 = 0 · b0 = 0 ⊕ 1 = 1 → 1001 (9). [→ Gray a binario](#Gray%20a%20binario)
3. ¿Qué dígito representa 0110 en Exceso 3?
   - [x] 3
   - [ ] 6
   - [ ] 9
   - [ ] Es una combinación inválida
   > 0110 = 6 en binario, menos 3 = 3. [→ Tabla 0–9](#Tabla%200–9)
4. ¿Qué combinación es inválida en BCD 8421?
   - [x] 1100
   - [ ] 1001
   - [ ] 0111
   - [ ] 0000
   > En 8421 sólo se usan 0000 a 1001; 1100 es 12. [→ Tabla 0–9](#Tabla%200–9)
5. ¿Cuántos bits como mínimo necesitás para codificar 40 símbolos?
   - [x] 6
   - [ ] 5
   - [ ] 7
   - [ ] 40
   > El menor n con 2ⁿ ≥ 40: 2⁵ = 32 no alcanza, 2⁶ = 64 sí. [→ Definiciones](#Definiciones)
6. En 2421 general, ¿cuántas representaciones tiene el dígito 5?
   - [x] Dos: 0101 y 1011
   - [ ] Una: 0101
   - [ ] Una: 1011
   - [ ] Ninguna, es inválido
   > Con pesos 2, 4, 2, 1: 0101 = 4 + 1 y 1011 = 2 + 2 + 1. Aiken elige 1011 para ser autocomplementario. [→ BCD y códigos ponderados](#BCD%20y%20códigos%20ponderados)
7. ¿Qué propiedad caracteriza al código Gray?
   - [x] Dos combinaciones consecutivas difieren en un solo bit
   - [ ] Es ponderado 8421
   - [ ] Es autocomplementario
   - [ ] Todas sus palabras tienen la misma cantidad de unos
   > Gray es continuo, cíclico y reflejado. [→ Propiedades](#Propiedades)
8. El sistema de codificación BCD AIKEN… *(cátedra, Cuestionario Teórico Nº 1)*
   - [x] Permite hallar el complemento restringido de un número decimal BCD invirtiendo sus bits
   - [ ] Permite hallar el complemento de un número decimal BCD invirtiendo sus bits
   - [ ] No permite hallar el complemento restringido invirtiendo sus bits
   - [ ] Ninguna es correcta
   > El complemento **restringido** es el complemento a la base menos uno (a 9). Poner "el complemento" a secas contó como error. [→ Propiedades](#Propiedades)
9. Para representar las letras del alfabeto, los dígitos decimales y los signos de puntuación (52 símbolos en total) se necesitan… *(cátedra, Cuestionario Teórico Nº 1)*
   - [x] log base dos de 52 bits
   - [ ] La base elevada a la 52
   - [ ] Log natural de 52
   - [ ] 2 elevado a la 52
   > Con n bits hay 2ⁿ combinaciones: n = log₂ 52 ≈ 5,7 → 6 bits. [→ Definiciones](#Definiciones)

## Contenido

### Definiciones

- **Código**: correspondencia entre un conjunto de símbolos y combinaciones binarias.
- Con n bits se codifican hasta 2ⁿ símbolos: la cantidad mínima de bits es el menor n con 2ⁿ ≥ cantidad de símbolos.

### BCD y códigos ponderados

- **BCD**: cada dígito decimal en 4 bits; quedan 6 combinaciones sin usar.
- **Ponderados** (cada dígito respeta el peso de cada bit según su posición): **BCD 8421**, **Aiken (2421)** y **8 4 -2 -1** (*Apunte teórico*, p. 13).
- **No ponderados** (la representación es arbitraria o responde a otra regla): **Exceso 3** (BCD + 3) y **Gray** (reflejado).
- **Aiken y 2421**: con pesos 2, 4, 2, 1, los dígitos **2 a 7 tienen dos combinaciones** (2 = 0010 o 1000). **Aiken** es la elección que lo vuelve **autocomplementario**: de 0 a 4 empiezan con 0 y de 5 a 9 con 1. Las filminas de 2018 los usan como sinónimos ("BCD Aiken o 2421"); la guía de autoestudio los distingue: el ejercicio "2421" admite la doble representación y el "Aiken" usa la tabla única.

### Propiedades

| Propiedad | Qué significa | Ejemplos |
|---|---|---|
| Autocomplementario | el complemento a 9 se obtiene invirtiendo los bits | Aiken, 8 4 -2 -1, Exceso 3 |
| Continuo (progresivo, distancia unitaria) | combinaciones consecutivas difieren en 1 bit | Gray (los demás no) |
| Cíclico | además, la última y la primera difieren en 1 bit | Gray |
| Reflejado | se arma reflejando la mitad anterior | Gray |

### Tabla 0–9

Tabla de la guía de autoestudio (p. 3), verificada con NotebookLM:

| Dígito | BCD 8421 | Aiken | 2421 general | 8 4 -2 -1 | Exceso 3 | Gray |
|---|---|---|---|---|---|---|
| 0 | 0000 | 0000 | 0000 | 0000 | 0011 | 0000 |
| 1 | 0001 | 0001 | 0001 | 0111 | 0100 | 0001 |
| 2 | 0010 | 0010 | 0010 o 1000 | 0110 | 0101 | 0011 |
| 3 | 0011 | 0011 | 0011 o 1001 | 0101 | 0110 | 0010 |
| 4 | 0100 | 0100 | 0100 o 1010 | 0100 | 0111 | 0110 |
| 5 | 0101 | 1011 | 0101 o 1011 | 1011 | 1000 | 0111 |
| 6 | 0110 | 1100 | 0110 o 1100 | 1010 | 1001 | 0101 |
| 7 | 0111 | 1101 | 0111 o 1101 | 1001 | 1010 | 0100 |
| 8 | 1000 | 1110 | 1110 | 1000 | 1011 | 1100 |
| 9 | 1001 | 1111 | 1111 | 1111 | 1100 | 1101 |

- **Inválidas** *(calculadas por el tutor a partir de la tabla)*: 8421 → 1010 a 1111 · Aiken → 0101 a 1010 · 8 4 -2 -1 → 0001, 0010, 0011, 1100, 1101, 1110 · Exceso 3 → 0000, 0001, 0010, 1101, 1110, 1111.
- En un ejercicio que diga "2421" sin más, las combinaciones de 2 a 7 son válidas de las dos formas: leé el enunciado.

### Gray a binario

1. El primer bit se copia.
2. Cada bit siguiente = bit binario anterior XOR bit Gray actual.

*(Ejemplo del tutor)*: Gray 1101 → 1, 1⊕1 = 0, 0⊕0 = 0, 0⊕1 = 1 → binario 1001 = 9.
Al revés (binario a Gray): se copia el primero y cada bit Gray = XOR de dos bits binarios vecinos.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Códigos redundantes](codigos-redundantes.md) — Hamming: se corrige primero, se decodifica después.
- [Códigos alfanuméricos](codigos-alfanumericos.md)
- [Sistemas de numeración](sistemas-de-numeracion.md)
