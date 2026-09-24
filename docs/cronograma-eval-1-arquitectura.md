# Cronograma de repaso – Arquitectura de Computadoras (Eval. Nº1)

Sep 23, 2026 · @Facu

> Plan de estudio aportado por el estudiante el 2026-09-23. Vive en `docs/`: no es parte
> del grafo. Las recetas y la teoría de abajo **no están verificadas contra NotebookLM**;
> al crear notas, el contenido se confirma con el notebook y manda la cátedra.

## Qué entra y cómo está armado

La Evaluación Nº 1 es el Sep 30, 2026 a las 16 hs e integra teoría y práctica de 4 temas. Según Criterios de Evaluación del campus:

| Parte | Temas |
| --- | --- |
| Teoría | Generaciones de computadoras, Codificación de la información, Combinacionales y Secuenciales |
| Práctica | Ejercicios de Codificación, Circuitos Combinacionales y Secuenciales |

**Plan actualizado (jue 24):** el estudio ahora gira en torno a resolver el parcial. Los 5 parciales viejos (2022, 2023, 2024) son 100% ejercicios y repiten siempre los mismos 6 tipos. Cada día ataca un tipo: primero la receta, después los ejercicios reales de esos parciales y al final la teoría justa que ese ejercicio usa.

Pregunta abierta: el cronograma del campus ubica *Buses, registros, señales de gobierno y ABACUS* (semanas 7–8) dentro de la Unidad II, pero la evaluación nombra solo Combinacionales y Secuenciales. Conviene confirmarlo en el foro o el grupo de WhatsApp; el plan le reserva un bloque corto por las dudas.

## Cómo es el parcial

Los 2023–2024 tienen siempre la misma estructura de 4 ejercicios: Hamming (20%), biestable nuevo (15–20%), análisis secuencial (45%) y detector de secuencia (15%). Los de 2022 cambian los dos secuenciales por Boole y un combinacional de enunciado.

| Tipo | Qué piden | Peso | Aparece en |
| --- | --- | --- | --- |
| A. Hamming + códigos | Verificar y corregir el mensaje; decodificar en BCD, 2421, Aiken, Exceso 3, Gray o ASCII; codificar "FIN" en ASCII octal | 20–25% | Los 5 |
| B. Álgebra de Boole | Sacar la expresión de un circuito, simplificar citando cada ley y pasar a solo NAND | 20–30% | 2022 T1, 2022 T2, 2023 T2 |
| C. Combinacional de enunciado | Tabla de verdad, Karnaugh y circuito (semáforo, motores) | 45% | 2022 T1, 2022 T2 |
| D. Biestable por ecuación | Tabla de funcionamiento y de excitación de UZ/WZ/KP; convertirlo en JK, RS o D | 15–20% | 2023 T2, 2024 T1, 2024 T2 |
| E. Análisis secuencial | Tabla de estados desde las ecuaciones; redefinir con la tabla de excitación de otro FF; Karnaugh; circuito solo NAND o NOR (en 2023, también diagrama y función) | 45% | 2023 T2, 2024 T1, 2024 T2 |
| F. Detector de secuencia serie | Diagrama de estados que prende/apaga la salida con dos secuencias; cantidad de biestables | 15% | 2024 T1, 2024 T2 |

Lo más probable para el 30 es el formato 2024: A + D + E + F. Aun así, B y C se practican porque la teoría de Boole y Karnaugh se usa dentro de E. La evaluación del cursado especial dice "teoría y práctica"; conviene preguntar en el foro si va a haber preguntas teóricas aparte.

## Cronograma día por día

El miércoles 23 quedó como día de teoría general (abajo). Desde el jueves, cada día es un tipo de ejercicio del parcial.

| Día | Tipo de ejercicio | Ejercicios reales | Horas |
| --- | --- | --- | --- |
| Jue 24 | A. Hamming + códigos | Los 5 Hamming de los parciales | 4–5 |
| Vie 25 | B. Boole + C. Combinacional de enunciado | 2023 T2 ej3; 2022 T1 ej1 y ej3; 2022 T2 ej1 y ej2 | 5 |
| Sáb 26 | D. Biestable por ecuación | UZ (2024 T1), WZ (2024 T2), KP (2023 T2) | 4–5 |
| Dom 27 | E. Análisis secuencial | 2024 T1 ej3, 2024 T2 ej3, 2023 T2 ej4 | 5 |
| Lun 28 | F. Detector de secuencia + teoría breve | 2024 T1 ej4, 2024 T2 ej4, Guía Secuenciales ej 9–12 | 5 |
| Mar 29 | Simulacro cronometrado | Un parcial 2024 completo + corrección | 4–5 |
| Mié 30 | Repaso liviano, examen 16 hs | Hoja resumen | 2 |

