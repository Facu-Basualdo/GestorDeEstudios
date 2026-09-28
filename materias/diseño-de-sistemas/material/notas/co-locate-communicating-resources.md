---
titulo: "Co-locate Communicating Resources"
tipo: concepto
tags: ["rendimiento","co-localizacion","comunicacion","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [179]
veces_en_examen: 0
---

# Co-locate Communicating Resources

> Táctica que ubica los recursos que se comunican en el mismo procesador o entorno de ejecución para reducir costos de conmutación y comunicación.

Los costos de cambio de contexto y de comunicación entre componentes se acumulan, especialmente si los componentes están en nodos diferentes de una red. Co-locar recursos puede significar alojar componentes cooperantes en el mismo procesador para evitar la demora de la comunicación por red, poner los recursos en el mismo componente de software en runtime para evitar incluso el costo de una llamada a subrutina, o colocar capas de una arquitectura multi-tier en el mismo rack del centro de datos.

## Relacionado

- [[reduce-computational-overhead]]

## Lo mencionan

- [[reduce-computational-overhead]]
