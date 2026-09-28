---
titulo: "Cohesion"
tipo: concepto
tags: ["cohesion","modulos","mantenibilidad","cambio","calidad","diseno","software","medida","responsabilidades","grasp","modificabilidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]","[[estructuras-arquitecturales]]","[[patrones-grasp]]"]
fuente: "Cap17-UMLyPatrones.pdf"
paginas: [19,44]
veces_en_examen: 0
---

# Cohesion

> Cohesion (cohesión) es una medida de cuán fuertemente relacionadas y enfocadas están las responsabilidades de un elemento.

Un elemento con responsabilidades altamente relacionadas y que no hace una cantidad enorme de trabajo tiene alta cohesión. Los elementos incluyen clases, subsistemas, etc. Grady Booch describe la alta cohesión funcional como cuando los elementos de un componente 'todos trabajan juntos para proveer un comportamiento bien delimitado' [Booch94]. Escenarios de grados de cohesión funcional:
- Muy baja: una clase responsable de muchas cosas en áreas funcionales muy diferentes (ej. RDB-RPC-Interface).
- Baja: una clase con responsabilidad exclusiva de una tarea compleja en un área funcional (ej. RDBInterface con muchos métodos).
- Alta: una clase con responsabilidades moderadas en un área funcional y que colabora con otras clases (ej. RDBInterface parcialmente responsable).
- Moderada: una clase con responsabilidades livianas y exclusivas en pocas áreas lógicamente relacionadas al concepto de la clase pero no entre sí (ej. Company conoce empleados y finanzas).

## Relacionado

- [[modificabilidad]]
- [[high-cohesion]]
- [[low-coupling]]
- [[coupling]]
- [[tactics-for-modifiability]]
- [[increase-cohesion]]

## Lo mencionan

- [[modificabilidad]]
- [[high-cohesion]]
- [[modular-design]]
- [[coarse-grained-remote-interface]]
- [[tactics-for-modifiability]]
- [[coupling]]
- [[increase-cohesion]]
