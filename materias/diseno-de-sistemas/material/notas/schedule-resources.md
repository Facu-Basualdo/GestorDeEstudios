---
titulo: "Schedule Resources"
tipo: concepto
tags: ["eficiencia-energetica","scheduling","tacticas","asignacion-de-recursos","performance","recursos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [126,181]
veces_en_examen: 0
---

# Schedule Resources

> Schedule Resources asigna tareas a recursos computacionales para gestionar el uso de energía respetando restricciones y prioridades de las tareas.

Es una táctica de asignación de recursos.

- Scheduling es la asignación de tareas a recursos computacionales.
- En el contexto energético, se usa para gestionar el uso de energía considerando restricciones de las tareas y respetando prioridades.
- Puede basarse en datos recolectados con una o más tácticas de monitoreo de recursos.
- Usando un servicio de descubrimiento de energía en la nube o un controlador en un contexto multi-core, una tarea puede cambiar dinámicamente entre recursos y elegir los que ofrecen mejor eficiencia energética o menor costo energético.
- Ejemplo: un proveedor con menos carga puede adaptar su uso de energía y consumir menos energía en promedio por unidad de trabajo.

## Relacionado

- [[allocate-resources]]
- [[discovery]]
- [[scheduling-policies]]
- [[manage-resources]]

## Lo mencionan

- [[allocate-resources]]
- [[manage-resources]]
- [[introduce-concurrency]]
