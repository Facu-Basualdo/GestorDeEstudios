---
titulo: "Virtualization"
tipo: concepto
tags: ["virtualizacion","maquinas-virtuales","contenedores","aislamiento","recursos","nube"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [290]
veces_en_examen: 0
---

# Virtualization

> La virtualización es el uso de máquinas virtuales y contenedores para aislar una aplicación de otra mientras se comparten los recursos de una computadora física.

En los años 60, la comunidad de computación tenía el problema de compartir recursos como memoria, disco, canales de E/S y dispositivos de entrada en una sola máquina física entre varias aplicaciones independientes. La imposibilidad de compartir recursos implicaba ejecutar una sola aplicación por vez; las computadoras costaban millones y la mayoría de las aplicaciones usaba solo alrededor del 10% de los recursos disponibles.

Las máquinas virtuales y, más tarde, los contenedores surgieron para lidiar con el compartir. Su objetivo es aislar una aplicación de otra y, al mismo tiempo, compartir recursos. El aislamiento permite escribir aplicaciones como si fueran las únicas en la computadora; compartir recursos permite ejecutar varias aplicaciones a la vez.

Hay límites a la ilusión de aislamiento porque las aplicaciones comparten una máquina física con recursos fijos; por ejemplo, si una aplicación consume todos los recursos de CPU, las demás no pueden ejecutarse.

Para un arquitecto, el tema es importante porque puede estar inclinado u obligado a usar alguna forma de virtualización para desplegar el software que crea, por ejemplo en la nube con contenedores, o para probar en un entorno más accesible que el hardware especializado.

## Relacionado

- [[virtual-machine]]
- [[container]]

## Lo mencionan

- [[good-architecture]]
- [[cloud-computing]]
