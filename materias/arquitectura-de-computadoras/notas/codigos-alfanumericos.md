# Códigos alfanuméricos (ASCII y EBCDIC)
[← Índice Arquitectura de Computadoras](../INDICE.md)

> Unidad 1 · Peso en exámenes: 2/3 (ASCII dentro del ejercicio de Hamming; "FIN" en ASCII octal) · Fuente:
> [cronograma del estudiante](../../../docs/cronograma-eval-1-arquitectura.md#Codificación),
> secciones "Codificación" y "A. Hamming + códigos".
> **Sin verificar contra NotebookLM**: la sesión del MCP estaba vencida el 2026-09-28. Si algo choca con la cátedra, manda la cátedra.

## Preguntas de recuperación

- ¿Cuántos bits usa ASCII y cuántos símbolos codifica? :: 7 bits, 128 símbolos. La versión extendida usa 8 bits. [→ ASCII y EBCDIC](#ASCII%20y%20EBCDIC)
- ¿Qué es EBCDIC? :: Código de 8 bits de IBM, dividido en zona + dígito. [→ ASCII y EBCDIC](#ASCII%20y%20EBCDIC)
- ¿Cómo se pasa una letra a ASCII octal? :: Letra → código ASCII en binario → agrupar de a 3 bits desde la derecha → cada grupo es un dígito octal. [→ ASCII en octal](#ASCII%20en%20octal)
- ¿Cuánto es "FIN" en ASCII octal? :: F = 106, I = 111, N = 116. [→ ASCII en octal](#ASCII%20en%20octal)
- ¿Qué código ASCII tiene la "A"? ¿Y el dígito "0"? :: "A" = 41h (1000001). "0" = 30h (0110000). Las mayúsculas y los dígitos son consecutivos. [→ Tabla mínima](#Tabla%20mínima)

## Cuestionario

1. ¿Cuánto es "FIN" en ASCII octal?
   - [x] 106 111 116
   - [ ] 106 111 115
   - [ ] 46 49 4E
   - [ ] 070 073 078
   > F = 46h = 1 000 110 = 106; I = 49h = 1 001 001 = 111; N = 4Eh = 1 001 110 = 116. "46 49 4E" es la versión hexadecimal. [→ ASCII en octal](#ASCII%20en%20octal)
2. ¿Cuántos símbolos codifica el ASCII estándar?
   - [x] 128
   - [ ] 256
   - [ ] 64
   - [ ] 100
   > Usa 7 bits: 2⁷ = 128. Con 8 bits (extendido) son 256. [→ ASCII y EBCDIC](#ASCII%20y%20EBCDIC)
3. ¿Qué describe a EBCDIC?
   - [x] 8 bits, zona + dígito, creado por IBM
   - [ ] 7 bits, estándar de ANSI
   - [ ] 16 bits, pensado para todos los alfabetos
   - [ ] 4 bits por dígito decimal
   > EBCDIC es de IBM y separa cada byte en zona y dígito. [→ ASCII y EBCDIC](#ASCII%20y%20EBCDIC)
4. Al decodificar un Hamming aparece el grupo 1000111. ¿Qué carácter ASCII es?
   - [x] G
   - [ ] F
   - [ ] g
   - [ ] 7
   > 1000111 = 47h = 71. Como "A" = 41h, 47h es la séptima letra: G. [→ Tabla mínima](#Tabla%20mínima)

## Contenido

### ASCII y EBCDIC

| Código | Bits | Símbolos | Detalle |
|---|---|---|---|
| ASCII | 7 | 128 | 8 bits en la versión extendida |
| EBCDIC | 8 | 256 | de IBM; cada byte es zona + dígito |

### ASCII en octal

1. Letra → código ASCII en binario.
2. Agrupar de a 3 bits desde la derecha.
3. Cada grupo es un dígito octal.

Para verificar: **F = 106, I = 111, N = 116**.

### Tabla mínima

*(Tabla del tutor, no está en las fuentes: usá la tabla ASCII del campus para el examen.)*

| Carácter | Hex | Binario (7 bits) | Octal |
|---|---|---|---|
| 0 … 9 | 30h … 39h | 0110000 … 0111001 | 060 … 071 |
| A | 41h | 1000001 | 101 |
| F | 46h | 1000110 | 106 |
| I | 49h | 1001001 | 111 |
| N | 4Eh | 1001110 | 116 |
| Z | 5Ah | 1011010 | 132 |
| a | 61h | 1100001 | 141 |

Las mayúsculas van de 41h a 5Ah en orden; las minúsculas están 20h más arriba.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Códigos numéricos](codigos-numericos.md)
- [Códigos redundantes](codigos-redundantes.md) — el ASCII suele venir protegido con Hamming.
