# Programa — Diseño de Sistemas de Información
[← Índice Diseño de Sistemas](INDICE.md)

> **No es el programa oficial.** Las unidades están armadas por el tutor a partir del
> material de la cátedra exportado de Faro IA (15 documentos, ver [fuentes](fuentes.md)).
> Cuando consigas el programa oficial, se reemplaza y se reacomodan las notas.

## Instancias de evaluación

| | Instancia | Modalidad | Fecha | Recuperatorio | Cuenta para cursada |
|---|---|---|---|---|---|
| IE1 | Trabajo Práctico Integrador, 1ª etapa | Elaboración, entrega y defensa del TPI | 2026-05-20 y 2026-05-27 | 2026-07-08 | no |
| IE2 | Fundamentos conceptuales: comprensión y análisis de conceptos de la asignatura | Examen parcial | 2026-06-24 | 2026-07-08 | **sí** |
| IE3 | Diseño de solución informática: diseño y aplicación de criterios de solución | Examen parcial | 2026-10-21 | 2026-11-11 | **sí** |
| IE4 | Trabajo Práctico Integrador, 2ª etapa | Elaboración, entrega y defensa del TPI | Entrega 2026-11-04 · defensa 2026-11-25 y 2026-12-02 | 2026-12-10 | no |
| IE5 | Fundamentos conceptuales: comprensión y análisis de fundamentos teóricos | Examen parcial | 2026-11-18 (se movió del 25/11) | 2026-12-10 (se movió del 02/12) | **sí** |
| IE6 | Cuestionarios semanales asincrónicos (evaluación continua con calificación) | Cuestionarios | 2026-03-18 al 2026-11-25 | continua | no |

## Unidades

Las unidades 3, 4 y 5 son las **oficiales** (aula virtual, 2026-09-28). El resto sigue armado
por el tutor a partir del material.

| Unidad | Temas | Bibliografía de la cátedra | En el material |
|---|---|---|---|
| 3 — Modelado y diseño orientado a objetos · **3.3 Buenas prácticas del DOO** | **SOLID**: responsabilidad única, abierto/cerrado, sustitución de Liskov, segregación de interfaces, inversión de dependencias · **GRASP**: experto, creador, bajo acoplamiento, alta cohesión, controlador, polimorfismo, indirección, variaciones protegidas | Carmona García (2012), *SOLID y GRASP* · Leiva (2021), *Principios SOLID* · Wirfs-Brock (2009), *Principles in Practice* · Larman (2004), caps. 17, 18 y 25 | docs 1, 10, 33 |
| 3 (supuesto) — Patrones de diseño | Principios OO de GoF, fundamentos, creacionales, estructurales, de comportamiento | Gamma et al., *Design Patterns* | docs 2, 16 |
| 4 — Arquitecturas de software · **4.1 Diseño arquitectónico** | Importancia de la arquitectura · introducción al diseño arquitectónico · estilos: **capas, repositorio, canalizaciones y filtros, microkernel** | Bass, Clements y Kazman (2021), caps. 1, 2, 3, 8 y 9 · Sommerville (2016), caps. 6 y 17 | docs 12, 59 |
| 4 · **4.2 Arquitecturas de sistemas distribuidos** | **Maestro-esclavo** (multiprocesador) · **cliente-servidor** · **componentes (objetos) distribuidos** · **peer-to-peer** · **orientadas a servicios** · **microservicios** | Sommerville (2016), cap. 17 · Sommerville (2020), cap. 6 · W3C (2004) · Fowler (2015) · Richards y Ford (2020), cap. 17 | doc 11 |
| 5 — Procesos de desarrollo de referencia · **5.1 El Proceso Unificado (PUDS)** | Visión general · metodologías y *process frameworks* · dirigido por casos de uso, centrado en la arquitectura, iterativo e incremental · ciclo de vida, **fases** (inicio, elaboración, construcción, transición), **hitos**, iteraciones, disciplinas básicas · **captura de requisitos**: lista de características, modelo del dominio y del negocio, procesos a partir de CU de negocio, CU de sistema, trabajadores, artefactos y flujo de trabajo | Jacobson, Booch y Rumbaugh (2000), caps. 1 a 5 · Larman (2004) | docs 13, 14, 9 |
| 5 (supuesto) — Metodologías ágiles | Manifiesto, XP, Modelado Ágil | — | docs 3, 15 |
| 6 (supuesto) — Calidad de software | Conceptos y modelos, aseguramiento, revisiones técnicas | Pressman y Maxim (2019), caps. 15–17 | docs 4, 17 |

## Qué entra en cada parcial

- **2º parcial, IE3 (2026-10-21)**, "diseño y aplicación de criterios de solución". Lista del aula virtual:
  - clase 15, SOLID;
  - clase 17, GRASP;
  - clases 19-20, Arquitectura I;
  - clase 21, Arquitectura II;
  - clases 22 y 23, PUDS I y II.

  **No** figuran los patrones GoF ni lo ágil.
- **IE5 (2026-11-18)**, "fundamentos teóricos": todavía sin lista. Probablemente el resto de PUDS y calidad.

## Actividades de práctica

- **Guía de TP N° 6 — Realización de casos de uso** (clase 22): diseñar con objetos un caso de
  uso. Se apoya en [GRASP](notas/patrones-grasp.md#Artefactos%20que%20entran%20al%20diseño%20de%20objetos).
