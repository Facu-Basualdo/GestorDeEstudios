---
titulo: "Container Image Layers"
tipo: concepto
tags: ["containers","layers","imagenes","lamp"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [296]
veces_en_examen: 0
---

# Container Image Layers

> Estructura de una container image compuesta por capas, donde cada capa corresponde a un paso de construcción y permite transferir solo lo modificado.

- Las capas de containers son diferentes de la noción de capas en estructuras de módulos del Capítulo 1.
- Para construir una container image del LAMP stack (Linux, Apache, MySQL, PHP) se siguen pasos que generan capas:
  - 1. Crear una container image con una distribución Linux (descargada de una librería).
  - 2. Ejecutarla (instanciarla).
  - 3. Usar ese container para cargar Apache.
  - 4. Salir del container e informar al container management system que es una segunda imagen.
  - 5. Ejecutar esa segunda imagen y cargar MySQL.
  - 6. Salir y dar nombre a la tercera imagen.
  - 7. Repetir el proceso para cargar PHP, obteniendo una cuarta imagen con todo el LAMP stack.
- El container management system considera la imagen final formada por "layers".
- Al mover la imagen a producción, el primer movimiento requiere mover todos los elementos; si se actualiza solo PHP, el sistema mueve solo la capa PHP.
- Cargar una nueva versión de un container toma del orden de microsegundos o milisegundos, mientras que cargar una VM toma del orden de minutos.
- Actualizar una capa intermedia, como MySQL, requiere repetir los pasos desde esa capa (los pasos 5 a 7).

## Relacionado

- [[container-image]]
- [[container]]
- [[vm]]

## Lo mencionan

- [[container]]
- [[container-image]]
