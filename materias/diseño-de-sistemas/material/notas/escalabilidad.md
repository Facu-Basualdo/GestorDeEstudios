---
titulo: "Escalabilidad"
tipo: concepto
tags: ["escalabilidad","sistemas-distribuidos","diseno","rendimiento","modificabilidad","performance","recursos","elasticidad"]
temas: ["[[atributos-de-calidad]]","[[introduccion-a-los-sistemas-distribuidos]]"]
fuente: "arq. sistemas distribuidos.pdf"
paginas: [3]
veces_en_examen: 0
---

# Escalabilidad

> Capacidad de un sistema para brindar un servicio de alta calidad a medida que aumentan las demandas sobre el sistema.

Es uno de los puntos de diseño de los sistemas distribuidos. La pregunta es cómo se puede construir el sistema para que su capacidad pueda aumentarse en respuesta al incremento de la demanda.

Tiene tres dimensiones:

1. **Tamaño**: debería ser posible añadir más recursos para hacer frente al creciente número de usuarios; idealmente el sistema debería aumentar de tamaño automáticamente.
2. **Distribución**: debería ser posible dispersar geográficamente los componentes sin degradar el rendimiento; la ubicación no debería ser un factor determinante.
3. **Gestionabilidad**: debería ser posible gestionar el sistema a medida que aumenta de tamaño, incluso si partes del sistema se encuentran en organizaciones independientes; en la práctica suele ser el factor que limita el grado de escalabilidad.

## Relacionado

- [[sistema-distribuido]]
- [[modificabilidad]]
- [[performance]]
- [[elasticidad]]

## Lo mencionan

- [[sistema-distribuido]]
- [[modificabilidad]]
- [[elasticidad]]
- [[cliente-servidor]]
- [[performance]]
