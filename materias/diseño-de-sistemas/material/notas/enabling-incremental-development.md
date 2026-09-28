---
titulo: "Enabling Incremental Development"
tipo: concepto
tags: ["desarrollo-incremental","arquitectura-software","skeletal-system","minimo-producto-viable"]
temas: ["[[fundamentos-de-la-arquitectura-de-software]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [52]
veces_en_examen: 0
---

# Enabling Incremental Development

> La arquitectura, una vez definida, sirve como base para el desarrollo incremental: se construye primero un sistema esquelético y se agrega funcionalidad de a poco.

El primer incremento puede ser un sistema esquelético (skeletal system) en el que está presente al menos parte de la infraestructura —cómo inicializan los elementos, se comunican, comparten datos, acceden a recursos, reportan errores, registran actividad, etc.— pero no la mayor parte de la funcionalidad de aplicación.

Construir la infraestructura y la funcionalidad de aplicación puede ir de la mano: se diseña y construye un poco de infraestructura para soportar un poco de funcionalidad de extremo a extremo, y se repite hasta terminar.

Esta práctica ganó atención a inicios de los 2000 con las ideas de Alistair Cockburn y su noción de "walking skeleton". Más recientemente fue adoptada por quienes emplean MVP (minimum viable product) como estrategia de reducción de riesgo.

Beneficios: reduce el riesgo potencial del proyecto, asegura que el sistema sea ejecutable temprano en el ciclo de vida, permite identificar problemas de performance u otros tempranamente y, si la arquitectura es para una familia de sistemas, la infraestructura se puede reutilizar en toda la familia.

## Relacionado

- [[skeletal-system]]

## Lo mencionan

- [[skeletal-system]]
