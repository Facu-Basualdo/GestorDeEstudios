---
titulo: "Estructuras de componentes y conectores"
tipo: concepto
tags: ["arquitectura","componentes","conectores","ejecucion","cliente-servidor"]
temas: ["[[estructuras-arquitecturales]]"]
fuente: "arquitectura_compressed.pdf"
paginas: [5]
veces_en_examen: 0
---

# Estructuras de componentes y conectores

> Las estructuras de componentes y conectores son vistas arquitecturales que modelan los elementos en tiempo de ejecución y sus relaciones, sin especificar su ubicación física.

Se refieren a servicios, ejecutables y cosas que están corriendo en memoria, pero no dicen la ubicación física exacta en un nodo. Cuando se habla de componentes no se habla de un componente lógico, sino de componentes físicos: servicios, puertos, clientes, servidores, filtros o cualquier tipo de elemento en tiempo de ejecución. También cambia la definición de conectores. Este tipo de estructura es crucial para preguntarse propiedades de ejecución del sistema como tiempo, velocidad, seguridad y disponibilidad.

Ejemplo del material: un patrón cliente-servidor donde los servidores se comunican con una base de datos, la base de datos tiene una aplicación de gestión y los clientes se pueden comunicar entre ellos. Hay dos servidores, uno principal y uno de backup; si falla el principal se va al backup. No dice si la base de datos está replicada ni muestra más que la parte de ejecución. No se asemeja a UML.

## Relacionado

- [[componente]]
- [[cliente-servidor]]

## Lo mencionan

- [[componente]]
