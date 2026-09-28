---
titulo: "Caching"
tipo: concepto
tags: ["performance","cache","datos","almacenamiento","prefetch"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [181]
veces_en_examen: 0
---

# Caching

> Técnica de performance que mantiene copias de datos en almacenamiento con diferentes velocidades de acceso, posiblemente con un subconjunto de los datos.

También implica mantener copias de datos, donde un conjunto de datos puede ser un subconjunto del otro, pero en almacenamiento con diferentes velocidades de acceso. Las diferencias de velocidad pueden deberse a la velocidad de la memoria versus el almacenamiento secundario, o a la velocidad de comunicación local versus remota. Otra responsabilidad es elegir qué datos almacenar en caché. Algunas cachés operan simplemente guardando copias de lo solicitado recientemente, pero también es posible predecir pedidos futuros según patrones de comportamiento y comenzar los cálculos o prefetches necesarios antes de que el usuario los haga.

## Relacionado

- [[maintain-multiple-copies-of-data]]
- [[data-replication]]

## Lo mencionan

- [[maintain-multiple-copies-of-data]]
- [[data-replication]]
