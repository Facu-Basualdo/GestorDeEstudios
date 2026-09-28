---
titulo: "Class Adapter"
tipo: concepto
tags: ["adapter","herencia","c++","herencia-multiple","patron-estructural"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [137,139,141]
veces_en_examen: 0
---

# Class Adapter

> Un class adapter utiliza herencia múltiple para adaptar una interfaz: hereda públicamente de la interfaz destino y privadamente de la implementación del adaptee.

En C++, un class adapter hereda públicamente de la clase Target (la interfaz que se desea) y privadamente de la clase Adaptee (la implementación existente). De esta forma, el adapter es un subtipo de Target pero no de Adaptee. Por ejemplo, la clase `TextShape` hereda públicamente de `Shape` y privadamente de `TextView`. La operación `BoundingBox` convierte la interfaz de `TextView` (origen, extensión) a la de `Shape` (caja delimitadora por esquinas opuestas). La operación `IsEmpty` simplemente reenvía la llamada a `TextView::IsEmpty()`. La operación `CreateManipulator` se implementa desde cero porque `TextView` no la soporta.

## Relacionado

- [[adapter]]
- [[object-adapter]]

## Lo mencionan

- [[two-way-adapter]]
- [[object-adapter]]
