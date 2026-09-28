---
titulo: "parameterized type"
tipo: concepto
tags: ["tipos-parametrizados","generics","templates","reutilizacion","tiempo-compilacion","type","template","c++","design-patterns"]
temas: ["[[principios-de-diseno-orientado-a-objetos]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [27,88]
veces_en_examen: 0
---

# parameterized type

> Técnica de reutilización, también conocida como generics o templates, que permite definir un tipo sin especificar todos los tipos que usa, suministrándolos como parámetros.

Por ejemplo, una clase List puede ser parametrizada por el tipo de elementos. Es una tercera forma de componer comportamiento, junto con herencia de clases y composición de objetos. No permite cambios en tiempo de ejecución, a diferencia de la composición. La elección entre herencia, composición y tipos parametrizados depende de las restricciones de diseño e implementación.

## Relacionado

- [[template-method]]
- [[strategy]]
- [[class-inheritance]]
- [[object-composition]]
- [[type]]

