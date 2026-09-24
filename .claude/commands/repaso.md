---
description: Preguntas de repaso de los temas con el próximo repaso vencido o que vence hoy
argument-hint: "[materia]"
---

Repaso: $ARGUMENTS

1. **Vencidos**: en `materias/<materia>/temas.md` (o en todas las materias si no se
   indicó), tomá los temas con `Próximo repaso` ≤ hoy.
   Si no hay ninguno, decilo, mostrá el próximo que vence y terminá.
2. **Orden**: por puntaje (`metodo/priorizacion.md`). Si son muchos para el tiempo,
   preguntá cuántos minutos tiene y cortá por puntaje (~5–10 min por tema).
3. **Preguntas**: de cada nota, leé sólo "Preguntas de recuperación" y "Dónde me
   equivoco". Hacé 2–3 preguntas por tema, **variándolas** (otros datos, al revés,
   pedir un ejemplo), **una por vez**, con corrección concreta
   (`metodo/recuperacion-activa.md`). Al menos una apunta a un error registrado.
4. **Dominio**: asignalo por tema con una línea de porqué. Puede bajar.
5. **Cierre**: ejecutá el flujo de `/cerrar-sesion` (`.claude/commands/cerrar-sesion.md`).
