---
titulo: "Architecturally Significant Requirement Categories"
tipo: concepto
tags: ["asrs","requisitos","arquitectonicamente-significativos","evolucion","documento-de-requisitos"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [343,344,345]
veces_en_examen: 0
---

# Architecturally Significant Requirement Categories

> Categorías de ítems que deben buscarse en los documentos de requisitos porque son arquitectónicamente significativas y porque su posible cambio y evolución también afecta a la arquitectura.

El pasaje presenta una lista de categorías para examinar en un documento de requisitos. Estas categorías son arquitectónicamente significativas por sí mismas y también por su posible cambio y evolución. Las categorías enumeradas son:

- Middleware
- Networking: propiedades y configuraciones de red, incluidas las de seguridad
- Orchestration: pasos de procesamiento y flujos de información
- Security properties: roles de usuario, permisos, autenticación
- Data: persistencia y actualidad
- Resources: tiempo, concurrencia, memoria, scheduling, múltiples usuarios y actividades, dispositivos, energía y recursos blandos (buffers, colas) y escalabilidad
- Project management: planes de equipo, habilidades, entrenamiento y coordinación
- Hardware choices: procesadores, familias y evolución
- Flexibility of functionality, portability, calibrations, configurations
- Named technologies y commercial packages

Cualquier información sobre la evolución planificada o anticipada de estos ítems es útil. Aun si el documento de requisitos no menciona evolución, hay que considerar cuáles de estos ítems probablemente cambiarán con el tiempo y diseñar el sistema en consecuencia.


