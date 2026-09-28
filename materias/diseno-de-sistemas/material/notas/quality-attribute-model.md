---
titulo: "Quality attribute model"
tipo: concepto
tags: ["atributos-de-calidad","modelo","arquitectura","parametros"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [268]
veces_en_examen: 0
---

# Quality attribute model

> Comprensión del conjunto de parámetros a los que es sensible un atributo de calidad y de las características arquitectónicas que influyen en esos parámetros.

No se necesita más que eso: saber de qué parámetros depende el QA y qué decisiones de arquitectura afectan a esos parámetros.

Ejemplos del texto:

- Un modelo de **modifiability** podría decir que la modificabilidad es función de cuántos lugares del sistema hay que cambiar ante una modificación y de la interconexión entre esos lugares.
- Un modelo de **performance** podría decir que el throughput es función de la carga transaccional, las dependencias entre transacciones y el número de transacciones que se pueden procesar en paralelo.

La Figura 14.2 muestra un modelo de colas genérico para performance. El poder del modelo está en que define exactamente qué parámetros pueden afectar la latencia, y su utilidad para el arquitecto está en que cada parámetro puede ser afectado por decisiones arquitectónicas.

Si se crea un modelo propio, el conjunto de escenarios informa la investigación: los parámetros se derivan de los estímulos (y sus fuentes), las respuestas (y sus medidas), los artefactos (y sus propiedades) y el entorno (y sus características).

## Relacionado

- [[generic-queuing-model]]
- [[capture-scenarios-for-the-new-quality-attribute]]
- [[assemble-design-approaches-for-the-new-quality-attribute]]

## Lo mencionan

- [[bringing-a-new-qa-into-the-fold]]
- [[generic-queuing-model]]
- [[assemble-design-approaches-for-the-new-quality-attribute]]
