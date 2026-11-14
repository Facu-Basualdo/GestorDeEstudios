# Diseño de Sistemas de Información — Índice
[← Hub](../../CLAUDE.md)

[Programa](programa.md) · [Temas](temas.md) · [Sesiones](sesiones.md) · [Fuentes](fuentes.md) · [Análisis de exámenes](examenes/analisis.md)

> Próxima fecha: **2026-11-18 · IE5 Fundamentos teóricos** — cuenta para la cursada, **sólo
> teórico**; en la web es el **Parcial 2**. Recuperatorio 2026-12-10. Es **acumulativo**: SOLID,
> GRASP, Arquitectura I y II, PUDS (ahora también los flujos de análisis, diseño, implementación
> y prueba, y la realización de CU), patrones GoF, agilidad y XP, **calidad** y **seguridad**
> (CIA, STRIDE, tácticas, OWASP Top 10). Temario y plan en [docs/diseno-ie5.md](../../docs/diseno-ie5.md).

> **Parcial 1 de la web = IE3** (2026-10-21, "2º parcial" de la cátedra; recuperatorio 2026-11-11). Entraron (aula virtual): **SOLID, GRASP, Arquitectura I** (importancia, diseño
> arquitectónico, capas, repositorio, tuberías y filtros, microkernel), **Arquitectura II**
> (sistemas distribuidos) y **PUDS I y II** (visión general, fases, hitos, disciplinas, captura
> de requisitos). Lo ágil **no** está en la lista. Patrones GoF: según el estudiante (2026-10-21)
> entran los 9 del resumen de Gaona → [Elegir y diagramar patrones](notas/elegir-y-diagramar-patrones.md).
> TPI: entrega 04/11, defensa 25/11 y 02/12. Todas las instancias en el [programa](programa.md#Instancias%20de%20evaluación).

> Las notas salen del **export de Faro IA** (conceptos extraídos de los PDFs de la cátedra,
> con documento y página: ver [fuentes](fuentes.md)). Desde el 2026-09-28 también hay notebook de
> NotebookLM ("diseño de sistemas"), con 6 fuentes que Faro no tenía. Las preguntas marcadas *(cátedra)* son de los cuestionarios semanales.
> Para practicar: [web de estudio](../../web/README.md).

## Unidad 3 — Modelado y diseño orientado a objetos

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Principios SOLID](notas/principios-solid.md) | 2 | **2º parcial**. Enunciado de cada principio y su ejemplo (correo, EditorGrafico, cuadrado, ITrabajador, House) · los distractores son los otros principios · **IE5:** no llevar SRP a clases de 1 línea, ISP diseña interfaces chicas (no es Adapter) |
| [Patrones GRASP y UML](notas/patrones-grasp.md) | 2 | **2º parcial**. Experto, Creador, Controlador, Bajo acoplamiento, Alta cohesión, Polimorfismo, Fabricación pura, Indirección, Variaciones protegidas · cuándo aplica cada uno · realización de CU (Guía de TP N° 6) · **IE5:** 3 grupos (asignar/evaluar/contener), Creador ≠ constructor, herencia acopla |
| [Elegir y diagramar los 9 patrones del resumen](notas/elegir-y-diagramar-patrones.md) | 2 | **2º parcial**. Singleton, Factory Method, Abstract Factory, Composite, Facade, Proxy, State, Observer, Iterator (resumen de Gaona) · qué señal del enunciado lleva a cada uno · cómo se dibuja su diagrama |
| [Principios de diseño orientado a objetos](notas/principios-de-diseno-orientado-a-objetos.md) | 1 | Dudoso para el parcial. GoF cap. 1: programar para una interfaz, composición antes que herencia, causas de rediseño |
| [Fundamentos de patrones de diseño](notas/fundamentos-de-patrones-de-diseno.md) | 2 | No está en la lista del 2º parcial. Qué es un patrón, clasificación, caso Lexi · **IE5:** definición GoF, 5 tipos de patrones (incluye organización), formato sin Contexto/Pautas, matriz Categoría × Alcance |
| [Patrones creacionales](notas/patrones-creacionales.md) | 2 | Abstract Factory, Builder, Factory Method, Prototype, Singleton · **IE5:** Factory Method con frameworks/LSP, Singleton constructor privado/protegido, Abstract Factory familias/mundos |
| [Patrones estructurales](notas/patrones-estructurales.md) | 3 | Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy · **IE5:** Adapter clase vs. objeto (4 participantes), Composite uniforme, Facade en capas, 3 tipos de Proxy |
| [Patrones de comportamiento](notas/patrones-de-comportamiento.md) | 3 | Strategy, Observer, State, Command, Template Method, Iterator y el resto · **IE5:** Strategy vs. State y Template Method, State refactoring if/else, Observer, Interpreter |

