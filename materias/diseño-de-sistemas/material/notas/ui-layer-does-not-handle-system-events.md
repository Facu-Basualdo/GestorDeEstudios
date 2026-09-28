---
titulo: "UI Layer Does Not Handle System Events"
tipo: concepto
tags: ["grasp","controller","ui","responsabilidad","reutilizacion"]
temas: ["[[controladores-y-arquitectura-en-capas]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [42]
veces_en_examen: 0
---

# UI Layer Does Not Handle System Events

> Corolario del patrón Controller: los objetos de la UI y la capa de UI no deben tener la responsabilidad de manejar los eventos del sistema.

Por ejemplo, `SaleJFrame` (parte de la capa de UI) delega la solicitud `enterItem` al objeto `Register`; no se involucra en procesar la operación ni en decidir cómo manejarla.

Si un objeto de la UI maneja una operación del sistema que representa un proceso de negocio, la lógica quedaría contenida en un objeto de interfaz y la oportunidad de reutilizar la lógica disminuye por su acoplamiento a una interfaz particular.

Poner la responsabilidad de la operación en un controller de dominio facilita reutilizar la lógica en futuras aplicaciones, desacoplar la UI (por ejemplo, cambiar de framework) y correr el sistema en modo batch.

## Relacionado

- [[controller]]

