---
titulo: "Increase Competence Set"
tipo: concepto
tags: ["competencia","excepciones","tacticas","prevencion","disponibilidad","prevencion-de-fallas","competence-set"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [84,85,86,94,95,96,97,98,99]
veces_en_examen: 0
---

# Increase Competence Set

> Táctica que consiste en diseñar un componente para que maneje más casos (fallas) como parte de su operación normal, ampliando el conjunto de estados en los que es competente para operar.

El conjunto de competencia de un programa es el conjunto de estados en los que es 'competente' para operar; por ejemplo, el estado en el que el denominador es cero está fuera del conjunto de competencia de la mayoría de los programas de división. Cuando un componente lanza una excepción, está señalando que se descubrió fuera de su conjunto de competencia: no sabe qué hacer. Un componente que asume acceso a un recurso compartido podría lanzar una excepción si descubre que el acceso está bloqueado; otro podría simplemente esperar el acceso o retornar inmediatamente indicando que completará su operación por su cuenta la próxima vez que tenga acceso. El segundo componente tiene un conjunto de competencia más grande que el primero.

## Relacionado

- [[exception-handling]]
- [[competence-set]]

## Lo mencionan

- [[prevent-faults]]
- [[competence-set]]
