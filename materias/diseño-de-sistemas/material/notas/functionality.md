---
titulo: "Functionality"
tipo: concepto
tags: ["funcionalidad","arquitectura","requisitos","responsabilidad","modulos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [59]
veces_en_examen: 0
---

# Functionality

> Functionality (funcionalidad) es la capacidad del sistema para hacer el trabajo para el cual fue concebido.

La funcionalidad no determina la arquitectura: para un conjunto de funcionalidad requerida no hay fin de arquitecturas posibles. Si la funcionalidad fuera lo único que importara, un único bloque monolítico sin estructura interna sería suficiente. En cambio, los sistemas se diseñan como conjuntos estructurados de elementos arquitectónicos cooperantes —módulos, capas, clases, servicios, bases de datos, apps, threads, peers, tiers— para hacerlos comprensibles y soportar otros propósitos: los otros quality attributes. La funcionalidad se logra asignando responsabilidades a elementos arquitectónicos, lo que produce una de las estructuras arquitectónicas más básicas: la descomposición en módulos. La arquitectura restringe esta asignación cuando otros quality attributes son importantes.

## Relacionado

- [[quality-attribute]]
- [[responsibility]]

## Lo mencionan

- [[quality-attribute]]
- [[functional-suitability]]
