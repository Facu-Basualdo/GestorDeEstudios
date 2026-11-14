# Análisis de exámenes — Diseño de Sistemas de Información
[← Índice Diseño de Sistemas](../INDICE.md)

Análisis armado con los **10 archivos** extraídos de `material/parcial-2/` (2 parciales reales 2024 en Moodle, 2 simulaciones del aula IE3 2024, 1 apunte colaborativo 2023 con reconstrucción de parcial/recuperatorio y guía pre-parcial, y 5 bancos de preguntas armados por estudiantes). Los cuestionarios semanales 8–11 de Faro (74 preguntas ya cargadas en las notas) y sus originales en el Simulacro HTML completan la muestra.

## Inventario de fuentes analizadas

| Archivo | Tipo | Preguntas extraídas | Alcance respecto del IE5 (2026-11-18) |
|---|---|---|---|
| `Segundo Parcial Teoria 2024.docx` | **Examen de la cátedra** | **16** | 12 de IE5 + 4 residuales de UI / Diseño Estructurado |
| `2do recu parcial Teoria 2024.docx` | **Examen de la cátedra** | **16** | 12 de IE5 + 4 residuales de UI / Diseño Estructurado |
| `Copia de Simulación Parcial 2 (IE3)_ Revisión del intento (1).pdf` | **Simulación del aula** | **20** | 17 de IE5 + 3 residuales de E/S / UX |
| `Copia de Simulación Parcial 2 ndfvjsnvk (IE3)_ Revisión del intento (1).pdf` | **Simulación del aula** | **20** | 14 de IE5 + 6 residuales de E/S / GUI / Diseño Estructurado |
| `Copia de Apunte y preguntas parcial 2023.pdf` | **Banco armado por estudiantes** *(incluye reconstrucción de examen 14/06/2023 + capturas Moodle recu 16/08/2023)* | **122+** *(18 parcial + 18 recu + 74 guía pre-parcial + 12 recu + preguntas de clase)* | Viejo 1º Parcial 2023 (E/S, GUI/Web, Metodologías, POO, UML, estereotipos) |
| `preguntas multiple choice.docx` | **Banco armado por estudiantes** | **30** | Práctica generada sobre PUDS (7), Arquitectura (5), CU/Requisitos (6), Análisis-Diseño (5) y GoF (7) |
| `Preguntas Patrones GOF.docx` | **Banco armado por estudiantes** | **19** | Identificación de patrón GoF a partir de diagrama UML (Refactoring.Guru) |
| `preguntas de los diagramas.docx` | **Banco armado por estudiantes** | **27** | Trabajadores y actividades ocultos de los 5 flujos PUDS (6+5+4+5+7) |
| `Simulacro DSI (preguntas viejas y nuevas).html` | **Banco armado por estudiantes** | **198** *(94 originales + 104 generadas)* | Bloques SOLID (12), GRASP (16), Arquitectura (25), Distribuidos (16), PUDS (21+19), GoF (27), Ágil/XP (16), Figuras (19), Diagramas PUDS (27) |
| `quizzis (preguntas de cuest y parciales).docx` | **Banco armado por estudiantes** | **0** *(enlace externo a Wayground)* | Sin preguntas embebidas; inaccesible offline / detrás de pago |

## Formato y extensión de los parciales de teoría

- **Cantidad de preguntas:**
  - **Parciales reales 2024** (`Segundo Parcial Teoria 2024` y `2do recu parcial Teoria 2024`): **16 preguntas** en Moodle (cada una vale ~6 o 7 puntos sobre 100). En 2024 convivían ~12 preguntas del núcleo PUDS/Arquitectura/GoF/Ágil-XP con ~4 de UI/Diseño Estructurado; en el **IE5 2026** salen UI/Diseño Estructurado y entran **Calidad** y **Seguridad** además de ser acumulativo con **SOLID/GRASP**.
  - **Simulaciones del aula (IE3 2024)**: **20 preguntas** c/u a 5 puntos (100 puntos totales, resueltas en ~8–9 minutos en los intentos capturados).
  - **Exámenes 2023 (parcial y recuperatorio del plan anterior)**: **18 preguntas** c/u en Moodle (5 a 8 puntos c/u).
