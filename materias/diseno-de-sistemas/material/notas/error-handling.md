---
titulo: "Error Handling"
tipo: concepto
tags: ["manejo-de-errores","errores","interfaces","excepciones","interfaz","recuperacion","estrategias","idempotencia"]
temas: ["[[diseno-de-interfaces-y-comunicacion]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [285,286,287,288,289,290]
veces_en_examen: 0
---

# Error Handling

> Diseño de respuestas apropiadas para que un sistema actúe ante circunstancias no deseadas al usar una interfaz.

Los arquitectos suelen concentrarse en el caso nominal, cuando todo funciona según lo planeado, pero el mundo real incluye situaciones no deseadas: llamadas con parámetros inválidos, recursos que requieren más memoria de la disponible, llamadas que nunca retornan, sensores que no responden o responden con datos sin sentido.

Los actores necesitan saber si el elemento está funcionando correctamente, si su interacción fue exitosa o si ocurrió un error. Estrategias para lograrlo:
- Las operaciones fallidas pueden lanzar una excepción.
- Las operaciones pueden devolver un indicador de estado con códigos predefinidos que deben evaluarse para detectar resultados erróneos.
- Pueden usarse propiedades para almacenar datos que indiquen si la última operación fue exitosa o si elementos con estado están en un estado erróneo.
- Pueden dispararse eventos de error, como un timeout, para interacciones asíncronas fallidas.
- Puede leerse el log de errores conectándose a un flujo de datos de salida específico.

La especificación de qué excepciones, códigos de estado, eventos e información describen resultados erróneos pasa a formar parte de la interfaz de un elemento.

Fuentes comunes de errores que la interfaz debería manejar con elegancia:
- Información incorrecta, inválida o ilegal enviada a la interfaz (por ejemplo, llamar a una operación con un parámetro null que no debería ser null).
- El elemento está en el estado incorrecto para manejar la solicitud, ya sea por una acción previa o por la falta de acción previa (por ejemplo, invocar una operación antes de que termine la inicialización, o escribir en un dispositivo de almacenamiento que el operador puso fuera de línea).
- Un error de hardware o software impidió que el elemento ejecutara con éxito (fallas del procesador, falta de respuesta de la red, imposibilidad de asignar memoria).
- El elemento no está configurado correctamente (por ejemplo, su cadena de conexión a la base de datos apunta al servidor equivocado).

Indicar la fuente del error ayuda al sistema a elegir la estrategia de corrección y recuperación adecuada: los errores temporales con operaciones idempotentes pueden manejarse esperando y reintentando; los errores por entrada inválida requieren corregir los requests y reenviarlos; las dependencias faltantes deben reinstalarse antes de reintentar; los bugs de implementación deben corregirse agregando el escenario de falla como caso de prueba adicional para evitar regresiones.

## Relacionado

- [[timeout]]
- [[interface]]

## Lo mencionan

- [[interface]]
