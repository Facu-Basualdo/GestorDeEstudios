---
titulo: "Functional Requirements"
tipo: concepto
tags: ["requisitos","funcionales","funcionalidad","responsabilidad","calidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [59]
veces_en_examen: 0
---

# Functional Requirements

> Es el término que designa los requisitos sobre lo que el sistema hace; su definición es escurridiza y el autor prefiere reemplazarlo por 'responsibility'.

Después de más de 30 años discutiendo la distinción entre requisitos funcionales y requisitos de calidad, la definición sigue siendo difícil. ISO 25010 define functional suitability como la capacidad del producto de software para proveer funciones que satisfacen necesidades declaradas e implícitas cuando el software se usa bajo condiciones especificadas. Una interpretación: la funcionalidad describe lo que el sistema hace y la calidad describe cuán bien lo hace. Esta distinción se rompe en casos como controlar el comportamiento de un motor (implica timing) o controlar el acceso con usuario/contraseña (no es el propósito del sistema pero es una función). Por eso se prefiere usar 'responsibility' para describir los cómputos que el sistema debe realizar.

## Relacionado

- [[functional-suitability]]
- [[responsibility]]
- [[quality-attribute]]

## Lo mencionan

- [[responsibility]]
