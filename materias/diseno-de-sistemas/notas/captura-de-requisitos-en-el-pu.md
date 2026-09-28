# Captura de requisitos en el PU
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 5.1 · Peso provisorio 2/3 (**entra en el 2º parcial**, clase 23 "PUDS II – Fases &
> Requisitos": lista de características, modelo del dominio y del negocio, casos de uso de
> negocio y de sistema, trabajadores, artefactos y flujo de trabajo) · Fuentes: doc 13 *proceso
> unificado* (pp. 29–46) y doc 14 *flujos de trabajo* (pp. 3–7), basados en Jacobson et al.
> cap. 6–7, vía el export de Faro. Las fases están en [Proceso Unificado](proceso-unificado.md#Las%20cuatro%20fases).

## Preguntas de recuperación

- ¿Por qué es difícil capturar requisitos? :: Porque el desarrollo es **socio-técnico** (hay que tratar con personas), los usuarios **no saben todo lo que quieren** en sistemas grandes, las listas largas son difíciles de leer y **los requisitos cambian**. [→ Por qué capturar requisitos con casos de uso](#Por%20qué%20capturar%20requisitos%20con%20casos%20de%20uso)
- ¿Cuál es la mejor forma de capturar requisitos según el PU? :: Como **casos de uso**, concentrándose en las funcionalidades que dan **más valor** al usuario. [→ Por qué capturar requisitos con casos de uso](#Por%20qué%20capturar%20requisitos%20con%20casos%20de%20uso)
- ¿Qué es una característica (*feature*) y en qué se diferencia de un requisito? :: Una característica puede **englobar varios requisitos** (gestión de clientes, gestión de stock). La **lista de características** las resume, más breve que los casos de uso. [→ Lista de características](#Lista%20de%20características)
- Modelo de negocio vs. modelo de dominio :: El de **negocio** modela los **procesos** y entidades del negocio en alto nivel (con casos de uso de negocio). El de **dominio** es un **caso especial**: sólo las **clases conceptuales** del dominio. [→ Modelo del negocio y del dominio](#Modelo%20del%20negocio%20y%20del%20dominio)
- ¿Qué situación describe el modelo de dominio? :: Por defecto, la **actual**, previa a informatizar el dominio. [→ Modelo del negocio y del dominio](#Modelo%20del%20negocio%20y%20del%20dominio)
- Caso de uso de negocio vs. de sistema :: De **negocio**: modela un **proceso del negocio**. De **sistema**: captura **requisitos funcionales** del sistema, y **se deriva** de los de negocio. [→ Casos de uso de negocio y de sistema](#Casos%20de%20uso%20de%20negocio%20y%20de%20sistema)
- Actor de negocio vs. trabajador de negocio vs. actor de sistema :: Actor de negocio: **externo al negocio** (el cliente del banco). Trabajador de negocio: **interno** (el cajero); se suelen confundir. Actor de sistema: externo al **sistema**; puede venir de cualquiera de los dos. [→ Casos de uso de negocio y de sistema](#Casos%20de%20uso%20de%20negocio%20y%20de%20sistema)
- ¿Dónde van los requisitos no funcionales? :: En la **lista de requisitos suplementarios** (los generales); los casos de uso no sirven tanto para capturarlos. Los propios de un caso de uso van como **requisitos especiales** de ese caso. [→ Casos de uso de negocio y de sistema](#Casos%20de%20uso%20de%20negocio%20y%20de%20sistema)
- ¿Cuáles son las cinco actividades del flujo de requisitos? :: **Encontrar actores y casos de uso** → **priorizar casos de uso** → **detallar un caso de uso** → **prototipar la interfaz** → **estructurar el modelo de casos de uso**. [→ El flujo de trabajo de requisitos](#El%20flujo%20de%20trabajo%20de%20requisitos)
- ¿Qué trabajadores participan en requisitos y qué hace cada uno? :: **Analista de sistemas** (encuentra actores y casos de uso, estructura el modelo; tiene la visión completa) · **arquitecto** (prioriza) · **especificador de casos de uso** (detalla) · **diseñador de interfaz** (prototipa). [→ Trabajadores y artefactos](#Trabajadores%20y%20artefactos)
- ¿Qué produce "priorizar casos de uso"? :: La **descripción de la arquitectura (vista del modelo de casos de uso)**: los casos de uso más significativos para la arquitectura. [→ El flujo de trabajo de requisitos](#El%20flujo%20de%20trabajo%20de%20requisitos)
- ¿Qué es lo más importante al detallar un caso de uso? :: Su **descripción textual**; si se vuelve inentendible, se formaliza con diagramas (el de **actividades** especifica qué hace). [→ El flujo de trabajo de requisitos](#El%20flujo%20de%20trabajo%20de%20requisitos)
- ¿Para qué sirve prototipar la interfaz? :: Para **validar** los casos de uso con el usuario (puede ver lo que se construye y dar mejor retroalimentación); pueden aparecer casos de uso nuevos. Los prototipos van de dibujos a mano a navegables. [→ El flujo de trabajo de requisitos](#El%20flujo%20de%20trabajo%20de%20requisitos)
- ¿Qué es el modelo de casos de uso? :: La **vista externa** del sistema, en el **lenguaje del cliente**, estructurada por casos de uso. Funciona como **contrato** entre cliente y desarrolladores sobre qué hace y qué no. Puede tener redundancias. [→ Trabajadores y artefactos](#Trabajadores%20y%20artefactos)

## Cuestionario

1. ¿Qué diferencia una característica (*feature*) de un requisito?
   - [x] Una característica puede englobar varios requisitos
   - [ ] Una característica es siempre no funcional
   - [ ] Un requisito engloba varias características
   - [ ] Son sinónimos
   > Ejemplos de características: gestión de clientes, gestión de stock, gestión de productos. [→ Lista de características](#Lista%20de%20características)
2. ¿Qué es el modelo de dominio respecto del modelo de negocio?
   - [x] Un caso especial, que modela sólo las clases conceptuales del dominio
   - [ ] Un modelo más amplio que lo incluye
   - [ ] El modelo del sistema ya informatizado
   - [ ] El diagrama de clases de diseño
   > Por defecto describe la situación actual, antes de informatizar. [→ Modelo del negocio y del dominio](#Modelo%20del%20negocio%20y%20del%20dominio)
3. ¿Qué modela un caso de uso de negocio?
   - [x] Un proceso del negocio
   - [ ] Un requisito funcional del sistema
   - [ ] Una pantalla de la aplicación
   - [ ] Un requisito no funcional
   > Los de sistema capturan requisitos funcionales y se derivan de los de negocio. [→ Casos de uso de negocio y de sistema](#Casos%20de%20uso%20de%20negocio%20y%20de%20sistema)
4. En un banco, el cliente que viene a depositar y el cajero que lo atiende son, respectivamente…
   - [x] un actor de negocio y un trabajador de negocio
   - [ ] un trabajador de negocio y un actor de negocio
   - [ ] dos actores de negocio
   - [ ] dos trabajadores de negocio
   > El actor de negocio es **externo** al negocio y se suele confundir con el trabajador, que es interno. *(Ejemplo del tutor.)* [→ Casos de uso de negocio y de sistema](#Casos%20de%20uso%20de%20negocio%20y%20de%20sistema)
5. ¿Dónde se registran los requisitos no funcionales que aplican a todo el sistema?
   - [x] En la lista de requisitos suplementarios
   - [ ] En cada caso de uso de sistema
   - [ ] En el modelo de dominio
   - [ ] En el glosario
   > Los casos de uso no son una buena herramienta para capturarlos. [→ Casos de uso de negocio y de sistema](#Casos%20de%20uso%20de%20negocio%20y%20de%20sistema)
6. ¿Cuál es el orden de las actividades del flujo de trabajo de requisitos?
   - [x] Encontrar actores y casos de uso, priorizar, detallar, prototipar la interfaz, estructurar el modelo
   - [ ] Detallar, encontrar actores, prototipar, priorizar, estructurar
   - [ ] Prototipar, detallar, priorizar, encontrar actores, estructurar
   - [ ] Estructurar, encontrar actores, detallar, priorizar, prototipar
   > El flujo se repite en cada iteración; el orden indica dependencias entre artefactos. [→ El flujo de trabajo de requisitos](#El%20flujo%20de%20trabajo%20de%20requisitos)
7. ¿Qué trabajador **prioriza** los casos de uso?
   - [x] El arquitecto
   - [ ] El analista de sistemas
   - [ ] El especificador de casos de uso
   - [ ] El diseñador de interfaz de usuario
   > Busca los casos de uso más significativos para la arquitectura. [→ Trabajadores y artefactos](#Trabajadores%20y%20artefactos)
8. ¿Qué artefacto produce la actividad "encontrar actores y casos de uso"?
   - [x] El modelo de casos de uso esbozado y el glosario
   - [ ] La descripción de la arquitectura
   - [ ] El prototipo de interfaz
   - [ ] El caso de uso detallado
   > Entradas: modelo de negocio o de dominio, requisitos adicionales y lista de características. [→ El flujo de trabajo de requisitos](#El%20flujo%20de%20trabajo%20de%20requisitos)
9. ¿Qué es lo más importante al detallar un caso de uso?
   - [x] Su descripción textual; los diagramas se usan si el texto se vuelve inentendible
   - [ ] El diagrama de secuencia completo
   - [ ] El prototipo navegable
   - [ ] El diagrama de clases de diseño
   > El diagrama de actividades se usa para especificar qué hace el caso de uso. [→ El flujo de trabajo de requisitos](#El%20flujo%20de%20trabajo%20de%20requisitos)
10. ¿Qué actividad agrega relaciones de inclusión, extensión y generalización entre casos de uso?
    - [x] Estructurar el modelo de casos de uso
    - [ ] Detallar un caso de uso
    - [ ] Priorizar casos de uso
    - [ ] Prototipar la interfaz
    > La hace el analista de sistemas, que tiene la visión completa; los especificadores sólo ven su caso de uso. [→ El flujo de trabajo de requisitos](#El%20flujo%20de%20trabajo%20de%20requisitos)
11. ¿Para qué se usa principalmente el modelo de casos de uso?
    - [x] Como contrato entre el cliente y los desarrolladores sobre qué debe y qué no debe hacer el sistema
    - [ ] Para describir cómo se implementa cada clase
    - [ ] Para planificar el despliegue en el hardware
    - [ ] Para documentar las pruebas de regresión
    > Es la vista externa, en el lenguaje del cliente; puede tener redundancias, que el modelo de análisis elimina. [→ Trabajadores y artefactos](#Trabajadores%20y%20artefactos)

## Contenido

### Por qué capturar requisitos con casos de uso

- La **captura de requisitos** busca identificar qué hay que desarrollar. En el PU es un paso **poco formalizado** y a veces se toma como sinónimo de **modelado del negocio** (doc 13, p. 34).
- Es difícil porque:
  - el desarrollo de software es una disciplina **socio-técnica**: hay que tratar con personas, sobre todo con los clientes;
  - en sistemas grandes los usuarios **no reconocen todo lo que quieren** y no tienen visión global;
  - en sistemas complejos las especificaciones son largas y las **listas grandes**, si no están organizadas, son difíciles de leer;
  - **los requisitos van a cambiar**.
- Es la parte crucial: sacar **correctamente** lo que el usuario quiere.
- La mejor forma es capturarlos como **casos de uso**, concentrándose en las funcionalidades que aportan **más valor** al usuario.

### Lista de características

- **Característica** (*feature*): puede **englobar varios requisitos**. Ejemplos: gestión de clientes, gestión de stock, gestión de productos (doc 13, p. 29).
- La **lista de características** (o de requisitos candidatos) es una plantilla básica donde cada característica queda **bien resumida**; es más resumida que los casos de uso (p. 36).
- Aparece en la **fase de inicio** como "vista de características" y es entrada de la actividad **encontrar actores y casos de uso**.

### Modelo del negocio y del dominio

- **Modelo de negocio**: describe en **alto nivel** el dominio del problema: el negocio, sus **procesos** y las **entidades** que maneja (doc 13, pp. 29 y 36). A veces no se hace porque lleva mucho tiempo.
- **Modelo de dominio**: un **caso especial** del de negocio, que modela sólo las **clases conceptuales** del dominio.
  - Es fundamental para saber **dónde va a funcionar** el sistema.
  - Por defecto describe la **situación actual**, previa a la informatización (sólo si no queda otra se modela cómo quedaría).
  - Casi todas sus clases las contempla después el sistema, aunque puede haber alguna que no.
- **Diseño de procesos a partir de casos de uso de negocio**: los procesos del negocio se modelan como casos de uso de negocio, y de ellos se derivan los casos de uso de sistema.

### Casos de uso de negocio y de sistema

| | Caso de uso de negocio | Caso de uso de sistema |
|---|---|---|
| Qué modela | Un **proceso del negocio** | Los **requisitos funcionales** del sistema |
| De dónde sale | Del modelado del negocio | Se **deriva** de los de negocio |
| Actores | Actores de negocio (externos al negocio) | Actores de sistema (externos al sistema) |

- **Actor de negocio**: **externo al negocio**. Se suele confundir con el **trabajador de negocio**, que es interno (doc 13, p. 36).
- **Actor de sistema**: externo al sistema. Puede venir tanto de trabajadores como de actores de negocio. Si no se aclara "de negocio", se habla de actores de sistema (p. 38).
- Los casos de uso de sistema **no son buenos para requisitos no funcionales**:
  - los **generales** van en la **lista de requisitos suplementarios**;
  - los propios de un caso de uso son sus **requisitos especiales** (sinónimo de no funcionales).
- Los casos de uso también sirven como **agrupadores** de requisitos.

### Trabajadores y artefactos

**Trabajadores** del flujo de requisitos (doc 13, pp. 27 y 45):

| Trabajador | Responsable de |
|---|---|
| **Analista de sistemas** | Encontrar actores y casos de uso y **estructurar el modelo**; tiene la **visión completa** |
| **Arquitecto** | **Priorizar** los casos de uso (está presente en todos los flujos) |
| **Especificador de casos de uso** | **Detallar** cada caso de uso (sólo ve el suyo) |
| **Diseñador de interfaz de usuario** | **Prototipar** la interfaz |

**Artefactos**:

- **Modelo de casos de uso**: la **vista externa** del sistema, en el **lenguaje del cliente**, estructurada por casos de uso. Contiene un sistema de casos de uso (el paquete superior), actores y casos de uso. Funciona como **contrato** entre cliente y desarrolladores sobre qué debe y qué no debe hacer el sistema. Puede tener **redundancias e inconsistencias**; el modelo de análisis las elimina (doc 14, p. 3).
- **Actor** y **caso de uso**.
- **Descripción de la arquitectura (vista del modelo de casos de uso)**: los casos de uso significativos para la arquitectura.
- **Glosario**: los términos comunes; sale de encontrar actores y casos de uso y sirve para el análisis.
- **Prototipo de interfaz de usuario**.
- **Requisitos adicionales** (o suplementarios).

### El flujo de trabajo de requisitos

Cinco actividades (doc 13, p. 46; doc 14, pp. 4–6):

| # | Actividad | Trabajador | Entradas | Salidas |
|---|---|---|---|---|
| 1 | **Encontrar actores y casos de uso** | Analista de sistemas | Modelo de negocio o de dominio, requisitos adicionales, lista de características | **Modelo de casos de uso (esbozado)**, **glosario** |
| 2 | **Priorizar casos de uso** | Arquitecto | Modelo de casos de uso esbozado, requisitos adicionales (no funcionales), glosario | **Descripción de la arquitectura (vista del modelo de casos de uso)** |
| 3 | **Detallar un caso de uso** | Especificador de casos de uso | Modelo esbozado, requisitos adicionales, glosario | **Caso de uso detallado** |
| 4 | **Prototipar la interfaz de usuario** | Diseñador de interfaz | Modelo de casos de uso, caso de uso descrito, requisitos adicionales, glosario | **Prototipo de interfaz** |
| 5 | **Estructurar el modelo de casos de uso** | Analista de sistemas | Modelo esbozado, casos de uso descritos, requisitos adicionales, glosario | **Modelo de casos de uso estructurado** |

Detalles:

- **Encontrar actores y casos de uso**: no debe haber dos actores con el mismo rol; si pasa, se combinan o se generalizan.
- **Priorizar**: se buscan los casos de uso **más significativos para la arquitectura**, teniendo en cuenta los requisitos no funcionales.
- **Detallar**: lo más importante es la **descripción textual**; si se vuelve inentendible, se formaliza con diagramas (el **de actividades** especifica qué hace). Puede participar más de una persona.
- **Prototipar la interfaz**: sirve para **validar** los casos de uso (¿se entendieron bien?) y pueden aparecer nuevos. La calidad del prototipo depende de cuánto importe la **usabilidad**: de un dibujo a mano alzada a uno **navegable** (más caro). El usuario **ve** lo que se construye y da mejor retroalimentación.
- **Estructurar**: se agregan relaciones de **inclusión, extensión y generalización** y se extraen los caminos comunes. Los diagramas tienen que seguir siendo **entendibles para el cliente**.

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Proceso Unificado](proceso-unificado.md): fases, iteraciones y las tres características.
- [Patrones GRASP](patrones-grasp.md#Artefactos%20que%20entran%20al%20diseño%20de%20objetos): cómo esos artefactos entran al diseño (realización de casos de uso).
- [Programación Extrema](programacion-extrema.md#Historias,%20pruebas%20y%20spikes): historias de usuario vs. casos de uso.
