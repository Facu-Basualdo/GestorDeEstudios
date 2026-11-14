# IE5 de Diseño de Sistemas — plan (2026-11-18)

Adaptación al gestor del prompt "App de práctica: 2do parcial de DSI" que trajo el
estudiante el 2026-11-14. Ese prompt pedía una app aparte (Vite, JSON propios, carpeta
`dsi-parcial2/`). Acá no hace falta: el gestor ya tiene el flujo material → teoría →
preguntas → web. Lo que se toma de ese prompt es el **temario**, la **bibliografía**, las
**reglas para las preguntas** y la lista de **modos de la web**.

| El prompt pedía | En el gestor |
|---|---|
| `material/01-solid/` … `09-seguridad/` | `materias/diseno-de-sistemas/material/` (lo que ya estaba) + `material/parcial-2/` (lo nuevo) |
| `app/content/raw/` + `manifest.json` | `material/texto/`: Gemini sólo procesa lo que no tiene texto (modo "material nuevo") |
| `preguntas.json` / `flashcards.json` | `## Cuestionario` y `## Preguntas de recuperación` dentro de cada nota |
| `fuente` por ítem | la fuente va en el encabezado de la nota y en la cita de cada sección; las preguntas enlazan a la sección |
| `"conocimiento-general"` | *(agregado)* en la teoría |
| `"origen": "cuestionario-catedra"` | *(cátedra)* al final del enunciado |
| `npm run validate` | `node scripts/verificar-docs.mjs` + `cd web && npm run datos` (avisa ids rotos, opciones sin correcta, anclas inexistentes) |
| Separar el 2do parcial | columna Parcial de `temas.md`: el IE5 es la pestaña **Parcial 2** de la web |

## Temario → notas

El IE5 es **sólo teórico** y **acumulativo**. En [temas.md](../materias/diseno-de-sistemas/temas.md)
lo que ya tenía nota lleva Parcial `1, 2` y lo nuevo, `2`.

| # | Tema del IE5 | Notas | Estado |
|---|---|---|---|
| 1 | SOLID | principios-solid | ✓ 14 fc · 16 cu (13 de cátedra) |
| 2 | GRASP | patrones-grasp | ✓ 16 fc · 16 cu (14 de cátedra) |
| 3 | Arquitectura I | arquitectura-de-software, estilos-arquitectonicos | ✓ · el temario suma Bass caps. 8 y 9 (modificabilidad, rendimiento): **falta** |
| 4 | Arquitectura II | arquitecturas-de-sistemas-distribuidos | ✓ |
| 5 | PUDS | proceso-unificado, captura-de-requisitos-en-el-pu | ✓ · **faltan** los flujos de análisis, diseño, implementación y prueba (Jacobson caps. 9–11) |
| 6 | Patrones GoF | fundamentos, creacionales, estructurales, de comportamiento, elegir-y-diagramar, principios OO | ✓ · revisar que cada patrón tenga intención, participantes y consecuencias |
| 7 | Agilidad y XP | manifiesto-agil, programacion-extrema (modelado-agil, dudoso) | ✓ · revisar "procesos predecibles vs. adaptables", "factor humano" y "límites de XP" |
| 8 | Calidad | — | **falta la nota** |
| 9 | Seguridad | — | **falta la nota** |

**Prioridad** (puntaje = peso × (3 − dominio) × urgencia, con 4 días): primero las notas que
faltan (8, 9, flujos del PUDS, atributos de calidad), que tienen dominio 0 y nada para
practicar; después repaso con la web de 1–7, que ya tienen preguntas.

## Material para lo nuevo

| Tema | Ya está en `material/pdfs/` | Conviene agregar a `material/parcial-2/` |
|---|---|---|
| Flujos del PUDS | 14 · flujos de trabajo (25 diaps.), 13 · proceso unificado | las clases del aula sobre análisis, diseño, implementación y prueba |
| Calidad | 17 · calidad (20 diaps.), 4 · Pressman caps. 15–17 | Pressman caps. 18–19 |
| Seguridad | 59 · Bass (cap. 11, *Security*) | **todo lo de la cátedra**: clase de seguridad, OWASP Top 10:2025, Pressman cap. 18, Sommerville cap. 13 |
| Atributos de calidad (Arq. I) | 59 · Bass (caps. 3, 8, 9) | — |

Sin material de seguridad de la cátedra, la nota sale casi toda del libro de Bass y lo que
falte va *(agregado)*: no hay que inventar lo que "dice la cátedra".