- **Modalidad de las preguntas en Moodle:**
  - **Opción múltiple con varias respuestas correctas ("¿Cuál/es...?", "Seleccione una o más", "Marque las afirmaciones verdaderas"):** es el **formato dominante** (~55–65 % de las preguntas en los parciales 2024 y simulaciones). Moodle otorga puntaje parcial proporcional por cada opción correcta marcada y penaliza opciones incorrectas (por eso varios ítems quedan con 3,00/6,00 o 2,50/5,00).
  - **Opción múltiple de respuesta única con análisis aplicado:** casos reales para clasificar estilo (Eclipse → Microkernel), código para evaluar refactorización a un patrón (C# → State en 2024 P2), o diagramas UML/arquitectura para identificar patrón/estructura (Strategy Duck, Microservicios, secuencia UML, asociación calificada).
  - **Completar diagramas de flujo del PUDS:** aparece en **los dos parciales reales de 2024** (flujo de Requisitos con 7 huecos en Parcial P3; flujo de Diseño con 5 huecos en Recu P6) mediante desplegables sobre el diagrama oficial de trabajadores y actividades.
  - **Emparejamiento (*matching*) y completar huecos de texto:** emparejar trabajadores con actividades del flujo de Análisis (Sim A P1), clasificar actividades comunes vs. transversales de Pressman (Recu 2023 P2), completar texto con palabras clave (Recu 2023 P6 y P7).
  - **Verdadero / Falso y desarrollo abierto:** **no aparecen preguntas de desarrollo escrito** en ninguno de los exámenes de la cátedra revisados (toda la corrección es automática en Moodle); V/F puro sólo aparece en bancos armados por estudiantes (p. ej. 2023 pág. 184).

## Detalle de preguntas por modelo de la cátedra y simulaciones

### Parcial real 2024 (`Segundo Parcial Teoria 2024.docx`, 16 preguntas)

| # | Tema (IE5) | Modalidad | Qué preguntó exactamente |
|---|---|---|---|
| P1 | *(Residual UI)* | Única | Manipulación directa de fuerza media (pantalla táctil) |
| P2 | Patrones comportamiento (State) | Varias + código C# | Código `UserAccount` con `if/else` de estados → beneficios de aplicar State |
| P3 | Captura de requisitos PU | Diagrama (7 huecos) | Trabajadores y actividades del flujo de Requisitos (completo) |
| P4 | Manifiesto ágil | Varias | Valores/principios del Manifiesto Ágil vs. distractores clásicos |
| P5 | PUDS / Diseño e Impl. | Varias | Responsabilidades del Ingeniero de Componentes a lo largo del PUDS |
| P6 | Fundamentos GoF + Comportamiento | Varias | Patrones de categoría **De Comportamiento** y alcance **Clase** (`Template Method`, `Interpreter`) |
| P7 | *(Residual Estructurado)* | Única | Relación alcance de efecto dentro de alcance de control |
| P8 | *(Residual E/S)* | Única | Sesgo al establecer límites para valores reportados |
| P9 | Arquitectura de software (Bass) | Varias | Preguntas de **estructuras de asignación (allocation)** |
| P10 | PUDS (Fases) | Varias | Actividades generales de la **fase de inicio** |
| P11 | Programación Extrema (XP) | Varias (negativa) | Cuáles **NO son** actividades de XP (`Analizar`, `Planificar`) |
| P12 | Flujos del PU (Diseño) | Varias | Realización de Casos de Uso - Diseño (traza directa sin Análisis; incluye subsistemas en secuencia) |
| P13 | Estilos arquitectónicos | Única + caso | Caso **Eclipse** (sistema central + plugins) → **Microkernel** |
| P14 | PUDS (Características) | Varias | Por qué el PUDS es **centrado en la arquitectura** |
| P15 | *(Residual GUI)* | Única + imagen | Ventana UAC Windows → Modal de Sistema |
| P16 | Patrones estructurales (Facade) | Varias | Situaciones para aplicar **Fachada** (interfaz simple + crear capas de subsistemas) |

### Recuperatorio 2024 (`2do recu parcial Teoria 2024.docx`, 16 preguntas)

| # | Tema (IE5) | Modalidad | Qué preguntó exactamente |
|---|---|---|---|
| P1 | PUDS / Requisitos-Análisis-Diseño | Varias | Responsabilidades del **Ingeniero de casos de uso** a lo largo del PUDS |
| P2 | Patrones comportamiento (Observer) | Varias + casos | Situaciones adecuadas para **Observer** (multijugador + notificaciones) |
| P3 | Fundamentos GoF + Estructurales | Varias | Patrones **Estructural** y alcance **Objeto** (`Adapter`, `Composite`) |
| P4 | PUDS (Fases) | Varias | Entregables clave de la **fase de Construcción** (ejecutable inicial + descripción arquitectura actualizada) |
| P5 | *(Residual GUI)* | Varias | Principios de accesibilidad en GUI |
| P6 | Flujos del PU (Diseño) | Diagrama (5 huecos) | Trabajadores y actividades del **flujo de Diseño** (faltó `Diseñar un subsistema`) |
| P7 | Flujos del PU (Análisis) | Varias | Realización de Casos de Uso - Análisis (colaboración en modelo de análisis + traza directa) |
| P8 | Sistemas distribuidos | Varias | Arquitectura Cliente-Servidor (procesos en misma/distinta máquina, con/sin estado, descubrimiento) |
| P9 | *(Residual E/S)* | Varias + imágenes | Partes de una factura en Diagrama de Warnier |
| P10 | Arquitectura de software (Bass) | Varias | Preguntas de **estructuras de componentes y conectores** |
| P11 | Manifiesto ágil | Varias | Principios del Manifiesto Ágil (entrega frecuente + negocio/devs juntos diariamente) |
| P12 | PUDS (Ciclo de vida) | Varias | Afirmaciones verdaderas del ciclo de vida del PUDS (4 fases por ciclo, termina en release, serie de ciclos) |
| P13 | *(Residual UX)* | Varias | UX según ISO 9241-210:2010 |
| P14 | Patrones estructurales (Proxy) | Varias | Situaciones de uso de **Proxy** (control de acceso, carga perezosa, remoto) |
| P15 | *(Residual Estructurado)* | Varias + diagrama | Diagrama de estructura jerárquica, fan-out, flujo de control |
| P16 | Programación Extrema (XP) | Varias | Criterios de diseño correcto en XP en un momento dado (corre todas las pruebas + declara intenciones + simple) |

### Simulaciones del aula IE3 (`Simulación Parcial 2` A y B, 20 preguntas c/u)

- **Simulación A (20 preguntas; 17 IE5 + 3 UI/UX/E/S):** P1 Emparejar trabajadores flujo Análisis · P2 Clase de Diseño · P3 Definición de modificabilidad (Atributos de calidad) · P4 Diagrama Microservicios · P5 Clase de Análisis · P8 Definición de patrón GoF · P9 Foco fase de Elaboración · P10 Arquitectura en capas · P11 Artefactos que NO son de Captura de Requisitos · P12 Ventajas distribuidos (Sommerville) · P13 Situaciones que NO son de Observer (punteando a Template Method como distractor) · P15 Modelo de negocios · P16 Razón enfoque iterativo e incremental · P17 Secciones que NO son del formato GoF (`Contexto`, `Pautas`) · P18 Afirmaciones sobre Modelo de Implementación · P20 Creacional + Objeto (`Prototype`, `Singleton`). Residuales: P6 UX, P7 sesgos salida, P14 atributos informe impreso, P19 regla de oro cierre.
- **Simulación B (20 preguntas; 14 IE5 + 6 UI/UX/E/S/Estructurado):** P2 Estructuras Bass (`Módulos`) · P3 Actividad `Diseñar caso de uso` · P4 Disciplina de Prueba (`caja blanca desde CU`? / `componente de prueba automatiza procedimientos`) · P5 Refactoring (estructura interna sin alterar externo + legible) · P6 Maestro-esclavo (nodo maestro) · P7 Intención de Adapter · P8 Diagrama UML **Strategy** (`Duck` + `FlyBehavior` + `QuackBehavior`) · P9 Qué NO es del Modelo de Diseño · P10 Papel de TDD en XP · P11 Qué NO es del Modelo de Análisis · P12 Propósito de un hito en PUDS · P13 Architectural Spike en XP · P17 Arquitectura de software (abstracción + RF no la definen). Residuales: P1, P14, P15, P16, P18, P19, P20.

## Frecuencia por tema y ajuste de peso en `temas.md`

Conteo de apariciones directas en los **4 modelos recientes de Moodle** (Parcial 2024, Recu 2024, Simulación A, Simulación B) y presencia en los bancos de preguntas/cuestionarios:

| Tema (`temas.md`) | Parcial 2024 | Recu 2024 | Sim A | Sim B | Total 4 modelos | Bancos / Cuestionarios / 2023 | Peso anterior → nuevo |
|---|---|---|---|---|---|---|---|
| Análisis, diseño, implementación y prueba en el PU | P5, P12 (parte) | P6, P7 | P1, P2, P5, P18 | P3, P4, P9, P11 | **11 preg. (4/4 modelos)** | 21 ítems Diagramas PUDS; 7 en Sim/Cuest | `2 → 3` |
| Proceso Unificado: visión general, fases, hitos, disciplinas | P5, P10, P14 | P1, P4, P12 | P9, P16 | P12 | **9 preg. (4/4 modelos)** | 5 orig. PUDS Intro; 4 en MC | `2 → 3` |
| Patrones de comportamiento | P2, P6 | P2 | P13 | P8 | **5 preg. (4/4 modelos)** | 7 figuras GoF; Cuest. GoF I/II | `2 → 3` |
| Patrones estructurales | P16 | P3, P14 | — | P7 | **4 preg. (3/4 modelos)** | 6 figuras GoF; Cuest. GoF I/II | `2 → 3` |
| Importancia de la arquitectura y diseño arquitectónico | P9 | P10 | — | P2, P17 | **4 preg. (3/4 modelos)** | Cuest. Arq II; 3 en MC; señal explícita en clase | `2 → 3` |
| Arquitecturas de sistemas distribuidos | — | P8 | P4, P12 | P6 | **4 preg. (3/4 modelos)** | 3 orig. Distribuidos; MC #12 | `2` *(sin cambio)* |
| Programación Extrema (XP) | P11 | P16 | — | P5, P10, P13 | **5 preg. (3/4 modelos)** | Cuestionario 10–11 | `2` *(sin cambio)* |
| Captura de requisitos en el PU | P3 (7 huecos) | P1 (parte) | P11, P15 | — | **4 preg. (3/4 modelos)** | 6 ítems Diagramas; 6 en MC; Cuest. Fases #1–3 | `2` *(sin cambio)* |
| Fundamentos de patrones de diseño (GoF) | P6 (parte) | P3 (parte) | P8, P17, P20 (parte) | — | **5 aparic. (3/4 modelos)** | Cuest. GoF I (`formato`, `clasificación`) | `2` *(sin cambio)* |
| Manifiesto ágil y métodos ágiles vs. clásicos | P4 | P11 | — | — | **2 preg. (2/2 reales)** | Cuestionario 8 (en nota) | `2` *(sin cambio)* |
| Estilos arquitectónicos | P13 | — | P10 | — | **2 preg. (2/4 modelos)** | Cuest. Arq II; MC #8 | `2` *(sin cambio)* |
| Patrones creacionales | — | — | P20 | — | **1 preg. (1/4 modelos)** | 3 figuras GoF; Cuest. GoF I/II; MC #24, #27 | `2` *(sin cambio)* |
| Elegir y diagramar los 9 patrones del resumen | P2 (código) | — | — | P8 (diagrama) | **2 preg. (2/4 modelos)** | 19 figuras Refactoring.Guru; MC #24–30 | `2` *(sin cambio)* |
| Atributos de calidad y tácticas (Bass) | — | — | P3 (Modif.) | — | **1 preg. (1/4 modelos)** | MC #10; 3 señales en Powers pp. 46–61 | `2` *(sin cambio)* |
| Principios SOLID | — | — | — | — | **0** *(IE3 2026)* | 4 orig. en Cuest. 10–11 (Faro) | `2` *(acumulativo)* |
| Principios GRASP | — | — | — | — | **0** *(IE3 2026)* | 4 orig. en Cuest. 9; estereotipos en 2023 | `2` *(acumulativo)* |
| Principios de diseño OO (GoF, Larman) | — | — | — | — | **0** *(POO básico en 2023)* | 0 directas de GoF cap. 1 | `2 → 1` |
| Modelado Ágil (AM) | — | — | — | — | **0** | 0 (`Eval: dudoso` en `temas.md`) | `1` *(sin cambio)* |
| Calidad de software | — | — | — | — | **0** *(nuevo IE5 2026)* | Señal en Powers (ISO 25010 p. 349) | `2` *(tema oficial IE5)* |
| Seguridad de software | — | — | — | — | **0** *(nuevo IE5 2026)* | Agregado 2026 en Powers pp. 365–376 | `2` *(tema oficial IE5)* |

## Errores reales observados en exámenes y simulaciones

Patrones de fallo concretos extraídos de los intentos corregidos en 2024, las simulaciones y `preguntas multiple choice`:

1. **Mezclar estructuras de Bass entre sí (2024 Parcial P9 y Recu P10):** en P9 marcó herencia (estructura de módulos) como si fuera de asignación; en P10 marcó "en qué procesador se ejecuta" (asignación) como si fuera de componentes y conectores.
2. **Actividades de XP vs. proceso clásico (2024 Parcial P11):** no reconoció que **Analizar** y **Planificar** NO están entre las 4 actividades de XP (Codificar, Probar, Escuchar, Diseñar).
3. **Tabla Categoría × Alcance de GoF (2024 Parcial P6 y Recu P3):** faltó marcar `Template Method` junto a `Interpreter` en Comportamiento+Clase, y `Adapter` junto a `Composite` en Estructural+Objeto.
4. **Inversión Modelo de Análisis vs. Modelo de Diseño (2024 Parcial P12, Sim A P2/P5, Sim B P9):** atribuyó clases de diseño exclusivas por CU (cuando son compartidas), olvidó que el diseño de CU puede diagramarse con **subsistemas participantes** y olvidó que si no existe modelo de análisis el diseño tiene **traza directa** con el modelo de casos de uso.
5. **Trabajadores y actividades finas de los flujos PUDS (2024 Recu P1, Recu P6, Sim A P1):** en Diseño P6 confundió `Diseñar un subsistema` con `Diseñar interfaces`; en Requisitos/Diseño dejó responsabilidades sin marcar del Ingeniero de casos de uso; en Sim A P1 falló con `Ingeniero de Casos de uso → Analizar los casos de uso`.
6. **Fase de Inicio vs. Elaboración en PUDS (2024 Parcial P10):** marcó "80% de requisitos" (Elaboración) como si fuera de la fase de Inicio, y omitió "demostrar a usuarios/clientes que el sistema resuelve el problema".
7. **Pruebas y artefactos de XP / PU (Sim B P4 y P13):** confundió defecto vs. evaluación de prueba; creyó que el Architectural Spike retrasa decisiones en lugar de resolver incertidumbres técnicas y probar enfoques alternativos.
8. **Distinción fina en `preguntas multiple choice` (6 errores de 30):** trabajador como "stakeholder" en vez de "rol abstracto" (#2), requisitos adicionales como "restricciones" (#6), estilo arquitectónico sin recordar "vocabulario de componentes y conectores" (#8), SOA (#12), actores como "roles del negocio" (#15) y Vista de desarrollo vs. física (#22).

## Patrones recurrentes entre parciales y cuestionarios

- **La cátedra evalúa en negativo y por omisión:** casi todas las preguntas tienen formato *"Seleccione una o más"* y mezclan definiciones textuales de las diapositivas o libros (Bass, Jacobsson/PUDS, GoF, Beck/XP, Manifiesto Ágil) con 1 o 2 distractores verosímiles sacados de otro concepto hermano.
- **Los diagramas PUDS completos y las responsabilidades de cada trabajador** se preguntan tanto rellenando el diagrama oficial (2024 Parcial P3, 2024 Recu P6) como en formato conceptual/matching (2024 Parcial P5, Recu P1/P7/P12, Sim A P1, Sim B P3).
- **GoF nunca se queda en el nombre:** exigen saber (a) la matriz Categoría × Alcance, (b) el formato oficial de GoF sin confundirlo con Refactoring.Guru (`Contexto` y `Pautas` NO son secciones del formato GoF), (c) cuándo aplicarlo con foco en situaciones de uso textuales de GoF (`Facade` crear capas; `Proxy` remoto/virtual/protección; `Observer` notificación desacoplada), y (d) reconocer código C# o diagramas UML.
- **Residuales eliminados vs. temas nuevos del IE5 2026:** las preguntas de E/S, GUI/Web y Diseño Estructurado que todavía figuraban en 2024 (4 por examen) salen del IE5 teórico 2026, mientras entran **Calidad de software** (ISO 25010, costos, revisiones, SQA/SQC) y **Seguridad de software** (CIA, amenaza/vulnerabilidad/ataque/riesgo, STRIDE, OWASP, tácticas Bass cap. 11).

## Confusiones probables (IE5)

Sin modelos del IE5, estas son las confusiones que el temario hace esperables. Sirven de
distractores en los cuestionarios (ver [plan del IE5](../../../docs/diseno-ie5.md)):

- SRP vs. Alta cohesión · Bajo acoplamiento vs. DIP · OCP vs. Variaciones protegidas.
- Adapter vs. Facade vs. Proxy · Strategy vs. State · Factory Method vs. Abstract Factory.
- Fases del PUDS (inicio, elaboración, construcción, transición) vs. flujos de trabajo
  (requisitos, análisis, diseño, implementación, prueba) · modelo de análisis vs. de diseño.
- Cliente-servidor de 2 niveles vs. multinivel · SOA vs. microservicios · estilo vs. táctica.
- Procesos predecibles vs. adaptables · valores vs. principios vs. prácticas de XP.
- Aseguramiento (SQA) vs. control de calidad · revisión técnica formal vs. informal.
- Amenaza vs. vulnerabilidad vs. ataque vs. riesgo · confidencialidad vs. integridad vs.
  disponibilidad · las seis categorías de STRIDE entre sí.
