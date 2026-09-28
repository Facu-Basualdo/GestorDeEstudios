---
titulo: "Executable Assertions"
tipo: concepto
tags: ["testability","aserciones","pruebas","observabilidad","invariantes"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [239]
veces_en_examen: 0
---

# Executable Assertions

> Táctica de testability que inserta aserciones ejecutables en el código para indicar cuándo y dónde el programa se encuentra en un estado defectuoso.

Las aserciones suelen codificarse a mano y se colocan en lugares deseados, generalmente donde se referencian o modifican valores de datos. Pueden expresarse como precondiciones y poscondiciones de cada método y como invariantes de clase. Aumentan la observabilidad porque una aserción puede marcarse como fallida. Si cubren los casos de prueba, incrustan el test oracle en el código, asumiendo que las aserciones sean correctas.

## Relacionado

- [[control-and-observe-system-state]]

## Lo mencionan

- [[control-and-observe-system-state]]
