---
titulo: "Object Adapter"
tipo: concepto
tags: ["adapter","composicion","c++","delegacion","patron-estructural"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [139,141]
veces_en_examen: 0
---

# Object Adapter

> Un object adapter utiliza composición de objetos para adaptar una interfaz: el adapter mantiene una referencia al adaptee y delega las llamadas.

En C++, un object adapter contiene un puntero a una instancia del adaptee. Por ejemplo, la clase `TextShape` almacena un puntero `_text` a un objeto `TextView`. La operación `BoundingBox` obtiene origen y extensión a través de `_text->GetOrigin()` y `_text->GetExtent()`. La operación `IsEmpty` delega en `_text->IsEmpty()`. El constructor recibe el puntero al adaptee. Este enfoque es más flexible que el class adapter porque funciona con cualquier subclase de `TextView` sin necesidad de modificar el adapter. `CreateManipulator` se implementa igual que en el class adapter.

## Relacionado

- [[adapter]]
- [[class-adapter]]

## Lo mencionan

- [[class-adapter]]
