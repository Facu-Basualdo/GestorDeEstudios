# Biestables (funcionamiento, excitación y conversión)
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 2 · Peso en exámenes: 3/3 (tipo D en 3/5 parciales y base del análisis secuencial) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Secuenciales),
> secciones "Secuenciales" y "D. Biestable definido por ecuación".
> **Sin verificar contra NotebookLM**: la sesión del MCP estaba vencida el 2026-09-28. Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- Escribí la ecuación característica de RS, JK, D y T. :: RS: Q⁺ = S + R̅ · Q (con S · R = 0) · JK: Q⁺ = J · Q̅ + K̅ · Q · D: Q⁺ = D · T: Q⁺ = T ⊕ Q. [→ Los cuatro biestables](#Los%20cuatro%20biestables)
- ¿Por qué S = R = 1 está prohibido en el RS y cómo lo resuelve el JK? :: Porque pide poner en 1 y en 0 a la vez. En el JK, J = K = 1 hace conmutar al biestable. [→ Los cuatro biestables](#Los%20cuatro%20biestables)
- Diferenciá tabla de funcionamiento (de verdad) y tabla de excitación. :: Funcionamiento: dadas las entradas, cuál es el próximo estado. Excitación: dada la transición Q → Q⁺, qué entradas hacen falta; es la que se usa para diseñar. [→ Tablas de funcionamiento y de excitación](#Tablas%20de%20funcionamiento%20y%20de%20excitación)
- Tabla de excitación del JK. :: 0→0: J = 0, K = X · 0→1: J = 1, K = X · 1→0: J = X, K = 1 · 1→1: J = X, K = 0. [→ Tablas de excitación](#Tablas%20de%20excitación)
- Tabla de excitación del RS. :: 0→0: S = 0, R = X · 0→1: S = 1, R = 0 · 1→0: S = 0, R = 1 · 1→1: S = X, R = 0. [→ Tablas de excitación](#Tablas%20de%20excitación)
- Tabla de excitación del D y del T. :: D = Q⁺ (0→0: 0, 0→1: 1, 1→0: 0, 1→1: 1). T = 1 cuando cambia el estado (0→1 y 1→0), 0 cuando se mantiene. [→ Tablas de excitación](#Tablas%20de%20excitación)
- ¿Para qué sirve el maestro-esclavo? :: Para evitar el "race-around" (que el JK conmute varias veces durante el mismo pulso de reloj). [→ Disparo y maestro-esclavo](#Disparo%20y%20maestro-esclavo)
- ¿Cómo se construye "un JK a partir de un UZ"? :: Tabla con J, K, Q → Q⁺ del JK → las entradas U y Z que producen esa transición, sacadas de la tabla de excitación del UZ. Después, Karnaugh de U y de Z en función de J, K y Q. [→ Receta de examen](#Receta%20de%20examen)

## Cuestionario

1. En un JK, ¿qué pasa con J = K = 1?
   - [x] Conmuta
   - [ ] Se pone en 1
   - [ ] Es un estado prohibido
   - [ ] Mantiene el estado
   > Q⁺ = J · Q̅ + K̅ · Q = Q̅. [→ Los cuatro biestables](#Los%20cuatro%20biestables)
2. En la tabla de excitación del JK, ¿qué entradas producen la transición 1 → 0?
   - [x] J = X, K = 1
   - [ ] J = 0, K = 1
   - [ ] J = 1, K = X
   - [ ] J = X, K = 0
   > Con K = 1 se pone en 0 (J = 0) o conmuta (J = 1): en los dos casos 1 → 0, así que J da igual. [→ Tablas de excitación](#Tablas%20de%20excitación)
3. En un RS, ¿qué pasa con S = R = 1?
   - [x] Es la combinación prohibida
   - [ ] Conmuta
   - [ ] Mantiene
   - [ ] Se pone en 0
   > Por eso la ecuación Q⁺ = S + R̅ · Q vale con S · R = 0. [→ Los cuatro biestables](#Los%20cuatro%20biestables)
4. ¿Cuál es la ecuación característica del T?
   - [x] Q⁺ = T ⊕ Q
   - [ ] Q⁺ = T
   - [ ] Q⁺ = T · Q̅
   - [ ] Q⁺ = T + Q
   > T = 1 conmuta y T = 0 mantiene. [→ Los cuatro biestables](#Los%20cuatro%20biestables)
5. ¿Para qué se usa la tabla de excitación?
   - [x] Para diseñar: dada la transición, saber qué entradas aplicar
   - [ ] Para saber el próximo estado dadas las entradas
   - [ ] Para dibujar el diagrama de tiempos
   - [ ] Para calcular la frecuencia máxima del reloj
   > Lo segundo es la tabla de funcionamiento. [→ Tablas de funcionamiento y de excitación](#Tablas%20de%20funcionamiento%20y%20de%20excitación)
6. Un biestable XY cumple Q⁺ = X̅ · Q + Y · Q̅. ¿Qué hace con X = 1, Y = 1?
   - [x] Conmuta
   - [ ] Se pone en 1
   - [ ] Se pone en 0
   - [ ] Mantiene
   > X̅ = 0 anula el primer término: Q⁺ = Q̅. [→ Ejemplo](#Ejemplo)
7. ¿Qué problema resuelve el maestro-esclavo?
   - [x] El race-around del JK
   - [ ] El estado prohibido del RS
   - [ ] El retardo acumulado de los contadores asíncronos
   - [ ] El rebote de los pulsadores
   > [→ Disparo y maestro-esclavo](#Disparo%20y%20maestro-esclavo)

## Contenido

### Los cuatro biestables

| Biestable | Ecuación característica | Nota |
|---|---|---|
| RS | Q⁺ = S + R̅ · Q (con S · R = 0) | S = R = 1 prohibido |
| JK | Q⁺ = J · Q̅ + K̅ · Q | J = K = 1 conmuta |
| D | Q⁺ = D | retardo / latch de dato |
| T | Q⁺ = T ⊕ Q | base de contadores |

### Tablas de funcionamiento y de excitación

- **Tabla de funcionamiento (de verdad)**: entradas → próximo estado.
- **Tabla de excitación**: transición Q → Q⁺ → entradas necesarias. Se usa para diseñar y para redefinir un circuito con otro biestable.

### Tablas de excitación

*(Tabla del tutor, no está en las fuentes: el cronograma pide escribirla de memoria.)*

| Q → Q⁺ | S R | J K | D | T |
|---|---|---|---|---|
| 0 → 0 | 0 X | 0 X | 0 | 0 |
| 0 → 1 | 1 0 | 1 X | 1 | 1 |
| 1 → 0 | 0 1 | X 1 | 0 | 1 |
| 1 → 1 | X 0 | X 0 | 1 | 0 |

### Disparo y maestro-esclavo

- Disparo **por nivel** vs. **por flanco**.
- El **maestro-esclavo** evita el "race-around".

### Receta de examen

Para un biestable definido por ecuación (UZ, WZ, KP):

1. **Tabla de funcionamiento**: para cada combinación de las 2 entradas, evaluar Q⁺ con Q = 0 y Q = 1 y nombrar el efecto: mantiene, pone en 1, pone en 0, conmuta.
2. **Tabla de excitación**: para cada transición (0→0, 0→1, 1→0, 1→1), qué valores de entrada la producen; X cuando da igual.
3. **Conversión** ("JK a partir de UZ"): se construye un JK usando el UZ. Tabla con J, K, Q → Q⁺ del JK → U y Z necesarios, sacados de la excitación del UZ.
4. Karnaugh de U y de Z en función de J, K, Q → dibujar el UZ con esa lógica en las entradas.

### Ejemplo

*(Ejemplo inventado por el tutor para practicar la receta.)*

Biestable XY con Q⁺ = X̅ · Q + Y · Q̅.

| X Y | Q⁺ con Q = 0 | Q⁺ con Q = 1 | Efecto |
|---|---|---|---|
| 0 0 | 0 | 1 | mantiene |
| 0 1 | 1 | 1 | pone en 1 |
| 1 0 | 0 | 0 | pone en 0 |
| 1 1 | 1 | 0 | conmuta |

| Q → Q⁺ | X | Y |
|---|---|---|
| 0 → 0 | X | 0 |
| 0 → 1 | X | 1 |
| 1 → 0 | 1 | X |
| 1 → 1 | 0 | X |

Es un JK disfrazado: Y hace de J y X hace de K.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Análisis de circuitos secuenciales](analisis-de-circuitos-secuenciales.md) — donde se redefine con otro biestable.
- [Diseño secuencial y detectores de secuencia](diseno-secuencial-y-detectores.md)
- [Registros y contadores](registros-y-contadores.md)