### Miércoles 23 — Generaciones y sistemas de numeración

- [ ] Ver video "UNIDAD TEMÁTICA I: Introducción a la Arquitectura de Computadoras" (teoría)
- [ ] Resumir las 5 generaciones: tecnología, máquinas ejemplo, lenguajes, velocidad/tamaño
- [ ] Precursores y modelo de Von Neumann: componentes, programa almacenado, cuello de botella
- [ ] Arquitectura vs. organización; Von Neumann vs. Harvard
- [ ] Ver video de Codificación de la información numérica + filminas de Sistemas de Numeración
- [ ] Teoría: sistemas posicionales, base, peso, rango, conversión entera y fraccionaria
- [ ] Práctica: 8 cambios de base (Guía Autoestudio Sistemas de Numeración + Ejercicios Resueltos)
- [ ] Responder las preguntas de Generaciones y Numeración del banco

### Jueves 24 — A. Hamming y códigos

- [ ] Ver video práctica 1 "Codificación y Hamming" y anotar la convención de la cátedra (orden de bits, paridad par, posiciones de control)
- [ ] Armar de memoria la tabla 0–9 en BCD 8421, 2421, Aiken, Exceso 3 y Gray
- [ ] Tener a mano ASCII (tabla del campus): letras mayúsculas y dígitos, en binario, hex y octal
- [ ] Resolver: 2024 T1 (101010000101), 2024 T2 (01000111010), 2023 T2 (001100100010)
- [ ] Resolver: 2022 T1 (0010011101001110) y 2022 T2 (0011100100101010) + "FIN" en ASCII octal
- [ ] Teoría del tipo: distancia mínima, por qué Hamming corrige 1 error, qué es el síndrome

### Viernes 25 — B. Boole y C. combinacional de enunciado

- [ ] Lista de leyes con nombre (hay que citarlas en cada paso): conmutativa, asociativa, distributiva, identidad, complemento, idempotencia, absorción, involución, De Morgan
- [ ] 2023 T2 ej3: simplificar la negación de W·\[X + Y·(Z + W̅)\] citando leyes
- [ ] 2022 T1 ej1 y 2022 T2 ej1: sacar expresión del circuito, simplificar y redibujar solo con NAND
- [ ] 2022 T1 ej3 (semáforo) y 2022 T2 ej2 (motores): tabla de verdad → Karnaugh → circuito
- [ ] Teoría del tipo: mintérmino/maxtérmino, implicante primo esencial, por qué NAND/NOR son universales

### Sábado 26 — D. Biestable por ecuación

- [ ] Escribir de memoria las tablas de excitación de RS, JK, D y T (se usan en D y en E)
- [ ] Ver videos "Biestable funcionamiento y tabla" y "Secuenciales conversión y redefinición"
- [ ] UZ (2024 T1): tabla de funcionamiento y de excitación; JK a partir de UZ
- [ ] WZ (2024 T2): ídem; RS a partir de WZ
- [ ] KP (2023 T2): ídem; convertir KP a D
- [ ] Teoría del tipo: tabla de verdad vs. tabla de excitación; por qué RS tiene estado prohibido

### Domingo 27 — E. Análisis secuencial (el 45%)

- [ ] Ver videos "Ejercicios de Secuenciales" I y II
- [ ] 2024 T1 ej3: JA, KA, TB, DC → tabla de estados → redefinir → Karnaugh → solo NAND
- [ ] 2024 T2 ej3: TB, JA, KA, DC → ídem, solo NOR
- [ ] 2023 T2 ej4: con salida S; sumar diagrama de estados y deducir qué hace el circuito
- [ ] Teoría del tipo: Mealy vs. Moore, síncrono vs. asíncrono

### Lunes 28 — F. Detector de secuencia + teoría breve

