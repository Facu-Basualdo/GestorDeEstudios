# Flujos de trabajo del Proceso Unificado: análisis, diseño, implementación y prueba
[← Índice Diseño de Sistemas](../INDICE.md)

> Unidad 5 · Peso 3 (**Parcial 2 / IE5**, clases del 08/10 y 15/10)
> · Fuentes: `2do Parcial - Powers de Clase (2).pdf` (pp. 176–284) y `14-flujos-de-trabajo.pdf`
> (pp. 1–25). Los flujos de trabajo anteriores —visión general del PU y captura de requisitos— están en
> [Proceso Unificado (PUDS)](proceso-unificado.md) y [Captura de requisitos en el PU](captura-de-requisitos-en-el-pu.md).

## Preguntas de recuperación

- ¿Cuántas actividades tiene cada flujo fundamental del PU? :: Requisitos 5, Análisis 4, Diseño 4, Implementación 5 y Prueba 6. [→ Panorama general: los 5 flujos fundamentales y trazabilidad](#Panorama%20general%3A%20los%205%20flujos%20fundamentales%20y%20trazabilidad)
- ¿Qué trabajadores participan en el flujo de Análisis y cuál desaparece respecto de Requisitos? :: Arquitecto, Ingeniero de casos de uso e Ingeniero de componentes; desaparece el Analista de sistemas. [→ Trabajadores y artefactos del análisis](#Trabajadores%20y%20artefactos%20del%20an%C3%A1lisis)
- ¿Cuáles son las 4 actividades de Análisis y quién hace cada una? :: Análisis de la arquitectura (Arquitecto), Analizar un caso de uso (Ing. de casos de uso), Analizar una clase y Analizar un paquete (Ing. de componentes). [→ Flujo de trabajo del análisis (Fig. 8.18)](#Flujo%20de%20trabajo%20del%20an%C3%A1lisis%20%28Fig.%208.18%29)
- ¿Cuáles son los tres estereotipos de la clase de análisis? :: Interfaz o frontera (media con los actores), control (coordina un caso de uso) y entidad (datos persistentes). [→ Trabajadores y artefactos del análisis](#Trabajadores%20y%20artefactos%20del%20an%C3%A1lisis)
- ¿Qué diagrama de interacción se prefiere en la realización de CU–análisis y cuál en la de diseño? :: Análisis: diagramas de comunicación (colaboración). Diseño: diagramas de secuencia. [→ Propósito y comparación Análisis vs. Diseño](#Prop%C3%B3sito%20y%20comparaci%C3%B3n%20An%C3%A1lisis%20vs.%20Dise%C3%B1o)
- Compará el modelo de análisis con el de diseño en naturaleza, formalidad, costo y mantenimiento. :: Análisis: conceptual, menos formal, más barato (1:5), puede dejar de mantenerse. Diseño: físico (plano de la implementación), más formal, unas 5 veces más caro y se mantiene todo el ciclo de vida. [→ Propósito y comparación Análisis vs. Diseño](#Prop%C3%B3sito%20y%20comparaci%C3%B3n%20An%C3%A1lisis%20vs.%20Dise%C3%B1o)
- ¿Cuáles son las 4 actividades de Diseño y quién hace cada una? :: Diseño de la arquitectura (Arquitecto), Diseñar un caso de uso (Ing. de casos de uso), Diseñar una clase y Diseñar un subsistema (Ing. de componentes). [→ Flujo de trabajo del diseño (Fig. 9.16)](#Flujo%20de%20trabajo%20del%20dise%C3%B1o%20%28Fig.%209.16%29)
- ¿Qué artefacto nuevo agrega el Arquitecto en Diseño respecto de Análisis? :: El modelo de despliegue (nodos, conexiones y asignación de componentes), además del modelo de diseño y la descripción de la arquitectura. [→ Trabajadores y artefactos del diseño](#Trabajadores%20y%20artefactos%20del%20dise%C3%B1o)
- ¿Qué trabajador nuevo aparece en Implementación y de qué artefacto es responsable? :: El Integrador de sistemas, responsable del plan de integración de construcciones (qué entra en cada build). [→ Trabajadores y artefactos de la implementación](#Trabajadores%20y%20artefactos%20de%20la%20implementaci%C3%B3n)
- ¿Cuáles son las 5 actividades de Implementación? :: Implementación de la arquitectura, Integrar el sistema, Implementar un subsistema, Implementar una clase y Realizar prueba de unidad. [→ Flujo de trabajo de la implementación (Fig. 10.16)](#Flujo%20de%20trabajo%20de%20la%20implementaci%C3%B3n%20%28Fig.%2010.16%29)
- ¿En qué flujo van las pruebas unitarias? :: En Implementación ("Realizar prueba de unidad", del Ing. de componentes), no en Prueba. [→ Propósito y comparación](#Prop%C3%B3sito%20y%20comparaci%C3%B3n)
- ¿Qué es un stub? :: Un componente con implementación esquelética o de propósito especial, que se usa para desarrollar o probar otro componente que depende de él. [→ Trabajadores y artefactos de la implementación](#Trabajadores%20y%20artefactos%20de%20la%20implementaci%C3%B3n)
- Diferenciá la prueba de especificación de la prueba de estructura. :: Especificación = caja negra: mira entradas y salidas (clases de equivalencia); es la más común. Estructura = caja blanca: mira el código interno; es más costosa. [→ Flujo de trabajo de la implementación (Fig. 10.16)](#Flujo%20de%20trabajo%20de%20la%20implementaci%C3%B3n%20%28Fig.%2010.16%29)
- ¿Qué tiene de particular el flujo de Prueba en trabajadores y artefactos? :: Desaparece el Arquitecto y, salvo el Ing. de componentes, todos los trabajadores y todos los artefactos son nuevos. [→ Trabajadores y artefactos de la prueba](#Trabajadores%20y%20artefactos%20de%20la%20prueba)
- ¿Cuáles son las 6 actividades de Prueba? :: Planificar la prueba, Diseñar la prueba, Implementar la prueba, Efectuar la prueba de integración, Realizar la prueba de sistema y Evaluar la prueba. [→ Flujo de trabajo de la prueba (Fig. 11.8)](#Flujo%20de%20trabajo%20de%20la%20prueba%20%28Fig.%2011.8%29)
- ¿Qué diferencia hay entre caso de prueba y procedimiento de prueba? :: El caso dice qué probar (entradas, resultado esperado, condiciones); el procedimiento dice cómo llevarlo a cabo paso a paso y puede servir para varios casos. [→ Trabajadores y artefactos de la prueba](#Trabajadores%20y%20artefactos%20de%20la%20prueba)
- ¿A qué trazan los casos de prueba? :: Al caso de uso (prueba de caja negra) o a la realización de CU–diseño (prueba de caja blanca). [→ Trabajadores y artefactos de la prueba](#Trabajadores%20y%20artefactos%20de%20la%20prueba)
- ¿Con qué dos criterios se evalúa la prueba? :: Completitud y fiabilidad. [→ Flujo de trabajo de la prueba (Fig. 11.8)](#Flujo%20de%20trabajo%20de%20la%20prueba%20%28Fig.%2011.8%29)
- ¿Qué responsabilidades tiene el Ingeniero de casos de uso a lo largo del PUDS? *(cátedra)* :: La integridad de las realizaciones de CU, que sus descripciones y diagramas sean legibles y adecuados, y tanto el análisis como el diseño del caso de uso. [→ Lo que preguntó la cátedra](#Lo%20que%20pregunt%C3%B3%20la%20c%C3%A1tedra)
- ¿Qué responsabilidades tiene el Ingeniero de componentes a lo largo del PUDS? *(cátedra)* :: Definir y mantener operaciones, métodos, atributos y relaciones de las clases de diseño, y el código fuente de los componentes. [→ Lo que preguntó la cátedra](#Lo%20que%20pregunt%C3%B3%20la%20c%C3%A1tedra)

## Cuestionario

1. En el flujo de Diseño, ¿qué actividad hace el Ingeniero de componentes además de "Diseñar una clase"? *(cátedra)*
   - [x] Diseñar un subsistema
   - [ ] Diseñar interfaces
   - [ ] Diseñar un caso de uso
   - [ ] Diseño de la arquitectura
   > Error real del recuperatorio 2024: "Diseñar interfaces" no es una actividad; las interfaces se terminan dentro de "Diseñar un subsistema". [→ Flujo de trabajo del diseño (Fig. 9.16)](#Flujo%20de%20trabajo%20del%20dise%C3%B1o%20%28Fig.%209.16%29)
2. Marque las afirmaciones verdaderas acerca de la Realización de Casos de Uso–Diseño según el PUDS *(cátedra)*
   - [ ] Una clase de diseño es exclusiva de una realización de casos de uso–diseño
   - [x] En un diagrama de secuencia podríamos incluir los subsistemas participantes
   - [x] Puede tener una traza directa con el modelo de casos de uso, en el caso de que no exista modelo de análisis
   - [ ] El flujo de eventos–diseño es una descripción textual que complementa a los diagramas de interacción, pero no debe llegar al detalle de incluir objetos
   > Una clase de diseño puede participar en varias realizaciones. El flujo de eventos sí nombra objetos. [→ Lo que preguntó la cátedra](#Lo%20que%20pregunt%C3%B3%20la%20c%C3%A1tedra)
3. Marque las afirmaciones verdaderas acerca de la Realización de Casos de Uso–Análisis según el PUDS *(cátedra)*
   - [ ] Se prefieren los diagramas de secuencia para la descripción de interacciones
   - [x] Es una colaboración dentro del modelo de análisis
   - [x] Tiene una traza directa con el modelo de casos de uso
   - [ ] Un diagrama de clases de análisis puede incluir subsistemas
   > En análisis se prefieren los diagramas de comunicación; los subsistemas son de diseño. [→ Lo que preguntó la cátedra](#Lo%20que%20pregunt%C3%B3%20la%20c%C3%A1tedra)
4. Marque las responsabilidades de un ingeniero de componentes a lo largo del PUDS *(cátedra)*
   - [ ] Es responsable de la integridad del modelo de pruebas
   - [ ] Es responsable de la integridad de una o varias realizaciones de casos de uso
   - [x] Es responsable de definir y mantener las operaciones, métodos, atributos, relaciones y requisitos de implementación de una o varias clases de diseño
   - [x] Es responsable de definir y mantener el código fuente de uno o varios componentes de archivo
   > El modelo de pruebas es del Diseñador de pruebas; las realizaciones, del Ing. de casos de uso. [→ Lo que preguntó la cátedra](#Lo%20que%20pregunt%C3%B3%20la%20c%C3%A1tedra)
5. Marque las responsabilidades de un ingeniero de casos de uso a lo largo del PUDS *(cátedra)*
   - [ ] Es responsable de la integridad del modelo de pruebas
   - [x] Es responsable tanto del análisis como del diseño del caso de uso
   - [x] Es responsable de asegurar que las descripciones textuales y diagramas de la realización del caso de uso son legibles y se adaptan a su propósito
   - [x] Es responsable de la integridad de una o varias realizaciones de casos de uso
   - [ ] Es responsable de definir y mantener las operaciones, métodos y atributos de una o varias clases de diseño
   > En el recuperatorio 2024 se marcó sólo una de las tres correctas. Las clases de diseño son del Ing. de componentes. [→ Lo que preguntó la cátedra](#Lo%20que%20pregunt%C3%B3%20la%20c%C3%A1tedra)
6. En el flujo de Análisis, ¿qué parejas trabajador → actividad son correctas? *(cátedra)*
   - [x] Arquitecto → Análisis de la arquitectura
   - [x] Ingeniero de casos de uso → Analizar un caso de uso
   - [x] Ingeniero de componentes → Analizar una clase
   - [ ] Analista de sistemas → Analizar un paquete
   > El Analista de sistemas no participa en Análisis; "Analizar un paquete" es del Ing. de componentes. [→ Flujo de trabajo del análisis (Fig. 8.18)](#Flujo%20de%20trabajo%20del%20an%C3%A1lisis%20%28Fig.%208.18%29)
7. ¿Cuál/es de las siguientes afirmaciones son verdaderas para una Clase de Diseño? *(cátedra)*
   - [x] Los atributos se declaran en términos del lenguaje de programación
   - [ ] Siempre se ajusta a uno de los tres estereotipos básicos: frontera, control o entidad
   - [x] Las relaciones en las que está involucrada con otras clases a menudo tienen un significado sencillo cuando se implementa la clase
   - [ ] Su comportamiento se define sólo por responsabilidades, sin métodos
   > Los tres estereotipos y las responsabilidades sin métodos son de la clase de análisis. [→ Propósito y comparación Análisis vs. Diseño](#Prop%C3%B3sito%20y%20comparaci%C3%B3n%20An%C3%A1lisis%20vs.%20Dise%C3%B1o)
8. ¿Cuál/es de las siguientes afirmaciones son verdaderas para una Clase de Análisis? *(cátedra)*
   - [x] Siempre se ajusta a uno de los tres estereotipos básicos: frontera, control o entidad
   - [ ] La navegabilidad de las asociaciones es importante
   - [x] Su comportamiento está definido por responsabilidades en un nivel más alto y menos formal
   - [ ] Los tipos de sus atributos a menudo son tipos del lenguaje de programación
   > Navegabilidad y tipos del lenguaje son detalles de diseño. [→ Trabajadores y artefactos del análisis](#Trabajadores%20y%20artefactos%20del%20an%C3%A1lisis)
9. ¿Cuáles de las siguientes afirmaciones NO corresponden al modelo de Análisis? *(cátedra)*
   - [ ] Define realizaciones de caso de uso, cada una representa el análisis de un caso de uso
   - [x] Descrito en el lenguaje del cliente
   - [ ] Estructurado por clases y paquetes estereotipados; da estructura a la vista interna
   - [x] Puede contener redundancias e inconsistencias entre requisitos
   > Lenguaje del cliente y redundancias son del modelo de casos de uso; el análisis usa el lenguaje del desarrollador. [→ Propósito y comparación con Casos de Uso](#Prop%C3%B3sito%20y%20comparaci%C3%B3n%20con%20Casos%20de%20Uso)
10. ¿Cuáles de las siguientes afirmaciones NO corresponden al modelo de Diseño? *(cátedra)*
    - [x] Dinámico aunque no muy centrado en la secuencia
    - [ ] Es un modelo físico más cercano a la implementación
    - [ ] Debe mantenerse durante todo el ciclo de vida
    - [x] Es menos formal que el modelo de análisis
    > "No muy centrado en la secuencia" y "menos formal" describen al modelo de análisis. [→ Propósito y comparación Análisis vs. Diseño](#Prop%C3%B3sito%20y%20comparaci%C3%B3n%20An%C3%A1lisis%20vs.%20Dise%C3%B1o)
11. ¿Cuáles de las siguientes afirmaciones son verdaderas para el modelo de implementación? *(cátedra)*
    - [x] Distribuye el sistema mediante la asignación de componentes ejecutables a nodos en el modelo de despliegue
    - [x] Prueba unitariamente los componentes y luego los integra compilándolos en uno o varios ejecutables
    - [ ] Realiza las pruebas de integración y de sistema
    - [ ] Establece la línea base de la arquitectura
    > Las pruebas de integración y de sistema son del flujo de Prueba; la línea base se fija en Elaboración. [→ Lo que preguntó la cátedra](#Lo%20que%20pregunt%C3%B3%20la%20c%C3%A1tedra)
12. Marque aquellas afirmaciones verdaderas vinculadas con la disciplina de Prueba *(cátedra)*
    - [x] Un componente de prueba automatiza uno o varios procedimientos de prueba o partes de ellos
    - [x] Los casos de prueba de caja blanca se derivan de los casos de uso
    - [ ] Un defecto es una evaluación de los resultados de la prueba
    - [ ] Un procedimiento de prueba sirve para un único caso de prueba
    > La de caja blanca traza a la realización de CU–diseño, que sale del caso de uso. La evaluación de prueba es otro artefacto; un procedimiento puede reutilizarse en varios casos. [→ Trabajadores y artefactos de la prueba](#Trabajadores%20y%20artefactos%20de%20la%20prueba)
13. Marque las afirmaciones verdaderas sobre la actividad "Diseñar un caso de uso" *(cátedra)*
    - [ ] El único artefacto obtenido es la "Realización de caso de uso–diseño"
    - [x] Identifica las clases de diseño participantes estudiando las clases de análisis
    - [x] En ocasiones es más apropiado hacerlo en términos de subsistemas participantes y sus interfaces
    - [ ] Todas las clases de diseño deben participar en alguna realización de caso de uso–diseño
    > También esboza clases, subsistemas e interfaces participantes. [→ Flujo de trabajo del diseño (Fig. 9.16)](#Flujo%20de%20trabajo%20del%20dise%C3%B1o%20%28Fig.%209.16%29)
14. ¿En qué flujo de trabajo se hace la prueba unitaria?
    - [x] Implementación
    - [ ] Prueba
    - [ ] Diseño
    - [ ] Análisis
    > Trampa frecuente: "Realizar prueba de unidad" es la 5.ª actividad de Implementación. [→ Propósito y comparación](#Prop%C3%B3sito%20y%20comparaci%C3%B3n)
15. ¿Qué trabajador participa en Requisitos, Análisis, Diseño e Implementación pero no en Prueba?
    - [x] Arquitecto
    - [ ] Ingeniero de componentes
    - [ ] Ingeniero de casos de uso
    - [ ] Integrador de sistemas
    > El Ing. de componentes sigue en Prueba (implementa los componentes de prueba). [→ Trabajadores y artefactos de la prueba](#Trabajadores%20y%20artefactos%20de%20la%20prueba)

## Panorama general: los 5 flujos fundamentales y trazabilidad

El Proceso Unificado organiza el núcleo técnico en **cinco flujos de trabajo fundamentales**, cuyo énfasis se desplaza a lo largo de las iteraciones desde la captura de requisitos y el análisis hacia el diseño, la implementación y la prueba (`14-flujos-de-trabajo.pdf, pág. 2`).

Conteo de actividades por flujo para recordar (`Powers, págs. 251–273`; `14-flujos-de-trabajo.pdf, págs. 3–25`):

- **Captura de requisitos**: **5** actividades
- **Análisis**: **4** actividades
- **Diseño**: **4** actividades
- **Implementación**: **5** actividades
- **Prueba**: **6** actividades

Cadena de dependencias entre modelos (`14-flujos-de-trabajo.pdf, pág. 1`, Fig. 1.4; `Powers, pág. 249`):

```text
Modelo de casos de uso ─(realizado por)─▶ Modelo de análisis ─(realizado por)─▶ Modelo de diseño
                                                                                      │       ▲
                                            ┌──(implementado por)─────────────────────┘       │
                                            ▼                                    (distribuido por)
                                 Modelo de implementación                             Modelo de despliegue
                                            ▲
                                            └──(verificado por)── Modelo de prueba
```

En cualquier pregunta de examen conviene seguir la consigna del docente: **saber cada actividad principal y su trabajador/artefacto**, no memorizar los subpasos (`Powers, pág. 213`).

## 1. Análisis (4 actividades)

### Propósito y comparación con Casos de Uso

El análisis refina y estructura los requisitos describiendo las partes internas del sistema en el **lenguaje del desarrollador** (`Powers, págs. 176–177`; `14-flujos-de-trabajo.pdf, pág. 7`, Tabla 8.1): mientras los **casos de uso dicen el QUÉ** (vista externa, contrato con el cliente, puede tener redundancias), el **análisis y el diseño esbozan el CÓMO** (vista interna, sin redundancias entre requisitos, enfocada en funcionalidad y arquitectura) (`Powers, págs. 176–177`).

En el ciclo de vida, el modelo de análisis es **opcional** y admite **tres estrategias** (`Powers, pág. 178`; coincidente con `Apunte Segundo Parcial - Celina.pdf` *(apunte de estudiante)*, págs. 82–83):
1. Mantener el modelo de análisis consistente durante todo el proyecto.
2. Hacerlo como bosquejo o puente transitorio hasta el diseño y luego dejar de actualizarlo.
3. No crear modelo de análisis (detallar mucho más el modelo de casos de uso o analizar directo en diseño; sólo viable en sistemas simples).

### Trabajadores y artefactos del análisis

Participan **tres trabajadores** (`Powers, pág. 179`; `14-flujos-de-trabajo.pdf, pág. 8`, Fig. 8.1) —**desaparece el Analista de sistemas** respecto a Captura de requisitos:

| Trabajador | Artefactos de los que es responsable |
|---|---|
| **Arquitecto** | **Modelo de análisis** (sistema de análisis compuesto por paquetes) y **Descripción de la arquitectura** (vista del modelo de análisis: paquetes y clases con mayor impacto arquitectónico; `Powers, pág. 185`) |
| **Ingeniero de casos de uso** | **Realización de caso de uso – análisis** |
| **Ingeniero de componentes** | **Clase del análisis** y **Paquete del análisis** (también **paquete de servicio**, *"caja cerrada"* reutilizable por varios CU para convertir en componente; `Powers, pág. 184`) |

Claves de examen sobre los artefactos (`Powers, págs. 180–183`):

- **Clase del análisis**: clase conceptual de alto nivel con **atributos conceptuales** (ej. string/entero) y **responsabilidades**, **sin métodos** (`Powers, pág. 180`). Usa **tres estereotipos conceptuales**:
  - **Interfaz / Frontera**: media entre todo actor (humano o sistema externo) y el sistema (`Powers, pág. 181`).
  - **Control**: aplica el patrón GRASP Controlador (uno por CU; orquesta el flujo/cálculo complejo y se destruye al terminar el CU; `Powers, pág. 181`).
  - **Entidad**: modela y conoce los datos persistentes del dominio (`Powers, pág. 181`).
- **Realización de caso de uso – análisis**: traza (`«trace»`) un caso de uso con sus clases del análisis participantes y sus interacciones (`Powers, pág. 279`). Se modela preferentemente con **diagramas de comunicación** (llamados también de colaboración; más simples que secuencia en esta etapa) e incluye **flujo de sucesos – análisis**, que **sí nombra objetos**, a diferencia de la descripción textual de un caso de uso (`Powers, pág. 183`).

### Flujo de trabajo del análisis (Fig. 8.18)

| Orden | Actividad | Trabajador | Salida principal (`14-flujos-de-trabajo.pdf, págs. 9–11`) |
|---|---|---|---|
| **1** | **Análisis de la arquitectura** | Arquitecto | Paquete del análisis (esbozo), Clase del análisis (esbozo; 10–20 entidades obvias), Descripción de la arquitectura (vista de análisis) + requisitos especiales (`Powers, págs. 187–189`) |
| **2** | **Analizar un caso de uso** | Ingeniero de casos de uso | Realización de CU – análisis y clases del análisis participantes esbozadas (`Powers, pág. 190`) |
| **3** | **Analizar una clase** | Ingeniero de componentes | Clase del análisis **terminada** (`Powers, pág. 191`) |
| **4** | **Analizar un paquete** | Ingeniero de componentes | Paquete del análisis **terminado** (revisando dependencias entre paquetes; `Powers, pág. 191`) |

## 2. Diseño (4 actividades)

### Propósito y comparación Análisis vs. Diseño

El diseño sirve como **puente entre el análisis y la implementación** (`Powers, pág. 192`): modela la solución atendiendo los **requisitos no funcionales** y las restricciones tecnológicas (lenguaje, SO, persistencia, concurrencia) y descompone el trabajo en subsistemas para equipos paralelos. Es central al final de la **Elaboración** (para estabilizar la arquitectura) e inicio de la **Construcción** (`Powers, pág. 195`).

| Aspecto | Modelo de análisis (`14-flujos-de-trabajo.pdf, pág. 12`, Tabla 9.1) | Modelo de diseño |
|---|---|---|
| **Naturaleza** | Conceptual (abstracción, genérico respecto al diseño) | Físico (**plano de la implementación**, específico del lenguaje/entorno) |
| **Estereotipos de clase** | 3 estereotipos conceptuales (Frontera/Interfaz, Control, Entidad) | Cualquier estereotipo físico del lenguaje |
| **Formalidad y costo** | Menos formal, menos capas, más barato (**ratio 1:5**) | Más formal, más capas, más costoso (**ratio 5:1**) |
| **Operaciones e interfaces** | Atributos y responsabilidades, **sin métodos**; sin visibilidad | **Visibilidad**, tipos del lenguaje, **todas las operaciones** e **interfaces** explícitas (`Powers, págs. 193, 196, 208`) |
| **Interacciones** | No muy centrado en secuencias (**diagrama de comunicación**) | Muy centrado en secuencias (**diagrama de secuencia**; `Powers, pág. 197`) |
| **Mantenimiento** | Puede no mantenerse todo el ciclo de vida | **Debe mantenerse y actualizarse** durante todo el proyecto (`Powers, págs. 193, 195`) |

### Trabajadores y artefactos del diseño

Siguen participando exactamente **los mismos tres trabajadores**, pero cambian casi todos los artefactos (`Powers, pág. 194`; `14-flujos-de-trabajo.pdf, pág. 13`, Fig. 9.1):

| Trabajador | Artefactos bajo su responsabilidad |
|---|---|
| **Arquitecto** | **Modelo de diseño** (sistema de diseño en capas/subsistemas), **Modelo de despliegue** y **Descripción de la arquitectura** (vistas de diseño y de despliegue; `Powers, págs. 201–202`) |
| **Ingeniero de casos de uso** | **Realización de caso de uso – diseño** (flujo de sucesos, diagramas de clases de diseño, diagramas de secuencia, requisitos de implementación; `Powers, págs. 197–198, 280`) |
| **Ingeniero de componentes** | **Clase del diseño**, **Subsistema de diseño** (organizado para lograr **bajo acoplamiento y alta cohesión**, incluyendo subsistemas de servicio y encapsulado de sistemas heredados; `Powers, págs. 199–200`) e **Interfaz** |

Claves de examen del diseño (`Powers, págs. 199–202, 282–283`):

- **Interfaz**: clasificador que fija límites contractuales (no confundir con la clase estereotipo frontera del análisis) y permite sustituir un subsistema por otro con la misma interfaz; en la vista de diseño suelen mostrarse todas las interfaces (`Powers, págs. 193, 200`).
- **Modelo de despliegue**: usa diagramas de despliegue con **nodos** (recursos de cómputo/hardware), conexiones de red y asignación de procesos/componentes; se plantea en diseño y se refina en implementación, y **va casi completo en la descripción de la arquitectura** (`Powers, págs. 201–202, 224`).
- **Capas típicas del modelo de diseño** (`Powers, págs. 282–283`, Figs. 9.19 y 9.24): capa específica de la aplicación, capa general de la aplicación, capa intermedia y capa de software del sistema.

### Flujo de trabajo del diseño (Fig. 9.16)

| Orden | Actividad | Trabajador | Qué produce (`Powers, págs. 204–213`; `14-flujos-de-trabajo.pdf, págs. 14–16`) |
|---|---|---|---|
| **1** | **Diseño de la arquitectura** | Arquitecto | Subsistema (esbozado), Interfaz (esbozada), Clase de diseño (esbozada, ej. activas), Modelo de despliegue (esbozado), mecanismos genéricos de diseño (como persistencia) y Descripción de la arquitectura (vistas de diseño y distribución) |
| **2** | **Diseñar un caso de uso** | Ingeniero de casos de uso | Realización de CU – diseño (con traza a la realización de análisis), clases/subsistemas/interfaces participantes esbozados (`Powers, pág. 207`) |
| **3** | **Diseñar una clase** | Ingeniero de componentes | Clase del diseño **completa** (todas sus operaciones, métodos descritos, atributos, relaciones, máquinas de estado si modelan ciclo de vida y cumplimiento de interfaces; `Powers, pág. 208`) |
| **4** | **Diseñar un subsistema** | Ingeniero de componentes | Subsistema e interfaz **terminados**, garantizando independencia, interfaces correctas y realización por sus clases (`Powers, págs. 212–213`) |

## 3. Implementación (5 actividades)

### Propósito y comparación

Centrada en la **codificación** y en producir el **sistema ejecutable** en construcciones (*builds*) incrementales durante la fase de Construcción (`Powers, pág. 214`). *"El modelo de diseño es prácticamente lo que voy a implementar, pero sin el código ni los archivos"* (`Powers, pág. 220`).

> **Trampa de examen frecuente**: **las pruebas unitarias (*realizar prueba de unidad*) pertenecen al flujo de Implementación, NO al flujo de Prueba** (`Powers, págs. 215, 223, 228`).

### Trabajadores y artefactos de la implementación

Aparece un trabajador nuevo —el **Integrador de sistemas**— junto con el Arquitecto y el Ingeniero de componentes (`Powers, pág. 215`; `14-flujos-de-trabajo.pdf, pág. 17`, Fig. 10.1):

| Trabajador | Artefactos bajo su responsabilidad |
|---|---|
| **Arquitecto** | **Modelo de implementación**, **Modelo de despliegue** (refinado) y **Descripción de la arquitectura** (vista de implementación y despliegue) |
| **Integrador de sistemas** *(nuevo)* | **Plan de integración de construcciones** (qué CU/funcionalidad entra en cada *build*; si una construcción falla genera un artefacto de error/defecto; `Powers, pág. 221`) |
| **Ingeniero de componentes** | **Componente** (`UML 1.X`) / **Artefacto** (`UML 2.X`), **Subsistema de implementación** (en correspondencia 1:1 con los subsistemas de diseño; `Powers, pág. 218`) e **Interfaz** (`Powers, pág. 220`) |

Claves de los artefactos (`Powers, pág. 217`):
- **Componente / Artefacto**: empaquetamiento físico de elementos de diseño (`«executable»`, `«file»`, `«library»`, `«table»`, `«document»`) con relación de traza `«trace»` hacia las clases de diseño e igualdad de interfaces.
- **Stub**: componente con implementación esquelética o de propósito especial usado para desarrollar o probar otro componente que depende de él y simplificar las integraciones incrementales (`Powers, pág. 217`).

### Flujo de trabajo de la implementación (Fig. 10.16)

El orden operativo real explicado en clase (`Powers, pág. 223`): **primero se planifica la construcción, luego se implementa, después se hace prueba unitaria y recién ahí se integra**. En arquitecturas en capas se integran primero las inferiores (`Powers, pág. 225`):

| Orden | Actividad | Trabajador | Qué produce (`Powers, págs. 223–229`; `14-flujos-de-trabajo.pdf, págs. 18–20`) |
|---|---|---|---|
| **1** | **Implementación de la arquitectura** | Arquitecto | Componentes principales esbozados y mapeados sobre nodos del modelo de despliegue + vistas arquitectónicas (`Powers, págs. 223–224`) |
| **2** | **Integrar el sistema** | Integrador de sistemas | **Plan de integración de construcciones** y el Modelo de implementación de cada *build* integrado (`Powers, págs. 224–225`) |
| **3** | **Implementar un subsistema** | Ingeniero de componentes | Subsistema e interfaz implementados para la construcción actual (`Powers, pág. 226`) |
| **4** | **Implementar una clase** | Ingeniero de componentes *(actúa como programador)* | Componente implementado (ficheros fuente con operaciones codificadas desde la clase de diseño; `Powers, pág. 227`) |
| **5** | **Realizar prueba de unidad** | Ingeniero de componentes | Componente con **unidades probadas** de forma aislada (`Powers, pág. 228`): prueba de **especificación o caja negra** (la más común; usa **clases de equivalencia** derivadas de CU) y prueba de **estructura o caja blanca** (inspecciona código interno; más costosa; `Powers, págs. 228–229`) |

## 4. Prueba (6 actividades)

### Propósito y alcance en el ciclo

Verifica que el sistema integrado cumple todos los requisitos más allá de las pruebas unitarias, centrándose en las dos grandes pruebas: **integración** (basada en el plan de integración, no tan atada a CU) y **sistema** (interacción global usuario-sistema, fuertemente atada a CU) (`Powers, págs. 230, 239`). Acompaña Elaboración, Construcción y alcanza su mayor peso en **Transición** (`Powers, pág. 230`).

### Trabajadores y artefactos de la prueba

**Desaparece el Arquitecto** y **no se reutiliza ningún artefacto de los flujos anteriores**: salvo el Ingeniero de componentes, todos los roles y artefactos son nuevos (`Powers, pág. 232`; `14-flujos-de-trabajo.pdf, pág. 21`, Fig. 11.1):

| Trabajador | Artefactos bajo su responsabilidad (`Powers, págs. 232–239`) |
|---|---|
| **Diseñador / Ingeniero de pruebas** *(sinónimos en el libro; `Powers, pág. 238`)* | **Modelo de pruebas**, **Plan de prueba**, **Caso de prueba** (especifica entrada, resultado esperado y condiciones; puede haber muchos por CU; traza al **caso de uso** para la prueba de **caja negra** o a la **realización de CU – diseño** para la de **caja blanca**, `Powers, pág. 285`), **Procedimiento de prueba** (receta paso a paso reutilizable para varios casos de prueba) y **Evaluación de prueba** |
| **Ingeniero de componentes** | **Componente de prueba** (**automatiza** procedimientos y casos; las unitarias son las más automatizables y las de usabilidad las menos; `Powers, pág. 237`) |
| **Ingeniero de pruebas de integración** | **Defecto** (detectado al probar componentes combinados según el plan de integración) |
| **Ingeniero de pruebas de sistema** | **Defecto** (detectado al probar interacción completa según CU) |

### Flujo de trabajo de la prueba (Fig. 11.8)

| Orden | Actividad | Trabajador | Clave de clase y resultado (`Powers, págs. 240–247`; `14-flujos-de-trabajo.pdf, págs. 22–25`) |
|---|---|---|---|
| **1** | **Planear la prueba** | Ingeniero / Diseñador de pruebas | **Plan de prueba** (asigna recursos, prioridades y estrategia eficiente sin probar todo; `Powers, pág. 241`) |
| **2** | **Diseñar la prueba** | Ingeniero / Diseñador de pruebas | **Caso de prueba** y **Procedimiento de prueba** (cubre pruebas de integración, de sistema con carga/HW/CU concurrentes y **regresión** para casos estables que convenga re-ejecutar ante cambios; `Powers, págs. 242–243`) |
| **3** | **Implementar la prueba** | Ingeniero de componentes | **Componente de prueba** que automatiza los procedimientos (`Powers, pág. 244`) |
| **4** | **Efectuar prueba de integración** | Ingeniero de pruebas de integración | **Defecto** (verifica construcciones combinadas según el plan de integración; `Powers, pág. 245`) |
| **5** | **Realizar prueba del sistema** | Ingeniero de pruebas de sistema | **Defecto** (verifica el sistema completo frente a requisitos y CU; `Powers, pág. 245`) |
| **6** | **Evaluar la prueba** | Ingeniero / Diseñador de pruebas | **Evaluación de prueba** de la iteración, contrastando plan y tendencia de defectos bajo dos criterios centrales: **completitud** y **fiabilidad** (`Powers, págs. 246–247`) |

## Trazabilidad y realización de casos de uso a través de los flujos

Los casos de uso articulan el paso de un flujo a otro (`Powers, págs. 274–280`; `14-flujos-de-trabajo.pdf, pág. 1`):
1. En **Requisitos**, el caso de uso describe externamente **qué** interactúa con los actores.
2. En **Análisis**, la **Realización de CU – análisis** (`«trace»`) distribuye ese comportamiento entre clases estereotipadas (`frontera`, `control`, `entidad`) usando **diagramas de comunicación** y flujo de eventos-análisis.
3. En **Diseño**, la **Realización de CU – diseño** (`«trace»`) refina la interacción con clases físicas, subsistemas, interfaces y **diagramas de secuencia**.
4. En **Implementación**, las clases y subsistemas trazan (`«trace»`) a componentes físicos organizados en el **plan de integración** por casos de uso.
5. En **Prueba**, los **casos de prueba** trazan directamente a los escenarios de los casos de uso para comprobar el sistema integrado.

## Lo que preguntó la cátedra

Afirmaciones de los parciales 2024 y de las simulaciones del aula (IE3 2024), con la respuesta oficial:

- **Realización de CU – análisis** (`2do recu parcial Teoria 2024, P7`): **es una colaboración dentro del modelo de análisis** y **tiene traza directa con el modelo de casos de uso**. Falso: que se prefieran diagramas de secuencia y que el diagrama de clases de análisis incluya subsistemas.
- **Realización de CU – diseño** (`Segundo Parcial Teoria 2024, P12`): **puede trazar directo al modelo de casos de uso si no hay modelo de análisis** y **el diagrama de secuencia puede incluir subsistemas participantes**. Falso: que una clase de diseño sea exclusiva de una realización y que el flujo de eventos–diseño no deba nombrar objetos.
- **Diseñar un caso de uso** (`Simulación Parcial 2 ndfvjsnvk (IE3), P3`): identifica las clases de diseño participantes **a partir de las clases de análisis** y a veces conviene hacerlo **en términos de subsistemas y sus interfaces**. La realización de CU – diseño no es su único artefacto.
- **Clase de análisis** (`Simulación Parcial 2 (IE3), P5`): **siempre** es frontera, control o entidad, y su comportamiento se define por **responsabilidades** de nivel alto y poco formal; navegabilidad y tipos del lenguaje son de diseño. **Clase de diseño** (P2): atributos **en términos del lenguaje** y relaciones con un significado sencillo al implementarse; **no** está atada a los tres estereotipos.
- **Lo que NO es el modelo de análisis** (`Simulación ndfvjsnvk, P11`): "descrito en el lenguaje del cliente" y "puede contener redundancias" (eso es el modelo de casos de uso). **Lo que NO es el modelo de diseño** (P9): "menos formal que el de análisis" y "dinámico pero no muy centrado en la secuencia" (eso es análisis).
- **Modelo de implementación** (`Simulación Parcial 2 (IE3), P18`): **prueba unitariamente los componentes y los integra en ejecutables** y **asigna componentes ejecutables a nodos del modelo de despliegue**. Las pruebas de integración y de sistema son de Prueba; la línea base de la arquitectura, de Elaboración.
- **Prueba** (`Simulación ndfvjsnvk, P4`): **un componente de prueba automatiza procedimientos de prueba** y, según la respuesta oficial, **los casos de caja blanca se derivan de los casos de uso** (a través de su realización). Un defecto **no** es una evaluación de la prueba: la evaluación es otro artefacto.
- **Responsabilidades por trabajador**: el **Ingeniero de componentes** define y mantiene operaciones, métodos, atributos y relaciones de las clases de diseño y el código fuente de los componentes (`Segundo Parcial Teoria 2024, P5`). El **Ingeniero de casos de uso** responde por la integridad de las realizaciones de CU, por que sus descripciones y diagramas sean legibles y por **el análisis y el diseño** del caso de uso (`2do recu parcial Teoria 2024, P1`; ahí se marcó sólo 1 de las 3 correctas).
- **Completar el diagrama del flujo** (`2do recu parcial Teoria 2024, P6`): en Diseño, el hueco del Ingeniero de componentes después de "Diseñar una clase" es **Diseñar un subsistema**, no "Diseñar interfaces".

## Dónde me equivoco

_Sin errores registrados todavía._

## Ver también

- [Proceso Unificado (PUDS)](proceso-unificado.md): visión general, 3 características innegociables, 4 fases y 4P+H.
- [Captura de requisitos en el PU](captura-de-requisitos-en-el-pu.md): convenciones de la cátedra para realizar casos de uso y actividades de requisitos.
- [Arquitectura de software y diseño arquitectónico](arquitectura-de-software.md): vistas 4+1 de Kruchten adoptadas por el PU.

