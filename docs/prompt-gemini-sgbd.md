# Prompt para Gemini — análisis del material de SGBD

Copiar desde la línea de abajo y pegarlo en Gemini dentro de Antigravity (tiene acceso al repo).

---

Sos un analista de material de estudio. Antes de empezar, leé `CLAUDE.md` y `metodo/recuperacion-activa.md` (convenciones del vault), y como ejemplo de formato `materias/arquitectura-de-computadoras/INDICE.md` y una nota de su carpeta `notas/`. En `materias/sistema-de-gestion-de-base-de-datos/` (`material/` y `examenes/`) está todo el material de la materia **Sistemas de Gestión de Bases de Datos** (Ingeniería en Sistemas, UTN FRRE): clases (Clase 0 a 6), `planificacion+.txt`, `cronograma.png`, resúmenes y resoluciones del 1er parcial, modelos de parcial 2019–2022 (con soluciones), el parcial BT1 que rendí (`examenes/`), bitácoras y scripts SQL de las actividades, y libros de referencia (Elmasri-Navathe, Ramakrishnan, Coronel). Respondé en español rioplatense.

**Reglas**
- Usá sólo lo que está en los archivos. Si algo no aparece, escribí "no figura en el material". Si agregás algo tuyo, marcalo con *(agregado)*.
- Citá la fuente de cada dato: `archivo, diapositiva/página`.
- Los libros son referencia: priorizá clases, modelos de parcial y lo que pide la cátedra.
- Fechas en formato `AAAA-MM-DD`. Hoy es 2026-10-03.

- Los libros completos (Coronel, Elmasri-Navathe, Data Protection) consultalos sólo si a un tema le falta teoría.

**Qué quiero que extraigas**: escribí cada archivo directamente en `materias/sistema-de-gestion-de-base-de-datos/`. Si no entra todo de una vez, hacelo por partes, en este orden:

1. **`programa.md`** — Unidades y temas según la planificación y las clases, en orden. Objetivos, bibliografía y régimen de aprobación (parciales, recuperatorios, promoción, actividades/bitácoras y cuánto valen).

2. **Fechas** — Del cronograma y la planificación: parciales, recuperatorios, entregas de actividades y qué unidades entra en cada evaluación. Tabla `Fecha | Evaluación | Qué entra`. Marcá cuál es la **próxima** evaluación después de hoy.

3. **`examenes/analisis.md`** — Analizá los modelos de parcial (1er y 2do) y el parcial BT1 que rendí:
   - Tabla por examen: ejercicios, tema de cada uno y % del puntaje.
   - Tabla de frecuencia: `Tema | En cuántos exámenes aparece | % promedio | Tipo de ejercicio (teórico, SQL, diseño físico, transacciones, etc.)`.
   - **Peso** de cada tema de 1 a 3 (3 = aparece en casi todos y vale mucho; 1 = aparece poco o sólo teoría).
   - Del parcial BT1 que rendí: qué preguntas respondí mal y cuál era la correcta. Esto es lo más importante: son mis errores reales.
   - Patrones: qué se repite casi igual entre años (enunciados tipo, base Sakila, etc.).

4. **`INDICE.md`** — Una tabla por unidad: `Nota | Peso | Qué cae · dónde me equivoco`. Nombre de nota en kebab-case (ej. `transacciones-y-concurrencia`). "Dónde me equivoco" sale de mis errores del BT1 y de las trampas típicas de los modelos.

5. **Una nota por tema** (`notas/<tema>.md`), empezando por los de peso 3. Formato exacto:

   ```
   # <Tema>
   [← Índice Sistemas de Gestión de Bases de Datos](../INDICE.md)

   > Unidad N · Peso en exámenes: X/3 (<por qué>) · Fuente: <archivos y diapositivas>

   ## Preguntas de recuperación

   - <pregunta> :: <respuesta corta y precisa>. [→ <Sección>](#<Sección%20con%20espacios>)

   ## Cuestionario

   1. <enunciado> (cátedra)
      - [x] <correcta>
      - [ ] <incorrecta basada en un error real o probable>
      - [ ] <incorrecta>
      > <explicación corta>. [→ <Sección>](#<Sección%20con%20espacios>)

   ## <Sección de teoría 1>
   ...
   ```
   - 5 a 10 preguntas de recuperación y 4 a 8 de cuestionario por nota.
   - Las preguntas que vengan de un parcial o cuestionario de la cátedra llevan *(cátedra)* al final del enunciado. Si hay varias correctas, marcá todas con `- [x]`.
   - Las anclas `#...` tienen que coincidir exactamente con un título `##` de la misma nota (espacios como `%20`).
   - Teoría concisa: definiciones, comparaciones en tabla, ejemplos SQL (MySQL) cortos y el procedimiento paso a paso para los ejercicios prácticos que toman.
   - Enlaces sólo markdown relativos `[texto](ruta.md)`, nunca `[[wikilinks]]`.

6. **`temas.md`** — Tabla `Tema | Unidad | Peso | Dominio | Último repaso | Próximo repaso`, con Dominio en 0 y las fechas vacías.

7. **Verificación**: corré `node scripts/verificar-docs.mjs` y `cd web && npm run datos`, y corregí hasta que los dos den OK. No hagas commit.

8. **Resumen final** (en el chat, no en un archivo): los 5 temas que más conviene estudiar primero para la próxima evaluación y por qué, y qué material falta o está incompleto.
