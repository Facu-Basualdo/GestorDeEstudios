---
titulo: "Creador"
tipo: concepto
tags: ["grasp","creador","creacion","responsabilidad","acoplamiento"]
temas: ["[[patrones-de-asignacion-de-responsabilidades-grasp]]"]
fuente: "SOLID y GRASP - Buenas practicas hacia el exito en el desarrollo de software (1).pdf"
paginas: [30,31,32]
veces_en_examen: 0
---

# Creador

> Patrón GRASP que asigna la responsabilidad de crear instancias de una clase a otra clase que cumple ciertas condiciones, como contener o agregar la clase, almacenarla, tener la información necesaria o usarla directamente.

La creación de instancias es una actividad común. El patrón creador ayuda a identificar quién debe ser responsable de crear nuevos objetos. Una clase debe crear una instancia si:
- Contiene o agrega la clase.
- Almacena la instancia en algún sitio (ej. base de datos).
- Tiene la información necesaria para realizar la creación (es 'Experta').
- Usa directamente las instancias creadas del objeto.

Consecuencia: visibilidad entre clase creada y creadora. Ventaja: bajo acoplamiento, facilidad de mantenimiento y reutilización.

Ejemplos:
- Cliente contiene Pedidos, por lo que Cliente crea Pedido.
- RepositorioDePedidos persiste Pedidos, por lo que puede crearlos.
- Cliente tiene el id necesario para crear Pedido.
- Cliente usa directamente Pedido en sus métodos.

## Relacionado

- [[experto-en-informacion]]

