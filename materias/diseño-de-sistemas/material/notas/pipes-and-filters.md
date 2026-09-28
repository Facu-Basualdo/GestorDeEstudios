---
titulo: "Pipes and Filters (Tuberías y filtros)"
tipo: concepto
tags: ["pipes-and-filters","tuberias","filtros","arquitectura","procesamiento-de-datos"]
temas: ["[[patrones-arquitectonicos]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [41]
veces_en_examen: 0
---

# Pipes and Filters (Tuberías y filtros)

> Es un patrón arquitectónico en el que el procesamiento de datos se organiza en componentes discretos (filtros) que transforman un tipo específico de datos, y los datos fluyen de componente en componente.

Los componentes ayudan a hacer transformaciones y están enfocados en realizar una determinada tarea. La entrada de un componente es la salida de un componente anterior. No comparten estados con otro filtro: una vez que termina su tarea pasa a la siguiente, y no se conocen entre sí.

Se utiliza mucho para la gestión de datos y para el procesamiento de flujos de trabajo. No está pensado para ser interactivo con el usuario. Es común en aplicaciones de procesamiento de datos (por lotes y basadas en transacciones) donde los inputs se procesan en etapas separadas para generar outputs relacionados. Se originó de las primeras computadoras que solamente servían para procesar datos, y es común en sistemas de pagos.

**Ventajas:**
- Es fácil de entender y soporta reutilización.
- El flujo de trabajo es parecido al de muchas organizaciones.
- La evolución mediante agregación de transformaciones es fundamental.
- Se puede implementar de manera secuencial o concurrente.

**Desventajas:**
- El formato de transferencia de datos debe acordarse entre las transformaciones que se comunican.
- Cada transformación debe analizar su entrada y convertir su salida al formato acordado; esto aumenta la sobrecarga del sistema y puede imposibilitar la reutilización de componentes arquitectónicos que utilizan estructuras de datos incompatibles.

**Ejemplos:**
- En un comando, las tuberías (`|`) leen el contenido de un archivo, filtran las líneas que contienen 'error' y hacen un conteo de palabras.
- Microsoft soporta usar este patrón para el filtrado de datos.
- Se pueden tener tareas en paralelo y el patrón permite ir agregando tuberías.

Este patrón se hizo hace 50 años y se sigue utilizando hoy en día plenamente.


