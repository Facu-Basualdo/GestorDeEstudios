# NotebookLM
[← Hub](../CLAUDE.md)

> MCP `notebooklm-mcp-2026`. Verificado el 2026-09-23: autenticación OK, 16 notebooks.
> Sólo se documenta lo probado; lo no probado está marcado.

## Rol

**NotebookLM es la fuente del contenido.** Convierte material largo (videos de horas,
libros, apuntes) en contenido por tema. Antes de explicar o resumir, se consulta el
notebook de la materia. **Si NotebookLM no tiene la información, se dice**; no se
inventa. Lo que agrega el tutor va marcado *(explicación del tutor, no está en las fuentes)*.

## Herramientas

Prefijo real: `mcp__notebooklm-mcp-2026__`.

| Herramienta | Parámetros | Qué devuelve | Probada |
|---|---|---|---|
| `check_auth` | — | `status` (`authenticated`/expired/not found), cantidad y edad de cookies | ✔ |
| `list_notebooks` | `max_results` (def. 50) | id, título, `source_count`, lista de fuentes (id + título), fechas | ✔ |
| `get_notebook` | `notebook_id` | título + fuentes con tipo (`pdf`, etc.) y URL | ✔ |
| `list_sources` | `notebook_id` | fuentes con id, título, `source_type_name`, URL | ✔ |
| `query_notebook` | `notebook_id`, `query`, `conversation_id?`, `source_ids?` | `answer` en markdown + `conversation_id` + `turn_number` | ✔ |
| `get_source_content` | `source_id` | texto indexado completo de una fuente | ✘ no probada |
| `add_source_text` | `notebook_id`, `text`, `title?` | agrega texto como fuente | ✘ no probada (escribe) |
| `add_source_url` | `notebook_id`, `url` | agrega web o YouTube como fuente | ✘ no probada (escribe) |
| `login` | `timeout?` | abre Chrome para loguearse (interactivo) | ✘ no probada |

- **Nunca agregues fuentes sin que el estudiante lo pida**: `add_source_*` modifica sus notebooks.
- `get_source_content` devuelve el texto entero: puede ser enorme (un libro). Usala
  sólo para una cita textual puntual y preferí `query_notebook`.

## Cómo consultar

**`query_notebook` es la herramienta principal.** Lo verificado:

- **Responde con estructura y páginas** si se piden: "listá los temas de cada fuente
  con páginas" devolvió secciones con número de página por capítulo.
- **Las citas vienen como `[1]`, `[2, 3]`**: son referencias internas de NotebookLM
  a pasajes, **no se ven desde acá**. Para la nota, citá por **fuente + página/minuto**
  (pedíselos explícitamente en la pregunta), no por esos números.
- **Las respuestas largas pueden cortarse a mitad de frase** (pasó al transcribir el
  programa). Repreguntá con el mismo `conversation_id`: "tu respuesta se cortó en
  '<últimas palabras>'; continuá desde ahí". Mejor aún: pedí de a una unidad o sección.
- **Lee imágenes**: con `source_ids` apuntando a PNG/JPG, transcribe su texto (así se
  obtuvo el programa de Arquitectura).
- Suele cerrar con una oferta ("¿Te gustaría profundizar…?"): ignorala.
- **Seguimiento**: pasá el `conversation_id` de la respuesta anterior para preguntas
  encadenadas sobre el mismo tema.
- **Acotar a una fuente**: `source_ids` con los ids de `list_sources`. Útil en
  `/procesar-fuente` para no mezclar material.

Plantillas de pregunta que conviene usar:

- Mapa de fuente: *"Para la fuente X, listá los temas que trata en orden, con las
  páginas (o minutos) donde empieza y termina cada uno."*
- Contenido de tema: *"Sobre <tema>, según las fuentes: definiciones, procedimiento
  paso a paso, fórmulas, ejemplos y lo que se remarca como importante. Indicá fuente
  y página/minuto de cada parte."*
- Chequeo de cobertura: *"¿Las fuentes tratan <tema>? Si no, decí explícitamente que no."*

## Cómo están organizados los notebooks

- **Un notebook por materia** (desde el 2026-09-23 el estudiante borró los notebooks
  viejos y dejó sólo "Arquitectura de computadoras"). El id de cada uno queda en el
  puntero `CLAUDE.md` y en `fuentes.md` de la materia.
- Un notebook puede tener **muchas fuentes** (el de Arquitectura tenía 106 el día
  que se creó): teoría, guías de autoestudio, videos de YouTube y **modelos de examen**
  (PDFs e imágenes con fecha en el nombre, algunos "(resuelto)"). Acotá con `source_ids`.
- Las fuentes se siguen cargando: antes de procesar, corré `list_sources` de nuevo.
- Al crear una materia (`/nueva-materia`), se listan los notebooks y el estudiante
  elige. Queda registrado en `fuentes.md`.

## Límites y fallas

- **Las cookies vencen cada 2–4 semanas.** Síntoma: `check_auth` no da
  `authenticated` o las llamadas fallan con error de auth. Solución: el estudiante corre
  `notebooklm-mcp-2026 login` en su terminal. **Frená y avisá**; no sigas inventando.
- Si una respuesta de NotebookLM parece contradecir la nota, **gana la fuente**:
  revisá y corregí la nota.
- NotebookLM puede equivocarse en números de página: ante una cita importante
  (fórmula, definición de examen), pedí la cita textual.

## Ver también

- [Recuperación activa](recuperacion-activa.md) — preguntas cuando el tema no tiene nota.
- [Cierre de sesión](cierre-de-sesion.md)
