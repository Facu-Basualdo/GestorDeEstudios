---
titulo: "Parameter Fence"
tipo: concepto
tags: ["disponibilidad","deteccion","memoria","parametros"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [78]
veces_en_examen: 0
---

# Parameter Fence

> Es una táctica que incorpora un patrón de datos conocido (como 0xDEADBEEF) inmediatamente después de cualquier parámetro de longitud variable de un objeto.

Permite la detección en tiempo de ejecución de la sobrescritura de la memoria asignada para los parámetros de longitud variable del objeto.

## Relacionado

- [[exception-detection]]

## Lo mencionan

- [[exception-detection]]
