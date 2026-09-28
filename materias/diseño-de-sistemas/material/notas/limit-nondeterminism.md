---
titulo: "Limit Nondeterminism"
tipo: concepto
tags: ["testability","determinismo","pruebas","paralelismo","complejidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [242]
veces_en_examen: 0
---

# Limit Nondeterminism

> Táctica de testability que busca encontrar las fuentes de no determinismo, como el paralelismo no restringido, y eliminarlas en la medida de lo posible.

Los sistemas no deterministas son más difíciles de probar que los deterministas. Algunas fuentes de no determinismo son inevitables, por ejemplo en sistemas multi-threaded que responden a eventos impredecibles; para esos casos se pueden usar otras tácticas como record/playback.

## Relacionado

- [[limit-complexity]]
- [[record-playback]]

## Lo mencionan

- [[limit-complexity]]
