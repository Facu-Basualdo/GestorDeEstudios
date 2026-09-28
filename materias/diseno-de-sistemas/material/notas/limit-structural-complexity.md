---
titulo: "Limit Structural Complexity"
tipo: concepto
tags: ["testability","complejidad","acoplamiento","herencia","arquitectura"]
temas: ["[[atributos-de-calidad-y-tacticas]]"]
fuente: "Len Bass_ Paul Clements_ Rick Kazman - Software Architecture in Practice, 4th Edition-Addison-Wesley Professional (2021)_compressed.pdf"
paginas: [242]
veces_en_examen: 0
---

# Limit Structural Complexity

> Táctica de testability que evita o resuelve dependencias cíclicas, aísla dependencias del entorno externo y reduce el acoplamiento entre componentes.

Incluye simplificar la jerarquía de herencia en sistemas orientados a objetos:
- Limitar el número de clases de las que deriva una clase o el número de clases derivadas de una clase.
- Limitar la profundidad del árbol de herencia y el número de hijos de una clase.
- Limitar el polimorfismo y las llamadas dinámicas.

Mantener baja la métrica response of a class puede aumentar la testability. La alta cohesión, el bajo acoplamiento y la separación de concerns también ayudan. En un layered pattern se pueden probar primero las capas inferiores y luego las superiores con confianza. Métricas de acoplamiento a nivel de arquitectura, como propagation cost y decoupling level, permiten medir y seguir el nivel general de acoplamiento.

## Relacionado

- [[limit-complexity]]
- [[response-of-a-class]]
- [[decoupling-level]]

## Lo mencionan

- [[limit-complexity]]
- [[response-of-a-class]]
