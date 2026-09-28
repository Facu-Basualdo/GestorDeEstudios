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

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Biestables](biestables.md)
