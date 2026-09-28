---
titulo: "Abstract Data Sources"
tipo: concepto
tags: ["testability","datos","pruebas","abstraccion","interfaces"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [239]
veces_en_examen: 0
---

# Abstract Data Sources

> Táctica de testability que abstrae las interfaces de datos para poder sustituir datos de prueba más fácilmente.

Permite controlar los datos de entrada de un programa. Por ejemplo, si hay una base de datos de transacciones de clientes, se puede diseñar la arquitectura para apuntar a otras bases de datos de prueba o incluso a archivos de datos de prueba, sin cambiar el código funcional.

## Relacionado

- [[control-and-observe-system-state]]

## Lo mencionan

- [[control-and-observe-system-state]]
