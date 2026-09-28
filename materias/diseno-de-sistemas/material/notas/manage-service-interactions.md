---
titulo: "Manage Service Interactions"
tipo: concepto
tags: ["deployability","servicios","versionado","tactica"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [110]
veces_en_examen: 0
---

# Manage Service Interactions

> Manage service interactions es una táctica de deployability que permite la ejecución simultánea de múltiples versiones de servicios y media sus interacciones para evitar incompatibilidades de versión.

Múltiples solicitudes de un cliente pueden dirigirse a cualquiera de las versiones en cualquier secuencia. Tener múltiples versiones puede introducir incompatibilidades; esta táctica las evita proactivamente. Es una estrategia de gestión de recursos que evita tener que replicar completamente los recursos para desplegar por separado las versiones vieja y nueva.

## Relacionado

- [[manage-deployed-system]]
- [[tactics-for-deployability]]

## Lo mencionan

- [[tactics-for-deployability]]
- [[manage-deployed-system]]
