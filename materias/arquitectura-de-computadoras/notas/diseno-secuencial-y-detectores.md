# Diseño secuencial y detectores de secuencia
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 2 · Peso en exámenes: 3/3 (tipo F: 15% en los dos 2024, el formato más probable) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#F.%20Detector%20de%20secuencia%20serie),
> secciones "F. Detector de secuencia serie" y "Secuenciales".
> **Consultado con NotebookLM el 2026-09-28**: el procedimiento de la cátedra (tabla de estados + columnas de excitación + Karnaugh) coincide. **Ninguna fuente resuelve el detector "prende con una secuencia y apaga con otra"**: el único detector resuelto (final 2018-12-20, patrón 001011) es **Mealy**, con 7 estados, 3 biestables y una mezcla de JK, T y D.

## Preguntas de recuperación

- ¿Cuáles son los pasos para diseñar un circuito secuencial? :: Diagrama de estados → tabla de estados → codificación de estados → tabla de excitación → Karnaugh por entrada de biestable → circuito. [→ Pasos del diseño](#Pasos%20del%20diseño)
- Moore vs. Mealy :: **Moore**: la salida depende sólo del estado (se escribe en el estado). **Mealy**: depende del estado y de la entrada (se escribe en el arco, X/Z). Los detectores resueltos de la cátedra usan **Mealy**; Moore aparece en problemas como las luces intermitentes o los contadores. [→ Receta del detector](#Receta%20del%20detector)
- ¿Por qué conviene Moore para un detector que prende y apaga una salida? :: *(Criterio del tutor)* Porque la salida tiene que **mantenerse** entre una detección y la otra, y en Moore la salida es del estado. Con Mealy también sale, pero la salida mantenida igual obliga a separar los estados en dos grupos. [→ Receta del detector](#Receta%20del%20detector)
- ¿Cómo se organizan los estados de un detector que prende con una secuencia y apaga con otra? :: En dos grupos: salida en 0 buscando la secuencia que la prende, y salida en 1 buscando la que la apaga. Un estado por cada prefijo recibido. [→ Receta del detector](#Receta%20del%20detector)
- ¿Qué significa reusar el sufijo más largo? :: Al llegar un bit, se pasa al estado del prefijo más largo que coincide con el final de lo recibido, sin volver al inicio. [→ Receta del detector](#Receta%20del%20detector)
- ¿Cuántos biestables hacen falta para N estados? :: El menor n con 2ⁿ ≥ N. Con 5 o 6 estados, 3 biestables. [→ Receta del detector](#Receta%20del%20detector)
- En el detector 001/100, ¿a dónde va el circuito cuando completa 001? :: Al estado "1" del grupo que busca 100 (S4), porque ese último 1 ya es el comienzo de 100. [→ Ejemplo 001 y 100](#Ejemplo%20001%20y%20100)

## Cuestionario

1. ¿Cuántos biestables necesitás para 6 estados?
   - [x] 3
   - [ ] 6
   - [ ] 2
   - [ ] 4
   > 2² = 4 no alcanza; 2³ = 8 sí. [→ Receta del detector](#Receta%20del%20detector)
2. ¿Cuántos biestables necesitás para 9 estados?
   - [x] 4
   - [ ] 3
   - [ ] 9
   - [ ] 5
   > 2³ = 8 < 9 ≤ 16 = 2⁴. [→ Receta del detector](#Receta%20del%20detector)
3. En el detector que prende con 001 y apaga con 100, estás en "00" (salida 0) y llega un 1. ¿A dónde vas?
   - [x] A S4 ("1", salida 1)
   - [ ] A S3 (nada, salida 1)
   - [ ] A S0 (nada, salida 0)
   - [ ] Te quedás en S2
   > Completaste 001: la salida pasa a 1 y ese 1 es el comienzo de 100. [→ Ejemplo 001 y 100](#Ejemplo%20001%20y%20100)
4. En el detector que prende con 001 y apaga con 100 estás en "10" (salida 1) y llega un 0. ¿A dónde vas?
   - [x] A S2 ("00", salida 0)
   - [ ] A S0 (nada, salida 0)
   - [ ] A S1 ("0", salida 0)
   - [ ] A S5
   > Completaste 100 y la salida vuelve a 0. Lo recibido termina en "00", que es el comienzo de 001. [→ Ejemplo 001 y 100](#Ejemplo%20001%20y%20100)
5. En una máquina de Mealy, ¿de qué depende la salida?
   - [x] Del estado actual y de la entrada presente
   - [ ] Sólo del estado actual
   - [ ] Sólo de la entrada presente
   - [ ] Del estado siguiente
   > Por eso se anota en los arcos como X/Z. En Moore depende sólo del estado. [→ Receta del detector](#Receta%20del%20detector)
6. En el final 2018-12-20 (detector de 001011, 7 estados), ¿cuántos biestables se usan?
   - [x] 3
   - [ ] 7
   - [ ] 2
   - [ ] 6
   > 2³ = 8 ≥ 7. Ese final además pide mezclar tipos: A con JK, B con T y C con D. [→ Receta del detector](#Receta%20del%20detector)

## Contenido

### Pasos del diseño

Como en los resueltos de la cátedra (verificado con NotebookLM):

1. **Especificar y codificar** estados, entradas (X) y salidas (Z).
2. **Diagrama de transición** de estados.
3. **Tabla de estados**: columnas de entradas, estado actual Q(t), estado siguiente Q(t+1) y salidas.
4. **Columnas de excitación** a la derecha: por cada biestable, comparar Q(t) con Q(t+1) fila por fila y completar J/K, T o D según su tabla de excitación, con X donde no importa.
5. **Karnaugh** de cada entrada de biestable y de cada salida, con las entradas y el estado actual como variables. Dibujar el circuito.

Cantidad de biestables: el menor n con **2ⁿ ≥ cantidad de estados** (4 estados → 2; 7 → 3).

### Receta del detector

1. Elegir el modelo. **Mealy** (salida en los arcos, X/Z) es lo que usan los detectores resueltos de la cátedra. Para un detector cuya salida **se mantiene** entre detecciones, **Moore** (salida en el estado) es más natural *(criterio del tutor)*: si el enunciado no lo fija, cualquiera vale bien justificado.
2. Dos grupos de estados: salida en 0 buscando la secuencia que la prende; salida en 1 buscando la que la apaga.
3. Cada grupo lleva un estado por prefijo recibido.
4. En cada estado, dibujar a dónde va con 0 y con 1, **reusando el sufijo más largo** que sirva.
5. Biestables = el menor n con 2ⁿ ≥ cantidad de estados.

### Ejemplo 001 y 100

Enunciado tipo 2024 T1: la salida pasa a 1 al detectar 001 y a 0 al detectar 100.

El cronograma propone 6 estados: S0 (nada), S1 ("0"), S2 ("00") con salida 0; S3
(nada), S4 ("1"), S5 ("10") con salida 1. Al completar 001 se va a S4, no a S3.

*(Tabla del tutor, no está en las fuentes)*:

| Estado | Recibido | Salida | Con 0 | Con 1 |
|---|---|---|---|---|
| S0 | nada | 0 | S1 | S0 |
| S1 | "0" | 0 | S2 | S0 |
| S2 | "00" | 0 | S2 | S4 |
| S4 | "1" | 1 | S5 | S4 |
| S5 | "10" | 1 | S2 | S4 |

*(Observación del tutor)*: con este criterio **S3 nunca se alcanza**, porque al prender
la salida el último bit siempre es un 1. Quedan 5 estados, y siguen siendo 3
biestables. Confirmá cómo lo cuenta la cátedra.

Para practicar: 2024 T2 ej. 4 (salida a 0 con 110 y a 1 con 011).

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Biestables](biestables.md)
- [Análisis de circuitos secuenciales](analisis-de-circuitos-secuenciales.md)
