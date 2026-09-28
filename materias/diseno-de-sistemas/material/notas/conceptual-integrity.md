---
titulo: "Conceptual Integrity"
tipo: concepto
tags: ["atributos-de-calidad","arquitectura","consistencia","diseno"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [262]
veces_en_examen: 0
---

# Conceptual Integrity

> Atributo de calidad de la arquitectura que se refiere a la consistencia en el diseño y contribuye a la comprensibilidad, a menos confusión y a más predecibilidad en la implementación y el mantenimiento.

La integridad conceptual exige que la misma cosa se haga de la misma manera en toda la arquitectura. En una arquitectura con integridad conceptual, menos es más. Por ejemplo, hay muchísimas formas en que los componentes pueden enviarse información: mensajes, estructuras de datos, señales de eventos, etc. Una arquitectura con integridad conceptual usaría una pequeña cantidad de formas, y ofrecería alternativas solo si hay una razón convincente para hacerlo. Del mismo modo, los componentes deberían reportar y manejar errores de la misma forma, registrar eventos o transacciones de la misma forma, interactuar con el usuario de la misma forma, sanear datos de la misma forma, etc.

## Relacionado

- [[quality-attributes-of-the-architecture]]

## Lo mencionan

- [[quality-attributes-of-the-architecture]]
