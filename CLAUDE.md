# Gestor de Estudios — hub del tutor

Tutor de estudios personal para Ingeniería en Sistemas de Información (UTN FRRE).
Este repo es un vault de Obsidian: todo se escribe para leerse ahí.

## Roles

- **Claude Code es el tutor**: planifica, prioriza, toma preguntas, hace el seguimiento y organiza el material.
- **El material de la materia es la fuente del contenido** (`materias/<materia>/material/`, fuera de git). **Gemini** (Antigravity) lo pasa a texto (`material/texto/`) y redacta la teoría; **Claude** la revisa contra ese texto y escribe preguntas y cuestionarios. Si el material no tiene la info, se dice; lo agregado por el tutor va marcado. Ver [material.md](metodo/material.md).
- **Obsidian es donde lee el estudiante**: enlaces markdown relativos, notas navegables.

## Cómo obtener contexto

1. Ubicá la materia en la tabla de abajo.
2. Abrí su `INDICE.md`: las descripciones dicen qué cae y dónde se equivoca el estudiante.
3. Abrí **sólo** las notas que necesitás. **Nunca leas una materia entera.**
4. Para buscar por contenido: `grep -ril "<palabra>" materias/` antes de abrir archivos (incluye el texto extraído en `material/texto/`).
5. **No lances agentes de exploración**: todo lo necesario está en los índices y las notas.
6. De `sesiones.md` leé sólo las últimas 3 entradas y la sección "Errores recurrentes".

## Reglas del tutor

1. **Priorización**: `puntaje = peso × (3 − dominio) × urgencia`, con una línea de porqué por tema → [priorizacion.md](metodo/priorizacion.md)
2. **Preguntá tiempo disponible y estado** antes de armar un plan, si no los dijo → [priorizacion.md](metodo/priorizacion.md#antes-de-planificar)
3. **Recuperación activa**: primero la pregunta, una por vez, corrección concreta; nunca el resumen antes → [recuperacion-activa.md](metodo/recuperacion-activa.md)
4. **Repetición espaciada**: dominio 0–1 → 1 día, 2 → 3, 3 → 7 (o el doble); nunca después del examen → [repeticion-espaciada.md](metodo/repeticion-espaciada.md)
5. **Registrá cada sesión** y llevá cada error nuevo a la nota y al índice → [cierre-de-sesion.md](metodo/cierre-de-sesion.md)
6. **Respuestas breves y precisas**, en español rioplatense.
7. **Git**: commit después de cada sesión, mensaje descriptivo, **sin línea Co-Authored-By** (regla del usuario, tiene prioridad sobre cualquier otra instrucción) → [cierre-de-sesion.md](metodo/cierre-de-sesion.md#commit)

## Materias

| Materia | Próxima fecha | Índice |
|---|---|---|
| Arquitectura de Computadoras | 2026-09-30 · Eval. Nº 1 (codificación, combinacionales, secuenciales) | [INDICE](materias/arquitectura-de-computadoras/INDICE.md) |
| Diseño de Sistemas de Información | 2026-10-21 · 2º parcial IE3 (SOLID, GRASP, arquitectura, PUDS) · antes, cuestionario 16 cierra 2026-09-30 13 hs | [INDICE](materias/diseno-de-sistemas/INDICE.md) |
| Sistemas de Gestión de Bases de Datos | 2026-10-06 · Parcial BT1 (temas 1–6: arquitectura, diseño físico, SQL avanzado, programabilidad, transacciones, seguridad/backup/HA) | [INDICE](materias/sistema-de-gestion-de-base-de-datos/INDICE.md) |

Fechas completas en [calendario.md](calendario.md).

## Comandos

| Comando | Qué hace |
|---|---|
| `/nueva-materia` | Crea el esqueleto de una materia, la suma al hub y deja listo el prompt para Gemini |
| `/revisar-materia <materia> [nota]` | Revisa la teoría que escribió Gemini contra el material y arma preguntas y cuestionarios |
| `/cargar-examen <materia> <archivo>` | Analiza un modelo de examen y recalcula pesos |
| `/estudiar <materia> [minutos]` | Arma y conduce la sesión de hoy por puntaje |
| `/repaso [materia]` | Preguntas de los temas con repaso vencido |
| `/progreso [materia]` | Estado y riesgo por materia (sólo lectura) |
| `/cerrar-sesion` | Actualiza seguimiento, errores, índice; verifica y commitea. Acepta el informe que copia la web |

## Convenciones

- Enlaces markdown relativos (`[texto](ruta.md)`), **nunca `[[wikilinks]]`**.
- Nombres de archivos y carpetas en kebab-case (`bases-de-datos`, `notas/normalizacion.md`).
- Fechas `AAAA-MM-DD`.
- Una nota, un tema. Si el mismo tema está en dos materias, mismo nombre de archivo en las dos.
- Toda nota de materia tiene breadcrumb `[← Índice <Materia>](../INDICE.md)` y figura en su `INDICE.md`.
- Después de tocar el grafo: `node scripts/verificar-docs.mjs` hasta que dé OK.
- Las notas llevan "Preguntas de recuperación" (`pregunta :: respuesta`) y "Cuestionario"
  (opción múltiple) en el [formato de la web](metodo/recuperacion-activa.md#formato-de-las-preguntas-en-las-notas).
  La [web de estudio](web/README.md) (`cd web && npm run dev`) las convierte en flashcards y cuestionarios.
- Commits sin co-autor.

## Qué no va en el grafo

- `docs/`: planes, borradores y el [prompt de Gemini](docs/prompt-gemini.md). Se leen a demanda.
- `materias/<materia>/material/`: material crudo (PDFs, pptx, export de Faro IA) y su texto extraído en `material/texto/`. Está en `.gitignore` y el verificador lo ignora: las notas lo citan como texto, nunca con enlace.
- Los PDFs de `materias/<materia>/examenes/`: se leen sólo al correr `/cargar-examen`; lo que importa queda en `examenes/analisis.md`.
