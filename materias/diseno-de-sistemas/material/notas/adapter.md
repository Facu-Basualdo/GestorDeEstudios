---
titulo: "Adapter"
tipo: concepto
tags: ["patron-de-diseno","estructural","patron","adaptador","interfaz","patron-estructural","wrapper","patron de diseno","estructura","adaptacion de interfaz","reutilizacion","herencia","composicion","adapter","target"]
temas: ["[[patrones-estructurales]]","[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [17,71,133,134,135,136]
veces_en_examen: 0
---

# Adapter

> Convierte la interfaz de una clase en otra interfaz que los clientes esperan, permitiendo que clases con interfaces incompatibles trabajen juntas.

## Motivación

En un editor de dibujo, se tiene una jerarquía de clases Shape (LineShape, PolygonShape, etc.). Se necesita un TextShape que muestre y edite texto, pero la implementación desde cero es compleja. Existe una clase ya hecha TextView de un toolkit, pero su interfaz no coincide con Shape. Se define entonces TextShape como un **adaptador** que adapta la interfaz de TextView a la de Shape, ya sea mediante herencia (class adapter) o composición (object adapter).

El diagrama muestra el caso de objeto: BoundingBox (de Shape) se convierte en GetExtent (de TextView). Además, el adaptador puede agregar funcionalidad faltante, como CreateManipulator para soportar arrastre.

## Aplicabilidad

- Usar una clase existente cuya interfaz no coincide con la necesaria.
- Crear una clase reutilizable que coopere con clases imprevistas o no relacionadas.
- (Solo adaptador de objeto) Cuando se necesitan varias subclases existentes y no es práctico adaptar cada una mediante subclases.

## Estructura

### Class Adapter (herencia múltiple)
- Target define la interfaz específica del dominio.
- Adaptee define la interfaz existente que necesita adaptación.
- Adapter hereda de Target y Adaptee, adaptando la interfaz de Adaptee a Target.

### Object Adapter (composición)
- Target: interfaz que usa el Cliente.
- Client: colabora con objetos que cumplen la interfaz Target.
- Adaptee: interfaz existente que necesita adaptación.
- Adapter: adapta la interfaz de Adaptee a la interfaz Target mediante composición.

## Participantes (Object Adapter)

- **Target** (Shape): define la interfaz específica del dominio que usa el Cliente.
- **Client** (DrawingEditor): colabora con objetos que cumplen la interfaz Target.
- **Adaptee** (TextView): define una interfaz existente que necesita adaptación.
- **Adapter** (TextShape): adapta la interfaz de Adaptee a la interfaz Target.

## Colaboraciones

Los clientes llaman operaciones en una instancia de Adapter. El adaptador llama a operaciones de Adaptee que ejecutan la solicitud.

## Consecuencias

### Class Adapter
- Se adapta a un Adaptee concreto; no funciona si se quiere adaptar una clase y todas sus subclases.
- Permite que Adapter anule parte del comportamiento de Adaptee (hereda de él).
- Introduce un solo objeto, sin indirección adicional.

### Object Adapter
- Un solo Adapter puede trabajar con muchos Adaptees (él mismo y sus subclases).
- Puede agregar funcionalidad a todos los Adaptees a la vez.
- Dificulta anular comportamiento de Adaptee; requiere subclasificar y hacer referencia a la subclase.

### Otras consideraciones

1. **Cantidad de adaptación:** Varía desde simple conversión de interfaz (cambio de nombres) hasta soportar un conjunto completamente diferente de operaciones, según la similitud entre Target y Adaptee.
2. **Adaptadores enchufables (Pluggable Adapters):** Una clase es más reutilizable cuando minimiza las suposiciones que otras clases deben hacer para usarla. Incorporar la adaptación de interfaz en la clase misma permite que se integre en sistemas que esperan interfaces diferentes.
3. **Adaptadores bidireccionales (Two-way Adapters):** Proporcionan transparencia al conformarse tanto a la interfaz Target como a la interfaz Adaptee, útiles cuando dos clientes necesitan ver un objeto de manera diferente.

## Relacionado

- [[abstract-factory]]
- [[factory-method]]
- [[prototype]]
- [[singleton]]
- [[pluggable-adapter]]
- [[two-way-adapter]]
- [[patrones-estructurales]]

## Lo mencionan

- [[bridge]]
- [[decorator]]
- [[proxy]]
- [[design-pattern-classification]]
- [[incapacidad-de-alterar-clases-convenientemente]]
- [[design-aspects-that-design-patterns-let-you-vary]]
- [[structural-patterns]]
- [[pluggable-adapter]]
- [[two-way-adapter]]
- [[class-adapter]]
- [[object-adapter]]
- [[patrones-gof]]
- [[patrones-estructurales]]
