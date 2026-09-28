---
titulo: "XML"
tipo: concepto
tags: ["xml","marcado","w3c","esquemas"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [283]
veces_en_examen: 0
---

# XML

> Lenguaje de marcado extensible estandarizado por el W3C en 1998 que usa etiquetas para estructurar un documento e interpretar la información que contiene.

XML es un meta-lenguaje: por sí solo no hace nada más que permitir definir un lenguaje personalizado para describir datos. Ese lenguaje se define mediante un *XML schema*, que es un documento XML con las etiquetas a usar, el tipo de datos para interpretar los campos encerrados por cada etiqueta y las restricciones de estructura. Las etiquetas pueden tener atributos.

Los documentos XML se usan como representación de datos estructurados en muchos contextos: mensajes en sistemas distribuidos (SOAP), contenido web (XHTML), imágenes vectoriales (SVG), documentos de negocio (DOCX), descripción de interfaces de servicios web (WSDL) y archivos de configuración.

Una fortaleza de XML es que un documento puede validarse contra su esquema, lo que previene fallos por documentos malformados y elimina parte de la verificación de errores en el código que lo procesa. La desventaja es que parsear y validar es relativamente costoso en procesamiento y memoria: el documento debe leerse por completo antes de validarse y puede requerir varias pasadas de lectura para deserializarlo. Esta exigencia, junto con la verbosidad de XML, puede producir un rendimiento y consumo de ancho de banda inaceptables. Hoy se cita menos el argumento de que "XML es legible por humanos".

## Relacionado

- [[xml-schema]]

## Lo mencionan

- [[data-interchange-format]]
- [[xml-schema]]
- [[json]]
- [[protocol-buffers]]
