---
titulo: "Tolerancia a la pérdida de energía"
tipo: concepto
tags: ["energia","confiabilidad","reinicio","arquitectura"]
temas: ["[[sistemas-moviles-y-restricciones-de-recursos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [327]
veces_en_examen: 0
---

# Tolerancia a la pérdida de energía

> La tolerancia a la pérdida de energía es la capacidad de un sistema móvil de tolerar con gracia fallas de energía y reinicios.

Un requisito típico puede ser que, después de restaurar la energía, el sistema vuelva a estar funcionando en modo nominal dentro de 30 segundos. Esto implica distintos requisitos para distintas partes del sistema:

**Requisitos de hardware:**
- La computadora no sufre daños permanentes si se corta la energía en cualquier momento.
- La computadora (re)inicia el sistema operativo robustamente cuando recibe energía suficiente.
- El sistema operativo tiene el software programado para lanzarse apenas el SO esté listo.

**Requisitos de software:**
- El entorno de ejecución puede ser terminado en cualquier momento sin afectar la integridad de binarios, configuraciones y datos operativos en almacenamiento permanente, y manteniendo el estado consistente después de un reinicio (reset o resume).
- Las aplicaciones necesitan una estrategia para manejar los datos que llegan mientras están inoperativas.
- El runtime puede iniciar después de una falla, de modo que el tiempo desde encendido hasta que el software está listo sea menor a un período especificado.


