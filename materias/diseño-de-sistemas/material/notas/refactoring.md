---
titulo: "Refactoring"
tipo: concepto
tags: ["refactoring","reorganizacion","diseno","software","mantenimiento","agil","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[introduccion-y-fundamentos-de-patrones]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [66]
veces_en_examen: 0
---

# Refactoring

> Acción de modificar un sistema para revertir la deuda de arquitectura y mejorar atributos de calidad como seguridad, performance o modificabilidad.

El texto da ejemplos de motivos para refactorizar:
- Mejorar la seguridad: colocar distintos módulos en distintos subsistemas según sus propiedades de seguridad.
- Mejorar la performance: eliminar cuellos de botella y reescribir porciones lentas del código.
- Mejorar la modificabilidad: cuando dos módulos se ven afectados por los mismos tipos de cambios repetidamente porque son duplicados parciales, se puede extraer la funcionalidad común a su propio módulo, mejorando la cohesión y reduciendo los lugares a cambiar.

El code refactoring es una práctica central de los proyectos de desarrollo ágil, como paso de limpieza para evitar código duplicado o demasiado complejo. El concepto también se aplica a elementos arquitectónicos.

## Relacionado

- [[prototyping-phase]]
- [[expansionary-phase]]
- [[consolidating-phase]]
- [[design-pattern]]
- [[architecture-debt]]

## Lo mencionan

- [[consolidating-phase]]
- [[architecture-debt]]
- [[early-design-decisions]]
- [[architecture-debt-monitoring-process]]
