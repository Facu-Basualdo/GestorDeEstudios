# Registros y contadores
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 2 · Peso en exámenes: 1/3 (no aparece en ejercicios; dudoso si entra) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Secuenciales),
> sección "Secuenciales".
> **Sin verificar todavía** contra NotebookLM ni el *Apunte teórico* (el MCP ya anda: pendiente). Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- ¿Qué es el módulo de un contador? :: La cantidad de estados por los que pasa antes de repetir. [→ Contadores](#Contadores)
- Contador asíncrono vs. síncrono. :: Asíncrono (ripple): cada biestable dispara al siguiente y el retardo se acumula. Síncrono: todos comparten el reloj. [→ Contadores](#Contadores)
- ¿Cuántos biestables necesita un contador de módulo 10? :: 4, porque 2³ = 8 < 10 ≤ 16. [→ Contadores](#Contadores)
- ¿Qué es un registro de desplazamiento y qué tipos hay? :: Biestables en cascada que corren los bits. Según entrada y salida: SISO, SIPO, PISO, PIPO (S = serie, P = paralelo). [→ Registros de desplazamiento](#Registros%20de%20desplazamiento)
- ¿Qué es un monoestable? :: Un circuito con un solo estado estable: ante un disparo genera un pulso de duración fija y vuelve. [→ Monoestable](#Monoestable)
- ¿Qué es un registro en el nivel de lógica digital? *(cátedra, Cuestionario Nº 2)* :: Un **arreglo de flip-flops** que mantiene una palabra de ceros y unos y que, organizado con lógica **combinacional / secuencial**, puede realizar **operaciones específicas** sobre la información. [→ Registros y buses según la cátedra](#Registros%20y%20buses%20según%20la%20cátedra)
- ¿Cómo se transfiere el contenido de R1 a R2 por un bus? *(cátedra, Cuestionario Nº 2)* :: SR1 es una señal de **nivel**: sube el contenido de R1 al bus y se mantiene hasta que se estabiliza. Después, ER2 es una señal **impulsional** que carga el bus en R2. [→ Registros y buses según la cátedra](#Registros%20y%20buses%20según%20la%20cátedra)

## Cuestionario

1. ¿Cuál es la desventaja de un contador asíncrono?
   - [x] El retardo se acumula de biestable en biestable
   - [ ] Necesita más biestables que uno síncrono
   - [ ] No puede contar hacia arriba
   - [ ] Necesita un reloj por biestable
   > En el ripple, cada biestable dispara al siguiente. [→ Contadores](#Contadores)
2. ¿Qué significa SIPO?
   - [x] Entrada serie, salida paralelo
   - [ ] Entrada síncrona, salida por pulso
   - [ ] Entrada paralelo, salida serie
   - [ ] Serie in, pulso out
   > Serial In, Parallel Out. [→ Registros de desplazamiento](#Registros%20de%20desplazamiento)
3. ¿Cuántos biestables necesita un contador de módulo 10?
   - [x] 4
   - [ ] 10
   - [ ] 3
   - [ ] 5
   > El menor n con 2ⁿ ≥ 10. [→ Contadores](#Contadores)
4. ¿Qué hace un monoestable ante un disparo?
   - [x] Genera un pulso de duración fija y vuelve a su estado estable
   - [ ] Conmuta y queda en el estado nuevo
   - [ ] Oscila sin parar
   - [ ] Guarda el bit de entrada
   > [→ Monoestable](#Monoestable)
5. Indique la opción que más se ajuste a la definición de registros en el ámbito del nivel de lógica digital *(cátedra, Cuestionario Nº 2)*
   - [x] Arreglo de flip-flops que permite mantener una palabra de ceros y unos, y que organizados a través de una lógica combinacional / secuencial lo capacita para realizar operaciones específicas sobre la información contenida
   - [ ] Arreglo de flip-flops que … lo capacita para realizar operaciones de desplazamientos o contadores sobre la información contenida
   - [ ] Arreglo de flip-flops que permite realizar cálculos de punto flotante, de desplazamientos y/o cuenta/descuento
   - [ ] Colección ordenada de flip-flops que permite realizar operaciones hexadecimales específicas
   > La clave es "operaciones **específicas**": desplazar o contar son sólo algunos tipos de registro. [→ Registros y buses según la cátedra](#Registros%20y%20buses%20según%20la%20cátedra)
6. Para transferir el contenido de R1 a R2 a través del bus, ¿qué tipo de señales son SR1 y ER2? *(cátedra, Cuestionario Nº 2)*
   - [x] SR1 de nivel (se mantiene hasta que el bus se estabiliza) y ER2 impulsional
   - [ ] SR1 impulsional y ER2 de nivel
   - [ ] Las dos impulsionales
   - [ ] Las dos de nivel
   > Apunte, p. 31: SR1 sube los niveles de R1 al bus; recién con el bus estable se manda el impulso ER2 que carga R2. En el cuestionario, la opción es "SR1 (nivel) desde el final de θn hasta el final de θn+1 y ER2 (impulsional) en θn+1". [→ Registros y buses según la cátedra](#Registros%20y%20buses%20según%20la%20cátedra)
7. Clasificá: registro con formato mantisa-exponente, registro de sólo lectura y contador de programa P *(cátedra, Cuestionario Nº 2)*
   - [x] Coma flotante, de constantes y de propósito específico
   - [ ] Propósito general, de datos y de memoria
   - [ ] Coma flotante, de memoria y de propósito general
   - [ ] De datos, de constantes y de propósito general
   > Coma flotante = signo, exponente y mantisa; constantes = sólo lectura, creados por hardware; propósito específico = estado del sistema (PC, puntero de pila). *(Las demás categorías del cuestionario no se pueden confirmar con los intentos: ver la nota.)* [→ Registros y buses según la cátedra](#Registros%20y%20buses%20según%20la%20cátedra)

## Contenido

### Contadores

- **Módulo** = cantidad de estados.
- **Asíncrono** (ripple): cada biestable dispara al siguiente; acumula retardo.
- **Síncrono**: reloj común.
- *(Del tutor)*: con n biestables el módulo máximo es 2ⁿ.

### Registros de desplazamiento

Biestables en cascada; entradas y salidas serie o paralelo: **SISO, SIPO, PISO, PIPO**.

### Monoestable

Un solo estado estable; ante un disparo genera un pulso de duración fija.

### Registros y buses según la cátedra

Del Cuestionario Nº 2 y el *Apunte teórico* (pp. 28–31):

- **Registro**: arreglo de flip-flops que mantiene una palabra de ceros y unos y que, con lógica **combinacional / secuencial**, puede hacer **operaciones específicas** sobre ella.
- **Tipos** (p. 29): de **datos** (enteros; el viejo acumulador) · de **memoria** (sólo direcciones) · de **propósito general** (AX, BX, CX, DX en el 8086) · de **coma flotante** (signo, exponente, mantisa) · de **constantes** (sólo lectura, creados por hardware) · de **propósito específico** (estado del sistema: contador de programa, puntero de pila).
- El cuestionario pide clasificar: contador/descontador, mantisa-exponente, datos y direcciones, selección de memoria S, desplazamiento, palabra de memoria M, transferencia forzada, contador de programa P, sólo lectura y acumulador AC. Seguros: **mantisa-exponente → coma flotante**, **sólo lectura → constantes**, **contador de programa → propósito específico**. Probables *(deducción del tutor)*: **selección de memoria S → de memoria** (guarda una dirección), **acumulador AC → de datos**, **datos y direcciones → propósito general**. El resto no se puede confirmar (el intento que hay sacó 1/10).
- **Transferencia por bus** (p. 31): la señal de **nivel** SR1 sube al bus el contenido de R1; cuando el bus está estable ("maduro"), la señal **impulsional** ER2 lo carga en R2.

El Cuestionario Nº 2 incluye registros, buses y señales de gobierno: **puede entrar teoría de este tema** aunque no haya ejercicios.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Biestables](biestables.md)
