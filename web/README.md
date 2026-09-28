# Flip-Flop — web de estudio

Flashcards, cuestionario de opción múltiple y lectura de la teoría, generados desde las
notas del vault. Next.js 16 + HeroUI 3 + Tailwind 4. Anda en celular y en compu, con
tema claro y oscuro.

## Usarla

```bash
cd web
npm install        # sólo la primera vez
npm run dev        # http://localhost:3000, se actualiza al tocar componentes
```

`npm run dev` y `npm run build` regeneran antes los datos desde las notas
(`node ../scripts/generar-web.mjs` → `web/datos/datos.json`). Si cambiás una nota con el
servidor andando, corré `npm run datos` y recargá.

Para tenerla sin servidor de desarrollo: `npm run build` deja un sitio estático en `out/`
(`npm start` lo sirve en http://localhost:3000). Esa carpeta se puede subir a cualquier
hosting estático para abrirla desde el celular.

## De dónde sale cada cosa

| En la web | En la nota |
|---|---|
| Flashcards | `## Preguntas de recuperación`: `- pregunta :: respuesta [→ Sección](#Sección)` |
| Cuestionario | `## Cuestionario`: lista numerada con opciones `- [ ]` / `- [x]` y explicación en `>`. Con más de una `- [x]` es de varias correctas: se tildan todas y se comprueba |
| Teoría | el resto de la nota; los enlaces a `docs/` aparecen como "Fuentes citadas" |
| Orden, unidad y peso | `INDICE.md` y la columna Nota de `temas.md` |

El formato completo está en `metodo/recuperacion-activa.md`. El generador avisa si una
pregunta no tiene la opción correcta marcada o si un `[→ …]` apunta a una sección que no existe.

La última nota de cada tarjeta ("No la sabía", "Dudé", "La sabía") y los filtros se
guardan en el navegador (localStorage): no llegan al vault ni al tutor. Lo que cuenta
para el seguimiento sigue siendo `/estudiar`, `/repaso` y `/cerrar-sesion`.
