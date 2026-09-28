---
titulo: "Evolutionary Dependency"
tipo: concepto
tags: ["dependencia-evolutiva","co-cambio","control-revisiones","acoplamiento-evolutivo"]
temas: ["[[organizacion,-deuda-tecnica-y-temas-avanzados]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [433]
veces_en_examen: 0
---

# Evolutionary Dependency

> Una dependencia evolutiva es una relación entre dos archivos que ocurre cuando estos cambian juntos, y se extrae del sistema de control de revisiones.

Una segunda forma de capturar dependencias entre archivos en un proyecto es identificar las dependencias evolutivas.

Una dependencia evolutiva ocurre cuando dos archivos cambian juntos, y puedes extraer esta información de tu sistema de control de revisiones.

En el DSM de Apache Camel, la información histórica de co-cambio se superpone a las dependencias estructurales. Por ejemplo, la celda en la fila 8, columna 3 está marcada con '4': no hay relación estructural entre BeanExpression.java y MethodNotFoundException.java, pero cambiaron juntos cuatro veces en el historial de revisiones.

Una celda con tanto un número como texto indica que el par de archivos tiene tanto relaciones estructurales como evolutivas.

## Relacionado

- [[design-structure-matrix]]

## Lo mencionan

- [[design-structure-matrix]]
