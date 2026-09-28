---
titulo: "Modifiability"
tipo: concepto
tags: ["calidad","atributo-de-calidad","cambios","arquitectura","modifiability","cambio","calidad-software","costo"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [46,154,155,156]
veces_en_examen: 0
---

# Modifiability

> Modifiability es la calidad de un sistema relacionada con el cambio, cuyo interés es bajar el costo y el riesgo de realizar cambios.

Para planificar la modifiability, un arquitecto debe considerar cuatro preguntas:

- ¿Qué puede cambiar? Puede cambiar cualquier aspecto del sistema: las funciones, la plataforma, el entorno, las cualidades y la capacidad.
- ¿Cuál es la probabilidad del cambio? No se puede planificar el sistema para todos los cambios posibles; hay que decidir cuáles son probables y, por tanto, cuáles se apoyarán.
- ¿Cuándo se hace el cambio y quién lo hace? Los cambios pueden hacerse en la implementación, durante la compilación, durante el build, durante la configuración o durante la ejecución. Puede hacerlos un desarrollador, un usuario final o un administrador; incluso el propio sistema puede ser el agente del cambio si aprende y se adapta.
- ¿Cuál es el costo del cambio? Hay dos tipos de costo: el de introducir el mecanismo para hacer el sistema más modificable y el de hacer la modificación usando ese mecanismo.

Para N modificaciones similares, el mecanismo se justifica si:

N * costo de hacer el cambio sin el mecanismo ≤ costo de crear el mecanismo + (N * costo de hacer el cambio con el mecanismo).

Si el código se modifica con frecuencia y no se introduce ningún mecanismo arquitectónico, suele acumularse deuda técnica. Sabores específicos de modifiability incluyen Scalability, Variability, Portability y Location Independence.

## Relacionado

- [[local-change]]
- [[nonlocal-change]]
- [[architectural-change]]
- [[architecture-debt]]
- [[quality-attribute]]
- [[list-of-thirteen]]
- [[scalability]]
- [[variability]]
- [[portability]]
- [[location-independence]]

## Lo mencionan

- [[local-change]]
- [[nonlocal-change]]
- [[architectural-change]]
- [[architecture-debt]]
- [[energy-efficiency]]
- [[integrability]]
- [[distance]]
- [[scalability]]
- [[modifiability-general-scenario]]
- [[performance]]
- [[reduce-computational-overhead]]
- [[reduce-indirection]]
- [[usability]]
- [[development-distributability]]
