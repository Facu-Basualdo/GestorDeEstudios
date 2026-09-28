# Diseño de Sistemas de Información — Índice
[← Hub](../../CLAUDE.md)

[Programa](programa.md) · [Temas](temas.md) · [Sesiones](sesiones.md) · [Fuentes](fuentes.md) · [Análisis de exámenes](examenes/analisis.md)

> Próxima fecha: **2026-10-21 · 2º parcial (IE3 Diseño de solución informática)** — cuenta para
> la cursada. Entran (aula virtual): **SOLID, GRASP, Arquitectura I** (importancia, diseño
> arquitectónico, capas, repositorio, tuberías y filtros, microkernel), **Arquitectura II**
> (sistemas distribuidos) y **PUDS I y II** (visión general, fases, hitos, disciplinas, captura
> de requisitos). Patrones GoF y lo ágil **no** están en la lista.
> Antes: **cuestionario 16 (PUDS intro, IE6) cierra el 30/09 a las 13 hs**. Después: TPI 04/11 ·
> IE5 18/11. Todas las instancias en el [programa](programa.md#Instancias%20de%20evaluación).

> Las notas salen del **export de Faro IA** (conceptos extraídos de los PDFs de la cátedra,
> con documento y página: ver [fuentes](fuentes.md)). Desde el 2026-09-28 también hay notebook de
> NotebookLM ("diseño de sistemas"), con 6 fuentes que Faro no tenía. Las preguntas marcadas *(cátedra)* son de los cuestionarios semanales.
> Para practicar: [web de estudio](../../web/README.md).

## Unidad 3 — Modelado y diseño orientado a objetos

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Principios SOLID](notas/principios-solid.md) | 2 | **2º parcial**. Enunciado de cada principio y su ejemplo (correo, EditorGrafico, cuadrado, ITrabajador, House) · los distractores son los otros principios |
| [Patrones GRASP y UML](notas/patrones-grasp.md) | 2 | **2º parcial**. Experto, Creador, Controlador, Bajo acoplamiento, Alta cohesión, Polimorfismo, Fabricación pura, Indirección, Variaciones protegidas · cuándo aplica cada uno · realización de CU (Guía de TP N° 6) |
| [Principios de diseño orientado a objetos](notas/principios-de-diseno-orientado-a-objetos.md) | 1 | Dudoso para el parcial. GoF cap. 1: programar para una interfaz, composición antes que herencia, causas de rediseño |
| [Fundamentos de patrones de diseño](notas/fundamentos-de-patrones-de-diseno.md) | 1 | No está en la lista del 2º parcial. Qué es un patrón, clasificación, caso Lexi |
| [Patrones creacionales](notas/patrones-creacionales.md) | 1 | Abstract Factory, Builder, Factory Method, Prototype, Singleton |
| [Patrones estructurales](notas/patrones-estructurales.md) | 1 | Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy |
| [Patrones de comportamiento](notas/patrones-de-comportamiento.md) | 1 | Strategy, Observer, State, Command, Template Method, Iterator y el resto |

## Unidad 4 — Arquitecturas de software

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Arquitectura de software y diseño arquitectónico](notas/arquitectura-de-software.md) | 2 | **2º parcial** (4.1). Definición de Bass, por qué importa (13 razones), escalas, qué arquitectura según el atributo prioritario, estructuras, vistas 4+1 |
| [Estilos arquitectónicos](notas/estilos-arquitectonicos.md) | 2 | **2º parcial** (4.1). Capas, repositorio/pizarrón, tuberías y filtros, microkernel: cuándo usar cada uno, ventajas y desventajas |
| [Arquitecturas de sistemas distribuidos](notas/arquitecturas-de-sistemas-distribuidos.md) | 2 | **2º parcial** (4.2). Maestro-esclavo, cliente-servidor (2 niveles y multinivel), componentes distribuidos, P2P, SOA, microservicios |

## Unidad 5 — Procesos de desarrollo de referencia

| Nota | Peso | Qué cae · dónde me equivoco |
|---|---|---|
| [Proceso Unificado (PUDS)](notas/proceso-unificado.md) | 2 | **2º parcial** (5.1). Las 3 características, 4P+H, ciclo–fase–iteración, las 4 fases y sus hitos, disciplinas, trabajador/actividad/artefacto, PU vs. RUP |
| [Captura de requisitos en el PU](notas/captura-de-requisitos-en-el-pu.md) | 2 | **2º parcial** (5.1). Lista de características, modelo de negocio vs. de dominio, CU de negocio vs. de sistema, las 5 actividades con su trabajador y sus artefactos |
| [Manifiesto ágil y métodos ágiles vs. clásicos](notas/manifiesto-agil.md) | 1 | Unidad supuesta; no está en el 2º parcial. Cuestionario 8: valores y principios del manifiesto |
| [Programación Extrema (XP)](notas/programacion-extrema.md) | 1 | Unidad supuesta. Valores, prácticas, diseño simple y refactorización |
| [Modelado Ágil (AM)](notas/modelado-agil.md) | 1 | Unidad supuesta. "Prueba antes del diseño" reemplaza al modelado detallado |

Los temas sin nota (análisis/diseño/implementación/prueba en el PU, atributos de calidad y
tácticas, calidad de software) están en [temas.md](temas.md).
