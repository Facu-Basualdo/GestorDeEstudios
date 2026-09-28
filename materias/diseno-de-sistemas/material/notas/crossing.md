---
titulo: "Crossing"
tipo: concepto
tags: ["anti-pattern","arquitectura","fan-in","fan-out","acoplamiento"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [436]
veces_en_examen: 0
---

# Crossing

> Anti-patrón de arquitectura en el que un archivo tiene un alto número de archivos dependientes (fan-in) y un alto número de archivos de los cuales depende (fan-out), y cambia frecuentemente junto con ellos.

Para identificar el archivo en el centro de un crossing, se busca un archivo con alto fan-in y alto fan-out con otros archivos y que tenga relaciones sustanciales de co-cambio con esos archivos.


## Lo mencionan

- [[hotspot]]
