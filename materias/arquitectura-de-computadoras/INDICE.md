# Arquitectura de Computadoras — Índice
[← Hub](../../CLAUDE.md)

[Programa](programa.md) · [Temas](temas.md) · [Sesiones](sesiones.md) · [Fuentes](fuentes.md) · [Análisis de exámenes](examenes/analisis.md)

> Próxima fecha: **2026-09-30 16 hs · Evaluación Nº 1** — generaciones, codificación,
> combinacionales y secuenciales (no entra U3). Formato probable (2024): Hamming +
> biestable por ecuación + análisis secuencial (45%) + detector de secuencia.
> Plan día por día: [cronograma](../../docs/cronograma-eval-1-arquitectura.md).

> **Las notas salen del cronograma del estudiante y no están verificadas contra
> NotebookLM** (sesión vencida el 2026-09-28). Pendiente: verificarlas y citar fuente y página.
> Para practicar con flashcards y cuestionario: [web de estudio](../../web/README.md).

## Unidad 1 — Codificación de la información

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Códigos redundantes](notas/codigos-redundantes.md) | 3 | Hamming en los 5 parciales (20–25%): verificar, corregir y decodificar · convención de posiciones sin confirmar con la cátedra |
| [Códigos numéricos](notas/codigos-numericos.md) | 3 | Decodificar BCD, 2421, Aiken, Exceso 3 y Gray después del Hamming · 2421 y Aiken se nombran por separado: confirmar cuál es cuál |
| [Códigos alfanuméricos](notas/codigos-alfanumericos.md) | 2 | ASCII dentro del Hamming · "FIN" en ASCII octal = 106 111 116 |
| [Sistemas de numeración](notas/sistemas-de-numeracion.md) | 2 | Auxiliar del Hamming: binario ↔ octal/hexa por agrupamiento · conversión de fracciones |
| [Complementos y aritmética digital](notas/complementos-y-aritmetica-digital.md) | 1 | Sólo teoría: rangos de SM, C1, C2 y exceso · overflow en C2 |
| [Generaciones de computadoras](notas/generaciones-de-computadoras.md) | 1 | Sólo teoría: tecnología de cada generación · Von Neumann vs. Harvard · arquitectura vs. organización |

## Unidad 2 — Circuitos combinacionales y secuenciales

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Análisis de circuitos secuenciales](notas/analisis-de-circuitos-secuenciales.md) | 3 | El 45% del parcial en 2023–2024: tabla de estados, redefinir con otro biestable, Karnaugh, sólo NAND o NOR |
| [Biestables](notas/biestables.md) | 3 | Biestable por ecuación (UZ, WZ, KP): tabla de funcionamiento, de excitación y conversión a JK, RS o D |
| [Diseño secuencial y detectores de secuencia](notas/diseno-secuencial-y-detectores.md) | 3 | Detector que prende con una secuencia y apaga con otra (Moore) · cantidad de biestables |
| [Funciones, formas canónicas y simplificación](notas/simplificacion-de-funciones.md) | 3 | Karnaugh de 4 variables dentro de los ejercicios C y E · mintérminos y maxtérminos |
| [Álgebra de Boole](notas/algebra-de-boole.md) | 3 | Simplificar citando la ley en cada paso · pasar a sólo NAND o NOR |
| [Circuitos combinacionales](notas/circuitos-combinacionales.md) | 2 | Enunciado → tabla de verdad → Karnaugh → circuito (sólo en 2022) · bloques MSI |
| [Registros y contadores](notas/registros-y-contadores.md) | 1 | Dudoso si entra · contador síncrono vs. asíncrono · tipos de registro de desplazamiento |

Los temas del programa sin nota están en [temas.md](temas.md).
