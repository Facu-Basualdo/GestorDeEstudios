---
titulo: "Skeletal System"
tipo: concepto
tags: ["desarrollo-incremental","infraestructura","prototipado","arquitectura-software"]
temas: ["[[fundamentos-de-la-arquitectura-de-software]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [52]
veces_en_examen: 0
---

# Skeletal System

> Sistema inicial en el desarrollo incremental que contiene la infraestructura básica de comunicación, inicialización, acceso a datos y recursos, pero poca o ninguna funcionalidad de aplicación.

El primer incremento puede ser un sistema esquelético en el que al menos parte de la infraestructura —cómo los elementos se inicializan, se comunican, comparten datos, acceden a recursos, reportan errores y registran actividad— está presente, pero mucha de la funcionalidad de aplicación no.

Muchos sistemas se construyen como sistemas esqueléticos que pueden extenderse mediante plug-ins, paquetes o extensiones. Ejemplos: el lenguaje R, Visual Studio Code y la mayoría de los navegadores web.

La fidelidad del sistema aumenta a medida que se agregan extensiones, o cuando versiones tempranas son reemplazadas por versiones más completas. En algunos casos, las partes pueden ser versiones de baja fidelidad o prototipos de la funcionalidad final; en otros, pueden ser sustitutos que consumen y producen datos a ritmos apropiados pero no hacen mucho más.

## Relacionado

- [[enabling-incremental-development]]

## Lo mencionan

- [[enabling-incremental-development]]
