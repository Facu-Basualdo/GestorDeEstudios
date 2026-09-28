---
titulo: "Cyclic Dependency"
tipo: concepto
tags: ["anti-pattern","dependencias","ciclo","arquitectura","deuda-tecnica"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [436]
veces_en_examen: 0
---

# Cyclic Dependency

> Anti-patrón de arquitectura, también llamado clique, en el que un grupo de archivos forma un grafo fuertemente conexo con una ruta de dependencia estructural entre cualquier par de elementos.

Se identifica buscando conjuntos de archivos que forman un grafo fuertemente conexo, donde existe una ruta de dependencia estructural entre dos elementos cualesquiera del grafo.

En el ejemplo de Apache Cassandra, el archivo locator.AbstractReplicationStrategy depende de service.WriteResponseHandler y de locator.TokenMetadata, y estos dos a su vez dependen de él, formando un clique. Para eliminarlo, una dependencia debe removerse o revertirse para romper el ciclo.


## Lo mencionan

- [[hotspot]]
- [[package-cycle]]
