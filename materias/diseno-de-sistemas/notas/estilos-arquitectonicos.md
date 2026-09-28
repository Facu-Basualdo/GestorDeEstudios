# Estilos arquitectónicos
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 4.1 · Peso provisorio 2/3 (**entra en el 2º parcial**: "estilos de arquitecturas: modelo
> en capas, modelo de repositorio, canalizaciones y filtros, microkernel") · Fuentes: doc 12
> *arquitectura* (filminas de la cátedra, pp. 16–41, siguiendo a Sommerville cap. 6) y doc 59
> Bass et al. (pp. 27 y 167), vía el export de Faro.

## Preguntas de recuperación

- ¿Qué es un patrón (o estilo) arquitectónico? :: Una **buena práctica probada** en distintos sistemas y entornos, presentada como **problema y solución de alto nivel**, que dice cuándo conviene usarla y cuándo no. En la materia, estilo y patrón son sinónimos. [→ Patrón o estilo](#Patrón%20o%20estilo)
- ¿Cómo funciona el estilo en capas? :: El sistema se separa en **capas de funcionalidad relacionada**; cada capa da servicios a la de **arriba** y sólo usa la de **abajo** (nunca hacia arriba). Típico: presentación, lógica de negocio, datos. [→ Capas](#Capas)
- ¿Cuándo usar capas y qué problemas tiene? :: Para construir sobre sistemas existentes, repartir el desarrollo por equipos y cuando la **seguridad** es crucial. Problemas: separación estricta difícil y **latencia** al atravesar capas. [→ Capas](#Capas)
- ¿Qué es el *layer bridging*? :: Que una capa use una capa inferior **no adyacente**. Si es frecuente, se pierden la portabilidad y la modificabilidad. [→ Capas](#Capas)
- Tier vs. layer :: **Tier** = capa **física** (máquina); **layer** = capa **lógica**. [→ Capas](#Capas)
- ¿Cómo funciona el estilo de repositorio? :: Un componente central **guarda los datos** de todos y los componentes **se comunican sólo a través de él**, sin conocerse. [→ Repositorio y pizarrón](#Repositorio%20y%20pizarrón)
- Repositorio vs. pizarrón :: Si el componente central es **pasivo**, es un repositorio; si tiene un **rol activo** (avisa, dispara), es un pizarrón. [→ Repositorio y pizarrón](#Repositorio%20y%20pizarrón)
- Ventajas y desventajas del repositorio :: Ventajas: componentes independientes, datos consistentes, backup fácil. Desventajas: **punto único de falla**, **cuello de botella**, difícil de distribuir. [→ Repositorio y pizarrón](#Repositorio%20y%20pizarrón)
- ¿Cómo funcionan las tuberías y filtros? :: Cada **filtro** hace una transformación y la **salida de uno es la entrada del siguiente**; no comparten estado ni se conocen. Ej.: `cat log | grep error | wc`. [→ Tuberías y filtros](#Tuberías%20y%20filtros)
- ¿Para qué sirven las tuberías y filtros y cuál es su desventaja? :: Para **procesar datos** por lotes o transacciones (pagos), no para sistemas interactivos. Desventaja: hay que **acordar el formato** de datos, y convertirlo en cada paso agrega sobrecarga. [→ Tuberías y filtros](#Tuberías%20y%20filtros)
- ¿Cómo funciona el microkernel (plug-in)? :: Un **núcleo** con la funcionalidad básica y **plug-ins** que agregan funcionalidad a través de **interfaces fijas**. Ej.: Chrome y sus extensiones, Visual Studio. [→ Microkernel o plug-in](#Microkernel%20o%20plug-in)
- Ventajas y riesgo del microkernel :: Se extiende de forma controlada, los plug-ins los pueden hacer otros equipos y evolucionan sin acoplarse al núcleo. Riesgo: plug-ins de terceros traen **vulnerabilidades**. [→ Microkernel o plug-in](#Microkernel%20o%20plug-in)
- ¿Cuándo usar MVC? :: Cuando hay **varias formas de ver e interactuar con los datos**, o cuando no se conocen los requisitos futuros de presentación. Desventaja: complejidad de más en casos simples. [→ Otros estilos](#Otros%20estilos)

## Cuestionario

1. En una arquitectura en capas bien aplicada, ¿qué dependencias están permitidas?
   - [x] Cada capa usa los servicios de la capa inmediatamente inferior
   - [ ] Cada capa usa los servicios de la capa inmediatamente superior
   - [ ] Cualquier capa usa cualquier otra
   - [ ] Las capas no se comunican entre sí
   > Los usos hacia arriba no se permiten. Usar una capa inferior no adyacente es *layer bridging*, que se tolera pero degrada la portabilidad. [→ Capas](#Capas)
2. ¿Cuándo recomienda Sommerville el estilo en capas?
   - [x] Cuando la seguridad es un atributo crucial
   - [x] Cuando el desarrollo se reparte entre equipos, uno por capa
   - [x] Cuando se agregan características sobre sistemas existentes
   - [ ] Cuando el rendimiento es el atributo más crítico
   > Las capas agregan latencia: el rendimiento es justamente uno de sus problemas. [→ Capas](#Capas)
3. ¿Cuál es una desventaja del estilo en capas?
   - [x] La latencia de atravesar varias capas puede afectar el rendimiento
   - [ ] No permite reemplazar una capa
   - [ ] Obliga a que todas las capas estén en la misma máquina
   - [ ] No sirve para sistemas multiplataforma
   > Al contrario, es ventajoso para multiplataforma: sólo se reemplazan las capas atadas al sistema operativo. [→ Capas](#Capas)
4. En el estilo de repositorio, ¿cómo se comunican los componentes?
   - [x] Sólo a través del repositorio central, sin conocerse entre sí
   - [ ] Directamente, con mensajes punto a punto
   - [ ] A través de una cadena de filtros
   - [ ] Mediante un bus de eventos
   > El bus de eventos es de publicador-suscriptor; la cadena, de tuberías y filtros. [→ Repositorio y pizarrón](#Repositorio%20y%20pizarrón)
5. ¿Qué diferencia un pizarrón de un repositorio?
   - [x] En el pizarrón el componente central tiene un rol activo; en el repositorio es pasivo
   - [ ] El pizarrón no guarda datos
   - [ ] El repositorio está distribuido y el pizarrón no
   - [ ] No hay diferencia
   > El pizarrón da soporte a operaciones no determinísticas (se detalla en POSA, que no se da en la materia). [→ Repositorio y pizarrón](#Repositorio%20y%20pizarrón)
6. ¿Cuáles son desventajas del estilo de repositorio?
   - [x] Es un punto único de falla
   - [x] Puede volverse un cuello de botella
   - [x] Es difícil distribuirlo en varias computadoras
   - [ ] Los componentes quedan fuertemente acoplados entre sí
   > Al revés: los componentes no se conocen. Todo el acoplamiento es con el repositorio. [→ Repositorio y pizarrón](#Repositorio%20y%20pizarrón)
7. Un sistema de pagos procesa lotes de transacciones en etapas: validar, convertir moneda, calcular comisiones, registrar. ¿Qué estilo le calza?
   - [x] Tuberías y filtros
   - [ ] Repositorio
   - [ ] Microkernel
   - [ ] MVC
   > Cada etapa es un filtro y su salida es la entrada de la siguiente. No es interactivo. [→ Tuberías y filtros](#Tuberías%20y%20filtros)
8. ¿Cuál es la principal desventaja de tuberías y filtros?
   - [x] Hay que acordar el formato de los datos, y analizarlo y convertirlo en cada paso agrega sobrecarga
   - [ ] Los filtros comparten estado y se acoplan
   - [ ] No se puede ejecutar en paralelo
   - [ ] Es difícil de entender
   > Es fácil de entender y admite ejecución secuencial o concurrente; los filtros no comparten estado. [→ Tuberías y filtros](#Tuberías%20y%20filtros)
9. Un navegador con un núcleo mínimo al que se le agregan extensiones que usan una interfaz fija. ¿Qué estilo es?
   - [x] Microkernel (plug-in)
   - [ ] Capas
   - [ ] Repositorio
   - [ ] Cliente-servidor
   > Los plug-ins se vinculan en compilación o, con más modificabilidad, en ejecución. [→ Microkernel o plug-in](#Microkernel%20o%20plug-in)
10. ¿Cuál es la desventaja que las filminas señalan para el microkernel?
    - [x] Como los plug-ins pueden venir de terceros, es más fácil introducir vulnerabilidades y amenazas a la privacidad
    - [ ] No se puede extender el producto
    - [ ] Los plug-ins quedan acoplados al núcleo
    - [ ] Obliga a recompilar todo ante cada cambio
    > Mientras las interfaces fijas no cambien, los plug-ins no se acoplan al núcleo. [→ Microkernel o plug-in](#Microkernel%20o%20plug-in)

## Contenido

### Patrón o estilo

- Un **patrón arquitectónico** es la abstracción de una **buena práctica probada** en distintos sistemas y entornos, presentada como **problema y solución de alto nivel**. Debería decir **cuándo conviene usarlo y cuándo no** (doc 12, p. 41).
- En la materia, **estilo y patrón se toman como iguales**; Sommerville, en las últimas ediciones, pasó a llamar "patrón" a lo que antes era "estilo".
- En Bass, un patrón **empaqueta varias tácticas** y hace concesiones entre atributos de calidad. No hay patrones para todo: a veces se combinan tácticas sueltas (ver [arquitectura de software](arquitectura-de-software.md#Arquitectura%20y%20atributos%20de%20calidad)).
- Los cuatro que pide el programa:

| Estilo | Idea | Cuándo | Problema principal |
|---|---|---|---|
| **Capas** | Capas que dan servicios a la de arriba | Seguridad, equipos por capa, construir sobre lo existente | Latencia, separación difícil |
| **Repositorio** | Todos comparten datos en un componente central | Muchos datos por mucho tiempo, sistemas guiados por datos | Punto único de falla, cuello de botella |
| **Tuberías y filtros** | Cadena de transformaciones | Procesamiento de datos por lotes o transacciones | Formato común, sobrecarga de conversión |
| **Microkernel** | Núcleo mínimo + plug-ins | Productos extensibles | Seguridad de los plug-ins de terceros |

### Capas

- El sistema se separa en **capas con funcionalidad relacionada**; **cada capa provee servicios a la de arriba** y depende sólo de la de **abajo**, nunca a la inversa. Así una capa se puede **reemplazar** sin problema y se favorece el **desarrollo incremental**. Las interfaces tienen que estar bien especificadas (doc 12, p. 41).
- Típicamente: **presentación** arriba, **lógica de negocio** en el medio, **datos** abajo. La lógica de negocio, bien hecha, no debería depender de la base de datos; la capa de soporte está más ligada al sistema operativo. El **número de capas es arbitrario**.
- En Bass (doc 59, pp. 27 y 167): cada capa es un agrupamiento de módulos con un conjunto **cohesivo** de servicios, las relaciones son **unidireccionales** y cada capa es como una "máquina virtual".
- **Cuándo usarlo** (Sommerville): para construir características nuevas **sobre sistemas existentes** · cuando el desarrollo se reparte en **equipos, uno por capa** · cuando la **seguridad** es crucial.
- **Ventajas**: sirve para **multiplataforma** (sólo se reemplazan las capas ligadas al sistema operativo) · una capa cambia sin afectar a las de arriba si mantiene su interfaz · las capas bajas se reutilizan · cada equipo entiende menos interfaces.
- **Desventajas**: en la práctica **es difícil una separación estricta** y aparece comunicación directa entre capas lejanas · **rendimiento**: la latencia de atravesar capas.
- **Layer bridging**: una capa usa una capa inferior **no adyacente**. Se tolera, pero si es frecuente se pierden la portabilidad y la modificabilidad. Los usos **hacia arriba** nunca se permiten.
- **Tier** se asocia a capa **física** y **layer** a capa **lógica**.

### Repositorio y pizarrón

- Un **componente central contiene los datos** de los demás componentes, y la comunicación entre ellos es **sólo a través del repositorio**: no hay comunicación directa (doc 12, p. 41).
  - Si el componente central es **pasivo** (no emite señales), es un **repositorio**.
  - Si toma un **rol activo**, es un **pizarrón** (*blackboard*): da soporte a operaciones no determinísticas.
- **Cuándo usarlo**: con **grandes volúmenes de información** que se guardan mucho tiempo · en sistemas **guiados por datos**, donde incluir un dato dispara una acción.
- **Ventajas**: los componentes son **independientes** y no se conocen · los cambios de uno se propagan a todos · los datos se manejan de forma **consistente** · el **backup** es más fácil (todo en un lugar).
- **Desventajas**: **punto único de falla** · **cuello de botella** por centralizar toda la comunicación · **difícil de distribuir** en varias computadoras.
- Ejemplo: un IDE con editores para distintos lenguajes y analizadores o generadores de reportes que trabajan sobre los mismos datos.

### Tuberías y filtros

- El procesamiento se organiza en **componentes discretos (filtros)** que hacen una transformación sobre un tipo de dato; la **entrada de un filtro es la salida del anterior**. Los filtros **no comparten estado** y **no se conocen** (doc 12, p. 41). En español también "canalizaciones y filtros".
- **Cuándo usarlo**: **procesamiento de datos** (por lotes y basado en transacciones) y flujos de trabajo. **No está pensado para ser interactivo**. Común en **sistemas de pagos**. Tiene unos 50 años y se sigue usando.
- **Ventajas**: fácil de entender · admite **reutilización** · se parece al flujo de trabajo de muchas organizaciones · evoluciona **agregando transformaciones** · se implementa **secuencial o concurrente**.
- **Desventajas**: hay que **acordar el formato** de transferencia entre filtros; cada uno tiene que analizar su entrada y convertir su salida → **sobrecarga** y dificultad para reutilizar filtros con estructuras de datos incompatibles.
- Ejemplo: en una terminal, `cat log.txt | grep error | wc -l`: leer, filtrar las líneas con "error" y contarlas.

### Microkernel o plug-in

- Un **núcleo** con la funcionalidad básica y **variantes especializadas (plug-ins)** que le agregan funcionalidad mediante un **conjunto fijo de interfaces**. Se vinculan al compilar o después (doc 12, pp. 23 y 41).
- Se parte de un **núcleo al que se le van agregando cosas**, a diferencia de un sistema central completo. Los plug-ins cargados en **ejecución** dan más **modificabilidad** (no hay que recompilar todo).
- Ejemplos: un **sistema operativo** con un micronúcleo (memoria, hilos, comunicación entre procesos) y los controladores como plug-ins · **Chrome** y sus extensiones · **Visual Studio** · un sistema de reclamos con un plug-in por zona.
- **Beneficios**: extensión **controlada** del producto · los plug-ins los pueden hacer **otros equipos u organizaciones** (dos mercados) · evolucionan **independientemente** del núcleo mientras las interfaces no cambien.
- **Desventaja**: al venir de terceros, es más fácil que traigan **vulnerabilidades y amenazas a la privacidad**.

### Otros estilos

Aparecen en las filminas, aunque no los nombra el programa del parcial:

- **MVC** (modelo-vista-controlador): el **modelo** maneja los datos y sus operaciones, la **vista** los presenta y el **controlador** maneja la interacción del usuario. Se usa cuando hay **varias formas de ver e interactuar** con los datos o no se conocen los requisitos futuros de presentación. Desventaja: complejidad de más en casos simples.
- **Cliente-servidor**: un servidor da servicios a muchos clientes distribuidos. Ver [sistemas distribuidos](arquitecturas-de-sistemas-distribuidos.md#Cliente-servidor).
- **Publicador-suscriptor**: los componentes se comunican con mensajes **asíncronos** a través de un **bus de eventos**; el publicador no conoce a los suscriptores (bajo acoplamiento, pero rendimiento y orden menos predecibles).

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Arquitectura de software y diseño arquitectónico](arquitectura-de-software.md).
- [Arquitecturas de sistemas distribuidos](arquitecturas-de-sistemas-distribuidos.md).
- [Patrones GRASP](patrones-grasp.md#Controlador): el controlador GRASP en la capa de aplicación.
