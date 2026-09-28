# Códigos redundantes (detección y corrección de errores)
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 1 · Peso en exámenes: 3/3 (Hamming en los 5 parciales, 20–25%) · Fuentes:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Códigos%20redundantes)
> ("Códigos redundantes" y "A. Hamming + códigos"); *Apunte teórico* de la cátedra (pp. 15–18, vía
> el export de Faro); **verificado con NotebookLM el 2026-09-28**: *2025 - Guía Autoestudio
> Codificación* (p. 16), *Sist. Numeración y Codificación 2018* (filminas 89 y 103) y los finales
> resueltos (final 2015-12-10).

## Preguntas de recuperación

- ¿Qué es un código redundante? :: Uno que usa **más bits de los necesarios**. Para los 10 dígitos decimales hacen falta log₂10 ≈ 3,32 → 4 bits; si un código usa más, es redundante. Los bits extra permiten detectar o corregir errores. [→ Redundancia y distancia](#Redundancia%20y%20distancia)
- ¿Qué es la distancia de Hamming entre dos palabras y cómo se calcula? :: La cantidad de bits en que difieren: se suman sin acarreo (XOR) y se cuentan los unos. [→ Redundancia y distancia](#Redundancia%20y%20distancia)
- Con distancia mínima d, ¿cuántos errores detecta y cuántos corrige un código? :: Detecta hasta d − 1 y corrige hasta ⌊(d − 1)/2⌋. El apunte lo escribe Dm = 2X + 1 para corregir X errores. [→ Redundancia y distancia](#Redundancia%20y%20distancia)
- ¿Qué pasa con dH = 1, dH = 2 y dH = 3? :: dH = 1: no detecta ni corrige. dH = 2: detecta un error, no corrige (paridad simple). dH ≥ 3: desde ahí se puede corregir (Hamming). [→ Redundancia y distancia](#Redundancia%20y%20distancia)
- ¿Por qué la paridad simple no detecta errores dobles? :: Porque dos bits invertidos dejan la cantidad de unos con la misma paridad: la paridad simple tiene d = 2. [→ Paridad](#Paridad)
- ¿Cómo corrige un error la paridad entrelazada? :: Con paridad por fila y por columna (más un bit de paridad cruzada): la fila y la columna que fallan se cruzan en el bit erróneo, que se invierte. [→ Paridad](#Paridad)
- ¿Cómo se numeran las posiciones en el Hamming de la cátedra? :: **De derecha a izquierda, empezando en 1**: el bit de más a la derecha es la posición 1. [→ Código de Hamming](#Código%20de%20Hamming)
- ¿Cómo se llaman los bits de paridad y dónde van? :: **p0, p1, p2, p3…** en las posiciones potencia de 2: p0 en la 1, p1 en la 2, p2 en la 4, p3 en la 8. [→ Código de Hamming](#Código%20de%20Hamming)
- ¿Paridad par o impar? :: **Par**: cada bit de paridad hace par la cantidad de unos de las posiciones que controla (XOR de esas posiciones). [→ Código de Hamming](#Código%20de%20Hamming)
- ¿Cuántos bits de paridad necesita Hamming para i bits de información, y por qué? :: El menor p con **2ᵖ ≥ i + p + 1**: hay que distinguir i + p posiciones de error más el caso "sin error". Para 8 bits de datos, p = 4 (16 ≥ 13). [→ Código de Hamming](#Código%20de%20Hamming)
- ¿Qué posiciones controla cada bit? :: Las posiciones cuyo número en binario tiene ese bit en 1. p0 → 1, 3, 5, 7, 9, 11… · p1 → 2, 3, 6, 7, 10, 11… · p2 → 4–7, 12–15 · p3 → 8–15. [→ Receta de examen](#Receta%20de%20examen)
- ¿Cómo se lee el síndrome? :: Los bits de control **c0, c1, c2…** se leen en **orden decreciente** (…c2 c1 c0) y el número binario es la posición del error. Todos en 0 = sin error. [→ Código de Hamming](#Código%20de%20Hamming)
- Si el mensaje tiene 11, 12 o 16 bits, ¿cuántos son de paridad? :: 11 → 4 de paridad + 7 de información · 12 → 4 + 8 · 16 → 5 + 11. [→ Receta de examen](#Receta%20de%20examen)

## Cuestionario

1. Un código tiene distancia mínima 4. ¿Qué puede hacer?
   - [x] Detectar hasta 3 errores y corregir 1
   - [ ] Detectar hasta 4 errores y corregir 2
   - [ ] Detectar hasta 3 errores y corregir 2
   - [ ] Detectar hasta 2 errores y corregir 1
   > Detecta d − 1 = 3 y corrige ⌊(4 − 1)/2⌋ = 1. [→ Redundancia y distancia](#Redundancia%20y%20distancia)
2. ¿Cuántos bits de paridad lleva Hamming para 8 bits de datos, y en qué posiciones?
   - [x] 4, en las posiciones 1, 2, 4 y 8 (contando desde la derecha)
   - [ ] 3, en las posiciones 1, 2 y 4
   - [ ] 4, en las posiciones 1, 2, 3 y 4
   - [ ] 5, en las posiciones 1, 2, 4, 8 y 16
   > El menor p con 2ᵖ ≥ 8 + p + 1: 2⁴ = 16 ≥ 13. Van en las potencias de 2. [→ Código de Hamming](#Código%20de%20Hamming)
3. Se recibe `1110101` (Hamming de 7 bits, paridad par, posiciones numeradas de derecha a izquierda). ¿Qué da el síndrome c2 c1 c0?
   - [x] 110: el bit de la posición 6 está mal
   - [ ] 011: el bit de la posición 3 está mal
   - [ ] 000: no hay error
   - [ ] 101: el bit de la posición 5 está mal
   > Posiciones 7…1 = 1 1 1 0 1 0 1. c0 (1, 3, 5, 7) = 1+1+1+1 → par → 0. c1 (2, 3, 6, 7) = 0+1+1+1 → impar → 1. c2 (4, 5, 6, 7) = 0+1+1+1 → impar → 1. Síndrome 110 = 6. [→ Ejemplo resuelto](#Ejemplo%20resuelto)
4. ¿Qué posiciones controla p1?
   - [x] 2, 3, 6, 7, 10, 11…
   - [ ] 2, 4, 6, 8, 10…
   - [ ] 1, 3, 5, 7…
   - [ ] 4, 5, 6, 7…
   > Las posiciones cuyo número binario tiene el bit de peso 2 en 1. La tercera opción es p0 y la cuarta, p2. [→ Receta de examen](#Receta%20de%20examen)
5. En el Hamming de la cátedra, ¿cuál es la posición 1?
   - [x] El bit de más a la derecha
   - [ ] El bit de más a la izquierda
   - [ ] El primer bit de información
   - [ ] Depende del ejercicio
   > La guía de autoestudio y los finales resueltos numeran de derecha a izquierda, siempre. [→ Código de Hamming](#Código%20de%20Hamming)
6. Con paridad par simple se invierten dos bits en la transmisión. ¿Qué pasa?
   - [x] El error no se detecta
   - [ ] Se detecta y se corrige
   - [ ] Se detecta pero no se corrige
   - [ ] Se detecta sólo si los bits son contiguos
   > Dos inversiones mantienen la paridad: la paridad simple tiene d = 2 y sólo detecta un error. [→ Paridad](#Paridad)
7. ¿Cuál es la distancia de Hamming entre 1011 y 0010?
   - [x] 2
   - [ ] 1
   - [ ] 3
   - [ ] 4
   > 1011 XOR 0010 = 1001: dos unos. [→ Redundancia y distancia](#Redundancia%20y%20distancia)
8. ¿Por qué Hamming exige 2ᵖ ≥ i + p + 1?
   - [x] Porque el síndrome tiene que distinguir cada posición posible del error más el caso sin error
   - [ ] Porque cada bit de paridad controla la mitad de los bits
   - [ ] Porque la paridad tiene que ser par
   - [ ] Porque los bits de paridad van en potencias de 2
   > Con p bits de control hay 2ᵖ síndromes; hacen falta i + p (un error en cada posición) + 1 (sin error). [→ Código de Hamming](#Código%20de%20Hamming)

## Contenido

### Redundancia y distancia

- **Código redundante**: usa **más bits de los necesarios**. Para los 10 dígitos decimales hacen falta como mínimo log₂10 ≈ 3,32 → **4 bits**; un código con más es redundante (*Apunte teórico*, p. 15). Se busca la **mínima redundancia** que no agrande demasiado el mensaje.
- **Distancia de Hamming** entre dos palabras = cantidad de bits en que difieren: se hace la **suma sin acarreo** (XOR) y se cuentan los unos (p. 17).
- **Distancia mínima** del código (d) = la menor distancia entre todo par de palabras válidas.
- Un código con distancia mínima d **detecta hasta d − 1** errores y **corrige hasta ⌊(d − 1)/2⌋**. El apunte lo escribe como **Dm = 2X + 1** para corregir X errores (con (00, 11): X = 1, y entre las dos palabras queda la combinación inválida 01).

| dH | Detecta | Corrige | Ejemplo |
|---|---|---|---|
| 1 | nada | nada | un código sin redundancia |
| 2 | 1 | 0 | paridad simple |
| 3 | 2 | 1 | Hamming |

*(Explicación del tutor, no está en las fuentes)*: el modelo de un sistema de
comunicación es fuente → codificador → canal → decodificador → destino. El ruido
actúa en el canal; los bits redundantes los agrega el codificador y los usa el
decodificador para detectar o corregir.

### Paridad

- **Bit de paridad**: se agrega para que la cantidad de unos sea par (paridad par) o impar. Modalidades (*Apunte teórico*, p. 16):
  - **Vertical simple (a nivel carácter)**: un bit al final de cada carácter. Sólo sirve si hay a lo sumo un error: dos bits erróneos **no se detectan**.
  - **Horizontal (a nivel bloque)**: un byte de paridad por bloque; su bit 0 es la paridad de los bits 0 del bloque, y así.
  - **Entrelazada**: vertical + horizontal. El bloque se arma en m filas × n columnas, se agrega la paridad de cada fila y de cada columna y un **bit de paridad cruzada**. La fila y la columna que fallan se cruzan en el bit erróneo, que se invierte. Desventajas: mucho ancho de banda, se retransmite el bloque entero, mucha CPU.
- **Peso constante** (2 de 5, control 2 de 3): todas las palabras tienen la misma cantidad de unos.

### Código de Hamming

Convención de la cátedra, verificada con NotebookLM (guía de autoestudio, filminas y finales resueltos, que coinciden):

- **Posiciones numeradas de derecha a izquierda, empezando en 1**: la posición 1 es el bit de **más a la derecha**.
- **Bits de paridad p0, p1, p2, p3…** en las posiciones **potencia de 2**: p0 en la 1, p1 en la 2, p2 en la 4, p3 en la 8. El resto son de información (i0 en la 3, i1 en la 5, i2 en la 6…).
- **Paridad par**: cada pₖ hace par la cantidad de unos de las posiciones que controla (es el XOR de esas posiciones).
- Cantidad de bits de paridad: el menor p con **2ᵖ ≥ i + p + 1** (i = bits de información). El síndrome tiene que distinguir las i + p posiciones donde puede estar el error más el caso "sin error".
- En el receptor se calculan los **bits de control c0, c1, c2…** (el mismo XOR, incluyendo el bit de paridad). Cada cₖ = 0 está bien y cₖ = 1 está mal.
- El **síndrome** se lee en **orden decreciente**, …c2 c1 c0, y es la **posición del error** en binario. Síndrome 0 = sin error.
- En los finales resueltos a mano aparecen con mayúscula (P0, C0); es la misma convención.

### Receta de examen

1. Contar los bits: 11 → 4 de paridad + 7 de información; 12 → 4 + 8; 16 → 5 + 11.
2. Numerar las posiciones **de derecha a izquierda** desde 1. Los de paridad están en 1, 2, 4, 8, 16.
3. Cada bit de control revisa las posiciones cuyo número binario tiene su bit en 1:
   - c0 → 1, 3, 5, 7, 9, 11…
   - c1 → 2, 3, 6, 7, 10, 11…
   - c2 → 4–7, 12–15
   - c3 → 8–15
4. Contar unos de cada grupo (paridad par): par = 0, impar = 1. Síndrome = c3 c2 c1 c0. Si es 0, está bien; si no, esa posición está mal: invertirla.
5. Sacar los bits de paridad, agrupar la información y decodificar (ver [códigos numéricos](codigos-numericos.md) y [alfanuméricos](codigos-alfanumericos.md)). Marcar las combinaciones inválidas.

### Ejemplo resuelto

*(Ejemplo del tutor con la convención de la cátedra: paridad par, posición 1 a la derecha.)*

Datos i3 i2 i1 i0 = 1011 en un Hamming de 7 bits. Posiciones 7, 6, 5, 3 = 1, 0, 1, 1.

| Paridad | Controla | Datos en esas posiciones | Unos | Valor |
|---|---|---|---|---|
| p0 (pos. 1) | 1, 3, 5, 7 | 3, 5, 7 = 1, 1, 1 | 3 | 1 |
| p1 (pos. 2) | 2, 3, 6, 7 | 3, 6, 7 = 1, 0, 1 | 2 | 0 |
| p2 (pos. 4) | 4, 5, 6, 7 | 5, 6, 7 = 1, 0, 1 | 2 | 0 |

Palabra enviada, escrita de la posición 7 a la 1: `1010101`.

Si llega `1110101` (se invirtió la posición 6): c0 = 1+1+1+1 → 0; c1 = 0+1+1+1 → 1; c2 = 0+1+1+1 → 1. Síndrome c2 c1 c0 = 110 = 6: se invierte el bit de la posición 6, el segundo desde la izquierda.

## Dónde me equivoco

- **Numerar desde la izquierda**: la cátedra numera de derecha a izquierda (la versión anterior de esta nota lo hacía al revés hasta el 2026-09-28).

## Ver también

- [Códigos numéricos](codigos-numericos.md) — Hamming: se corrige primero, se decodifica después.
- [Códigos alfanuméricos](codigos-alfanumericos.md) — el ASCII dentro del Hamming.
