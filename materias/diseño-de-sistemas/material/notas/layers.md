---
titulo: "Layer"
tipo: concepto
tags: ["patron-arquitectonico","capas","modificabilidad","portabilidad","reutilizacion","capa","modulo","abstraccion","separacion-de-consideraciones"]
temas: ["[[estructuras-y-vistas-arquitectonicas]]","[[patrones-arquitectonicos]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [27,167]
veces_en_examen: 0
---

# Layer

> El patrón layers divide el software en capas, donde cada capa es un agrupamiento de módulos con un conjunto cohesivo de servicios y las relaciones entre capas deben ser unidireccionales.

El patrón divide el sistema en unidades llamadas capas. Cada capa es un agrupamiento de módulos que ofrece un conjunto cohesivo de servicios. Las relaciones permitidas entre capas deben ser unidireccionales.

Las capas particionan por completo un conjunto de software y cada partición se expone a través de una interfaz pública. Si (A, B) está en la relación de orden, la capa A puede usar cualquier facilidad pública de la capa B. Normalmente solo se permiten usos de la capa inmediatamente inferior, aunque en algunos casos se permite usar una capa inferior no adyacente; este caso se llama layer bridging. Los usos hacia arriba no están permitidos.

Beneficios:
- Una capa puede cambiarse sin afectar las capas superiores, siempre que su interfaz no cambie.
- Las capas inferiores pueden reutilizarse en distintas aplicaciones; por ejemplo, una capa que permite portabilidad entre sistemas operativos es útil en cualquier sistema que deba correr en múltiples sistemas operativos. Las capas más bajas suelen ser provistas por software comercial.
- Al restringirse las relaciones permitidas, se reduce la cantidad de interfaces que cada equipo debe entender.

Tradeoffs:
- Si el layering no está bien diseñado, puede estorbar al no proveer las abstracciones de bajo nivel que los programadores de niveles superiores necesitan.
- A menudo agrega una penalización de rendimiento: una llamada desde la capa superior puede tener que atravesar muchas capas inferiores antes de ejecutarse.
- Si ocurren muchos casos de layer bridging, el sistema puede no cumplir sus metas de portabilidad y modificabilidad.

## Relacionado

- [[layer-bridging]]
- [[layer-structure]]

## Lo mencionan

- [[layer-bridging]]
- [[layer-structure]]
