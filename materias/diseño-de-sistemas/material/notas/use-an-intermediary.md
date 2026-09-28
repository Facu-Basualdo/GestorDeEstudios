---
titulo: "Use an Intermediary"
tipo: concepto
tags: ["intermediario","integrabilidad","dependencias","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [142]
veces_en_examen: 0
---

# Use an Intermediary

> Use an Intermediary es una táctica que introduce un intermediario para romper dependencias entre un conjunto de componentes Ci o entre Ci y el sistema S.

Los intermediarios pueden resolver distintos tipos de dependencias. Por ejemplo, un bus de publicación-suscripción (publish–subscribe bus), un repositorio de datos compartido o el descubrimiento dinámico de servicios reducen dependencias entre productores y consumidores de datos, porque ninguna de las partes necesita conocer la identidad de la otra. Otros intermediarios, como transformadores de datos y traductores de protocolos, resuelven formas de distancia sintáctica y semántica de datos.

Para determinar el beneficio de un intermediario particular, un analista necesita saber qué hace realmente: si reduce el número de dependencias entre un componente y el sistema y qué dimensiones de distancia aborda. Los intermediarios suelen introducirse durante la integración para resolver dependencias específicas, pero también pueden incluirse en la arquitectura para promover la integrabilidad respecto de escenarios anticipados. Por ejemplo, incluir un intermediario de comunicación como un bus de publicación-suscripción en la arquitectura y restringir los caminos de comunicación desde y hacia los sensores a ese bus promueve la integrabilidad de los sensores.

## Relacionado

- [[discover]]
- [[restrict-communication-paths]]

## Lo mencionan

- [[abstract-common-services]]
- [[tailor-interface]]
- [[reduce-coupling]]
