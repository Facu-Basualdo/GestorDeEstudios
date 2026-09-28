---
titulo: "Pluggable Adapter"
tipo: concepto
tags: ["patron de diseno","adaptador","reutilizacion","adaptacion de interfaz","adapter","flexible","smalltalk","c++","delegacion","bloques"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [136,137]
veces_en_examen: 0
---

# Pluggable Adapter

> Un pluggable adapter permite adaptar un adaptee sin subclasear el adapter, mediante el uso de una interfaz estrecha y diferentes mecanismos como operaciones abstractas, delegados o bloques.

Los pluggable adapters buscan una interfaz estrecha (narrow interface) del adaptee para facilitar la adaptación. Tres enfoques:
1. **Operaciones abstractas**: El adapter define operaciones abstractas para la interfaz estrecha; subclases las implementan (ej. `DirectoryTreeDisplay` que especializa `TreeDisplay`).
2. **Delegados**: El adapter delega las solicitudes a un objeto delegado. Permite cambiar la estrategia de adaptación sustituyendo el delegado (ej. `DirectoryBrowser` como delegado de `TreeDisplay`). En lenguajes de tipado dinámico solo se necesita registrar el delegado; en C++ se requiere una interfaz explícita (ej. `TreeAccessorDelegate`).
3. **Adaptadores parametrizados**: En Smalltalk, el adapter se parametriza con bloques (closures) que adaptan cada solicitud (ej. `TreeDisplay` almacena un bloque para obtener hijos y otro para crear nodos gráficos).

## Relacionado

- [[adapter]]
- [[narrow-interface]]

## Lo mencionan

- [[adapter]]
- [[narrow-interface]]
