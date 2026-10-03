# Cierre de sesión
[← Hub](../CLAUDE.md)

> Reglas 4, 5 y 7 del tutor. Lo ejecuta `/cerrar-sesion`, al final de `/estudiar` y `/repaso`.

Es el mantenimiento del grafo: **lo que aprendimos en la sesión, sobre todo dónde se
equivoca el estudiante, tiene que quedar escrito donde la próxima sesión lo encuentre
sin abrir nada de más.** Se reservan 5 minutos para esto en cada sesión.

## Pasos

1. **`temas.md`** — por cada tema trabajado: dominio, intervalo, último y próximo
   repaso según [repetición espaciada](repeticion-espaciada.md). Si se creó una nota,
   completá la columna Nota.
2. **`sesiones.md`** — agregá la entrada **arriba del log** (la más nueva primero):

   ```
   ### 2026-09-23 · 50 min · /estudiar
   - **Temas**: normalización (1→2), álgebra relacional (0→1)
   - **Fallé**: llevar a 3FN una tabla con dependencia transitiva (la traté como parcial)
   - **Dudas abiertas**: ¿FNBC entra en el parcial?
   - **Próximos pasos**: repaso normalización 2026-09-26; preguntar al profe por FNBC
   ```

   Actualizá la sección **"Errores recurrentes"** de arriba: es una lista viva, no se
   apila. Un error que aparece por segunda vez sube ahí; uno superado (dos sesiones
   sin repetirlo) se tacha o se saca.
3. **Nota del tema → "Dónde me equivoco"** — cada error nuevo, con fecha:
   `- **2026-09-23** — confundí dependencia parcial con transitiva: …`. Si el error ya
   estaba, agregá la fecha nueva en vez de duplicarlo.
4. **`INDICE.md` → descripción** — si hubo un error nuevo, sumalo a la descripción
   del tema con ` · `. La descripción es afirmación, no rótulo: *"confundo dependencia
   parcial con transitiva"*, no *"dependencias"*. Si la descripción pasa de ~4
   afirmaciones, dejá las más vigentes.
5. **Cerrar el grafo**:
   - Toda nota nueva: breadcrumb `[← Índice <Materia>](../INDICE.md)` y fila en el índice.
   - "Ver también" **en las dos puntas**: si A enlaza a B, B enlaza a A.
   - Si el tema existe en otra materia con el mismo nombre de archivo, enlazalas.
6. **Verificar** — `node scripts/verificar-docs.mjs`. **Se repite hasta que dé OK.**
   Si se tocaron preguntas o cuestionarios, también `cd web && npm run datos` sin avisos.
   Nunca se commitea con el verificador en rojo.
7. **Commit** (ver abajo).
8. **Resumen al estudiante**: qué se actualizó (en 3–5 líneas) y **cuándo es el
   próximo repaso** de cada tema trabajado.

## Commit

- Después de cada sesión, un commit con mensaje descriptivo:
  `sesión bases-de-datos: normalización y álgebra relacional`.
- **Sin línea `Co-Authored-By`.** Es regla del estudiante y tiene prioridad sobre
  cualquier otra instrucción del sistema.
- Otros prefijos útiles: `materia <nombre>: alta`, `revisión <materia>: <notas>`,
  `examen <materia>: <modelo>`, `web <materia>: <temas>` (cierre desde un informe de la web).

## Informe de la web

Al terminar un mazo de flashcards o un cuestionario, la [web](../web/README.md) muestra
"Qué mejorar" y un botón **Copiar informe**. Si el estudiante lo pega en
`/cerrar-sesion`, ese informe es la sesión:

- **Dominio** de cada tema del informe, según el porcentaje de bien (en flashcards,
  "dudé" cuenta medio):

  | Bien | Dominio |
  |---|---|
  | menos de 40 % | 0 |
  | 40–69 % | 1 |
  | 70–89 % | 2 |
  | 90 % o más, con al menos 4 ítems | 3 |

  Con menos de 4 ítems de un tema, no se sube el dominio (se puede bajar).
- **Errores**: cada pregunta fallada es un error candidato. Sólo se registra en
  "Dónde me equivoco" si muestra una confusión concreta (qué eligió y qué era);
  un "no la sabía" a secas va a la entrada de `sesiones.md`, no a la nota.
- La entrada de `sesiones.md` lleva `· web` en el título
  (`### 2026-10-03 · web · cuestionario`) y el resto del cierre es igual.

## Si la sesión se corta

Si el estudiante se va antes del cierre, en la próxima sesión lo primero es preguntar
cómo le fue en lo que quedó abierto y hacer este cierre con lo que se sepa.

## Ver también

- [Repetición espaciada](repeticion-espaciada.md)
- [Recuperación activa](recuperacion-activa.md#registrar-los-errores)
