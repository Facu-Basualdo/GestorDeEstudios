# Códigos redundantes (detección y corrección de errores)
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 1 · Peso en exámenes: 3/3 (Hamming en los 5 parciales, 20–25%) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Códigos%20redundantes),
> secciones "Códigos redundantes" y "A. Hamming + códigos".
> **Sin verificar contra NotebookLM**: la sesión del MCP estaba vencida el 2026-09-28. Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- ¿Qué es la redundancia en un código? :: Bits extra que no aportan información pero permiten detectar o corregir errores. [→ Redundancia y distancia](#Redundancia%20y%20distancia)
- ¿Qué es la distancia de Hamming entre dos palabras? ¿Y la distancia mínima de un código? :: Entre dos palabras: la cantidad de bits en que difieren. Distancia mínima: la menor distancia entre todo par de palabras del código. [→ Redundancia y distancia](#Redundancia%20y%20distancia)
- Con distancia mínima d, ¿cuántos errores detecta y cuántos corrige un código? :: Detecta hasta d − 1 y corrige hasta ⌊(d − 1)/2⌋. Con d = 4: detecta 3, corrige 1. [→ Redundancia y distancia](#Redundancia%20y%20distancia)
- ¿Por qué la paridad simple no detecta errores dobles? :: Porque dos bits invertidos dejan la cantidad de unos con la misma paridad. La paridad tiene d = 2: detecta un solo error. [→ Paridad, peso constante y entrelazado](#Paridad,%20peso%20constante%20y%20entrelazado)
- ¿Cómo corrige un error el código entrelazado? :: Con paridad horizontal (por fila) y vertical (por columna): la fila y la columna que fallan se cruzan en el bit erróneo, que se invierte. [→ Paridad, peso constante y entrelazado](#Paridad,%20peso%20constante%20y%20entrelazado)
- ¿Cuántos bits de control necesita Hamming para 8 bits de datos y dónde van? :: 4, porque 2⁴ = 16 ≥ 8 + 4 + 1. Van en las posiciones 1, 2, 4 y 8 (potencias de 2). Total: 12 bits. [→ Código de Hamming](#Código%20de%20Hamming)
- ¿Qué posiciones controla cada bit de Hamming? :: Las posiciones cuyo número en binario tiene ese bit en 1. P1 → 1, 3, 5, 7, 9, 11… · P2 → 2, 3, 6, 7, 10, 11… · P4 → 4–7, 12–15 · P8 → 8–15. [→ Receta de examen](#Receta%20de%20examen)
- ¿Qué indica el síndrome? :: La posición del bit erróneo, leída como C8 C4 C2 C1 en binario. Síndrome 0 = no hay error. [→ Código de Hamming](#Código%20de%20Hamming)
- Si el mensaje tiene 11, 12 o 16 bits, ¿cuántos son de control? :: 11 → 4 de control + 7 de info · 12 → 4 + 8 · 16 → 5 + 11. [→ Receta de examen](#Receta%20de%20examen)
- ¿Qué distancia mínima tiene Hamming y qué le permite? :: d = 3: corrige 1 error. [→ Redundancia y distancia](#Redundancia%20y%20distancia)

## Cuestionario

1. Un código tiene distancia mínima 4. ¿Qué puede hacer?
   - [x] Detectar hasta 3 errores y corregir 1
   - [ ] Detectar hasta 4 errores y corregir 2
   - [ ] Detectar hasta 3 errores y corregir 2
   - [ ] Detectar hasta 2 errores y corregir 1
   > Detecta d − 1 = 3 y corrige ⌊(4 − 1)/2⌋ = 1. [→ Redundancia y distancia](#Redundancia%20y%20distancia)
2. ¿Cuántos bits de control lleva Hamming para 8 bits de datos, y en qué posiciones?
   - [x] 4, en las posiciones 1, 2, 4 y 8
   - [ ] 3, en las posiciones 1, 2 y 4
   - [ ] 4, en las posiciones 1, 2, 3 y 4
   - [ ] 5, en las posiciones 1, 2, 4, 8 y 16
   > Se busca el menor k con 2ᵏ ≥ n + k + 1: 2⁴ = 16 ≥ 13. Los de control van en potencias de 2. [→ Código de Hamming](#Código%20de%20Hamming)
3. Se recibe 0110001 (Hamming de 7 bits, paridad par, control en 1, 2 y 4, posición 1 a la izquierda). ¿Qué da el síndrome?
   - [x] 110: el bit 6 está mal
   - [ ] 011: el bit 3 está mal
   - [ ] 000: no hay error
   - [ ] 101: el bit 5 está mal
   > C1 (1, 3, 5, 7) = 0+1+0+1 → par → 0. C2 (2, 3, 6, 7) = 1+1+0+1 → impar → 1. C4 (4, 5, 6, 7) = 0+0+0+1 → impar → 1. Síndrome C4 C2 C1 = 110 = 6. [→ Ejemplo resuelto](#Ejemplo%20resuelto)
4. ¿Qué posiciones controla P2?
   - [x] 2, 3, 6, 7, 10, 11…
   - [ ] 2, 4, 6, 8, 10…
   - [ ] 2, 3, 4, 5…
   - [ ] 1, 2, 3
   > Las posiciones cuyo número binario tiene el bit de peso 2 en 1: 0010, 0011, 0110, 0111, 1010, 1011… [→ Receta de examen](#Receta%20de%20examen)
5. Con paridad par simple se invierten dos bits en la transmisión. ¿Qué pasa?
   - [x] El error no se detecta
   - [ ] Se detecta y se corrige
   - [ ] Se detecta pero no se corrige
   - [ ] Se detecta sólo si los bits son contiguos
   > Dos inversiones mantienen la paridad: la paridad simple tiene d = 2 y sólo detecta un error. [→ Paridad, peso constante y entrelazado](#Paridad,%20peso%20constante%20y%20entrelazado)
6. ¿Cuál es la distancia de Hamming entre 1011 y 0010?
   - [x] 2
   - [ ] 1
   - [ ] 3
   - [ ] 4
   > Difieren en el primer y el último bit. [→ Redundancia y distancia](#Redundancia%20y%20distancia)

## Contenido

### Redundancia y distancia

- **Redundancia**: bits extra que no aportan información pero permiten detectar o corregir errores.
- **Distancia de Hamming** entre dos palabras = cantidad de bits en que difieren.
- **Distancia mínima** del código (d) = la menor distancia entre todo par de palabras.
- Un código con distancia mínima d **detecta hasta d − 1** errores y **corrige hasta ⌊(d − 1)/2⌋**.

| Código | d | Detecta | Corrige |
|---|---|---|---|
| Paridad | 2 | 1 | 0 |
| Hamming | 3 | 2 | 1 |

*(Explicación del tutor, no está en las fuentes)*: el modelo de un sistema de
comunicación es fuente → codificador → canal → decodificador → destino. El ruido
actúa en el canal; los bits redundantes los agrega el codificador y los usa el
decodificador para detectar o corregir.

### Paridad, peso constante y entrelazado

- **Paridad par/impar**: se agrega un bit para que la cantidad de unos sea par (o impar). No detecta errores dobles.
- **Peso constante** (2 de 5, control 2 de 3): todas las palabras tienen la misma cantidad de unos.
- **Entrelazado** (paridad horizontal + vertical): la intersección de la fila y la columna erróneas ubica el bit y lo corrige.

### Código de Hamming

- k bits de control en las posiciones 2ⁱ (1, 2, 4, 8…), con **2ᵏ ≥ n + k + 1** (n = bits de información).
- El **síndrome** da la posición del bit erróneo; 0 = sin error.

### Receta de examen

1. Contar los bits: 11 → 4 de control + 7 de info; 12 → 4 + 8; 16 → 5 + 11.
2. Numerar posiciones desde 1; los de control van en 1, 2, 4, 8, 16.
3. Cada control revisa las posiciones cuyo número binario tiene su bit en 1: P1 → 1, 3, 5, 7, 9, 11…; P2 → 2, 3, 6, 7, 10, 11…; P4 → 4–7, 12–15; P8 → 8–15.
4. Contar unos de cada grupo (paridad par): par = 0, impar = 1. Síndrome = C8 C4 C2 C1. Si es 0, está bien; si no, esa posición está mal: invertirla.
5. Sacar los bits de control, agrupar la información y decodificar (ver [códigos numéricos](codigos-numericos.md) y [alfanuméricos](codigos-alfanumericos.md)). Marcar las combinaciones inválidas.

**Pendiente**: confirmar con el video de práctica 1 la convención de la cátedra (desde qué punta se numera, paridad par o impar).

### Ejemplo resuelto

*(Ejemplo del tutor, no está en las fuentes. Supone paridad par y posición 1 a la izquierda.)*

Datos 1011 en un Hamming de 7 bits: posiciones 3, 5, 6, 7 = 1, 0, 1, 1.

| Control | Posiciones | Unos | Valor |
|---|---|---|---|
| P1 | 3, 5, 7 | 1 + 0 + 1 = 2 | 0 |
| P2 | 3, 6, 7 | 1 + 1 + 1 = 3 | 1 |
| P4 | 5, 6, 7 | 0 + 1 + 1 = 2 | 0 |

Palabra enviada: `0110011`. Si llega `0110001` (bit 6 invertido): C1 = 0, C2 = 1, C4 = 1 → síndrome 110 = 6 → se invierte el bit 6.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Códigos numéricos](codigos-numericos.md) — lo que se decodifica después de corregir.
- [Códigos alfanuméricos](codigos-alfanumericos.md) — ASCII dentro del Hamming y "FIN" en octal.
