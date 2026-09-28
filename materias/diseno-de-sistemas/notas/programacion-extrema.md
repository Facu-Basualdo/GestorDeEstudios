# Programación Extrema (XP)
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 2 · Peso provisorio 1/3 (dudoso para IE3; el diseño en XP apareció en los cuestionarios
> 8, 10 y 11) · Fuentes: doc 3 *Apunte Agile* (pp. 17 y 26–34) y doc 15 *agilidad* (filminas
> y video, pp. 16–29), vía el export de Faro. Las preguntas *(cátedra)* salen de los cuestionarios semanales.

## Preguntas de recuperación

- ¿Qué es XP y para qué dominios nació? :: Una disciplina de desarrollo **liviana** basada en valores, principios y prácticas simples con mucha retroalimentación. Nació para dominios **muy dinámicos**, con requisitos que cambian rápido. [→ Qué es XP](#Qué%20es%20XP)
- ¿Para qué tamaño de equipo sirve XP y por qué? :: De **2 a 10 personas**: no tiene tareas de coordinación para grupos más grandes. [→ Qué es XP](#Qué%20es%20XP)
- ¿Cuáles son los valores de XP? :: **Simplicidad, comunicación, retroalimentación, coraje y respeto** (mnemotecnia SCCRR). El respeto también se llama seguridad psicológica. [→ Valores y principios](#Valores%20y%20principios)
- ¿Cuáles son las 4 actividades básicas de XP? :: **Programar, probar, escuchar y diseñar** (PPED). Programar es la principal y el diseño sólo mejora lo hecho. [→ Valores y principios](#Valores%20y%20principios)
- ¿Qué es el "Equipo total"? :: Todos se sientan juntos: **el Cliente** (representante del negocio que da requisitos y prioridades), programadores, testers, analistas, un **coach** y un administrador. Los roles no son exclusivos: mejor generalistas. [→ Equipo total y planificación](#Equipo%20total%20y%20planificación)
- ¿Cuáles son los dos niveles del juego de planificación? :: **Planificación de entregas** (el cliente prioriza historias y los programadores estiman; plan general impreciso, se revisa) y **planificación de iteración** (historias → tareas de 1 a 3 días, cada 1–3 semanas). [→ Equipo total y planificación](#Equipo%20total%20y%20planificación)
- ¿Con qué cuatro variables se cuantifica un proyecto en XP? :: **Alcance, recursos, tiempo y calidad**. [→ Equipo total y planificación](#Equipo%20total%20y%20planificación)
- ¿Qué es una historia de usuario? :: Una descripción que escribe el **cliente**, en su lenguaje y sin tecnicismos, de algo que el sistema debe hacer. Sirve para **estimar** y generar **pruebas de aceptación**. Dura de 1 a 3 semanas; si es más, se parte. [→ Historias, pruebas y spikes](#Historias,%20pruebas%20y%20spikes)
- ¿Qué es un spike? :: Una solución muy simple y experimental para **reducir un riesgo técnico** o mejorar la **estimación** de una historia. [→ Historias, pruebas y spikes](#Historias,%20pruebas%20y%20spikes)
- ¿Qué dice la práctica de Diseño simple? :: El diseño soporta **específicamente la funcionalidad requerida ahora**, no la futura. [→ Diseño en XP](#Diseño%20en%20XP)
- ¿Cuándo se diseña en XP? :: Siempre: hay pasos de diseño en **cada planificación de entrega y de iteración**. Es incremental e iterativo, con revisiones periódicas y refactorización. [→ Diseño en XP](#Diseño%20en%20XP)
- ¿Qué busca la refactorización y qué la hace segura? :: Eliminar **código duplicado**, **aumentar la cohesión** y **bajar el acoplamiento** sin cambiar el comportamiento. La hacen segura las **pruebas intensivas**. [→ Diseño en XP](#Diseño%20en%20XP)
- ¿Cómo evita XP los riesgos de la propiedad colectiva del código? :: Con las **pruebas del programador** y la **programación de a pares** (trabajar con el experto en código que no se conoce). [→ Las 12 prácticas](#Las%2012%20prácticas)
- ¿Qué es la metáfora en XP? :: Una visión común de cómo funciona el sistema ("funciona como una colmena…") o, al menos, un sistema de nombres compartidos. [→ Las 12 prácticas](#Las%2012%20prácticas)
- ¿Cuáles son las limitaciones de XP? :: No tiene etapa de diseño formal; difícil en sistemas grandes, con muchos usuarios o con hardware; exige generalistas talentosos; pierde documentación de diseño, revisiones estructuradas y plan de calidad. [→ Limitaciones de XP](#Limitaciones%20de%20XP)
- XP vs. Scrum :: XP se concentra en **el código** y no en la gestión; Scrum se mete en **la gestión** del proyecto y no en el código. [→ Limitaciones de XP](#Limitaciones%20de%20XP)

## Cuestionario

1. ¿Cuáles de las siguientes afirmaciones sobre el diseño en XP son correctas? *(cátedra)*
   - [x] El diseño es un proceso incremental e iterativo, sostenido con revisiones periódicas y refactorización
   - [ ] El diseño se congela apenas termina la primera iteración para evitar retrabajo
   - [x] Hay pasos de diseño tanto en la Planificación de Entregas como en la Planificación de cada Iteración
   - [ ] El diseño se realiza una única vez, al comienzo del desarrollo, y luego no se modifica
   > "Una única vez al comienzo" o "congelado" son ideas de las metodologías clásicas. [→ Diseño en XP](#Diseño%20en%20XP)
2. ¿Qué funcionalidad soporta el diseño que mantiene un equipo XP? *(cátedra)*
   - [ ] Todas las funcionalidades futuras previstas en el roadmap del producto
   - [ ] Una flexibilidad genérica por sobre la funcionalidad actual
   - [ ] La que se definió una sola vez al comienzo
   - [x] Específicamente la funcionalidad requerida actualmente para el sistema
   > Anticipar el roadmap suena a buen diseño, pero es el sobrediseño que XP evita. [→ Diseño en XP](#Diseño%20en%20XP)
3. ¿En qué se enfoca la refactorización en XP? *(cátedra)*
   - [x] Eliminar código duplicado, incrementar la cohesión y minimizar el acoplamiento
   - [ ] Reducir la cantidad de pruebas automatizadas para acelerar la entrega
   - [ ] Reescribir completamente la arquitectura del sistema en cada iteración
   - [ ] Documentar exhaustivamente cada cambio de diseño antes de aplicarlo
   > Es incremental: mejora lo que hay, no lo reescribe. [→ Diseño en XP](#Diseño%20en%20XP)
4. ¿Qué asegura que la refactorización no rompa la funcionalidad existente? *(cátedra)*
   - [x] Las pruebas intensivas que acompañan la evolución del código
   - [ ] La revisión gerencial de cada cambio antes de aplicarlo
   - [ ] La documentación exhaustiva de diseño elaborada antes de programar
   - [ ] La revisión manual del código por parte del cliente
   > XP reemplaza los controles por papeles o revisiones con pruebas automatizadas. [→ Diseño en XP](#Diseño%20en%20XP)
5. ¿Cuáles son correctas sobre el diseño en XP? *(cátedra)*
   - [ ] Se realiza una única vez al comienzo del desarrollo
   - [ ] Se documenta exhaustivamente antes de cada iteración
   - [x] Es un proceso incremental e iterativo llevado a cabo por revisiones periódicas y refactorización
   - [x] Hay pasos de diseño en cada Planificación de Entregas y en cada Planificación de Iteración
   > Ni se hace una sola vez ni se documenta exhaustivamente. [→ Diseño en XP](#Diseño%20en%20XP)
6. ¿En qué se enfoca la refactorización dentro de XP? *(cátedra)*
   - [ ] En incrementar el acoplamiento para facilitar la reutilización
   - [x] En eliminar código duplicado, incrementando la cohesión y minimizando el acoplamiento
   - [ ] En aumentar exclusivamente la cantidad de pruebas unitarias
   - [ ] En documentar el diseño original sin modificar el código
   > Subir el acoplamiento es lo opuesto. [→ Diseño en XP](#Diseño%20en%20XP)
7. ¿Cuáles son los valores de XP?
   - [x] Simplicidad, comunicación, retroalimentación, coraje y respeto
   - [ ] Planificación, documentación, control, calidad y proceso
   - [ ] Individuos, software funcionando, colaboración y respuesta al cambio
   - [ ] Alcance, recursos, tiempo y calidad
   > La tercera son los valores del Manifiesto; la cuarta, las variables de la planificación de entregas. [→ Valores y principios](#Valores%20y%20principios)
8. ¿Quién escribe las historias de usuario y quién es responsable de verificar las pruebas de aceptación?
   - [x] El cliente, en los dos casos
   - [ ] Los programadores, en los dos casos
   - [ ] El cliente escribe las historias y el coach verifica las pruebas
   - [ ] Un equipo de calidad independiente, en los dos casos
   > Las historias las escribe el cliente en su lenguaje, y él verifica las pruebas de aceptación (de caja negra). Una historia no está terminada hasta pasar sus pruebas. [→ Historias, pruebas y spikes](#Historias,%20pruebas%20y%20spikes)
9. Una historia de usuario se estima en 5 semanas. ¿Qué indica XP?
   - [x] Partirla en historias más chicas
   - [ ] Asignarle dos iteraciones completas
   - [ ] Hacer un spike de 5 semanas
   - [ ] Convertirla en un caso de uso
   > Las historias duran de 1 a 3 semanas; más que eso, se particionan. [→ Historias, pruebas y spikes](#Historias,%20pruebas%20y%20spikes)
10. El equipo no sabe si una biblioteca de terceros soporta lo que pide una historia y no puede estimarla. ¿Qué práctica aplica?
    - [x] Un spike
    - [ ] Una metáfora
    - [ ] Una refactorización
    - [ ] Una planificación de entregas
    > Un spike es una solución mínima para experimentar, reducir riesgo técnico y mejorar la estimación. [→ Historias, pruebas y spikes](#Historias,%20pruebas%20y%20spikes)
11. ¿Cuáles son limitaciones de XP señaladas por diversos autores?
    - [x] Difícil de aplicar en sistemas grandes y con cientos o miles de usuarios
    - [x] Pérdida de la documentación del diseño
    - [x] Exige equipos de generalistas talentosos, que escasean
    - [ ] Obliga a hacer un diseño completo antes de programar
    > XP no tiene etapa de diseño formal; la última opción es al revés. [→ Limitaciones de XP](#Limitaciones%20de%20XP)
12. ¿Cómo se diferencia XP de Scrum?
    - [x] XP se concentra en el código y las prácticas técnicas; Scrum, en la gestión del proyecto
    - [ ] XP se concentra en la gestión; Scrum, en el código
    - [ ] XP usa iteraciones de un mes y Scrum de 1 a 3 semanas
    - [ ] Son el mismo framework con distinto nombre
    > También las duraciones están al revés: XP de 1 a 3 semanas y Scrum un mes. [→ Limitaciones de XP](#Limitaciones%20de%20XP)

## Contenido

### Qué es XP

- Disciplina de desarrollo basada en los valores de **simplicidad, comunicación, retroalimentación y coraje**, con prácticas simples y suficiente retroalimentación para que el equipo ajuste su forma de trabajar (doc 3, p. 26). Creador: Kent Beck.
- Nació para **dominios muy dinámicos**, con requisitos que cambian rápido.
- **Equipos chicos, de 2 a 10 personas**: no tiene tareas de coordinación para grupos mayores.
- **Equipo extendido**: no sólo desarrolladores, también administradores, clientes y todos los *stakeholders*. El equipo se arma alrededor de **"el Cliente"**, que se sienta con los desarrolladores y trabaja con ellos todos los días.
- Es **liviana**: pocas reglas y un número modesto de prácticas. No es una secuencia de pasos sino un conjunto de **valores, principios y prácticas**. Equipos autoorganizados, con un coach que los guía.
- Pone mucho énfasis en la **prueba**: las unitarias y de integración se automatizan.
- Fue la comunidad más representada en la firma del Manifiesto Ágil.

### Valores y principios

**Valores** (doc 15, p. 17), mnemotecnia **SCCRR**:

| Valor | Qué significa |
|---|---|
| **Simplicidad** | La solución más simple posible, para problemas presentes, no imaginarios |
| **Comunicación** | Cara a cara, en un mismo lugar físico |
| **Retroalimentación** | El software funcionando dice si se avanza |
| **Coraje** | Ser transparente y avisar si algo va mal, incluso al cliente |
| **Respeto** | "Seguridad psicológica": nadie tiene miedo de opinar |

**Principios** (p. 19):

- **Centrales**: **cambio incremental** (entregas estimadas en 2 semanas, 4 como máximo) y **trabajo de calidad** (mantiene motivado al equipo).
- **Secundarios**: **pequeña inversión inicial** (un presupuesto acotado al principio mantiene el foco) · **adaptación local** (cambia en cada proyecto) · **viaje liviano** (sólo los artefactos indispensables: el único necesario es el código, que en muchos proyectos es la documentación).

**Actividades básicas** (p. 20), mnemotecnia **PPED**: **programar** (la principal) · **probar** (central: dice si el código funciona) · **escuchar** (retroalimentación, por ejemplo del cliente) · **diseñar** (poco foco, sólo para mejorar lo hecho).

En XP los diagramas están bien para comunicar con no desarrolladores, pero son descartables: **el código tiene que ser su propia documentación**.

### Equipo total y planificación

- **Equipo total**: todos se sientan juntos (doc 3, p. 27):
  - **el Cliente**: representante del negocio que da requisitos y prioridades y conduce el proyecto (mejor si es un usuario final real);
  - programadores;
  - **testers**, que ayudan al cliente a definir las pruebas de aceptación;
  - analistas, que ayudan a definir los requisitos;
  - un **coach**, que mantiene la dirección y facilita;
  - un administrador (recursos, comunicación externa).

  Los roles **no son exclusivos**: los mejores equipos no tienen especialistas sino contribuyentes generales.
- **Juego de planificación**: responde qué estará hecho para la fecha y qué hacer después. Importa más **conducir** el proyecto que predecir con exactitud.
  - **Planificación de entregas** (*release planning*): el cliente presenta las características y los programadores estiman su dificultad; con eso, el cliente arma el plan. Es **impreciso** y se revisa seguido. Unas **80 ± 20 historias** alcanzan para un plan razonable. Se basa en cuatro variables: **alcance, recursos, tiempo y calidad**.
  - **Planificación de iteración**: al comienzo de cada iteración (**1 a 3 semanas**; el apunte usa 2), el cliente elige las historias y las pruebas de aceptación fallidas a corregir. Se descomponen en **tareas de 1 a 3 días**, escritas en tarjetas: las de menos de un día se agrupan y las de más de tres se parten. La cantidad se estima con lo que se hizo en la iteración anterior.
- El progreso es visible cada dos semanas: **no existe el "síndrome del 95%"**. Una historia está completa o no lo está.

### Historias, pruebas y spikes

- **Historia de usuario**: la escribe **el cliente**, en su lenguaje y sin terminología técnica, como algo que el sistema debe hacer. Cumple el mismo propósito que un caso de uso, pero **no es lo mismo**. Tiene el detalle justo para **estimarla**; el detalle fino se conversa cara a cara al implementarla. Dura **de 1 a 3 semanas** (más, se parte) y no incluye tecnología, base de datos ni algoritmos (doc 3, p. 29).
- **Pruebas de aceptación**: salen de las historias; son de **caja negra**; el **cliente** es responsable de verificarlas. Una historia **no está terminada** hasta pasarlas. Se automatizan porque, bajo presión, las manuales se dejan de lado (p. 30).
- **Pruebas del programador** (*test-first*): ciclos muy cortos de escribir una prueba y después el código; casi el 100% de cobertura. Cada vez que alguien sube código, **todas las pruebas tienen que pasar**.
- **Spike**: solución muy sencilla para experimentar y **reducir el riesgo técnico** o **mejorar una estimación**.

### Diseño en XP

- **Diseño simple**: el diseño soporta **específicamente la funcionalidad requerida actualmente**. No se anticipan funcionalidades futuras (evita el sobrediseño) (doc 3, p. 28).
- El diseño **no se hace una sola vez al comienzo**: hay pasos de diseño en **cada planificación de entrega y de iteración**. Es **incremental e iterativo**, con **revisiones periódicas y refactorización**.
- **Mejora del diseño (refactorización)**: proceso de diseño continuo (el nombre viene del libro de Martin Fowler) que **elimina código duplicado, aumenta la cohesión y baja el acoplamiento**. Se empieza con un diseño simple y bueno y se lo mantiene así todo el proyecto.
- Lo que hace segura la refactorización son las **pruebas intensivas**: el diseño evoluciona sin romper lo hecho.
- La refactorización necesita **tecnología apropiada** (orientada a objetos; es difícil o imposible en mainframes con sistemas de datos tradicionales).

### Las 12 prácticas

| Práctica | En qué consiste |
|---|---|
| Juego de planificación | Planificación de entregas y de iteración, conducida por el cliente |
| Pruebas del cliente | Pruebas de aceptación automatizadas por cada característica |
| Pequeñas entregas | Software probado y ejecutable al final de cada iteración, visible para el cliente |
| **Diseño simple** | Sólo lo que hace falta ahora |
| **Programación de a pares** | Todo el código de producción lo escriben dos personas en una máquina: revisión continua, mejor diseño y código |
| **Desarrollo guiado por pruebas** | Primero la prueba, después el código; todas pasan en cada integración |
| **Mejora del diseño** | Refactorización continua |
| Integración continua | El sistema está integrado todo el tiempo |
| Propiedad colectiva del código | Cualquier par mejora cualquier código en cualquier momento |
| Codificación estándar | Todo el código parece escrito por la misma persona |
| Metáfora | Una visión común del sistema ("una colmena de abejas que salen por polen…") o nombres compartidos |
| Ritmo sostenido | Un ritmo continuo, sin horas extra crónicas |

- En negrita, las que el material destaca como más importantes para la materia *(el tutor marca estas cuatro según el énfasis de las filminas; confirmar con la cátedra)*.
- **Propiedad colectiva**: todo el código recibe la atención de mucha gente (más calidad), pero es riesgoso trabajar a ciegas en código ajeno. Se resuelve con **pruebas del programador** y **programación de a pares** con el experto.

### Limitaciones de XP

En las filminas (doc 15, p. 29): **no tiene etapa de diseño formal** (problemático en proyectos grandes). A diferencia de **Scrum**, que se mete en la **gestión** y no en el código, **XP se concentra en el código** y no en la gestión.

Críticas de distintos autores (doc 3, pp. 31–33):

- La refactorización no reemplaza el análisis de requerimientos en **sistemas grandes, complejos o regulados**, que siguen necesitando especificaciones y documentos de diseño.
- No queda claro cómo usarlo con **cientos o miles de usuarios**: supone desarrolladores y usuarios alrededor de una mesa.
- Es **sólo para software**: los sistemas con hardware necesitan especialistas.
- Exige **generalistas talentosos**, que escasean y no quieren mantener sistemas heredados.
- Desarrollo **centrado en el código** más que en el diseño: en sistemas grandes puede ser un desastre.
- **Pérdida de la documentación del diseño**: limita la reutilización. El código legible como documentación es un objetivo nunca alcanzado, e impráctico en sistemas grandes.
- **Pérdida de las revisiones estructuradas**: revisando en pantalla se encuentra un 10–25% de los errores; con pares, no más del 40%.
- **Calidad sólo por prueba**: sin diseño ordenado ni revisiones, hacen falta pruebas intensivas y costosas.
- **Sin plan de calidad** ni guías para la captura de datos.
- Descripción breve: la gente adopta lo que le gusta y descarta el resto. Tampoco da **soporte para la transición**.

## Dónde me equivoco

_Sin errores registrados todavía._ Trampas de los cuestionarios: pensar que en XP se diseña una sola vez o que se diseña para el futuro; creer que a la refactorización la protege la documentación o una revisión en vez de las pruebas.

## Ver también

- [Manifiesto ágil](manifiesto-agil.md): de dónde sale XP y cómo se compara con los otros frameworks.
- [Modelado Ágil](modelado-agil.md): cómo se modela en un proyecto XP.
- [Principios SOLID](principios-solid.md): el diseño que la refactorización persigue (cohesión alta, acoplamiento bajo).
