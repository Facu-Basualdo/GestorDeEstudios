---
titulo: "Distance"
tipo: concepto
tags: ["distancia","dependencias","integracion","interfaces"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [135]
veces_en_examen: 0
---

# Distance

> La distancia entre componentes es qué tan alineados están respecto de cómo cooperan para llevar a cabo una interacción con éxito, y representa la dificultad de resolver las diferencias en cada dependencia.

El concepto de "distancia" es útil para entender las dependencias entre componentes. A medida que los componentes interactúan, hay que considerar qué tan alineados están respecto de cómo cooperan para que la interacción sea exitosa. La distancia puede significar:

- **Syntactic distance**: los elementos deben acordar el número y tipo de datos compartidos.
- **Data semantic distance**: los elementos deben acordar la semántica de los datos, aunque compartan el mismo tipo.
- **Behavioral semantic distance**: los elementos deben acordar el comportamiento, especialmente los estados y modos del sistema.
- **Temporal distance**: los elementos deben acordar suposiciones sobre el tiempo.
- **Resource distance**: los elementos deben acordar suposiciones sobre recursos compartidos.

Estos detalles no suelen mencionarse en una descripción de interfaz de lenguaje de programación. En el contexto organizacional, las interfaces implícitas no declaradas agregan tiempo y complejidad a las tareas de integración, modificación y debugging. Por eso las interfaces son un tema arquitectónico.

En esencia, la integrabilidad consiste en discernir y salvar la distancia entre los elementos de cada dependencia potencial. Esto es una forma de planificar para la modificabilidad.

## Relacionado

- [[syntactic-distance]]
- [[data-semantic-distance]]
- [[behavioral-semantic-distance]]
- [[temporal-distance]]
- [[resource-distance]]
- [[modifiability]]

## Lo mencionan

- [[integration-difficulty]]
- [[integrability-tactics]]
- [[encapsulate]]
