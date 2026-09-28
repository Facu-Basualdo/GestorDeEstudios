---
titulo: "JSON"
tipo: concepto
tags: ["json","serializacion","intercambio-de-datos","javascript"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [284]
veces_en_examen: 0
---

# JSON

> Notación textual de datos que estructura la información como pares nombre/valor anidados y tipos de datos array; originada en JavaScript y estandarizada en 2013.

JSON creció a partir del lenguaje JavaScript, pero hoy es independiente de cualquier lenguaje de programación. Como XML, es una representación textual con su propio lenguaje de esquema. Comparado con XML, es significativamente menos verboso, ya que los nombres de campo aparecen una sola vez. Al usar una representación nombre/valor en lugar de etiquetas de apertura y cierre, los documentos JSON pueden parsearse mientras se leen.

Sus tipos de datos derivan de los de JavaScript y se parecen a los de cualquier lenguaje moderno, lo que hace que la serialización y deserialización sean mucho más eficientes que en XML. Su caso de uso original era enviar objetos JavaScript entre un navegador y un servidor web — por ejemplo, para transferir una representación liviana que se renderice como HTML en el navegador, en lugar de hacer el renderizado en el servidor y tener que descargar vistas más verbosas representadas con HTML.

## Relacionado

- [[xml]]

## Lo mencionan

- [[data-interchange-format]]
- [[protocol-buffers]]
