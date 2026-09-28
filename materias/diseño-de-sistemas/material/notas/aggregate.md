---
titulo: "Aggregate"
tipo: concepto
tags: ["usabilidad","tacticas","agregacion","grupos"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [254]
veces_en_examen: 0
---

# Aggregate

> Aggregate es una táctica de usabilidad que permite agrupar objetos de bajo nivel en un grupo único para aplicarles una misma operación.

Es útil cuando el usuario realiza operaciones repetitivas u operaciones que afectan a un gran número de objetos de la misma manera. Al agregar los objetos en un grupo, la operación se aplica al grupo y se evita la repetición y los posibles errores de hacer la misma operación muchas veces.

Ejemplo: agregar todos los objetos de una diapositiva y cambiar el texto a fuente de 14 puntos.

## Relacionado

- [[usability-tactics]]

## Lo mencionan

- [[usability-tactics]]
