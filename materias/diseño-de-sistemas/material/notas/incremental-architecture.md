---
titulo: "Incremental Architecture"
tipo: concepto
tags: ["arquitectura-incremental","desarrollo-incremental","documentacion-de-arquitectura","vistas","stakeholders"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [445]
veces_en_examen: 0
---

# Incremental Architecture

> La arquitectura incremental consiste en liberar la arquitectura en incrementos, específicamente liberando la documentación de arquitectura en incrementos y decidiendo qué vistas publicar y a qué profundidad.

Las metodologías ágiles están construidas sobre el pilar del desarrollo incremental, donde cada incremento entrega valor al cliente o usuario. Aunque el proyecto no sea ágil, se debería esperar desarrollar y liberar la arquitectura en incrementos, siguiendo un tempo que soporte el calendario de pruebas y releases del propio proyecto.

La arquitectura incremental se trata de liberar la arquitectura en incrementos. Específicamente, esto significa liberar la documentación de arquitectura (como se describe en el Capítulo 22) en incrementos. Esto, a su vez, implica decidir qué vistas publicar (del conjunto planificado) y a qué profundidad. Usando las estructuras del Capítulo 1, los candidatos para el primer incremento son:

- Una **estructura de descomposición en módulos**: informa la estructura del equipo para el proyecto de desarrollo, permitiendo que la organización del proyecto emerja. Los equipos pueden definirse, contratarse, presupuestarse y entrenarse. La estructura del equipo será la base de la planificación y el presupuesto del proyecto, por lo que esta estructura técnica define la estructura de gestión del proyecto.
- Una **estructura de 'uses' de módulos**: permite planificar los incrementos, algo crítico en cualquier proyecto que espere liberar software incrementalmente. La estructura 'uses' se usa para diseñar sistemas que puedan extenderse para agregar funcionalidad, o de los cuales se puedan extraer subconjuntos funcionales útiles. Tratar de crear un sistema que soporte intencionalmente el desarrollo incremental es problemático si no se planifica exactamente cuáles serán los incrementos.
- Las **estructuras component-and-connector (C&C)** que mejor transmitan el enfoque general de la solución.
- Una **estructura de despliegue de trazo grueso** que aborde al menos preguntas importantes, como si el sistema se desplegará en dispositivos móviles, en una infraestructura de nube, etc.

Después, usar las necesidades de los stakeholders de la arquitectura como guía al diseñar el contenido de las releases posteriores.

**Recomendaciones para el arquitecto:** conocer quiénes son los stakeholders y cuáles son sus necesidades para diseñar soluciones y documentación apropiadas. Además:
- Trabajar con los stakeholders del proyecto para determinar el tempo de release y el contenido de cada incremento.
- El primer incremento arquitectónico debería incluir las vistas de descomposición en módulos y de 'uses', además de una vista C&C preliminar.
- Usar la influencia para asegurar que las primeras releases traten los requisitos de atributos de calidad más desafiantes, evitando sorpresas arquitectónicas desagradables al final del ciclo de desarrollo.
- Escalonar las releases de arquitectura para soportar los incrementos del proyecto y las necesidades de los stakeholders de desarrollo mientras trabajan en cada incremento.

## Relacionado

- [[uses-structure]]
- [[component-and-connector-structures]]
- [[deployment-structure]]

