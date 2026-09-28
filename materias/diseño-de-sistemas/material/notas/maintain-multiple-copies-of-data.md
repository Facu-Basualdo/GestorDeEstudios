---
titulo: "Maintain Multiple Copies of Data"
tipo: concepto
tags: ["performance","tacticas","datos","cache","replicacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [181]
veces_en_examen: 0
---

# Maintain Multiple Copies of Data

> Táctica de gestión de recursos que mantiene copias de datos para reducir la contención por accesos simultáneos, mediante replicación de datos o caché.

Dos ejemplos comunes de mantener múltiples copias de datos son la replicación de datos y la caché. La replicación de datos consiste en mantener copias separadas de los datos para reducir la contención por accesos simultáneos. Como los datos replicados suelen ser copias de datos existentes, mantener las copias consistentes y sincronizadas se convierte en una responsabilidad que el sistema debe asumir. La caché también mantiene copias de datos (posiblemente un subconjunto), pero en almacenamiento con diferentes velocidades de acceso, por ejemplo velocidad de memoria versus almacenamiento secundario, o velocidad de comunicación local versus remota. Otra responsabilidad de la caché es elegir qué datos almacenar; algunas cachés guardan copias de lo solicitado recientemente, pero también es posible predecir pedidos futuros según patrones de comportamiento y comenzar los cálculos o prefetches necesarios antes de que el usuario los haga.

## Relacionado

- [[data-replication]]
- [[caching]]
- [[manage-resources]]

## Lo mencionan

- [[manage-resources]]
- [[data-replication]]
- [[caching]]
