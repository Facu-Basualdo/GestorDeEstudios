---
titulo: "Test Harness"
tipo: concepto
tags: ["testabilidad","testing","harness","pruebas"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [233]
veces_en_examen: 0
---

# Test Harness

> Un test harness es un conjunto de software (o en algunos casos hardware) especializado, diseñado para ejercitar el software bajo prueba.

Se utiliza para lograr el control y la observación necesarios para que un sistema sea testeable. Puede incluir capacidades como:

- grabación y reproducción (record-and-playback) de datos enviados a través de interfaces;
- un simulador del entorno externo en el que se prueba software embebido;
- software distinto que se ejecuta durante la producción, como el Simian Army de Netflix.

El test harness y su infraestructura pueden ser piezas de software considerables, con su propia arquitectura, interesados y requisitos de atributos de calidad. Provee asistencia para ejecutar los procedimientos de prueba y registrar la salida.

## Relacionado

- [[testability]]
- [[netflix-simian-army]]

## Lo mencionan

- [[testability]]
- [[netflix-simian-army]]
- [[controllability]]
- [[observability]]
- [[specialized-interfaces]]
