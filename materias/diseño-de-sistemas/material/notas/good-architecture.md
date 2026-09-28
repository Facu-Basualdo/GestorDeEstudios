---
titulo: "Good Architecture"
tipo: concepto
tags: ["arquitectura","calidad","evaluacion","recomendaciones"]
temas: ["[[fundamentos-de-la-arquitectura-de-software]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [38,39]
veces_en_examen: 0
---

# Good Architecture

> No existe una arquitectura inherentemente buena o mala; las arquitecturas son más o menos aptas para algún propósito.

Una arquitectura de tres capas orientada a servicios puede ser ideal para un sistema B2B web de una gran empresa pero completamente inapropiada para una aplicación de aviónica. Una arquitectura cuidadosamente diseñada para lograr alta modificabilidad no tiene sentido para un prototipo descartable. La arquitectura puede evaluarse, pero la evaluación solo tiene sentido en el contexto de objetivos específicos. Hay reglas prácticas que conviene seguir al diseñar la mayoría de las arquitecturas; no aplicarlas no implica necesariamente un defecto fatal, pero debe servir como señal de advertencia. Se dividen en recomendaciones de proceso y recomendaciones de producto (o estructurales).

**Recomendaciones de proceso:**
1. La arquitectura debe ser producto de un único arquitecto o un grupo pequeño con un líder técnico identificado, para darle integridad conceptual y consistencia técnica. Debe haber una fuerte conexión con el equipo de desarrollo.
2. El arquitecto debe basar la arquitectura en una lista priorizada de requisitos de atributos de calidad bien especificados.
3. La arquitectura debe documentarse usando views, que abordan las preocupaciones de los stakeholders importantes.
4. La arquitectura debe evaluarse temprano para ver si puede entregar los atributos de calidad importantes, y repetirse según corresponda.
5. La arquitectura debe prestarse a la implementación incremental, por ejemplo mediante un sistema "esqueleto" con caminos de comunicación ejercitados y funcionalidad mínima.

**Recomendaciones estructurales:**
1. Módulos bien definidos con responsabilidades asignadas según information hiding y separation of concerns; interfaces que encapsulen lo cambiante.
2. Los atributos de calidad deben lograrse con patrones y tácticas arquitectónicos conocidos.
3. La arquitectura no debe depender de una versión particular de un producto o herramienta comercial.
4. Los módulos que producen datos deben estar separados de los que los consumen.
5. No esperar correspondencia uno a uno entre módulos y componentes.
6. Cada proceso debe poder cambiar fácilmente de procesador asignado, quizás en runtime; esto impulsa las tendencias hacia virtualización y despliegue en la nube.
7. Pocos patrones de interacción entre componentes simples; el sistema debe hacer las mismas cosas de la misma manera.
8. Un conjunto específico y pequeño de áreas de contención de recursos, con resolución claramente especificada.

## Relacionado

- [[architectural-pattern]]
- [[information-hiding]]
- [[view]]
- [[quality-attribute]]
- [[virtualization]]

## Lo mencionan

- [[view]]
