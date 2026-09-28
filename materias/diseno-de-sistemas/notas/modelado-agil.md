# Modelado Ágil (AM)
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 2 · Peso provisorio 1/3 (dudoso para IE3; "prueba antes del diseño" apareció en los
> cuestionarios 8, 10 y 11) · Fuente: doc 3 *Apunte Agile* (pp. 7–25), vía el export de Faro.
> Las preguntas *(cátedra)* salen de los cuestionarios semanales.

## Preguntas de recuperación

- ¿Qué es el Modelado Ágil (AM) y quién lo propuso? :: Una colección de **prácticas de modelado y documentación**, guiadas por valores y principios, de **Scott Ambler**. No es un proceso completo: se usa **sobre un proceso base** (XP, RUP, DSDM, Scrum). [→ Qué es AM](#Qué%20es%20AM)
- ¿AM significa modelar menos? :: No: significa modelar de forma **más eficiente**. Su alcance es sólo el modelado y la documentación; no cubre programación, pruebas ni gestión. [→ Qué es AM](#Qué%20es%20AM)
- ¿Cuáles son los valores de AM? :: **Comunicación, simplicidad, retroalimentación, coraje y humildad** (los de XP, con humildad en lugar de respeto). [→ Valores](#Valores)
- ¿Qué dice el principio "Asumir simplicidad"? :: La solución más simple es la mejor: no modelar hoy lo que no hace falta hoy, y refactorizar cuando los requisitos cambien. [→ Principios](#Principios)
- ¿Qué dice "Modelar con un propósito"? :: Antes de modelar, identificar **para qué y para quién** es el modelo; con eso se decide el nivel de detalle. Si no hay propósito, no se modela. [→ Principios](#Principios)
- ¿Qué dice "Viajar ligero de equipaje"? :: Cada artefacto que se conserva hay que mantenerlo: cuantos menos y más simples, más ágil. Con demasiados, se pasa el tiempo manteniendo documentación en vez de programar. [→ Principios](#Principios)
- ¿Cuál es el objetivo primario y cuál el secundario según AM? :: Primario: **el software** que cubre las necesidades del usuario. Secundario: **posibilitar el siguiente esfuerzo** (que se pueda extender, operar y mantener). [→ Principios](#Principios)
- ¿Qué implica "Prueba antes del diseño" según AM? :: Pensar primero los **casos de prueba** y después el código. Obliga a razonar el diseño antes de codificar y **elimina la necesidad de modelado detallado del diseño**. Es parte integral de XP. [→ Prueba antes del diseño](#Prueba%20antes%20del%20diseño)
- ¿Cuándo actualizar un modelo? :: Sólo cuando tenerlo desactualizado **perjudica más** que el costo de actualizarlo (un mapa viejo igual sirve). [→ Prácticas](#Prácticas)
- ¿Qué hacer con los modelos temporales? :: **Descartarlos** cuando ya cumplieron su propósito: pierden sincronía con el código y está bien. [→ Prácticas](#Prácticas)
- ¿Qué es un modelo contractual? :: Uno acordado con un **grupo externo** que controla información que el sistema necesita (API, formato de archivo). Es caro: hay que tener los mínimos. [→ Prácticas](#Prácticas)
- ¿Qué herramientas recomienda AM? :: Las **más simples**: pizarra y papel. El valor está en dibujar para pensar; una herramienta sólo si aporta (presentar a interesados, generar código). [→ Prácticas](#Prácticas)
- ¿Qué tres errores comunes hay sobre XP y el modelado? :: Creer que en XP **no se modela**, que **no se documenta**, o que si se modela sólo se usa **UML**. [→ AM con XP y con RUP](#AM%20con%20XP%20y%20con%20RUP)
- ¿Qué necesita una organización RUP para adoptar AM? :: Una cultura que acepte los valores ágiles (RUP suele elegirse por quienes priorizan procesos y herramientas). Entre otras cosas: olvidar "conducido por casos de uso", reconocer artefactos no UML y que RUP no exige toda la documentación. [→ AM con XP y con RUP](#AM%20con%20XP%20y%20con%20RUP)

## Cuestionario

1. ¿Qué implica la práctica de "prueba antes del diseño" en XP? *(cátedra)*
   - [ ] Escribir toda la documentación de diseño detallada antes de comenzar a programar
   - [ ] Ejecutar pruebas de aceptación únicamente después de finalizada toda la iteración
   - [x] Escribir los casos de prueba antes de escribir el código, forzando a pensar el diseño antes de codificar
   - [ ] Delegar la definición de casos de prueba al equipo de calidad al final del proyecto
   > También es "pensar antes", pero reemplaza al modelado exhaustivo en lugar de producirlo. [→ Prueba antes del diseño](#Prueba%20antes%20del%20diseño)
2. Según AM, ¿qué efecto tiene "prueba antes del diseño" sobre la necesidad de modelado detallado? *(cátedra)*
   - [ ] No tiene relación con el modelado, son actividades independientes
   - [ ] La incrementa, porque cada caso de prueba requiere un modelo UML asociado
   - [x] La elimina, porque pensar los casos de prueba ya obliga a razonar el diseño
   - [ ] La reemplaza por una revisión formal de arquitectura antes de cada iteración
   > La práctica reduce el modelado, no lo multiplica. [→ Prueba antes del diseño](#Prueba%20antes%20del%20diseño)
3. ¿Cuáles de las siguientes afirmaciones sobre "prueba antes del diseño" son correctas? *(cátedra)*
   - [ ] Sustituye por completo la necesidad de escribir código de producción
   - [x] Es una parte integral de XP
   - [ ] Fue creada específicamente para reemplazar la refactorización
   - [x] Consiste en considerar los casos de prueba antes de escribir el código
   > Las pruebas acompañan al código; no lo reemplazan. [→ Prueba antes del diseño](#Prueba%20antes%20del%20diseño)
4. ¿Qué implica "prueba antes del diseño" según Agile Modeling? *(cátedra)*
   - [ ] Reemplaza completamente la necesidad de revisar el diseño en iteraciones futuras
   - [x] Fuerza a pensar el diseño antes de escribir código, removiendo la necesidad de modelado detallado del diseño
   - [ ] Elimina la necesidad de escribir pruebas automatizadas
   - [ ] Requiere escribir toda la documentación de diseño antes de definir los casos de prueba
   > Es justo al revés del distractor: se evita el modelado formal previo. [→ Prueba antes del diseño](#Prueba%20antes%20del%20diseño)
5. ¿Cuáles son correctas sobre "prueba antes del diseño"? *(cátedra)*
   - [x] Es una parte integral de XP
   - [x] Según Agile Modeling, remueve la necesidad de modelado detallado del diseño
   - [ ] Requiere completar toda la documentación UML antes de iniciar el desarrollo
   - [ ] Sólo aplica a proyectos que usan arquitectura en capas
   > No exige UML ni está atada a una arquitectura. [→ Prueba antes del diseño](#Prueba%20antes%20del%20diseño)
6. ¿Qué implica "prueba antes del diseño"? *(cátedra)*
   - [ ] Documentar el diseño detallado antes de comenzar a codificar
   - [x] Considerar primero los casos de prueba antes de escribir el código
   - [ ] Escribir el código completo y luego generar pruebas automáticas
   - [ ] Diseñar la arquitectura completa antes de definir los casos de uso
   > Escribir primero el código invierte el orden de la práctica. [→ Prueba antes del diseño](#Prueba%20antes%20del%20diseño)
7. ¿Qué es Agile Modeling?
   - [x] Un conjunto de prácticas de modelado y documentación que se aplica sobre un proceso base como XP o RUP
   - [ ] Un proceso completo de desarrollo que reemplaza a XP
   - [ ] Una notación de modelado alternativa a UML
   - [ ] Una técnica para modelar menos y documentar nada
   > No es un proceso ni una notación; y no es modelar menos sino modelar mejor. [→ Qué es AM](#Qué%20es%20AM)
8. ¿Cuál es el valor que AM agrega y que no está entre los cuatro valores originales de XP?
   - [x] Humildad
   - [ ] Coraje
   - [ ] Simplicidad
   - [ ] Retroalimentación
   > Los valores de AM son comunicación, simplicidad, retroalimentación, coraje y **humildad**. [→ Valores](#Valores)
9. El equipo mantiene siete modelos detallados y cada cambio de requisito obliga a actualizarlos todos. ¿Qué principio de AM se está ignorando?
   - [x] Viajar ligero de equipaje
   - [ ] Modelar con un propósito
   - [ ] Múltiples modelos
   - [ ] Contenido más importante que la representación
   > Cada artefacto conservado exige mantenimiento: con tres modelos el mismo cambio cuesta menos. [→ Principios](#Principios)
10. Un diagrama de la arquitectura quedó desactualizado respecto del código, pero todavía orienta al equipo. Según AM, ¿qué conviene?
    - [x] Actualizarlo sólo si tenerlo desactualizado perjudica más que el costo de actualizarlo
    - [ ] Actualizarlo inmediatamente después de cada cambio de código
    - [ ] Borrarlo siempre, porque ya no coincide con el código
    - [ ] Congelar el código hasta que el diagrama se actualice
    > "Actualizar sólo cuando sea perjudicial": un mapa viejo igual puede servir. [→ Prácticas](#Prácticas)
11. ¿Qué práctica de XP corresponde a "Participación activa del stakeholder" de AM?
    - [x] Cliente en el lugar
    - [ ] Programación de a pares
    - [ ] Integración continua
    - [ ] Codificación estándar
    > AM **amplía** el cliente en el lugar de XP: suma usuarios directos, gerentes, operaciones y soporte. [→ AM con XP y con RUP](#AM%20con%20XP%20y%20con%20RUP)

## Contenido

### Qué es AM

- **Agile Modeling** (Scott Ambler): una colección de **prácticas guiadas por valores y principios** para modelar y documentar sistemas de software de forma **efectiva y liviana** (doc 3, pp. 7–8).
- **No es un proceso prescriptivo**: da recomendaciones. **No prescribe un método completo** como XP.
- Se usa **junto con un proceso base**: métodos ágiles (XP, DSDM, Scrum) o no específicamente ágiles (**RUP**).
- **No implica modelar menos**, sino modelar de manera **más eficiente**.
- **Alcance**: sólo modelado y documentación; no programación, pruebas ni gestión de proyectos.
- **Objetivos**: definir cómo poner en práctica los valores, principios y prácticas del modelado efectivo, y explorar cómo aplicar técnicas de modelado en proyectos ágiles.

### Valores

Los de XP, con **humildad** en lugar de respeto (doc 3, p. 10):

| Valor | En el modelado |
|---|---|
| **Comunicación** | Los modelos comunican al equipo con los usuarios y a los desarrolladores entre sí |
| **Simplicidad** | Los modelos simplifican el software y el proceso: es más fácil explorar una idea con un diagrama que con cientos de líneas de código |
| **Retroalimentación** | Mostrar ideas en diagramas da retroalimentación rápida |
| **Coraje** | Tomar decisiones importantes y poder cambiar el rumbo, descartando o refactorizando |
| **Humildad** | Nadie sabe todo: todos los participantes tienen valor y merecen respeto |

### Principios

**Centrales** (doc 3, pp. 10–12):

- **El software es el objetivo primario**: no la documentación, ni artefactos de gestión, ni siquiera los modelos. Todo lo que no contribuya se cuestiona.
- **Posibilitar el siguiente esfuerzo es el objetivo secundario**: un sistema que funciona igual puede ser un fracaso si no se puede extender, operar o mantener. Hace falta la documentación **suficiente** para la próxima etapa.
- **Viajar ligero de equipaje**: cada artefacto conservado exige mantenimiento. Con siete modelos, cada cambio impacta en siete; con tres, en tres. Quien cruza un desierto quiere un mapa y una cantimplora, no cientos de litros de agua.
- **Asumir simplicidad**: la solución más simple es la mejor. No modelar características que no hacen falta hoy; refactorizar cuando cambien los requisitos.
- **Abrazar el cambio**: cambian los requisitos, su comprensión, los participantes y sus objetivos.
- **Cambio incremental**: el modelo no tiene que salir bien de entrada ni tener todos los detalles; se empieza de alto nivel y evoluciona (o se descarta).
- **Modelar con un propósito**: saber **por qué y para quién** se modela, y con eso decidir el detalle. Si no hay propósito claro, no se modela. Vale también para cambiar un modelo.
- **Múltiples modelos**: cada modelo describe un aspecto; se usa el subconjunto que el sistema necesita.
- **Trabajo de calidad** y **rápida retroalimentación** (pizarras, tarjetas CRC, notas adhesivas).
- **Maximizar la inversión de los interesados**: sus recursos no se malgastan, y ellos tienen la última palabra.

**Suplementarios** (pp. 12–13): el **contenido es más importante que la representación** (un modelo no tiene por qué ser un documento formal) · todos pueden aprender de todos · conocer los modelos y las herramientas · **adaptaciones locales** · **comunicación abierta y honesta** · **trabajar con los instintos** de las personas (si algo "no huele bien", probablemente no lo esté).

### Prácticas

**Centrales** (doc 3, pp. 14–16):

| Categoría | Prácticas |
|---|---|
| Desarrollo iterativo e incremental | Aplicar los artefactos correctos · crear varios modelos en paralelo · iterar hacia otro artefacto (si te trabás en uno, pasá a otro) · modelar en pequeños incrementos |
| Trabajo en equipo | **Participación activa de los interesados** · modelar con otros · desplegar los modelos públicamente ("muro de los milagros") · propiedad colectiva (nadie es cuello de botella) |
| Simplicidad | Crear contenido simple · representar los modelos simplemente · usar las herramientas más simples |
| Validación | **Considerar la prueba** (si no se puede probar, no se construye) · **probar con código** |

**Suplementarias** (p. 16):

- **Aplicar estándares de modelado** (UML sirve, pero no alcanza: no cubre todos los artefactos ni los estilos).
- **Aplicar patrones cuidadosamente**: con simplicidad, sin sobremodelar (Fowler, *Is Design Dead?*).
- **Descartar los modelos temporales**: pierden sincronía con el código y está bien.
- **Formalizar los modelos contractuales**: con grupos externos que controlan información necesaria (API, formato de archivo). Son caros: hay que tener los mínimos.
- **Modelar para comunicar** (a gente externa: modelos prolijos) y **modelar para comprender** (el uso más importante: entender el problema y comparar alternativas).
- **Reutilizar recursos existentes**: patrones, modelos de negocio, modelos de datos.
- **Actualizar sólo cuando sea perjudicial**: cuando tenerlo desactualizado cueste más que actualizarlo.
- **Usar las herramientas más simples**: pizarra y papel; una foto si hay que guardarlo. Herramientas de dibujo sólo para presentar a interesados importantes o si generan código.

### Prueba antes del diseño

- Práctica en la que se consideran **primero los casos de prueba** y después se escribe el código (doc 3, p. 17).
- Desde AM, **fuerza a pensar el diseño antes de codificar** y **remueve la necesidad de modelado detallado del diseño**.
- Es **parte integral de XP** (*test-first*).
- No reemplaza al código de producción ni a las pruebas automatizadas: las pruebas lo acompañan.

### AM con XP y con RUP

**Con XP** (doc 3, pp. 21–22): XP tiene más alcance que AM y lo incluye el modelado, pero no dice cómo hacerlo: ahí entra AM. Como los dos son ágiles, se integran fácil. Tres errores comunes sobre XP: que **no se modela**, que **no se documenta**, o que si se modela **sólo hay UML**.

| Práctica de AM | Práctica de XP |
|---|---|
| Participación activa de los interesados | Cliente en el lugar |
| Aplicar estándares de modelado | Codificación estándar |
| Aplicar patrones cuidadosamente | Diseño simple (YAGNI) |
| Crear contenido simple | Diseño simple |
| Considerar la prueba | Probar antes de codificar |
| Descartar modelos temporales · actualizar sólo cuando sea perjudicial | Viajar liviano |
| Modelar en pequeños incrementos | Enfoque incremental, no gran diseño inicial |
| Modelar con otros | Programación de a pares |
| Modelar para comprender · usar las herramientas más simples | Tarjetas CRC, asumir simplicidad |
| Propiedad colectiva | Propiedad colectiva (original de XP) |

**Con RUP** (pp. 22–25): se puede, pero requiere una **cultura abierta a los valores ágiles**, porque RUP suele adoptarse en organizaciones que priorizan **procesos y herramientas** (lo contrario al Manifiesto). Un equipo RUP que adopte AM debe:

1. olvidar el "conducido por casos de uso": son una técnica para requisitos de comportamiento, no los únicos requisitos;
2. reconocer que hay **más artefactos que los de UML** (modelos de datos, de interfaz);
3. reconocer que RUP **no es inherentemente centrado en la documentación**: sólo los documentos necesarios;
4. construir una visión común entre desarrolladores (prefieren lo ágil) y gerentes (prefieren lo prescriptivo);
5. promover el desarrollo **iterativo e incremental**;
6. promover la **simplicidad**;
7. formar el equipo con **generalistas** competentes;
8. vivir la **comunicación abierta y honesta** (modelos públicos).

## Dónde me equivoco

_Sin errores registrados todavía._ Trampa de los cuestionarios: creer que "prueba antes del diseño" exige documentar o modelar en detalle primero; es al revés.

## Ver también

- [Programación Extrema](programacion-extrema.md): el proceso base más común para AM.
- [Manifiesto ágil](manifiesto-agil.md): el ciclo de vida ágil (secuencial, iterativo, incremental).
