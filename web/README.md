# Gestor de estudios — web de estudio

Flashcards, cuestionario de opción múltiple y lectura de la teoría, generados desde las
notas del vault. Next.js 16 + HeroUI 3 + Tailwind 4. Anda en celular y en compu, con
tema oscuro.

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
| Selector de parcial | columna opcional **Parcial** de `temas.md` (1, 2…): con dos o más, la web muestra un parcial por vez, cada uno con su avance, más la pestaña **Todo** con la materia entera. Un tema que entra en varios parciales lleva `1, 2`. La cuenta regresiva va en el parcial cuyos temas tienen Eval "sí" |

El formato completo está en `metodo/recuperacion-activa.md`. El generador avisa si una
pregunta no tiene la opción correcta marcada o si un `[→ …]` apunta a una sección que no existe.

## Escuchar

Con el botón **Escuchar** (auriculares) se estudia sin mirar la pantalla:

- **Flashcards**: lee el tema y la pregunta, deja unos segundos para responder en voz alta
  (4, 8 o 15), lee la respuesta y pasa sola a la siguiente. Calificar mientras tanto también
  avanza. Respetan el filtro, el mezclado y "Sólo las que fallé".
- **Teoría**: lee la nota (o la fuente) en tramos de varios párrafos, con anterior y
  siguiente. No lee los bloques de código.

La voz es la del navegador (`lib/voz.ts`, Web Speech API): en Edge están las "Natural",
que suenan mucho mejor; se elige en el selector de voz. Velocidad, voz y tiempo para pensar se
guardan en el navegador.

Todo se lee con una sola voz en español: los términos en inglés se reescriben como suenan
antes de leerlos ("Factory Method" → "fáctori métod", "stakeholders" → "stéikjolders"), y las
clases en CamelCase se separan ("ConcreteObserver" → "cóncrit obsérver"). El diccionario está en
`lib/ingles.ts` (`PRONUNCIACION`): si un término suena mal, se agrega o se corrige ahí. La
teoría se lee en tramos de varios párrafos, porque cada enunciado nuevo arranca con una pausa. Mientras suena, la pantalla no se apaga (Wake Lock); con la pantalla
bloqueada o la pestaña en segundo plano el celular puede cortar la voz.

La última nota de cada tarjeta ("No la sabía", "Dudé", "La sabía") y los filtros se
guardan en el navegador (localStorage): no llegan al vault ni al tutor. Lo que cuenta
para el seguimiento sigue siendo `/estudiar`, `/repaso` y `/cerrar-sesion`.
