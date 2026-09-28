---
titulo: "Sharing terminal symbols with the Flyweight pattern"
tipo: concepto
tags: ["flyweight","interpreter","compartir","simbolos-terminales","intrinseco-extrinseco"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [236]
veces_en_examen: 0
---

# Sharing terminal symbols with the Flyweight pattern

> En gramáticas donde un símbolo terminal aparece muchas veces, se puede compartir una sola instancia de ese símbolo usando el patrón Flyweight.

Las gramáticas cuyas oraciones contienen muchas ocurrencias de un símbolo terminal pueden beneficiarse de compartir una sola copia de ese símbolo. Las gramáticas de programas de computadora son un buen ejemplo: cada variable de programa aparece en muchos lugares del código. En el ejemplo de Motivación, una oración puede tener el símbolo terminal 'dog' (modelado por la clase LiteralExpression) apareciendo muchas veces. Los nodos terminales generalmente no almacenan información sobre su posición en el árbol sintáctico abstracto. Los nodos padres les pasan el contexto que necesitan durante la interpretación. Por lo tanto, hay una distinción entre estado compartido (intrínseco) y estado pasado (extrínseco), y el patrón Flyweight (195) se aplica.

## Relacionado

- [[flyweight]]

