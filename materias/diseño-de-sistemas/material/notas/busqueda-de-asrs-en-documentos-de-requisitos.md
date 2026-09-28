---
titulo: "Búsqueda de ASRs en documentos de requisitos"
tipo: concepto
tags: ["asr","requisitos","arquitectura-de-software","documentacion","user-stories"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [341,342]
veces_en_examen: 0
---

# Búsqueda de ASRs en documentos de requisitos

> Proceso de buscar y detectar ASRs en un documento de requisitos o en user stories, sabiendo que allí no van a estar etiquetados y que el documento suele ser insuficiente.

Un lugar obvio para buscar ASRs candidatos es el documento de requisitos o las user stories. Sin embargo, no hay que esperar demasiado: muchos proyectos no crean ni mantienen ese tipo de documento, y el arquitecto debe comenzar antes de que los requisitos estén terminados. Los documentos de requisitos fallan al arquitecto de dos maneras:

- La mayor parte de la información no afecta la arquitectura. Las arquitecturas están moldeadas sobre todo por requisitos de calidad, mientras que el grueso de las especificaciones se centra en funcionalidades. Frases como “El sistema será modular” no son útiles porque no son testeables; son invitaciones a conversar sobre los requisitos reales.
- Mucho de lo útil no está ni en el mejor documento. Los ASR suelen derivar de objetivos de negocio; las cualidades de desarrollo (por ejemplo, supuestos de trabajo en equipo) quedan fuera de alcance; y en un contexto de adquisición el documento representa los intereses del adquiriente, no los del desarrollador.

Aun así, los documentos de requisitos son una fuente importante de ASRs. Los ASR no vienen convenientemente etiquetados; el arquitecto debe investigar y hacer arqueología. Las categorías de información a buscar son:

- Uso: roles de usuario frente a modos del sistema, internacionalización, distinciones de idioma.
- Tiempo: puntualidad y coordinación de elementos.
- Elementos externos: sistemas externos, protocolos, sensores o actuadores, middleware.
- Redes: propiedades y configuraciones de red (incluidas las de seguridad).
- Orquestación: pasos de procesamiento, flujos de información.
- Propiedades de seguridad: roles de usuario, permisos, autenticación.
- Datos: persistencia y vigencia.
- Recursos: tiempo, concurrencia, huella de memoria, scheduling, múltiples usuarios, múltiples actividades, dispositivos, consumo de energía, recursos blandos (buffers, colas) y escalabilidad.
- Gestión de proyecto: planes de trabajo en equipo, habilidades, entrenamiento, coordinación del equipo.
- Elecciones de hardware: procesadores, familias de procesadores, evolución de procesadores.
- Flexibilidad de funcionalidad, portabilidad, calibraciones, configuraciones.
- Tecnologías nombradas, paquetes comerciales.

También es arquitectónicamente significativa la posible evolución de cada categoría: incluso si el documento no la menciona, hay que diseñar pensando en qué elementos de la lista probablemente cambien con el tiempo.

## Relacionado

- [[architecturally-significant-requirement]]
- [[quality-attribute]]
- [[business-goals]]

