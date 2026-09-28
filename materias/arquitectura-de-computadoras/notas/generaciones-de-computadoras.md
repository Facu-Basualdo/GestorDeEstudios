# Generaciones de computadoras
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 1 · Peso en exámenes: 1/3 (entra como teoría; 0 ejercicios en 5 parciales) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Generaciones%20de%20computadoras),
> sección "Generaciones de computadoras".
> **Sin verificar contra NotebookLM**: la sesión del MCP estaba vencida el 2026-09-28. Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- ¿Qué tecnología define a cada generación? :: 1ª válvulas de vacío · 2ª transistores · 3ª circuitos integrados (SSI/MSI) · 4ª LSI/VLSI y microprocesador · 5ª ULSI y paralelismo. [→ Las generaciones](#Las%20generaciones)
- ¿Qué máquinas representan a la 1ª generación y en qué se programaban? :: ENIAC, EDVAC y UNIVAC, en lenguaje de máquina. Gran consumo y tamaño. [→ Las generaciones](#Las%20generaciones)
- ¿Qué memoria y qué lenguajes aparecen en la 2ª generación? :: Memoria de núcleos de ferrita; ensamblador y los primeros lenguajes de alto nivel (FORTRAN, COBOL). [→ Las generaciones](#Las%20generaciones)
- ¿Qué trae la 3ª generación además de los circuitos integrados? :: Sistemas operativos, multiprogramación y familias compatibles (IBM 360). [→ Las generaciones](#Las%20generaciones)
- ¿Con qué se asocia la 4ª generación? :: Con LSI/VLSI y el microprocesador (Intel 4004/8080), las computadoras personales y las redes. [→ Las generaciones](#Las%20generaciones)
- ¿Quiénes son los precursores y por qué Babbage es uno de ellos? :: Pascal, Leibniz, Babbage y Hollerith (tarjetas perforadas). Babbage diseñó la máquina analítica, que ya tenía unidad de cálculo, memoria, entrada por tarjetas y programa. [→ Precursores](#Precursores)
- Describí el modelo de Von Neumann. :: Programa almacenado: CPU (unidad de control + ALU), una memoria única para datos e instrucciones, E/S y buses. [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
- ¿Cuál es el cuello de botella de Von Neumann? :: Un solo camino entre CPU y memoria, compartido por datos e instrucciones. [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
- ¿Qué diferencia a Harvard de Von Neumann? :: Harvard tiene memorias y buses separados para instrucciones y datos. [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
- Diferenciá arquitectura de organización. :: Arquitectura: lo visible al programador (juego de instrucciones, formatos, direccionamiento). Organización: cómo se implementa (señales de control, tecnología de memoria). [→ Arquitectura y organización](#Arquitectura%20y%20organización)

## Cuestionario

1. ¿Qué tecnología caracteriza a la 2ª generación?
   - [x] Transistores
   - [ ] Válvulas de vacío
   - [ ] Circuitos integrados
   - [ ] Microprocesador
   > 1ª válvulas, 2ª transistores, 3ª circuitos integrados, 4ª microprocesador. [→ Las generaciones](#Las%20generaciones)
2. ¿A qué generación pertenece la IBM 360?
   - [x] 3ª
   - [ ] 2ª
   - [ ] 4ª
   - [ ] 1ª
   > La 3ª generación trae circuitos integrados y familias compatibles como la IBM 360. [→ Las generaciones](#Las%20generaciones)
3. ¿De qué viene el cuello de botella de Von Neumann?
   - [x] De un único camino entre CPU y memoria para datos e instrucciones
   - [ ] De que no tiene registros internos
   - [ ] Del uso de válvulas de vacío
   - [ ] De tener memorias separadas para datos e instrucciones
   > Memorias separadas es justamente lo que propone Harvard para evitarlo. [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
4. ¿Qué es propio de la arquitectura Harvard?
   - [x] Memorias y buses separados para instrucciones y datos
   - [ ] Programa almacenado en la misma memoria que los datos
   - [ ] No tener unidad de control
   - [ ] Usar sólo tarjetas perforadas
   > [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
5. ¿Cuál de estos es un atributo de arquitectura y no de organización?
   - [x] El juego de instrucciones
   - [ ] La tecnología de la memoria
   - [ ] Las señales de control
   - [ ] El tipo de transistor usado
   > Arquitectura es lo que ve el programador; el resto es cómo se implementa. [→ Arquitectura y organización](#Arquitectura%20y%20organización)
6. ¿En qué generación aparecen FORTRAN y COBOL?
   - [x] 2ª
   - [ ] 1ª
   - [ ] 3ª
   - [ ] 4ª
   > Junto con el ensamblador y la memoria de núcleos de ferrita. [→ Las generaciones](#Las%20generaciones)

## Contenido

### Precursores

Mecánica y electromecánica: Pascal, Leibniz, Babbage (máquina analítica), tarjetas
perforadas (Hollerith).

*(Explicación del tutor, no está en las fuentes)*: a Babbage se lo considera
precursor porque la máquina analítica ya tenía la organización de una computadora
de propósito general: unidad de cálculo, memoria, entrada por tarjetas perforadas y
un programa que la controlaba.

### Las generaciones

| Generación | Tecnología | Rasgos clave |
|---|---|---|
| 1ª | Válvulas de vacío | ENIAC, EDVAC, UNIVAC; lenguaje de máquina; gran consumo y tamaño |
| 2ª | Transistores | Memoria de núcleos de ferrita; ensamblador y primeros lenguajes de alto nivel (FORTRAN, COBOL) |
| 3ª | Circuitos integrados (SSI/MSI) | Sistemas operativos, multiprogramación, familias compatibles (IBM 360) |
| 4ª | LSI/VLSI, microprocesador | Intel 4004/8080, computadoras personales, redes |
| 5ª | ULSI, paralelismo | Procesamiento paralelo, inteligencia artificial |

### Von Neumann y Harvard

- **Von Neumann**: programa almacenado; CPU (UC + ALU), memoria única para datos e
  instrucciones, E/S y buses. **Cuello de botella**: un solo camino CPU–memoria.
- **Harvard**: memorias y buses separados para instrucciones y datos.

### Arquitectura y organización

- **Arquitectura**: atributos visibles al programador (juego de instrucciones, formatos, direccionamiento).
- **Organización**: cómo se implementan (señales, tecnología de memoria).

*(Ejemplo del tutor)*: que exista una instrucción de multiplicar es arquitectura; que
se haga con un multiplicador dedicado o con sumas sucesivas es organización.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

_Nada todavía._
