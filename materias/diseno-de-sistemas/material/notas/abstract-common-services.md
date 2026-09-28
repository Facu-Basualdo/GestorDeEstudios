---
titulo: "Abstract Common Services"
tipo: concepto
tags: ["abstraccion","integrabilidad","interfaz","servicios"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [143]
veces_en_examen: 0
---

# Abstract Common Services

> Abstract Common Services es una táctica que oculta dos elementos que brindan servicios similares pero no idénticos detrás de una abstracción común de un servicio más general.

La abstracción puede realizarse como una interfaz común implementada por ambos elementos, o involucrar un intermediario que traduce las solicitudes del servicio abstracto en solicitudes más específicas para los elementos ocultos detrás de la abstracción. El encapsulamiento resultante oculta los detalles de los elementos a otros componentes del sistema, de modo que los componentes futuros puedan integrarse con una sola abstracción en lugar de integrarse por separado con cada elemento específico.

Cuando esta táctica se combina con un intermediario (como un wrapper o adapter), también puede normalizar variaciones sintácticas y semánticas entre los elementos específicos. Por ejemplo, sistemas que usan muchos sensores del mismo tipo de diferentes fabricantes, cada uno con sus propios drivers, exactitud o propiedades de tiempo, pero con una interfaz común provista por la arquitectura. Otro ejemplo: un navegador puede admitir varios plug-ins de bloqueo de anuncios y, gracias a la interfaz de plug-ins, permanecer ajeno a cuál se usa.

Abstraer los servicios comunes permite consistencia al manejar preocupaciones comunes de infraestructura (por ejemplo, traducciones, mecanismos de seguridad y logging). Cuando estos aspectos cambian, o cuando cambian nuevas versiones de los componentes que los implementan, los cambios se pueden hacer en una menor cantidad de lugares. Un servicio abstracto suele combinarse con un intermediario que puede realizar procesamiento para ocultar diferencias sintácticas y de semántica de datos entre los elementos específicos.

## Relacionado

- [[use-an-intermediary]]

## Lo mencionan

- [[reduce-coupling]]
