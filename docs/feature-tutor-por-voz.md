# Futura feature: tutor por voz en la web

2026-09-30 · pendiente

> Idea planteada el 2026-09-30, todavía sin implementar. Vive en `docs/`: no es parte del grafo.
> Objetivo: que la [web de estudio](../web/README.md) explique la teoría en voz alta, con una voz
> natural de Edge y estilo tutor. Tiene que ser **gratis**, sin servidor ni APIs pagas.

## Qué tendría

1. **Botón "Escuchar" en Teoría.** Lee el guion oral de la nota (ver abajo), resalta el párrafo
   que está sonando y tiene pausa, anterior/siguiente y velocidad (0,8× a 1,5×).
2. **Modo oral de flashcards.** Lee la pregunta, espera unos segundos (configurable), lee la
   respuesta y el estudiante califica con los botones de siempre ("No la sabía", "Dudé",
   "La sabía"). Sirve para repasar caminando o en el colectivo.
3. **Selector de voz** con preferencia guardada en `localStorage` (como los filtros).

Queda afuera: un tutor que **converse** o corrija respuestas habladas, porque eso necesita un
modelo de lenguaje y deja de ser gratis.

## La voz: dos opciones

| | A. Web Speech API (recomendada para empezar) | B. MP3 con `edge-tts` en el build |
|---|---|---|
| Cómo | `speechSynthesis` del navegador, en el cliente | El generador crea un MP3 por guion y lo deja en `out/` |
| Voz de Edge | Sólo abriendo la web **en Microsoft Edge** (voces "Natural", p. ej. *Microsoft Tomas/Elena Online (Natural) – Spanish (Argentina)*) | En cualquier navegador y dispositivo (`es-AR-TomasNeural`, `es-AR-ElenaNeural`) |
| Otros navegadores / celular | Usa la voz del navegador o del sistema (más robótica) | Igual que en Edge |
| Sin conexión | Las voces "Online" de Edge necesitan internet | Sí, los MP3 quedan en el sitio |
| Costo de mantenimiento | Ninguna dependencia nueva | API no oficial de Microsoft, que ya se rompió alguna vez; el build tarda más y cada nota suma MB |

Plan: empezar por **A** y agregar **B** después si hace falta escucharlo bien en el celular.

### Detalles técnicos de A

- Las voces cargan de forma asíncrona: esperar el evento `voiceschanged` antes de elegir.
- Elegir la voz por `lang === 'es-AR'` y nombre con "Natural"; si no hay, cualquier `es-AR`, y si
  tampoco, cualquier `es-*`.
- Leer **de a un párrafo por `SpeechSynthesisUtterance`**: algunos navegadores cortan los textos
  largos, y así el resaltado y el anterior/siguiente salen solos (evento `onend`).
- Cancelar la lectura (`speechSynthesis.cancel()`) al cambiar de nota, de pestaña o de materia.
- Si `speechSynthesis` no existe, no mostrar el botón.

## El contenido: guion oral por nota

Leer la nota tal cual suena mal: tablas, flechas, `→` y fórmulas no se entienden de oído. Cada
nota que quiera audio lleva una sección nueva:

```markdown
## Explicación oral

> Guion escrito por el tutor a partir de la nota y del notebook, para escucharse.

Párrafo corto, frases simples, sin tablas ni símbolos. ...
```

- La escribe el tutor (Claude Code) desde la nota y NotebookLM, marcada como agregada por el tutor.
  Se escribe una vez: no hay costo por reproducción.
- Estilo: como explicarlo en voz alta. Una idea por párrafo, ejemplos contados, siglas deletreadas
  la primera vez ("GRASP, o sea, patrones generales de asignación de responsabilidades"), y cerrar
  con dos o tres preguntas para pensar antes de seguir.
- Rinde en los temas **teóricos**: 2º parcial de Diseño (SOLID, GRASP, arquitectura, estilos,
  sistemas distribuidos, PUDS, captura de requisitos) y generaciones de computadoras. Para
  Hamming, Karnaugh o secuenciales no sirve: se aprenden haciendo.
- Primera tanda sugerida: las 8 notas de Diseño que entran en el 2º parcial (2026-10-21).

## Cambios a tocar

- `scripts/generar-web.mjs`: sacar `## Explicación oral` de la teoría y mandarla aparte como
  `guion: string[]` (un elemento por párrafo, texto plano sin markdown).
- `web/lib/tipos.ts`: agregar `guion` a `Tema`.
- `web/components/teoria.tsx`: botón "Escuchar" y reproductor.
- `web/components/flashcards.tsx`: modo oral.
- Un hook nuevo (por ejemplo `web/lib/voz.ts`) que encapsule voces, cola de párrafos y controles.
- `metodo/recuperacion-activa.md` y `web/README.md`: documentar la sección `## Explicación oral`.
- `scripts/verificar-docs.mjs`: revisar que acepte la sección nueva.

## Preguntas abiertas

- ¿La web se va a usar más en Edge de compu o en el celular? Define si hace falta **B**.
- ¿El modo oral de flashcards también lee la explicación de las preguntas del cuestionario?
- ¿Reconocimiento de voz para calificar ("la sabía") sin tocar la pantalla? Es gratis en Edge y
  Chrome, pero manda el audio a la nube y falla con ruido: dejarlo para el final.