## Prompt para Gemini

Pegale [prompt-gemini.md](prompt-gemini.md) con este encabezado y, debajo, el bloque
"Alcance":

```
**Materia**: Diseño de Sistemas de Información
**Carpeta**: `materias/diseno-de-sistemas/`
**Parcial**: 2 — el material nuevo está en `material/parcial-2/`

## Alcance (IE5, 2026-11-18, sólo teórico)

No proceses todo `material/`: sólo esto, en este orden, y avisame al terminar cada nota.

1. `notas/seguridad-de-software.md` (unidad 6): tríada CIA; amenaza, vulnerabilidad, ataque y
   riesgo; STRIDE; escenarios de seguridad y tácticas (detectar, resistir, reaccionar,
   recuperarse de ataques); OWASP Top 10. Fuentes: lo que haya en `material/parcial-2/` y
   el cap. 11 de `material/pdfs/59-…bass…pdf` (buscalo por el índice; no extraigas el libro entero).
2. `notas/calidad-de-software.md` (unidad 6): concepto, factores (McCall, ISO 25010),
   relación con la seguridad, revisiones técnicas, aseguramiento (SQA) y control, métricas.
   Fuentes: `17-calidad.pdf`, `4-pressman…pdf` (caps. 15–17) y `material/parcial-2/`.
3. `notas/flujos-de-trabajo-del-pu.md` (unidad 5): análisis, diseño, implementación y prueba;
   por cada uno, propósito, trabajadores, artefactos y flujo de trabajo; realización de casos
   de uso. Fuentes: `14-flujos-de-trabajo.pdf` y `13-proceso_unificado_compressed.pdf`.
   No amplíes `proceso-unificado.md` ni `captura-de-requisitos-en-el-pu.md`: enlazalas.
4. `notas/atributos-de-calidad-y-tacticas.md` (unidad 4): qué es un atributo de calidad,
   escenarios de calidad (las 6 partes), tácticas; modificabilidad y rendimiento.
   Fuente: Bass caps. 3, 8 y 9.

En `temas.md` las filas de estos temas ya existen (Parcial 2, Eval "sí"): completá sólo la
columna Nota. En `INDICE.md` agregá `## Unidad 6 — Calidad y seguridad (supuesta)`.
```

## Preguntas del IE5 (Claude, con `/revisar-materia diseno-de-sistemas`)

Además de las reglas de [recuperacion-activa.md](../metodo/recuperacion-activa.md#formato-de-las-preguntas-en-las-notas):

- **Cantidad**: como el IE5 es teórico y está cerca, en las notas nuevas apuntá a
  12–20 flashcards y 10–15 preguntas de cuestionario; en patrones, al menos una flashcard por
  patrón GoF (intención y categoría).
- **Tipo**: definiciones, comparaciones, ventajas y desventajas, cuándo aplica cada cosa y
  **reconocer el principio o el patrón a partir de una descripción**.
- **Desarrollo corto**: van como flashcards con respuesta de 2–4 líneas ("Explicá por qué…",
  "Compará…"): en la web se responde en voz alta o en papel, se da vuelta y se autocalifica.
- **Distractores**: las confusiones probables de
  [examenes/analisis.md](../materias/diseno-de-sistemas/examenes/analisis.md#Confusiones%20probables%20(IE5)).
- Primero las notas nuevas; después, en las de 1–7, completar lo que el temario nombra y la
  nota no pregunta (por ejemplo "límites de XP").

## Web: lo que el prompt pedía y lo que hay

| Modo | Estado |
|---|---|
| Flashcards con No la sabía / Dudé / La sabía, filtros por tema, Espacio y 1/2/3 | ya está |
| Práctica por tema con feedback inmediato y explicación | ya está (cuestionario filtrado por tema) |
| Repaso de errores en flashcards | ya está ("sólo falladas") |
| Fuente visible y marca de "conocimiento general" | la teoría muestra la fuente; las preguntas enlazan a su sección |
| Mobile-first, modo oscuro | ya está |
| Simulacro (N preguntas de todos los temas, temporizador, corrección al final) | **pendiente** — hoy el cuestionario con "todos" y una cantidad se parece, pero corrige al instante |
| Repaso de errores en el cuestionario | **pendiente** — hoy los fallos sólo se ven al final de cada tanda |
| Desarrollo corto con puntos clave | **pendiente** — mientras tanto, flashcards largas |
| Dashboard de progreso, export/import | **pendiente** — el seguimiento oficial sigue siendo `/progreso` |
