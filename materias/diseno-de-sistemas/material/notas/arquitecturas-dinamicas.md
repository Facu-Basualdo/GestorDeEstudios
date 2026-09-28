---
titulo: "Arquitecturas dinámicas"
tipo: concepto
tags: ["arquitecturas-dinamicas","documentacion","variabilidad","interfaces","runtime"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [428]
veces_en_examen: 0
---

# Arquitecturas dinámicas

> Las arquitecturas dinámicas son arquitecturas que cambian mucho más rápido que el ciclo de documentación, ya sea en tiempo de ejecución o por ciclos de release y deploy de alta frecuencia.

Ejemplos:

- Un navegador que descarga e instala un plug-in, se reconfigura y usa el nuevo componente sin necesidad de reiniciar ni de pasar por el ciclo code–integrate–test.
- Sistemas orientados a servicios que utilizan descubrimiento y binding dinámico de servicios.
- Sistemas altamente dinámicos, autoorganizados y reflectivos (autoconscientes).
- Sistemas reconstruidos y redeployados con gran rapidez, como sitios web comerciales que hacen go live muchas veces al día.

Todas las arquitecturas dinámicas comparten algo: cambian mucho más rápido que el ciclo de documentación. Para documentarlas:

- Documentar lo que es verdad en todas las versiones del sistema (los invariantes). Por ejemplo, un plug-in debe tener ciertas propiedades e interfaz, y se inserta en un lugar predeterminado de la arquitectura. Así la documentación puede quedar como una descripción de restricciones o guías que toda versión conforme debe seguir.
- Documentar las formas en que la arquitectura puede cambiar, normalmente agregando componentes o reemplazando implementaciones. El lugar para hacerlo es la variability guide.
- Generar documentación de interfaces automáticamente. Con mecanismos explícitos como protocol buffers siempre hay definiciones actualizadas; conviene incorporarlas a una base de datos para tener historiales de revisión y poder buscar qué información usa cada componente.

## Relacionado

- [[variability-guide]]
- [[protocol-buffers]]

