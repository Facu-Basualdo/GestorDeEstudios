---
titulo: "Static Dependency"
tipo: concepto
tags: ["dependencia-estatica","analisis-estatico","acoplamiento"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [433]
veces_en_examen: 0
---

# Static Dependency

> Una dependencia estática es una relación entre dos archivos determinada por el código fuente, por ejemplo cuando un método llama a otro, o cuando una clase hereda de otra.

Una forma de determinar si un grupo de archivos está arquitectónicamente conectado es identificar las dependencias estáticas entre los archivos del proyecto.

Estas dependencias se pueden encontrar empleando una herramienta de análisis estático de código.

En el ejemplo del DSM de Apache Camel, las etiquetas 'dp', 'im' y 'ex' indican dependency, implementation y extension, respectivamente. Por ejemplo, MethodCallExpression.java depende y extiende a ExpressionDefinition.java.

Las dependencias estáticas son extraídas mediante ingeniería inversa del código fuente.

## Relacionado

- [[design-structure-matrix]]

## Lo mencionan

- [[design-structure-matrix]]
