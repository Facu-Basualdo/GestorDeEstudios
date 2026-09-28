# Generaciones de computadoras
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 1 · Peso en exámenes: 1/3 (entra como teoría; 0 ejercicios en 5 parciales) · Fuentes:
> **generaciones según el *Apunte teórico* de la cátedra (pp. 10–12, vía el export de Faro)**,
> que reemplaza a la versión anterior de esta nota; Von Neumann, Harvard y arquitectura vs.
> organización salen del [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Generaciones%20de%20computadoras).

## Preguntas de recuperación

- ¿Cuántas generaciones da la cátedra y qué define a cada una? :: Seis: **0** mecánicos y electromecánicos (hasta 1945) · **1** tubos al vacío (1945–55) · **2** transistores (1955–65) · **3** circuitos integrados (1965–80) · **4** computadoras personales, LSI (1980 en adelante) · **5** computación cuántica (2010 en adelante). [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
- ¿Qué hay en la generación 0? :: Ábacos, calculadoras mecánicas de ruedas y engranajes (la **Pascalina**) y sistemas de **relés** (la **Mark** de Harvard). [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
- ¿Cómo era la 1ª generación y qué máquinas la representan? :: **Tubos al vacío** (hasta 20.000), máquinas enormes y lentas, **sin sistema operativo**. Colossus (descifrado en la Segunda Guerra) y la Mark de Manchester, la primera en **almacenar un programa en memoria** (Von Neumann). [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
- ¿Qué trae la 2ª generación además de los transistores? :: **Proceso por lotes**, **mainframes**, distinción de roles (diseñadores, programadores), programas en **tarjetas perforadas**. IBM 704 (punto flotante) y **FORTRAN**. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
- ¿Qué trae la 3ª generación además de los circuitos integrados? :: **Multiprogramación**, **discos duros** y la **IBM 360** (estándar de compatibilidad). También Intel, el lenguaje C, el **Intel 4004** (primer microprocesador), Apple I y II y Microsoft. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
- ¿Qué caracteriza a la 4ª generación? :: **LSI**, las **interfaces gráficas**, Windows y Linux. Commodore 64, Macintosh, C++, Windows 95. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
- ¿Qué es la 5ª generación para la cátedra? :: La **computación cuántica**: el **qubit** puede estar en varios estados a la vez (**superposición**) y explora muchos caminos en simultáneo. Necesita temperaturas extremadamente bajas. IBM Q System One, D-Wave. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
- Describí el modelo de Von Neumann. :: Programa almacenado: CPU (unidad de control + ALU), una memoria única para datos e instrucciones, E/S y buses. [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
- ¿Cuál es el cuello de botella de Von Neumann? :: Un solo camino entre CPU y memoria, compartido por datos e instrucciones. [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
- ¿Qué diferencia a Harvard de Von Neumann? :: Harvard tiene memorias y buses separados para instrucciones y datos. [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
- Diferenciá arquitectura de organización. :: Arquitectura: lo visible al programador (juego de instrucciones, formatos, direccionamiento). Organización: cómo se implementa (señales de control, tecnología de memoria). [→ Arquitectura y organización](#Arquitectura%20y%20organización)
- ¿Qué es una computadora según Stallings? *(cátedra, Cuestionario Teórico Nº 1)* :: Una **máquina digital electrónica programable** para el tratamiento automático de la información, capaz de **recibirla, operar sobre ella** mediante procesos determinados y **suministrar los resultados**. [→ Definiciones de la cátedra](#Definiciones%20de%20la%20cátedra)
- ¿Cuáles son los 8 niveles de la organización estructurada de un computador (Tanenbaum), de menor a mayor? *(cátedra, Cuestionario Teórico Nº 1)* :: 0 capa física · 1 lógica digital · 2 microprogramación · 3 máquina convencional (lenguaje de máquina) · 4 sistema operativo · 5 compiladores y ensambladores · 6 lenguaje de alto nivel · 7 aplicaciones del usuario. [→ Definiciones de la cátedra](#Definiciones%20de%20la%20cátedra)
- ¿Qué hito define cada generación en el cuestionario de la cátedra? *(cátedra, Cuestionario Teórico Nº 1)* :: 0 sistemas mecánicos y electromecánicos · 1 válvulas y tubos al vacío · 2 transistores y sistemas batch · 3 multiprogramación y circuitos integrados · 4 **computadores portátiles** (personales) · 5 computación cuántica. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)

## Cuestionario

1. ¿Qué tecnología caracteriza a la 2ª generación?
   - [x] Transistores
   - [ ] Tubos al vacío
   - [ ] Circuitos integrados
   - [ ] Relés
   > 0 relés y mecánica · 1 tubos · 2 transistores · 3 circuitos integrados · 4 LSI · 5 cuántica. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
2. ¿A qué generación pertenece la IBM 360?
   - [x] 3ª
   - [ ] 2ª
   - [ ] 4ª
   - [ ] 1ª
   > Se volvió el estándar de compatibilidad de la 3ª generación. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
3. Según el apunte de la cátedra, ¿en qué generación aparece el Intel 4004, el primer microprocesador?
   - [x] 3ª
   - [ ] 4ª
   - [ ] 2ª
   - [ ] 5ª
   > Muchos libros lo ponen en la 4ª; el apunte de la cátedra lo lista entre los hitos de la 3ª (1965–1980). [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
4. ¿Qué es la 5ª generación para la cátedra?
   - [x] La computación cuántica
   - [ ] La inteligencia artificial y el procesamiento paralelo
   - [ ] Las computadoras personales
   - [ ] Los circuitos integrados VLSI
   > Otros libros hablan de IA y paralelismo; el apunte de la cátedra define la 5ª (2010 en adelante) por el qubit y la superposición. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
5. ¿Qué máquinas pertenecen a la 1ª generación según el apunte?
   - [x] Colossus
   - [x] La Mark de Manchester
   - [ ] La Pascalina
   - [ ] La IBM 704
   > La Pascalina es de la generación 0 y la IBM 704, de la 2ª. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
6. ¿De qué viene el cuello de botella de Von Neumann?
   - [x] De un único camino entre CPU y memoria para datos e instrucciones
   - [ ] De que no tiene registros internos
   - [ ] Del uso de válvulas de vacío
   - [ ] De tener memorias separadas para datos e instrucciones
   > Memorias separadas es justamente lo que propone Harvard para evitarlo. [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
7. ¿Qué es propio de la arquitectura Harvard?
   - [x] Memorias y buses separados para instrucciones y datos
   - [ ] Programa almacenado en la misma memoria que los datos
   - [ ] No tener unidad de control
   - [ ] Usar sólo tarjetas perforadas
   > [→ Von Neumann y Harvard](#Von%20Neumann%20y%20Harvard)
8. ¿Cuál de estos es un atributo de arquitectura y no de organización?
   - [x] El juego de instrucciones
   - [ ] La tecnología de la memoria
   - [ ] Las señales de control
   - [ ] El tipo de transistor usado
   > Arquitectura es lo que ve el programador; el resto es cómo se implementa. [→ Arquitectura y organización](#Arquitectura%20y%20organización)
9. ¿En qué generación aparecen FORTRAN y COBOL?
   - [x] 2ª
   - [ ] 1ª
   - [ ] 3ª
   - [ ] 4ª
   > Junto con el ensamblador y la memoria de núcleos de ferrita. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)
10. Según William Stallings, un computador es… *(cátedra, Cuestionario Teórico Nº 1)*
   - [ ] Máquina digital para el tratamiento automático de la información, capaz de operar sobre ella mediante procesos determinados y suministrar los resultados
   - [x] Máquina digital electrónica programable para el tratamiento automático de la información, capaz de recibirla, operar sobre ella mediante procesos determinados y suministrar los resultados de tales operaciones
   - [ ] Máquina digital eléctrica para el tratamiento automático de la información, capaz de recibirla mediante procesos determinados y suministrar los resultados
   - [ ] Máquina digital electromecánica para el tratamiento automático de la información, capaz de recibirla, operar sobre ella y suministrar los resultados
   > Las palabras clave son **electrónica** y **programable**, y los tres verbos: recibir, operar y suministrar. Los distractores cambian el adjetivo o se saltean un verbo. [→ Definiciones de la cátedra](#Definiciones%20de%20la%20cátedra)
11. En la organización estructurada de Tanenbaum, ¿qué hay en el nivel 4? *(cátedra, Cuestionario Teórico Nº 1)*
   - [x] El sistema operativo
   - [ ] Compiladores y ensambladores
   - [ ] La máquina convencional (lenguaje de máquina)
   - [ ] La microprogramación
   > De abajo hacia arriba: 0 capa física, 1 lógica digital, 2 microprogramación, 3 máquina convencional, 4 sistema operativo, 5 compiladores y ensambladores, 6 lenguaje de alto nivel, 7 aplicaciones. En los intentos corregidos, poner el SO en el 5 y los compiladores en el 4 contó como error. [→ Definiciones de la cátedra](#Definiciones%20de%20la%20cátedra)
12. ¿Qué hito define a la generación 4 (desde 1980) en el cuestionario de la cátedra? *(cátedra, Cuestionario Teórico Nº 1)*
   - [x] Computadores portátiles (personales)
   - [ ] Multiprogramación y circuitos integrados
   - [ ] Transistores y sistemas batch
   - [ ] Computación cuántica
   > Circuitos integrados es la 3, transistores la 2 y cuántica la 5. [→ Las generaciones según la cátedra](#Las%20generaciones%20según%20la%20cátedra)

## Contenido

### Las generaciones según la cátedra

Del *Apunte teórico* (pp. 10–12):

| Generación | Período | Tecnología | Rasgos y ejemplos |
|---|---|---|---|
| **0** — Mecánicos y electromecánicos | hasta 1945 | Engranajes, relés | Ábaco; calculadoras de ruedas y engranajes (la **Pascalina**); sistemas de relés con casi un millón de ruedas (la **Mark de Harvard**) |
| **1** — Tubos al vacío y tableros | 1945–1955 | **Tubos al vacío** (hasta 20.000) | Máquinas enormes y lentas; **sin sistema operativo**. **Colossus** (descifrado en la Segunda Guerra) y **Mark de Manchester**, la primera máquina de Von Neumann en **almacenar el programa en memoria** |
| **2** — Transistores y sistemas por lotes | 1955–1965 | **Transistores** (más fiables, menos calor) | **Proceso por lotes**, **mainframes**, distinción de roles (diseñadores, programadores), programas en **tarjetas perforadas**. **IBM 704** (punto flotante), **FORTRAN**; primer videojuego y primer mouse |
| **3** — Circuitos integrados y multiprogramación | 1965–1980 | **Circuitos integrados** | **Multiprogramación**, **discos duros**, **IBM 360** (estándar de compatibilidad). Fundación de Intel, lenguaje **C**, **Intel 4004** (primer microprocesador), Apple I y II, fundación de Microsoft |
| **4** — Computadoras personales | 1980 en adelante | **LSI** (integración a gran escala) | **Interfaces gráficas**, Windows y Linux. Commodore 64, discos de 10 MB, C++, Macintosh, Windows 95 |
| **5** — Computación cuántica | 2010 en adelante | **Qubit** | **Superposición**: un qubit está en varios estados a la vez y se exploran muchos caminos en simultáneo. Necesita temperaturas extremadamente bajas. Aplicaciones: IA, simulación biomédica, finanzas, encriptación. IBM Q System One, D-Wave, Intel |

**Ojo**: otros libros dan otra división (por ejemplo, el microprocesador en la 4ª y una 5ª de "IA y paralelismo"). Para el parcial, **manda el apunte de la cátedra**.

*(Explicación del tutor, no está en el apunte)*: Babbage (máquina analítica) y Hollerith
(tarjetas perforadas) suelen citarse como precursores. La máquina analítica ya tenía la
organización de una computadora de propósito general: unidad de cálculo, memoria, entrada por
tarjetas y un programa que la controlaba.

### Von Neumann y Harvard

- **Von Neumann**: programa almacenado; CPU (UC + ALU), memoria única para datos e
  instrucciones, E/S y buses. **Cuello de botella**: un solo camino CPU–memoria.
- **Harvard**: memorias y buses separados para instrucciones y datos.

### Arquitectura y organización

- **Arquitectura**: atributos visibles al programador (juego de instrucciones, formatos, direccionamiento).
- **Organización**: cómo se implementan (señales, tecnología de memoria).

*(Ejemplo del tutor)*: que exista una instrucción de multiplicar es arquitectura; que
se haga con un multiplicador dedicado o con sumas sucesivas es organización.

### Definiciones de la cátedra

Del Cuestionario Teórico Nº 1 (respuestas marcadas como correctas en los intentos corregidos):

- **Computadora (Stallings)**: máquina digital **electrónica programable** para el tratamiento automático de la información, capaz de **recibirla, operar sobre ella** mediante procesos determinados y **suministrar los resultados** de tales operaciones.
- **Organización estructurada de un computador (Tanenbaum)**, de menor a mayor:

| Nivel | Nombre |
|---|---|
| 7 | Aplicaciones del usuario |
| 6 | Lenguaje de alto nivel |
| 5 | Compiladores y ensambladores |
| 4 | Sistema operativo |
| 3 | Máquina convencional o lenguaje de máquina |
| 2 | Microprogramación |
| 1 | Lógica digital |
| 0 | Capa física |

*(Los niveles 4 y 5 los deduce el tutor: en el intento corregido, SO en el 5 y compiladores en el 4 dieron error, así que van al revés. Los demás están confirmados.)*

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

_Nada todavía._
