---
titulo: "Unstable Interface"
tipo: concepto
tags: ["anti-pattern","arquitectura","dependencias","estabilidad"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [436]
veces_en_examen: 0
---

# Unstable Interface

> Anti-patrón de arquitectura en el que un archivo influyente, que representa un servicio, recurso o abstracción importante, cambia frecuentemente junto con sus dependientes según el historial de revisiones.

El archivo de interfaz es el punto de entrada para que otros elementos del sistema usen el servicio o recurso. Se modifica con frecuencia por razones internas, por cambios en su API, o por ambas. Para identificarlo, se busca un archivo con un gran número de dependientes que se modifica frecuentemente junto con otros archivos.


## Lo mencionan

- [[hotspot]]
