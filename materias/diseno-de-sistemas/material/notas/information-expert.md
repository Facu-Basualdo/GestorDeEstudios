---
titulo: "Information Expert"
tipo: concepto
tags: ["grasp","informacion-experta","responsabilidades","patron","diseno","responsabilidad","informacion","principio","diseno-oo","asignacion","patrones","coupling","cohesion"]
temas: ["[[patrones-grasp]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [8,13,16,24,25]
veces_en_examen: 0
---

# Information Expert

> Information Expert es un principio de GRASP que asigna cada responsabilidad al objeto que posee la información necesaria para cumplirla.

El patrón se usa frecuentemente en la asignación de responsabilidades y expresa la intuición de que los objetos hacen cosas relacionadas con la información que tienen.

En el ejemplo del total de una venta:
- **Sale** conoce sus `SalesLineItem` y calcula el total (`getTotal()`).
- **SalesLineItem** conoce su cantidad y su `ProductDescription`, por lo que calcula el subtotal (`getSubtotal()`).
- **ProductDescription** conoce su precio y responde a `getPrice()`.

Como la información suele estar distribuida, varios “expertos parciales” colaboran enviándose mensajes para cumplir la responsabilidad.

Expert suele llevar a que un objeto de software haga las operaciones que normalmente se harían sobre la cosa del mundo real que representa. Peter Coad llama a esto la estrategia “Do It Myself”. También se relaciona con el principio de “animación”: en el software, los objetos están “vivos” y hacen cosas relacionadas con la información que conocen.

**Contraindicaciones**: a veces Expert sugiere una solución no deseada por problemas de coupling y cohesion. Por ejemplo, guardar una `Sale` en una base de datos: aunque `Sale` tiene la información, ponerle esa responsabilidad baja su cohesión, aumenta su coupling y duplica lógica de persistencia. Conviene separar concerns: la lógica de aplicación en los objetos de dominio y la lógica de base de datos en un subsistema de servicios de persistencia.

**Beneficios**:
- Mantiene el encapsulamiento de la información.
- Distribuye el comportamiento entre clases con la información requerida, favoreciendo definiciones más cohesivas y livianas.
- Suele apoyar Low Coupling y High Cohesion.

## Relacionado

- [[grasp]]
- [[design-pattern]]
- [[responsibility]]
- [[creator]]
- [[low-coupling]]
- [[controller]]
- [[domain-model]]
- [[high-cohesion]]

## Lo mencionan

- [[grasp]]
- [[design-pattern]]
- [[creator]]
- [[low-coupling]]
- [[controller]]
- [[bloated-controller]]
