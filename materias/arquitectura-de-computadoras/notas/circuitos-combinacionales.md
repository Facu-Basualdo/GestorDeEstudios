# Circuitos combinacionales
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 2 · Peso en exámenes: 2/3 (tipo C: 45% en los 2022, ausente en 2023–2024) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Álgebra%20de%20Boole%20y%20combinacionales),
> secciones "Álgebra de Boole y combinacionales" y "C. Combinacional de enunciado".
> **Sin verificar todavía** contra NotebookLM ni el *Apunte teórico* (el MCP ya anda: pendiente). Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- ¿Qué es un circuito combinacional? :: Uno cuya salida depende sólo de las entradas actuales: no tiene memoria. [→ Definición](#Definición)
- ¿Qué hace un multiplexor? :: Con n entradas de selección elige una de 2ⁿ entradas de datos y la lleva a una sola salida. [→ Bloques MSI](#Bloques%20MSI)
- Diferenciá multiplexor de decodificador. :: El MUX elige un dato entre 2ⁿ y lo saca por una salida. El decodificador activa una de 2ⁿ salidas según el código de n entradas. [→ Bloques MSI](#Bloques%20MSI)
- ¿Qué tiene de particular un codificador con prioridad? :: Si hay varias entradas activas, codifica la de mayor prioridad. [→ Bloques MSI](#Bloques%20MSI)
- ¿Cómo implementás una función con un MUX? :: Las variables van a las entradas de selección y cada entrada de datos recibe el valor de la función en esa fila (0 o 1). [→ Bloques MSI](#Bloques%20MSI)
- ¿Cuáles son las ecuaciones del sumador completo? :: S = A ⊕ B ⊕ Cin · Cout = A · B + Cin · (A ⊕ B). [→ Sumadores](#Sumadores)
- ¿Cuáles son los pasos de un combinacional de enunciado? :: Definir entradas y salidas (qué es 0 y 1) → tabla de verdad con 2ⁿ filas → un Karnaugh por salida → circuito. [→ Receta de examen](#Receta%20de%20examen)

## Cuestionario

1. Un multiplexor con 8 entradas de datos, ¿cuántas entradas de selección tiene?
   - [x] 3
   - [ ] 8
   - [ ] 4
   - [ ] 1
   > 2³ = 8. [→ Bloques MSI](#Bloques%20MSI)
2. Un decodificador de 3 entradas, ¿cuántas salidas tiene?
   - [x] 8
   - [ ] 3
   - [ ] 6
   - [ ] 1
   > n → 2ⁿ. [→ Bloques MSI](#Bloques%20MSI)
3. ¿Cuál es el acarreo de un semisumador?
   - [x] A · B
   - [ ] A ⊕ B
   - [ ] A + B
   - [ ] (A · B)̅
   > La suma es A ⊕ B y el acarreo A · B. [→ Sumadores](#Sumadores)
4. ¿Cuántas filas tiene la tabla de verdad de un circuito de 4 entradas?
   - [x] 16
   - [ ] 8
   - [ ] 4
   - [ ] 32
   > 2⁴ = 16. [→ Receta de examen](#Receta%20de%20examen)
5. ¿Qué define a un circuito combinacional?
   - [x] La salida depende sólo de las entradas actuales
   - [ ] La salida depende de las entradas y del estado
   - [ ] Cambia sólo con el flanco del reloj
   - [ ] Tiene realimentación
   > Lo que depende del estado es un secuencial. [→ Definición](#Definición)

## Contenido

### Definición

**Circuito combinacional**: la salida depende sólo de las entradas actuales (sin memoria).

### Bloques MSI

| Bloque | Qué hace |
|---|---|
| Multiplexor | n entradas de selección → elige 1 de 2ⁿ datos hacia 1 salida |
| Demultiplexor | lleva 1 entrada a una de 2ⁿ salidas |
| Decodificador | n entradas → activa 1 de 2ⁿ salidas |
| Codificador | 2ⁿ entradas → n salidas (con prioridad si hay varias activas) |
| Comparador | compara dos números: mayor, igual, menor |
| Semisumador y sumador completo | suman 2 y 3 bits |

*(Explicación del tutor)*: para implementar una función con un MUX, las variables van a
la selección y cada dato recibe el valor de la función en esa fila. Con un MUX de una
variable menos, la última variable entra por los datos como 0, 1, X o X̅.

### Sumadores

*(Ecuaciones del tutor, no están en las fuentes.)*

| Circuito | Suma | Acarreo |
|---|---|---|
| Semisumador | S = A ⊕ B | C = A · B |
| Sumador completo | S = A ⊕ B ⊕ Cin | Cout = A · B + Cin · (A ⊕ B) |

### Receta de examen

1. Definir cada entrada y salida y qué significa 0 y 1 (ojo: en el semáforo, salida en alto = verde).
2. Tabla de verdad con 2ⁿ filas; llenar cada salida condición por condición; casos imposibles o prohibidos → X o 0 según el enunciado.
3. Un Karnaugh por salida; agrupar lo más grande posible usando las X.
4. Dibujar el circuito (y pasarlo a NAND si lo piden).

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Álgebra de Boole](algebra-de-boole.md)
- [Simplificación de funciones](simplificacion-de-funciones.md)
