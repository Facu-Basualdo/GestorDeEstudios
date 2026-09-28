---
titulo: "Data Interchange Format"
tipo: concepto
tags: ["intercambio-de-datos","formatos","serializacion","redes"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [282]
veces_en_examen: 0
---

# Data Interchange Format

> Representación general e independiente del lenguaje de programación que se elige para enviar información estructurada a través de una red.

La decisión se basa en estas preocupaciones:
- **Expressiveness**: si puede serializar estructuras de datos arbitrarias, si está optimizado para árboles de objetos, si soporta textos en distintos idiomas.
- **Interoperability**: si la representación coincide con lo que los actores esperan y saben parsear; una representación estándar (como JSON) facilita transformar los bits en estructuras internas.
- **Performance**: uso eficiente del ancho de banda, complejidad algorítmica del parseo, tiempo de preparación de mensajes y costo monetario del ancho de banda.
- **Implicit coupling**: suposiciones compartidas por actores y elementos que pueden causar errores y pérdida de datos al decodificar mensajes.
- **Transparency**: posibilidad de interceptar y observar el contenido de los mensajes; los mensajes autodescriptivos ayudan a los desarrolladores a depurar y a los espías a interceptar e interpretar el contenido, mientras que las representaciones binarias (especialmente cifradas) requieren herramientas especiales pero son más seguras.

Los estilos más comunes independientes del lenguaje son textuales (XML, JSON) y binarios (protocol buffers).

## Relacionado

- [[serialization]]
- [[xml]]
- [[json]]
- [[protocol-buffers]]

## Lo mencionan

- [[serialization]]
