---
titulo: "Automation"
tipo: concepto
tags: ["automatizacion","deuda-arquitectonica","integracion-continua","dsm","anti-patrones"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [441]
veces_en_examen: 0
---

# Automation

> La automatización del análisis de deuda arquitectónica permite identificar de forma automática los anti-patrones de arquitectura e integrar la herramienta en una suite de integración continua para monitorear la deuda arquitectónica de manera continua.

Esta forma de análisis arquitectónico puede automatizarse por completo. Cada anti-patrón introducido en la Sección 23.2 puede identificarse de forma automatizada y la herramienta puede integrarse en una suite de integración continua para que la deuda arquitectónica se monitoree continuamente.

El proceso de análisis requiere las siguientes herramientas:
- Una herramienta para extraer un conjunto de issues de un issue tracker.
- Una herramienta para extraer un log de un sistema de control de revisiones.
- Una herramienta para hacer ingeniería inversa de la base de código y determinar las dependencias sintácticas entre archivos.
- Una herramienta para construir DSMs a partir de la información extraída y recorrerlos buscando los anti-patrones.
- Una herramienta que calcule la deuda asociada a cada hotspot.

Las únicas herramientas especializadas son las que construyen y analizan el DSM. Los proyectos probablemente ya tienen issue trackers e historiales de revisión, y existen muchas herramientas de ingeniería inversa, incluidas opciones de código abierto.

## Relacionado

- [[architecture-debt]]
- [[hotspot]]

