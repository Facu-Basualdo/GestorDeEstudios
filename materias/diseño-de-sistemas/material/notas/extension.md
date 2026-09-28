---
titulo: "Extension"
tipo: concepto
tags: ["interfaces","evolucion","extension","compatibilidad"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [276]
veces_en_examen: 0
---

# Extension

> La extensión es una técnica de evolución de interfaces que deja la interfaz original sin cambios y agrega nuevos recursos a la interfaz para incorporar los cambios deseados.

Si la extensión no contiene incompatibilidades con la interfaz original, el elemento puede implementar la interfaz externa directamente. Si introduce incompatibilidades, es necesario tener una interfaz interna para el elemento y agregar un mediador que traduzca entre la interfaz externa y la interna. Por ejemplo, si la interfaz original asumía que los números de departamento estaban incluidos en la dirección pero la extendida los separa como parámetro, el mediador parsea la dirección al ser invocado desde la interfaz original, o pasa el parámetro separado sin cambios al ser invocado desde la nueva.

## Relacionado

- [[interface-evolution]]
- [[mediator]]

## Lo mencionan

- [[mediator]]
- [[interface-evolution]]