- [ ] Ver videos "Secuenciales seriales" I y II y el planteo de ej. 9–12 de la guía
- [ ] 2024 T1 ej4: salida a 1 al detectar 001, a 0 al detectar 100; contar biestables
- [ ] 2024 T2 ej4: salida a 0 con 110, a 1 con 011
- [ ] Guía Secuenciales ej. 9–12
- [ ] 1 h de teoría pura por si toman: generaciones, Von Neumann, complementos (sección Teoría y banco de preguntas)

### Martes 29 — Simulacro

- [ ] 2024 T1 completo sin apuntes y con reloj (2 h 30)
- [ ] Corregir y rehacer lo que falló
- [ ] Ver video 21 "Repaso previo al 1er parcial"
- [ ] Hoja resumen de 1 carilla: tablas de códigos, tablas de excitación, leyes de Boole, pasos de cada receta

### Miércoles 30 — Día del examen

- [ ] A la mañana: releer la hoja resumen y rehacer un Hamming corto
- [ ] Nada de temas nuevos; llegar antes de las 16 hs

## Receta por tipo de ejercicio

Seguir estos pasos en orden en cada ejercicio. Si la convención de la cátedra (videos y ejercicios resueltos) difiere, manda la cátedra.

### A. Hamming + códigos

1. Contar los bits: 11 → 4 de control + 7 de info; 12 → 4 + 8; 16 → 5 + 11.
2. Numerar posiciones desde 1; los de control van en 1, 2, 4, 8, 16.
3. Cada control revisa las posiciones cuyo número binario tiene su bit en 1: P1 → 1, 3, 5, 7, 9, 11…; P2 → 2, 3, 6, 7, 10, 11…; P4 → 4–7, 12–15; P8 → 8–15.
4. Contar unos de cada grupo (paridad par): par = 0, impar = 1. Síndrome = C8 C4 C2 C1. Si es 0, correcto; si no, esa posición está mal: invertirla.
5. Sacar los bits de control, agrupar la info de a 4 (BCD, 2421, Aiken, Exceso 3, Gray) o de a 7–8 (ASCII) y decodificar. Marcar las combinaciones inválidas.
6. Gray → binario: el primer bit se copia; cada siguiente = binario anterior XOR Gray actual.
7. ASCII octal: letra → binario ASCII → agrupar de a 3 desde la derecha. Para verificar: F = 106, I = 111, N = 116.

### B. Álgebra de Boole

1. Sacar la expresión compuerta por compuerta, de las entradas a la salida.
2. Simplificar en una línea por paso, con el nombre de la ley al costado.
3. Primero aplicar De Morgan para "bajar" las negaciones largas; después distributiva, complemento, absorción.
4. Solo NAND: dejar en suma de productos, negar dos veces y aplicar De Morgan → NAND-NAND. Solo NOR: producto de sumas → NOR-NOR.

### C. Combinacional de enunciado

1. Definir cada entrada y salida y qué significa 0 y 1 (ojo: en el semáforo la salida en alto = verde).
2. Tabla de verdad con 2ⁿ filas; llenar cada salida condición por condición; casos imposibles o prohibidos → X o 0 según el enunciado.
3. Un Karnaugh por salida; agrupar lo más grande posible usando las X.
4. Dibujar el circuito (y pasarlo a NAND si lo piden).

### D. Biestable definido por ecuación (UZ, WZ, KP)

1. **Tabla de funcionamiento:** para cada combinación de las 2 entradas, evaluar Q⁺ con Q = 0 y Q = 1 y nombrar el efecto: mantiene, pone en 1, pone en 0, conmuta.
2. **Tabla de excitación:** para cada transición (0→0, 0→1, 1→0, 1→1), qué valores de entrada la producen; usar X cuando da igual.
3. **Conversión ("JK a partir de UZ")**: se construye un JK usando el UZ. Tabla con J, K, Q → Q⁺ del JK → U y Z necesarios, sacados de la excitación del UZ.
4. Karnaugh de U y de Z en función de J, K, Q → dibujar el UZ con esa lógica en las entradas.

### E. Análisis secuencial (45%)

