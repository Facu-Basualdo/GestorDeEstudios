---
titulo: "Binding Time"
tipo: concepto
tags: ["modificabilidad","ciclo-de-vida","binding"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [159]
veces_en_examen: 0
---

# Binding Time

> Binding time es el punto del ciclo de vida del desarrollo de software en el que se realiza una modificacion o se vincula un valor.

Es el cuarto parametro en un modelo de modificabilidad. Si se ignora el costo de preparar la arquitectura para la modificacion, se prefiere que un cambio se vincule lo mas tarde posible. Los cambios pueden hacerse con exito tarde en el ciclo de vida solo si la arquitectura esta preparada. Una arquitectura preparada tendra costos cero o muy bajos para modificaciones que ocurren tarde.

## Relacionado

- [[defer-binding]]
- [[tactics-for-modifiability]]

## Lo mencionan

- [[tactics-for-modifiability]]
- [[defer-binding]]
