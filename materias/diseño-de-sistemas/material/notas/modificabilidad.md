---
titulo: "Modificabilidad"
tipo: concepto
tags: ["modificabilidad","calidad","cambio","arquitectura","mantenibilidad"]
temas: ["[[atributos-de-calidad]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [17]
veces_en_examen: 0
---

# Modificabilidad

> Atributo de calidad que consiste en manejar los cambios de un sistema con el menor tiempo, costo y riesgo posible.

Atributo de calidad que apunta al menor tiempo, costo y riesgo posible. Es un concepto muy parecido al de mantenibilidad. En esencia se trata de manejar los diferentes cambios, cualquiera que sea. Hay que pensar en qué parte de la arquitectura tiene más probabilidad de cambio y concentrarse en eso.

Preguntas clave: ¿cuándo se realiza un cambio? y ¿quién lo realiza? Los cambios pueden ser:
- Implementación: modificación de código fuente.
- En tiempo de compilación.
- Durante la construcción: selección de bibliotecas.
- Durante la configuración de opciones: configuración de parámetros.
- En tiempo de ejecución: configuración de parámetros, complementos, asignación de hardware.

Existen dos costos de modificabilidad:
1. El costo de introducir el mecanismo de cambio para hacer el sistema más modificable.
2. El costo de hacer la modificación utilizando ese mecanismo.

No se debería realizar cambio tras cambio de lo mismo; conviene implementar un mecanismo arquitectural para evitarlo y no contraer deuda técnica.

Tipos de modificabilidad: escalabilidad, variabilidad, portabilidad e independencia de ubicación. Un escenario de modificabilidad define si un sistema es modificable; se considera aprobado si las pruebas fueron exitosas y se hizo por debajo del tiempo indicado. Entre las tácticas de modificabilidad se encuentran la cohesión y diferir enlace.

## Relacionado

- [[escalabilidad]]
- [[variabilidad]]
- [[portabilidad]]
- [[independencia-de-ubicacion]]
- [[cohesion]]
- [[diferir-enlace]]
- [[tacticas]]
- [[patrones-arquitectonicos]]

## Lo mencionan

- [[cohesion]]
- [[diferir-enlace]]
- [[escalabilidad]]
- [[variabilidad]]
- [[portabilidad]]
- [[independencia-de-ubicacion]]