1. Identificar el tipo de cada FF por la entrada: JA/KA → JK, TB → T, DC → D.
2. Tabla de estados: columnas X, A, B, C | valor de cada entrada de FF | A⁺, B⁺, C⁺ (con la ecuación característica de cada FF) | S.
3. Si piden diagrama: un círculo por estado ABC, flechas con X/S. Para la función, seguir secuencias y ver qué detecta o cuenta.
4. Redefinir: con cada transición Q→Q⁺, sacar las entradas del FF nuevo con su tabla de excitación. Preguntar en el foro qué FF se usa si el enunciado no lo dice.
5. Karnaugh de 4 variables (X, A, B, C) por cada entrada nueva.
6. Circuito: solo NAND → agrupar unos (SOP); solo NOR → agrupar ceros (POS).

### F. Detector de secuencia serie

1. Elegir Moore (la salida depende del estado) porque la salida se mantiene entre detecciones.
2. Dos grupos de estados: salida en 0 buscando la secuencia que la prende, salida en 1 buscando la que la apaga.
3. Cada grupo lleva un estado por prefijo recibido. Para 001/100: S0 (nada), S1 ("0"), S2 ("00") con salida 0; S3 (nada), S4 ("1"), S5 ("10") con salida 1.
4. En cada estado, dibujar a dónde va con 0 y con 1, reusando el sufijo más largo que sirva. Ejemplo: al completar 001, el último 1 ya es el prefijo de 100, así que va a S4 y no a S3.
5. Biestables = el menor n con 2ⁿ ≥ cantidad de estados (6 estados → 3).

## Teoría específica por tema

Esto es lo mínimo que tenés que poder explicar sin mirar. Verificá cada punto contra los videos y filminas de la cátedra, que es lo que se evalúa.

### Generaciones de computadoras

| Generación | Tecnología | Rasgos clave |
| --- | --- | --- |
| Precursores | Mecánica / electromecánica | Pascal, Leibniz, Babbage (máquina analítica), tarjetas perforadas (Hollerith) |
| 1ª | Válvulas de vacío | ENIAC, EDVAC, UNIVAC; lenguaje de máquina; gran consumo y tamaño |
| 2ª | Transistores | Memoria de núcleos de ferrita, ensamblador y primeros lenguajes de alto nivel (FORTRAN, COBOL) |
| 3ª | Circuitos integrados (SSI/MSI) | Sistemas operativos, multiprogramación, familias compatibles (IBM 360) |
| 4ª | LSI/VLSI, microprocesador | Intel 4004/8080, computadoras personales, redes |
| 5ª | ULSI, paralelismo | Procesamiento paralelo, inteligencia artificial |

- **Modelo de Von Neumann**: programa almacenado; CPU (UC + ALU), memoria única para datos e instrucciones, E/S y buses. Cuello de botella = un solo camino CPU–memoria.
- **Harvard**: memorias y buses separados para instrucciones y datos.
- **Arquitectura vs. organización**: atributos visibles al programador (juego de instrucciones, formatos, direccionamiento) vs. cómo se implementan (señales, tecnología de memoria).

### Sistemas de numeración

- Sistema posicional: N = Σ dᵢ · bⁱ. Base, dígito, peso, rango (0 a bⁿ−1 con n dígitos).
- Conversión: parte entera por divisiones sucesivas, fraccionaria por multiplicaciones sucesivas; base 2 ↔ 8/16 por agrupamiento de 3/4 bits.
- Por qué una fracción exacta en decimal puede no serlo en binario (error de truncamiento).

### Codificación

- **Código**: correspondencia entre un conjunto de símbolos y combinaciones binarias. Con n bits se codifican hasta 2ⁿ símbolos.
- **Números con signo (n bits)**:

| Representación | Rango | Ceros |
| --- | --- | --- |
| Signo-magnitud | −(2ⁿ⁻¹−1) a 2ⁿ⁻¹−1 | 2 |
| Complemento a 1 | −(2ⁿ⁻¹−1) a 2ⁿ⁻¹−1 | 2 |
| Complemento a 2 | −2ⁿ⁻¹ a 2ⁿ⁻¹−1 | 1 |
| Exceso 2ⁿ⁻¹ | −2ⁿ⁻¹ a 2ⁿ⁻¹−1 | 1 |