## Unidad 4 — Arquitecturas de software

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Arquitectura de software y diseño arquitectónico](notas/arquitectura-de-software.md) | 3 | **2º parcial** (4.1). Definición de Bass, por qué importa (13 razones), escalas, qué arquitectura según el atributo prioritario, estructuras, vistas 4+1 · **IE5:** qué entra en Asignación (procesador/archivos) vs. C&C (ejecución) vs. Módulos (herencia); nunca 1 solo diagrama |
| [Atributos de calidad y tácticas](notas/atributos-de-calidad-y-tacticas.md) | 2 | **Parcial 2** (4.1). Escenarios de 6 partes, tácticas vs. patrones, organización según atributo prioritario; modificabilidad (4 preguntas, variantes, tácticas) y rendimiento (demanda y recursos) |
| [Estilos arquitectónicos](notas/estilos-arquitectonicos.md) | 2 | **2º parcial** (4.1). Capas, repositorio/pizarrón, tuberías y filtros, microkernel: cuándo usar cada uno, ventajas y desventajas · **IE5:** Eclipse = Microkernel, Repositorio pasivo vs. Pizarrón activo |
| [Arquitecturas de sistemas distribuidos](notas/arquitecturas-de-sistemas-distribuidos.md) | 2 | **2º parcial** (4.2). Maestro-esclavo, cliente-servidor (2 niveles y multinivel), componentes distribuidos, P2P, SOA, microservicios · **IE5:** maestro coordinador, C-S descubrimiento/estado/procesos, microservicios (Fowler/API Layer) |

## Unidad 5 — Procesos de desarrollo de referencia

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Proceso Unificado (PUDS)](notas/proceso-unificado.md) | 3 | **2º parcial** (5.1). Las 3 características, 4P+H, ciclo–fase–iteración, las 4 fases y sus hitos, disciplinas, trabajador/actividad/artefacto, PU vs. RUP · **IE5:** Inicio vs. Elaboración (~80% reqs + línea base) vs. Construcción, flujo fundamental vs. iteración, Arquitecto |
| [Captura de requisitos en el PU](notas/captura-de-requisitos-en-el-pu.md) | 2 | **2º parcial** (5.1). Lista de características, modelo de negocio vs. de dominio, CU de negocio vs. de sistema, las 5 actividades con su trabajador y sus artefactos · **IE5:** 4 pasos, 5 subtipos de reqs adicionales, rol coordinador del Analista, realización de CU (9 pasos, CRC, acuerdos) |
| [Flujos de análisis, diseño, implementación y prueba en el PU](notas/flujos-de-trabajo-del-pu.md) | 3 | **Parcial 2** (5.1). Conteo 5–4–4–5–6; Análisis (3 estereotipos, sin Analista), Diseño (interfaces, despliegue, ratio 1:5), Implementación (Integrador, artefacto/stub, prueba unitaria va acá), Prueba (sin Arquitecto, integración/sistema, completitud/fiabilidad) |
| [Manifiesto ágil y métodos ágiles vs. clásicos](notas/manifiesto-agil.md) | 2 | Unidad supuesta; no está en el 2º parcial. Cuestionario 8: valores y principios del manifiesto · **IE5:** framework vs. metodología, cherry picking, 6 frameworks clásicos (DSDM, Scrum, XP, FDD, Crystal, ASD), post-agilismo |
| [Programación Extrema (XP)](notas/programacion-extrema.md) | 2 | Unidad supuesta. Valores, prácticas, diseño simple y refactorización · **IE5:** 4 actividades PPED (sin Analizar/Planificar), criterios de diseño simple en un momento dado, Architectural Spike |
| [Modelado Ágil (AM)](notas/modelado-agil.md) | 1 | Unidad supuesta. "Prueba antes del diseño" reemplaza al modelado detallado |

## Unidad 6 — Calidad y seguridad (supuesta)

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Calidad de software](notas/calidad-de-software.md) | 2 | **Parcial 2**. Puntos de vista (TVPUF), diseño vs. conformidad, Glass y Pressman, McCall e ISO 25010, costos de calidad, bugs vs. flaws, 4 pilares, revisiones FTR y métricas, SQA vs. SQC |
| [Seguridad de software](notas/seguridad-de-software.md) | 2 | **Parcial 2**. Tema agregado en 2026: tríada CIA, amenaza/vulnerabilidad/ataque/riesgo, escenario de 6 partes y puntos de despliegue, STRIDE, OWASP Top 10 (2025), 4 familias de tácticas (Bass cap. 11) |

El mapa de estado, pesos y dominio por tema está en [temas.md](temas.md), y la frecuencia en exámenes en [examenes/analisis.md](examenes/analisis.md).
