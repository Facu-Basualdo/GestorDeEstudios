---
titulo: "Combined View"
tipo: concepto
tags: ["vistas","combinacion","overlay","arquitectura","documentacion"]
temas: ["[[diseno,-evaluacion-y-documentacion-arquitectonica]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [411,413]
veces_en_examen: 0
---

# Combined View

> Una combined view contiene elementos y relaciones que provienen de dos o más vistas.

Una combined view contiene elementos y relaciones que provienen de dos o más vistas. Son útiles siempre que no se sobrecarguen con demasiados mapeos. La forma más fácil de fusionar vistas es crear un overlay que combine la información que habría aparecido en dos vistas separadas; esto funciona bien si la relación entre las vistas es estrecha. Combinaciones frecuentes: vistas C&C entre sí (muestran relaciones de runtime entre componentes y conectores de varios tipos); deployment view con cualquier vista C&C que muestre procesos (los procesos son los componentes que se despliegan en procesadores, máquinas virtuales o contenedores); decomposition view con work assignment, implementation, uses o layered views (los módulos descompuestos forman las unidades de trabajo, desarrollo y uso, y pueblan las capas). La Figura 22.1 muestra un ejemplo de combined view que es un overlay de client-server, multi-tier y deployment views.

## Relacionado

- [[overlay]]

## Lo mencionan

- [[overlay]]
- [[mapping-between-views]]
