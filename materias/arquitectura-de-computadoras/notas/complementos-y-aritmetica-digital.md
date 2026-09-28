# Complementos y aritmética digital
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 1 · Peso en exámenes: 1/3 (teoría de codificación; 0 ejercicios en 5 parciales) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Codificación),
> sección "Codificación" (números con signo y overflow).
> **Sin verificar todavía** contra NotebookLM ni el *Apunte teórico* (el MCP ya anda: pendiente). Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- Compará signo-magnitud, C1 y C2 con n bits: rango y cantidad de ceros. :: Signo-magnitud y C1: de −(2ⁿ⁻¹ − 1) a 2ⁿ⁻¹ − 1, con dos ceros. C2: de −2ⁿ⁻¹ a 2ⁿ⁻¹ − 1, con un solo cero. [→ Números con signo](#Números%20con%20signo)
- ¿Cuál es el rango de C2 con 8 bits? :: De −128 a 127. [→ Números con signo](#Números%20con%20signo)
- ¿Cómo se detecta el overflow en una suma en C2? :: Dos operandos del mismo signo dan un resultado de signo opuesto. Equivale a que el acarreo que entra al bit de signo sea distinto del que sale. [→ Overflow en C2](#Overflow%20en%20C2)
- ¿Cómo se obtiene el C2 de un número? :: Se invierten todos los bits (C1) y se suma 1. [→ Cómo se calculan](#Cómo%20se%20calculan)
- ¿Cómo se representa un número en exceso 2ⁿ⁻¹? :: Se le suma 2ⁿ⁻¹ y se escribe el resultado en binario. Con 4 bits (exceso 8), −5 → 3 → 0011. [→ Cómo se calculan](#Cómo%20se%20calculan)

## Cuestionario

1. ¿Cuál es el rango de C2 con 8 bits?
   - [x] −128 a 127
   - [ ] −127 a 127
   - [ ] 0 a 255
   - [ ] −128 a 128
   > −2ⁿ⁻¹ a 2ⁿ⁻¹ − 1 con n = 8. [→ Números con signo](#Números%20con%20signo)
2. ¿Qué representación tiene un solo cero?
   - [x] Complemento a 2
   - [ ] Signo-magnitud
   - [ ] Complemento a 1
   - [ ] Signo-magnitud y C1
   > Signo-magnitud y C1 tienen +0 y −0. C2 y exceso tienen un solo cero. [→ Números con signo](#Números%20con%20signo)
3. En C2 con 4 bits, 0101 + 0100 = 1001. ¿Qué pasó?
   - [x] Hubo overflow: dos positivos dieron un resultado negativo
   - [ ] No hay overflow porque no hubo acarreo saliente
   - [ ] El resultado es −1, correcto
   - [ ] Hubo overflow porque hubo acarreo saliente
   > 5 + 4 = 9 no entra en el rango −8…7. El acarreo al signo (1) es distinto del saliente (0). [→ Overflow en C2](#Overflow%20en%20C2)
4. ¿Cómo se escribe −5 en C2 con 4 bits?
   - [x] 1011
   - [ ] 1010
   - [ ] 1101
   - [ ] 0101
   > 5 = 0101 → C1 = 1010 → + 1 = 1011. 1010 es el C1 y 1101 es signo-magnitud. [→ Cómo se calculan](#Cómo%20se%20calculan)
5. Con 4 bits en exceso 8, ¿qué valor representa 0011?
   - [x] −5
   - [ ] 3
   - [ ] 11
   - [ ] −3
   > 0011 = 3; se le resta el exceso: 3 − 8 = −5. [→ Cómo se calculan](#Cómo%20se%20calculan)

## Contenido

### Números con signo

| Representación (n bits) | Rango | Ceros |
|---|---|---|
| Signo-magnitud | −(2ⁿ⁻¹ − 1) a 2ⁿ⁻¹ − 1 | 2 |
| Complemento a 1 | −(2ⁿ⁻¹ − 1) a 2ⁿ⁻¹ − 1 | 2 |
| Complemento a 2 | −2ⁿ⁻¹ a 2ⁿ⁻¹ − 1 | 1 |
| Exceso 2ⁿ⁻¹ | −2ⁿ⁻¹ a 2ⁿ⁻¹ − 1 | 1 |

### Overflow en C2

Dos operandos del mismo signo dan un resultado de signo opuesto. Es lo mismo que
decir que el acarreo al bit de signo es distinto del acarreo saliente.

### Cómo se calculan

*(Explicación del tutor, no está en las fuentes.)*

| −5 con 4 bits | Cómo | Resultado |
|---|---|---|
| Signo-magnitud | bit de signo 1 + magnitud 101 | 1101 |
| C1 | invertir 0101 | 1010 |
| C2 | C1 + 1 | 1011 |
| Exceso 8 | −5 + 8 = 3 | 0011 |

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Sistemas de numeración](sistemas-de-numeracion.md)
