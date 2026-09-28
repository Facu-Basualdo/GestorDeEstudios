---
titulo: "Shadow"
tipo: concepto
tags: ["reintroduccion","tacticas","disponibilidad","monitoreo"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [81]
veces_en_examen: 0
---

# Shadow

> Táctica de reintroducción que opera un componente previamente fallado o actualizado en servicio en 'modo sombra' durante un tiempo predefinido antes de devolverlo a un rol activo.

Durante ese período, el comportamiento del componente puede monitorearse para verificar su corrección y puede repoblar su estado incrementalmente.


## Lo mencionan

- [[recover-from-faults]]
