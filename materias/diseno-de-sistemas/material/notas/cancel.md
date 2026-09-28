---
titulo: "Cancel"
tipo: concepto
tags: ["usabilidad","tacticas","cancel","iniciativa-del-usuario"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [254]
veces_en_examen: 0
---

# Cancel

> Cancel es una táctica de usabilidad, dentro del soporte a la iniciativa del usuario, que permite al usuario interrumpir una actividad en curso.

Para implementar cancel, el sistema debe:

* Estar escuchando constantemente la orden de cancel, sin ser bloqueado por la actividad que se está cancelando.
* Terminar la actividad cancelada.
* Liberar los recursos que usaba la actividad cancelada.
* Informar a los componentes que colaboraban con la actividad cancelada para que tomen las medidas correspondientes.

## Relacionado

- [[usability-tactics]]

## Lo mencionan

- [[usability-tactics]]
