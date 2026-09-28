# Códigos numéricos (BCD, ponderados, Exceso 3, Gray)
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 1 · Peso en exámenes: 3/3 (decodificar después del Hamming, 5/5 parciales) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Codificación),
> secciones "Codificación" y "A. Hamming + códigos".
> **Sin verificar contra NotebookLM**: la sesión del MCP estaba vencida el 2026-09-28. Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- ¿Qué es un código? :: Una correspondencia entre un conjunto de símbolos y combinaciones binarias. Con n bits se codifican hasta 2ⁿ símbolos. [→ Definiciones](#Definiciones)
- ¿Cuántos bits hacen falta como mínimo para codificar 40 símbolos? :: 6, porque 2⁵ = 32 < 40 ≤ 64 = 2⁶. [→ Definiciones](#Definiciones)
- ¿Qué es BCD y cuántas combinaciones quedan sin usar? :: Cada dígito decimal se codifica en 4 bits; de las 16 combinaciones se usan 10 y quedan 6 sin usar. [→ BCD y códigos ponderados](#BCD%20y%20códigos%20ponderados)
- Nombrá dos códigos ponderados y dos no ponderados. :: Ponderados: 8421, 2421/Aiken, 5421. No ponderados: Exceso 3 y Gray. [→ BCD y códigos ponderados](#BCD%20y%20códigos%20ponderados)
- ¿Qué es un código autocomplementario? ¿Cuáles lo son? :: Aquel en que el complemento a 9 de un dígito se obtiene invirtiendo sus bits. Lo son Aiken y Exceso 3. [→ Propiedades](#Propiedades)
- ¿Qué significa que un código sea continuo y que sea cíclico? :: Continuo (progresivo): combinaciones consecutivas difieren en un solo bit. Cíclico: además, la última difiere en un bit de la primera. [→ Propiedades](#Propiedades)
- ¿Cómo se pasa de Gray a binario? :: El primer bit se copia; cada bit siguiente = bit binario anterior XOR bit Gray actual. [→ Gray a binario](#Gray%20a%20binario)
- ¿Cuánto vale 7 en Exceso 3? :: 1010 (7 + 3 = 10). [→ Tabla 0–9](#Tabla%200–9)
- ¿Qué combinaciones son inválidas en BCD 8421? :: De 1010 a 1111 (10 a 15). [→ Tabla 0–9](#Tabla%200–9)

## Cuestionario

1. ¿Cuál de estos códigos es autocomplementario?
   - [x] Exceso 3
   - [ ] BCD 8421
   - [ ] Gray
   - [ ] 5421
   > En Exceso 3, invertir los bits de un dígito da su complemento a 9: 2 = 0101 → 1010 = 7. [→ Propiedades](#Propiedades)
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
6. ¿Qué propiedad caracteriza al código Gray?
   - [x] Dos combinaciones consecutivas difieren en un solo bit
   - [ ] Es ponderado 8421
   - [ ] Es autocomplementario
   - [ ] Todas sus palabras tienen la misma cantidad de unos
   > Gray es continuo, cíclico y reflejado. [→ Propiedades](#Propiedades)

## Contenido

### Definiciones

- **Código**: correspondencia entre un conjunto de símbolos y combinaciones binarias.
- Con n bits se codifican hasta 2ⁿ símbolos: la cantidad mínima de bits es el menor n con 2ⁿ ≥ cantidad de símbolos.

### BCD y códigos ponderados

- **BCD**: cada dígito decimal en 4 bits; quedan 6 combinaciones sin usar.
- **Ponderados** (cada bit tiene un peso): 8421, 2421/Aiken, 5421.
- **No ponderados**: Exceso 3, Gray.

### Propiedades

| Propiedad | Qué significa | Ejemplos |
|---|---|---|
| Autocomplementario | el complemento a 9 se obtiene invirtiendo los bits | Aiken, Exceso 3 |
| Continuo (progresivo) | combinaciones consecutivas difieren en 1 bit | Gray |
| Cíclico | además, la última y la primera difieren en 1 bit | Gray |
| Reflejado | se arma reflejando la mitad anterior | Gray |

### Tabla 0–9

*(Tabla del tutor, no está en las fuentes: el cronograma pide armarla de memoria.)*

| Dígito | 8421 | Aiken (2421) | 5421 | Exceso 3 | Gray |
|---|---|---|---|---|---|
| 0 | 0000 | 0000 | 0000 | 0011 | 0000 |
| 1 | 0001 | 0001 | 0001 | 0100 | 0001 |
| 2 | 0010 | 0010 | 0010 | 0101 | 0011 |
| 3 | 0011 | 0011 | 0011 | 0110 | 0010 |
| 4 | 0100 | 0100 | 0100 | 0111 | 0110 |
| 5 | 0101 | 1011 | 1000 | 1000 | 0111 |
| 6 | 0110 | 1100 | 1001 | 1001 | 0101 |
| 7 | 0111 | 1101 | 1010 | 1010 | 0100 |
| 8 | 1000 | 1110 | 1011 | 1011 | 1100 |
| 9 | 1001 | 1111 | 1100 | 1100 | 1101 |

- **Ojo con 2421 y Aiken**: los parciales los nombran por separado. Hay un 2421 no
  autocomplementario (5 = 0101, 6 = 0110, 7 = 0111) y el Aiken de la tabla
  (autocomplementario). Confirmá cuál usa la cátedra para cada nombre.
- Inválidas: 8421 → 1010 a 1111 · Exceso 3 → 0000, 0001, 0010, 1101, 1110, 1111 · Aiken → 0101 a 1010.

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
