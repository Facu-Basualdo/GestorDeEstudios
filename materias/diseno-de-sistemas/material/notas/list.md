---
titulo: "List"
tipo: concepto
tags: ["contenedor","plantilla","c++"]
temas: ["[[estudio-de-caso-editor-lexi]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [98,99,100]
veces_en_examen: 0
---

# List

> List es una plantilla de clase que proporciona un contenedor básico para almacenar una lista ordenada de objetos.

List almacena elementos por valor, funcionando tanto para tipos nativos como para instancias de clase. Por ejemplo, List<int> declara una lista de enteros. La mayoría de los patrones usan List<Item*> para listas heterogéneas. Proporciona operaciones de acceso (Count, Get, First, Last, Includes), adición (Append, Prepend), eliminación (Remove, RemoveFirst, RemoveLast, RemoveAll), y un interface de pila (Top, Push, Pop). También tiene constructores, destructor y operador de asignación.

## Relacionado

- [[iterator]]

## Lo mencionan

- [[iterator]]
- [[listiterator]]
