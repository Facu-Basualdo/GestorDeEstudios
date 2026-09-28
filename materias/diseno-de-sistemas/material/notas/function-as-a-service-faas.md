---
titulo: "Function-as-a-Service (FaaS)"
tipo: concepto
tags: ["faas","serverless","cloud","containers"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [301]
veces_en_examen: 0
---

# Function-as-a-Service (FaaS)

> Function-as-a-Service (FaaS) son las características del proveedor de cloud que soportan la serverless architecture, con limitaciones sobre imágenes base, cold start y tiempo de ejecución.

Los proveedores de cloud imponen limitaciones prácticas:

- Tienen una selección limitada de imágenes base de containers, lo que restringe las opciones de lenguaje de programación y dependencias de bibliotecas.
- El tiempo de cold start, cuando el container se asigna y carga por primera vez, puede ser de varios segundos; las solicitudes posteriores se atienden casi instantáneamente porque la imagen del container queda cacheada en un nodo.
- El tiempo de ejecución para una solicitud está limitado: el servicio debe procesar la solicitud y terminar dentro del límite del proveedor o será terminado.

Estas limitaciones existen por razones económicas, para ajustar el precio de FaaS y asegurar que ningún usuario consuma demasiado del pool de recursos. Algunos diseñadores intentan evitarlas preiniciando servicios para evitar la latencia de cold start, haciendo solicitudes dummy para mantener servicios en caché, y bifurcando o encadenando solicitudes para extender el tiempo efectivo de ejecución.

## Relacionado

- [[serverless-architecture]]
- [[container]]

## Lo mencionan

- [[serverless-architecture]]
