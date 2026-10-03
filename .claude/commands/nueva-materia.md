---
description: Da de alta una materia nueva (esqueleto de la carpeta, hub y prompt para Gemini)
argument-hint: "[nombre de la materia]"
---

Dar de alta la materia: $ARGUMENTS

1. **Nombre**: si no vino en los argumentos, preguntalo. Carpeta en kebab-case:
   `materias/<materia>/` (por ejemplo `bases-de-datos`). Si ya existe, frená y avisá.
2. **Contenido**: lo arma Gemini desde el material (`metodo/material.md`). Acá sólo va
   el esqueleto; el programa, los temas y las notas los escribe Gemini.
3. **Crear la carpeta** (sin notas de tema). Todo archivo salvo `CLAUDE.md` e
   `INDICE.md` empieza con breadcrumb en la segunda línea: `[← Índice <Materia>](INDICE.md)`
   (o `../INDICE.md` desde una subcarpeta); el verificador lo exige.
   - `CLAUDE.md` — puntero de ~10 líneas:
     ```
     # <Materia>
     - Material: `material/` (fuera de git), texto extraído en `material/texto/`. Ver [fuentes](fuentes.md)
     - Próxima fecha: <fecha · tipo> (ver ../../calendario.md)
     - Índice: [INDICE.md](INDICE.md)
     - Hub: [../../CLAUDE.md](../../CLAUDE.md)

     No agregues contenido a este archivo: cada tema va como una nota en notas/.
     ```
   - `INDICE.md` — breadcrumb `[← Hub](../../CLAUDE.md)`, enlaces a
     [programa](programa.md), [temas](temas.md), [sesiones](sesiones.md),
     [fuentes](fuentes.md), [análisis de exámenes](examenes/analisis.md); después
     "_Todavía no hay notas: falta pasar el material por Gemini._" (sólo se listan notas que existen).
   - `programa.md`, `fuentes.md` y `temas.md` — sólo breadcrumb y "_Lo completa Gemini
     desde el material._" (Gemini los llena; ver `docs/prompt-gemini.md`).
   - `sesiones.md` — breadcrumb, `## Errores recurrentes` (vacía) y `## Log`.
   - `examenes/analisis.md` — breadcrumb `[← Índice <Materia>](../INDICE.md)`, "sin
     modelos cargados todavía".
   - Carpeta `notas/` vacía (con `.gitkeep`) y carpeta `material/` (está en `.gitignore`).
4. **Hub**: agregá la fila en la tabla de materias de `CLAUDE.md` raíz
   (`| <Materia> | <fecha o "—"> | [INDICE](materias/<materia>/INDICE.md) |`),
   sacando la fila "ninguna todavía" si está.
5. **Fechas**: si el estudiante ya las sabe, cargalas en `calendario.md` ordenadas y
   reflejá la más próxima en el hub y en el puntero. Si no, las encuentra Gemini.
6. **Verificar**: `node scripts/verificar-docs.mjs` hasta OK.
7. **Commit** `materia <materia>: alta`, **sin Co-Authored-By**.
8. **Próximo paso**, al estudiante:
   - subir el material a `materias/<materia>/material/`;
   - pegar en Gemini (Antigravity) el prompt de `docs/prompt-gemini.md` con estas dos
     líneas ya completadas (mostráselas listas para copiar):
     `**Materia**: <Nombre>` y ``**Carpeta**: `materias/<materia>/` ``;
   - cuando Gemini termine, `/revisar-materia <materia>`.
