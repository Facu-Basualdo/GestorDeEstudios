---
titulo: "Modelar con un propósito"
tipo: concepto
tags: ["agile modeling","principio","proposito","audiencia"]
temas: ["[[modelado-agil-(am)]]"]
fuente: "ApunteAgile (1).pdf"
paginas: [10,11]
veces_en_examen: 0
---

# Modelar con un propósito

> Debe identificarse un propósito válido para el modelo y una audiencia para el mismo, y luego desarrollarlo con el suficiente nivel de detalle y precisión.

Muchos desarrolladores se preocupan acerca de cuando sus artefactos (modelos, código fuente, documentos) son suficientemente detallados o demasiado detallados, o similarmente si son suficientemente exactos. Lo que normalmente no hacen es dar un paso atrás es preguntarse porqué están creando dicho artefacto y para quién. Con respecto al modelado, quizá necesite comprender mejor un aspecto del sistema, quizá necesite comunicar su enfoque a su jefe, o quizá necesite crear documentación que describa el sistema a las personas que se harán cargo de la operación y mantenimiento del mismo. ¿Si no puede identificar con claridad porque y para quién realiza un modelo, para que molestarse en hacerlo? El primer paso es identificar un propósito válido para el modelo y una audiencia para el mismo, luego basado en dicho propósito y audiencia debe desarrollarse el modelo con el suficiente nivel de detalle y precisión. Una vez que el modelo ha cumplido sus objetivos, se termina con él por el momento y puede dedicarse a otra actividad como escribir el código de dicho modelo para verlo en funcionamiento. Este principio también es aplicable a un cambio en un modelo: si se realiza un cambio a un modelo, por ejemplo para aplicar un patrón conocido, tiene que tener una razón válida para realizar dicho cambio (quizá para soportar un nuevo requerimiento o para refactorizar su trabajo de una manera más clara). Una implicación importante de este principio es que debe conocerse bien a la audiencia, aún cuando la audiencia sea uno mismo. Por ejemplo, si se esta creando un modelo para los desarrolladores de mantenimiento, que es lo que realmente ellos necesitan? ¿Necesitan un documento comprensivo de 500 páginas o es suficiente con un resumen de 10 páginas que explica el funcionamiento en general? Si se desconoce debe tratarse el tema con ellos.


