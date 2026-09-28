# Álgebra de Boole
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 2 · Peso en exámenes: 3/3 (tipo B en 3/5 parciales; NAND/NOR dentro del análisis secuencial) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Álgebra%20de%20Boole%20y%20combinacionales),
> secciones "Álgebra de Boole y combinacionales" y "B. Álgebra de Boole".
> **Sin verificar todavía** contra NotebookLM ni el *Apunte teórico* (el MCP ya anda: pendiente). Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- Enunciá los postulados de Boole. :: Conmutativa, distributiva (de las dos operaciones), elementos neutros (0 para +, 1 para ·) y complemento (A + A̅ = 1, A · A̅ = 0). [→ Postulados y teoremas](#Postulados%20y%20teoremas)
- ¿Qué dice el principio de dualidad? :: Toda igualdad válida sigue siéndolo si se intercambian + ↔ · y 0 ↔ 1. [→ Postulados y teoremas](#Postulados%20y%20teoremas)
- Enunciá De Morgan. :: (A · B)̅ = A̅ + B̅ y (A + B)̅ = A̅ · B̅. [→ Postulados y teoremas](#Postulados%20y%20teoremas)
- ¿Qué dice la absorción? :: A + A · B = A y A · (A + B) = A. [→ Postulados y teoremas](#Postulados%20y%20teoremas)
- ¿Cuál es la distributiva de la suma sobre el producto? :: A + B · C = (A + B) · (A + C). [→ Postulados y teoremas](#Postulados%20y%20teoremas)
- ¿Por qué NAND y NOR son universales? :: Porque cada una sola alcanza para armar NOT, AND y OR, y con esas se implementa cualquier función. [→ NAND y NOR](#NAND%20y%20NOR)
- ¿Cómo se pasa una función a sólo NAND? :: Se deja en suma de productos, se niega dos veces y se aplica De Morgan: queda NAND-NAND. Para sólo NOR: producto de sumas → NOR-NOR. [→ Receta de examen](#Receta%20de%20examen)
- ¿Qué hay que escribir en cada paso de una simplificación de parcial? :: Una línea por paso con el nombre de la ley aplicada al costado. [→ Receta de examen](#Receta%20de%20examen)

## Cuestionario

1. ¿A qué es igual A + A · B?
   - [x] A
   - [ ] B
   - [ ] A · B
   - [ ] A + B
   > Absorción. [→ Postulados y teoremas](#Postulados%20y%20teoremas)
2. ¿A qué es igual (A · B)̅?
   - [x] A̅ + B̅
   - [ ] A̅ · B̅
   - [ ] A + B
   - [ ] A̅ · B
   > De Morgan: la negación de un producto es la suma de las negaciones. [→ Postulados y teoremas](#Postulados%20y%20teoremas)
3. ¿A qué es igual A + A̅ · B?
   - [x] A + B
   - [ ] A
   - [ ] B
   - [ ] A · B
   > Distributiva: (A + A̅) · (A + B) = 1 · (A + B) = A + B. [→ Postulados y teoremas](#Postulados%20y%20teoremas)
4. ¿Cuál es la dual de A + 0 = A?
   - [x] A · 1 = A
   - [ ] A + 1 = 1
   - [ ] A · 0 = 0
   - [ ] A + A = A
   > Se cambia + por · y 0 por 1. [→ Postulados y teoremas](#Postulados%20y%20teoremas)
5. ¿A qué es igual A + B · C?
   - [x] (A + B) · (A + C)
   - [ ] A · B + A · C
   - [ ] A + B + C
   - [ ] (A + B) · C
   > Distributiva de la suma sobre el producto, la que no existe en el álgebra común. [→ Postulados y teoremas](#Postulados%20y%20teoremas)
6. ¿Qué compuerta obtenés con una NAND de entradas unidas?
   - [x] NOT
   - [ ] AND
   - [ ] OR
   - [ ] XOR
   > (A · A)̅ = A̅ por idempotencia. [→ NAND y NOR](#NAND%20y%20NOR)
7. ¿Cuál es la simplificación de la negación de W · [X + Y · (Z + W̅)]?
   - [x] W̅ + X̅ · Y̅ + X̅ · Z̅
   - [ ] W̅ + X̅ · Y̅ · Z̅
   - [ ] W · X + Y · Z
   - [ ] W̅ · X̅ + Y̅ · Z̅
   > De Morgan tres veces, distributiva y A̅ + A · B = A̅ + B. [→ Ejemplo de parcial](#Ejemplo%20de%20parcial)

## Contenido

### Postulados y teoremas

| Ley | Forma con + | Forma con · |
|---|---|---|
| Conmutativa | A + B = B + A | A · B = B · A |
| Distributiva | A + B · C = (A + B) · (A + C) | A · (B + C) = A · B + A · C |
| Neutro | A + 0 = A | A · 1 = A |
| Complemento | A + A̅ = 1 | A · A̅ = 0 |
| Idempotencia | A + A = A | A · A = A |
| Absorción | A + A · B = A | A · (A + B) = A |
| Involución | (A̅)̅ = A | |
| De Morgan | (A + B)̅ = A̅ · B̅ | (A · B)̅ = A̅ + B̅ |

- Las cuatro primeras son **postulados**; el resto son **teoremas**.
- **Dualidad**: intercambiar + ↔ · y 0 ↔ 1 da otra igualdad válida (por eso cada ley viene de a dos).
- *(Del tutor)*: A + A̅ · B = A + B sale seguido; se demuestra con la distributiva.

### NAND y NOR

NAND y NOR son **universales**: cada una sola implementa cualquier función.

*(Explicación del tutor)*: con NAND, NOT = NAND con entradas unidas; AND = NAND
seguida de NOT; OR = NAND de las entradas negadas (De Morgan: (A̅ · B̅)̅ = A + B).

### Receta de examen

1. Sacar la expresión compuerta por compuerta, de las entradas a la salida.
2. Simplificar en una línea por paso, con el nombre de la ley al costado.
3. Primero De Morgan para "bajar" las negaciones largas; después distributiva, complemento, absorción.
4. Sólo NAND: suma de productos, negar dos veces y De Morgan → NAND-NAND. Sólo NOR: producto de sumas → NOR-NOR.

### Ejemplo de parcial

*(Resolución del tutor del 2023 T2 ej. 3; compará con la de la cátedra.)*

F = (W · [X + Y · (Z + W̅)])̅

| Paso | Expresión | Ley |
|---|---|---|
| 1 | W̅ + (X + Y · (Z + W̅))̅ | De Morgan |
| 2 | W̅ + X̅ · (Y · (Z + W̅))̅ | De Morgan |
| 3 | W̅ + X̅ · (Y̅ + (Z + W̅)̅) | De Morgan |
| 4 | W̅ + X̅ · (Y̅ + Z̅ · W) | De Morgan e involución |
| 5 | W̅ + X̅ · Y̅ + X̅ · Z̅ · W | Distributiva |
| 6 | W̅ + X̅ · Y̅ + X̅ · Z̅ | A̅ + A · B = A̅ + B (con A = W) |

Sólo NAND: F = NAND(W, NAND(X̅, Y̅), NAND(X̅, Z̅)), con X̅ = NAND(X, X).

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Simplificación de funciones](simplificacion-de-funciones.md) — Karnaugh, cuando hay tabla.
- [Circuitos combinacionales](circuitos-combinacionales.md)
