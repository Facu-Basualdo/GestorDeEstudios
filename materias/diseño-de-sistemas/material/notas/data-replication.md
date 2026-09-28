---
titulo: "Data Replication"
tipo: concepto
tags: ["performance","replicacion","datos","consistencia"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [181]
veces_en_examen: 0
---

# Data Replication

> Técnica de performance que mantiene copias separadas de los datos para reducir la contención por accesos simultáneos.

Implica mantener copias separadas de los datos. Como los datos replicados suelen ser una copia de datos existentes, mantener las copias consistentes y sincronizadas se vuelve una responsabilidad que el sistema debe asumir. Es uno de los dos ejemplos comunes de maintain multiple copies of data.

## Relacionado

- [[maintain-multiple-copies-of-data]]
- [[caching]]

## Lo mencionan

- [[maintain-multiple-copies-of-data]]
- [[caching]]