- **Overflow en C2**: dos operandos del mismo signo dan resultado de signo opuesto (acarreo al bit de signo ≠ acarreo saliente).
- **BCD**: cada dígito decimal en 4 bits (6 combinaciones sin usar). Ponderados: 8421, 2421/Aiken, 5421. No ponderados: Exceso 3, Gray.
- **Propiedades**: autocomplementario (el complemento a 9 se obtiene invirtiendo bits: Aiken, Exceso 3); continuo/progresivo (combinaciones consecutivas difieren en 1 bit); cíclico (también la última con la primera); reflejado (Gray).
- **Alfanuméricos**: ASCII (7 bits, 128 símbolos; 8 bits extendido), EBCDIC (8 bits, zona + dígito, IBM).

### Códigos redundantes

- **Redundancia**: bits extra que no aportan información pero permiten detectar/corregir errores.
- **Distancia de Hamming** entre dos palabras = bits en que difieren; **distancia mínima** del código = la menor entre todo par.
- Detecta hasta d−1 errores; corrige hasta ⌊(d−1)/2⌋. Paridad: d = 2 (detecta 1). Hamming: d = 3 (corrige 1).
- **Paridad par/impar**: bit agregado para que la cantidad de unos sea par/impar. No detecta errores dobles.
- **Peso constante** (2 de 5, control 2 de 3): todas las palabras tienen la misma cantidad de unos.
- **Entrelazado** (paridad horizontal + vertical): la intersección de fila y columna erróneas ubica y corrige un bit.
- **Hamming**: k bits de control en posiciones 2ⁱ (1, 2, 4, 8…) con 2ᵏ ≥ n + k + 1; el síndrome da la posición del bit erróneo (0 = sin error).

### Álgebra de Boole y combinacionales

- **Postulados**: conmutativa, distributiva (ambas), neutros (0 y 1), complemento. **Dualidad**: intercambiar + ↔ · y 0 ↔ 1.
- **Teoremas**: idempotencia, absorción, involución, De Morgan.
- **Mintérmino**: producto con todas las variables, vale 1 en una sola fila. **Maxtérmino**: suma, vale 0 en una sola fila. Formas canónicas = Σm y ΠM.
- **Circuito combinacional**: la salida depende solo de las entradas actuales (sin memoria).
- **Karnaugh**: celdas adyacentes difieren en 1 variable (orden Gray); grupos de 2ⁿ; implicante primo = grupo máximo; esencial = cubre un 1 que ningún otro cubre; indiferencias (X) se usan si agrandan grupos.
- **NAND y NOR** son universales: cada una sola implementa cualquier función.
- **MSI**: multiplexor (n entradas de selección → 2ⁿ datos a 1 salida), demultiplexor, decodificador (n → 2ⁿ), codificador (2ⁿ → n, con prioridad), comparador, semisumador y sumador completo.

### Secuenciales

- **Circuito secuencial**: salida depende de entradas y del estado (memoria por realimentación).
- **Mealy**: salida = f(estado, entrada). **Moore**: salida = f(estado).
- **Asíncrono** (cambia con las entradas) vs. **síncrono** (cambia con el reloj). Disparo por nivel vs. por flanco; maestro-esclavo evita el "race-around".

| Biestable | Ecuación característica | Nota |
| --- | --- | --- |
| RS | Q⁺ = S + R̅Q (con SR = 0) | S = R = 1 prohibido |
| JK | Q⁺ = JQ̅ + K̅Q | J = K = 1 conmuta |
| D | Q⁺ = D | Retardo / latch de dato |
| T | Q⁺ = T ⊕ Q | Base de contadores |

- **Tabla de verdad** (entradas → próximo estado) vs. **tabla de excitación** (transición Q→Q⁺ → entradas necesarias; se usa para diseñar).
- **Monoestable**: un solo estado estable; ante un disparo genera un pulso de duración fija.
- **Contador**: módulo = cantidad de estados. Asíncrono (ripple, cada FF dispara al siguiente, acumula retardo) vs. síncrono (reloj común).
- **Registro de desplazamiento**: FF en cascada; entradas/salidas serie o paralelo (SISO, SIPO, PISO, PIPO).
- **Diseño**: diagrama de estados → tabla de estados → codificación → tabla de excitación → Karnaugh por entrada de FF → circuito.

## Banco de preguntas teóricas

Respondé sin mirar y tildá las que salen bien; las que no, repasalas el martes.

### Generaciones y numeración

