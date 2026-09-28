---
titulo: "Parameter Typing"
tipo: concepto
tags: ["disponibilidad","deteccion","mensajes","tlv","parametros"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78]
veces_en_examen: 0
---

# Parameter Typing

> Es una táctica que emplea una clase base que define funciones para agregar, encontrar e iterar sobre parámetros de mensajes con formato type-length-value (TLV).

Las clases derivadas usan las funciones de la clase base para construir y parsear mensajes. El uso de parameter typing asegura que el emisor y el receptor de mensajes acuerden el tipo del contenido, y detecta casos en que no lo hacen.

## Relacionado

- [[exception-detection]]

## Lo mencionan

- [[exception-detection]]
