---
titulo: "Resource Semantics"
tipo: concepto
tags: ["semantica","recursos","interfaces","comportamiento"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [275]
veces_en_examen: 0
---

# Resource Semantics

> Semántica de un recurso: qué resulta de invocar ese recurso.

La semántica se presenta en varias formas, incluyendo:
- Asignación de valores a datos que el actor que invoca el recurso puede acceder. Puede ser tan simple como asignar el valor de un argumento de retorno o tan profundo como actualizar una base de datos central.
- Supuestos sobre los valores que cruzan la interfaz.
- Cambios en el estado del elemento provocados por usar el recurso. Incluye condiciones excepcionales, como efectos secundarios de una operación parcialmente completada.
- Eventos que se señalarán o mensajes que se enviarán como resultado de usar el recurso.
- Cómo otros recursos se comportarán distinto en el futuro como resultado de usar este recurso. Por ejemplo, si se pide a un recurso que destruya un objeto, acceder a ese objeto en el futuro a través de otros recursos podría producir un error.
- Resultados observables por humanos, comunes en sistemas embebidos. Por ejemplo, llamar a un programa que enciende una pantalla en una cabina tiene un efecto muy observable: la pantalla se enciende.

Además, la declaración de semántica debería aclarar si la ejecución del recurso será atómica o puede suspenderse o interrumpirse.

## Relacionado

- [[resource]]
- [[event]]

## Lo mencionan

- [[resource]]
