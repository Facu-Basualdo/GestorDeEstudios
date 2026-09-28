---
titulo: "Container Portability"
tipo: concepto
tags: ["container","portabilidad","docker","containerd","oci"]
temas: ["[[virtualizacion,-cloud-y-sistemas-distribuidos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [300]
veces_en_examen: 0
---

# Container Portability

> La portabilidad de containers es la capacidad de un container creado con el motor de un proveedor de ejecutarse en el motor de runtime de otro proveedor, gracias a la interfaz estandarizada por la Open Container Initiative.

La interfaz estandarizada permite desarrollar un container en la computadora de desarrollo, desplegarlo en una computadora de producción y ejecutarlo allí. De todos modos, los recursos disponibles son diferentes en cada caso, por lo que el despliegue no es trivial. Si se especifican todos los recursos como parámetros de configuración, el movimiento del container a producción se simplifica.

## Relacionado

- [[container]]
- [[container-runtime-engine]]

