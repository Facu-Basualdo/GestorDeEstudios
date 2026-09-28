# Análisis de circuitos secuenciales
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 2 · Peso en exámenes: 3/3 (tipo E: 45% del parcial en 3/5) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Secuenciales),
> secciones "Secuenciales" y "E. Análisis secuencial".
> **Sin verificar contra NotebookLM**: la sesión del MCP estaba vencida el 2026-09-28. Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- ¿Qué diferencia a un circuito secuencial de uno combinacional? :: En el secuencial la salida depende de las entradas y del estado (tiene memoria por realimentación). [→ Conceptos](#Conceptos)
- Mealy vs. Moore: ¿de qué depende la salida? :: Mealy: del estado y de la entrada. Moore: sólo del estado. [→ Conceptos](#Conceptos)
- Síncrono vs. asíncrono. :: Síncrono: cambia con el reloj. Asíncrono: cambia cuando cambian las entradas. [→ Conceptos](#Conceptos)
- En un parcial aparecen JA, KA, TB y DC. ¿Qué biestable es cada uno? :: A es JK, B es T y C es D: el tipo se deduce del nombre de la entrada. [→ Receta de examen](#Receta%20de%20examen)
- ¿Qué columnas tiene la tabla de estados? :: X, A, B, C (entrada y estado actual) · el valor de cada entrada de biestable · A⁺, B⁺, C⁺ (con la ecuación de cada biestable) · la salida S. [→ Receta de examen](#Receta%20de%20examen)
- ¿Cómo se redefine el circuito con otro biestable? :: Para cada fila se mira la transición Q → Q⁺ y se sacan las entradas del biestable nuevo con su tabla de excitación. Después, un Karnaugh por entrada nueva. [→ Receta de examen](#Receta%20de%20examen)

## Cuestionario

1. En una máquina de Moore, la salida depende de…
   - [x] Sólo el estado
   - [ ] El estado y la entrada
   - [ ] Sólo la entrada
   - [ ] El reloj
   > En Mealy depende del estado y de la entrada. [→ Conceptos](#Conceptos)
2. Las entradas se llaman JA, KA, TB y DC. ¿Qué biestables son A, B y C?
   - [x] A es JK, B es T, C es D
   - [ ] A es RS, B es T, C es D
   - [ ] Los tres son JK
   - [ ] A es D, B es JK, C es T
   > El tipo sale del nombre de la entrada. [→ Receta de examen](#Receta%20de%20examen)
3. Con 3 biestables y una entrada X, ¿cuántas filas tiene la tabla de estados?
   - [x] 16
   - [ ] 8
   - [ ] 6
   - [ ] 32
   > 4 variables (X, A, B, C): 2⁴ = 16. Por eso los Karnaugh son de 4 variables. [→ Receta de examen](#Receta%20de%20examen)
4. Piden el circuito sólo con NOR. ¿Qué agrupás en el Karnaugh?
   - [x] Los ceros, para obtener un producto de sumas
   - [ ] Los unos, para obtener una suma de productos
   - [ ] Sólo las X
   - [ ] Da igual
   > NAND → unos (SOP); NOR → ceros (POS). [→ Receta de examen](#Receta%20de%20examen)
5. Un biestable T tiene T = X. Si A = 1 y llega X = 1, ¿cuánto vale A⁺?
   - [x] 0
   - [ ] 1
   - [ ] X
   - [ ] Depende del reloj
   > T = 1 conmuta: 1 → 0. [→ Ejemplo](#Ejemplo)
6. Redefinís con un JK la transición 0 → 1. ¿Qué entradas ponés?
   - [x] J = 1, K = X
   - [ ] J = 1, K = 0
   - [ ] J = X, K = 1
   - [ ] J = 0, K = X
   > Con J = 1 pasa a 1 tanto si K = 0 (set) como si K = 1 (conmuta). [→ Ejemplo](#Ejemplo)

## Contenido

### Conceptos

- **Circuito secuencial**: la salida depende de las entradas y del estado (memoria por realimentación).
- **Mealy**: salida = f(estado, entrada). **Moore**: salida = f(estado).
- **Asíncrono** (cambia con las entradas) vs. **síncrono** (cambia con el reloj).

### Receta de examen

1. Identificar el tipo de cada biestable por la entrada: JA/KA → JK, TB → T, DC → D.
2. Tabla de estados: columnas X, A, B, C | valor de cada entrada de biestable | A⁺, B⁺, C⁺ (con la ecuación característica de cada uno) | S.
3. Si piden diagrama: un círculo por estado ABC, flechas con X/S. Para deducir la función, seguir secuencias y ver qué detecta o cuenta.
4. Redefinir: con cada transición Q → Q⁺, sacar las entradas del biestable nuevo con su tabla de excitación. Si el enunciado no dice cuál, preguntar.
5. Karnaugh de 4 variables (X, A, B, C) por cada entrada nueva.
6. Circuito: sólo NAND → agrupar unos (SOP); sólo NOR → agrupar ceros (POS).

### Ejemplo

*(Ejemplo del tutor, no está en las fuentes. Mucho más chico que el del parcial, para ver la mecánica.)*

Un biestable T (estado A) con T = X y salida S = A · X (Mealy).

| X | A | T | A⁺ | S |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 0 | 1 |

Qué hace: A cambia con cada 1 que llega, así que guarda la paridad de los unos
recibidos; S = 1 cuando llega un 1 de orden par.

Redefinido con JK (tabla de excitación):

| X | A → A⁺ | J | K |
|---|---|---|---|
| 0 | 0 → 0 | 0 | X |
| 0 | 1 → 1 | X | 0 |
| 1 | 0 → 1 | 1 | X |
| 1 | 1 → 0 | X | 1 |

Resultado: J = X, K = X.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Biestables](biestables.md) — ecuaciones y tablas de excitación.
- [Simplificación de funciones](simplificacion-de-funciones.md)
- [Diseño secuencial y detectores de secuencia](diseno-secuencial-y-detectores.md)
