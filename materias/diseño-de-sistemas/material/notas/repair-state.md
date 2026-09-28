---
titulo: "Repair State"
tipo: concepto
tags: ["safety","tactica","reparacion","recuperacion"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [205]
veces_en_examen: 0
---

# Repair State

> Táctica de recovery que repara un estado erróneo, aumentando el conjunto de estados que un componente puede manejar competentemente, y luego continúa la ejecución.

Por ejemplo, la función de asistencia de mantenimiento de carril de un vehículo monitorea si el conductor se mantiene en su carril y devuelve activamente el vehículo a una posición entre las líneas —un estado seguro— si se desvía. Esta táctica es inapropiada como medio de recuperación de fallas no anticipadas.


## Lo mencionan

- [[recovery]]
