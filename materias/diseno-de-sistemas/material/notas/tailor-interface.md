---
titulo: "Tailor Interface"
tipo: concepto
tags: ["interfaz","integrabilidad","adaptacion","interceptores"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [145]
veces_en_examen: 0
---

# Tailor Interface

> Tailor Interface es una táctica que agrega capacidades a una interfaz existente, u oculta capacidades en ella, sin cambiar la API ni la implementación.

Capacidades como traducción, buffering y suavizado de datos pueden agregarse a una interfaz sin cambiarla. Un ejemplo de remoción de capacidades es ocultar funciones o parámetros particulares a usuarios no confiables. Una aplicación dinámica común de esta táctica son los filtros interceptores que agregan funcionalidad como validación de datos para prevenir inyecciones SQL u otros ataques, o para traducir entre formatos de datos. Otro ejemplo es usar técnicas de programación orientada a aspectos que entretejen funcionalidad de preprocesamiento y postprocesamiento en tiempo de compilación.

La táctica permite que funcionalidad necesaria para muchos servicios se agregue u oculte según el contexto y se gestione de manera independiente. También permite que servicios con diferencias sintácticas interoperen sin modificar ninguno de los dos servicios.

Esta táctica se aplica típicamente durante la integración; sin embargo, diseñar una arquitectura para que facilite el ajuste de interfaces puede apoyar la integrabilidad. El ajuste de interfaces se usa comúnmente para resolver distancia sintáctica y semántica de datos durante la integración. También puede aplicarse para resolver algunas formas de distancia semántica conductual, aunque puede ser más complejo (por ejemplo, mantener estado complejo para acomodar diferencias de protocolo) y quizás se categorice con mayor precisión como la introducción de un intermediario.

## Relacionado

- [[use-an-intermediary]]

