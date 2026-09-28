# Sistemas de numeración y conversiones
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 1 · Peso en exámenes: 2/3 (auxiliar del Hamming: octal, Gray → binario) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Sistemas%20de%20numeración),
> sección "Sistemas de numeración".
> **Sin verificar todavía** contra NotebookLM ni el *Apunte teórico* (el MCP ya anda: pendiente). Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- ¿Qué es un sistema posicional? :: Uno donde el valor de cada dígito depende de su posición: N = Σ dᵢ · bⁱ, con b la base. [→ Sistema posicional](#Sistema%20posicional)
- ¿Cuál es el rango con n dígitos en base b? :: De 0 a bⁿ − 1 (bⁿ valores distintos). Con 8 bits: 0 a 255. [→ Sistema posicional](#Sistema%20posicional)
- ¿Cómo se convierte la parte entera de decimal a otra base? :: Por divisiones sucesivas por la base; los restos, leídos del último al primero, son los dígitos. [→ Conversiones](#Conversiones)
- ¿Cómo se convierte la parte fraccionaria? :: Por multiplicaciones sucesivas por la base; las partes enteras, en el orden en que salen, son los dígitos. [→ Conversiones](#Conversiones)
- ¿Cómo se pasa de binario a octal o hexadecimal? :: Agrupando de a 3 bits (octal) o de a 4 (hexa) a partir de la coma, hacia los dos lados. [→ Conversiones](#Conversiones)
- ¿Por qué 0,1 decimal no tiene representación exacta en binario? :: Porque en base 2 es periódico (0,000110011…); con una cantidad finita de bits hay que truncarlo y queda un error de truncamiento. [→ Fracciones no exactas](#Fracciones%20no%20exactas)

## Cuestionario

1. ¿Cuánto vale 11001,011₂ en decimal?
   - [x] 25,375
   - [ ] 25,75
   - [ ] 19,375
   - [ ] 25,3
   > 16 + 8 + 1 = 25; 0,25 + 0,125 = 0,375. [→ Ejemplo](#Ejemplo)
2. ¿Cuánto es 10110111₂ en hexadecimal?
   - [x] B7
   - [ ] 5D
   - [ ] 267
   - [ ] B6
   > 1011 0111 → B 7. "267" es la versión en octal. [→ Conversiones](#Conversiones)
3. ¿Cuánto es 10110111₂ en octal?
   - [x] 267
   - [ ] B7
   - [ ] 557
   - [ ] 266
   > Desde la derecha, de a 3: 10 110 111 → 2 6 7. [→ Conversiones](#Conversiones)
4. ¿Cómo se convierte 0,375 decimal a binario?
   - [x] Multiplicando por 2 y tomando las partes enteras en orden
   - [ ] Dividiendo por 2 y leyendo los restos de abajo hacia arriba
   - [ ] Agrupando de a 3 bits
   - [ ] Restando potencias de 10
   > 0,375 · 2 = 0,75 → 0 · 0,75 · 2 = 1,5 → 1 · 0,5 · 2 = 1,0 → 1 → 0,011. [→ Conversiones](#Conversiones)
5. Con 3 dígitos en base 5, ¿qué rango se representa?
   - [x] 0 a 124
   - [ ] 0 a 125
   - [ ] 0 a 15
   - [ ] 0 a 555
   > De 0 a bⁿ − 1 = 5³ − 1 = 124. [→ Sistema posicional](#Sistema%20posicional)

## Contenido

### Sistema posicional

- N = Σ dᵢ · bⁱ. Conceptos: **base**, **dígito**, **peso** (bⁱ) y **rango**.
- Con n dígitos en base b se representa de 0 a bⁿ − 1.

### Conversiones

| Conversión | Método |
|---|---|
| Decimal → base b, parte entera | divisiones sucesivas por b |
| Decimal → base b, parte fraccionaria | multiplicaciones sucesivas por b |
| Binario ↔ octal | agrupar de a 3 bits |
| Binario ↔ hexadecimal | agrupar de a 4 bits |

*(Detalle del tutor)*: en las divisiones, los restos se leen del último al primero;
en las multiplicaciones, las partes enteras se leen en el orden en que salen. Al
agrupar, se arranca desde la coma y se completa con ceros en las puntas.

### Ejemplo

*(Ejemplo del tutor, no está en las fuentes.)*

25,375 → 25 = 11001 · 0,375 = 0,011 → **11001,011₂** = 31,3₈ (011 001 , 011) = 19,6₁₆ (0001 1001 , 0110).

### Fracciones no exactas

Una fracción exacta en decimal puede no serlo en binario: 0,1 = 0,000110011…₂ se
repite para siempre. Con bits finitos se trunca y aparece un **error de truncamiento**.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Códigos numéricos](codigos-numericos.md)
- [Complementos y aritmética digital](complementos-y-aritmetica-digital.md)
