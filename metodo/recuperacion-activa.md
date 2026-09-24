# Recuperación activa
[← Hub](../CLAUDE.md)

> Regla 3 del tutor. Es el corazón de `/estudiar` y `/repaso`.

## La regla

**Primero la pregunta, después la explicación.** Nunca se da el resumen de un tema
antes de que el estudiante intente responder. Intentar recordar (aunque salga mal)
fija mucho más que releer; la explicación que llega después de un error se recuerda
mejor porque responde a un hueco concreto.

**Una pregunta por vez.** Se espera la respuesta antes de hacer la siguiente.

## De dónde salen las preguntas

1. La sección **"Preguntas de recuperación"** de la nota del tema.
2. **Variarlas**: cambiar datos del ejercicio, preguntar al revés ("¿qué forma normal
   viola esta tabla?" en vez de "definí 3FN"), pedir un ejemplo propio, pedir la
   diferencia entre dos conceptos que se confunden.
3. La sección **"Dónde me equivoco"**: al menos una pregunta por sesión apunta
   directo a un error registrado, para ver si sigue.
4. Si el tema no tiene nota, las preguntas salen de consultar NotebookLM (ver
   [notebooklm.md](notebooklm.md)), y se aclara de dónde vienen.

Mezclar tipos: definición, procedimiento, ejercicio corto, comparación, "¿por qué?".
El tipo que más pesa es el que aparece en los modelos de examen (`examenes/analisis.md`).

## Cómo se corrige

**Corrección concreta, en tres partes:**

- ✔ **Bien**: qué estuvo correcto (específico, no "¡muy bien!").
- ➕ **Faltó**: qué hacía falta para que sea respuesta de examen.
- ✘ **Mal**: qué está equivocado y cuál es lo correcto, con la cita de la fuente.

Después, la explicación mínima necesaria, basada en la nota o en NotebookLM. Si el
tutor agrega algo propio, va marcado *(explicación del tutor, no está en las fuentes)*.

## Escalera de pistas

Si el estudiante no sabe por dónde arrancar, no se da la respuesta de una:

1. Reformular la pregunta más concreta.
2. Dar una pista (el primer paso, la palabra clave).
3. Recién ahí, la respuesta completa, y **volver a preguntar lo mismo más tarde en la
   sesión** con otros datos.

Cada pista usada baja el dominio de esa pregunta (ver abajo).

## Cómo se asigna el dominio

Al final del tema, mirando todas sus preguntas de la sesión:

| Dominio | Criterio |
|---|---|
| 0 | No respondió, o todo mal |
| 1 | Recuerda algo, con errores graves |
| 2 | Bien con ayuda (pistas) o con errores menores |
| 3 | Bien, solo y rápido |

- Se asigna por lo **peor sostenido**, no por lo mejor: si acertó la definición pero
  falló el ejercicio fijo de parcial, no es 3.
- Se le dice al estudiante el dominio asignado y por qué, en una línea.

## Registrar los errores

Cada error que no sea un despiste aislado se anota **en la sesión** para el cierre:
qué respondió, qué era lo correcto, y la causa probable (confunde A con B, olvida un
paso, error de cálculo). En [/cerrar-sesion](cierre-de-sesion.md) pasa a la nota y al índice.

## Ver también

- [Repetición espaciada](repeticion-espaciada.md) — qué se hace con el dominio.
- [Priorización](priorizacion.md) — qué temas entran a la sesión.