- [ ] ¿Qué tecnología define cada generación y qué máquina la representa?
- [ ] ¿Qué aportó Babbage y por qué se lo considera precursor?
- [ ] Describí el modelo de Von Neumann y su cuello de botella.
- [ ] Diferenciá arquitectura de organización con un ejemplo.
- [ ] ¿Qué es un sistema posicional? ¿Cuál es el rango con n dígitos en base b?
- [ ] ¿Por qué 0,1 decimal no tiene representación exacta en binario?

### Codificación

- [ ] Definí código. ¿Cuántos bits mínimo para codificar 40 símbolos?
- [ ] Compará signo-magnitud, C1 y C2: rango y cantidad de ceros.
- [ ] ¿Cómo se detecta overflow en una suma en C2?
- [ ] ¿Qué es un código ponderado? Da dos ponderados y dos no ponderados.
- [ ] ¿Qué es un código autocomplementario? ¿Para qué sirve?
- [ ] ¿Qué propiedad tiene el código Gray y dónde se aplica?
- [ ] Diferencias entre ASCII y EBCDIC.

### Códigos redundantes

- [ ] Dibujá el modelo de un sistema de comunicación y ubicá dónde actúa el ruido.
- [ ] Definí redundancia, distancia de Hamming y distancia mínima.
- [ ] Con distancia mínima 4, ¿cuántos errores detecta y cuántos corrige?
- [ ] ¿Por qué la paridad simple no detecta errores dobles?
- [ ] ¿Cómo corrige un error el código entrelazado?
- [ ] ¿Cuántos bits de control necesita Hamming para 8 bits de datos? ¿En qué posiciones van?
- [ ] ¿Qué indica el síndrome?

### Combinacionales

- [ ] Enunciá los postulados de Boole y el principio de dualidad.
- [ ] Enunciá y demostrá De Morgan con tabla de verdad.
- [ ] Definí mintérmino y maxtérmino. ¿Qué es una forma canónica?
- [ ] ¿Qué es un implicante primo esencial?
- [ ] ¿Cómo se usan las condiciones indiferentes?
- [ ] ¿Por qué NAND y NOR son universales?
- [ ] Diferenciá multiplexor de decodificador; ¿cómo implementás una función con un MUX?

### Secuenciales

- [ ] ¿Qué diferencia a un circuito secuencial de uno combinacional?
- [ ] Mealy vs. Moore: ¿de qué depende la salida en cada uno?
- [ ] Síncrono vs. asíncrono; disparo por nivel vs. por flanco.
- [ ] ¿Por qué S = R = 1 está prohibido en el RS? ¿Cómo lo resuelve el JK?
- [ ] Escribí la tabla de excitación de JK, D y T.
- [ ] ¿Para qué sirve el maestro-esclavo?
- [ ] ¿Qué es un monoestable?
- [ ] Contador asíncrono vs. síncrono: ventajas y desventajas.
- [ ] Enumerá los pasos para diseñar un contador de secuencia arbitraria.
- [ ] Tipos de registros de desplazamiento.

## Material del campus por tema

Todo está en el [aula virtual de la materia](https://frre.cvg.utn.edu.ar/course/view.php?id=773).

| Tema | Teoría | Práctica |
| --- | --- | --- |
| Generaciones | Video Unidad I: Introducción; cuestionario "Generaciones de Computadoras" | — |
| Numeración y codificación | Video Unidad I (codificación numérica); Filminas de Sistemas de Numeración y Codificación; Tablas ASCII-EBCDIC | Guía Autoestudio Sistema de Numeración; Cambios de Base resueltos; 2025 Guía Autoestudio Codificación |
| Códigos redundantes | Códigos redundantes (interactivo); video Unidad I códigos redundantes | Video práctica 1 (Codificación y Hamming); Codificación Ejercicios Complementarios |
| Combinacionales | Guías de Autoestudio Lógica I y II; video "Reglas de Boole sin memorizar" | Guía Circuitos Combinacionales; Ej. 4 y Ej. 11 resueltos; videos 2–9; Problemario de Romero Herrera |
| Secuenciales | Videos 10, 11 y 13 | Guía Circuitos Secuenciales; Ej. 5 y 5 bis; videos de Ej. 5 y Ej. 9–12; videos 12–18 |
| Repaso general | Video 21 "Repaso previo al 1er parcial" | Foros de consultas de cada guía |
