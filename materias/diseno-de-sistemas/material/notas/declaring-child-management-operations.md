---
titulo: "Declaring child management operations"
tipo: concepto
tags: ["composite","gestion-hijos","seguridad","transparencia"]
temas: ["[[patrones-estructurales]]"]
fuente: "Design Patterns - Elements Of Reusable Object-Oriented Software-1998 (1).pdf"
paginas: [185,186]
veces_en_examen: 0
---

# Declaring child management operations

> Declarar las operaciones de gestión de hijos en Component o en Composite implica un equilibrio entre transparencia y seguridad.

Aunque la clase Composite implementa las operaciones Add y Remove para gestionar hijos, una cuestión importante en el patrón Composite es qué clases declaran estas operaciones en la jerarquía de clases Composite. ¿Deberíamos declarar estas operaciones en Component y hacerlas significativas para las clases Leaf, o deberíamos declararlas y definirlas solo en Composite y sus subclases? La decisión implica un equilibrio entre seguridad y transparencia:
- Definir la interfaz de gestión de hijos en la raíz de la jerarquía de clases proporciona transparencia, porque se pueden tratar todos los componentes de manera uniforme. Cuesta seguridad, sin embargo, porque los clientes pueden intentar hacer cosas sin sentido como agregar y eliminar objetos de las hojas.
- Definir la gestión de hijos en la clase Composite proporciona seguridad, porque cualquier intento de agregar o eliminar objetos de las hojas será detectado en tiempo de compilación en un lenguaje de tipado estático como C++. Pero se pierde transparencia, porque las hojas y los composites tienen interfaces diferentes.
En este patrón se ha enfatizado la transparencia sobre la seguridad. Se puede usar una operación GetComposite en Component que devuelve un puntero nulo por defecto, y Composite la redefine para devolverse a sí mismo, permitiendo verificar si un componente es composite antes de realizar operaciones de gestión de hijos. También se puede usar dynamic_cast en C++. El único camino para proporcionar transparencia es definir operaciones Add y Remove predeterminadas en Component, pero esto introduce la posibilidad de fallo; generalmente es mejor hacer que Add y Remove fallen por defecto (por ejemplo, lanzando una excepción). Otra alternativa es cambiar el significado de Remove para que un componente se elimine a sí mismo de su padre, pero Add no tiene una interpretación significativa correspondiente.


