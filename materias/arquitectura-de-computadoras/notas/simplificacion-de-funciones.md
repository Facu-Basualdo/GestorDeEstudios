# Funciones, formas canónicas y simplificación (Karnaugh)
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 2 · Peso en exámenes: 3/3 (Karnaugh dentro de los ejercicios C y E: 5/5 parciales) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Álgebra%20de%20Boole%20y%20combinacionales),
> secciones "Álgebra de Boole y combinacionales" y "E. Análisis secuencial".
> **Sin verificar todavía** contra NotebookLM ni el *Apunte teórico* (el MCP ya anda: pendiente). Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- ¿Qué es un mintérmino? :: Un producto que contiene todas las variables (negadas o no) y vale 1 en una sola fila de la tabla. [→ Formas canónicas](#Formas%20canónicas)
- ¿Qué es un maxtérmino? :: Una suma que contiene todas las variables y vale 0 en una sola fila. [→ Formas canónicas](#Formas%20canónicas)
- ¿Qué es una forma canónica? :: La función escrita como suma de mintérminos (Σm) o como producto de maxtérminos (ΠM). [→ Formas canónicas](#Formas%20canónicas)
- ¿En qué orden van las filas y columnas de un Karnaugh y por qué? :: En código Gray (00, 01, 11, 10), para que celdas vecinas difieran en una sola variable. [→ Mapas de Karnaugh](#Mapas%20de%20Karnaugh)
- ¿Qué es un implicante primo y cuándo es esencial? :: Primo: un grupo que no se puede agrandar. Esencial: cubre algún 1 que ningún otro implicante primo cubre. [→ Mapas de Karnaugh](#Mapas%20de%20Karnaugh)
- ¿Cómo se usan las condiciones indiferentes (X)? :: Se toman como 1 sólo si ayudan a agrandar un grupo; si no, se dejan afuera. [→ Mapas de Karnaugh](#Mapas%20de%20Karnaugh)
- Para un circuito sólo NAND, ¿qué agrupás? ¿Y para sólo NOR? :: NAND: unos (suma de productos). NOR: ceros (producto de sumas). [→ Mapas de Karnaugh](#Mapas%20de%20Karnaugh)
- ¿Qué es la forma normal disyuntiva (FND)? *(cátedra, Cuestionario Nº 2)* :: Una **disyunción de conjunciones** de literales: (L11 y … y L1n) o (L21 y … y L2n) o … Es la suma de mintérminos. [→ Formas canónicas](#Formas%20canónicas)
- ¿Qué es la forma normal conjuntiva (FNC)? *(cátedra, Cuestionario Nº 2)* :: Una **conjunción de disyunciones** de literales: (L11 o … o L1n) y (L21 o … o L2n) y … Es el producto de maxtérminos. [→ Formas canónicas](#Formas%20canónicas)
- ¿Qué es un minitérmino y qué un maxitérmino? *(cátedra, Cuestionario Nº 2)* :: Minitérmino: el **producto** de las variables o sus negaciones que hace que el producto **valga uno**. Maxitérmino: la **suma** de las variables o sus negaciones que hace que la suma **valga cero**. [→ Formas canónicas](#Formas%20canónicas)

## Cuestionario

1. Con variables A, B, C, ¿cuál es el mintérmino m5?
   - [x] A · B̅ · C
   - [ ] A̅ · B · C̅
   - [ ] A̅ + B + C̅
   - [ ] A + B̅ + C
   > 5 = 101: A = 1, B = 0, C = 1. En el mintérmino, las variables en 0 van negadas. [→ Formas canónicas](#Formas%20canónicas)
2. Con variables A, B, C, ¿cuál es el maxtérmino M5?
   - [x] A̅ + B + C̅
   - [ ] A · B̅ · C
   - [ ] A + B̅ + C
   - [ ] A̅ · B · C̅
   > 5 = 101. En el maxtérmino, las variables en 1 van negadas, para que la suma dé 0 sólo en esa fila. [→ Formas canónicas](#Formas%20canónicas)
3. ¿A qué se simplifica F(A, B, C) = Σm(0, 2, 4, 6)?
   - [x] C̅
   - [ ] A̅
   - [ ] B̅
   - [ ] 1
   > Los cuatro mintérminos tienen C = 0 y cubren todas las combinaciones de A y B: un grupo de 4. [→ Ejemplo](#Ejemplo)
4. En un Karnaugh, un grupo de 4 celdas elimina…
   - [x] 2 variables
   - [ ] 1 variable
   - [ ] 3 variables
   - [ ] 4 variables
   > Un grupo de 2ᵏ celdas elimina k variables. [→ Mapas de Karnaugh](#Mapas%20de%20Karnaugh)
5. ¿Qué es un implicante primo esencial?
   - [x] Uno que cubre algún 1 que ningún otro implicante primo cubre
   - [ ] El grupo más grande del mapa
   - [ ] Cualquier grupo que incluya una X
   - [ ] Un grupo de una sola celda
   > Los esenciales entran sí o sí en la expresión mínima. [→ Mapas de Karnaugh](#Mapas%20de%20Karnaugh)
6. ¿En qué orden se rotulan las filas de un Karnaugh de 2 variables por lado?
   - [x] 00, 01, 11, 10
   - [ ] 00, 01, 10, 11
   - [ ] 00, 10, 01, 11
   - [ ] 11, 10, 01, 00
   > Orden Gray: vecinos difieren en un bit. [→ Mapas de Karnaugh](#Mapas%20de%20Karnaugh)
7. La forma normal disyuntiva de una función (FND) es… *(cátedra, Cuestionario Nº 2)*
   - [x] Una disyunción de conjunciones de literales: (L11 y L12 y … y L1n) o (L21 y … y L2n) o …
   - [ ] Una conjunción de disyunciones de literales: (L11 o … o L1n) y (L21 o … o L2n) y …
   - [ ] Una conjunción de conjunciones de literales
   - [ ] Una disyunción de disyunciones de literales
   > Disyunción = "o" (suma) por fuera; conjunciones = "y" (productos) adentro: suma de mintérminos. [→ Formas canónicas](#Formas%20canónicas)
8. La forma normal conjuntiva de una función (FNC) es… *(cátedra, Cuestionario Nº 2)*
   - [x] La conjunción de disyunciones de literales: (L11 o … o L1n) y (L21 o … o L2n) y …
   - [ ] La disyunción de conjunciones de literales
   - [ ] La conjunción de conjunciones de literales
   - [ ] La disyunción de disyunciones de literales
   > Conjunción = "y" (producto) por fuera; disyunciones = "o" (sumas) adentro: producto de maxtérminos. [→ Formas canónicas](#Formas%20canónicas)
9. Minitérmino es… *(cátedra, Cuestionario Nº 2)*
   - [x] El producto de las variables en juego o sus negaciones individuales que hacen que el producto valga uno
   - [ ] La suma de las variables en juego o sus negaciones individuales que hacen que el producto valga uno
   - [ ] La suma de las variables en juego negadas que hacen que el producto valga uno
   - [ ] Ninguna de las anteriores
   > Mintérmino = producto que vale 1 en una sola fila. [→ Formas canónicas](#Formas%20canónicas)
10. Maxitérmino es… *(cátedra, Cuestionario Nº 2)*
   - [x] La suma de las variables en juego o sus negaciones individuales, que hacen que la suma valga cero
   - [ ] La suma de las variables en juego o sus negaciones individuales, que hacen que la suma valga uno
   - [ ] El producto de las variables en juego sin negar, que hacen que la suma valga uno
   - [ ] Ninguna de las anteriores
   > Maxitérmino = suma que vale 0 en una sola fila (el apunte lo define así, p. 19). El distractor "valga uno" es el más elegido. *(Respuesta según el apunte; los intentos del cuestionario no la muestran corregida.)* [→ Formas canónicas](#Formas%20canónicas)

## Contenido

### Formas canónicas

- **Mintérmino**: producto con todas las variables; vale 1 en una sola fila.
- **Maxtérmino**: suma con todas las variables; vale 0 en una sola fila.
- **Formas canónicas**: Σm (suma de mintérminos) y ΠM (producto de maxtérminos).

*(Del tutor)*: en el mintérmino se niegan las variables que valen 0 en esa fila; en el
maxtérmino, las que valen 1.

### Mapas de Karnaugh

- Celdas adyacentes difieren en una variable (orden Gray: 00, 01, 11, 10).
- Se agrupan de a 2ⁿ celdas; un grupo de 2ᵏ elimina k variables *(del tutor)*.
- **Implicante primo** = grupo máximo; **esencial** = cubre un 1 que ningún otro cubre.
- Las **indiferencias (X)** se usan si agrandan grupos.
- *(Del tutor)*: los bordes opuestos del mapa también son adyacentes (el mapa "se enrolla").
- Circuito sólo NAND → agrupar unos (SOP). Sólo NOR → agrupar ceros (POS).

### Ejemplo

*(Ejemplo del tutor, no está en las fuentes.)*

F(A, B, C) = Σm(0, 2, 4, 6): los cuatro mintérminos tienen C = 0 y forman un solo
grupo de 4 que elimina A y B → **F = C̅**.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Álgebra de Boole](algebra-de-boole.md)
- [Circuitos combinacionales](circuitos-combinacionales.md)
- [Análisis de circuitos secuenciales](analisis-de-circuitos-secuenciales.md) — Karnaugh de 4 variables por cada entrada de biestable.
