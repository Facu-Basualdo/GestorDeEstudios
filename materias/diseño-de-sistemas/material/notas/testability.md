---
titulo: "Testability"
tipo: concepto
tags: ["testabilidad","arquitectura","pruebas","calidad"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [233]
veces_en_examen: 0
---

# Testability

> Testability es la facilidad con la que el software puede demostrar sus fallas mediante pruebas, generalmente basadas en ejecución.

Específicamente, testability se refiere a la probabilidad, asumiendo que el software tiene al menos un fallo, de que falle en su próxima ejecución de prueba. Un sistema es testeable si "revela" sus fallas fácilmente. Calcular esa probabilidad no es sencillo, por lo que en la práctica se usan otras medidas.

Según el modelo de testing, un programa procesa entradas y produce salidas; un oracle decide si la salida es correcta. Para que un sistema sea propiamente testeable, debe ser posible controlar las entradas de cada componente (y posiblemente manipular su estado interno) y observar sus salidas (y posiblemente su estado interno). Frecuentemente ese control y observación se realiza mediante un test harness.

La arquitectura puede mejorar la testability facilitando tanto replicar un bug como acotar sus posibles causas raíz. Una parte sustancial del costo de desarrollar sistemas bien diseñados se debe a las pruebas, así que reducir ese costo tiene un gran beneficio. El testing de código es un caso especial de validation.

## Relacionado

- [[oracle]]
- [[test-harness]]
- [[netflix-simian-army]]
- [[fault-injection]]
- [[controllability]]
- [[observability]]
- [[validation]]

## Lo mencionan

- [[deployability]]
- [[oracle]]
- [[test-harness]]
- [[netflix-simian-army]]
- [[fault-injection]]
- [[testability-general-scenario]]
- [[tactics-for-testability]]
- [[controllability]]
- [[observability]]
- [[validation]]
