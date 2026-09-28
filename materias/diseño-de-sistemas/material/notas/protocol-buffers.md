---
titulo: "Protocol Buffers"
tipo: concepto
tags: ["protocol-buffers","serializacion","binario","google","grpc"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [284]
veces_en_examen: 0
---

# Protocol Buffers

> Tecnología de serialización binaria originada en Google y liberada como open source en 2008, que usa un esquema para definir estructuras válidas y es extremadamente compacta.

Protocol Buffers usan tipos de datos cercanos a los de los lenguajes de programación, lo que hace eficientes la serialización y la deserialización. Como con XML, los mensajes tienen un esquema que define una estructura válida y puede especificar elementos requeridos, opcionales y anidados. A diferencia de XML y JSON, es un formato binario, por lo que es extremadamente compacto y usa con eficiencia los recursos de memoria y ancho de banda. En este sentido remite a una representación binaria mucho más antigua, ASN.1, de principios de los años 80, cuando el ancho de banda era un recurso precioso.

El proyecto open source provee generadores de código para usar Protocol Buffers con muchos lenguajes de programación. Se especifica el esquema del mensaje en un archivo *proto*, que se compila con un compilador de protocol buffers específico del lenguaje. Los procedimientos generados por los compiladores los usa un actor para serializar y un elemento para deserializar los datos. Los elementos que interactúan pueden estar escritos en lenguajes distintos y cada uno usa el compilador específico. Aunque pueden usarse para cualquier propósito de estructuración de datos, se emplean sobre todo como parte del protocolo gRPC.

Protocol Buffers se especifican con un *interface description language*. Como se compilan con compiladores específicos de lenguaje, la especificación es necesaria para asegurar el comportamiento correcto de la interfaz, actúa como documentación y, al guardarla en una base de datos, permite buscar cómo se propagan los valores a través de los elementos.

## Relacionado

- [[xml]]
- [[json]]
- [[grpc]]

## Lo mencionan

- [[data-interchange-format]]
- [[arquitecturas-dinamicas]]
